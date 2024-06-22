export interface BookData {
    _id: string;
    _title: string;
    _description: string;
    _planet: string;
    _system: string;
    _shard: string;
    _date: string;
    _chapterFormat?: string
}

export class Book{
    _id: string;
    _title: string;
    _description: string;
    _planet: string;
    _system: string;
    _shard: string; 
    _date: number; 
    _chapterFormat?: string;

    constructor(
        id: string,
        title: string,
        description: string,
        planet: string,
        system: string,
        shard: string, 
        date: number,
        chapterFormat?: string
        ){
            this._id = id;
            this._title = title;
            this._description = description;
            this._planet = planet; 
            this._system = system;
            this._shard = shard;
            this._date = date; 
            this._chapterFormat = chapterFormat;
        }

}
