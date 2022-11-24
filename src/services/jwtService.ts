import User from '../data/entities/User';
import jwt from 'jsonwebtoken';

export const createAccessToken = (user: User): string => {
  const payload = {
    email: user.email,
    role: user.role
  };

  const accessToken = jwt.sign(payload, 'TEST_SECRET');

  return accessToken;
};
