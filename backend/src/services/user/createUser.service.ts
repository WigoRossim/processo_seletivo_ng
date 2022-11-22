import AppDataSource from '../../data-source';
import { AppError } from '../../errors/appError';
import { hash } from 'bcryptjs';
import { IUserRequest } from '../../interfaces/user/user';
import { User } from '../../entities/users.entity';
import { Accounts } from '../../entities/accounts.entity';

const createUserService = async ({
  username,
  password,
}: IUserRequest): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const accountRepository = AppDataSource.getRepository(Accounts);

  const users: User[] = await userRepository.find();
  const usernameAlreadyExists = users.find((user) => user.username === username);
  if (usernameAlreadyExists) {
    throw new AppError('Email Already exists');
  }

  const accounts: Accounts = accountRepository.create({
    balance: 100
  })
  await accountRepository.save(accounts)

  const hashedPassword: string = await hash(password, 10);
  const newUser: User = new User();
  newUser.username = username;
  newUser.password = hashedPassword;
  newUser.accounts = accounts

  const user: User = userRepository.create(newUser);
  await userRepository.save(user);

  const userCreated: User | null = await userRepository.findOneBy({
    id: user.id,
  });

  return userCreated!;
};

export default createUserService;
