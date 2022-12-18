import { AuthorsEntity } from "src/modules/authors/entities/authors.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('books')
export class BooksEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ type: 'timestamp' })
    release_date: Date;

    @Column()
    author_id: number;

    @ManyToOne(type => AuthorsEntity, author => author.books, { cascade: true, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'author_id' })
    author: Promise<AuthorsEntity>;
}