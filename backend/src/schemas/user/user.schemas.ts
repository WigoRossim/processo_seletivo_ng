import * as yup from 'yup';

import { createAccountSchema } from '../account/account.schemas';

export const createUserSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Deve conter no mínimo 3 caracteres')
    .required('Campo obrigatório'),
  password: yup
    .string()
    .min(8, 'Minimum of 8 digits')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[0-9])[A-Za-z\d@$!%*#?&]{8,12}$/,
      'The password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.'
    )
    .required('Password Required'),
  accounts: createAccountSchema.required(),
});
