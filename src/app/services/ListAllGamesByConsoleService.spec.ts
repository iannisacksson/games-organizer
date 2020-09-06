import Console from '@app/schemas/Console';
import Game from '@app/schemas/Game';
import MongoMock from '@shared/tests/MongoMock';
import ListAllGamesByConsoleService from './ListAllGamesByConsoleService';

let listAllGamesByConsole: ListAllGamesByConsoleService;

describe('List Games By Console', () => {
  beforeAll(async () => {
    await MongoMock.connect();
  });

  afterAll(async () => {
    await MongoMock.disconnect();
  });

  beforeEach(async () => {
    await Console.deleteMany({});

    listAllGamesByConsole = new ListAllGamesByConsoleService();
  });

  it('should be able to list all games by console', async () => {
    await Console.create({
      name: 'Nitendo 2000',
      company: 'Nitendo',
    });

    const console = await Console.create({
      name: 'Nitendo 64',
      company: 'Nitendo',
    });

    await Game.create({
      name: 'The Legend of Zelda: Majoras Mask',
      console_id: console.id,
    });

    const consoles = await listAllGamesByConsole.execute(console.name);

    expect(consoles).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          console_id: expect.objectContaining({
            name: 'Nitendo 64',
          }),
        }),
      ]),
    );
  });
});
