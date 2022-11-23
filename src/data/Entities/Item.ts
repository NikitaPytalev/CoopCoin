import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Item {
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
}
