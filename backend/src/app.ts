import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';

import handleErrorMiddleware from './middlewares/handlerError.middleware';
import userRouter from './routers/user/users.routes';
import userLoginRouter from './routers/login/userLogin.routes';
import transactionRouter from './routers/transaction/transaction.routes';

const app = express();
const cors = require('cors');

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

app.use(express.json());

app.use(cors(corsOptions));
app.use('/users', userRouter);
app.use('/user/login', userLoginRouter);
app.use('/transactions', transactionRouter);

app.use(handleErrorMiddleware);

export default app;
