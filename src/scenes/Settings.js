import React from 'react';
import logout from '../utils/logout';
import updateProfile from '../utils/updateProfile';
import getMyProfile from '../utils/getMyProfile';

import { Text, View} from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements';

export default class MyProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>SETTINGS</Text>
        <Text>This page is under construction</Text>
      </View>
    );
  }
}
