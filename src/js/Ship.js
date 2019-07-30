import GameObject from './Object';

export default class Ship extends GameObject {
    constructor(props) {
        super(props);
        
        this.hp = props.hp || 100;
        this.speed = props.speed || 10;
        this.image = props.image || null;
        this.tilesAmount = props.tilesAmount || 0;
        this.tileSize  = props.tileSize || 0;
        this.currentTile = props.currentTile || 0;
        this.angle = props.angle || 90;
        this.radAngle = this.angle * Math.PI / 180;
        this.turnSpeed = props.turnSpeed || 5;
        this.shootingSpeed = props.shootingSpeed || 1;
        this.items = [];

        //methods
        this.move = this.move.bind(this);
        this.setSpeed = this.setSpeed.bind(this);
    }

    shot() {
        console.log('shot');
    }

    move(angle) {
        const radAngle = angle * Math.PI / 180;
        this.positionX += Math.round(Math.cos(radAngle) * this.speed);
        this.positionY -= Math.round(Math.sin(radAngle) * this.speed);
    }

    turn(direction) {
        switch (direction) {
            case 'right': {
                this.angle -= this.turnSpeed;
                if ( this.angle <= 0 ) {
                    this.angle = 360 - this.angle;
                }
                this.radAngle = this.angle * Math.PI / 180;
                break;
            }
            case 'left': {
                this.angle += this.turnSpeed;
                if ( this.angle >= 360 ) {
                    this.angle = this.angle - 360;
                }
                this.radAngle = this.angle * Math.PI / 180;
                break;
            }
        }
    }

    setSpeed(speed) {
        this.speed = speed;
    }

    nextTile() {
        if (this.currentTile < (this.tilesAmount - 1)) {
            this.currentTile++;
        } else {
            this.currentTile = 0;
        }
    }

    getImage() {
        return this.image;
    }
}