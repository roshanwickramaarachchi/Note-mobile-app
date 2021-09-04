import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import NoteFlowNavigator from './NoteFlowNavigator';
import NoteCreateScreen from '../screens/NoteCreateScreen';
import AccountScreen from '../screens/AccountScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Note Flow " component={NoteFlowNavigator} />
      <Tab.Screen name="Note Create " component={NoteCreateScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

export default function MainFlowNavigator() {
  return <MyTabs />;
}
