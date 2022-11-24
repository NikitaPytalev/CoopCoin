import User from '../data/entities/User';
import * as userService from './userService';
import * as jwtService from './jwtService';

export const signUp = async (user: Partial<User>): Promise<boolean> => {
  // TODO: Add if exists check

  await userService.addUser(user);

  return true;
};

export const login = async (partialUser: Partial<User>): Promise<string> => {
  const user = await userService.find(partialUser);

  if (!user) return '';

  const accessToken = jwtService.createAccessToken(user);

  return accessToken;
};
