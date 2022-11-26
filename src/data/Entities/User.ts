import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Purchase from './Purchase';
import Transaction from './Transaction';

@Entity()
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName?: string;

  @Column()
  lastName?: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role?: number;

  @Column()
  systemBalance?: number;

  @Column()
  giftBalance?: number;

  @OneToMany(() => Transaction, (transaction) => transaction)
  transactions?: Transaction[];

  @OneToMany(() => Purchase, (purchase) => purchase)
  purchases?: Purchase[];
}
