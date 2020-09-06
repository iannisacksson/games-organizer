import { Router } from 'express';

import GameController from '@app/controllers/GameController';

const consolesRouter = Router();
const gameController = new GameController();

consolesRouter.post('/', gameController.create);

export default consolesRouter;
