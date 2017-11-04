import axiosAutorizationHeader from '../config/interceptor';
import config from '../../config.json';

export default function updateProfile(updatedUserInformation) {
  return axiosAutorizationHeader.put(`${config.DEV.BASE_URL}/api/auth/update/`, updatedUserInformation).then((res) => {
    console.log('******* DEBUG ********');
    console.log(res.data);
    console.log('******* DEBUG ********');
  }, (err) => {
    console.error(err);
  })
}
