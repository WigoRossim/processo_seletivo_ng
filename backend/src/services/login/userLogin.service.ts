import AppDataSource from '../../data-source';
import { AppError } from '../../errors/appError';
import { User } from '../../entities/users.entity';
import { IUserLogin, IUserLoginResponse } from '../../interfaces/user/user';
import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const userLoginService = async ({
  username,
  password,
}: IUserLogin): Promise<IUserLoginResponse> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({
    username: username,
  });
  if (!user) {
    throw new AppError('Invalid user or password', 403);
  }
  const passwordMatch = await compare(password, user.password);
  if (!passwordMatch) {
    throw new AppError('Invalid user or password', 403);
  }
  const token = jwt.sign(
    {
      username: user.username,
      accountId: user.accounts.id,
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn: '24h',
      subject: user.id,
    }
  );

  const response = {
    token: token,
    user: user,
  };
  return response;
};

export default userLoginService;
