import { Request, Response } from 'express';
import * as authService from '../services/authService';

/**
 * Эта функция позволяет зарегистрировать объект юзера или админа
 * на основании тела запроса.
 */
export const signup_post = async (req: Request, res: Response) => {
  const user = req.body;

  const isSignedUp = await authService.signUp(user);

  if (!isSignedUp) res.status(409).send('User already exists');

  res.sendStatus(201);
};

/**
 * Эта функция принимает логин и пароль из тела запроса
 * и обращается в сервис аутентификации для получения тела ответа
 * с данными accessToken и userId
 */
export const login_post = async (req: Request, res: Response) => {
  const credentials = req.body;

  const loginPayload = await authService.login(credentials);

  if (loginPayload == null) {
    res.sendStatus(401);
  } else {
    res.json(loginPayload).status(200);
  }
};
