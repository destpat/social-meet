import axios from 'axios';

export default function getAutorization(email, password) {
  return axios.post('http://192.168.1.13:3000/api/auth/login', {
    email : email,
    password : password
  })
}
