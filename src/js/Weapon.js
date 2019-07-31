import Object from './Object';
import ObjectHandler from './ObjectHandler';

const objectHandler = new ObjectHandler();

export default class Weapon extends Object {
    constructor (props) {
        super(props);

        this.damage = props.damage || 1;
        this.speed = props.speed || 10;
    }

    shot() {
        // objectHandler.createObject();
    }

    createBullet() {

    }
}