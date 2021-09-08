import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Text, Dimensions , Button} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Context as AuthContext} from '../context/AuthContext';
import Input from '../components/Input';
import EasyButton from '../components/EasyButton';
import Spinner from 'react-native-loading-spinner-overlay';
import Error from '../components/Error';

var {width} = Dimensions.get('window');

const ForgotPasswordScreen = ({navigation}) => {
  const {state, forgotPassword, clearErrorMessage} = useContext(AuthContext);

  const [email, setEmail] = useState('');

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
        <Text style={styles.title}>Enter Your Email</Text>

        {state.errorMessage ? <Error message={state.errorMessage} /> : null}

        <Input
          placeholder={'Enter Email'}
          value={email}
          onChangeText={setEmail}
          autoCorrect={false}
        />

        <View>
          <EasyButton large primary onPress={() => forgotPassword({email})}>
            <Text style={{color: 'white'}}>Send</Text>
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

export default ForgotPasswordScreen;
