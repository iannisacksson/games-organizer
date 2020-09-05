import { Router } from 'express';

import gamesRouter from './games.routes';

const routes = Router();

routes.use('/games', gamesRouter);

export default routes;
