//a basic game object class. includes methods EVERY object on a screen has
export default class GameObject {
    constructor(props) {
        props.positionX ? this.positionX = props.positionX : this.positionX = 0;
        props.positionY ? this.positionY = props.positionY : this.positionY = 0;
    }
}