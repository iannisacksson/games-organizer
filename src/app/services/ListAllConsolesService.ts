import Console, { IConsole } from '@app/schemas/Console';

type Response = IConsole[];

class ListAllConsolesService {
  public async execute(): Promise<Response> {
    const consoles = await Console.find({});

    return consoles;
  }
}

export default ListAllConsolesService;
