import Ship from './Ship';

export default class Player extends Ship {
    constructor(props) {
        super(props);
    }

    checkBorders(rectangle) {
        if (this.positionY < rectangle.top) {
            this.positionY = rectangle.top;
        }
        if (this.positionY + this.tileHeight > rectangle.bottom) {
            this.positionY = rectangle.bottom - this.tileHeight;
        }
        if (this.positionX < rectangle.left) {
            this.positionX = rectangle.left;
        }
        if (this.positionX + this.tileWidth > rectangle.right) {
            this.positionX = rectangle.right - this.tileWidth;
        }
    }
}