export interface ChapterData {
    _id: string;
    _book_id: string;
    _chapter_number: string;
    _title: string;
    _description: string; 
    _wordcount: string;
    _pov: string;
}


export class Chapter {
    public _id: string;
    public _book_id: string;
    public _chapter_number: number;
    public _title: string;
    public _description: string; 
    public _wordcount: number;
    public _pov: string;

    constructor(id: string, book_id: string, chapter_number: number, title: string, description: string, wordcount: number, pov: string) {
        this._id = id;
        this._book_id = book_id;
        this._chapter_number = chapter_number;
        this._title = title;
        this._description = description;
        this._wordcount = wordcount;
        this._pov = pov;
    }

    toString(): string {
        return `Ch.${this._chapter_number}: ${this._title}`;
    }

}