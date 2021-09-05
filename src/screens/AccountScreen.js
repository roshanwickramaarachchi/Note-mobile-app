import React, {useContext} from 'react';
import {View, StyleSheet, Text, ScrollView, Dimensions} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import EasyButton from '../components/EasyButton';

var {width} = Dimensions.get('window');

const accountScreen = () => {
  const {signout} = useContext(AuthContext);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <EasyButton large danger onPress={signout}>
          <Text style={{color: 'white'}}>Sign Out</Text>
        </EasyButton>
      </View>
    </ScrollView>
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

export default accountScreen;
