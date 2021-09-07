import createDataContext from './createDataContext';
import {BASE_URL} from '../api/note';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RootNavigation from '../RootNavigation';

const noteReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload, isLoading: false};
    case 'clear_error_message':
      return {...state, errorMessage: ''};
    case 'get_notes':
      return {errorMessage: '', notesData: action.payload, isLoading: false};
    case 'delete_note':
      return {
        errorMessage: '',
        notesData: state.notesData.filter(note => note._id !== action.payload),
        isLoading: false,
      };
    case 'create_note':
      return {...state, errorMessage: '', isLoading: false};
    case 'update_note':
      return {...state, errorMessage: '', isLoading: false};
    case 'is_loading':
      return {...state, isLoading: true};
    default:
      return state;
  }
};

//error message clean
const clearErrorMessage = dispatch => () => {
  dispatch({type: 'clear_error_message'});
};

//get all notes login user
const getNotes = dispatch => async () => {
  try {
    dispatch({type: 'is_loading'});
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
    //console.log(response.data.data);
    dispatch({type: 'get_notes', payload: response.data.data});
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with get notes list',
    });
    console.log('get note list error: ', err);
  }
};

//delte a note
const deleteNote = dispatch => async id => {
  try {
    dispatch({type: 'is_loading'});
    var token = await AsyncStorage.getItem('token');
    await axios({
      method: 'delete',
      url: `${BASE_URL}/api/v1/notes/${id}`,
      headers: {
        Authorization: 'Bearer ' + token,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    //console.log(response.data);
    dispatch({type: 'delte_note', payload: id});
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with delte a note',
    });
    console.log('delete a note error: ', err);
  }
};

//create a note
// eslint-disable-next-line prettier/prettier
const createNote = dispatch => async ({name, content}) => {
    try {
      dispatch({type: 'is_loading'});
      var token = await AsyncStorage.getItem('token');
      await axios({
        method: 'post',
        url: `${BASE_URL}/api/v1/notes`,
        headers: {
          Authorization: 'Bearer ' + token,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        data: {
          name,
          content,
        },
      });
      dispatch({type: 'create_note'});
      RootNavigation.navigate('Note List');
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with create a note',
      });
      console.log('create a note error: ', err);
    }
  };

//update a note
// eslint-disable-next-line prettier/prettier
const updateNote = dispatch => async ({noteId,name, content}) => {
    try {
      dispatch({type: 'is_loading'});
      var token = await AsyncStorage.getItem('token');
      await axios({
        method: 'put',
        url: `${BASE_URL}/api/v1/notes/${noteId}`,
        headers: {
          Authorization: 'Bearer ' + token,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        data: {
          name,
          content,
        },
      });
      dispatch({type: 'update_note'});
      RootNavigation.navigate('NoteList');
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with update a note',
      });
      console.log('updat a note error: ', err);
    }
  };

export const {Provider, Context} = createDataContext(
  noteReducer,
  {getNotes, deleteNote, createNote, updateNote, clearErrorMessage},
  {notesData: [], errorMessage: '', isLoading: true},
);
