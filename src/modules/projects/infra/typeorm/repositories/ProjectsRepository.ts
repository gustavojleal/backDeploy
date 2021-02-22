import { getRepository, Repository, JoinTable } from 'typeorm';

import IProjectsRepository from '@modules/projects/repositories/IProjectsRepository';

import Project from '../entities/Projects';
import Card from '../entities/Cards'

interface IRequest {
  id?: string;
  name: string;
  createdBy_id: string;
  responsable_id: string;
  structure: JSON;
  tasks: Card[];
  updated_at?: Date;
}

class ProjectsRepository implements IProjectsRepository {
  private ormRepository: Repository<Project>;

  constructor() {
    this.ormRepository = getRepository(Project);
  }

  public async findOneProject(projectId: string): Promise<Project | undefined> {
   
    
    const project = this.ormRepository.findOne({where: {id: projectId } })
    
    return project
  }

  public async findAllProjects(ids: string[]): Promise<Project[]> {
    const projects = (await this.ormRepository.findByIds(ids, {relations: ['tasks']}))
    
    return projects
  }

  public async create({
    name,
    createdBy_id,
    responsable_id,
    structure,
    tasks
  }: IRequest): Promise<Project> {
    
    const project = this.ormRepository.create({
      name,
      createdBy_id,
      responsable_id,
      structure,
      tasks
    }, [] );

    await this.ormRepository.save(project);

    return project;
  }

  public async updateProject({
    id,
    name,
    createdBy_id,
    responsable_id,
    structure,
    updated_at,
    tasks
  }: IRequest): Promise<Project> {

    const project = this.ormRepository.update({id}, {
      name,
      createdBy_id,
      responsable_id,
      updated_at,
      tasks
    });

    // await this.ormRepository.save(project);

    return project;
  }
}

export default ProjectsRepository;
