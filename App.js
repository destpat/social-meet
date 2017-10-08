import React from 'react';
import { Text, View, KeyboardAvoidingView } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'
import { Tabs, Register } from './src/config/router';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false
    }
  }

  setLogin(login) {
    this.setState({login: login});
  }

  render() {
    if (this.state.login) {
      return <Tabs />
    } else {
      return <Register screenProps={this.setLogin.bind(this)}/>
    }
  }
}
