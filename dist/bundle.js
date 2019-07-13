/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _GameWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _GameStage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _Behavior__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _EmenyShip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);


//object containing all of the images after they are preloaded
let images = [];

//sources of all of the game images, goes to preload method
let imageSources = [
    './src/images/ship.png',
    './src/images/enemy.png'
];

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




// import GameObject from './GameObject';
// import GameScene from './GameScene';


// import Ship from './Ship';




//GAME INIT <======================================================= 
const canvas = document.getElementById('game');
const game = new _Game__WEBPACK_IMPORTED_MODULE_0__["default"](canvas);
console.log(game);
game.start();    

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
class Game {
    constructor(canvas) {
        this.canvas = canvas;

        //game state (off = 0, on = 1, pause = 2)
        this.gameState = 0;

        //current game stage
        this.levelId = 1;

        //sample of a stage class
        this.stage = null;
    }

    //game initialization process
    async init() {
        //preload images
        console.log('Image preloading.');
        await this.preloadAllImages();
        console.log('Images preloading done.');
    }

    //this method takes all of the sources from this.imageSources and preloads them
    async preloadAllImages() {
        for(let src of imageSources) {
            console.log(`Loading ${src}.`);
            images.push(await this.preloadImage(src));
        }
    }

    //preloads a single image from src
    preloadImage(src) {
        return new Promise((resolve, reject) => {
            let img = new Image();
            img.onload = () => {
                console.log(`Image ${img.src} loaded.`)
                resolve(img);
            };
            img.onerror = () => reject();
            img.src = src;
        });
    }

    //game start
    //============================================wip=================
    async start() {
        await this.init();

        //game on state
        this.gameState = 1;

        //creation of stage 1 <================================================================================================ WiP!
        this.stage = new GameStage({
            name: 'A Test Game Stage',
            canvas: this.canvas,
            id: 0
        });
        this.stage.start();
    }  
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameWindow; });
class GameWindow {
    constructor(canvas) {
        //game canvas
        this.canvas = canvas;

        //drawing context
        this.ctx = this.canvas.getContext('2d');

        //field width/height
        this.width = this.canvas.width;
        this.height = this.canvas.height;
    }
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameStage; });
/* harmony import */ var _GameScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

class GameStage extends _GameScene__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameScene; });
class GameScene {
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

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Behavior; });
//BEHAVIOUR CLASS. HANDLES ACTION'S EXECUTION
class Behavior {
    constructor(props) {
        //this is an array of enemy actions like move, turn, stop etc. 
        // props.actions ? this.actions = props.actions.slice() : [];
        if (props && props.actions) {
            this.actions = props.actions;
        } else {
            this.actions = [];
        }

        this.currentAction = null;
        this.actionStartTime = null;

        this.actionStartValue = null;
    }

    //SETTING ACTIONS
    setActions(actions) {
        this.actions = actions.slice();
        this.nextAction();
    }

    addAction(action) {
        this.actions.push(action);
    }

    //NEXT ACTIONS
    nextAction() {
        this.currentAction = this.actions.shift();
        this.actionStartTime = performance.now();
    }

    doCurrentAction() {
        if (this.currentAction.duration) {
            let dt = performance.now() - this.actionStartTime;

            if (dt >= this.currentAction.duration) {
                this.nextAction();
                this.actionStartTime = performance.now();
            }

            this.currentAction.method(this.currentAction.value);
        } else if (this.currentAction.once) {
            this.currentAction.method(this.currentAction.value);
            this.nextAction();
        } else {
            this.currentAction.method(this.currentAction.value);
        }
    }

    //DO CURRENT ACTION
    // doCurrentAction() {
    //     if (this.currentAction.value) {
    //         const dv = this.currentAction.value - this.actionStartValue;

    //         if (this.currentAction.value <= startActionValue) {

    //         }


    //         this.currentAction.method(this.currentAction.value);
    //     } else if (this.currentAction.once) {
    //         this.currentAction.method(this.currentAction.value);
    //         this.nextAction();
    //     } else {
    //         this.currentAction.method(this.currentAction.value);
    //     }
    // }
} 

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
//a class of player character. a player is a SHIP, so it extends appropriate class
//to create a player, you need ti pass PROPS variable
// example
// {
//     hp: 100,
//     speed: 10,
//     positionX: 100,
//     positiony: 200,
//     image: null,
//     tileset: {
//         image: img,
//         tilesAmount: 2,
//         tileHeightL 64
//         currentTile: 0; 
//     },
// }



class Player extends _Ship__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(props) {
        super(props);
    }
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ship; });
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);


class Ship extends _GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(props) {
        super(props);

        this.hp = props.hp;

        //tileset
        this.tileset =  props.tileset;

        this.tileset.currentTile = 0;

        //ship's speed
        this.speed = props.speed;

        //methods
        this.move = this.move.bind(this);
        this.setSpeed = this.setSpeed.bind(this);
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

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameObject; });
//a basic game object class. includes methods EVERY object on a screen has
class GameObject {
    constructor(props) {
        props.positionX ? this.positionX = props.positionX : this.positionX = 0;
        props.positionY ? this.positionY = props.positionY : this.positionY = 0;
    }
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EmenyShip; });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);


class EmenyShip extends _Ship__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(props) {
        super(props);

        this.pause = this.pause.bind(this);

        this.behavior = new Behavior();
    }
    
    //ENEMY SHIP LIGIC AND ACTIONS
    pause() {}

    //SET BEHAVIOR
    setBehavior(actions) {
        this.behavior.setActions(actions);
    }
}

/***/ })
/******/ ]);