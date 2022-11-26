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

  res
    .send({
      user
    })
    .status(200);
};
