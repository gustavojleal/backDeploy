import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SendInviteFriendEmailService from '@modules/users/services/SendEmailToFriendService';

export default class InviteFriendController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, note, userName } = request.body;

    const sendEmailToFriend = container.resolve(
      SendInviteFriendEmailService,
    );

    await sendEmailToFriend.execute({
      name,
      email,
      note,
      userName,
    });

    return response.status(204).json();
  }
}
