import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateBookDto {
    @ApiProperty({ example: 'The Lord of the Rings' })
    @IsNotEmpty() @IsString()
    title: string;

    @ApiProperty({ type: 'string', format: 'date', example: '2020-01-01' })
    @Transform(({ value }) => toDate(value))
    @IsDate()
    release_date: Date;

    @ApiProperty()
    @IsNotEmpty() @IsNumber()
    author_id: number;
}

function toDate(value: string) {
    return new Date(value);
}