import { Request, Response } from 'express';
import { instanceToPlain } from 'class-transformer';
import { User } from '../../entities/users.entity';
import listUsersServices from '../../services/user/listUsers.service';

const listUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users: User[] = await listUsersServices();
  return res.status(201).json(instanceToPlain(users));
};

export default listUsersController;
