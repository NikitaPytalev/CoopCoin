import Item from '../data/models/Item';
import dataSource from '../data/dataSource';

/**
 * Запрашивает айтем по переданному id у базы данных
 */
export const findById = async (id: string): Promise<Item | null> => {
  const item = await dataSource.getRepository(Item).findOneBy({
    id
  });

  return item;
};

/**
 * Добавяет айтем в базу данных.
 */
export const addItem = async (item: Partial<Item>) => await dataSource.getRepository(Item).insert(item);

/**
 * Запрашивает список всех айтемов из базы данных
 */
export const getAllItems = async () => await dataSource.getRepository(Item).find();

/**
 * Обновляет айтем
 */
export const updateItem = async (item: Item) => await dataSource.getRepository(Item).save(item);
