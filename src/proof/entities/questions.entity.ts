import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Answers } from 'src/proof/entities/answers.entity'


@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  question: string;

  @OneToMany(() => Answers, (answer) => answer.question)
  answers: Answers[];
}