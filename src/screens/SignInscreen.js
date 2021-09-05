import React, {useContext} from 'react';
import {View, StyleSheet, Text, ScrollView, Dimensions} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AuthForm from '../components/AuthForm';
var {width} = Dimensions.get('window');
import {Context as AuthContext} from '../context/AuthContext';
import EasyButton from '../components/EasyButton';

const SignInScreen = ({navigation}) => {
  const {state, signin} = useContext(AuthContext);

  return (
    <KeyboardAwareScrollView>
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
