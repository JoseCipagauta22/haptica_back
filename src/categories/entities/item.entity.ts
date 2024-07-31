/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { Category } from './category.entity';

@Entity()
export class Item {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    tittle;

    @ManyToOne(()=> Category, (category)=> category.items)
    category: Category;
}
