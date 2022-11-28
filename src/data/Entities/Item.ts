import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import Purchase from './Purchase';

@Entity()
class Item {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  photo: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column()
  amount: number;

  @Column()
  giftBalance: number;

  @OneToMany(() => Purchase, (purchase) => purchase)
  purchases?: Purchase[];
}

export default Item;
