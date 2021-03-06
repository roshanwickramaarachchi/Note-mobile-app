import React, {useContext, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  BackHandler,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AuthForm from '../components/AuthForm';
import {Context as AuthContext} from '../context/AuthContext';
import EasyButton from '../components/EasyButton';
import {useFocusEffect} from '@react-navigation/native';

var {width} = Dimensions.get('window');

const SignUpScreen = ({navigation}) => {
  const {state, signup, clearErrorMessage} = useContext(AuthContext);

  // when the screen goes out of focus, error message will hide
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      clearErrorMessage();
    });
    return unsubscribe;
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );

  return (
    <KeyboardAwareScrollView>
      <ScrollView contentContainerStyle={styles.container}>
        <AuthForm
          headerText="Sign Up "
          errorMessage={state.errorMessage}
          submitButtonText="Sign Up"
          onSubmit={signup}
          message={state.message}
          navigation={navigation}
        />

        <View>
          <EasyButton
            large
            secondary
            onPress={() => navigation.navigate('Sing In')}>
            <Text style={{color: 'white'}}>Back to signin</Text>
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

export default SignUpScreen;
