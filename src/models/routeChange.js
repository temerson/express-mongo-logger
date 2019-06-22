import mongoose from 'mongoose';

const routeChangeSchema = new mongoose.Schema({
  agency: String,
  userId: String,
  route: String,
  timestamp: Date,
  version: String,
});

const RouteChange = mongoose.model('RouteChange', routeChangeSchema);

export default RouteChange;
