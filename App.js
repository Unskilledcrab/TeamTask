import React from 'react';
import { createDrawerNavigator, StackNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { Text } from 'react-native';

import ScreenOne from './src/createTask/Main';
import ScreenTest from './src/test/Main';


// DRAWER STACK
const DrawerStack = createDrawerNavigator({
  ScreenOne: { screen: ScreenOne },

  ScreenTest: { screen: ScreenTest }
});

// ALL DRAWER NAVIGATORS MUST BE CONTAINED IN STACK NAVIGATORS FOR HEADERS
const DrawerNavigation = createStackNavigator({
    DrawerStack: { screen: DrawerStack }
  },
  {
    headerMode: 'float',
    defaultNavigationOptions: ({navigation}) => ({
      headerStyle: {backgroundColor: 'green'},
      title: 'TEST MODE',
      headerLeft: <Text onPress={() => navigation.openDrawer()}>  Menu</Text>
  })
})

// LOGIN STACK - NEED TO DO
/*
const LoginStack = StackNavigator({
  loginScreen: { screen: LoginScreen },
  signupScreen: { screen: SignupScreen },
  forgottenPasswordScreen: { screen: ForgottenPasswordScreen, navigationOptions: { title: 'Forgot Password' } }
}, {
  headerMode: 'float',
  navigationOptions: {
    headerStyle: {backgroundColor: 'red'},
    title: 'You are not logged in'
  }
})
*/

// MAIN CONTAINER OF ALL SCREENS
const PrimaryNav = createStackNavigator({
  //loginStack: { screen: LoginStack },
  drawerStack: { screen: DrawerNavigation }
}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'drawerStack'
})


export default createAppContainer(PrimaryNav);
