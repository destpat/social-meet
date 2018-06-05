import React from 'react';
import Profile from '../component/Profile';

export default class UserProfile extends React.Component {
  render() {
    return (
      <Profile userId={this.props.navigation.state.params.user._id} from={'newUsers'}/>
    );
  }
}
