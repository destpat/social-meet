import axios from 'axios';
import storeToken from './storeToken'

import moment from 'moment'

export default function createUser(userInformation) {
 return axios.post('http://192.168.1.13:3000/api/auth/register', userInformation).then((res) => {
  storeToken(res.data.token);
    return res.data.auth;
  }, (err) => {
    console.log(err);
  })
 }
