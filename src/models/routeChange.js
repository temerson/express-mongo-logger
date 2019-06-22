import mongoose from 'mongoose';

const routeChangeSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  agency: String,
  userId: String,
  route: String,
  timestamp: Date,
  version: String,
});

const RouteChange = mongoose.model('RouteChange', routeChangeSchema);

export default RouteChange;
