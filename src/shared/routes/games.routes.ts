import { Router } from 'express';

const gamesRouter = Router();

gamesRouter.get('/', (request, response) => {
  response.json({ ok: true });
});

export default gamesRouter;
