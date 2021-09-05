import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';

const SplashScreen = () => {
  const {tryLocalSignin} = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, [1000]);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/image.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default SplashScreen;
