import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import {  Question } from 'src/proof/entities/questions.entity'

@Entity()
export class Answers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  answer: string;

  @Column()
  rightAnswer: boolean;

  @ManyToOne(() => Question, (question) => question.answers)
  question: Question;
}
