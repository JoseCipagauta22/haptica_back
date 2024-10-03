/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// import { Item } from './item.entity';

@Entity()
export class Figure {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  temperature: string;

  @Column({ type: 'integer'})
  state: number;

  @Column({ type: 'integer'})
  figure: number;
}
