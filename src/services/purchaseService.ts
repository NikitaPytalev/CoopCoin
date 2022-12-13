import Purchase from '../data/models/Purchase';
import dataSource from '../data/dataSource';
import PurchasePayload from '../models/purchasePayload';
import * as itemService from './itemService';
import * as userService from './userService';
import { EntityNotFoundException } from '../errors/EntityNotFoundException';
import { InvalidOperationException } from '../errors/InvalidOperationException';

/**
 * Ищет покупку по переданному id в базе данных
 */
export const findById = async (id: string): Promise<Purchase> => {
  const purchase = await dataSource.getRepository(Purchase).findOneBy({
    id
  });

  if (!purchase) throw new EntityNotFoundException('Purchase');

  purchase.item = await itemService.findById(purchase.itemId);

  return purchase;
};

/**
 * Отправляет покупку в базу данных
 */
export const addPurchase = async (payload: PurchasePayload) => {
  const item = await itemService.findById(payload.itemId);
  if (!item) throw new EntityNotFoundException('Item');

  const user = await userService.findById(payload.buyerId);
  if (!user) throw new EntityNotFoundException('User');

  if (user.giftBalance - item.price < 0) throw new InvalidOperationException('Insufficient funds!');
  if (item.amount == 0) throw new InvalidOperationException('Out of stock!');

  item.amount--;
  user.giftBalance -= item.price;

  await itemService.updateItem(item);
  await userService.updateUser(user);
  await dataSource.getRepository(Purchase).insert(payload);
};

/**
 * Запрашивает список всех покупок из базы данных
 */
export const getAllPurchases = async () => {
  const purchases = await dataSource.getRepository(Purchase).find();
  for (const purchase of purchases) {
    purchase.item = await itemService.findById(purchase.itemId);
  }

  return purchases;
};
