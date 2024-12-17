import { connect, set } from 'mongoose';

const MONGO_DB_URI = process.env.MONGO_DB_URI as string;

export const connectToMongoDB = async () => {
    try {
        set('strictQuery', false);
        const db = await connect(MONGO_DB_URI);
        console.log('Connected to MongoDB:', db.connection.name);

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}
