import mongoose from 'mongoose';

const CLOUD_DB_URL = 'mongodb+srv://YenDoan:yendoan1A@yendoan0501.117vzjo.mongodb.net/testMD4';

let database = {
    connect: () => {
        mongoose.set('strictQuery', false);
        mongoose.connect(CLOUD_DB_URL)
            .then(() => console.log('DB Connected!'))
            .catch(error => console.log('DB connection error:', error.message));
    }
}
export default database;