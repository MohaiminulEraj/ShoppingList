import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (text) => {
    if (!text) {
      alert('Error', 'Please enter an item', { text: 'Ok' });
    }
    else {
      setItems(prevItems => {
        return [{ id: '_' + Math.random().toString(36).substr(2, 9), text }, ...prevItems];
      })
    }
  }
  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id)
    })
  }
  return (
    <View style={styles.header}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem} />}
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