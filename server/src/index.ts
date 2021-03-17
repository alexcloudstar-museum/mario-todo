import express, {
  Request,
  Response,
  NextFunction,
  urlencoded,
  json,
} from 'express';

const app: express.Application = express();

app.use(urlencoded({ extended: true }));

app.use(json());

app.get('/', (req: Request, res: Response, next: NextFunction) =>
  res.send('Express + TypeScript Server')
);
app.listen(process.env.PORT, () => {
  console.log(
    `⚡️[server]: Server is running at https://localhost:${process.env.PORT}`
  );
});
