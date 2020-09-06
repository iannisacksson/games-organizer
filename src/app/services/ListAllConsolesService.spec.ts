import Console from '@app/schemas/Console';
import MongoMock from '@shared/tests/MongoMock';
import CreateConsoleService from './CreateConsoleService';
import ListAllConsolesService from './ListAllConsolesService';

let createConsole: CreateConsoleService;
let listAllConsoles: ListAllConsolesService;

describe('CreateConsole', () => {
  beforeAll(async () => {
    await MongoMock.connect();
  });

  afterAll(async () => {
    await MongoMock.disconnect();
  });

  beforeEach(async () => {
    await Console.deleteMany({});

    createConsole = new CreateConsoleService();
    listAllConsoles = new ListAllConsolesService();
  });

  it('should be able to list all consoles', async () => {
    await createConsole.execute({
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
