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
        this.gameWindow = new GameWindow({
            canvas: props.canvas,
            width: 900,
            height: 700,
            // scale: 2
        });
        this.requestId = null;
        this.fps = 60;
        this.tps = 12;
        this.lastTime = null;
        this.lastTileTime = null;
        this.frameDelay = Math.floor(1000 / this.fps);
        this.tileDelay =  Math.floor(1000 / this.tps);
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
            bulletImage: mediaHandler.getImage('missile'),
            tileWidth: 32,
            tileHeight: 32,
            speed: 10,
            hitboxWidth: 10,
            hitboxHeight: 10,
            weaponX: 16,
            weaponY: -16,
        });

        this.player = objectHandler.createObject(Player, {
            hp: 100,
            speed: 5,
            shotingSpeed: 4,
            image: mediaHandler.getImage('biggership'),
            tilesAmount: 2,
            tileWidth: 64,
            tileHeight: 64,
            weapon: basicWeapon,
            hitboxOffsetX: 16,
            hitboxOffsetY: 16,
            hitboxWidth: 32,
            hitboxHeight: 32,
        });
        this.player.setPosition(this.gameWindow.width / 2 - this.player.tileWidth / 2, this.gameWindow.height / 2 - this.player.tileHeight / 2);
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
        for (let obj of this.objects) {
            if (obj.update) {
                obj.update();
            }
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

        for (let obj of this.objects) {
            obj.draw(this.gameWindow.ctx);
        }
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