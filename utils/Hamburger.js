import React from 'react';
import { Icon, Button } from 'native-base';

const Hamburger = (props) => (
    <Button transparent onPress={() => props.drawerObj.navigation.openDrawer()}>
        <Icon name="menu" />
    </Button>
);

export default Hamburger;
