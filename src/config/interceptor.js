import axios from 'axios';
import Promise from 'promise';
import getToken from '../utils/getToken'

// Add a request interceptor
let axiosAutorizationHeader = axios.create();
axiosAutorizationHeader.interceptors.request.use(async (config) => {
  const token = await getToken();
  if (token) {
    config.headers['x-access-token'] = token;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosAutorizationHeader;
