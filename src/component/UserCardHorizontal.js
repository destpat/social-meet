import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions, TouchableHighlight, FlatList } from 'react-native';
import { fakeUser } from '../data/fakeUser';
import UserCardHorizontalStyle from '../style/UserCardHorizontalStyle'

export class UserCardHorizontal extends React.Component {
  render() {
    return (
      <FlatList
        data={fakeUser.results}
        renderItem={({item}) =>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('UserProfile', { user: item })}>
            <View style={UserCardHorizontalStyle.listContainer}>
              <Image source={{uri: item.picture.large}}
                     style={{width: 80, height: 80, marginLeft: 10}}/>
              <View style={UserCardHorizontalStyle.text}>
                <Text>{item.name.first}</Text>
                <Text>{item.location.city} ( {item.location.postcode.toString()[0]}{item.location.postcode.toString()[1]} ) ,  17 yo</Text>
              </View>
            </View>
        </TouchableHighlight>}
      />
    );
  }
}
