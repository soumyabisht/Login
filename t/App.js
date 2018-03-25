import React from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import {  StackNavigator  } from 'react-navigation';
import Main from './Components/Main'
import Signup from './Components/signup'

const Navigation = StackNavigator(
  {
   First: { screen: Main },
   
   Second: { screen: Signup }
  });
   
export default Navigation;
