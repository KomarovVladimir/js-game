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


//GAME INIT <======================================================= 
const canvas = document.getElementById('game');
const game = new _Game__WEBPACK_IMPORTED_MODULE_0__["default"](canvas);
game.start();    

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _MediaHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



const mediaHandler = new _MediaHandler__WEBPACK_IMPORTED_MODULE_0__["default"]();

class Game {
    constructor(canvas) {
        this.canvas = canvas;

        //game state (off = 0, on = 1, pause = 2)
        this.gameState = 0;

        //sample of a stage class
        this.stage = null;
    }

    //game initialization process
    async init() {
        mediaHandler.setImageSources([
            '../../dist/images/ship.png',
            '../../dist/images/enemy.png'
        ]);

        //preload images
        console.log('Image preloading.');
        await this.preloadAllImages();
        console.log('Images preloading done.');
    }

    //this method takes all of the sources from this.imageSources and preloads them
    async preloadAllImages() {
        const imageSources = mediaHandler.getImageSources();

        for(let src of imageSources) {
            console.log(`Loading ${src}.`);
            mediaHandler.addImage(await this.preloadImage(src));
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
        this.stage = new _Scene__WEBPACK_IMPORTED_MODULE_1__["default"]({
            name: 'A Test Game Stage',
            canvas: this.canvas,
        });
        this.stage.start();
    }  
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MediaHandler; });
/* harmony import */ var _gameMedia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);


class MediaHandler {
    constructor(props) {
        this.imageSources = (props && props.imageSources.slice()) || [];
    }

    setImageSources(sourcesArray) {
        this.imageSources = sourcesArray.slice();
    }

    getImageSources() {
        return  this.imageSources;
    }

    addImage(image) {
        _gameMedia__WEBPACK_IMPORTED_MODULE_0__["default"].push(image);
    }

    getImage(n) {
        return _gameMedia__WEBPACK_IMPORTED_MODULE_0__["default"][n];
    }

    getImages() {
        return _gameMedia__WEBPACK_IMPORTED_MODULE_0__["default"];
    }
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameScene; });
/* harmony import */ var _GameWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _MediaHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _EmenyShip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);





const mediaHandler = new _MediaHandler__WEBPACK_IMPORTED_MODULE_1__["default"]();

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

