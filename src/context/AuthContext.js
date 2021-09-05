import createDataContext from './createDataContext';
import {BASE_URL} from '../api/note';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RootNavigation from '../RootNavigation';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload};
    case 'signin':
      return {errorMessage: '', token: action.payload};
    default:
      return state;
  }
};

// eslint-disable-next-line prettier/prettier
const signup = dispatch => async ({ email, password }) => {
    try {
      const response = await axios({
        method: 'post',
        url: `${BASE_URL}/api/v1/auth/register`,
        data: {
          email,
          password,
        },
      });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({type: 'signin', payload: response.data.token});
      //   if sign up complete then navigate to Main Flow(create note screen)
      RootNavigation.navigate('Main Flow');
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign up',
      });
      console.log('sign up error: ', err);
    }
  };

// eslint-disable-next-line prettier/prettier
  const signin = dispatch => async ({ email, password }) => {
    try {
      const response = await axios({
        method: 'post',
        url: `${BASE_URL}/api/v1/auth/login`,
        data: {
          email,
          password,
        },
      });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({type: 'signin', payload: response.data.token});
      //   if sign up complete then navigate to Main Flow(create note screen)
      RootNavigation.navigate('Main Flow');
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign in',
      });
      console.log('sign in error: ', err);
    }
  };

export const {Provider, Context} = createDataContext(
  authReducer,
  {signup, signin},
  {token: null, errorMessage: ''},
);
