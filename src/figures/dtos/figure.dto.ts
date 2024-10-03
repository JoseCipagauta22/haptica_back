/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsNumber } from "class-validator";
import { PartialType, ApiProperty } from "@nestjs/swagger";

export class CreateFigureDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly temperature: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    readonly state: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    readonly figure: number;
}

export class UpdateFigureDto extends PartialType(CreateFigureDto){}