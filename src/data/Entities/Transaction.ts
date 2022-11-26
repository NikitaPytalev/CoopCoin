import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn, JoinColumn } from 'typeorm';
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
  comment?: string;

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

  @Column()
  srcUserId: string;

  @Column()
  destUserId: string;

  @ManyToOne(() => User, (user) => user)
  @JoinColumn({ name: 'srcUserId' })
  srcUser: User;

  @ManyToOne(() => User, (user) => user)
  @JoinColumn({ name: 'destUserId' })
  destUser: User;
}
