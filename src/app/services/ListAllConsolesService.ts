import Console, { IConsole } from '@app/schemas/Console';
// import AppError from '@shared/errors/AppError';

type Response = IConsole[];

class ListAllConsolesService {
  public async execute(): Promise<Response> {
    const consoles = await Console.find({});

    return consoles;
  }
}

export default ListAllConsolesService;
