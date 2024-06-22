export interface GameCharacterData {
    _id: string;
    _name: string;
    _cover_avatar: string;
    _pixel_avatar: string;
    _class: string;
}

export class GameCharacter{
    _id: string;
    _name: string;
    _cover_avatar: string;
    _pixel_avatar: string;
    _class: string;

    constructor(
        _id: string,
        _name: string,
        _cover_avatar: string,
        _pixel_avatar: string,
        _class: string,
        ){
            this._id = _id;
            this._name = _name;
            this._cover_avatar = _cover_avatar;
            this._pixel_avatar = _pixel_avatar;
            this._class = _class
        }
}
