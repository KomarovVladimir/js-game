import Ship from './Ship';

export default class Player extends Ship {
    constructor(props) {
        super(props);
    }

    checkBorders(rectangle) {
        if (this.hitboxPositionY < rectangle.top) {
            this.positionY = rectangle.top - this.hitboxOffsetY;
        }
        if (this.hitboxPositionY > rectangle.bottom - this.tileHeight + this.hitboxOffsetY) {
            this.positionY = rectangle.bottom - this.tileHeight + this.hitboxOffsetY;
        }
        if (this.hitboxPositionX < rectangle.left) {
            this.positionX = rectangle.left - this.hitboxOffsetX;
        }
        if (this.hitboxPositionX > rectangle.right - this.tileWidth + this.hitboxOffsetX) {
            this.positionX = rectangle.right - this.tileWidth + this.hitboxOffsetX;
        }
    }
}