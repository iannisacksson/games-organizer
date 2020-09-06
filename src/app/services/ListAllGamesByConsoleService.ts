import Game, { IGame } from '@app/schemas/Game';
import Console from '@app/schemas/Console';
import AppError from '@shared/errors/AppError';

type Response = IGame[];

class ListAllGamesService {
  public async execute(console_id: string): Promise<Response> {
    const console = await Console.findById(console_id);

    if (!console) {
      throw new AppError('Console not find', 404);
    }

    const games = await Game.find({ console_id: console.id }).populate(
      'console_id',
    );

    return games;
  }
}

export default ListAllGamesService;
