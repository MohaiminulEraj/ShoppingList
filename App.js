import React from 'react';
import 'react-native-gesture-handler';
import AuthStackNavigator from './components/Authentication/AuthStackNavigator';
// import DrawerNavigator from './components/Drawer/DrawerNavigator';

const App = () => {
  return (
    <AuthStackNavigator></AuthStackNavigator>
  );
}
// <DrawerNavigator></DrawerNavigator>;


export default App;