import axiosAutorizationHeader from '../config/interceptor';
import config from '../../config.json'

export default function putProfile(updatedUserInformation) {
  return axiosAutorizationHeader.put(`${config.DEV.BASE_URL}/users/update-profile`, updatedUserInformation);
}
