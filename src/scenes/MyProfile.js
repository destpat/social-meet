import React from 'react';
import Profile from '../component/Profile'
import { Button } from 'react-native-elements'
import { Text, View } from 'react-native';

export default class MyProfile extends React.Component {
  render() {
    return (
      <View>
        <Profile from={'myProfile'}/>
      </View>
    );
  }
}
