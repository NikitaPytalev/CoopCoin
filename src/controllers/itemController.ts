import { Request, Response } from 'express';
import * as itemService from '../services/itemService';

export const index = async (req: Request, res: Response) => {
  const items = await itemService.getAllItems();

  res
    .send({
      items
    })
    .status(200);
};

export const item_post = async (req: Request, res: Response) => {
  const item = req.body;

  await itemService.addItem(item);

  res.sendStatus(201);
};
