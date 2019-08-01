import Object from './Object';

export default class Ship extends Object {
    constructor(props) {
        super(props);
        
        this.hp = props.hp || 100;
        this.shotingSpeed = props.shotingSpeed || 1;
        this.lastShot = null;
        this.weapon = props.weapon || null;
    }

    shot() {            
        if (!this.lastShot) {
            this.lastShot = performance.now(); 
        }
        let dt = performance.now() - this.lastShot;
        if (dt >= 1000 / this.shotingSpeed) {
            this.weapon.shot();
            this.lastShot = performance.now();
        }
    } 
}