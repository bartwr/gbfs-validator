import {
  store_data_file
} from '../scripts/file.js'
import {
  store_unique_vehicles_amount
} from './store_unique_vehicles_amount.js'
import {
  store_vehicle_ids
} from './store_vehicle_ids.js'

const start = () => {
  store_vehicle_ids();
  store_unique_vehicles_amount();

  console.log('Script succesfully executed 🍯')
}

start();
