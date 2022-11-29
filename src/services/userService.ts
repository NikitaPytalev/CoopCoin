import User from '../data/models/User';
import dataSource from '../data/dataSource';

/**
 * Эта функция позволяет найти юзера по id
 */
export const findById = async (id: string): Promise<User | null> => {
  const user = await dataSource.getRepository(User).findOneBy({
    id
  });

  return user;
};

/**
 * Эта функция ищет юзера в бд по передынным свойствам, пр. email, password
 */
export const find = async (partialUser: Partial<User>): Promise<User | null> => {
  const user = await dataSource.getRepository(User).findOne({
    where: partialUser
  });

  return user;
};

/**
 * Эта функция проверяет есть ли юзер с переданным в нее id в базе данных
 */
export const doesExistById = async (id: string): Promise<boolean> => {
  const foundUser = await dataSource.getRepository(User).findOneBy({
    id
  });

  return Boolean(foundUser);
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

  // TODO: implement exception
  if (!user) return;

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

  if (!user) return;

  await dataSource.getRepository(User).update(
    { id: userId },
    {
      giftBalance: user.giftBalance + amount
    }
  );
};
