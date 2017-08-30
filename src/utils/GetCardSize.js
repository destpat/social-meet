import { Dimensions } from 'react-native';

export default function getCardSize () {
  return {
      width: Dimensions.get('window').width / 2 - 20,
      height: 150
  }
}
