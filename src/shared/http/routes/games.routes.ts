import { Router } from 'express';

import GameController from '@app/controllers/GameController';

const consolesRouter = Router();
const gameController = new GameController();

consolesRouter.post('/', gameController.create);
consolesRouter.get('/', gameController.all);
consolesRouter.get('/:console_id', gameController.index);

export default consolesRouter;
