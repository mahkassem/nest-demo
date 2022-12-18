import { BooksEntity } from "src/modules/books/entities/books.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('authors')
export class AuthorsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => BooksEntity, book => book.author, { onDelete: 'CASCADE' })
    books: Promise<BooksEntity[]>;
}