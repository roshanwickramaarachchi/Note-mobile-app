import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, Text, ScrollView, Dimensions} from 'react-native';
import {Context} from '../context/NoteContext';
import {ListItem, Avatar, Icon} from 'react-native-elements';
import Error from '../components/Error';
import Spinner from 'react-native-loading-spinner-overlay';
var {width} = Dimensions.get('window');

const NoteListScreen = ({navigation}) => {
  const {state, getNotes, deleteNote} = useContext(Context);

  useEffect(() => {
    const listener = navigation.addListener('focus', () => {
      getNotes();
    });

    return listener;
  }, [navigation]);

  return (
    <>
      <Spinner visible={state.isLoading} />
      {/* header title */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleStyle}>Note List</Text>
      </View>

      {/* error message */}
      {state.errorMessage ? <Error message={state.errorMessage} /> : null}

      {/* note list */}
      <ScrollView>
        {state.notesData.map(item => (
          <ListItem
            key={item._id}
            bottomDivider
            onPress={() => navigation.navigate('Note', {item})}>
            <Avatar source={require('../assets/image.png')} />
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
              <ListItem.Subtitle>{item.createdAt}</ListItem.Subtitle>
            </ListItem.Content>
            <Icon
              name="delete"
              onPress={() => {
                deleteNote(item._id);
                getNotes();
              }}
            />
          </ListItem>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 30,
  },
  titleContainer: {
    marginTop: 20,
    marginBottom: 20,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default NoteListScreen;
