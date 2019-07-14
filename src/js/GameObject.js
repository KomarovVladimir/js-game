//a basic game object class. includes methods EVERY object on a screen has
export default class GameObject {
    constructor(props) {
        this._positionX = props.positionX ? props.positionX : this.positionX = 0;
        this._positionY = props.positionY ? props.positionY : this.positionY = 0;
    }

    setPosX(x) {
        this._positionX = x;
    }

    getPosX() {
        return this._positionX;
    }

    setPosY(x) {
        this._positionY = x;
    }

    getPosY() {
        return this._positionY;
    }
}