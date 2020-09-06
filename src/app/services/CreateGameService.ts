import Game from '@app/schemas/Game';

interface IRequest {
  name: string;
  console_id: string;
}

class CreateGameService {
  public async execute({ name, console_id }: IRequest): Promise<IRequest> {
    const game = await Game.create({ name, console_id });

    return game;
  }
}

export default CreateGameService;
