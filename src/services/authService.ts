import User from '../data/models/User';
import * as userService from './userService';
import * as jwtService from './jwtService';
import LoginPayload from '../models/loginPayload';
import { EntityNotFoundException } from '../errors/EntityNotFoundException';

/**
 * Запрашивает userService создать юзера по переданным данным.
 */
export const signUp = async (user: Partial<User>): Promise<boolean> => {
  const doesExist = await userService.checkIfUserExists(user.email!);

  if (!doesExist) return false;

  await userService.addUser(user);

  return true;
};

/**
 * Запрашивает jwtService создать accessToken для переданного юзера
 */
export const login = async (partialUser: Partial<User>): Promise<LoginPayload> => {
  const user = await userService.find(partialUser);

  if (!user) throw new EntityNotFoundException('User');

  const accessToken = jwtService.createAccessToken(user);
  const loginPayload = {
    accessToken,
    userId: user.id
  };

  return loginPayload;
};
