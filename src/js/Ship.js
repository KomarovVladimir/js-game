import GameObject from './GameObject';

export default class Ship extends GameObject {
    constructor(props) {
        super(props);
        
        this.hp = props.hp;
        this.speed = props.speed;

        //methods
        this.move = this.move.bind(this);
        this.setSpeed = this.setSpeed.bind(this);

        //tileset
        this.tileset = props.tileset;
        this.tileset.currentTile = 0;

    }

    move(direction) {
        switch (direction) {
            case 'up': {
                this.positionY -= this.speed;
                break;
            }
            case 'down': {
                this.positionY += this.speed;
                break;
            }
            case 'right': {
                this.positionX += this.speed;
                break;
            }
            case 'left': {
                this.positionX -= this.speed;
                break;
            }
            case 'up-right': {
                let offset = Math.round(this.speed * Math.sqrt(2) / 2);
                this.positionY -= offset;
                this.positionX += offset;
                break;
            }
            case 'up-left': {
                let offset = Math.round(this.speed * Math.sqrt(2) / 2);
                this.positionY -= offset;
                this.positionX -= offset;
                break;
            }
            case 'down-right': {
                let offset = Math.round(this.speed * Math.sqrt(2) / 2);
                this.positionY += offset;
                this.positionX += offset;
                break;
            }
            case 'down-left': {
                let offset = Math.round(this.speed * Math.sqrt(2) / 2);
                this.positionY += offset;
                this.positionX -= offset;
                break;
            }
        }
    }

    setSpeed(speed) {
        this.speed = speed;
    }
}