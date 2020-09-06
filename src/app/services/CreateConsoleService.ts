interface IRequest {
  name: string;
  company: string;
}

class CreateConsoleService {
  public async execute({ name, company }: IRequest): Promise<void> {}
}

export default CreateConsoleService;
