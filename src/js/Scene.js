import GameWindow from './GameWindow';
import MediaHandler from './MediaHandler';
import Player from './Player';
import EmenyShip from './EmenyShip';
import Action from './Action';
const mediaHandler = new MediaHandler();

let keyStates = { 
    up: false,
    right: false,
    down: false,
    left: false
}

window.addEventListener('keydown', (e) => {
    if (e.keyCode === 87 || e.keyCode === 38) {
        keyStates.up = true;
    }
    if (e.keyCode === 65 || e.keyCode === 37) {
        // console.log('A is pressed!');
        keyStates.left = true;
    }
    if (e.keyCode === 83 || e.keyCode === 40) {
        // console.log('S is pressed!');
        keyStates.down = true;
    }
    if (e.keyCode === 68 || e.keyCode === 39) {
        // console.log('D is pressed!');
        keyStates.right = true;
    }
}, true);
    
window.addEventListener('keyup', (e) => {
    if (e.keyCode === 87 || e.keyCode === 38) {
        keyStates.up = false;
    }
    if (e.keyCode === 65 || e.keyCode === 37) {
        // console.log('A is pressed!');
        keyStates.left = false;
    }
    if (e.keyCode === 83 || e.keyCode === 40) {
        // console.log('S is pressed!');
        keyStates.down = false;
    }
    if (e.keyCode === 68 || e.keyCode === 39) {
        // console.log('D is pressed!');
        keyStates.right = false;
    }
}, true);

export default class GameScene {
    constructor(props) {
        this.name = props.name;
        this.gameWindow = new GameWindow(props.canvas);
        this.objects = [];
        this.enemies = [];
        this.requestId = null;
        this.fps = 60;
        this.tps = 12;
        this.lastTime = null;
        this.lastTileTime = null;
        this.frameDelay = 1000 / this.fps;
        this.tileDelay = 1000 / this.tps;
        this.defaultScale = 1;
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
        this.player = this.createObject(Player, {
            hp: 100,
            speed: 10,
            image: mediaHandler.getImage(0),
            tilesAmount: 3,
            tileSize: 64,
        });
        this.player.positionX = this.gameWindow.width / 2 - this.player.tileSize / 2;
        this.player.positionY = this.gameWindow.height / 2 - this.player.tileSize / 2;
        this.pushToLayer(this.player, 'main');
        console.log(this.player);

        for (let i = 0; i < 6; i++) {
            this.enemies.push(this.createObject(EmenyShip, {
                hp: 100,
                speed:2,
                positionX: i * 64,
                positionY: 0,
                image: mediaHandler.getImage(1),
                tilesAmount: 3,
                tileSize: 64,
            }));
            this.pushToLayer(this.enemies[i], 'back');

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

    //creates a game object
    createObject(Class, props) {
        let obj = new Class(props);
        this.objects.push(obj);
        return obj;
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
        this.player.checkBorders(this.gameWindow);
        for (let enemy of this.enemies) {
            enemy.doCurrentAction();
        }
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
        if (scale) {
            this.gameWindow.ctx.drawImage(obj.image, obj.currentTile * obj.tileSize, 0, obj.tileSize, obj.tileSize, obj.positionX, obj.positionY, obj.tileSize * scale, obj.tileSize * scale);
        } else {
            this.gameWindow.ctx.save();
            // this.gameWindow.ctx.translate(this.gameWindow.width / 2 + obj.tileSize / 2, this.gameWindow.height / 2 + obj.tileSize / 2);
            // this.gameWindow.ctx.rotate(obj.radAngle);
            this.gameWindow.ctx.drawImage(obj.image, obj.currentTile * obj.tileSize, 0, obj.tileSize, obj.tileSize, obj.positionX, obj.positionY, obj.tileSize, obj.tileSize);
            // this.gameWindow.ctx.drawImage(obj.image, obj.positionX, obj.positionY);
            this.gameWindow.ctx.restore();
        }
    }

    fillField() {
        this.gameWindow.ctx.fillStyle = this.backgroundColor;
        this.gameWindow.ctx.fillRect(0, 0, this.gameWindow.width, this.gameWindow.height);
    }

    keyHandler() {
        if (keyStates.up) {
            this.player.moveForward();
        }
        if (keyStates.down) {
            this.player.moveBack();
        }
        if (keyStates.left) {
            this.player.turn('left');
        }
        if (keyStates.right) {
            this.player.turn('right');
        }

        // if (keyStates.up) {
        //     if (keyStates.right) {
        //         this.player.move('up-right');
        //     } else if (keyStates.left){
        //         this.player.move('up-left');
        //     } else {
        //         this.player.move('up');
        //     }
        // } else if (keyStates.down) {
        //     if (keyStates.right) {
        //         this.player.move('down-right');
        //     } else if (keyStates.left){
        //         this.player.move('down-left');
        //     } else {
        //         this.player.move('down');
        //     }
        // } else if (keyStates.left) {
        //     this.player.move('left');
        // } else if (keyStates.right){
        //     this.player.move('right');
        // }
    }
}