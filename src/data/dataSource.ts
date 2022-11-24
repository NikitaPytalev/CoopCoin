import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'coopcoin',
  entities: ['src/data/entities/*.ts'],
  logging: true,
  synchronize: true
});

export default dataSource;
