import express, {
  Request,
  Response,
  NextFunction,
  urlencoded,
  json,
} from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import todoRouter from './routes/todo-routes';
import userRouter from './routes/user-routes';

const app: express.Application = express();
app.use(urlencoded({ extended: true }));
app.use(json());
dotenv.config();

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

app.use('/api', todoRouter);
app.use('/api', userRouter);

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.fykep.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log('Connected to the server');
    });
  })
  .catch(err => {
    console.log(err);
  });
