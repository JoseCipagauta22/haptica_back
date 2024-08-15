import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class AnswerDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly answer: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty()
  readonly rightAnswer: boolean;
}

export class UpdateAnswerDto extends PartialType(AnswerDto) {}
