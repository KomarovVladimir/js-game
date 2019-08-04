import DynamicObject from './DynamicObject';
import ObjectHandler from './ObjectHandler';

const objectHandler = new ObjectHandler();

export default class Bullet extends DynamicObject {
    constructor (props) {
        super(props);

        this.damage = props.damage || 1;
        this.speed = props.speed || 1;
    }

    update() {
        this.move(this.angle);
        this.checkBorders()
    }

    checkBorders() {
        if (this.positionY - this.tileHeight < 0) {
            objectHandler.deleteObject(this);
        }
    }
}