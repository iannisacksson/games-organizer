import Console from '@app/schemas/Console';
import AppError from '@shared/errors/AppError';

interface IRequest {
  name: string;
  company: string;
}

class CreateConsoleService {
  public async execute({ name, company }: IRequest): Promise<IRequest> {
    const consoleExist = await Console.findOne({ name });

    if (consoleExist) {
      throw new AppError(`The ${name} console has already exists`, 409);
    }

    const console = await Console.create({ name, company });

    return console;
  }
}

export default CreateConsoleService;
