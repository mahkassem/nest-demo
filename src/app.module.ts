import { BooksModule } from './modules/books/books.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorsModule } from './modules/authors/authors.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsEntity } from './modules/authors/entities/authors.entity';
import { BooksEntity } from './modules/books/entities/books.entity';

@Module({
  imports: [
    BooksModule,
    AuthorsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '172.22.208.1',
      port: 3306,
      username: 'admin',
      password: 'Passw0rd@123',
      database: 'test_db',
      entities: [AuthorsEntity, BooksEntity],
      synchronize: true,
      autoLoadEntities: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
