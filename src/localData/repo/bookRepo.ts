import { dummyRafo } from "../data/localBooks.ts";
import { Book } from "../models/book.ts";

export class BookRepo{
    private books: Book[] = dummyRafo;

    public getAllBooks(): Book[] {
        return this.books;
    }
}