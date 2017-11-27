import axiosAutorizationHeader from '../config/interceptor';
import config from '../../config.json'

export default function getNewUsersList() {
  return axiosAutorizationHeader.get(`${config.DEV.BASE_URL}/users/newer`).then((res) => {
    return res.data;
  }, (err) => {
    console.error(err.response.data.message);
  })
}
