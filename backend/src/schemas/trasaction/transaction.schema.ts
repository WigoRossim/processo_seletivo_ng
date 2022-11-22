import * as yup from 'yup';

export const createTrasactionSchema = yup.object().shape({
  value: yup.number(),
  debitedAccountId: yup.string().required(),
  creditedAccountId: yup.string().required(),
});
