import Ship from './Ship';
import Behavior from './Behavior';

export default class EmenyShip extends Ship {
    constructor(props) {
        super(props);

        this._pause = this.pause.bind(this);

        this._behavior = new Behavior();
    }
    
    //ENEMY SHIP LIGIC AND ACTIONS
    pause() {}

    //SET BEHAVIOR
    setBehavior(actions) {
        this._behavior.setActions(actions);
    }

    doCurrentAction() {
        this._behavior.doCurrentAction();
    }
}