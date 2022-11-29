import { Request, Response } from 'express';
import * as itemService from '../services/itemService';
import { UploadedFile } from 'express-fileupload';

/**
 * Обращается к айтем сервису для получения всех юзеров.
 */
export const index = async (req: Request, res: Response) => {
  const items = await itemService.getAllItems();

  res
    .send({
      items
    })
    .status(200);
};

/**
 * Запрашивает айтем сервис создать айтем по данным из тела запроса
 */
export const item_post = async (req: Request, res: Response) => {
  const item = req.body;
  const file = req.files?.image as UploadedFile;

  // TODO: check if image in null

  item.image = file.data;

  await itemService.addItem(item);

  res.sendStatus(201);
};

/**
 * Обращается к айтем сервису для получения конкретного юзера по id
 */
export const item_get = async (req: Request, res: Response) => {
  const item = await itemService.findById(req.params.id);

  if (!item) return 404;

  res
    .send({
      item
    })
    .status(200);
};
