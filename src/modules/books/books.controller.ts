import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { BooksService } from './books.service';
import { CreateBookDto } from './dtos/create-book.dto';
import { BooksEntity } from './entities/books.entity';

@ApiTags('Books')
@Controller('books')
export class BooksController { 
    constructor(private readonly _service: BooksService) { }

    @Get()
    async getAll() {
        return await this._service.getAll();
    }

    @Post()
    async create(@Body() req: CreateBookDto) {
        const item = plainToInstance(BooksEntity, req);
        const result = await this._service.create(item);
        return result;
    }
}
