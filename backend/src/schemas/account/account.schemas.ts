import * as yup from 'yup';

export const createAccountSchema = yup.object().shape({
  balance: yup.number(),
});
