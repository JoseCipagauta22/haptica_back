/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, ParseIntPipe, Put } from '@nestjs/common';
import { FiguresService } from '../services/figures.service';
import { UpdateFigureDto } from '../dtos/figure.dto';

@Controller('figures')
export class FiguresController {

    constructor(private figuresService: FiguresService){}

    @Get()
    getCategories() {
        return this.figuresService.findAll();
    }    

    @Put(':figureId')
    udpdateCategory(@Param('figureId', ParseIntPipe) figureId: number, @Body() payload: UpdateFigureDto){
        return this.figuresService.updateFigure(figureId, payload);
    }


}
