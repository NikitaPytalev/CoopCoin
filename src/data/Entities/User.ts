import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Transaction from './Transaction';

@Entity()
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  role: number;

  @Column()
  systemBalance: number;

  @Column()
  giftBalance: number;

  @OneToMany(() => Transaction, (t) => t.id)
  transactions: Transaction[];
}
