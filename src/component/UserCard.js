import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';
import  getCardSize  from '../utils/getCardSize';

const cardSize = getCardSize();

export class UserCard extends React.Component {
  render() {
    return (
      // implemented with Text and Button as children
      <TouchableHighlight
        onPress={() => this.props.navigation.navigate('UserProfile', { user: this.props.user })}>
        <View style={styles.cardContainer}>
          <Image source={{uri: this.props.user.picture.large}}
                 style={cardSize}/>
          <Text>{this.props.user.name.first} {this.props.user.location.postcode}</Text>
        </View>
     </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    width: cardSize.width,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingBottom: 5,
    margin: 5
  },
  cardText: {
    textAlign: 'center',
    marginTop: 10
  }
});
