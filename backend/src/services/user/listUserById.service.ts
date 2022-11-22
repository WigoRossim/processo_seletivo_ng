import AppDataSource from '../../data-source';
import { User } from '../../entities/users.entity';
import { AppError } from '../../errors/appError';

const listUserByIdServices = async (id: string): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id });
  if (!user) {
    throw new AppError('User not found');
  }
  return user;
};

export default listUserByIdServices;
