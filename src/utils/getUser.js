import axiosAutorizationHeader from '../config/interceptor';
import config from '../../config.json';

export default function getUser(idUser) {
  return axiosAutorizationHeader.get(`${config.DEV.BASE_URL}/users/` + idUser).then((res) => {
    return res.data;
  }, (err) => {
    console.error(err.response.data.message);
  })
}
