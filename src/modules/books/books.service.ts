/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BooksEntity } from './entities/books.entity';

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(BooksEntity)
        private readonly _repo: Repository<BooksEntity>
    ) { }

    async getAll() {
        return await this._repo.find();
    }

    async create(Book: BooksEntity) {
        return await this._repo.save(Book);
    }
}
