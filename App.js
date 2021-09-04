import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

//Navigatiors
import Main from './src/Navigators/Main';


export default function App() {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
}
