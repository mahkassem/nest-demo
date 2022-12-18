import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthorsEntity } from './entities/authors.entity';

@Injectable()
export class AuthorsService {
    constructor(
        @InjectRepository(AuthorsEntity)
        private readonly _repo: Repository<AuthorsEntity>
    ) { }

    async getAll() {
        return await this._repo.find();
    }

    async create(author: AuthorsEntity) {
        return await this._repo.save(author);
    }
}
