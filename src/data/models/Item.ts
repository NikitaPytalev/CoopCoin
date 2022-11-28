import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import Purchase from './Purchase';

@Entity()
export default class Item {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description?: string;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  price: number;

  @Column({
    type: 'longblob'
  })
  image?: Buffer;

  @Column()
  amount: number;

  @OneToMany(() => Purchase, (purchase) => purchase)
  purchases?: Purchase[];
}
