import { injectable, inject } from 'tsyringe';

import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
import IProjectsRepository from '../repositories/IProjectsRepository';

import Project from '../infra/typeorm/entities/Projects';

interface IRequest {
  id: string;
  name: string;
  createdBy_id: string;
  responsable_id: string;
  structure: JSON;

}

@injectable()
class UpdateProjectService {
  
  constructor(
    @inject('ProjectsRepository')
    private projectsRepository: IProjectsRepository,

    @inject('NotificationsRepository')
    private notificationsRepository: INotificationsRepository,

  ) {}

  public async execute({
    id,
    name,
    createdBy_id,
    responsable_id,
    structure
  }: IRequest): Promise<Project> {

    const project = await this.projectsRepository.updateProject({
      id,
      name,
      createdBy_id,
      responsable_id,
      structure
    });

    await this.notificationsRepository.create({
      recipient_id: createdBy_id,
      content: `Project updated ${name}`,
    });

   
    return project;
  }
}

export default UpdateProjectService;
