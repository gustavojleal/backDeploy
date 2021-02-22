import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SendNewAccountEmailService from '@modules/users/services/SendNewAccountEmailService';

export default class CreateNewAccountController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const sendNewAccountEmail = container.resolve(
      SendNewAccountEmailService,
    );

    await sendNewAccountEmail.execute({
      name,
      email,
    });

    return response.status(204).json();
  }
}
