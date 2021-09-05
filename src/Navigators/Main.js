import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//stacks
import SplashScreen from '../screens/SplashScreen';
import LoginFlowNavigator from './LoginFlowNavigator';
import MainFlowNavigator from './MainFlowNavigator';

const Stack = createStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login Flow"
        component={LoginFlowNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Main Flow"
        component={MainFlowNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Main;
