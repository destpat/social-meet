import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import createUser from '../utils/createUser';

// @Todo custom style
export default class SingUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      snapchat: '',
      instagram: '',
      password: '',
      confirmedPassword: ''
    };
  }
  render() {
    let formValid = false;

    return (
      <KeyboardAvoidingView>

        <FormLabel>e-mail</FormLabel>
        <FormInput onChangeText={(email) => this.setState({email})}/>

        <FormLabel>Snapchat</FormLabel>
        <FormInput onChangeText={(snapchat) => this.setState({snapchat})}/>

        <FormLabel>Instagram</FormLabel>
        <FormInput onChangeText={(instagram) => this.setState({instagram})}/>

        <FormLabel>Password</FormLabel>
        <FormInput onChangeText={(password) => this.setState({password})}/>

        <FormLabel>Confirmed Password</FormLabel>
        <FormInput onChangeText={(confirmedPassword) => this.setState({confirmedPassword})}/>

        <Button
           medium
           iconLeft
           icon={{name: 'check'}}
           backgroundColor='#3498db'
           title='VALIDATE'
           onPress={() => {
             createUser(this.state).then((auth) => {
              this.props.screenProps(auth);
             });
           }}/>

      </KeyboardAvoidingView>
    );
  }
}
