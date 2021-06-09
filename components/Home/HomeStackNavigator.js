import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import Hamburger from '../../utils/Hamburger';
const Stack = createStackNavigator();

const HomeStackNavigator = (props) => (
    <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={Home}
            options={{
                headerLeft: () => <Hamburger drawerObj={props}></Hamburger>,
            }}
        />
    </Stack.Navigator>
);

export default HomeStackNavigator;
