import Object from './Object';
import Behavior from './Behavior';
import Action from './Action';

export default class Bullet extends Object {
    constructor (props) {
        super(props);

        this.damage = props.damage || 1;
        this.speed = props.speed || 1;
    }

    update() {
        this.move(this.angle);
    }
}