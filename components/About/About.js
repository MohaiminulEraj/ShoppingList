import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Button } from 'native-base';

import { navigateTo } from '../../utils/util-functions'; //props,screenName,paramsObj

const About = (props) => {
    return (
        <View style={styles.aboutBtn} >
            {/* <Text>About</Text> */}
            <Button
                onPress={() => {
                    navigateTo(props, 'About2');
                }}>
                <Text>About The App</Text>
            </Button>

            <Button
                onPress={() => {
                    navigateTo(props, 'About3');
                }}>
                <Text>About Developer</Text>
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    aboutBtn: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 65,
    }
});

export default About;
