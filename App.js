import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';
import { createStore } from 'redux';

//===========IMPORT SCREENS
// import ListScreen from './screens/ListScreen';
// import DetailScreen from './screens/DetailScreen';

//===========iOS ONLY STATUSBAR STYLE
StatusBar.setBarStyle('light-content');

//===========MAIN NAVIGATION AND STYLE
const RootNavigator = StackNavigator({
  List: ListScreen,
  Detail: DetailScreen,
  }, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#d35400'
  },
  headerTintColor: '#ffffff'
  }}
);

export default RootNavigator;