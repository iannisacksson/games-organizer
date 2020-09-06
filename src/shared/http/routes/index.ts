import { Router } from 'express';

import consolesRouter from './consoles.routes';

const routes = Router();

routes.use('/consoles', consolesRouter);

export default routes;
