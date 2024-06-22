import { AJPEChapters, SSFHChapters, TSMChapters, WSIChapters, WSIIChapters, WSIIIChapters, bomChapters, dsChapters, edChapters, elChapters, lmChapters, obChapters, rowChapters, shChapters, soChapters, tEMChapters, tHoAChapters, tHoEChapters, tWoAChapters, teSChapters, tfeChapters, tressChapters, wbChapters, wokChapters, worChapters, yumiChapters } from "../data/localCharacters.ts";
import { Chapter } from "../models/chapter.ts";

export class ChapterRepo{
    private chapters: Chapter[] = [];

    constructor() {
        this.useDummyData();
    }

    private useDummyData(): void {
        this.chapters = ([] as Chapter[]).concat(
            ...wokChapters,
            ...worChapters,
            ...obChapters,
            ...rowChapters,
            ...edChapters,
            ...dsChapters,
            ...tfeChapters,
            ...tWoAChapters,
            ...tHoAChapters,
            ...shChapters,
            ...soChapters,
            ...bomChapters,
            ...lmChapters,
            ...yumiChapters,
            ...tressChapters,
            ...wbChapters,
            ...elChapters,
            ...tHoEChapters,
            ...teSChapters,
            ...tEMChapters,
            ...AJPEChapters,
            ...WSIChapters,
            ...WSIIChapters,
            ...WSIIIChapters,
            ...SSFHChapters,
            ...TSMChapters,
        )
    }

    public getAllChapters(): Chapter[] {
        return this.chapters;
    }

    public getChaptersOfBook(book_id: string): Chapter[] {
        return this.chapters.filter((chapter: Chapter) => chapter._book_id == book_id)
    }
}