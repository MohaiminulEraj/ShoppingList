import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({ addItem, setText, text, editing, updateItem }) => {
    // const [text, setText] = useState('')
    const onChange = textValue => {
        setText(textValue);
    }
    return (
        <View style={styles.header}>
            <TextInput placeholder="Add Item..." value={text} style={styles.input} onChangeText={onChange} />
            <TouchableOpacity style={styles.btn} onPress={() => editing ? updateItem(text) : addItem(text)} >
                <Text style={styles.btnText}> {editing ? "Update" : "Add +"} </Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16,
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5,
    },
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center',
    }
});

export default AddItem;