import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import * as RootNavigation from '../RootNavigation';

const NavLink = ({routeName, text}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => RootNavigation.navigate(routeName)}>
        <Text style={styles.link}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  link: {
    color: 'blue',
    fontSize: 15,
  },
  container: {
    marginTop: 30,
    alignItems: 'center',
  },
});

export default NavLink;
