import axiosAutorizationHeader from '../config/interceptor';
import config from '../../config.json'

export default function getAllUsers() {
  return axiosAutorizationHeader.get(`${config.DEV.BASE_URL}/users`).then((res) => {
    return res.data;
  }, (err) => {
    console.error(err.response.datas.message);
  })
}
