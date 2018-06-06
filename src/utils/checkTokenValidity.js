import config from '../../config.json';
import axiosAutorizationHeader from '../config/interceptor';
import getToken from '../utils/getToken';

const checkTokenValidity = async () => {
  return axiosAutorizationHeader.post(`${config.DEV.BASE_URL}/api/auth/verify-token`)
}
export default checkTokenValidity;
