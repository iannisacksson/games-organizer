// import AppError from '@shared/errors/AppError';

import Console from '@app/schemas/Console';
import Game from '@app/schemas/Game';
import MongoMock from '@shared/tests/MongoMock';
import CreateGameService from './CreateGameService';

let createGame: CreateGameService;

describe('CreateGame', () => {
  beforeAll(async () => {
    await MongoMock.connect();
  });

  afterAll(async () => {
    await MongoMock.disconnect();
  });

  beforeEach(async () => {
    await Game.deleteMany({});

    createGame = new CreateGameService();
  });

  it('should be able to register a new game', async () => {
    const console = await Console.create({
      name: 'Nitendo 64',
      company: 'Nitendo',
    });

    await createGame.execute({
      name: 'The Legend of Zelda: Majoras Mask',
      console_id: console.id,
    });

    const list = await Game.find({});

    expect(list).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'The Legend of Zelda: Majoras Mask',
        }),
      ]),
    );
  });
});
