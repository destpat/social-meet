import React from 'react';
import { Text, View, KeyboardAvoidingView  } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'
import { Tabs } from './src/config/router';
import  Login  from './src/scenes/Login';

const LOGIN = false;

export default class App extends React.Component {
  render() {
    if (LOGIN) {
      return <Tabs />
    } else {
      return <Login />
    }
  }
}
