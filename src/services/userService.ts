import User from '../data/models/User';
import dataSource from '../data/dataSource';
import { EntityNotFoundException } from '../errors/EntityNotFoundException';
import { InvalidOperationException } from '../errors/InvalidOperationException';
import BalancesPayload from '../models/balancesPayload';
/**
 * Эта функция позволяет найти юзера по id
 */
export const findById = async (id: string): Promise<User> => {
  const user = await dataSource.getRepository(User).findOneBy({
    id
  });

  if (!user) throw new EntityNotFoundException('User');

  return user;
};

/**
 * Эта функция ищет юзера в бд по передынным свойствам, пр. email, password
 */
export const find = async (partialUser: Partial<User>): Promise<User> => {
  const user = await dataSource.getRepository(User).findOne({
    where: partialUser
  });

  if (!user) throw new EntityNotFoundException('User');

  return user;
};

/**
 * Эта функция делает запрос в бд по добавлению юзера
 */
export const addUser = async (user: Partial<User>) => await dataSource.getRepository(User).insert(user);

/**
 * Эта функция делает запрос в бд для получения списка всез юзеров
 */
export const getAllUsers = async () => await dataSource.getRepository(User).find();

/**
 * Эта функция делает запрос в бд для пополнения системного баланса
 * юзера на основе параметров количества и id
 */
export const updateSystemBalance = async (userId: string, amount: number) => {
  const user = await findById(userId);

  if (!user) throw new EntityNotFoundException('User');

  if (user.systemBalance + amount < 0) throw new InvalidOperationException('Insufficient funds!');

  await dataSource.getRepository(User).update(
    { id: userId },
    {
      systemBalance: user.systemBalance + amount
    }
  );
};

/**
 * Эта функция делает запрос в бд для пополнения подарочного баланса
 * юзера на основе параметров количества и id
 */
export const updateGiftBalance = async (userId: string, amount: number) => {
  const user = await findById(userId);

  if (!user) throw new EntityNotFoundException('User');

  if (user.giftBalance + amount < 0) throw new InvalidOperationException('Insufficient funds!');

  await dataSource.getRepository(User).update(
    { id: userId },
    {
      giftBalance: user.giftBalance + amount
    }
  );
};

/**
 * Обновляет юзера
 */
export const updateUser = async (user: User) => await dataSource.getRepository(User).save(user);

/**
 * Возвращает балансы юзера
 */
export const getUserBalances = async (userId: string) => {
  const user = await findById(userId);

  if (!user) throw new EntityNotFoundException('User');

  return {
    system: user.systemBalance,
    gift: user.giftBalance
  };
};
