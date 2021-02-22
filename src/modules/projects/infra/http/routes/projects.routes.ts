import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProjectController from '../controllers/ProjectsController';
import ListProjectController from '../controllers/ListProjectsController';
import FindProjectController from '../controllers/FindProjectControlle';
import UpdateCardsController from '../controllers/UpdateCardsController';

const projectsRouter = Router();
const projectsController = new ProjectController();
const updateCardsController = new UpdateCardsController();
const listProjectsController = new ListProjectController();
const findProjectController = new FindProjectController();

projectsRouter.use(ensureAuthenticated);

projectsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      structure: Joi.string(),
      // tasks: Joi.string(),

    },
  }),
  projectsController.create, 
);

projectsRouter.put(
  '/',
  celebrate({
    [Segments.BODY]: {
      userName: Joi.string().required(),
      name: Joi.string().required(),
      id: Joi.string().required(),
      tasks: Joi.string(),
    },
  }),
  updateCardsController.execute,
);

// projectsRouter.post(
//   '/card',
//   celebrate({
//     [Segments.BODY]: {
//       id: Joi.string().required(),
//       task: Joi.string()
//     },
//   }),
//   projectsController.create,
// );

projectsRouter.get(
  '/this', 
  celebrate({
    [Segments.PARAMS]: {
      projectId: Joi.string().uuid()

    },
  }), 
  findProjectController.findProject);
  
  projectsRouter.get('/', listProjectsController.execute);
  
  export default projectsRouter;
  