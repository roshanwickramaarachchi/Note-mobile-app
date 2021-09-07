import createDataContext from './createDataContext';
import {BASE_URL} from '../api/note';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RootNavigation from '../RootNavigation';

const noteReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload};
    case 'get_notes':
      return {errorMessage: '', notesData: action.payload};
    //   return action.payload;
    default:
      return state;
  }
};
//get all notes login user
const getNotes = dispatch => async () => {
  try {
    var token = await AsyncStorage.getItem('token');
    const responseUser = await axios({
      method: 'get',
      url: `${BASE_URL}/api/v1/auth/me`,
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    //console.log(responseUser.data.data._id)
    const logUserId = responseUser.data.data._id;

    const response = await axios({
      method: 'get',
      url: `${BASE_URL}/api/v1/notes?user=${logUserId}`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data.data);
    dispatch({type: 'get_notes', payload: response.data.data});
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with get notes list',
    });
    console.log('get note list error: ', err);
  }
};

export const {Provider, Context} = createDataContext(
  noteReducer,
  {getNotes},
  {notesData: [], errorMessage: ''},
);
