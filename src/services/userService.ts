import User from '../data/entities/User';
import dataSource from '../data/dataSource';

export const findById = async (id: string): Promise<User | null> => {
  const user = await dataSource.getRepository(User).findOneBy({
    id
  });

  return user;
};

export const find = async (partialUser: Partial<User>): Promise<User | null> => {
  const user = await dataSource.getRepository(User).findOneBy(partialUser);

  return user;
};

export const doesExistById = async (id: string): Promise<boolean> => {
  const foundUser = await dataSource.getRepository(User).findOneBy({
    id
  });

  return Boolean(foundUser);
};

export const doesExist = async (email: string, password: string): Promise<boolean> => {
  const foundUser = await dataSource.getRepository(User).findOneBy({
    email,
    password
  });

  return Boolean(foundUser);
};

export const addUser = async (user: Partial<User>) => await dataSource.getRepository(User).insert(user);
