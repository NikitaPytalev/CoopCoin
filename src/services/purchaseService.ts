import Purchase from '../data/models/Purchase';
import dataSource from '../data/dataSource';

/**
 * Ищет покупку по переданному id в базе данных
 */
export const findById = async (id: string): Promise<Purchase | null> => {
  const purchase = await dataSource.getRepository(Purchase).findOneBy({
    id
  });

  return purchase;
};

/**
 * Отправляет покупку в базу данных
 */
export const addPurchase = async (purchase: Partial<Purchase>) =>
  await dataSource.getRepository(Purchase).insert(purchase);

/**
 * Запрашивает список всех покупок из базы данных
 */
export const getAllPurchases = async () => await dataSource.getRepository(Purchase).find();
