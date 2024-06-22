export interface GameLocationData {
    _id: string;
    _name: string;
    _planet: string
    _cover_avatar: string;
    _pixel_avatar: string;
}

export class GameLocation{
    _id: string;
    _name: string;
    _planet: string;
    _cover_avatar: string;
    _pixel_avatar: string;

    constructor(
        _id: string,
        _name: string,
        _planet: string,
        _cover_avatar: string,
        _pixel_avatar: string,
        ){
            this._id = _id;
            this._name = _name;
            this._planet = _planet;
            this._cover_avatar = _cover_avatar;
            this._pixel_avatar = _pixel_avatar;
        }
}
