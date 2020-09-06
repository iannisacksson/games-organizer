import { Router } from 'express';

import consolesRouter from './consoles.routes';
import gamesRouter from './games.routes';

const routes = Router();

routes.use('/consoles', consolesRouter);
routes.use('/games', gamesRouter);

export default routes;
