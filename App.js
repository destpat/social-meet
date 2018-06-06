import './ReactotronConfig';
import React from 'react';
import { Text, View, KeyboardAvoidingView, Image } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'
import { Tabs, Connection } from './src/config/router';
import checkTokenValidity from './src/utils/checkTokenValidity';
import loginStyle from './src/style/loginStyle';
import getToken from './src/utils/getToken';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      displayLoader: true,
      updateComponent: false
    }
  }

  componentDidMount() {
    this.setState({
      displayLoader: true
    });
    getToken().then((res) => {
      if (res) {
        checkTokenValidity()
        .then((res) => {
          this.setState({
            displayLoader: false,
            login: res.data.auth
          });
        })
        .catch((error) => {
          this.setState({displayLoader: false});
          console.error(error);
        })
      } else {
        this.setState({
          login: false,
          displayLoader: false
        });
      }
    });
  }

  updateComponent() {
    this.componentDidMount();
  }

  render() {
    if (this.state.displayLoader) {
      return (
        <View style={loginStyle.container}>
          <Text style={loginStyle.title}>
            Curly
          </Text>
          <Image source={require('./src/images/loading.png')} />
        </View>
      );
    } else {
      if (this.state.login) {
        return <Tabs screenProps={this.updateComponent.bind(this)} />
      } else {
        return <Connection screenProps={this.updateComponent.bind(this)} />
      }
    }
  }
}
