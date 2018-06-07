import React from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import getUser from '../utils/getUser.js';
import getMyProfile from '../utils/getMyProfile.js';
import moment from 'moment'

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInformation: {
        photo: '--',
        snapchat: '--',
        instagram: '--',
        origin: '--',
        eyesColor: '--',
        sex: '--',
        birthDate: '--'
      }
    }
  }

  componentDidMount() {
    if (this.props.from === 'newUsers') {
      getUser(this.props.userId).then((data) => {
        data.birthDate = moment().diff(data.birthDate, 'years').toString();
        this.setState({userInformation: data});
      })
    } else if (this.props.from === 'myProfile') {
      getMyProfile().then((data) => {
        data.birthDate = moment().diff(data.birthDate, 'years').toString();
        this.setState({userInformation: data});
      })
    } else {
      console.log('Error when define from');
    }
  }

  render() {
    const {photo, snapchat, instagram, sex, origin, eyesColor, birthDate} = this.state.userInformation;
    return (
      <ScrollView>
        <Tile
           imageSrc={{uri : photo}}
           title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
           featured
           caption="Some Caption Text"
        />
        <List>
          <ListItem
            hideChevron
            title='Snapchat'
            rightTitle={snapchat}
          />
          <ListItem
            hideChevron
            title='Instagram'
            rightTitle={instagram}
          />
          <ListItem
            hideChevron
            title='Sex'
            rightTitle={sex}
          />
          <ListItem
            hideChevron
            title='Origin'
            rightTitle={origin}
          />
          <ListItem
            hideChevron
            title='Eyes colors'
            rightTitle={eyesColor}
          />
          <ListItem
            hideChevron
            title='Age'
            rightTitle={birthDate}
          />
        </List>
      </ScrollView>
    );
  }
}
