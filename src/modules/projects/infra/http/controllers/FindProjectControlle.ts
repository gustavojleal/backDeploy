import { Request, Response } from 'express';
import { container } from 'tsyringe';

import FindProjectService from '@modules/projects/services/FindProjectService';


export default class FindProjectController {
  public async findProject(request: Request, response: Response): Promise<Response> {
    const projectId  = request.query.projectId;
    
    const findProject = container.resolve(FindProjectService);
    
    const project = await findProject.execute(projectId);
    

    return response.json(project);
  }
}
