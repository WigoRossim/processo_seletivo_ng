import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';
import listUserByIdServices from '../../services/user/listUserById.service';
import { User } from '../../entities/users.entity';

const listUserByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: string = req.user.id;
  const users: User = await listUserByIdServices(id);
  return res.json(instanceToPlain(users));
};

export default listUserByIdController;
