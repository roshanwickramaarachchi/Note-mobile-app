import React, {useContext, useEffect} from 'react';
import {StyleSheet, ScrollView, Dimensions} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Context} from '../context/NoteContext';
import Spinner from 'react-native-loading-spinner-overlay';
import NoteForm from '../components/NoteForm';
var {width} = Dimensions.get('window');

const NoteScreen = props => {
  const {state, updateNote, clearErrorMessage} = useContext(Context);

  const noteData = props.route.params.item; 

  // when the screen goes out of focus, error message will hide
  useEffect(() => {
    const unsubscribe = props.navigation.addListener('blur', () => {
      clearErrorMessage();
    });
    return unsubscribe;
  }, []);

  return (
    <KeyboardAwareScrollView>
      <ScrollView contentContainerStyle={styles.container}>
        <Spinner visible={state.isLoading} />
        <NoteForm
          headerText="Note"
          errorMessage={state.errorMessage}
          noteData={noteData}
          onUpdate={updateNote}
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

export default NoteScreen;
