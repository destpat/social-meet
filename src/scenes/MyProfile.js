import React from 'react';
import logout from '../utils/logout';
import { Button } from 'react-native-elements'
import { Text, View} from 'react-native';

export default class MyProfile extends React.Component {
  render() {
    return (
      <View>
        <Text>MyProfile</Text>
        <Button
          icon={{name: 'sign-out', type: 'font-awesome'}}
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
