import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from '../entities/questions.entity';
import { Repository } from 'typeorm';
import { Answers } from '../entities/answers.entity';

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

  //   async getProof() {
  //   const question = await this.questionRepository.find({
  //     relations: ['answers'],
  //   });
  //   if (!question) {
  //     throw new NotFoundException(`Proof not found`);
  //   }
  //   return question;
  // }

  async getProof() {
    const questions = await this.questionRepository.find({
      relations: ['answers'],
    });
  
    function mixArray(array: Answers[]) {
      return array.sort(() => Math.random() - 0.5);
    }
  
    questions.forEach(question => {
      if (question.answers) {
        question.answers = mixArray(question.answers);
      }

      if (!questions) {
        throw new NotFoundException(`Proof not found`);
      }

    });
  
    return questions;
  }
  

}
