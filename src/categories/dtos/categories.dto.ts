/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty } from "class-validator";
import { PartialType, ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly tittle: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly image: string;
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto){}