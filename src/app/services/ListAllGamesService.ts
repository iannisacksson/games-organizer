import Game, { IGame } from '@app/schemas/Game';

type Response = IGame[];

class ListAllGamesService {
  public async execute(): Promise<Response> {
    const games = await Game.find().populate('console_id');

    return games;
  }
}

export default ListAllGamesService;
