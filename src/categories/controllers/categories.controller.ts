/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoriesService } from 'src/categories/services/categories.service';
import { CreateCategoryDto } from '../dtos/categories.dto';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {

    constructor(private categoriesService: CategoriesService){}

    @Get()
    getCategories() {
        return this.categoriesService.findAll();
    }

    @Post()
    createCategory(@Body() payload: CreateCategoryDto) {
        return this.categoriesService.createCategory(payload);
    }

}
