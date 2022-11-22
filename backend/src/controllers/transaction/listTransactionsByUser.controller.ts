import { Request, Response } from 'express';
import { Transactions } from '../../entities/transactions.entity';
import listTransactionsByUserIdService from '../../services/transactions/listTransactionsByUserId.service';

const listTransactionsByUserIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: string = req.user.id;
  const transactions: Transactions[] = await listTransactionsByUserIdService(
    id
  );
  return res.json(transactions);
};

export default listTransactionsByUserIdController;
