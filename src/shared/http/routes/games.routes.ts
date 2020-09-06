import { Router } from 'express';

import GameController from '@app/controllers/GameController';

const consolesRouter = Router();
const gameController = new GameController();

consolesRouter.post('/', gameController.create);
consolesRouter.get('/', gameController.index);

export default consolesRouter;
