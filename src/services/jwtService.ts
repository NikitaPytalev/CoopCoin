import User from '../data/models/User';
import jwt from 'jsonwebtoken';

/**
 * Создает accessToken
 */
export const createAccessToken = (user: User): string => {
  const payload = {
    email: user.email,
    role: user.role
  };

  const accessToken = jwt.sign(payload, 'TEST_SECRET');

  return accessToken;
};
