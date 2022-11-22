import { Request, Response } from 'express';
import { ITransactionRequest } from '../../interfaces/transaction/transaction';
import { Transactions } from '../../entities/transactions.entity';
import createTransactionService from '../../services/transactions/createTransaction.service';

const createTransactionController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const transactionData: ITransactionRequest = req.validatedBody;
  const userId: string = req.user.id

  const transaction: Transactions = await createTransactionService(transactionData, userId);
  return res.status(201).json(transaction);
};

export default createTransactionController;