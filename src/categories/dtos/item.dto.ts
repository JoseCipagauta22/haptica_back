/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsNumber, IsPositive } from "class-validator";
import { PartialType, ApiProperty } from "@nestjs/swagger";

export class CreateItemDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly tittle: string;

    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    @ApiProperty()
    readonly categoryId: number;
}

export class UpdateItemDto extends PartialType(CreateItemDto){}