import { StyleSheet } from 'react-native'

const modalStyle = StyleSheet.create({
    container: {
      flex: 1
    },
    flexDirection: {
      flexDirection: 'row'
    },
    checkbox: {
      backgroundColor: 'transparent',
      borderColor: 'transparent'
    },
    button: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 30 
    }
  });

export default modalStyle;
