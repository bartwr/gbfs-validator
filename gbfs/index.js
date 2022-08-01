import config from '../config/gbfs.js'
import path from 'path';
import fs from 'fs';
import {getAllDirFiles} from '../scripts/file.js'

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

const store_vehicle_ids = async () => {
  const feed = await get_vehicle_feed()
  const vehicle_data = get_vehicle_data(feed)
  // Store file for every vehicle_id
  vehicle_data.forEach(x => {
    const ID = x.bike_id
    const dirPath =`gbfs/vehicles`;
    store_file(`${dirPath}/${ID}`, '');
  });

}

const store_file = async (filePath, text) => {
  const root = path.resolve()
  const absolutePath = `${root}/data/${filePath}`;
  await fs.writeFileSync(absolutePath, text);
}

const store_unique_vehicles_amount = () => {
  const timestamp = Date.now();
  const filePath = `gbfs/vehicle-counts/${timestamp}`;
  const root = path.resolve()
  // Get amount of files in folder
  const unique_vehicles_count = getAllDirFiles(`${root}/data/gbfs/vehicles`)
  store_file(filePath, ''+(unique_vehicles_count.length-1))// We subtract 1 because of .gitignore
}

const start = () => {
  store_vehicle_ids();
  store_unique_vehicles_amount();

  console.log('Script succesfully executed 🍯')
}

start();
