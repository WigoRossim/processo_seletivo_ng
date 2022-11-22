export interface ITransaction {
  id: string;
  value: number;
  debitedAccountId: string;
  creditedAccountId: string;
  createdAt: string;
}

export interface ITransactionRequest {
  value: number;
  debitedAccountId: string;
  creditedAccountId: string;
}
