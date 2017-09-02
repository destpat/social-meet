import React from 'react';
import { Text, View, FlatList } from 'react-native';

export default class NewUser extends React.Component {
  render() {
    return (
      <View>
        <Text>NewUser</Text>
        <FlatList
          data={[{key: 'a'}, {key: 'b'}]}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />
      </View>
    );
  }
}
