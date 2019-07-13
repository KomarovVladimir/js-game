import GameScene from './GameScene';
export default class GameStage extends GameScene {
    constructor(props) {
        super(props);
        this.id = props.id;

        this.enemies = [];
    }

    //OBJECT CREATION <================================================================================================
    createSceneObjects() {
        //player
        this.player = this.createObject(Player, {
            hp: 100,
            speed: 6,
            positionX: 0,
            positionY: 0,
            image: images[0],
            tilesAmount: 2,
            tileSize: 32,
            layer: 'main'
        });
        console.log(this.player);

        for (let i = 0; i < 6; i++) {
            this.enemies.push(this.createObject(EmenyShip, {
                hp: 100,
                speed:2,
                positionX: i * 64,
                positionY: 0,
                image: images[1],
                tilesAmount: 2,
                tileSize: 32,
                layer: 'back',
                actions: [
                    'forward'
                ]
            }));

            this.enemies[i].setBehavior([
                new Action({
                    method: this.enemies[i].move,
                    value: 'down',
                    duration: 1000
                }),
                new Action({
                    method: this.enemies[i].pause,
                    duration: 500
                }),
                new Action({
                    method: this.enemies[i].move,
                    value: 'up',
                    duration: 1000
                }),
                new Action({
                    method: this.enemies[i].setSpeed,
                    value: 6,
                    once: true
                }),
                new Action({
                    method: this.enemies[i].move,
                    value: 'down',
                    duration: 2000
                }),
                new Action({
                    method: this.enemies[i].pause,
                }),
            ]);

            console.log(this.enemies[i]);
        }
    }
}