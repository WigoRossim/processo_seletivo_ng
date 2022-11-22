import { Request, Response } from 'express';
import { Transactions } from '../../entities/transactions.entity';
import listTransactionsCashoutService from '../../services/transactions/listTransactionCashout.service';


const listTransactionsCashoutController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: string = req.user.id;
  const transactions: Transactions[] = await listTransactionsCashoutService(
    id
  );
  return res.json(transactions);
};

export default listTransactionsCashoutController;