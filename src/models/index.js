import mongoose from 'mongoose';
import RouteChange from './routeChange';

const connectDb = () => mongoose.connect(process.env.DATABASE_URL);

const models = { RouteChange };

export { connectDb }
export default models;
