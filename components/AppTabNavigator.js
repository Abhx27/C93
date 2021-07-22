import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import SendingEmails from '../screens/SendingEmails';


export const AppTabNavigator = createBottomTabNavigator({
  HomeScreen : {
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarIcon :   <Image source={require("../assets/home-icon.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "HomeScreen",
    }
  },
  SendingEmails: {
    screen: SendingEmails,
    navigationOptions :{
      tabBarIcon :<Image source={require("../assets/ads-icon.png")} style={{width:20, height:20,}} />,
      tabBarLabel : "ComposeEmail",
    }
  }
});
