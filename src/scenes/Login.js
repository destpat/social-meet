import React from 'react';
import { Text, View, KeyboardAvoidingView, TouchableHighlight, Image} from 'react-native';
import { FormLabel, FormInput, Button, FormValidationMessage } from 'react-native-elements';

import getAutorization from '../utils/getAuthorization.js';
import getToken from '../utils/getToken.js';
import loginStyle from '../style/loginStyle';
import { AsyncStorage } from 'react-native';
import storeToken from '../utils/storeToken';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: ''
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


  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={loginStyle.container}>
        <Text style={loginStyle.title}>Nelly</Text>
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
        <Button
          iconLeft
          buttonStyle={loginStyle.button}
          title='LOGIN'
          onPress={ async () => {
            this.resetErrorMessage();
            try {
              let authorization = await getAutorization(this.state.email, this.state.password);
              await storeToken(authorization.data.token);
              this.props.screenProps();
            } catch (error) {
              this.errorMessage(error.response.data.message);
            }
        }}/>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Register')}>
        <Text style={loginStyle.register}>Register now</Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
    );
  }
}
