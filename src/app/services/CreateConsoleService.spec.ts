import Console from '@app/schemas/Console';
import MongoMock from '@shared/tests/MongoMock';
import CreateConsoleService from './CreateConsoleService';

describe('Console', () => {
  beforeAll(async () => {
    await MongoMock.connect();
  });

  afterAll(async () => {
    await MongoMock.disconnect();
  });

  beforeEach(async () => {
    await Console.deleteMany({});
  });

  it('should be able to register a new console', async () => {
    const createConsoleService = new CreateConsoleService();

    await createConsoleService.execute({
      name: 'Nitendo 64',
      company: 'Nitendo',
    });

    const list = await Console.find({});

    expect(list).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'Nitendo 64',
        }),
      ]),
    );
  });
});
