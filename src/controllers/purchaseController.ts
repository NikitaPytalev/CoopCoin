import { Request, Response } from 'express';
import * as purchaseService from '../services/purchaseService';

export const index = async (req: Request, res: Response) => {
  const items = await purchaseService.getAllPurchases();

  res
    .send({
      items
    })
    .status(200);
};

export const purchase_post = async (req: Request, res: Response) => {
  const purchase = req.body;

  await purchaseService.addPurchase(purchase);

  res.sendStatus(201);
};
