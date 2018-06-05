import React from 'react';
import { View, FlatList } from 'react-native';
import { UserCardVertical } from '../component/UserCardVertical';
import getNewUsersList from '../utils/getNewUsersList'

export default class newUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newUsers: null
    }
  }
  componentDidMount() {
    getNewUsersList().then((data) => {
      this.setState({newUsers: data});
    })
  }
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <FlatList
          numColumns={2}
          data={this.state.newUsers}
          renderItem={({item}) => <UserCardVertical user={item} navigation={this.props.navigation}/>}
          keyExtractor={(item, index) => item._id}
        />
      </View>
    );
  }
}
