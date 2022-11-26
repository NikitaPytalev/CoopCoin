import { Request, Response } from 'express';
import TransactionPayload from '../models/transactionPayload';
import * as transactionService from '../services/transactionService';

export const index = async (req: Request, res: Response) => {
  const transactions = await transactionService.getAllTransactions();

  res
    .send({
      transactions
    })
    .status(200);
};

export const transaction_post = async (req: Request, res: Response) => {
  const transaction = req.body as TransactionPayload;

  await transactionService.addTransaction(transaction);

  res.sendStatus(201);
};
