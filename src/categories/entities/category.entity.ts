/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Item } from './item.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  tittle: string;

  @Column({ type: 'varchar'})
  image: string;

  @OneToMany(()=> Item, (item)=> item.category)
  items: Item[];
}
