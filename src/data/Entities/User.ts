import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Purchase from './Purchase';
import Role from './Role';
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

  @Column({
    type: 'enum',
    enum: Role
  })
  role?: Role;

  @Column({ default: 0 })
  systemBalance: number;

  @Column({ default: 0 })
  giftBalance: number;

  @OneToMany(() => Transaction, (transaction) => transaction)
  transactions?: Transaction[];

  @OneToMany(() => Purchase, (purchase) => purchase)
  purchases?: Purchase[];
}
