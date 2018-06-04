import axiosAutorizationHeader from '../config/interceptor';
import config from '../../config.json';

export default function getMyProfile() {
  return axiosAutorizationHeader.get(`${config.DEV.BASE_URL}/users/my-profile`).then((res) => {
    return res.data;
  }, (error) => {
    console.error(error.response.data);
  })
}
