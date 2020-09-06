import Console from '@app/schemas/Console';

interface IRequest {
  name: string;
  company: string;
}

class CreateConsoleService {
  public async execute({ name, company }: IRequest): Promise<IRequest> {
    const console = await Console.create({ name, company });

    return console;
  }
}

export default CreateConsoleService;
