import Bullet from './Bullet';
import ObjectHandler from './ObjectHandler';

const objectHandler = new ObjectHandler();

export default class Weapon {
    constructor (props) {
        this.name = props.name;
        this.group = props.group;
        this.bulletImage = props.bulletImage;
        this.tileWidth = props.tileWidth;
        this.tileHeight = props.tileHeight;
        this.damage = props.damage || 1;
        this.speed = props.speed || 1;
        this.weaponX = props.weaponX || 0;
        this.weaponY = props.weaponY || 0;
    }

    shot(positionX, positionY) {
        objectHandler.createObject(Bullet, {
            group: 'playerBullet',
            image: this.bulletImage,
            tileWidth: this.tileWidth,
            tileHeight: this.tileHeight,
            positionX: positionX + this.weaponX,
            positionY: positionY + this.weaponY,
            damage: this.damage,
            speed: this.speed
        });
    }
}