import { Request, Response } from 'express';

import CreateGameService from '@app/services/CreateGameService';
import ListAllGamesService from '@app/services/ListAllGamesService';
import ListAllGamesByConsoleService from '@app/services/ListAllGamesByConsoleService';

const createGameService = new CreateGameService();
const listAllGamesService = new ListAllGamesService();
const listAllGamesByConsoleService = new ListAllGamesByConsoleService();

export default class GameController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, console_id } = request.body;

    const game = await createGameService.execute({ name, console_id });

    return response.status(200).json(game);
  }

  public async all(request: Request, response: Response): Promise<Response> {
    const consoles = await listAllGamesService.execute();

    return response.status(200).json(consoles);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { console_id } = request.params;

    const consoles = await listAllGamesByConsoleService.execute(console_id);

    return response.status(200).json(consoles);
  }
}
