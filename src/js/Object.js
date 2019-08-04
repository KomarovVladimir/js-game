export default class Object {
    constructor(props) {
        this.name = props.name;
        this.group = props.group || null;
        this.image = props.image || null;
        this.tilesAmount = props.tilesAmount || 0;
        this.tileWidth = props.tileWidth || 0;
        this.tileHeight = props.tileHeight || 0;
        this.currentTile = props.currentTile || 0;
        this.angle = props.angle || 90;
        this.radAngle = this.angle * Math.PI / 180;
        this.positionX = props.positionX || 0;
        this.positionY = props.positionY || 0;
        this.hitboxOffsetX = props.hitboxOffsetX;
        this.hitboxOffsetY = props.hitboxOffsetY;
        this.hitboxHeight = props.hitboxHeight;
        this.hitboxWidth = props.hitboxWidth;
        this.hitboxPositionX = this.positionX + this.hitboxOffsetX;
        this.hitboxPositionY = this.positionY + this.hitboxOffsetY;
        if (this.hitboxOffsetX ||  this.hitboxOffsetY || this.hitboxHeight || this.hitboxWidth) {
            this.hasHitbox = true;
        }
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

    draw(ctx) {
        ctx.save();
        ctx.translate(this.positionX  + this.tileWidth / 2, this.positionY + this.tileHeight / 2);
        ctx.rotate(-(this.angle - 90) * Math.PI / 180);
        ctx.drawImage(this.image, this.currentTile * this.tileWidth, 0, this.tileWidth, this.tileHeight, -this.tileWidth / 2, -this.tileHeight / 2, this.tileWidth, this.tileHeight);
        ctx.restore();
    }
}