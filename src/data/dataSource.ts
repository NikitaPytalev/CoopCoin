import { DataSource } from 'typeorm';
import Item from './entities/Item';
import Purchase from './entities/Purchase';
import Transaction from './entities/Transaction';
import User from './entities/User';

const dataSource = new DataSource({
  type: 'mysql',
  host: 'coop-coin-db.c6xlispgavxm.eu-central-1.rds.amazonaws.com',
  port: 3306,
  username: 'admin',
  password: 'password',
  database: 'coopcoin',
  entities: [User, Transaction, Purchase, Item],
  logging: true,
  synchronize: true
});

export default dataSource;
