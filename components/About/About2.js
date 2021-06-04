import React from 'react';
import { View, Text } from 'native-base';

const About2 = () => {
    return (
        <View style={{ margin: 10 }}>
            <Text style={{ textAlign: 'center', margin: 10 }}>This application is a simple and useful to store groceries or shopping list item.</Text>
            <Text style={{ textAlign: 'center', marginTop: 50 }}>Version: 1.0 </Text>
            <Text style={{ textAlign: 'center' }}>Technology Used: React Native.</Text>
            <Text style={{ textAlign: 'center' }}>Source Code: https://github.com/MohaiminulEraj/ShoppingList</Text>
        </View>
    );
};

export default About2;
