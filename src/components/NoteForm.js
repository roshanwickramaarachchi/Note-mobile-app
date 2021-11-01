import React, {useState, useEffect} from 'react';
import {StyleSheet, TextInput, Button, Text, View} from 'react-native';
import EasyButton from './EasyButton';
import Error from './Error';

const NoteForm = ({
  headerText,
  onSubmit,
  onUpdate,
  errorMessage,
  noteData,
  navigation,
}) => {
  const [name, setName] = useState(noteData.name);
  const [content, setContent] = useState(noteData.content);
  const [noteId, setNoteId] = useState(noteData._id);
  const [titleValidError, setTitleValidError] = useState('');
  const [contentValidError, setContentValidError] = useState('');

  //when load screen remove input fields
  if (headerText === 'Note Create') {
    useEffect(() => {
      const unsubscribe = navigation.addListener('blur', () => {
        setContent('');
        setName('');
      });
      return unsubscribe;
    }, []);
  }

  const handleValidtitle = val => {
    if (val.length === 0) {
      setTitleValidError('title must be atleast one cherecter');
    } else {
      setTitleValidError('');
    }
  };

  const handleValidContent = val => {
    if (val.length === 0) {
      setContentValidError('content must be atleast one cherecter');
    } else {
      setContentValidError('');
    }
  };

  return (
    <>
      <Text style={styles.title}>{headerText}</Text>

      {/* error message */}
      {errorMessage ? <Error message={errorMessage} /> : null}

      <TextInput
        style={styles.titleInput}
        placeholder="Title- you can not use same name twice"
        value={name}
        onChangeText={value => {
          setName(value);
          handleValidtitle(value);
        }}
      />

      {titleValidError ? (
        <Text style={styles.text}>{titleValidError}</Text>
      ) : null}

      <TextInput
        style={styles.contentInput}
        placeholder="Content"
        value={content}
        onChangeText={value => {
          setContent(value);
          handleValidContent(value);
        }}
        multiline
        textAlignVertical="top"
      />

      {contentValidError ? (
        <Text style={styles.text}>{contentValidError}</Text>
      ) : null}

      {onSubmit ? (
        <View>
          <EasyButton large primary onPress={() => onSubmit({name, content})}>
            <Text style={{color: 'white'}}>Save</Text>
          </EasyButton>
        </View>
      ) : (
        <View>
          <EasyButton
            large
            primary
            onPress={() => onUpdate({noteId, name, content})}>
            <Text style={{color: 'white'}}>Save</Text>
          </EasyButton>
        </View>
      )}
    </>
  );
};

NoteForm.defaultProps = {
  noteData: {
    name: '',
    content: '',
  },
};

const styles = StyleSheet.create({
  titleInput: {
    width: '95%',
    height: 60,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 20,
    padding: 10,
    borderWidth: 2,
    borderColor: 'orange',
  },
  contentInput: {
    width: '95%',
    height: 300,
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

export default NoteForm;
