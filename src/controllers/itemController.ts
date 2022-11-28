import { Request, Response } from 'express';
import * as itemService from '../services/itemService';
import { UploadedFile } from 'express-fileupload';

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
  const file = req.files?.image as UploadedFile;
  item.image = file.data;

  await itemService.addItem(item);

  res.sendStatus(201);
};

export const item_get = async (req: Request, res: Response) => {
  const item = await itemService.findById(req.params.id);

  if (!item) return 404;

  res
    .send({
      item
    })
    .status(200);
};
