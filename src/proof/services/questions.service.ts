import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from '../entities/questions.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionsService {
  questions: Question[] = [];
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
  ) {}

  getQuestions() {
    return this.questionRepository.find();
  }

  getQuestion(id: number) {
    return this.questionRepository.findOne({
      where: {
        id,
      },
    });
  }

  async getQuestionOne(id: number) {
    const question = await this.questionRepository.findOne({
      relations: ['answers'],
      where: { id },
    });
    if (!question) {
      throw new NotFoundException(`Question #${id} not found`);
    }
    return question;
  }
}
