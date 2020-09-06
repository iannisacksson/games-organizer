import Console from '@app/schemas/Console';
import MongoMock from '@shared/tests/MongoMock';
import ListAllConsolesService from './ListAllConsolesService';

let listAllConsoles: ListAllConsolesService;

describe('ListConsole', () => {
  beforeAll(async () => {
    await MongoMock.connect();
  });

  afterAll(async () => {
    await MongoMock.disconnect();
  });

  beforeEach(async () => {
    await Console.deleteMany({});

    listAllConsoles = new ListAllConsolesService();
  });

  it('should be able to list all consoles', async () => {
    await Console.create({
      name: 'Nitendo 64',
      company: 'Nitendo',
    });

    const consoles = await listAllConsoles.execute();

    expect(consoles).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'Nitendo 64',
        }),
      ]),
    );
  });
});
