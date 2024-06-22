import { dummyRafo } from "../data/localBooks.ts";
import { BookData } from "../models/book.ts";

export class BookRepo{
    private books: BookData[] = dummyRafo;

    public getAllBooks(): BookData[] {
        return this.books;
    }
}