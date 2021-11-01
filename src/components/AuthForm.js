import React, {useState, useEffect} from 'react';
import {StyleSheet, TextInput, Button, Text, View} from 'react-native';
import EasyButton from './EasyButton';
import Error from './Error';

const AuthForm = ({
  headerText,
  onSubmit,
  submitButtonText,
  errorMessage,
  message,
  navigation,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidatePassword, setIsValidatePassword] = useState(true);
  const [emailValidError, setEmailValidError] = useState('');
  
  //when load screen remove input fields
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setEmail('');
      setPassword('');
    });
    return unsubscribe;
  }, []);

  const handleValidEmail = val => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (val.length === 0) {
      setEmailValidError('email address must be enter');
    } else if (reg.test(val) === false) {
      setEmailValidError('enter valid email address');
    } else if (reg.test(val) === true) {
      setEmailValidError('');
    }
  };

  const handleValidPassword = val => {
    if (val.length >= 6) {
      setIsValidatePassword(true);
    } else {
      setIsValidatePassword(false);
    }
  };

  return (
    <>
      <Text style={styles.title}>{headerText}</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={value => {
          setEmail(value);
          handleValidEmail(value);
        }}
      />

      {emailValidError ? (
        <Text style={styles.text}>{emailValidError}</Text>
      ) : null}

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={value => {
          setPassword(value);
          handleValidPassword(value);
        }}
        secureTextEntry={true}
      />

      {isValidatePassword ? null : (
        <Text style={styles.text}>
          password must be atleast 6 cheracter long.
        </Text>
      )}

      {message ? alert(message) : null}

      {/* error message */}
      {errorMessage ? <Error message={errorMessage} /> : null}

      {/* <Text>{getErrorMessages()}</Text> */}

      {/* sign up and sign in button */}
      <View>
        <EasyButton
          large
          primary
          onPress={() => {
            onSubmit({email, password});
          }}>
          <Text style={{color: 'white'}}>{submitButtonText}</Text>
        </EasyButton>
      </View>
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
  title: {
    fontSize: 30,
  },
  text: {
    color: 'red',
  },
});

export default AuthForm;
