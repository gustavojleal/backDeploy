import Project from '../infra/typeorm/entities/Projects';
import ICreateProjectDTO from '../dtos/ICreateProjectDTO';

export default interface IProjectsRepository {
  create(data: ICreateProjectDTO): Promise<Project>;
  findAllProjects(projectsId: string[]): Promise<Project[]>;
  findOneProject(projectId: string): Promise<Project | undefined>;
  updateProject(data: ICreateProjectDTO): Promise<Project>;
  // findWithSameName(name: string): Promise<Project | undefined>;
}
