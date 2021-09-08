import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignInScreen from '../screens/SignInscreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import PasswordResetScreen from '../screens/PasswordResetScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Sing In"
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Sing Up"
        component={SignUpScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Forgot Password"
        component={ForgotPasswordScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Password Reset"
        component={PasswordResetScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function LoginFlowNavigator() {
  return <MyStack />;
}
