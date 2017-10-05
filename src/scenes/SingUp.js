import React from 'react';
import { Text, ScrollView, Button, View } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements'

// @Todo custom style
export default class SingUp extends React.Component {
  render() {
    return (
      <ScrollView behavior='padding'>
        <FormLabel>e-mail</FormLabel>
        <FormInput/>

        <FormLabel>user name</FormLabel>
        <FormInput/>

        <FormLabel>Snapchat</FormLabel>
        <FormInput/>

        <FormLabel>Instagram</FormLabel>
        <FormInput/>

        <FormLabel>Sexe</FormLabel>
        <FormInput/>

        <FormLabel>City</FormLabel>
        <FormInput/>

        <FormLabel>Origin</FormLabel>
        <FormInput/>

        <FormLabel>Eyes colors</FormLabel>
        <FormInput/>

        <FormLabel>Hair color</FormLabel>
        <FormInput/>

        <FormLabel>Hair color</FormLabel>
        <FormInput/>


        <FormLabel>Birth date</FormLabel>
        <FormInput/>

        <FormLabel>Password</FormLabel>
        <FormInput/>

        <FormLabel>Confirmed Password</FormLabel>
        <FormInput/>
        <Button
           medium
           iconLeft
           icon={{name: 'check'}}
           backgroundColor='#3498db'
           title='VALIDATE'
           onPress={() => {
             console.log('add function for send data to server');
           }}/>
      </ScrollView>
    );
  }
}
