import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProjectService from '@modules/projects/services/ListProjectsService';

export default class ListProjectsController {
  public async execute(request: Request, response: Response): Promise<Response> {
    const user = request.user.id;
  
    const listProject = container.resolve(ListProjectService);

    const projects = await listProject.execute(user);

    return response.json(projects);
  }
}
