import { Request, Response } from 'express';
import { instanceToPlain } from 'class-transformer';
import { User } from '../../entities/users.entity';
import { IUserRequest } from '../../interfaces/user/user';
import createUserService from '../../services/user/createUser.service';

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: IUserRequest = req.validatedBody;
  const user: User = await createUserService(userData);
  return res.status(201).json(instanceToPlain(user));
};

export default createUserController;
