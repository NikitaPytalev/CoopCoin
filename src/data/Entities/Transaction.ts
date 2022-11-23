import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import TransactionType from './TransactionType';
import User from './User';

@Entity()
export default class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  amount: number;

  @Column()
  reason: string;

  @Column()
  comment: string;

  @Column({
    type: 'enum',
    enum: TransactionType
  })
  type: TransactionType;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)'
  })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.id)
  srcUserId: number;

  @ManyToOne(() => User, (user) => user.id)
  destUserId: number;
}
