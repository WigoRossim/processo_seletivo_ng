import { Request, Response } from 'express';
import { IUserLogin } from '../../interfaces/user/user';
import userLoginService from '../../services/login/userLogin.service';

const userLoginController = async (req: Request, res: Response) => {
  const data: IUserLogin = req.validatedBody;
  const responseLogin = await userLoginService(data);
  return res.status(200).json(responseLogin);
};

export default userLoginController;
