/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { CategoriesService } from './services/categories.service';
import { CategoriesController } from './controllers/categories.controller';
import { ItemService } from './services/item.service';
import { Item } from './entities/item.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Category, Item])],
    providers: [CategoriesService, ItemService],
    controllers: [CategoriesController]
})
export class CategoriesModule {}
