import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions, TouchableHighlight, FlatList } from 'react-native';
import { fakeUser } from '../data/fakeUser';
import userListStyle from '../style/listUserStyle'


export class UserList extends React.Component {
  render() {
    return (
      <FlatList
        data={fakeUser.results}
        renderItem={({item}) =>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('UserProfile', { user: item })}>
            <View style={userListStyle.listContainer}>
              <Image source={{uri: item.picture.large}}
                     style={{width: 80, height: 80, marginLeft: 10}}/>
              <View style={userListStyle.text}>
                <Text>{item.name.first}</Text>
                <Text>{item.location.city} ( {item.location.postcode.toString()[0]}{item.location.postcode.toString()[1]} ) ,  17 yo</Text>
              </View>
            </View>
        </TouchableHighlight>}
      />
    );
  }
}
