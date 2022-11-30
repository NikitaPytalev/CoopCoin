import { Request, Response } from 'express';
import * as purchaseService from '../services/purchaseService';

/**
 * Эта функция обращается к purchase сервису для получения всех покупок.
 */
export const index = async (req: Request, res: Response) => {
  const items = await purchaseService.getAllPurchases();

  res
    .send({
      items
    })
    .status(200);
};

/**
 * Эта функция запрашивает purchase сервис создать покупку по данным из тела запроса
 */
export const purchase_post = async (req: Request, res: Response) => {
  const purchase = {
    itemId: req.body.itemId,
    buyerId: req.body.buyerId
  };

  await purchaseService.addPurchase(purchase);

  res.sendStatus(201);
};
