import React from 'react';
import { Text, View, KeyboardAvoidingView, TouchableHighlight, Image} from 'react-native';
import { FormLabel, FormInput, Button, FormValidationMessage } from 'react-native-elements';

import getAutorization from '../utils/getAuthorization.js';
import getToken from '../utils/getToken.js';
import checkTokenValidity from '../utils/checkTokenValidity'
import loginStyle from '../style/loginStyle';
import { AsyncStorage } from 'react-native';
import storeToken from '../utils/storeToken'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: '',
      displayLoader: true
    }
  }
  // Setter for display error message
  errorMessage(errorMessage){
    this.setState({errorMessage});
  }

  // Setter for reset error message
  resetErrorMessage(){
    this.setState({errorMessage : ''})
  }

  // Check validity off token if token is valid the user is redirect to new user scene
  // elese user si redirect to login scene
  async componentWillMount() {
    try {
      let tokenValidity = await checkTokenValidity();
      setTimeout(() => {
        this.setState({displayLoader : false});
        this.props.screenProps(tokenValidity.data.auth);
      }, 1500);
    } catch (e) {
      console.log(e);
      setTimeout(() => {
      this.setState({displayLoader : false});
      }, 1500);
    }
  }

  render() {
    if (!this.state.displayLoader) {
      return (
        <KeyboardAvoidingView behavior='padding' style={loginStyle.container}>
          <Text style={loginStyle.title}>Curly</Text>
          <View>
          <FormLabel labelStyle={loginStyle.input}>Email</FormLabel>
          <FormInput inputStyle={loginStyle.input}
                     onChangeText={(email) => this.setState({email})}/>

          <FormLabel labelStyle={loginStyle.input}>Password</FormLabel>
          <FormInput inputStyle={loginStyle.input}
          secureTextEntry
          onChangeText={(password) => this.setState({password})}/>
          {
            this.state.errorMessage !== '' &&
            <FormValidationMessage labelStyle={loginStyle.errorMessage}>
            {this.state.errorMessage}
            </FormValidationMessage>
          }
          </View>
          <Button iconLeft
          buttonStyle={loginStyle.button}
          title='LOGIN'
          onPress={ async () => {
            this.resetErrorMessage();
            try {
              let authorization = await getAutorization(this.state.email, this.state.password);
              await storeToken(authorization.data.token);
              this.props.screenProps(authorization.data.auth);
            } catch (error) {
              console.log(error);
              this.errorMessage(error.response.data.message);
            }
          }}/>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('SingUp')}>
          <Text style={loginStyle.register}>Register now</Text>
          </TouchableHighlight>
        </KeyboardAvoidingView>
      );
    } else {
      return (
        <View style={loginStyle.container}>
          <Text style={loginStyle.title}>
            Curly
          </Text>
          <Image
            source={require('../images/loading.png')}
          />
        </View>
      );
    }
  }
}
