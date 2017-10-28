import axios from 'axios';
import { Constants, Location, Permissions } from 'expo';
import querystring from 'querystring';
import config from '../../config.json'

const getPosition = async () => {
  // Location.setApiKey(config.DEV.GOOGLE_API_KEY);
  let { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status !== 'granted') {
    return 'Permission to access location was denied'
  }
  let location = await Location.getCurrentPositionAsync({
    enableHighAccuracy : false,
    maximumAge: 0
  });
  let {latitude, longitude} = location.coords;
  let position = await Location.reverseGeocodeAsync(
    {
      latitude : latitude,
      longitude : longitude
    }
  );
  return position[0].city
}

export default getPosition;
