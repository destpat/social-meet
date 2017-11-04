import React from 'react';
import logout from '../utils/logout';
import updateProfile from '../utils/updateProfile';
import getMyProfile from '../utils/getMyProfile';

import { Text, View} from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements';

export default class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInformation: {
        snapchat: '--',
        instagram: '--',
        origin: '--',
        eyesColor: '--',
        sexe: '--',
        birthDate: '--'
      }
    }
  }

  componentDidMount() {
    getMyProfile().then((data) => {
      this.setState({userInformation : data})
    })
  }

  render() {
    return (
      <View>
        <FormLabel>Snapchat</FormLabel>
        <FormInput onChangeText={(snapchat) =>
          this.setState({ userInformation: { ...this.state.userInformation, snapchat: snapchat }})}
          defaultValue={this.state.userInformation.snapchat}/>

        <FormLabel>Instagram</FormLabel>
        <FormInput onChangeText={(instagram) => this.setState({instagram})}
                   defaultValue={this.state.userInformation.instagram}/>

        <FormLabel>Origin</FormLabel>
        <FormInput onChangeText={(origin) => this.setState({origin})}
                   defaultValue={this.state.userInformation.origin}/>

        <FormLabel>Eyes Color</FormLabel>
        <FormInput onChangeText={(eyesColor) => this.setState({eyesColor})}
                   defaultValue={this.state.userInformation.eyesColor}/>

        <FormLabel>Sexe</FormLabel>
        <FormInput onChangeText={(sexe) => this.setState({sexe})}
                   defaultValue={this.state.userInformation.sexe}/>

        <FormLabel>Date de naissance</FormLabel>
        <FormInput onChangeText={(birthDate) => this.setState({birthDate})}
                   defaultValue={this.state.userInformation.birthDate}/>

        <Button
           medium
           iconLeft
           icon={{name: 'check'}}
           backgroundColor='#3498db'
           title='UPDATE'
           onPress={() => {
             updateProfile(this.state.userInformation);
           }}/>

      <Button
        icon={{
          name: 'sign-out',
          type: 'font-awesome'
        }}
        backgroundColor= '#397af8'
        onPress={() => {
          logout();
          this.props.screenProps(false);
        }}
        title='LOGOUT' />
      </View>
    );
  }
}
