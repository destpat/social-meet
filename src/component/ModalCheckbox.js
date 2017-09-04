import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';
import modalStyle from  '../style/modalStyle'

export class ModalCheckbox extends React.Component {
  render() {
    return (
      <View style={modalStyle.container}>
        <FlatList
           data={this.props.originList}
           renderItem={({item, index}) =>
           <View style={modalStyle.flexDirection}>
             <CheckBox
               containerStyle={modalStyle.checkbox}
               title={item.key}
               onPress={() => { this.props.setValue(index);}}
               checked={this.props.originList[index].checked}/>
           </View>
         }/>
         <View style={modalStyle.button}>
           <Button
              medium
              iconLeft
              icon={{name: 'check'}}
              backgroundColor='#3498db'
              title='VALIDATE'
              onPress={() => {
                this.props.close();
              }}/>
         </View>
      </View>
    );
  }
}
