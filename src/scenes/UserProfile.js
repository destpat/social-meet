import React from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements'

export default class UserProfile extends React.Component {
  render() {
    const {snapchat, photo} = this.props.navigation.state.params.user;
    return (
      <ScrollView>
        <Tile
           imageSrc={{uri : photo}}
           title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
           featured
           caption="Some Caption Text"
        />
        <List containerStyle={{marginBottom: 20}}>
          <ListItem
            hideChevron
            title='Snapchat'
            rightTitle={snapchat}
          />
        </List>
      </ScrollView>
    );
  }
}
