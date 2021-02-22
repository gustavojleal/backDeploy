import { getRepository, Repository } from 'typeorm';

import INewUserTokensRepository from '@modules/users/repositories/INewUserTokensRepository';

import NewUserToken from '../entities/NewUserToken';

class NewUserTokensRepository implements INewUserTokensRepository {
  private ormRepository: Repository<NewUserToken>;

  constructor() {
    this.ormRepository = getRepository(NewUserToken);
  }

  public async findByToken(token: string): Promise<NewUserToken | undefined> {
    const newUserToken = await this.ormRepository.findOne({
      where: { token },
    });

    return newUserToken;
  }

  public async generate(name: string, email: string): Promise<NewUserToken> {
    const newUserToken = this.ormRepository.create({
      name,
      email
    });

    await this.ormRepository.save(newUserToken);

    return newUserToken;
  }
}

export default NewUserTokensRepository;
