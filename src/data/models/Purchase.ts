import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Item from './Item';
import User from './User';

@Entity()
export default class Purchase {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  public itemId: string;

  @Column()
  public buyerId: string;

  @ManyToOne(() => Item, (item) => item)
  @JoinColumn({ name: 'itemId' })
  item: Item;

  @ManyToOne(() => User, (user) => user, { eager: true })
  @JoinColumn({ name: 'buyerId' })
  buyer: User;
}
