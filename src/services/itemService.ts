import Item from '../data/models/Item';
import dataSource from '../data/dataSource';
import { EntityNotFoundException } from '../errors/EntityNotFoundException';

/**
 * Запрашивает айтем по переданному id у базы данных
 */
export const findById = async (id: string): Promise<Item> => {
  const item = await dataSource
    .getRepository(Item)
    .createQueryBuilder('item')
    .select(['item.id', 'item.title', 'item.description', 'item.price', 'item.amount'])
    .where('item.id = :id', { id })
    .getOne();

  if (!item) throw new EntityNotFoundException('Item');

  return item;
};

/**
 * Добавяет айтем в базу данных.
 */
export const addItem = async (item: Partial<Item>) => await dataSource.getRepository(Item).insert(item);

/**
 * Запрашивает список всех айтемов из базы данных
 */
export const getAllItems = async (): Promise<Array<Item>> => {
  const items = await dataSource
    .getRepository(Item)
    .createQueryBuilder('item')
    .select(['item.id', 'item.title', 'item.description', 'item.price', 'item.amount'])
    .getMany();

  return items;
};

/**
 * Обновляет айтем
 */
export const updateItem = async (item: Item) => await dataSource.getRepository(Item).save(item);

/**
 * Ищет фото по айтем id
 */
export const findImageByItemId = async (id: string): Promise<Buffer> => {
  const item = await dataSource
    .getRepository(Item)
    .createQueryBuilder('item')
    .select(['item.image'])
    .where('item.id = :id', { id })
    .getOne();

  if (!item) throw new EntityNotFoundException('Item');
  if (!item.image) throw new EntityNotFoundException('Image');

  const image = item.image;

  return image;
};
