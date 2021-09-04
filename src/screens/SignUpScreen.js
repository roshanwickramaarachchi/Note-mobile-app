import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const SignUpScreen = ({navigation}) => {
  return (
    <View>
      <Text>SignUpScreen</Text>
      <Button title="button" onPress={() => navigation.navigate('Main Flow')} />
    </View>
  );
};

const syles = StyleSheet.create({}); 

export default SignUpScreen;
