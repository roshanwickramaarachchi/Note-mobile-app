import React from 'react';
import {StyleSheet, TextInput, Text} from 'react-native';

const Input = ({placeholder, value, autoCorrect, onChangeText}) => {
  return (
    <>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        autoCorrect={autoCorrect}
        autoCapitalize="none"
        onChangeText={onChangeText}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 60,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 20,
    padding: 10,
    borderWidth: 2,
    borderColor: 'orange',
  },
});

export default Input;
