import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Text, ScrollView, Dimensions} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Context as AuthContext} from '../context/AuthContext';
import Input from '../components/Input';
import EasyButton from '../components/EasyButton';
import Spinner from 'react-native-loading-spinner-overlay';
import Error from '../components/Error';

var {width} = Dimensions.get('window');

const PasswordResetScreen = ({navigation}) => {
  const {state, resetPassword, clearErrorMessage} = useContext(AuthContext);

  const [password, setPassword] = useState('');
  const [secretKey, setSecretKey] = useState('');

  // when the screen goes out of focus, error message will hide
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      clearErrorMessage();
    });
    return unsubscribe;
  }, []);

  return (
    <KeyboardAwareScrollView>
      <Spinner visible={state.isLoading} />

      <View style={styles.container}>
        <Text style={styles.title}>Password Reset Screen</Text>

        {state.errorMessage ? <Error message={state.errorMessage} /> : null}

        <Text>Please check your emails </Text>

        <Input
          placeholder={'Enter Secret Key'}
          value={secretKey}
          onChangeText={setSecretKey}
          autoCorrect={false}
        />

        <Input
          placeholder={'Enter New Password'}
          value={password}
          onChangeText={setPassword}
          autoCorrect={false}
        />

        <View>
          <EasyButton
            large
            primary
            onPress={() => resetPassword({secretKey, password})}>
            <Text style={{color: 'white'}}>Reset Password</Text>
          </EasyButton>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    // marginBottom: 300,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
  },
});

export default PasswordResetScreen;
