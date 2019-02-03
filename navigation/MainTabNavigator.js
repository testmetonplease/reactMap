import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import BaseTheme from './../themes/base-theme';

import TabBarIcon from '../components/TabBarIcon';
import LoadingMapScreen from '../screens/LoadingMapScreen';
import LocationsAddScreen from '../screens/LocationsAddScreen';




const LoadingMapStack = createStackNavigator({
  LoadingMap: LoadingMapScreen,
});

LoadingMapStack.navigationOptions = {
  tabBarLabel: 'map',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused}
      name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} />
  ),
};

const AddLocationStack = createStackNavigator({
  AddLocation: LocationsAddScreen,
});

AddLocationStack.navigationOptions = {
  tabBarLabel: 'AddLocations',
  tabBarIcon: ({focused}) => ( 
  <EvilIcon name = 'plus'
    accessibilityLabel = 'nav-add'
    size = { 32 }
    color = { BaseTheme.baseColor }
    style = { { textAlign: 'center' } } />
  ),
};


export default createBottomTabNavigator({
  LoadingMapStack,
  AddLocationStack,
});
