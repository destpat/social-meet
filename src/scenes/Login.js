import React from 'react';
import getAutorization from '../utils/getAuthorization.js'

import { Text, View, KeyboardAvoidingView, TouchableHighlight} from 'react-native';
import { FormLabel, FormInput, Button, FormValidationMessage } from 'react-native-elements'
import loginStyle from '../style/loginStyle'

import storeToken from '../utils/storeToken'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: ''
    }
  }

  errorMessage(errorMessage){
    this.setState({errorMessage});
  }

  resetErrorMessage(){
    this.setState({errorMessage : ''})
  }

  render() {
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
                onPress={() => {
                  this.resetErrorMessage();
                  getAutorization(this.state.email, this.state.password).then((res) => {
                  this.props.screenProps(res.data.auth);
                  storeToken(res.data.token);
                  }, (err) => {
                    this.errorMessage(err.response.data.message);
                  })
                }}/>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('SingUp')}>
          <Text style={loginStyle.register}>Register now</Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
    );
  }
}
