import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'mysql',
  host: 'coop-coin-db.c6xlispgavxm.eu-central-1.rds.amazonaws.com',
  port: 3306,
  username: 'admin',
  password: 'password',
  database: 'coopcoin',
  entities: ['src/data/entities/*.ts'],
  logging: true,
  synchronize: true
});

export default dataSource;
