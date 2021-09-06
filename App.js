import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {Provider as NoteProvider} from './src/context/NoteContext';
import {navigationRef} from './src/RootNavigation';

//Navigatiors
import Main from './src/Navigators/Main';

export default function App() {
  return (
    <NoteProvider>
      <AuthProvider>
        <NavigationContainer ref={navigationRef}>
          <Main />
        </NavigationContainer>
      </AuthProvider>
    </NoteProvider>
  );
}
