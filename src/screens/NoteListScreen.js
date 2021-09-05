import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const NoteListScreen = ({navigation}) => {
  return (
    <View>
      <Text>NoteListScreen</Text>
      <Button title="button" onPress={() => navigation.navigate('Note')} />
    </View>
  );
};

const syles = StyleSheet.create({}); 

export default NoteListScreen;
