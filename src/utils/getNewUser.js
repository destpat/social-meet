import axios from 'axios';
import axiosAutorizationHeader from '../config/interceptor';

export default function getNewUser() {
  return axiosAutorizationHeader.get('http://192.168.1.13:3000/users/newer').then((res) => {
    return res.data;
  }, (err) => {
    console.error(err.response.data.message);
  })
}
