import { Router } from 'express';

import createNewAccountRouter from '@modules/users/infra/http/routes/createNewAccount.routes'
import inviteFriendRouter from '@modules/users/infra/http/routes/inviteFriend.routes'
import projectsRouter from '@modules/projects/infra/http/routes/projects.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import passwordRouter from '@modules/users/infra/http/routes/password.routes';
import profileRouter from '@modules/users/infra/http/routes/profile.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';

const routes = Router();

routes.use('/createNewAccount', createNewAccountRouter);
routes.use('/inviteFriend', inviteFriendRouter);
routes.use('/projects', projectsRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);
routes.use('/users', usersRouter);

export default routes;
