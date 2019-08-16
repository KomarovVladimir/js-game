import keyStates from './keyStates';
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

    moveForward(angle, dt) {
        super.moveForward(angle, dt);
    }

    turn(direction) {
        super.turn(direction);

        switch (direction) {
            case 'right': {
                this.currentTileRow = 2;
                break;
            }
            case 'left': {
                this.currentTileRow = 1;
                break;
            }
        }
    }

    update(dt) {
        if(keyStates.left && keyStates.right) {
            this.currentTileRow = 3;
        }
        if(!keyStates.left && !keyStates.right) {
            this.currentTileRow = 0;
        }
    }
}