import { BooksController } from './books.controller';
import { BooksService } from './books.service';

import { Module } from '@nestjs/common';
import { BooksEntity } from './entities/books.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forFeature([BooksEntity])
    ],
    controllers: [BooksController],
    providers: [BooksService],
})
export class BooksModule { }
