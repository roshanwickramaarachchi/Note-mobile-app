import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import NoteListScreen from '../screens/NoteListScreen';
import NoteScreen from '../screens/NoteScreen';
import NoteEditScreen from '../screens/NoteEditScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="NoteList">
      <Stack.Screen
        name="NoteList"
        component={NoteListScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Note"
        component={NoteScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Note Edit" component={NoteEditScreen} />
    </Stack.Navigator>
  );
}

export default function NoteFlowNavigator() {
  return <MyStack />;
}
