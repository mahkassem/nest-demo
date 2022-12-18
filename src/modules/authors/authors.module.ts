import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsEntity } from './entities/authors.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([AuthorsEntity])
  ],
  providers: [AuthorsService],
  controllers: [AuthorsController]
})
export class AuthorsModule { }
