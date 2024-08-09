/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../entities/category.entity';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from '../dtos/categories.dto';

@Injectable()
export class CategoriesService {

  miTest: string = '';
  categories: Category[] = [];
  constructor(@InjectRepository(Category) private categoryRepo: Repository<Category>){}

  async findAll(){
      this.categories = await this.categoryRepo.find();
      this.categories.forEach(element => {
          element.image = '../../../../assets/' + element.image
      });
      this.categories.sort(function (a, b) {
          if (a.id > b.id) {
            return 1;
          }
          if (a.id < b.id) {
            return -1;
          }
          // a must be equal to b
          return 0;
      });
      return this.categories;
      // return this.categoryRepo.find();
  }

  async findOne(id: number) {
      const category = await this.categoryRepo.findOne({relations: ['items'], where: {id}});
      if (!category) {
        throw new NotFoundException(`Product #${id} not found`);
      }
      return category;
  }

  createCategory(data: CreateCategoryDto){
      const newCategory = this.categoryRepo.create(data);
      return this.categoryRepo.save(newCategory);
  }
    
}
