import { Request, Response } from 'express';

import CreateConsoleService from '@app/services/CreateConsoleService';

const createConsoleService = new CreateConsoleService();

export default class ForgotPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, company } = request.body;

    const console = await createConsoleService.execute({ name, company });

    return response.status(200).json(console);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { name, company } = request.body;

    const consoles = await createConsoleService.execute({ name, company });

    return response.status(200).json(consoles);
  }
}
