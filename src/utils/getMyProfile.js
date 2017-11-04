import axiosAutorizationHeader from '../config/interceptor';
import config from '../../config.json';

export default function getMyProfile() {
  return axiosAutorizationHeader.get(`${config.DEV.BASE_URL}/api/auth/my-profile`).then((res) => {
    return res.data;
  }, (err) => {
    console.error(err);
  })
}
