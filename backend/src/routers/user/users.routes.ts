import { Router } from 'express';
import createUserController from '../../controllers/user/createUser.controller';
import listUsersController from '../../controllers/user/listUser.controller';
import listUserByIdController from '../../controllers/user/listUserById.controller';
import ensureAuthMiddleware from '../../middlewares/ensureAuth.middleware';
import validateSchemaMiddleware from '../../middlewares/validateSchema.middleware';
import { createUserSchema } from '../../schemas/user/user.schemas';

const userRouter = Router();

userRouter.post(
  '',
  validateSchemaMiddleware(createUserSchema),
  createUserController
);
userRouter.get('', ensureAuthMiddleware, listUserByIdController);
userRouter.get('/all', listUsersController);

export default userRouter;
