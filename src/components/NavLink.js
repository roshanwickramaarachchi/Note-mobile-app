import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import * as RootNavigation from '../RootNavigation';

const NavLink = ({routeName}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => RootNavigation.navigate(routeName)}>
        <Text style={styles.link}>Forgot Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  link: {
    color: 'blue',
    fontSize: 20,
  },
  container: {
    marginTop: 30,
    alignItems: 'center',
  },
});

export default NavLink;
