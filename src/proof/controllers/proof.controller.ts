import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { QuestionsService } from '../services/questions.service';
import { AnswersService } from '../services/answers.service';

@Controller('proof')
export class ProofController {
  constructor(
    private quizService: QuestionsService,
    private answerService: AnswersService,
  ) {}

  @Get('/Questions')
  getQuestions() {
    return this.quizService.getQuestions();
  }
  @Get('/Answers')
  getAnswers() {
    return this.answerService.getAnswers();
  }

  @Get('/Proofs')
  getProofs() {
    return this.quizService.getProof();
  }

  @Get(':id')
  getProof(@Param('id', ParseIntPipe) id: number) {
    return this.quizService.getQuestionOne(id);
  }

  @Get('/question/:id')
  getQuestion(@Param('id', ParseIntPipe) questionId: number) {
    return this.quizService.getQuestion(questionId);
  }

  @Get('/answer/:id')
  getAnswer(@Param('id', ParseIntPipe) id: number) {
    return this.answerService.getAnswer(id);
  }
}
