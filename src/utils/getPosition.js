import axios from 'axios';
import querystring from 'querystring';
import config from '../../config.json'

const getPosition = async () => {
  // Api link
  let googleApi = 'https://maps.googleapis.com/maps/api/geocode/json?';
  // Promise containe position longitude and latitude
  let position = new Promise ((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(
    // Sucess callback
    (position) => {
      let { latitude, longitude } = position.coords;
      let queryParams = {
        latlng: `${latitude}, ${longitude}`,
        key: config.DEV.GOOGLE_API_KEY,
        result_type: 'locality'
      }
      resolve(queryParams);
    },
    // Error callback
    (error) => {
      reject(`Error when getCurrentPosition : ${error}`);
    }, {  enableHighAccuracy: true,
          timeout: 2000,
          maximumAge: 0
        }
      );
    });

  try {
    // get queryParams from position resolve
    let queryParams = await position;
    let city = await axios.get(googleApi + querystring.stringify(queryParams));
    /* Return only the short name of city
    * more information https://developers.google.com/maps/documentation/geocoding/intro?hl=en
    **/
    return city.data.results[0].address_components[0].short_name;
  } catch (error) {
    console.log(`Error when getCurrentPosition : ${error}`);
  }
}

export default getPosition;
