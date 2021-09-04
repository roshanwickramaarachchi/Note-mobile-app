import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const SignInScreen = ({navigation}) => {
  return (
    <View>
      <Text>SignInScreen</Text>
      <Button title="button" onPress={() => navigation.navigate('Sing Up')} />
    </View>
  );
};

const syles = StyleSheet.create({});

export default SignInScreen;
