import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import { ProofController } from './controllers/proof.controller';
import { QuestionsService } from './services/questions.service';
import { AnswersService } from './services/answers.service';
import { Question } from './entities/questions.entity';
import { Answers } from './entities/answers.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Question,Answers])],
  controllers: [ProofController],
  providers: [QuestionsService, AnswersService],
})
export class ProofModule {}
