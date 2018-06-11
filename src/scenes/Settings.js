import React from 'react';
import logout from '../utils/logout';
import putProfile from '../utils/putProfile';
import getMyProfile from '../utils/getMyProfile';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';

import { Text, View, KeyboardAvoidingView } from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements';

export default class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInformation : {
        instagram: '',
        snapchat: '',
        sex: '',
        origin: '',
        eyesColor: '',
        birthDate: ''
      }
    }
  }

  componentDidMount() {
    console.log('mounted');
    getMyProfile().then((data) => {
      data.birthDate = moment(data.birthDate).format('DD-MM-YYYY');
      this.setState({userInformation: data});
    })
  }

  render() {
    const { snapchat, instagram, sex, origin, eyesColor, birthDate } = this.state.userInformation;
    return (
      <KeyboardAvoidingView>

        <FormLabel>snapchat</FormLabel>
        <FormInput
          value={snapchat}
          onChangeText={(snapchat) => this.setState({snapchat})}/>

        <FormLabel>instagram</FormLabel>
        <FormInput
          value={instagram}
          onChangeText={(instagram) => this.setState({instagram})}/>

        <FormLabel>Sex</FormLabel>
        <FormInput
          value={sex}
          onChangeText={(sex) => this.setState({sex})}/>

        <FormLabel>Orgin</FormLabel>
        <FormInput
          value={origin}
          onChangeText={(origin) => this.setState({origin})}/>

        <FormLabel>Eyes colors</FormLabel>
        <FormInput
          value={eyesColor}
          onChangeText={(eyesColor) => this.setState({eyesColor})}/>

        <FormLabel>Birth date</FormLabel>
        <View style={{alignItems: 'center'}}>
          <DatePicker
            style={{width: '90%'}}
            date={birthDate}
            maxDate={moment().add(-15, 'years').format("DD-MM-YYYY")}
            mode="date"
            format="DD-MM-YYYY"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon={false}
            customStyles={{
              dateInput: {
                flexDirection: 'row',
                borderWidth: 0,
                borderBottomColor: '#86939E',
                borderBottomWidth: 1
              }
            }}
            onDateChange={(birthDate) => {
              this.setState({birthDate: birthDate})
              }
            }
          />
        </View>

        <Button
          style={{marginTop: 80}}
          title='UPDATE'
          backgroundColor='#3498DB'
          onPress={() => {
            putProfile(this.state).then((res) => {
              console.log(res.data);
            })
            .catch((error) => {
              console.error(error);
            });
          }}/>

        <Button
          style={{marginTop: 10}}
          title='LOGOUT'
          backgroundColor='#E74C3C'
          onPress={() => {
            logout().then((res) => {
              this.props.screenProps();
            });
          }}/>
      </KeyboardAvoidingView>
    );
  }
}
