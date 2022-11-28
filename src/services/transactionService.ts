import Transaction from '../data/models/Transaction';
import dataSource from '../data/dataSource';
import { TransactionType } from '../data/enums/TransactionType';
import * as userService from '../services/userService';
import TransactionPayload from '../models/transactionPayload';

export const findById = async (id: string): Promise<Transaction | null> => {
  const transaction = await dataSource.getRepository(Transaction).findOneBy({
    id
  });

  return transaction;
};

export const addTransaction = async (transaction: TransactionPayload) => {
  // TODO: Add check to aboid negative balances

  // TODO: Implement check for three gifr balance transactions limit

  if (transaction.type == TransactionType.System) {
    await userService.updateSystemBalance(transaction.srcUserId, -transaction.amount);
  } else {
    await userService.updateGiftBalance(transaction.srcUserId, -transaction.amount);
  }

  await userService.updateGiftBalance(transaction.destUserId, transaction.amount);

  await dataSource.getRepository(Transaction).insert(transaction);
};

export const getAllTransactions = async () => await dataSource.getRepository(Transaction).find();

export const getNPopularTransactionDests = async () => {
  // const transactionsRepository = dataSource.getRepository(Transaction);
  // const popularTransactions = await transactionsRepository
  //     .createQueryBuilder('transaction')
  //     .select('SUM(employee.salary)', 'totalSalary')
  // return popularTransactions;
};

export const getNPopularTransactionSources = async () => {
  // TODO: implememt
};
