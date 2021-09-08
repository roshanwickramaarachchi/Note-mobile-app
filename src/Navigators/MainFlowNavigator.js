import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import NoteFlowNavigator from './NoteFlowNavigator';
import NoteCreateScreen from '../screens/NoteCreateScreen';
import AccountFlowNavigator from './AccountFlowNavigation';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Note List"
      screenOptions={{
        headerShown: false,
        keyboardHidesTabBar: true,
        showLabel: false,
      }}>
      <Tab.Screen
        name="Note List"
        component={NoteFlowNavigator}
        options={{
          tabBarIcon: () => <Icon name="list-ul" color="orange" size={30} />,
        }}
      />
      <Tab.Screen
        name="Note Create "
        component={NoteCreateScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="plus-square" color="orange" size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountFlowNavigator}
        options={{
          tabBarIcon: () => <Icon name="user" color="orange" size={30} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default function MainFlowNavigator() {
  return <MyTabs />;
}
