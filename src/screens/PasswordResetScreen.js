import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Text, ScrollView, Dimensions} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Context as AuthContext} from '../context/AuthContext';
import Input from '../components/Input';
import EasyButton from '../components/EasyButton';
import Spinner from 'react-native-loading-spinner-overlay';
import Error from '../components/Error';

var {width} = Dimensions.get('window');

const PasswordResetScreen = () => {
  const {state, resetPassword, clearErrorMessage} = useContext(AuthContext);

  return (
    <View>
      <Text>PasswordResetScreen</Text>
    </View>
  );
};

const syles = StyleSheet.create({}); 

export default PasswordResetScreen;
