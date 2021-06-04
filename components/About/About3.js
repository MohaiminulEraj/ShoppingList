import React from 'react';
import { View, Text } from 'native-base';
import { Image } from 'react-native';
const About3 = () => {
    return (
        <View style={{ margin: 10 }}>
            <Image style={{ height: 110, width: 100, alignSelf: 'center', marginTop: 15 }} source={require('../../assets/eraj.jpg')} />
            <Text style={{ textAlign: 'center', margin: 10 }}>Mohaiminul Eraj</Text>
            <Text style={{ textAlign: 'center', marginTop: 10 }}>Programmer . Tech Enthusiast . Gamer</Text>
            <Text style={{ textAlign: 'center' }}>Email: eraj471@gmail.com </Text>
            <Text style={{ textAlign: 'center' }}>Web: mohaiminuleraj.github.io</Text>
        </View>
    );
};

export default About3;
