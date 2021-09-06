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
      return action.payload;
    default:
      return state;
  }
};

const getNotes = dispatch => async () => {
  try {
    const response = await axios({
      method: 'get',
      url: `${BASE_URL}/api/v1/notes`,
    });
    //console.log(response.data);
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
  [],
);
