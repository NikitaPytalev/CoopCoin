import { Request, Response } from 'express';
import TransactionPayload from '../models/transactionPayload';
import * as transactionService from '../services/transactionService';

/**
 * Эта функция обращается к transaction сервису для получения всех транзакций.
 */
export const index = async (req: Request, res: Response) => {
  const transactions = await transactionService.getAllTransactions();

  res
    .send({
      transactions
    })
    .status(200);
};

/**
 * Эта функция запрашивает transaction сервис создать транзакцию по данным из тела запроса
 */
export const transaction_post = async (req: Request, res: Response) => {
  const transaction = req.body as TransactionPayload;

  await transactionService.addTransaction(transaction);

  res.sendStatus(201);
};
