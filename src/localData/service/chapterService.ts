import { ChapterRepo } from "../repo/chapterRepo.ts";

export class ChapterServ{
    private chapterRepo: ChapterRepo;

    constructor(chapterRepo: ChapterRepo){
        this.chapterRepo = chapterRepo;
    }

    public getAllChapters(){
        return this.chapterRepo.getAllChapters;
    }

    public getChaptersOfBook(book_id: string){
        return this.chapterRepo.getChaptersOfBook(book_id)
    }
}