import path from 'path';
import {
  getAllDirFiles,
  store_data_file
} from '../scripts/file.js'

export const store_unique_vehicles_amount = () => {
  const timestamp = Date.now();
  const filePath = `gbfs/vehicle-counts/${timestamp}`;
  const root = path.resolve()
  // Get amount of files in folder
  const unique_vehicles_count = getAllDirFiles(`${root}/data/gbfs/vehicles`)
  store_data_file(filePath, ''+(unique_vehicles_count.length-1))// We subtract 1 because of .gitignore
}
