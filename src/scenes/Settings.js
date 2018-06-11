import React from 'react';
import logout from '../utils/logout';
import putProfile from '../utils/putProfile';
import getMyProfile from '../utils/getMyProfile';

import { Text, View, KeyboardAvoidingView } from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements';

export default class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instagram: '',
      snapchat: '',
      sex: '',
      origin: '',
      eyesColor: '',
      birthDate: ''
    }
  }

  render() {
    return (
      <KeyboardAvoidingView>

        <FormLabel>instagram</FormLabel>
        <FormInput onChangeText={(instagram) => this.setState({instagram})}/>

        <FormLabel>snapchat</FormLabel>
        <FormInput onChangeText={(snapchat) => this.setState({snapchat})}/>

        <FormLabel>Sex</FormLabel>
        <FormInput onChangeText={(sex) => this.setState({sex})}/>

        <FormLabel>Orgine</FormLabel>
        <FormInput onChangeText={(origin) => this.setState({origin})}/>

        <FormLabel>Eyes colors</FormLabel>
        <FormInput onChangeText={(eyesColor) => this.setState({eyesColor})}/>

        <FormLabel>Age</FormLabel>
        <FormInput onChangeText={(birthDate) => this.setState({birthDate})}/>

        <Button
          style={{marginTop: 80}}
          title='UPDATE'
          backgroundColor='#3498DB'
          onPress={() => {
            putProfile(this.state).then((res) => {
              console.log(res.data);
            })
            .catch((error) => {
              console.error(error);
            });
          }}/>

        <Button
          style={{marginTop: 10}}
          title='LOGOUT'
          backgroundColor='#E74C3C'
          onPress={() => {
            logout().then((res) => {
              this.props.screenProps();
            });
          }}/>
      </KeyboardAvoidingView>
    );
  }
}
