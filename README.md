# gbfs-validator

## Scripts

`start()` script in `gbfs/index.js` does the following:

### store_vehicle_ids

- Function that gets all vehicle IDs from LIME.
- In `data/gbfs/vehicles` directory it stores a file per vehicle.

### store_unique_vehicles_amount

- Function that counts amount of unique files in `data/gbfs/vehicles` folder

## How to run

You can run the start script manually:

    node index.js

Or by setting up a cron job, in example:

    crontab -e
    0 * * * * cd /home/USER/dev/gbfs-validator && /home/USER/.nvm/versions/node/v18.6.0/bin/node index.js
