import axios from 'axios';
import promise from 'promise';
import getToken from '../utils/getToken'

// Add a request interceptor
let axiosAutorizationHeader = axios.create();

getToken().then((token) => {
  axiosAutorizationHeader.interceptors.request.use((config) => {
    if (token) {
      config.headers['x-access-token'] = token;
    }
    return config;
  }, (error) => {
     // Do something with request error
     return promise.reject(error);
  });
})
export default axiosAutorizationHeader;
