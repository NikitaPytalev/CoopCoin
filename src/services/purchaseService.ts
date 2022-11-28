import Purchase from '../data/models/Purchase';
import dataSource from '../data/dataSource';

export const findById = async (id: string): Promise<Purchase | null> => {
  const purchase = await dataSource.getRepository(Purchase).findOneBy({
    id
  });

  return purchase;
};

export const addPurchase = async (purchase: Partial<Purchase>) =>
  await dataSource.getRepository(Purchase).insert(purchase);

export const getAllPurchases = async () => await dataSource.getRepository(Purchase).find();
