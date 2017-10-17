import axios from 'axios';
import storeToken from './storeToken';
import config from '../../config.json'

export default function createUser(userInformation) {
 return axios.post(`${config.DEV.BASE_URL}/api/auth/register`, userInformation).then((res) => {
  storeToken(res.data.token);
    return res.data.auth;
  }, (err) => {
    console.log(err);
  })
 }
