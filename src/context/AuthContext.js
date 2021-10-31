import createDataContext from './createDataContext';
import {BASE_URL} from '../api/note';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RootNavigation from '../RootNavigation';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload, isLoading: false};
    case 'signin':
      return {errorMessage: '', token: action.payload, isLoading: false};
    case 'clear_error_message':
      return {...state, errorMessage: '', message: ''};
    case 'signout':
      return {token: null, errorMessage: '', isLoading: false};
    case 'is_loading':
      return {...state, isLoading: true};
    case 'forgot_password':
      return {errorMessage: '', isLoading: false};
    case 'reset_password':
      return {errorMessage: '', isLoading: false};
    case 'change_password':
      return {errorMessage: '', isLoading: false};
    case 'alert':
      return {errorMessage: '', message: action.payload, isLoading: false};
    default:
      return state;
  }
};
//check whether token is in async storage
const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  //console.log(token);
  if (token) {
    dispatch({type: 'signin', payload: token});
    RootNavigation.navigate('Main Flow');
  } else {
    RootNavigation.navigate('Login Flow');
  }
};
//error message clean
const clearErrorMessage = dispatch => () => {
  dispatch({type: 'clear_error_message'});
};

// eslint-disable-next-line prettier/prettier
const signup = dispatch => async ({ email, password }) => {
    try {
      dispatch({type: 'is_loading'});
      const response = await axios({
        method: 'post',
        url: `${BASE_URL}/api/v1/auth/register`,
        data: {
          email,
          password,
        },
      });
      //await AsyncStorage.setItem('token', response.data.token);
      //dispatch({type: 'signin', payload: response.data.token});
      dispatch({type: 'alert', payload: 'check your emails and login'});
      //   if sign up complete then navigate to Sing In screen(create note screen)
      RootNavigation.navigate('Sing In');
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
      dispatch({type: 'is_loading'});
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
//romove token from async storage
const signout = dispatch => async () => {
  try {
    dispatch({type: 'is_loading'});
    await AsyncStorage.removeItem('token');
    dispatch({type: 'signout'});
    RootNavigation.navigate('Login Flow');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign out',
    });
    console.log('sign out error: ', err);
  }
};

// eslint-disable-next-line prettier/prettier
const forgotPassword = dispatch => async ({ email }) => {
    try {
      dispatch({type: 'is_loading'});
      await axios({
        method: 'post',
        url: `${BASE_URL}/api/v1/auth/forgotPassword`,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        data: {
          email,
        },
      });
      dispatch({type: 'forgot_password'});

      RootNavigation.navigate('Password Reset');
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with forgot password',
      });
      console.log('forgot password error: ', err);
    }
  };

// eslint-disable-next-line prettier/prettier
const resetPassword = dispatch => async ({ secretKey, password }) => {
    try {
      dispatch({type: 'is_loading'});
      await axios({
        method: 'put',
        url: `${BASE_URL}/api/v1/auth/resetPassword/${secretKey}`,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        data: {
          password,
        },
      });
      dispatch({type: 'forgot_password'});

      RootNavigation.navigate('Sing In');
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with reset password',
      });
      console.log('reset password error: ', err);
    }
  };

// eslint-disable-next-line prettier/prettier
const changePassword = dispatch => async ({ currentPassword, newPassword }) => {
    try {
      dispatch({type: 'is_loading'});
      var token = await AsyncStorage.getItem('token');
      await axios({
        method: 'put',
        url: `${BASE_URL}/api/v1/auth/updatePassword`,
        headers: {
          Authorization: 'Bearer ' + token,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        data: {
          currentPassword,
          newPassword,
        },
      });
      dispatch({type: 'change_password'});

      RootNavigation.navigate('AccountScreen');
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with change password',
      });
      console.log('change password error: ', err);
    }
  };

export const {Provider, Context} = createDataContext(
  authReducer,
  {
    signup,
    signin,
    signout,
    clearErrorMessage,
    tryLocalSignin,
    forgotPassword,
    resetPassword,
    changePassword,
  },
  {token: null, errorMessage: '', isLoading: false, message: ''},
);
