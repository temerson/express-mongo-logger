## express-mongo-logger

Simple app that takes whatever is `POST`ed to `/` and logs it in a Mongo instance.

Requires some environment variables. An example `.env` file placed in the root of the project would be:
```
PORT=3000
DATABASE_URL=mongodb://localhost:27017/express-mongo-logger
```
