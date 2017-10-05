import React from 'react';
import { Text, View, KeyboardAvoidingView, StyleSheet  } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'
import loginStyle from '../style/loginStyle'

export default class Login extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={loginStyle.container}>
        <Text style={loginStyle.title}>Curly</Text>
        <View>
          <FormLabel labelStyle={loginStyle.input}>Email</FormLabel>
          <FormInput inputStyle={loginStyle.input}/>
          <FormLabel labelStyle={loginStyle.input}>Password</FormLabel>
          <FormInput inputStyle={loginStyle.input} secureTextEntry/>
        </View>
        <Button iconLeft
                buttonStyle={loginStyle.button}
                title='LOGIN'
                onPress={()=>{console.log('click on button');}}/>
      </KeyboardAvoidingView>
    );
  }
}
