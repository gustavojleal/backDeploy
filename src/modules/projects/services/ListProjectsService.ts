import { injectable, inject } from 'tsyringe';
import IProjectsRepository from '@modules/projects/repositories/IProjectsRepository';
import Contributor from '@modules/projects/infra/typeorm/entities/Contributors';

@injectable()
class ListProjectsService {
  constructor(
    @inject('ProjectsRepository')
    private projectsRepository: IProjectsRepository,

  ) {}

  public async execute(user: string): Promise<any[]> {
    const contribuitedProjects = await Contributor.find({
      select: ["projectId"],
      where: {userId: user},
    })

    const projectIds = contribuitedProjects
      .map(project => project.projectId)
   
    const projectFound = await this.projectsRepository
      .findAllProjects(projectIds)

    // const allCards = await Card.findByIds(projectIds)

    // const projects = projectFound.map(project => {
    //   return allCards.filter(card => card.project_id === project.id)
    // })

    return projectFound
  }
  
}
export default ListProjectsService;
