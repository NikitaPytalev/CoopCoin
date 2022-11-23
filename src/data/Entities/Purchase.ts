import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Item from './Item';
import User from './User';

@Entity()
export default class Purchase {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Item, (item) => item.id)
  srcUserId: number;

  @ManyToOne(() => User, (user) => user.id)
  destUserId: number;
}
