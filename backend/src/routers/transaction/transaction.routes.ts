import { Router } from 'express';
import createTransactionController from '../../controllers/transaction/createTransaction.controller';
import listTransactionsCashoutController from '../../controllers/transaction/listTransactionCashout.controller';
import listTransactionsByUserIdController from '../../controllers/transaction/listTransactionsByUser.controller';
import listTransactionsCashinController from '../../controllers/transaction/listTranzactionCashin.controller';
import ensureAuthMiddleware from '../../middlewares/ensureAuth.middleware';
import validateSchemaMiddleware from '../../middlewares/validateSchema.middleware';
import { createTrasactionSchema } from '../../schemas/trasaction/transaction.schema';

const transactionRouter = Router();

transactionRouter.post(
  '',
  validateSchemaMiddleware(createTrasactionSchema),
  ensureAuthMiddleware,
  createTransactionController
);
transactionRouter.get(
  '',
  ensureAuthMiddleware,
  listTransactionsByUserIdController
);
transactionRouter.get(
  '/cashout',
  ensureAuthMiddleware,
  listTransactionsCashoutController
);
transactionRouter.get(
  '/cashin',
  ensureAuthMiddleware,
  listTransactionsCashinController
);

export default transactionRouter;
