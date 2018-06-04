import React from 'react';
import { ScrollView } from 'react-native';
import { UserCardHorizontal } from '../component/UserCardHorizontal';

export default class UserProfile extends React.Component {
  render() {
    return (
      <ScrollView>
          <UserCardHorizontal navigation={this.props.navigation} />
      </ScrollView>
    );
  }
}
