import { Request, Response } from 'express';
import { EntityNotFoundException } from '../errors/EntityNotFoundException';
import * as purchaseService from '../services/purchaseService';

/**
 * Эта функция обращается к purchase сервису для получения всех покупок.
 */
export const index = async (req: Request, res: Response) => {
  const items = await purchaseService.getAllPurchases();

  res.status(200).send({ items });
};

/**
 * Эта функция запрашивает purchase сервис создать покупку по данным из тела запроса
 */
export const purchase_post = async (req: Request, res: Response) => {
  try {
    const purchase = {
      itemId: req.body.itemId,
      buyerId: req.body.buyerId
    };

    await purchaseService.addPurchase(purchase);

    res.sendStatus(201);
  } catch (err) {
    if (err instanceof EntityNotFoundException) {
      res.status(404).send(err.message);
    }
  }
};
