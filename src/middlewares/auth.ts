import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../data/entities/User';

const auth = (req: any, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.sendStatus(401);

  const token = authHeader.split(' ')[1];

  jwt.verify(token, 'TEST_SECRET', (err: any, user: any) => {
    if (err) return res.sendStatus(403);
    req.currentUser = user as User;
    next();
  });
};

export default auth;
