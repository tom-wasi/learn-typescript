import express, { Request, Response } from 'express';

const app = express();
const port = 3001;

app.get('/', (req: Request, res: Response) => {
  res.send('Here to learn?');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});