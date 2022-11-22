import { Request, Response } from 'express';
import { Transactions } from '../../entities/transactions.entity';
import listTransactionsCashinService from '../../services/transactions/listTransactionCashin.service';

const listTransactionsCashinController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: string = req.user.id;
  const transactions: Transactions[] = await listTransactionsCashinService(id);
  return res.json(transactions);
};

export default listTransactionsCashinController;
