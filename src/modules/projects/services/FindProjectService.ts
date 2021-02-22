import { injectable, inject } from 'tsyringe';

import IProjectsRepository from '@modules/projects/repositories/IProjectsRepository';

@injectable()
class FindProjectService {
  constructor(
    @inject('ProjectsRepository')
    private projectsRepository: IProjectsRepository,

  ) {}

  public async execute(projectId: any): Promise<any> {

    const project = await this.projectsRepository.findOneProject(projectId)

    return project
  }
  
}
export default FindProjectService;
