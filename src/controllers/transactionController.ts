import { Request, Response } from 'express';
import { InvalidOperationException } from '../errors/InvalidOperationException';
import TransactionPayload from '../models/transactionPayload';
import * as transactionService from '../services/transactionService';

/**
 * Эта функция обращается к transaction сервису для получения всех транзакций.
 */
export const index = async (req: Request, res: Response) => {
  const transactions = await transactionService.getAllTransactions();

  res.status(200).send({ transactions });
};

/**
 * Эта функция запрашивает transaction сервис создать транзакцию по данным из тела запроса
 */
export const transaction_post = async (req: Request, res: Response) => {
  try {
    const transaction = req.body as TransactionPayload;

    await transactionService.addTransaction(transaction);

    res.sendStatus(201);
  } catch (err) {
    if (err instanceof InvalidOperationException) {
      res.status(400).send(err.message);
    }
  }
};
