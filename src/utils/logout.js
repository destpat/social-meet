import { AsyncStorage } from 'react-native';

export default function logout() {
  try {
    return AsyncStorage.removeItem('token');
  } catch (error) {
    console.log(`AsyncStorage remove item error: ${error}`);
  }
}
