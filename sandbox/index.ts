import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
    await client.hSet('car', {
        color: 'red',
        year: 1950
    });

    const car = await client.hGetAll('car123');
    if (Object.keys(car).length === 0) { // if no object was found a {} will be returned
        console.log('car not found');
        return
    }
    console.log(car);
};
run();