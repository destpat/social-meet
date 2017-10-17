import axios from 'axios';
import config from '../../config.json'

export default function getAutorization(email, password) {
  console.log('inside');
  return axios.post(`${config.DEV.BASE_URL}/api/auth/login`, {
    email : email,
    password : password
  })
}
