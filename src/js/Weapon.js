import Bullet from './Bullet';
import ObjectHandler from './ObjectHandler';

const objectHandler = new ObjectHandler();

export default class Weapon {
    constructor (props) {
        this.image = props.image;
        this.tileWidth = props.tileWidth;
        this.tileHeight = props.tileHeight;
        this.damage = props.damage || 1;
        this.speed = props.speed || 1;
    }

    shot(positionX, positionY) {
        objectHandler.createObject(Bullet, {
            image: this.image,
            tileWidth: this.tileWidth,
            tileHeight: this.tileHeight,
            positionX: positionX,
            positionY: positionY,
            damage: this.damage,
            speed: this.speed
        });
    }
}