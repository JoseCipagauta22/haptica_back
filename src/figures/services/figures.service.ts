/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Figure } from '../entities/figure.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateFigureDto } from '../dtos/figure.dto';

@Injectable()
export class FiguresService {

    figures: Figure[] = [];

    constructor(@InjectRepository(Figure) private figureRepo: Repository<Figure>){}

    async findAll(){
        this.figures = await this.figureRepo.find();
        return this.figures;
    }

    async updateFigure(id:number, changes: UpdateFigureDto){
        const figure = await this.figureRepo.findOne({where: {id}});
        this.figureRepo.merge(figure, changes);
        return this.figureRepo.save(figure);
      }
}
