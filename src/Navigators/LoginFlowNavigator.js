import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignInScreen from '../screens/SignInscreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sing In" component={SignInScreen} />
      <Stack.Screen name="Sing Up" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

export default function LoginFlowNavigator() {
  return <MyStack />;
}
