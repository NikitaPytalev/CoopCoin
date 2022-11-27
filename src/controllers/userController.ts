import { Request, Response } from 'express';
import * as userService from '../services/userService';

export const index = async (req: Request, res: Response) => {
  const users = await userService.getAllUsers();

  res
    .send({
      users
    })
    .status(200);
};

export const user_get = async (req: Request, res: Response) => {
  const user = await userService.findById(req.params.id);

  if (!user) return 404;

  res
    .send({
      user
    })
    .status(200);
};

export const user_balance_put = async (req: Request, res: Response) => {
  await userService.updateSystemBalance(req.params.id, Number(req.params.amount));

  res.sendStatus(204);
};
