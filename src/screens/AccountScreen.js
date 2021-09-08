import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, Text, ScrollView, Dimensions} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import EasyButton from '../components/EasyButton';
import NavLink from '../components/NavLink';
import Error from '../components/Error';

var {width} = Dimensions.get('window');

const AccountScreen = ({navigation}) => {
  const {state, signout, clearErrorMessage} = useContext(AuthContext);

  // when the screen goes out of focus, error message will hide
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      clearErrorMessage();
    });
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      {state.errorMessage ? <Error message={state.errorMessage} /> : null}

      <View>
        <EasyButton large danger onPress={signout}>
          <Text style={{color: 'white'}}>Sign Out</Text>
        </EasyButton>
      </View>

      <View>
        <NavLink routeName="Change Password" text="Change Password" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    //marginBottom: 400,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AccountScreen;
