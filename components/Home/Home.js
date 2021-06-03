import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

// import Header from './Header';
import ListItem from './ListItem';
import AddItem from './AddItem';
// EDIT 

const Home = () => {
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
                return [
                    { id: '_' + Math.random().toString(36).substr(2, 9), text }, ...prevItems
                ];
            });
        }
    }

    const updateItem = (text) => {
        if (!text)
            return Alert.alert('Error', 'Please Enter a proper Item Name', [
                {
                    text: 'Ok',
                },
            ]);

        setItems(prevItems =>
            prevItems.map((item) =>
                item.id === currentItem ? { id: currentItem, text } : item
            ));
        setText('');
        setEditing(false);
    };

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
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
            <View style={styles.header}>
                {/* <Header title="Shopping List" /> */}
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
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
    }
});

export default Home;