import Ship from './Ship';

export default class EmenyShip extends Ship {
    constructor(props) {
        super(props);

        this.pause = this.pause.bind(this);

        this.behavior = new Behavior();
    }
    
    //ENEMY SHIP LIGIC AND ACTIONS
    pause() {}

    //SET BEHAVIOR
    setBehavior(actions) {
        this.behavior.setActions(actions);
    }
}