import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Answers } from '../entities/answers.entity';

@Injectable()
export class AnswersService {
  constructor(
    @InjectRepository(Answers) private answerRepository: Repository<Answers>,
  ) {}

  getAnswers() {
    return this.answerRepository.find();
  }

  getAnswer(id: number) {
    return this.answerRepository.findOne({
      where: {
        id,
      },
    });
  }
}
