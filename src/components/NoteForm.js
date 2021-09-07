import React, {useState} from 'react';
import {StyleSheet, TextInput, Button, Text, View} from 'react-native';
import EasyButton from './EasyButton';
import Error from './Error';

const NoteForm = ({headerText, onSubmit, errorMessage, initialValues}) => {
  const [name, setName] = useState(initialValues.name);
  const [content, setContent] = useState(initialValues.content);

  return (
    <>
      <Text style={styles.title}>{headerText}</Text>

      {/* error message */}
      {errorMessage ? <Error message={errorMessage} /> : null}

      <TextInput
        style={styles.titleInput}
        placeholder="Title"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.contentInput}
        placeholder="Content"
        value={content}
        onChangeText={setContent}
        multiline
        textAlignVertical="top"
      />

      {/* sign up and sign in button */}
      <View>
        <EasyButton large primary onPress={() => onSubmit({name, content})}>
          <Text style={{color: 'white'}}>Save</Text>
        </EasyButton>
      </View>
    </>
  );
};

NoteForm.defaultProps = {
  initialValues: {
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
});

export default NoteForm;
