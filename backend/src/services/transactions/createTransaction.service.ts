import AppDataSource from '../../data-source';
import { AppError } from '../../errors/appError';
import { ITransactionRequest } from '../../interfaces/transaction/transaction';
import { Transactions } from '../../entities/transactions.entity';
import { Accounts } from '../../entities/accounts.entity';
import { User } from '../../entities/users.entity';

const createTransactionService = async (
  { value, debitedAccountId, creditedAccountId }: ITransactionRequest,
  id: string
): Promise<Transactions> => {
  const transactiosRepository = AppDataSource.getRepository(Transactions);
  const userRepository = AppDataSource.getRepository(User);
  const accountRepository = AppDataSource.getRepository(Accounts);

  const user = await userRepository.findOneBy({ id });
  if (!user) {
    throw new AppError('User not found');
  }

  if (debitedAccountId === creditedAccountId) {
    throw new AppError('Operation not allowed');
  }

  if (user.accounts.balance < value) {
    throw new AppError('Not enough money');
  }

  const cashOutId = await accountRepository.findOneBy({ id: debitedAccountId });
  const cashInId = await accountRepository.findOneBy({ id: creditedAccountId });

  if (!cashOutId || !cashInId) {
    throw new AppError('Account not found');
  }

  const newTransaction: Transactions = new Transactions();
  newTransaction.value = value;
  newTransaction.debitedAccount = cashOutId;
  newTransaction.creditedAccount = cashInId;

  const transaction: Transactions =
    transactiosRepository.create(newTransaction);
  await transactiosRepository.save(transaction);

  const transactionCreated: Transactions | null =
    await transactiosRepository.findOneBy({
      id: transaction.id,
    });

  return transactionCreated!;
};

export default createTransactionService;
