import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({ item, deleteItem, editItem }) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.listItemText}>{item.text}</Text>
                <View style={styles.listItemBtn}>
                    <Icon name="edit" size={20} onPress={() => editItem(item.id, item.text)} />
                    <Icon name="remove" size={20} color="firebrick" onPress={() => deleteItem(item.id)} />
                </View>
            </View>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listItemText: {
        fontSize: 18,
    },
    listItemBtn: {
        flexDirection: 'row',
    }
});

export default ListItem;