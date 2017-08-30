import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';
import  getCardSize  from '../utils/GetCardSize';

const cardSize = getCardSize();

export class UserCard extends React.Component {
  render() {
    return (
      // implemented with Text and Button as children
      <TouchableHighlight>
        <View style={styles.cardContainer}>
          <Image source={{uri: 'https://i.pinimg.com/originals/43/87/76/4387767f4547ac8c09ec46580838e8ab.jpg'}}
                 style={cardSize}/>
          <Text style={styles.cardText}> Marine (92) </Text>
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
    paddingBottom: 5
  },
  cardText: {
    textAlign: 'center',
    marginTop: 10
  }
});
