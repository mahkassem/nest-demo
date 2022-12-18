import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { AuthorsService } from './authors.service';
import { AuthorDto } from './dtos/author.dto';
import { CreateAuthorDto } from './dtos/create-author.dto';
import { AuthorsEntity } from './entities/authors.entity';

@ApiTags('Authors')
@Controller('authors')
export class AuthorsController {
    constructor(private readonly _service: AuthorsService) { }

    @Get()
    async getAll(): Promise<AuthorDto[]> {
        const items = await this._service.getAll();
        const result = plainToInstance(AuthorDto, items);
        return result;
    }

    @Post()
    async create(@Body() req: CreateAuthorDto): Promise<AuthorsEntity> {
        console.log(req);
        const item = plainToInstance(AuthorsEntity, req);
        const result = await this._service.create(item);
        return result;
    }
}
