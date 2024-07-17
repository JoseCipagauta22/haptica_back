/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { CategoriesService } from 'src/categories/services/categories/categories.service';

@Controller('categories')
export class CategoriesController {

    constructor(private categoriesService: CategoriesService){}

    @Get()
    getTask() {
        return this.categoriesService.findAll();
    }

}
