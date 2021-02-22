import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import CreateNewAccountController from '../controllers/CreateNewAccountController';

const createNewAccountRouter = Router();
const createNewAccountController = new CreateNewAccountController();

createNewAccountRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
    },
  }),
  createNewAccountController.create,
);


export default createNewAccountRouter;
