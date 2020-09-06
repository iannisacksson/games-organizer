import 'dotenv/config';
import express from 'express';

import routes from '@shared/http/routes';

import '@shared/database';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('🚀️ Server started on port 3333!');
});
