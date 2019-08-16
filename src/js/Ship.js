import DynamicObject from './DynamicObject';

export default class Ship extends DynamicObject {
    constructor(props) {
        super(props);
        this.hp = props.hp || 100;
        this.shotingSpeed = props.shotingSpeed || 1;
        this.lastShot = null;
        this.weapon = props.weapon || null;
    }

    move(angle, dt) {
        super.move(angle, dt);
    }

    moveForward(dt) {
        this.move(this.angle, dt);
    }

    update() {

    }

    shot() {            
        if (!this.lastShot) {
            this.lastShot = performance.now(); 
            this.weapon.shot(this.positionX, this.positionY);
        }
        let dt = performance.now() - this.lastShot;
        if (dt >= 1000 / this.shotingSpeed) {
            this.weapon.shot(this.positionX, this.positionY);
            this.lastShot = performance.now();
        }
    } 
}