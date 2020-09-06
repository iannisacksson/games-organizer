import { Request, Response } from 'express';

import CreateGameService from '@app/services/CreateGameService';

const createGameService = new CreateGameService();

export default class GameController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, console_id } = request.body;

    const game = await createGameService.execute({ name, console_id });

    return response.status(200).json(game);
  }
}
