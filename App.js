import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
// EDIT 

const App = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('')
  const [editing, setEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState("");

  const addItem = (text) => {
    if (!text) {
      alert('Error', 'Please enter an item', { text: 'Ok' });
    }
    else {
      setItems(prevItems => {
        setText("");
        return (
          [{ id: '_' + Math.random().toString(36).substr(2, 9), text }, ...prevItems]
        );
      })
    }
  }

  const updateItem = (text) => {
    setItems(prevItems => prevItems.map((item) => {
      item.id === currentItem ? { id: currentItem, text } : item
    }));
    setText("");
    setEditing(false);
  }

  const editItem = (id, text) => {
    setEditing(true);
    setCurrentItem(id);
    setText(text);
  };


  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id)
    })
  }

  return (
    <View style={styles.header}>
      <Header title="Shopping List" />
      <AddItem
        editing={editing}
        text={text}
        setText={setText}
        addItem={addItem}
        updateItem={updateItem}
      />
      <FlatList
        data={items}
        renderItem={({ item }) => <ListItem key={item.id} item={item} editItem={editItem} deleteItem={deleteItem} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  }
});

export default App;