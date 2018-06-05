import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions, TouchableHighlight, FlatList } from 'react-native';
import UserCardHorizontalStyle from '../style/UserCardHorizontalStyle'
import getAllUsers from '../utils/getAllUsers'

export class UserCardHorizontal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AllUsers: null
    }
  }
  componentDidMount() {
    getAllUsers().then((data) => {
      this.setState({AllUsers: data});
    })
  }
  render() {
    return (
      <FlatList
        data={this.state.AllUsers}
        renderItem={({item}) =>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('UserProfile', { user: item })}>
            <View style={UserCardHorizontalStyle.listContainer}>
                <Image source={{uri: item.photo}}
                     style={{width: 80, height: 80, marginLeft: 10}}/>
              <View style={UserCardHorizontalStyle.text}>
                <Text>{item.instagram}</Text>
                <Text>{item.city}</Text>
              </View>
            </View>
        </TouchableHighlight>}
      />
    );
  }
}
