import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = ({ navigation }) => {
    const credentials = {
        username: 'eraj',
        password: 'abcd1234',
        token: Math.random().toString(36).substr(2, 9)
    }
    const userInput = {
        username: '',
        password: ''
    }
    const handleUsername = (text) => {
        userInput.username = text;
    }
    const handlePassword = (text) => {
        userInput.password = text;
    }
    const login = async () => {
        if (userInput.username === credentials.username && userInput.password === credentials.password) {
            try {
                const jsonValue = JSON.stringify(credentials)
                await AsyncStorage.setItem('credentials', jsonValue);
                navigation.replace('DrawerNavigator');
                // const value = await AsyncStorage.getItem('credentials');
                // if (value !== null) {
                //     console.log(value);
                // } else {
                //     console.log('noting')
                // }
            } catch (e) {
                console.log(e);
            }
        } else {
            alert('Username or password is incorrect!');
        }
    }
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
            <View>
                <Text style={styles.text}>Login</Text>
                <TextInput placeholder="Username" style={styles.input} onChangeText={handleUsername} />
                <TextInput placeholder="Password" onChangeText={handlePassword} secureTextEntry={true} style={styles.input} />
                <TouchableOpacity style={styles.submitButton} onPress={() => login()}>
                    <Text style={styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        padding: 20,
        fontSize: 20
    },
    input: {
        margin: 15,
        height: 40,
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white'
    }
});

export default Login;
