//a basic game object class. includes methods EVERY object on a screen has
export default class GameObject {
    constructor(props) {
        this.positionX = props.positionX ? props.positionX : this.positionX = 0;
        this.positionY = props.positionY ? props.positionY : this.positionY = 0;
    }
}