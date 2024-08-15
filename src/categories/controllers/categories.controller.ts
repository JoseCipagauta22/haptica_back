/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoriesService } from 'src/categories/services/categories.service';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/categories.dto';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {

    constructor(private categoriesService: CategoriesService){}

    @Get()
    getCategories() {
        return this.categoriesService.findAll();
    }

    @Get(':categoryId')
    getOne(@Param('categoryId', ParseIntPipe) categoryId: number) {
        return this.categoriesService.findOne(categoryId);
    }

    @Post()
    createCategory(@Body() payload: CreateCategoryDto) {
        return this.categoriesService.createCategory(payload);
    }

    @Put(':categoryId')
    udpdateCategory(@Param('categoryId', ParseIntPipe) categoryId: number, @Body() payload: UpdateCategoryDto){
        return this.categoriesService.updateCategory(categoryId, payload);
    }

    @Delete(':categoryId')
    deleteCategory(@Param('categoryId', ParseIntPipe) categoryId: number){
        this.categoriesService.removeCategore(categoryId);
    }

}
