import config from '../../config.json'
import axiosAutorizationHeader from '../config/interceptor';

const checkTokenValidity = async () => {
  let validityToken = axiosAutorizationHeader.post(`${config.DEV.BASE_URL}/api/auth/verify-token`);
  return validityToken;
}

export default checkTokenValidity;
