import GameWindow from './GameWindow';
import MediaHandler from './MediaHandler';
import ObjectHandler from './ObjectHandler';
import Player from './Player';
import EmenyShip from './EmenyShip';
import Action from './Action';
import Weapon from './Weapon';
import keyStates from './keyStates';

const mediaHandler = new MediaHandler();
const objectHandler = new ObjectHandler();

export default class GameScene {
    constructor(props) {
        this.name = props.name;
        this.gameWindow = new GameWindow(props.canvas);
        this.requestId = null;
        this.fps = 60;
        this.tps = 12;
        this.lastTime = null;
        this.lastTileTime = null;
        this.frameDelay = 1000 / this.fps;
        this.tileDelay = 1000 / this.tps;
        this.defaultScale = 1;
        this.objects = objectHandler.getObjects();
        this.layers = {
            overlay: [],
            front: [],
            main: [],
            back: [],
            backbround: []
        };
        this.layersArray = [];
        this.backgroundColor = '#111111';

        this.frame = this.frame.bind(this);
    }

    //INITIALIZATION <================================================================================================
    async init() {
        console.log(`Scene "${ this.name }" loading.`);
        console.log('Creating objects.');
        await this.createSceneObjects();
        console.log('Creating objects done.');
        console.log(`Scene "${ this.name }" loaded.`);
    }

    //OBJECT CREATION <================================================================================================
    createSceneObjects() {
        const basicWeapon = new Weapon({
            speed: 20,
            image: mediaHandler.getImage('bullet'),
            tileWidth: 1,
            tileHeight: 3
        });

        this.player = objectHandler.createObject(Player, {
            hp: 100,
            speed: 30,
            shotingSpeed: 10,
            image: mediaHandler.getImage('ship'),
            tilesAmount: 1,
            tileWidth: 32,
            tileHeight: 32,
            weapon: basicWeapon
        });
        this.player.positionX = this.gameWindow.width / 2 - this.player.tileWidth / 2;
        this.player.positionY = this.gameWindow.height / 2 - this.player.tileHeight / 2;
        this.pushToLayer(this.player, 'main');
        console.log(this.player);
    }

    //sets a render layer
    pushToLayer(obj, layer) {
        this.layers[layer].push(obj);
        this.getLayersArray();
    }

    //transforms layers object into simple array ti simplify rendering
    getLayersArray() {
        this.layersArray = [];
        const layersValues = Object.values(this.layers);
        for (let i = layersValues.length - 1; i >=0; i--) {
            for (let obj of layersValues[i]) {
                this.layersArray.push(obj);
            }
        }
    }

    //start scene
    async start() {
        await this.init();
        console.log('Game started.')

        // game start time
        this.startSceneLoop();
    }

    startSceneLoop() {
        // game start time
        this.last = this.lastTileTime = performance.now();
        this.requestId = requestAnimationFrame(this.frame);
    }

    //LOGIC <================================================================================================
    update() {
        this.keyHandler();
        // for (let enemy of this.enemies) {
        //     enemy.doCurrentAction();
        // }
    }
    
    //ANIMATION <================================================================================================
    frame() {
        let dt = performance.now() - this.lastTime;
        
        if (dt < this.frameDelay) {
            this.requestId = requestAnimationFrame(this.frame);
        } else {
            this.update();
            this.refreshTiles(this.objects);
            
            this.render();
            
            this.lastTime = performance.now();
            this.requestId = requestAnimationFrame(this.frame);
        }
    }

    refreshTiles(objects) {
        let dt = performance.now() - this.lastTileTime;
        if (dt > this.tileDelay) {
            for (let obj of objects) {
                obj.nextTile();
            }
            this.lastTileTime = performance.now();
        }
    }

    //RENDER <================================================================================================
    render() {
        this.fillField();

        for (let obj of this.layersArray) {
            this.drawObject(obj);
        }
    } 

    //draws a single object
    drawObject(obj, scale) {
        this.gameWindow.ctx.save();
        this.gameWindow.ctx.translate(obj.positionX  + obj.tileWidth / 2, obj.positionY + obj.tileHeight / 2);
        this.gameWindow.ctx.rotate(-(obj.angle - 90) * Math.PI / 180);
        if (scale) {
            // // this.gameWindow.ctx.drawImage(obj.image, obj.currentTile * obj.tileWidth, 0, obj.tileSize, obj.tileSize, obj.positionX, obj.positionY, obj.tileWidth * scale, obj.tileWidth * scale);
        } else {
            this.gameWindow.ctx.drawImage(obj.image, obj.currentTile * obj.tileWidth, 0, obj.tileWidth, obj.tileHeight, -obj.tileWidth / 2, -obj.tileHeight / 2, obj.tileWidth, obj.tileHeight);
        }
        this.gameWindow.ctx.restore();
    }

    fillField() {
        this.gameWindow.ctx.fillStyle = this.backgroundColor;
        this.gameWindow.ctx.fillRect(0, 0, this.gameWindow.width, this.gameWindow.height);
    }

    keyHandler() {
        if (keyStates.space) {
            this.player.shot();
        }

        if (keyStates.up) {
            if (keyStates.right) {
                this.player.move(45);
            } else if (keyStates.left){
                this.player.move(135);
            } else {
                this.player.move(90);
            }
        } else if (keyStates.down) {
            if (keyStates.right) {
                this.player.move(315);
            } else if (keyStates.left){
                this.player.move(225);
            } else {
                this.player.move(270);
            }
        } else if (keyStates.left) {
            this.player.move(180);
        } else if (keyStates.right){
            this.player.move(0);
        }

        this.player.checkBorders(this.gameWindow);
    }
}


// for (let i = 0; i < 6; i++) {
//     this.enemies.push(this.createObject(EmenyShip, {
//         hp: 100,
//         speed:2,
//         positionX: i * 64,
//         positionY: 0,
//         image: mediaHandler.getImage(1),
//         tilesAmount: 3,
//         tileSize: 64,
//     }));
//     this.pushToLayer(this.enemies[i], 'back');

//     this.enemies[i].setBehavior([
//         new Action({
//             method: this.enemies[i].move,
//             value: 'down',
//             duration: 1000
//         }),
//         new Action({
//             method: this.enemies[i].pause,
//             duration: 500
//         }),
//         new Action({
//             method: this.enemies[i].move,
//             value: 'up',
//             duration: 1000
//         }),
//         new Action({
//             method: this.enemies[i].setSpeed,
//             value: 6,
//             once: true
//         }),
//         new Action({
//             method: this.enemies[i].move,
//             value: 'down',
//             duration: 2000
//         }),
//         new Action({
//             method: this.enemies[i].pause,
//         }),
//     ]);

//     console.log(this.enemies[i]);
// }