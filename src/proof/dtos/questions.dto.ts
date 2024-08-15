import { IsString, IsNotEmpty } from "class-validator";
import { PartialType, ApiProperty } from "@nestjs/swagger";

export class QuestionDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly question: string;
}

export class UpdateQuestionDto extends PartialType(QuestionDto) {}