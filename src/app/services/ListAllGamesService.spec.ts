import Console from '@app/schemas/Console';
import Game from '@app/schemas/Game';
import MongoMock from '@shared/tests/MongoMock';
import ListAllGamesService from './ListAllGamesService';

let listAllGames: ListAllGamesService;

describe('List Games', () => {
  beforeAll(async () => {
    await MongoMock.connect();
  });

  afterAll(async () => {
    await MongoMock.disconnect();
  });

  beforeEach(async () => {
    await Console.deleteMany({});

    listAllGames = new ListAllGamesService();
  });

  it('should be able to list all games', async () => {
    const console = await Console.create({
      name: 'Nitendo 64',
      company: 'Nitendo',
    });

    await Game.create({
      name: 'The Legend of Zelda: Majoras Mask',
      console_id: console.id,
    });

    const consoles = await listAllGames.execute();

    expect(consoles).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'The Legend of Zelda: Majoras Mask',
        }),
      ]),
    );
  });
});
