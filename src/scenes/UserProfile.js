import React from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import getUser from '../utils/getUser.js';
import Profile from '../component/Profile';
import moment from 'moment'

export default class UserProfile extends React.Component {
  render() {
    return (
      <Profile userId={this.props.navigation.state.params.user._id} from={'newUsers'}/>
    );
  }
}
