import { StyleSheet } from 'react-native'

const loginStyle = StyleSheet.create({
  container: {
    backgroundColor: '#e44040',
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    bottom: 50,
    fontStyle: 'italic',
    fontSize: 40,
    color: 'white'
  },
  button: {
    width: 300,
    marginTop: 10,
    backgroundColor: '#cc1e1d'
  },
  input:{
    color: '#fff'
  }
});

export default loginStyle;
