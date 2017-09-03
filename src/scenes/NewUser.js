import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { fakeUser } from '../data/fakeUser';
import { UserCard } from '../component/UserCard';

export default class NewUser extends React.Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <FlatList
          numColumns={2}
          data={fakeUser.results}
          renderItem={({item}) => <UserCard user={item} navigation={this.props.navigation}/>}
        />
      </View>
    );
  }
}
