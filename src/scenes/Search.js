import React from 'react';
import { Text, ScrollView, View, Picker, Modal, TouchableHighlight, FlatList  } from 'react-native';
import { FormLabel, FormInput, Button, Icon, CheckBox, Slider } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { ModalCheckbox } from '../component/ModalCheckbox';
import  searchStyle from '../style/search'

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radiusValue: 1,
      manCheckbox: false,
      womanCheckbox: false,
      modalVisible: false,
      modalType: 'eyesColor',
      origin: [
        {
          key: 'Caraibe',
          checked: false
        },{
          key: 'Italie',
          checked: false
        },{
          key: 'Espagne',
          checked: false
        },{
          key: 'Asie',
          checked: false
        }
      ],
      eyesColor: [
        {
          key: 'Brown',
          checked: false
        },{
          key: 'Green',
          checked: false
        },{
          key: 'Blue',
          checked: false
        }
      ]
    };
  }

  setOrigin(index) {
    const origin = [...this.state.origin];
    origin[index].checked = !origin[index].checked;
    this.setState({ origin });
  }

  setEyesColor(index) {
    const eyesColor = [...this.state.eyesColor];
    eyesColor[index].checked = !eyesColor[index].checked;
    this.setState({ eyesColor });
  }

  setModalVisible(modalType) {
    this.setState({modalType: modalType});
    this.setState({modalVisible: !this.state.modalVisible});
  }

  setWomanCheckbox() {
    this.setState({womanCheckbox: !this.state.womanCheckbox});
  }

  setManCheckbox(checked) {
    this.setState({manCheckbox: !this.state.manCheckbox});
  }

  render() {

    let modalContent;

    if (this.state.modalType === 'eyesColor') {
      modalContent = (
        <ModalCheckbox  setValue={this.setEyesColor.bind(this)}
                        close={this.setModalVisible.bind(this)}
                        originList={this.state.eyesColor} />
      )
    } else if (this.state.modalType === 'origin') {
      modalContent = (
        <ModalCheckbox setValue={this.setOrigin.bind(this)}
                       close={this.setModalVisible.bind(this)}
                       originList={this.state.origin}/>
      )
    } else {
      console.log(`error le type de modale ${this.state.modalType}`);
    }

    return (
        <KeyboardAwareScrollView style={searchStyle.constainer}>
        {/* Modal */}
        <Modal
          animationType="slide"
          visible={this.state.modalVisible}
          onRequestClose={() => {this.setModalVisible();}}>
         { modalContent }
        </Modal>

          {/* From field */}
          <FormLabel>From</FormLabel>
          <FormInput/>

          {/* Radius field */}
          <FormLabel>Within a radius of</FormLabel>
          <View style={searchStyle.slider}>
            <Slider value = { this.state.radiusValue }
                    minimumValue = { 1 }
                    maximumValue = { 500 }
                    step = { 1 }
                    onValueChange={(radiusValue) => this.setState({radiusValue})}/>
          { this.state.radiusValue < 500 ? <Text>{this.state.radiusValue} km</Text> : <Text>Pas d'importance</Text> }
          </View>

          {/* Origin Field */}
          <TouchableHighlight onPress={() => {
            this.setModalVisible('origin');
            }}>
            <View>
              <Text>Origin</Text>
              <FlatList
                  data={this.state.origin}
                  horizontal
                  renderItem={({item}) => item.checked ? <Text> {item.key} </Text> : null }
                />
            </View>
          </TouchableHighlight>

          {/* Sex Field */}

          {/* woman */}
          <FormLabel>I Search</FormLabel>
          <View style={searchStyle.sexContainer}>
            <CheckBox containerStyle={searchStyle.checkbox}
                      title='Woman'
                      checked={this.state.womanCheckbox}
                      onPress={() => this.setWomanCheckbox()}
            />
            <Icon
              name='md-woman'
              type='ionicon'
              color='#3498db' />

            <CheckBox
              containerStyle={searchStyle.checkbox}
              title='Man'
              checked={this.state.manCheckbox}
              onPress={() => this.setManCheckbox()}
            />
            <Icon
              name='md-man'
              type='ionicon'
              color='#3498db' />
          </View>

          {/* Eyes color Field */}

          <TouchableHighlight onPress={() => {
            this.setModalVisible('eyesColor')
          }}>
            <View>
              <Text>Eyes color</Text>
              <FlatList
                  data={this.state.eyesColor}
                  horizontal
                  renderItem={({item}) => item.checked ? <Text> {item.key} </Text> : null }
                />
            </View>
          </TouchableHighlight>

          {/* Years old Field */}
          <FormLabel>Yo</FormLabel>
          <FormInput/>

          <Button buttonStyle={searchStyle.button}
                  icon={{name: 'check'}}
                  backgroundColor='#3498db'
                  title='Search' />
        </KeyboardAwareScrollView>
    );
  }
}
