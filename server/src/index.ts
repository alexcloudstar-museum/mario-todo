import express, {
  Request,
  Response,
  NextFunction,
  urlencoded,
  json,
} from 'express';

import dotenv from 'dotenv';

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

app.use('/api');

app.get('/', (req: Request, res: Response, next: NextFunction) =>
  res.send('Express + TypeScript Server')
);
app.listen(process.env.PORT, () => {
  console.log(
    `⚡️[server]: Server is running at https://localhost:${process.env.PORT}`
  );
});
