import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateCardService from '@modules/projects/services/UpdateCardService';
import CreateProjectService from '@modules/projects/services/CreateProjectService';
import CreateContributorService from '@modules/projects/services/CreateContributorService';

interface ICard { 
  id?: any;
  owner_id?: any;
  column: any; 
  taskName: any; 
  description: any; 
  blocked: any; 
  whyblocked: any;
}

export default class ProjectsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { name, structure, tasks } = request.body;
    const createdBy_id = user_id;
    const responsable_id = user_id;

    const createProject = container.resolve(CreateProjectService);
    
    const project = await createProject.execute({
      name,
      createdBy_id,
      responsable_id,
      structure,
    });

    const createContributor = container.resolve(CreateContributorService);
    
    await createContributor.execute({
      userId: project.responsable_id,
      projectId: project.id
      
    })
    
    return response.json(project);
  }


  public async update(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { tasks } = request.body;

    const card = JSON.parse(tasks)
    const ids = card.map((card: ICard) => card.id)

    const updateTasks = container.resolve(UpdateCardService)

    await updateTasks.execute(ids)
 
    return response.json(card);
  }


}


