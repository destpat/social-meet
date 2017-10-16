import React from 'react';
import { View, FlatList } from 'react-native';
import { fakeUser } from '../data/fakeUser';
import { UserCard } from '../component/UserCard';
import getNewUsers from '../utils/getNewUsers'

export default class newUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: null
    }
  }
  componentDidMount() {
    getNewUsers().then((data) => {
      this.setState({newUser: data});
    })
  }
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <FlatList
          numColumns={2}
          data={this.state.newUser}
          renderItem={({item}) => <UserCard user={item} navigation={this.props.navigation}/>}
          keyExtractor={(item, index) => item._id}
        />
      </View>
    );
  }
}
