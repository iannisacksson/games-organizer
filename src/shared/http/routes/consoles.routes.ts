import { Router } from 'express';

import ConsoleController from '@app/controllers/ConsoleController';

const consolesRouter = Router();
const consoleController = new ConsoleController();

consolesRouter.post('/', consoleController.create);
consolesRouter.get('/', consoleController.index);

export default consolesRouter;
