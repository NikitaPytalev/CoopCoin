import { DataSource } from 'typeorm';
import Item from './models/Item';
import Purchase from './models/Purchase';
import Transaction from './models/Transaction';
import User from './models/User';

/**
 * Регистрация соединения с базой данных
 */
const dataSource = new DataSource({
  type: 'mysql',
  host: 'awseb-e-2mnqjftdsp-stack-awsebrdsdatabase-72kxlbrmlfgq.c6xlispgavxm.eu-central-1.rds.amazonaws.com',
  port: 3306,
  username: 'admin',
  password: 'password',
  database: 'coopcoin',
  entities: [User, Transaction, Purchase, Item],
  logging: true,
  synchronize: true
});

export default dataSource;
