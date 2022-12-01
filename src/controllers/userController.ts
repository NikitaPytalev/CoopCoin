import { Request, Response } from 'express';
import { EntityNotFoundException } from '../errors/EntityNotFoundException';
import * as userService from '../services/userService';

/**
 * Эта функция обращается к юзер сервису для получения всех юзеров.
 */
export const index = async (req: Request, res: Response) => {
  const users = await userService.getAllUsers();

  res.status(200).send({ users });
};

/**
 * Эта функция обращается к юзер сервису для получения конкретного юзера по id из запроса
 */
export const user_get = async (req: Request, res: Response) => {
  try {
    const user = await userService.findById(req.params.id);

    res.status(200).send({ user });
  } catch (err) {
    if (err instanceof EntityNotFoundException) {
      res.status(404).send(err.message);
    }
  }
};

/**
 * Эта функция обращается к юзер сервису для пополнения баланса юзера по id из запроса
 */
export const user_balance_patch = async (req: Request, res: Response) => {
  try {
    await userService.updateSystemBalance(req.params.id, Number(req.params.amount));

    res.sendStatus(204);
  } catch (err) {
    if (err instanceof EntityNotFoundException) {
      res.status(404).send(err.message);
    }
  }
};
