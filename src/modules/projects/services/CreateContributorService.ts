import { injectable, inject } from 'tsyringe';

import IContributorsRepository from '../repositories/IContributorsRepository';

import Contributor  from '../infra/typeorm/entities/Contributors';

interface IRequest {
  projectId: string,
  userId: string,

}

@injectable()
class CreateContributorService {
  
  constructor(
    @inject('ContributorsRepository')
    private contributorsRepository: IContributorsRepository,
  ) {}

  public async execute({
    projectId,
    userId,
   
  }: IRequest): Promise<Contributor> {
 
    const contributor = await this.contributorsRepository.create({
      projectId,
      userId,

    })
    
    return contributor;
  }
}

export default CreateContributorService;
