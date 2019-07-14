import GameWindow from './GameWindow';

//key states  
let keyStates = { 
    up: false,
    right: false,
    down: false,
    left: false
}

//key press watch <======================================================= 
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
        this._name = props.name;

        this._gameWindow = new GameWindow(props.canvas);

        this._objects = [];

        //game request id
        this._requestId = null;

        this._timeHandler = {
            fps: 60,
            tps: 12,
            lastTime: null,
            lastTileTime: null
        };
        this._timeHandler.frameDelay = 1000 / this._timeHandler.fps;
        this._timeHandler.tileDelay = 1000 / this._timeHandler.tps;
    
    
        this._defaultScale = 1;

        //drawing buffer. 
        //overlay is for things like menu
        //front 
        //main
        //back
        //background
        this._renderLayers = {
            overlay: [],
            front: [],
            main: [],
            back: [],
            backbround: []
        };

        //default background color to make canvas visible at the beginning
        this._backgroundColor = '#444444';
        
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
        this._timeHandler.last = this._timeHandler.lastTileTime = performance.now();
        this._requestId = requestAnimationFrame(this.frame.bind(this));
    }

    //LOGIC <================================================================================================
    update() {
        this.keyHandler();
        for (let enemy of this.enemies) {
            enemy.doCurrentAction();
        }
    }
    
    //ANIMATION <================================================================================================
    frame() {
        let dt = performance.now() - this._timeHandler.lastTime;
        
        if (dt < this._timeHandler.frameDelay) {
            this._requestId = requestAnimationFrame(this.frame.bind(this));
        } else {
            this.update();
            this.refreshTiles(this._objects);
            
            this.render();
            
            this._timeHandler.lastTime = performance.now();
            this._requestId = requestAnimationFrame(this.frame.bind(this));
        }
    }

    //refresh all object's tiles
    refreshTiles(objects) {
        let dt = performance.now() - this._timeHandler.lastTileTime;
        if (dt > this._timeHandler.tileDelay) {
            for (let obj of objects) {
                obj.tileset.currentTile++;
                if (obj.tileset.currentTile >= obj.tileset.tilesAmount) {
                    obj.tileset.currentTile = 0;
                }
            }
            this._timeHandler.lastTileTime = performance.now();
        }
    }

    //RENDER <================================================================================================

    //main render method. should work each animation step
    //converts a layer object into an array and renders layer by layer from the end
    render() {
        this.fillField();
        let layers = this._renderLayers;
        const renderLayersArray = Object.values(layers);
        for (let i = renderLayersArray.length - 1; i >=0; i--) {
            for (let image of renderLayersArray[i]) {
                this.renderObject(image);
            }
        }
    }

    //draws a single object
    renderObject(obj, scale) {
        if (scale !== undefined) {
            this._gameWindow.ctx.drawImage(obj.image, obj.currentTile * obj.tileSize, 0, obj.tileSize, obj.tileSize, obj.positionX, obj.positionY, obj.tileSize * scale, obj.tileSize * scale);
        } else {
            this._gameWindow.ctx.drawImage(obj.tileset.image, obj.tileset.currentTile * obj.tileset.tileSize, 0, obj.tileset.tileSize, obj.tileset.tileSize, obj.positionX, obj.positionY, obj.tileset.tileSize * this._defaultScale, obj.tileset.tileSize * this._defaultScale);
        }
    }

    //fills the game field with default color (for now)
    fillField() {
        this._gameWindow.ctx.fillStyle = this._backgroundColor;
        this._gameWindow.ctx.fillRect(0, 0, this._gameWindow.width, this._gameWindow.height);
    }

    //CONTROLLS <================================================================================================
    keyHandler() {
        if (keyStates.up) {
            if (keyStates.right) {
                this.player.move('up-right');
            } else if (keyStates.left){
                this.player.move('up-left');
            } else {
                this.player.move('up');
            }
        } else if (keyStates.down) {
            if (keyStates.right) {
                this.player.move('down-right');
            } else if (keyStates.left){
                this.player.move('down-left');
            } else {
                this.player.move('down');
            }
        } else if (keyStates.left) {
            this.player.move('left');
        } else if (keyStates.right){
            this.player.move('right');
        }
    }

    //INITIALIZATION <================================================================================================
    async init() {
        console.log(`Scene "${ this._name }" loading.`);

        //create basic subjects of a lvl
        console.log('Creating objects.');
        await this.createSceneObjects();
        console.log('Creating objects done.');

        console.log(`Scene "${ this._name }" loaded.`);
    }

    //OBJECT CREATION <================================================================================================
    createSceneObjects() {
        console.log('This is a basic object creation method. If you see this message in your log it means you did not override this method in your scene class.');
    }

    //creates an object
    createObject(Class, props) {
        let obj = new Class({
            hp: props.hp,
            speed: props.speed,
            positionX: props.positionX,
            positionY: props.positionY,
            tileset: {
                image: props.image,
                tilesAmount: props.tilesAmount,
                tileSize: props.tileSize,
            }
        });
        this._objects.push(obj);
        this.pushToLayer(obj, props.layer);
        return obj;
    }

    //sets a render layer
    pushToLayer(obj, layer) {
        this._renderLayers[layer].push(obj);
    }
}