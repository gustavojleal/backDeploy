import { getRepository, Repository } from 'typeorm';

import IContributorsRepository from '@modules/projects/repositories/IContributorsRepository';
import ICreateContributorDTO from '@modules/projects/dtos/ICreateContributorDTO';

import Contributor from '../entities/Contributors';

class ContributorsRepository implements IContributorsRepository {
  private ormRepository: Repository<Contributor>;

  constructor() {
    this.ormRepository = getRepository(Contributor);
  }

  public async findAllForUser(user_id: string): Promise<any> {
      const user = user_id
      const contributorOnProjects = await this.ormRepository.find({where: user})

      return contributorOnProjects;
    }

  public async create({
    userId,
    projectId,
  }: ICreateContributorDTO): Promise<Contributor> {
    const contributor = this.ormRepository.create({
      userId,
      projectId
    });


    await this.ormRepository.save(contributor);

    return contributor;
  }
}

export default ContributorsRepository;
