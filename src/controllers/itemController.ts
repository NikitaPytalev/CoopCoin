import { Request, Response } from 'express';
import * as itemService from '../services/itemService';
import { UploadedFile } from 'express-fileupload';
import { EntityNotFoundException } from '../errors/EntityNotFoundException';

/**
 * Обращается к айтем сервису для получения всех юзеров.
 */
export const index = async (req: Request, res: Response) => {
  const items = await itemService.getAllItems();

  res.status(200).send({ items });
};

/**
 * Запрашивает айтем сервис создать айтем по данным из тела запроса
 */
export const item_post = async (req: Request, res: Response) => {
  const item = req.body;
  const file = req.files?.image as UploadedFile;

  // TODO: check if image in null

  item.image = file?.data;

  await itemService.addItem(item);

  res.status(201).send(item.id);
};

/**
 * Обращается к айтем сервису для получения конкретного айтема по id
 */
export const item_get = async (req: Request, res: Response) => {
  try {
    const item = await itemService.findById(req.params.id);

    res.send({ item }).status(200);
  } catch (err) {
    if (err instanceof EntityNotFoundException) {
      res.status(404).send(err.message);
    }
  }
};

/**
 * Обращается к айтем сервису для получения изображения по id айтема
 */
export const item_image_get = async (req: Request, res: Response) => {
  try {
    const image = await itemService.findImageByItemId(req.params.id);

    res.set('Content-Type', 'image/jpeg');
    res.send(image);
  } catch (err) {
    if (err instanceof EntityNotFoundException) {
      res.status(404).send(err.message);
    }
  }
};
