import AppDataSource from '../../data-source';
import { AppError } from '../../errors/appError';
import { Transactions } from '../../entities/transactions.entity';
import { User } from '../../entities/users.entity';

const listTransactionsCashoutService = async (
  id: string
): Promise<Transactions[]> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({ id });

  if (!findUser) {
    throw new AppError('User not found', 404);
  }

  const list = [
    ...findUser?.accounts.transaction_debitedAccount
  ];

  return list;
};

export default listTransactionsCashoutService;
