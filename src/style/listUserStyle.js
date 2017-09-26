import { StyleSheet } from 'react-native'

const userListStyle = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    backgroundColor: "#ffffff",
    height: 100,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#a8a8a8'
  },
  text: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10
  }
});

export default userListStyle;
