import GameWindow from './GameWindow';

//key states  
let keyStates = { 
    up: false,
    right: false,
    down: false,
    left: false
}

export default class GameScene {
    constructor(props) {
        this.name = props.name;

        this.gameWindow = new GameWindow(props.canvas);

        this.objects = [];

        //game request id
        this.requestId = null;

        this.timeHandler = {
            fps: 60,
            tps: 12,
            lastTime: null,
            lastTileTime: null
        };
        this.timeHandler.frameDelay = 1000 / this.timeHandler.fps;
        this.timeHandler.tileDelay = 1000 / this.timeHandler.tps;
    
    
        this.defaultScale = 1;

        //drawing buffer. 
        //overlay is for things like menu
        //front 
        //main
        //back
        //background
        this.renderLayers = {
            overlay: [],
            front: [],
            main: [],
            back: [],
            backbround: []
        };

        //default background color to make canvas visible at the beginning
        this.backgroundColor = '#444444';
        
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
        this.timeHandler.last = this.timeHandler.lastTileTime = performance.now();
        this.requestId = requestAnimationFrame(this.frame.bind(this));
    }

    //LOGIC <================================================================================================
    update() {
        this.keyHandler();
        for (let enemy of this.enemies) {
            enemy.behavior.doCurrentAction();
        }
    }
    
    //ANIMATION <================================================================================================
    frame() {
        let dt = performance.now() - this.timeHandler.lastTime;
        
        if (dt < this.timeHandler.frameDelay) {
            this.requestId = requestAnimationFrame(this.frame.bind(this));
        } else {
            this.update();
            this.refreshTiles(this.objects);
            
            this.render();
            
            this.timeHandler.lastTime = performance.now();
            this.requestId = requestAnimationFrame(this.frame.bind(this));
        }
    }

    //refresh all object's tiles
    refreshTiles(objects) {
        let dt = performance.now() - this.timeHandler.lastTileTime;
        if (dt > this.timeHandler.tileDelay) {
            for (let obj of objects) {
                obj.tileset.currentTile++;
                if (obj.tileset.currentTile >= obj.tileset.tilesAmount) {
                    obj.tileset.currentTile = 0;
                }
            }
            this.timeHandler.lastTileTime = performance.now();
        }
    }

    //RENDER <================================================================================================

    //main render method. should work each animation step
    //converts a layer object into an array and renders layer by layer from the end
    render() {
        this.fillField();
        let layers = this.renderLayers;
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
            this.gameWindow.ctx.drawImage(obj.image, obj.currentTile * obj.tileSize, 0, obj.tileSize, obj.tileSize, obj.positionX, obj.positionY, obj.tileSize * scale, obj.tileSize * scale);
        } else {
            this.gameWindow.ctx.drawImage(obj.tileset.image, obj.tileset.currentTile * obj.tileset.tileSize, 0, obj.tileset.tileSize, obj.tileset.tileSize, obj.positionX, obj.positionY, obj.tileset.tileSize * this.defaultScale, obj.tileset.tileSize * this.defaultScale);
        }
    }

    //fills the game field with default color (for now)
    fillField() {
        this.gameWindow.ctx.fillStyle = this.backgroundColor;
        this.gameWindow.ctx.fillRect(0, 0, this.gameWindow.width, this.gameWindow.height);
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
        console.log(`Scene "${ this.name }" loading.`);

        //create basic subjects of a lvl
        console.log('Creating objects.');
        await this.createSceneObjects();
        console.log('Creating objects done.');

        console.log(`Scene "${ this.name }" loaded.`);
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
        this.objects.push(obj);
        this.pushToLayer(obj, props.layer);
        return obj;
    }

    //sets a render layer
    pushToLayer(obj, layer) {
        this.renderLayers[layer].push(obj);
    }
}