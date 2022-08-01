import config from '../config/gbfs.js'
import {
  store_data_file
} from '../scripts/file.js'

const get_vehicle_feed = async () => {
  const response = await fetch("https://data.lime.bike/api/partners/v2/gbfs_secure/rotterdam/free_bike_status.json", {
    headers: {
      Authorization: `Bearer ${config.lime}`
    }
  });

  return await response.json()
}

const get_vehicle_data = (feed) => {
  return feed.data.bikes;
}

export const store_vehicle_ids = async () => {
  const feed = await get_vehicle_feed()
  const vehicle_data = get_vehicle_data(feed)
  // Store file for every vehicle_id
  vehicle_data.forEach(x => {
    const ID = x.bike_id
    const dirPath =`gbfs/vehicles`;
    store_data_file(`${dirPath}/${ID}`, '');
  });
}