class GameScene {
    constructor(props) {
        this.name = props.name;
        this.gameWindow = new _GameWindow__WEBPACK_IMPORTED_MODULE_0__["default"](props.canvas);
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
        this.player = this.createObject(_Player__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
            this.enemies.push(this.createObject(_EmenyShip__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
                new _Action__WEBPACK_IMPORTED_MODULE_4__["default"]({
                    method: this.enemies[i].move,
                    value: 'down',
                    duration: 1000
                }),
                new _Action__WEBPACK_IMPORTED_MODULE_4__["default"]({
                    method: this.enemies[i].pause,
                    duration: 500
                }),
                new _Action__WEBPACK_IMPORTED_MODULE_4__["default"]({
                    method: this.enemies[i].move,
                    value: 'up',
                    duration: 1000
                }),
                new _Action__WEBPACK_IMPORTED_MODULE_4__["default"]({
                    method: this.enemies[i].setSpeed,
                    value: 6,
                    once: true
                }),
                new _Action__WEBPACK_IMPORTED_MODULE_4__["default"]({
                    method: this.enemies[i].move,
                    value: 'down',
                    duration: 2000
                }),
                new _Action__WEBPACK_IMPORTED_MODULE_4__["default"]({
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

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameWindow; });
class GameWindow {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.top = 0;
        this.right = this.canvas.width;
        this.bottom = this.canvas.height;
        this.left = 0;
    }
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/*a class of player character. a player is a SHIP, so it extends appropriate class
to create a player, you need ti pass PROPS variable
example
{
    hp: 100,
    speed: 10,
    positionX: 100,
    positiony: 200,
    image: img,
    tilesAmount: 2,
    tileHeightL 64
    currentTile: 0; 
}
*/


class Player extends _Ship__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(props) {
        super(props);
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

    checkBorders(rectangle) {
        if (this.positionY < rectangle.top) {
            this.positionY = rectangle.top;
        }
        if (this.positionY > rectangle.bottom - this.tileSize) {
            this.positionY = rectangle.bottom - this.tileSize;
        }
        if (this.positionX < rectangle.left) {
            this.positionX = rectangle.left;
        }
        if (this.positionX > rectangle.right - this.tileSize) {
            this.positionX = rectangle.right - this.tileSize;
        }
    }
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ship; });
/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);


class Ship extends _Object__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

    moveForward() {
        this.positionX += Math.cos(this.radAngle) * this.speed;
        this.positionY -= Math.sin(this.radAngle) * this.speed;
    }
    moveBack() {
        this.positionX -= Math.cos(this.radAngle) * this.speed;
        this.positionY += Math.sin(this.radAngle) * this.speed;
    }

    turn(direction) {
        switch (direction) {
            case 'right': {
                this.angle -= this.turnSpeed;
                this.radAngle = this.angle * Math.PI / 180;
                break;
            }
            case 'left': {
                this.angle += this.turnSpeed;
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

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameObject; });
//a basic game object class. includes methods EVERY object on a screen has
class GameObject {
    constructor(props) {
        this.positionX = props.positionX || 0;
        this.positionY = props.positionY || 0;
    }
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EmenyShip; });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _Behavior__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);



class EmenyShip extends _Ship__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(props) {
        super(props);

        this.pause = this.pause.bind(this);

        this.behavior = new _Behavior__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    
    //ENEMY SHIP LIGIC AND ACTIONS
    pause() {}
 
    //SET BEHAVIOR
    setBehavior(actions) {
        this.behavior.setActions(actions);
    }

    doCurrentAction() {
        this.behavior.doCurrentAction();
    }
}

/***/ }),
/* 9 */
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
} 

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Action; });
//AN ACTION CLASS. IS NEEDED TO CONSTRUCT BEHAVIOR ARRAYS FOR AUTOMATIC ENTITIES
class Action {
    constructor(props) {
        this.method = props.method;
        this.duration = props.duration;
        this.once = props.once;
        this.value = props.value;
        this.actionStartTime = null;
    }
} 

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let gameMedia = [];
/* harmony default export */ __webpack_exports__["default"] = (gameMedia);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvTWVkaWFIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TY2VuZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvR2FtZVdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvUGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TaGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0VtZW55U2hpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZ2FtZU1lZGlhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBMEI7O0FBRTFCO0FBQ0E7QUFDQSxpQkFBaUIsNkNBQUk7QUFDckIsYTs7Ozs7OztBQ0xBO0FBQUE7QUFBQTtBQUFBO0FBQTBDO0FBQ1Y7O0FBRWhDLHlCQUF5QixxREFBWTs7QUFFdEI7QUFDZjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQyxJQUFJO0FBQ3ZDO0FBQ0EsUztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsUUFBUTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLDhDQUFTO0FBQ2xDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLO0FBQ0EsQzs7Ozs7OztBQ25FQTtBQUFBO0FBQUE7QUFBb0M7O0FBRXJCO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLGtEQUFTO0FBQ2pCOztBQUVBO0FBQ0EsZUFBZSxrREFBUztBQUN4Qjs7QUFFQTtBQUNBLGVBQWUsa0RBQVM7QUFDeEI7QUFDQSxDOzs7Ozs7O0FDMUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNDO0FBQ0k7QUFDWjtBQUNNO0FBQ047QUFDOUIseUJBQXlCLHFEQUFZOztBQUVyQyxpQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFYztBQUNmO0FBQ0E7QUFDQSw4QkFBOEIsbURBQVU7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCLFlBQVk7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFlBQVk7QUFDMUM7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QywrQ0FBTTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1QixPQUFPO0FBQzlCLGdEQUFnRCxrREFBUztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLG9CQUFvQiwrQ0FBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsb0JBQW9CLCtDQUFNO0FBQzFCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsb0JBQW9CLCtDQUFNO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixvQkFBb0IsK0NBQU07QUFDMUI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLG9CQUFvQiwrQ0FBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsb0JBQW9CLCtDQUFNO0FBQzFCO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxPQUFPO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDN1JBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ1hBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQjtBQUNBO0FBQ0E7QUFDMEI7O0FBRVgscUJBQXFCLDZDQUFJO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDaEZBO0FBQUE7QUFBQTtBQUFrQzs7QUFFbkIsbUJBQW1CLCtDQUFVO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUN6R0E7QUFBQTtBQUFBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFBQTtBQUEwQjtBQUNROztBQUVuQix3QkFBd0IsNkNBQUk7QUFDM0M7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIsaURBQVE7QUFDcEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDdkJBO0FBQUE7QUFBQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNsREE7QUFBQTtBQUFBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNUQTtBQUFBO0FBQ2Usd0VBQVMsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUnO1xyXG5cclxuLy9HQU1FIElOSVQgPD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXHJcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJyk7XHJcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMpO1xyXG5nYW1lLnN0YXJ0KCk7ICAgICIsImltcG9ydCBNZWRpYUhhbmRsZXIgZnJvbSAnLi9NZWRpYUhhbmRsZXInO1xyXG5pbXBvcnQgR2FtZVNjZW5lIGZyb20gJy4vU2NlbmUnO1xyXG5cclxuY29uc3QgbWVkaWFIYW5kbGVyID0gbmV3IE1lZGlhSGFuZGxlcigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuXHJcbiAgICAgICAgLy9nYW1lIHN0YXRlIChvZmYgPSAwLCBvbiA9IDEsIHBhdXNlID0gMilcclxuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IDA7XHJcblxyXG4gICAgICAgIC8vc2FtcGxlIG9mIGEgc3RhZ2UgY2xhc3NcclxuICAgICAgICB0aGlzLnN0YWdlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvL2dhbWUgaW5pdGlhbGl6YXRpb24gcHJvY2Vzc1xyXG4gICAgYXN5bmMgaW5pdCgpIHtcclxuICAgICAgICBtZWRpYUhhbmRsZXIuc2V0SW1hZ2VTb3VyY2VzKFtcclxuICAgICAgICAgICAgJy4uLy4uL2Rpc3QvaW1hZ2VzL3NoaXAucG5nJyxcclxuICAgICAgICAgICAgJy4uLy4uL2Rpc3QvaW1hZ2VzL2VuZW15LnBuZydcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgLy9wcmVsb2FkIGltYWdlc1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdJbWFnZSBwcmVsb2FkaW5nLicpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMucHJlbG9hZEFsbEltYWdlcygpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdJbWFnZXMgcHJlbG9hZGluZyBkb25lLicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdGhpcyBtZXRob2QgdGFrZXMgYWxsIG9mIHRoZSBzb3VyY2VzIGZyb20gdGhpcy5pbWFnZVNvdXJjZXMgYW5kIHByZWxvYWRzIHRoZW1cclxuICAgIGFzeW5jIHByZWxvYWRBbGxJbWFnZXMoKSB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2VTb3VyY2VzID0gbWVkaWFIYW5kbGVyLmdldEltYWdlU291cmNlcygpO1xyXG5cclxuICAgICAgICBmb3IobGV0IHNyYyBvZiBpbWFnZVNvdXJjZXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYExvYWRpbmcgJHtzcmN9LmApO1xyXG4gICAgICAgICAgICBtZWRpYUhhbmRsZXIuYWRkSW1hZ2UoYXdhaXQgdGhpcy5wcmVsb2FkSW1hZ2Uoc3JjKSk7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICAvL3ByZWxvYWRzIGEgc2luZ2xlIGltYWdlIGZyb20gc3JjXHJcbiAgICBwcmVsb2FkSW1hZ2Uoc3JjKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEltYWdlICR7aW1nLnNyY30gbG9hZGVkLmApXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGltZyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGltZy5vbmVycm9yID0gKCkgPT4gcmVqZWN0KCk7XHJcbiAgICAgICAgICAgIGltZy5zcmMgPSBzcmM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9nYW1lIHN0YXJ0XHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09d2lwPT09PT09PT09PT09PT09PT1cclxuICAgIGFzeW5jIHN0YXJ0KCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuaW5pdCgpO1xyXG5cclxuICAgICAgICAvL2dhbWUgb24gc3RhdGVcclxuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IDE7XHJcblxyXG4gICAgICAgIC8vY3JlYXRpb24gb2Ygc3RhZ2UgMSA8PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFdpUCFcclxuICAgICAgICB0aGlzLnN0YWdlID0gbmV3IEdhbWVTY2VuZSh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdBIFRlc3QgR2FtZSBTdGFnZScsXHJcbiAgICAgICAgICAgIGNhbnZhczogdGhpcy5jYW52YXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zdGFnZS5zdGFydCgpO1xyXG4gICAgfSAgXHJcbn0iLCJpbXBvcnQgZ2FtZU1lZGlhIGZyb20gJy4vZ2FtZU1lZGlhJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhSGFuZGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VTb3VyY2VzID0gKHByb3BzICYmIHByb3BzLmltYWdlU291cmNlcy5zbGljZSgpKSB8fCBbXTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJbWFnZVNvdXJjZXMoc291cmNlc0FycmF5KSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZVNvdXJjZXMgPSBzb3VyY2VzQXJyYXkuc2xpY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbWFnZVNvdXJjZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuICB0aGlzLmltYWdlU291cmNlcztcclxuICAgIH1cclxuXHJcbiAgICBhZGRJbWFnZShpbWFnZSkge1xyXG4gICAgICAgIGdhbWVNZWRpYS5wdXNoKGltYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbWFnZShuKSB7XHJcbiAgICAgICAgcmV0dXJuIGdhbWVNZWRpYVtuXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbWFnZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGdhbWVNZWRpYTtcclxuICAgIH1cclxufSIsImltcG9ydCBHYW1lV2luZG93IGZyb20gJy4vR2FtZVdpbmRvdyc7XHJcbmltcG9ydCBNZWRpYUhhbmRsZXIgZnJvbSAnLi9NZWRpYUhhbmRsZXInO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJztcclxuaW1wb3J0IEVtZW55U2hpcCBmcm9tICcuL0VtZW55U2hpcCc7XHJcbmltcG9ydCBBY3Rpb24gZnJvbSAnLi9BY3Rpb24nO1xyXG5jb25zdCBtZWRpYUhhbmRsZXIgPSBuZXcgTWVkaWFIYW5kbGVyKCk7XHJcblxyXG5sZXQga2V5U3RhdGVzID0geyBcclxuICAgIHVwOiBmYWxzZSxcclxuICAgIHJpZ2h0OiBmYWxzZSxcclxuICAgIGRvd246IGZhbHNlLFxyXG4gICAgbGVmdDogZmFsc2VcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gODcgfHwgZS5rZXlDb2RlID09PSAzOCkge1xyXG4gICAgICAgIGtleVN0YXRlcy51cCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSA2NSB8fCBlLmtleUNvZGUgPT09IDM3KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0EgaXMgcHJlc3NlZCEnKTtcclxuICAgICAgICBrZXlTdGF0ZXMubGVmdCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSA4MyB8fCBlLmtleUNvZGUgPT09IDQwKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1MgaXMgcHJlc3NlZCEnKTtcclxuICAgICAgICBrZXlTdGF0ZXMuZG93biA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSA2OCB8fCBlLmtleUNvZGUgPT09IDM5KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0QgaXMgcHJlc3NlZCEnKTtcclxuICAgICAgICBrZXlTdGF0ZXMucmlnaHQgPSB0cnVlO1xyXG4gICAgfVxyXG59LCB0cnVlKTtcclxuICAgIFxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gODcgfHwgZS5rZXlDb2RlID09PSAzOCkge1xyXG4gICAgICAgIGtleVN0YXRlcy51cCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gNjUgfHwgZS5rZXlDb2RlID09PSAzNykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdBIGlzIHByZXNzZWQhJyk7XHJcbiAgICAgICAga2V5U3RhdGVzLmxlZnQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChlLmtleUNvZGUgPT09IDgzIHx8IGUua2V5Q29kZSA9PT0gNDApIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnUyBpcyBwcmVzc2VkIScpO1xyXG4gICAgICAgIGtleVN0YXRlcy5kb3duID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSA2OCB8fCBlLmtleUNvZGUgPT09IDM5KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0QgaXMgcHJlc3NlZCEnKTtcclxuICAgICAgICBrZXlTdGF0ZXMucmlnaHQgPSBmYWxzZTtcclxuICAgIH1cclxufSwgdHJ1ZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU2NlbmUge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBwcm9wcy5uYW1lO1xyXG4gICAgICAgIHRoaXMuZ2FtZVdpbmRvdyA9IG5ldyBHYW1lV2luZG93KHByb3BzLmNhbnZhcyk7XHJcbiAgICAgICAgdGhpcy5vYmplY3RzID0gW107XHJcbiAgICAgICAgdGhpcy5lbmVtaWVzID0gW107XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0SWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZnBzID0gNjA7XHJcbiAgICAgICAgdGhpcy50cHMgPSAxMjtcclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLmxhc3RUaWxlVGltZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5mcmFtZURlbGF5ID0gMTAwMCAvIHRoaXMuZnBzO1xyXG4gICAgICAgIHRoaXMudGlsZURlbGF5ID0gMTAwMCAvIHRoaXMudHBzO1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdFNjYWxlID0gMTtcclxuICAgICAgICB0aGlzLmxheWVycyA9IHtcclxuICAgICAgICAgICAgb3ZlcmxheTogW10sXHJcbiAgICAgICAgICAgIGZyb250OiBbXSxcclxuICAgICAgICAgICAgbWFpbjogW10sXHJcbiAgICAgICAgICAgIGJhY2s6IFtdLFxyXG4gICAgICAgICAgICBiYWNrYnJvdW5kOiBbXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5sYXllcnNBcnJheSA9IFtdO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gJyMxMTExMTEnO1xyXG5cclxuICAgICAgICB0aGlzLmZyYW1lID0gdGhpcy5mcmFtZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vSU5JVElBTElaQVRJT04gPD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgYXN5bmMgaW5pdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgU2NlbmUgXCIkeyB0aGlzLm5hbWUgfVwiIGxvYWRpbmcuYCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIG9iamVjdHMuJyk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5jcmVhdGVTY2VuZU9iamVjdHMoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgb2JqZWN0cyBkb25lLicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBTY2VuZSBcIiR7IHRoaXMubmFtZSB9XCIgbG9hZGVkLmApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vT0JKRUNUIENSRUFUSU9OIDw9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNyZWF0ZVNjZW5lT2JqZWN0cygpIHtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHRoaXMuY3JlYXRlT2JqZWN0KFBsYXllciwge1xyXG4gICAgICAgICAgICBocDogMTAwLFxyXG4gICAgICAgICAgICBzcGVlZDogMTAsXHJcbiAgICAgICAgICAgIGltYWdlOiBtZWRpYUhhbmRsZXIuZ2V0SW1hZ2UoMCksXHJcbiAgICAgICAgICAgIHRpbGVzQW1vdW50OiAzLFxyXG4gICAgICAgICAgICB0aWxlU2l6ZTogNjQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucG9zaXRpb25YID0gdGhpcy5nYW1lV2luZG93LndpZHRoIC8gMiAtIHRoaXMucGxheWVyLnRpbGVTaXplIC8gMjtcclxuICAgICAgICB0aGlzLnBsYXllci5wb3NpdGlvblkgPSB0aGlzLmdhbWVXaW5kb3cuaGVpZ2h0IC8gMiAtIHRoaXMucGxheWVyLnRpbGVTaXplIC8gMjtcclxuICAgICAgICB0aGlzLnB1c2hUb0xheWVyKHRoaXMucGxheWVyLCAnbWFpbicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGxheWVyKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnB1c2godGhpcy5jcmVhdGVPYmplY3QoRW1lbnlTaGlwLCB7XHJcbiAgICAgICAgICAgICAgICBocDogMTAwLFxyXG4gICAgICAgICAgICAgICAgc3BlZWQ6MixcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uWDogaSAqIDY0LFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25ZOiAwLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IG1lZGlhSGFuZGxlci5nZXRJbWFnZSgxKSxcclxuICAgICAgICAgICAgICAgIHRpbGVzQW1vdW50OiAzLFxyXG4gICAgICAgICAgICAgICAgdGlsZVNpemU6IDY0LFxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIHRoaXMucHVzaFRvTGF5ZXIodGhpcy5lbmVtaWVzW2ldLCAnYmFjaycpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5lbmVtaWVzW2ldLnNldEJlaGF2aW9yKFtcclxuICAgICAgICAgICAgICAgIG5ldyBBY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogdGhpcy5lbmVtaWVzW2ldLm1vdmUsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdkb3duJyxcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMFxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBuZXcgQWN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IHRoaXMuZW5lbWllc1tpXS5wYXVzZSxcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIG5ldyBBY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogdGhpcy5lbmVtaWVzW2ldLm1vdmUsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICd1cCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgbmV3IEFjdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiB0aGlzLmVuZW1pZXNbaV0uc2V0U3BlZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDYsXHJcbiAgICAgICAgICAgICAgICAgICAgb25jZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBuZXcgQWN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IHRoaXMuZW5lbWllc1tpXS5tb3ZlLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnZG93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgbmV3IEFjdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiB0aGlzLmVuZW1pZXNbaV0ucGF1c2UsXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgXSk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmVuZW1pZXNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL2NyZWF0ZXMgYSBnYW1lIG9iamVjdFxyXG4gICAgY3JlYXRlT2JqZWN0KENsYXNzLCBwcm9wcykge1xyXG4gICAgICAgIGxldCBvYmogPSBuZXcgQ2xhc3MocHJvcHMpO1xyXG4gICAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG9iaik7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuXHJcbiAgICAvL3NldHMgYSByZW5kZXIgbGF5ZXJcclxuICAgIHB1c2hUb0xheWVyKG9iaiwgbGF5ZXIpIHtcclxuICAgICAgICB0aGlzLmxheWVyc1tsYXllcl0ucHVzaChvYmopO1xyXG4gICAgICAgIHRoaXMuZ2V0TGF5ZXJzQXJyYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL3RyYW5zZm9ybXMgbGF5ZXJzIG9iamVjdCBpbnRvIHNpbXBsZSBhcnJheSB0aSBzaW1wbGlmeSByZW5kZXJpbmdcclxuICAgIGdldExheWVyc0FycmF5KCkge1xyXG4gICAgICAgIHRoaXMubGF5ZXJzQXJyYXkgPSBbXTtcclxuICAgICAgICBjb25zdCBsYXllcnNWYWx1ZXMgPSBPYmplY3QudmFsdWVzKHRoaXMubGF5ZXJzKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gbGF5ZXJzVmFsdWVzLmxlbmd0aCAtIDE7IGkgPj0wOyBpLS0pIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgb2JqIG9mIGxheWVyc1ZhbHVlc1tpXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXllcnNBcnJheS5wdXNoKG9iaik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9zdGFydCBzY2VuZVxyXG4gICAgYXN5bmMgc3RhcnQoKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0dhbWUgc3RhcnRlZC4nKVxyXG5cclxuICAgICAgICAvLyBnYW1lIHN0YXJ0IHRpbWVcclxuICAgICAgICB0aGlzLnN0YXJ0U2NlbmVMb29wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRTY2VuZUxvb3AoKSB7XHJcbiAgICAgICAgLy8gZ2FtZSBzdGFydCB0aW1lXHJcbiAgICAgICAgdGhpcy5sYXN0ID0gdGhpcy5sYXN0VGlsZVRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICB0aGlzLnJlcXVlc3RJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmZyYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0xPR0lDIDw9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmtleUhhbmRsZXIoKTtcclxuICAgICAgICB0aGlzLnBsYXllci5jaGVja0JvcmRlcnModGhpcy5nYW1lV2luZG93KTtcclxuICAgICAgICBmb3IgKGxldCBlbmVteSBvZiB0aGlzLmVuZW1pZXMpIHtcclxuICAgICAgICAgICAgZW5lbXkuZG9DdXJyZW50QWN0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL0FOSU1BVElPTiA8PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBmcmFtZSgpIHtcclxuICAgICAgICBsZXQgZHQgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMubGFzdFRpbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGR0IDwgdGhpcy5mcmFtZURlbGF5KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZnJhbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaFRpbGVzKHRoaXMub2JqZWN0cyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmZyYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaFRpbGVzKG9iamVjdHMpIHtcclxuICAgICAgICBsZXQgZHQgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMubGFzdFRpbGVUaW1lO1xyXG4gICAgICAgIGlmIChkdCA+IHRoaXMudGlsZURlbGF5KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG9iaiBvZiBvYmplY3RzKSB7XHJcbiAgICAgICAgICAgICAgICBvYmoubmV4dFRpbGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxhc3RUaWxlVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL1JFTkRFUiA8PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5maWxsRmllbGQoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgb2JqIG9mIHRoaXMubGF5ZXJzQXJyYXkpIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3T2JqZWN0KG9iaik7XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuXHJcbiAgICAvL2RyYXdzIGEgc2luZ2xlIG9iamVjdFxyXG4gICAgZHJhd09iamVjdChvYmosIHNjYWxlKSB7XHJcbiAgICAgICAgaWYgKHNjYWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVdpbmRvdy5jdHguZHJhd0ltYWdlKG9iai5pbWFnZSwgb2JqLmN1cnJlbnRUaWxlICogb2JqLnRpbGVTaXplLCAwLCBvYmoudGlsZVNpemUsIG9iai50aWxlU2l6ZSwgb2JqLnBvc2l0aW9uWCwgb2JqLnBvc2l0aW9uWSwgb2JqLnRpbGVTaXplICogc2NhbGUsIG9iai50aWxlU2l6ZSAqIHNjYWxlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVXaW5kb3cuY3R4LnNhdmUoKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5nYW1lV2luZG93LmN0eC50cmFuc2xhdGUodGhpcy5nYW1lV2luZG93LndpZHRoIC8gMiArIG9iai50aWxlU2l6ZSAvIDIsIHRoaXMuZ2FtZVdpbmRvdy5oZWlnaHQgLyAyICsgb2JqLnRpbGVTaXplIC8gMik7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuZ2FtZVdpbmRvdy5jdHgucm90YXRlKG9iai5yYWRBbmdsZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVdpbmRvdy5jdHguZHJhd0ltYWdlKG9iai5pbWFnZSwgb2JqLmN1cnJlbnRUaWxlICogb2JqLnRpbGVTaXplLCAwLCBvYmoudGlsZVNpemUsIG9iai50aWxlU2l6ZSwgb2JqLnBvc2l0aW9uWCwgb2JqLnBvc2l0aW9uWSwgb2JqLnRpbGVTaXplLCBvYmoudGlsZVNpemUpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmdhbWVXaW5kb3cuY3R4LmRyYXdJbWFnZShvYmouaW1hZ2UsIG9iai5wb3NpdGlvblgsIG9iai5wb3NpdGlvblkpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVXaW5kb3cuY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmlsbEZpZWxkKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVdpbmRvdy5jdHguZmlsbFN0eWxlID0gdGhpcy5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgdGhpcy5nYW1lV2luZG93LmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmdhbWVXaW5kb3cud2lkdGgsIHRoaXMuZ2FtZVdpbmRvdy5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGtleUhhbmRsZXIoKSB7XHJcbiAgICAgICAgaWYgKGtleVN0YXRlcy51cCkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlRm9yd2FyZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa2V5U3RhdGVzLmRvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZUJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleVN0YXRlcy5sZWZ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnR1cm4oJ2xlZnQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleVN0YXRlcy5yaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci50dXJuKCdyaWdodCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgKGtleVN0YXRlcy51cCkge1xyXG4gICAgICAgIC8vICAgICBpZiAoa2V5U3RhdGVzLnJpZ2h0KSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnBsYXllci5tb3ZlKCd1cC1yaWdodCcpO1xyXG4gICAgICAgIC8vICAgICB9IGVsc2UgaWYgKGtleVN0YXRlcy5sZWZ0KXtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMucGxheWVyLm1vdmUoJ3VwLWxlZnQnKTtcclxuICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMucGxheWVyLm1vdmUoJ3VwJyk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9IGVsc2UgaWYgKGtleVN0YXRlcy5kb3duKSB7XHJcbiAgICAgICAgLy8gICAgIGlmIChrZXlTdGF0ZXMucmlnaHQpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMucGxheWVyLm1vdmUoJ2Rvd24tcmlnaHQnKTtcclxuICAgICAgICAvLyAgICAgfSBlbHNlIGlmIChrZXlTdGF0ZXMubGVmdCl7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnBsYXllci5tb3ZlKCdkb3duLWxlZnQnKTtcclxuICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMucGxheWVyLm1vdmUoJ2Rvd24nKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0gZWxzZSBpZiAoa2V5U3RhdGVzLmxlZnQpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5wbGF5ZXIubW92ZSgnbGVmdCcpO1xyXG4gICAgICAgIC8vIH0gZWxzZSBpZiAoa2V5U3RhdGVzLnJpZ2h0KXtcclxuICAgICAgICAvLyAgICAgdGhpcy5wbGF5ZXIubW92ZSgncmlnaHQnKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lV2luZG93IHtcclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5jYW52YXMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy50b3AgPSAwO1xyXG4gICAgICAgIHRoaXMucmlnaHQgPSB0aGlzLmNhbnZhcy53aWR0aDtcclxuICAgICAgICB0aGlzLmJvdHRvbSA9IHRoaXMuY2FudmFzLmhlaWdodDtcclxuICAgICAgICB0aGlzLmxlZnQgPSAwO1xyXG4gICAgfVxyXG59IiwiLyphIGNsYXNzIG9mIHBsYXllciBjaGFyYWN0ZXIuIGEgcGxheWVyIGlzIGEgU0hJUCwgc28gaXQgZXh0ZW5kcyBhcHByb3ByaWF0ZSBjbGFzc1xyXG50byBjcmVhdGUgYSBwbGF5ZXIsIHlvdSBuZWVkIHRpIHBhc3MgUFJPUFMgdmFyaWFibGVcclxuZXhhbXBsZVxyXG57XHJcbiAgICBocDogMTAwLFxyXG4gICAgc3BlZWQ6IDEwLFxyXG4gICAgcG9zaXRpb25YOiAxMDAsXHJcbiAgICBwb3NpdGlvbnk6IDIwMCxcclxuICAgIGltYWdlOiBpbWcsXHJcbiAgICB0aWxlc0Ftb3VudDogMixcclxuICAgIHRpbGVIZWlnaHRMIDY0XHJcbiAgICBjdXJyZW50VGlsZTogMDsgXHJcbn1cclxuKi9cclxuaW1wb3J0IFNoaXAgZnJvbSAnLi9TaGlwJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIFNoaXAge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZShkaXJlY3Rpb24pIHtcclxuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlICd1cCc6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25ZIC09IHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdkb3duJzoge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvblkgKz0gdGhpcy5zcGVlZDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0Jzoge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvblggKz0gdGhpcy5zcGVlZDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uWCAtPSB0aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAndXAtcmlnaHQnOiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0ID0gTWF0aC5yb3VuZCh0aGlzLnNwZWVkICogTWF0aC5zcXJ0KDIpIC8gMik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uWSAtPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uWCArPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICd1cC1sZWZ0Jzoge1xyXG4gICAgICAgICAgICAgICAgbGV0IG9mZnNldCA9IE1hdGgucm91bmQodGhpcy5zcGVlZCAqIE1hdGguc3FydCgyKSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvblkgLT0gb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvblggLT0gb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAnZG93bi1yaWdodCc6IHtcclxuICAgICAgICAgICAgICAgIGxldCBvZmZzZXQgPSBNYXRoLnJvdW5kKHRoaXMuc3BlZWQgKiBNYXRoLnNxcnQoMikgLyAyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25ZICs9IG9mZnNldDtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25YICs9IG9mZnNldDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ2Rvd24tbGVmdCc6IHtcclxuICAgICAgICAgICAgICAgIGxldCBvZmZzZXQgPSBNYXRoLnJvdW5kKHRoaXMuc3BlZWQgKiBNYXRoLnNxcnQoMikgLyAyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25ZICs9IG9mZnNldDtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25YIC09IG9mZnNldDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQm9yZGVycyhyZWN0YW5nbGUpIHtcclxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvblkgPCByZWN0YW5nbGUudG9wKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25ZID0gcmVjdGFuZ2xlLnRvcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb25ZID4gcmVjdGFuZ2xlLmJvdHRvbSAtIHRoaXMudGlsZVNpemUpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvblkgPSByZWN0YW5nbGUuYm90dG9tIC0gdGhpcy50aWxlU2l6ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb25YIDwgcmVjdGFuZ2xlLmxlZnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvblggPSByZWN0YW5nbGUubGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb25YID4gcmVjdGFuZ2xlLnJpZ2h0IC0gdGhpcy50aWxlU2l6ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uWCA9IHJlY3RhbmdsZS5yaWdodCAtIHRoaXMudGlsZVNpemU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSAnLi9PYmplY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5ocCA9IHByb3BzLmhwIHx8IDEwMDtcclxuICAgICAgICB0aGlzLnNwZWVkID0gcHJvcHMuc3BlZWQgfHwgMTA7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IHByb3BzLmltYWdlIHx8IG51bGw7XHJcbiAgICAgICAgdGhpcy50aWxlc0Ftb3VudCA9IHByb3BzLnRpbGVzQW1vdW50IHx8IDA7XHJcbiAgICAgICAgdGhpcy50aWxlU2l6ZSAgPSBwcm9wcy50aWxlU2l6ZSB8fCAwO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbGUgPSBwcm9wcy5jdXJyZW50VGlsZSB8fCAwO1xyXG4gICAgICAgIHRoaXMuYW5nbGUgPSBwcm9wcy5hbmdsZSB8fCA5MDtcclxuICAgICAgICB0aGlzLnJhZEFuZ2xlID0gdGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODA7XHJcbiAgICAgICAgdGhpcy50dXJuU3BlZWQgPSBwcm9wcy50dXJuU3BlZWQgfHwgNTtcclxuXHJcbiAgICAgICAgLy9tZXRob2RzXHJcbiAgICAgICAgdGhpcy5tb3ZlID0gdGhpcy5tb3ZlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zZXRTcGVlZCA9IHRoaXMuc2V0U3BlZWQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlKGRpcmVjdGlvbikge1xyXG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3VwJzoge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvblkgLT0gdGhpcy5zcGVlZDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ2Rvd24nOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uWSArPSB0aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAncmlnaHQnOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uWCArPSB0aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAnbGVmdCc6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25YIC09IHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICd1cC1yaWdodCc6IHtcclxuICAgICAgICAgICAgICAgIGxldCBvZmZzZXQgPSBNYXRoLnJvdW5kKHRoaXMuc3BlZWQgKiBNYXRoLnNxcnQoMikgLyAyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25ZIC09IG9mZnNldDtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25YICs9IG9mZnNldDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ3VwLWxlZnQnOiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0ID0gTWF0aC5yb3VuZCh0aGlzLnNwZWVkICogTWF0aC5zcXJ0KDIpIC8gMik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uWSAtPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uWCAtPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdkb3duLXJpZ2h0Jzoge1xyXG4gICAgICAgICAgICAgICAgbGV0IG9mZnNldCA9IE1hdGgucm91bmQodGhpcy5zcGVlZCAqIE1hdGguc3FydCgyKSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvblkgKz0gb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvblggKz0gb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAnZG93bi1sZWZ0Jzoge1xyXG4gICAgICAgICAgICAgICAgbGV0IG9mZnNldCA9IE1hdGgucm91bmQodGhpcy5zcGVlZCAqIE1hdGguc3FydCgyKSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvblkgKz0gb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvblggLT0gb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZUZvcndhcmQoKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblggKz0gTWF0aC5jb3ModGhpcy5yYWRBbmdsZSkgKiB0aGlzLnNwZWVkO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25ZIC09IE1hdGguc2luKHRoaXMucmFkQW5nbGUpICogdGhpcy5zcGVlZDtcclxuICAgIH1cclxuICAgIG1vdmVCYWNrKCkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25YIC09IE1hdGguY29zKHRoaXMucmFkQW5nbGUpICogdGhpcy5zcGVlZDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uWSArPSBNYXRoLnNpbih0aGlzLnJhZEFuZ2xlKSAqIHRoaXMuc3BlZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgdHVybihkaXJlY3Rpb24pIHtcclxuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlICdyaWdodCc6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5nbGUgLT0gdGhpcy50dXJuU3BlZWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJhZEFuZ2xlID0gdGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdsZWZ0Jzoge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmdsZSArPSB0aGlzLnR1cm5TcGVlZDtcclxuICAgICAgICAgICAgICAgIHRoaXMucmFkQW5nbGUgPSB0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFNwZWVkKHNwZWVkKSB7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHRUaWxlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaWxlIDwgKHRoaXMudGlsZXNBbW91bnQgLSAxKSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUaWxlKys7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGlsZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEltYWdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlO1xyXG4gICAgfVxyXG59IiwiLy9hIGJhc2ljIGdhbWUgb2JqZWN0IGNsYXNzLiBpbmNsdWRlcyBtZXRob2RzIEVWRVJZIG9iamVjdCBvbiBhIHNjcmVlbiBoYXNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU9iamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25YID0gcHJvcHMucG9zaXRpb25YIHx8IDA7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblkgPSBwcm9wcy5wb3NpdGlvblkgfHwgMDtcclxuICAgIH1cclxufSIsImltcG9ydCBTaGlwIGZyb20gJy4vU2hpcCc7XHJcbmltcG9ydCBCZWhhdmlvciBmcm9tICcuL0JlaGF2aW9yJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtZW55U2hpcCBleHRlbmRzIFNoaXAge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMucGF1c2UgPSB0aGlzLnBhdXNlLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuYmVoYXZpb3IgPSBuZXcgQmVoYXZpb3IoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy9FTkVNWSBTSElQIExJR0lDIEFORCBBQ1RJT05TXHJcbiAgICBwYXVzZSgpIHt9XHJcbiBcclxuICAgIC8vU0VUIEJFSEFWSU9SXHJcbiAgICBzZXRCZWhhdmlvcihhY3Rpb25zKSB7XHJcbiAgICAgICAgdGhpcy5iZWhhdmlvci5zZXRBY3Rpb25zKGFjdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvQ3VycmVudEFjdGlvbigpIHtcclxuICAgICAgICB0aGlzLmJlaGF2aW9yLmRvQ3VycmVudEFjdGlvbigpO1xyXG4gICAgfVxyXG59IiwiLy9CRUhBVklPVVIgQ0xBU1MuIEhBTkRMRVMgQUNUSU9OJ1MgRVhFQ1VUSU9OXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJlaGF2aW9yIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgLy90aGlzIGlzIGFuIGFycmF5IG9mIGVuZW15IGFjdGlvbnMgbGlrZSBtb3ZlLCB0dXJuLCBzdG9wIGV0Yy4gXHJcbiAgICAgICAgLy8gcHJvcHMuYWN0aW9ucyA/IHRoaXMuYWN0aW9ucyA9IHByb3BzLmFjdGlvbnMuc2xpY2UoKSA6IFtdO1xyXG4gICAgICAgIGlmIChwcm9wcyAmJiBwcm9wcy5hY3Rpb25zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aW9ucyA9IHByb3BzLmFjdGlvbnM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hY3Rpb25zID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRBY3Rpb24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uU3RhcnRUaW1lID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5hY3Rpb25TdGFydFZhbHVlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvL1NFVFRJTkcgQUNUSU9OU1xyXG4gICAgc2V0QWN0aW9ucyhhY3Rpb25zKSB7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25zID0gYWN0aW9ucy5zbGljZSgpO1xyXG4gICAgICAgIHRoaXMubmV4dEFjdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEFjdGlvbihhY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmFjdGlvbnMucHVzaChhY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vTkVYVCBBQ1RJT05TXHJcbiAgICBuZXh0QWN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEFjdGlvbiA9IHRoaXMuYWN0aW9ucy5zaGlmdCgpO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uU3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9DdXJyZW50QWN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRBY3Rpb24uZHVyYXRpb24pIHtcclxuICAgICAgICAgICAgbGV0IGR0ID0gcGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLmFjdGlvblN0YXJ0VGltZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkdCA+PSB0aGlzLmN1cnJlbnRBY3Rpb24uZHVyYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dEFjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25TdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QWN0aW9uLm1ldGhvZCh0aGlzLmN1cnJlbnRBY3Rpb24udmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50QWN0aW9uLm9uY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QWN0aW9uLm1ldGhvZCh0aGlzLmN1cnJlbnRBY3Rpb24udmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLm5leHRBY3Rpb24oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBY3Rpb24ubWV0aG9kKHRoaXMuY3VycmVudEFjdGlvbi52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59ICIsIi8vQU4gQUNUSU9OIENMQVNTLiBJUyBORUVERUQgVE8gQ09OU1RSVUNUIEJFSEFWSU9SIEFSUkFZUyBGT1IgQVVUT01BVElDIEVOVElUSUVTXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHRoaXMubWV0aG9kID0gcHJvcHMubWV0aG9kO1xyXG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBwcm9wcy5kdXJhdGlvbjtcclxuICAgICAgICB0aGlzLm9uY2UgPSBwcm9wcy5vbmNlO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBwcm9wcy52YWx1ZTtcclxuICAgICAgICB0aGlzLmFjdGlvblN0YXJ0VGltZSA9IG51bGw7XHJcbiAgICB9XHJcbn0gIiwibGV0IGdhbWVNZWRpYSA9IFtdO1xyXG5leHBvcnQgZGVmYXVsdCBnYW1lTWVkaWE7Il0sInNvdXJjZVJvb3QiOiIifQ==