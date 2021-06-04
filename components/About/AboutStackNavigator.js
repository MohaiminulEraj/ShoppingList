import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import {Icon, Button} from 'native-base';

import About from './About';
import About2 from './About2';
import About3 from './About3';
import Hamburger from '../../utils/Hamburger';


const Stack = createStackNavigator();

const AboutStackNavigator = (props) => (
    <Stack.Navigator>
        <Stack.Screen
            name="About"
            component={About}
            options={{
                headerLeft: () => <Hamburger drawerObj={props}></Hamburger>,
            }}
        />
        <Stack.Screen name="About2" component={About2} />
        <Stack.Screen name="About3" component={About3} />
    </Stack.Navigator>
);

export default AboutStackNavigator;
