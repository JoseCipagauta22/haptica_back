/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty } from "class-validator";
import { PartialType, ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly tittle: string;
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto){}