import React from 'react';
import { Text, View, KeyboardAvoidingView  } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'
import { Tabs } from './src/config/router';
import  Login  from './src/scenes/Login';

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

  setToken(toke) {
    this.setState({token: token});
  }

  render() {
    if (this.state.login) {
      return <Tabs />
    } else {
      return <Login isLogged={this.setLogin.bind(this)}/>
    }
  }
}
