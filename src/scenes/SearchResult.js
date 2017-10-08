import React from 'react';
import { ScrollView } from 'react-native';
import { UserList } from '../component/UserList';

export default class UserProfile extends React.Component {
  render() {
    return (
      <ScrollView>
          <UserList navigation={this.props.navigation} />
      </ScrollView>
    );
  }
}
