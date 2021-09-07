import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, Text, ScrollView, Dimensions} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Context} from '../context/NoteContext';
import Spinner from 'react-native-loading-spinner-overlay';
import NoteForm from '../components/NoteForm';
var {width} = Dimensions.get('window');

const NoteCreateScreen = () => {
  const {state, createNote} = useContext(Context);

  return (
    <KeyboardAwareScrollView>
      <ScrollView contentContainerStyle={styles.container}>
        <Spinner visible={state.isLoading} />
        <NoteForm
          headerText="Note Create"
          errorMessage={state.errorMessage}
          onSubmit={createNote}
        />
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 30,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NoteCreateScreen;
