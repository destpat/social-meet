import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';
import userCardVerticalStyle from '../style/userCardVerticalStyle';

export class UserCardVertical extends React.Component {
  render() {
    return (
      <TouchableHighlight
        onPress={() => this.props.navigation.navigate('UserProfile', { user: this.props.user })}>
        <View style={userCardVerticalStyle.cardContainer}>
          <Image source={{uri: this.props.user.photo}}
                 style={userCardVerticalStyle.image}/>
          <Text>{this.props.user.snapchat}</Text>
        </View>
     </TouchableHighlight>
    );
  }
}
