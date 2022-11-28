import Item from '../data/models/Item';
import dataSource from '../data/dataSource';

export const findById = async (id: string): Promise<Item | null> => {
  const item = await dataSource.getRepository(Item).findOneBy({
    id
  });

  return item;
};

export const addItem = async (item: Partial<Item>) => await dataSource.getRepository(Item).insert(item);

export const getAllItems = async () => await dataSource.getRepository(Item).find();
