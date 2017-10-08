import { AsyncStorage } from 'react-native';

export default async function getToken(){
  try {
    const token = await AsyncStorage.getItem('token');
      return token;
  } catch (error) {
    console.log(error);
  }
}
