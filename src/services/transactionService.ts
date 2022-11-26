import Transaction from '../data/entities/Transaction';
import dataSource from '../data/dataSource';

export const findById = async (id: string): Promise<Transaction | null> => {
  const transaction = await dataSource.getRepository(Transaction).findOneBy({
    id
  });

  return transaction;
};

export const addTransaction = async (transaction: Partial<Transaction>) =>
  await dataSource.getRepository(Transaction).insert(transaction);

export const getAllTransactions = async () => await dataSource.getRepository(Transaction).find();

export const getNPopularTransactionDests = async () => {
  // const transactionsRepository = dataSource.getRepository(Transaction);
  // const popularTransactions = await transactionsRepository
  //     .createQueryBuilder('transaction')
  //     .select('SUM(employee.salary)', 'totalSalary')
  // return popularTransactions;
};

export const getNPopularTransactionSources = async () => {
  //1;
};
