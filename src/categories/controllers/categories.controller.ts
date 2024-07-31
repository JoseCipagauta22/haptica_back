/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
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

    @Get(':categoryId')
    // @HttpCode(HttpStatus.ACCEPTED)
    getOne(@Param('categoryId', ParseIntPipe) categoryId: number) {
    // response.status(200).send({
    //   message: `product ${categoryId}`,
    // });
        return this.categoriesService.findOne(categoryId);
    }

    @Post()
    createCategory(@Body() payload: CreateCategoryDto) {
        return this.categoriesService.createCategory(payload);
    }

}
