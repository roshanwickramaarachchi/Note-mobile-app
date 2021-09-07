import React, {useContext, useEffect} from 'react';
import {StyleSheet, ScrollView, Dimensions} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Context} from '../context/NoteContext';
import Spinner from 'react-native-loading-spinner-overlay';
import NoteForm from '../components/NoteForm';
var {width} = Dimensions.get('window');

const NoteCreateScreen = ({navigation}) => {
  const {state, createNote, clearErrorMessage} = useContext(Context);

  // when the screen goes out of focus, error message will hide
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      clearErrorMessage();
    });
    return unsubscribe;
  }, []);

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
