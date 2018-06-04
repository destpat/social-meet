import { StyleSheet, Dimensions } from 'react-native'

const userCardVerticalStyle = StyleSheet.create({
  cardContainer: {
    width: Dimensions.get('window').width / 2 - 20,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingBottom: 5,
    margin: 5
  },
  cardText: {
    textAlign: 'center',
    marginTop: 10
  },
  image: {
    width: Dimensions.get('window').width / 2 - 20,
    height: 150
  }
});

export default userCardVerticalStyle;
