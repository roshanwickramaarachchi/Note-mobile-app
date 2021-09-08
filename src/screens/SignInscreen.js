import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, Text, ScrollView, Dimensions} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AuthForm from '../components/AuthForm';
import {Context as AuthContext} from '../context/AuthContext';
import EasyButton from '../components/EasyButton';
import Spinner from 'react-native-loading-spinner-overlay';
import NavLink from '../components/NavLink';

var {width} = Dimensions.get('window');

const SignInScreen = ({navigation}) => {
  const {state, signin, clearErrorMessage} = useContext(AuthContext);

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
      <ScrollView contentContainerStyle={styles.container}>
        <AuthForm
          headerText="Sign In "
          errorMessage={state.errorMessage}
          submitButtonText="Sign In"
          onSubmit={signin}
        />

        <View>
          <EasyButton
            large
            secondary
            onPress={() => navigation.navigate('Sing Up')}>
            <Text style={{color: 'white'}}>Back to sign up</Text>
          </EasyButton>

          <NavLink routeName="Forgot Password" />
        </View>
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

export default SignInScreen;
