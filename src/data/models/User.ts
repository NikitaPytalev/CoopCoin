import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Purchase from './Purchase';
import { Role } from '../enums/Role';
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

  @Column({ default: 3 })
  giftTransactionsAmount: number;

  @Column({ type: 'enum', enum: Role, default: Role.User })
  role: Role;

  @Column({ default: 0 })
  systemBalance: number;

  @Column({ default: 0 })
  giftBalance: number;

  @OneToMany(() => Transaction, (transaction) => transaction)
  transactions?: Transaction[];

  @OneToMany(() => Purchase, (purchase) => purchase)
  purchases?: Purchase[];
}
