import axios from 'axios';

export default function getNewUser() {
  console.log('inside');
  return axios.get('http://192.168.1.13:3000/users/newer', {'headers' : {'x-access-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5ZGZjNDRhYzA3ZTYxZTJiNzE3MjcwMCIsImlhdCI6MTUwNzgzNzAwMiwiZXhwIjoxNTA3OTIzNDAyfQ.hsN4zbDm0zqRU4JFKwNqtkE0LLaEpKaKr34kErvoWgg' }}).then((res) => {
    console.log(res.data);
    return res.data;
  }, (err) => {
    console.error(err.response.data.message);
  })
}
