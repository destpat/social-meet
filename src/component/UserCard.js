import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';
import userCardStyle from '../style/userCardStyle';

export class UserCard extends React.Component {
  render() {
    return (
      // implemented with Text and Button as children
      <TouchableHighlight
        onPress={() => this.props.navigation.navigate('UserProfile', { user: this.props.user })}>
        <View style={userCardStyle.cardContainer}>
          <Image source={{uri: this.props.user.picture.large}}
                 style={userCardStyle.image}/>
          <Text>{this.props.user.name.first} {this.props.user.location.postcode}</Text>
        </View>
     </TouchableHighlight>
    );
  }
}
