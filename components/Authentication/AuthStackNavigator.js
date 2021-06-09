import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Login';
import DrawerNavigator from '../Drawer/DrawerNavigator';

const Stack = createStackNavigator();

const AuthStackNavigator = (props) => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen options={{
                headerLeft: () => null,
            }} name="Login" component={Login} />

            <Stack.Screen options={{
                title: 'Shopping List',
                headerTitleStyle: {
                    alignSelf: 'center'
                },
                headerLeft: () => null,
                gesturesEnabled: false,
            }} name="DrawerNavigator" component={DrawerNavigator} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default AuthStackNavigator;