import AppError from '@shared/errors/AppError';

import Console from '@app/schemas/Console';
import MongoMock from '@shared/tests/MongoMock';
import CreateConsoleService from './CreateConsoleService';

let createConsole: CreateConsoleService;

describe('Console', () => {
  beforeAll(async () => {
    await MongoMock.connect();
  });

  afterAll(async () => {
    await MongoMock.disconnect();
  });

  beforeEach(async () => {
    await Console.deleteMany({});

    createConsole = new CreateConsoleService();
  });

  it('should be able to register a new console', async () => {
    await createConsole.execute({
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

  it('should not be able to create a new console with same name from another', async () => {
    await createConsole.execute({
      name: 'Nitendo 64',
      company: 'Nitendo',
    });

    await expect(
      createConsole.execute({
        name: 'Nitendo 64',
        company: 'Nitendo',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
