import React from 'react';
import { View, FlatList } from 'react-native';
import { fakeUser } from '../data/fakeUser';
import { UserCard } from '../component/UserCard';
import getNewUser from '../utils/getNewUser'

export default class NewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: null
    }
  }
  componentDidMount() {
    getNewUser().then((data) => {
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
