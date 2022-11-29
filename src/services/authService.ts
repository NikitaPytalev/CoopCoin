import User from '../data/models/User';
import * as userService from './userService';
import * as jwtService from './jwtService';
import LoginPayload from '../models/loginPayload';

/**
 * Запрашивает userService создать юзера по переданным данным.
 */
export const signUp = async (user: Partial<User>): Promise<boolean> => {
  // TODO: Add if exists check

  await userService.addUser(user);

  return true;
};

/**
 * Запрашивает jwtService создать accessToken для переданного юзера
 */
export const login = async (partialUser: Partial<User>): Promise<LoginPayload | null> => {
  const user = await userService.find(partialUser);

  if (!user) return null;

  const accessToken = jwtService.createAccessToken(user);
  const loginPayload = {
    accessToken,
    userId: user.id
  };

  return loginPayload;
};
