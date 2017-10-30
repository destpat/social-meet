import { AsyncStorage } from 'react-native';

export default async function logout() {
  try {
    await AsyncStorage.removeItem('token');
  } catch (error) {
    console.log(`AsyncStorage remove item error: ${error}`);
  }
}
