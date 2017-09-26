import React from 'react';
import { ScrollView, Text, View, FlatList, TouchableHighlight, Image } from 'react-native';
import { fakeUser } from '../data/fakeUser';
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
