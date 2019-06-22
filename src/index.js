import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import models, { connectDb } from './models';
import routes from './routes';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use('/', routes);

connectDb().then(async () => {
  app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}!`);
  });
});
