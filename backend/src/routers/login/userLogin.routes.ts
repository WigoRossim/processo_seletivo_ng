import { Router } from 'express';
import validateSchemaMiddleware from '../../middlewares/validateSchema.middleware';
import { loginSchema } from '../../schemas/login/userLogin.schema';
import userLoginController from '../../controllers/login/userLogin.controller';

const userLoginRouter = Router();

userLoginRouter.post(
  '',
  validateSchemaMiddleware(loginSchema),
  userLoginController
);

export default userLoginRouter;
