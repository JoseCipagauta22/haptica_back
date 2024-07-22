/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/categories/entities/category.entity';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from '../dtos/categories.dto';

@Injectable()
export class CategoriesService {

    constructor(@InjectRepository(Category) private categoryRepo: Repository<Category>){}

    findAll(){
        return this.categoryRepo.find();
    }

    createCategory(data: CreateCategoryDto){
        const newCategory = this.categoryRepo.create(data)
        return this.categoryRepo.save(newCategory);
    }

}
