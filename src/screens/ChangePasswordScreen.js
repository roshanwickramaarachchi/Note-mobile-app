import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Text, ScrollView, Dimensions} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Context as AuthContext} from '../context/AuthContext';
import Input from '../components/Input';
import EasyButton from '../components/EasyButton';
import Spinner from 'react-native-loading-spinner-overlay';
import Error from '../components/Error';

var {width} = Dimensions.get('window');

const ChangePasswordScreen = ({navigation}) => {
  const {state, changePassword, clearErrorMessage} = useContext(AuthContext);

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

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
        <Text style={styles.title}>Password Change </Text>

        {state.errorMessage ? <Error message={state.errorMessage} /> : null}

        <Text>Please enter your current password </Text>

        <Input
          placeholder={'Enter Current Password'}
          value={currentPassword}
          onChangeText={setCurrentPassword}
          autoCorrect={false}
        />

        <Text>Please enter your new password </Text>

        <Input
          placeholder={'Enter New Password'}
          value={newPassword}
          onChangeText={setNewPassword}
          autoCorrect={false}
        />

        <View>
          <EasyButton
            large
            primary
            onPress={() => changePassword({currentPassword, newPassword})}>
            <Text style={{color: 'white'}}>Change Password</Text>
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

export default ChangePasswordScreen;
