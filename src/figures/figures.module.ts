/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Figure } from './entities/figure.entity';
import { FiguresService } from './services/figures.service';
import { FiguresController } from './controllers/figures.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Figure])],
    providers: [FiguresService],
    controllers: [FiguresController],
})
export class FiguresModule {}
