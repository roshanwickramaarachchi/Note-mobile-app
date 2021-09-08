import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import AccountScreen from '../screens/AccountScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="AccountScreen">
      <Stack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Change Password"
        component={ChangePasswordScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function AccountFlowNavigator() {
  return <MyStack />;
}
