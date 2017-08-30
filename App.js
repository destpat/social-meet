import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Tabs } from './src/config/router';

export default class App extends React.Component {
  render() {
    return <Tabs />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1'
  },
});
