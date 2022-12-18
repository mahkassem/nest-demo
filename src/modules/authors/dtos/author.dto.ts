import { Expose } from "class-transformer";

export class AuthorDto {
    @Expose()
    id: number;
    @Expose()
    name: string;
}