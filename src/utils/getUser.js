import axiosAutorizationHeader from '../config/interceptor';

export default function getUser(idUser) {
  return axiosAutorizationHeader.get('http://192.168.1.13:3000/users/' + idUser).then((res) => {
    return res.data;
  }, (err) => {
    console.error(err);
  })
}
