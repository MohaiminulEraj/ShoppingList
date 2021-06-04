import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeStackNavigator from '../Home/HomeStackNavigator';
import AboutStackNavigator from '../About/AboutStackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={HomeStackNavigator} />
                <Drawer.Screen name="About" component={AboutStackNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default DrawerNavigator;
