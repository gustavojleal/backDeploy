import { injectable, inject } from 'tsyringe';
import path from 'path';

import AppError from '@shared/errors/AppError';
import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';
import IUsersRepository from '../repositories/IUsersRepository';
import INewUserTokensRepository from '../repositories/INewUserTokensRepository';

interface IRequest {
  email: string;
  name: string;
}

@injectable()
class SendNewAccountEmailService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('MailProvider')
    private mailProvider: IMailProvider,

    @inject('NewUserTokensRepository')
    private newUserTokensRepository: INewUserTokensRepository,
  ) {}

  public async execute({ email, name }: IRequest): Promise<void> {
    const user = await this.usersRepository.findByEmail(email);

    if (user) {
      throw new AppError('This email is already used.');
    }

    const { token } = await this.newUserTokensRepository.generate(name, email);

    const newUserTokensTemplate = path.resolve(
      __dirname,
      '..',
      'views',
      'create_new_user.hbs',
    );

    await this.mailProvider.sendMail({
      to: {
        name: name,
        email: email,
      },
      subject: '[EasyKanban] Recuperação de senha',
      templateData: {
        file: newUserTokensTemplate,
        variables: {
          name: name,
          link: `${process.env.APP_WEB_URL}/SignUp?token=${token}`,
        },
      },
    });
  }
}

export default SendNewAccountEmailService;
