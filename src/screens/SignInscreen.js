import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {Text, Input} from 'react-native-elements';

const SignInScreen = ({navigation}) => {
  return (
    <View>
      <Text>SignInScreen</Text>
      <Button
        title="go to sign up"
        onPress={() => navigation.navigate('Sing Up')}
      />
    </View>
  );
};

const syles = StyleSheet.create({});

export default SignInScreen;
