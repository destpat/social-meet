import React from 'react';
import { Text, ScrollView, Image } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements'

export default class UserProfile extends React.Component {
  render() {
    const {picture, gender, email, location, name, nat} = this.props.navigation.state.params.user;
    return (
      <ScrollView>
        <Tile
           imageSrc={{uri : picture.large}}
           title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
           featured
           caption="Some Caption Text"
        />
        <List containerStyle={{marginBottom: 20}}>
          <ListItem
            hideChevron
            title='Gender'
            rightTitle={gender}
          />
          <ListItem
            hideChevron
            title='Email'
            rightTitle={email}
          />
          <ListItem
            hideChevron
            title='Location'
            rightTitle={`${location.city}, ${location.postcode}`}
          />
          <ListItem
            hideChevron
            title='Name'
            rightTitle={`${name.first} ${name.last}`}
          />
          <ListItem
            hideChevron
            title='Nationality'
            rightTitle={nat}
          />
        </List>
      </ScrollView>
    );
  }
}
