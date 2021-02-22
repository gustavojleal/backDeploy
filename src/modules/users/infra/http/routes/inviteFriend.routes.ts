import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import InviteFriendController from '../controllers/InviteFriendController';

const inviteFriendRouter = Router();
const inviteFriendController = new InviteFriendController();

inviteFriendRouter.use(ensureAuthenticated)
inviteFriendRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      userName: Joi.string().required(),
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      note: Joi.string()
    },
  }),
  inviteFriendController.create,
);


export default inviteFriendRouter;
