import React, {useState} from 'react';
import {StyleSheet, TextInput, Button, Text, View} from 'react-native';
import EasyButton from './EasyButton';
import Error from './Error';
import {useValidation} from 'react-native-form-validator';

const AuthForm = ({
  headerText,
  onSubmit,
  submitButtonText,
  errorMessage,
  message,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidatePassword, setIsValidatePassword] = useState(true);
  const [emailValidError, setEmailValidError] = useState('');

  const {validate, isFieldInError, getErrorsInField, getErrorMessages} =
    useValidation({
      state: {email, password},
    });

  const _onPressButton = () => {
    validate({
      password: {
        minlength: 6,
        maxlength: 20,
        required: true,
      },
      email: {email: true, required: true},
    });
  };

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
          //_onPressButton();
        }}
      />

      {emailValidError ? (
        <Text style={styles.text}>{emailValidError}</Text>
      ) : null}

      {/* {isFieldInError('email') &&
        getErrorsInField('email').map((errorMessage, index) => (
          <Text key={index}>{errorMessage}</Text>
        ))} */}

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
            _onPressButton();
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
