import { BookData } from "../models/book.ts";
import { BookRepo } from "../repo/bookRepo.ts";

export class BookService{
    private bookRepo: BookRepo;

    constructor(bookRepo: BookRepo){
        this.bookRepo = bookRepo;
    }

    public getAllBooks(): BookData[]{
        return this.bookRepo.getAllBooks();
    }
}