import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomeStackNavigator from '../Home/HomeStackNavigator';
import AboutStackNavigator from '../About/AboutStackNavigator';
import Login from '../Authentication/Login'

const Drawer = createDrawerNavigator();

function LogoutStackNavigator({ navigation }) {

    const replacePage = async () => {
        try {
            await AsyncStorage.removeItem('credentials');
            navigation.replace('Login');
        } catch (e) {
            console.log(e);
        }
    }
    replacePage();
    return (
        <Login />
    );
}

const DrawerNavigator = () => {
    return (
        // <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeStackNavigator} />
            <Drawer.Screen name="About" component={AboutStackNavigator} />
            <Drawer.Screen name="Logout" component={LogoutStackNavigator} />
        </Drawer.Navigator>
        // </NavigationContainer>
    );
};

export default DrawerNavigator;
