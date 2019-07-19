//a basic game object class. includes methods EVERY object on a screen has
export default class GameObject {
    constructor(props) {
        this.positionX = props.positionX || 0;
        this.positionY = props.positionY || 0;
    }
}