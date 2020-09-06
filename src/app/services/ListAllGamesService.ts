import Game, { IGame } from '@app/schemas/Game';

type Response = IGame[];

class ListAllGamesService {
  public async execute(): Promise<Response> {
    // const games = await Game.find({});
    // return games;
  }
}

export default ListAllGamesService;
