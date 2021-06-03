import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import { Icon, Button } from 'native-base';

import Home from './Home';
import Hamburger from '../../utils/Hamburger';

const Stack = createStackNavigator();

const HomeStackNavigator = (props) => (
    <Stack.Navigator>
        <Stack.Screen
            name="Shopping List"
            component={Home}
            options={{
                headerLeft: () => <Hamburger drawerObj={props}></Hamburger>,
            }}
        />
    </Stack.Navigator>
);

export default HomeStackNavigator;
