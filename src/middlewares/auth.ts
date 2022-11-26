import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import Role from '../data/entities/Role';
import User from '../data/entities/User';

export const auth = (req: any, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.sendStatus(401);

  const token = authHeader.split(' ')[1];

  jwt.verify(token, 'TEST_SECRET', (err: any, user: any) => {
    if (err) return res.sendStatus(403);
    req.currentUser = user as User;
    next();
  });
};

export const isAdmin = (req: any, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.sendStatus(401);

  const token = authHeader.split(' ')[1];

  jwt.verify(token, 'TEST_SECRET', (err: any, user: any) => {
    if (err) return res.sendStatus(403);
    if (user.role != Role.Admin) return res.sendStatus(403);
    next();
  });
};
