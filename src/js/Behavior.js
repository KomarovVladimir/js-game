//BEHAVIOUR CLASS. HANDLES ACTION'S EXECUTION
export default class Behavior {
    constructor(props) {
        //this is an array of enemy actions like move, turn, stop etc. 
        // props.actions ? this._actions = props.actions.slice() : [];
        if (props && props.actions) {
            this._actions = props.actions;
        } else {
            this._actions = [];
        }

        this._currentAction = null;
        this._actionStartTime = null;

        this._actionStartValue = null;
    }

    //SETTING ACTIONS
    setActions(actions) {
        this._actions = actions.slice();
        this.nextAction();
    }

    addAction(action) {
        this._actions.push(action);
    }

    //NEXT ACTIONS
    nextAction() {
        this._currentAction = this._actions.shift();
        this._actionStartTime = performance.now();
    }

    doCurrentAction() {
        if (this._currentAction.duration) {
            let dt = performance.now() - this._actionStartTime;

            if (dt >= this._currentAction.duration) {
                this.nextAction();
                this._actionStartTime = performance.now();
            }

            this._currentAction.method(this._currentAction.value);
        } else if (this._currentAction.once) {
            this._currentAction.method(this._currentAction.value);
            this.nextAction();
        } else {
            this._currentAction.method(this._currentAction.value);
        }
    }
} 