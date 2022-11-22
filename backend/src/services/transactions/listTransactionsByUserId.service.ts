import AppDataSource from '../../data-source';
import { AppError } from '../../errors/appError';
import { Transactions } from '../../entities/transactions.entity';
import { User } from '../../entities/users.entity';

const listTransactionsByUserIdService = async (
  id: string
): Promise<Transactions[]> => {
  const transactionRepository = AppDataSource.getRepository(Transactions);
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({ id });

  if (!findUser) {
    throw new AppError('User not found', 404);
  }

  const listAccounts = await userRepository.findOne({
    where: {
      id: findUser.id,
    },
    relations: {
      accounts: true,
    },
  });

  if (!listAccounts) {
    throw new AppError('List not found');
  }


  const list = [
    ...listAccounts?.accounts.transaction_creditedAccount,
    ...listAccounts?.accounts.transaction_debitedAccount,
  ];

  return list;
};

export default listTransactionsByUserIdService;
