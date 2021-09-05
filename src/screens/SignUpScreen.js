import React, {useState, useContext} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  ScrollView,
  Dimensions,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AuthForm from '../components/AuthForm';
var {width} = Dimensions.get('window');
import {Context as AuthContext} from '../context/AuthContext';

const SignUpScreen = ({navigation}) => {
  const {state, signup} = useContext(AuthContext);

  return (
    <KeyboardAwareScrollView>
      <ScrollView contentContainerStyle={styles.container}>
        <AuthForm
          headerText="Sign Up "
          errorMessage={state.errorMessage}
          submitButtonText="Sign Up"
          onSubmit={signup}
        />
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 400,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignUpScreen;
