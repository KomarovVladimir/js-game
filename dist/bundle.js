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
        this.gameWindow.ctx.save();
        // this.gameWindow.ctx.translate(this.gameWindow.width / 2, this.gameWindow.height / 2);
        this.gameWindow.ctx.translate(obj.positionX + 192 / 2, obj.positionY + 64 / 2);
        this.gameWindow.ctx.rotate(-obj.radAngle);
        // this.gameWindow.ctx.drawImage(obj.image, -192 / 2, -64 / 2);
        // if (scale) {
            // this.gameWindow.ctx.drawImage(obj.image, obj.currentTile * obj.tileSize, 0, obj.tileSize, obj.tileSize, obj.positionX, obj.positionY, obj.tileSize * scale, obj.tileSize * scale);
        // } else {
            this.gameWindow.ctx.drawImage(obj.image, obj.currentTile * obj.tileSize, 0, obj.tileSize, obj.tileSize, -obj.tileSize / 2, -obj.tileSize / 2, obj.tileSize, obj.tileSize);
        // }
        this.gameWindow.ctx.restore();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvTWVkaWFIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TY2VuZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvR2FtZVdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvUGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TaGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0VtZW55U2hpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZ2FtZU1lZGlhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFD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Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUN2QkE7QUFBQTtBQUFBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ2xEQTtBQUFBO0FBQUE7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ1RBO0FBQUE7QUFDZSx3RUFBUyxFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBHYW1lIGZyb20gJy4vR2FtZSc7XHJcblxyXG4vL0dBTUUgSU5JVCA8PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcclxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKTtcclxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcyk7XHJcbmdhbWUuc3RhcnQoKTsgICAgIiwiaW1wb3J0IE1lZGlhSGFuZGxlciBmcm9tICcuL01lZGlhSGFuZGxlcic7XHJcbmltcG9ydCBHYW1lU2NlbmUgZnJvbSAnLi9TY2VuZSc7XHJcblxyXG5jb25zdCBtZWRpYUhhbmRsZXIgPSBuZXcgTWVkaWFIYW5kbGVyKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG5cclxuICAgICAgICAvL2dhbWUgc3RhdGUgKG9mZiA9IDAsIG9uID0gMSwgcGF1c2UgPSAyKVxyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gMDtcclxuXHJcbiAgICAgICAgLy9zYW1wbGUgb2YgYSBzdGFnZSBjbGFzc1xyXG4gICAgICAgIHRoaXMuc3RhZ2UgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vZ2FtZSBpbml0aWFsaXphdGlvbiBwcm9jZXNzXHJcbiAgICBhc3luYyBpbml0KCkge1xyXG4gICAgICAgIG1lZGlhSGFuZGxlci5zZXRJbWFnZVNvdXJjZXMoW1xyXG4gICAgICAgICAgICAnLi4vLi4vZGlzdC9pbWFnZXMvc2hpcC5wbmcnLFxyXG4gICAgICAgICAgICAnLi4vLi4vZGlzdC9pbWFnZXMvZW5lbXkucG5nJ1xyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICAvL3ByZWxvYWQgaW1hZ2VzXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0ltYWdlIHByZWxvYWRpbmcuJyk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5wcmVsb2FkQWxsSW1hZ2VzKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0ltYWdlcyBwcmVsb2FkaW5nIGRvbmUuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy90aGlzIG1ldGhvZCB0YWtlcyBhbGwgb2YgdGhlIHNvdXJjZXMgZnJvbSB0aGlzLmltYWdlU291cmNlcyBhbmQgcHJlbG9hZHMgdGhlbVxyXG4gICAgYXN5bmMgcHJlbG9hZEFsbEltYWdlcygpIHtcclxuICAgICAgICBjb25zdCBpbWFnZVNvdXJjZXMgPSBtZWRpYUhhbmRsZXIuZ2V0SW1hZ2VTb3VyY2VzKCk7XHJcblxyXG4gICAgICAgIGZvcihsZXQgc3JjIG9mIGltYWdlU291cmNlcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgTG9hZGluZyAke3NyY30uYCk7XHJcbiAgICAgICAgICAgIG1lZGlhSGFuZGxlci5hZGRJbWFnZShhd2FpdCB0aGlzLnByZWxvYWRJbWFnZShzcmMpKTtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuICAgIC8vcHJlbG9hZHMgYSBzaW5nbGUgaW1hZ2UgZnJvbSBzcmNcclxuICAgIHByZWxvYWRJbWFnZShzcmMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgSW1hZ2UgJHtpbWcuc3JjfSBsb2FkZWQuYClcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoaW1nKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaW1nLm9uZXJyb3IgPSAoKSA9PiByZWplY3QoKTtcclxuICAgICAgICAgICAgaW1nLnNyYyA9IHNyYztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL2dhbWUgc3RhcnRcclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT13aXA9PT09PT09PT09PT09PT09PVxyXG4gICAgYXN5bmMgc3RhcnQoKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5pbml0KCk7XHJcblxyXG4gICAgICAgIC8vZ2FtZSBvbiBzdGF0ZVxyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gMTtcclxuXHJcbiAgICAgICAgLy9jcmVhdGlvbiBvZiBzdGFnZSAxIDw9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gV2lQIVxyXG4gICAgICAgIHRoaXMuc3RhZ2UgPSBuZXcgR2FtZVNjZW5lKHtcclxuICAgICAgICAgICAgbmFtZTogJ0EgVGVzdCBHYW1lIFN0YWdlJyxcclxuICAgICAgICAgICAgY2FudmFzOiB0aGlzLmNhbnZhcyxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnN0YWdlLnN0YXJ0KCk7XHJcbiAgICB9ICBcclxufSIsImltcG9ydCBnYW1lTWVkaWEgZnJvbSAnLi9nYW1lTWVkaWEnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVkaWFIYW5kbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZVNvdXJjZXMgPSAocHJvcHMgJiYgcHJvcHMuaW1hZ2VTb3VyY2VzLnNsaWNlKCkpIHx8IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEltYWdlU291cmNlcyhzb3VyY2VzQXJyYXkpIHtcclxuICAgICAgICB0aGlzLmltYWdlU291cmNlcyA9IHNvdXJjZXNBcnJheS5zbGljZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEltYWdlU291cmNlcygpIHtcclxuICAgICAgICByZXR1cm4gIHRoaXMuaW1hZ2VTb3VyY2VzO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEltYWdlKGltYWdlKSB7XHJcbiAgICAgICAgZ2FtZU1lZGlhLnB1c2goaW1hZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEltYWdlKG4pIHtcclxuICAgICAgICByZXR1cm4gZ2FtZU1lZGlhW25dO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEltYWdlcygpIHtcclxuICAgICAgICByZXR1cm4gZ2FtZU1lZGlhO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEdhbWVXaW5kb3cgZnJvbSAnLi9HYW1lV2luZG93JztcclxuaW1wb3J0IE1lZGlhSGFuZGxlciBmcm9tICcuL01lZGlhSGFuZGxlcic7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInO1xyXG5pbXBvcnQgRW1lbnlTaGlwIGZyb20gJy4vRW1lbnlTaGlwJztcclxuaW1wb3J0IEFjdGlvbiBmcm9tICcuL0FjdGlvbic7XHJcbmNvbnN0IG1lZGlhSGFuZGxlciA9IG5ldyBNZWRpYUhhbmRsZXIoKTtcclxuXHJcbmxldCBrZXlTdGF0ZXMgPSB7IFxyXG4gICAgdXA6IGZhbHNlLFxyXG4gICAgcmlnaHQ6IGZhbHNlLFxyXG4gICAgZG93bjogZmFsc2UsXHJcbiAgICBsZWZ0OiBmYWxzZVxyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSA4NyB8fCBlLmtleUNvZGUgPT09IDM4KSB7XHJcbiAgICAgICAga2V5U3RhdGVzLnVwID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChlLmtleUNvZGUgPT09IDY1IHx8IGUua2V5Q29kZSA9PT0gMzcpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnQSBpcyBwcmVzc2VkIScpO1xyXG4gICAgICAgIGtleVN0YXRlcy5sZWZ0ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChlLmtleUNvZGUgPT09IDgzIHx8IGUua2V5Q29kZSA9PT0gNDApIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnUyBpcyBwcmVzc2VkIScpO1xyXG4gICAgICAgIGtleVN0YXRlcy5kb3duID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChlLmtleUNvZGUgPT09IDY4IHx8IGUua2V5Q29kZSA9PT0gMzkpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnRCBpcyBwcmVzc2VkIScpO1xyXG4gICAgICAgIGtleVN0YXRlcy5yaWdodCA9IHRydWU7XHJcbiAgICB9XHJcbn0sIHRydWUpO1xyXG4gICAgXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSA4NyB8fCBlLmtleUNvZGUgPT09IDM4KSB7XHJcbiAgICAgICAga2V5U3RhdGVzLnVwID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSA2NSB8fCBlLmtleUNvZGUgPT09IDM3KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0EgaXMgcHJlc3NlZCEnKTtcclxuICAgICAgICBrZXlTdGF0ZXMubGVmdCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gODMgfHwgZS5rZXlDb2RlID09PSA0MCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdTIGlzIHByZXNzZWQhJyk7XHJcbiAgICAgICAga2V5U3RhdGVzLmRvd24gPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChlLmtleUNvZGUgPT09IDY4IHx8IGUua2V5Q29kZSA9PT0gMzkpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnRCBpcyBwcmVzc2VkIScpO1xyXG4gICAgICAgIGtleVN0YXRlcy5yaWdodCA9IGZhbHNlO1xyXG4gICAgfVxyXG59LCB0cnVlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHByb3BzLm5hbWU7XHJcbiAgICAgICAgdGhpcy5nYW1lV2luZG93ID0gbmV3IEdhbWVXaW5kb3cocHJvcHMuY2FudmFzKTtcclxuICAgICAgICB0aGlzLm9iamVjdHMgPSBbXTtcclxuICAgICAgICB0aGlzLmVuZW1pZXMgPSBbXTtcclxuICAgICAgICB0aGlzLnJlcXVlc3RJZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5mcHMgPSA2MDtcclxuICAgICAgICB0aGlzLnRwcyA9IDEyO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbGVUaW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZyYW1lRGVsYXkgPSAxMDAwIC8gdGhpcy5mcHM7XHJcbiAgICAgICAgdGhpcy50aWxlRGVsYXkgPSAxMDAwIC8gdGhpcy50cHM7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0U2NhbGUgPSAxO1xyXG4gICAgICAgIHRoaXMubGF5ZXJzID0ge1xyXG4gICAgICAgICAgICBvdmVybGF5OiBbXSxcclxuICAgICAgICAgICAgZnJvbnQ6IFtdLFxyXG4gICAgICAgICAgICBtYWluOiBbXSxcclxuICAgICAgICAgICAgYmFjazogW10sXHJcbiAgICAgICAgICAgIGJhY2ticm91bmQ6IFtdXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmxheWVyc0FycmF5ID0gW107XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSAnIzExMTExMSc7XHJcblxyXG4gICAgICAgIHRoaXMuZnJhbWUgPSB0aGlzLmZyYW1lLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9JTklUSUFMSVpBVElPTiA8PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBhc3luYyBpbml0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBTY2VuZSBcIiR7IHRoaXMubmFtZSB9XCIgbG9hZGluZy5gKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgb2JqZWN0cy4nKTtcclxuICAgICAgICBhd2FpdCB0aGlzLmNyZWF0ZVNjZW5lT2JqZWN0cygpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyBvYmplY3RzIGRvbmUuJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFNjZW5lIFwiJHsgdGhpcy5uYW1lIH1cIiBsb2FkZWQuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9PQkpFQ1QgQ1JFQVRJT04gPD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY3JlYXRlU2NlbmVPYmplY3RzKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gdGhpcy5jcmVhdGVPYmplY3QoUGxheWVyLCB7XHJcbiAgICAgICAgICAgIGhwOiAxMDAsXHJcbiAgICAgICAgICAgIHNwZWVkOiAxMCxcclxuICAgICAgICAgICAgaW1hZ2U6IG1lZGlhSGFuZGxlci5nZXRJbWFnZSgwKSxcclxuICAgICAgICAgICAgdGlsZXNBbW91bnQ6IDMsXHJcbiAgICAgICAgICAgIHRpbGVTaXplOiA2NCxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBsYXllci5wb3NpdGlvblggPSB0aGlzLmdhbWVXaW5kb3cud2lkdGggLyAyIC0gdGhpcy5wbGF5ZXIudGlsZVNpemUgLyAyO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnBvc2l0aW9uWSA9IHRoaXMuZ2FtZVdpbmRvdy5oZWlnaHQgLyAyIC0gdGhpcy5wbGF5ZXIudGlsZVNpemUgLyAyO1xyXG4gICAgICAgIHRoaXMucHVzaFRvTGF5ZXIodGhpcy5wbGF5ZXIsICdtYWluJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wbGF5ZXIpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmVuZW1pZXMucHVzaCh0aGlzLmNyZWF0ZU9iamVjdChFbWVueVNoaXAsIHtcclxuICAgICAgICAgICAgICAgIGhwOiAxMDAsXHJcbiAgICAgICAgICAgICAgICBzcGVlZDoyLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25YOiBpICogNjQsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvblk6IDAsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogbWVkaWFIYW5kbGVyLmdldEltYWdlKDEpLFxyXG4gICAgICAgICAgICAgICAgdGlsZXNBbW91bnQ6IDMsXHJcbiAgICAgICAgICAgICAgICB0aWxlU2l6ZTogNjQsXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgdGhpcy5wdXNoVG9MYXllcih0aGlzLmVuZW1pZXNbaV0sICdiYWNrJyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVuZW1pZXNbaV0uc2V0QmVoYXZpb3IoW1xyXG4gICAgICAgICAgICAgICAgbmV3IEFjdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiB0aGlzLmVuZW1pZXNbaV0ubW92ZSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2Rvd24nLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIG5ldyBBY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogdGhpcy5lbmVtaWVzW2ldLnBhdXNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDBcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgbmV3IEFjdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiB0aGlzLmVuZW1pZXNbaV0ubW92ZSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ3VwJyxcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMFxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBuZXcgQWN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IHRoaXMuZW5lbWllc1tpXS5zZXRTcGVlZCxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogNixcclxuICAgICAgICAgICAgICAgICAgICBvbmNlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIG5ldyBBY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogdGhpcy5lbmVtaWVzW2ldLm1vdmUsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdkb3duJyxcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBuZXcgQWN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IHRoaXMuZW5lbWllc1tpXS5wYXVzZSxcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZW5lbWllc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vY3JlYXRlcyBhIGdhbWUgb2JqZWN0XHJcbiAgICBjcmVhdGVPYmplY3QoQ2xhc3MsIHByb3BzKSB7XHJcbiAgICAgICAgbGV0IG9iaiA9IG5ldyBDbGFzcyhwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5vYmplY3RzLnB1c2gob2JqKTtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG5cclxuICAgIC8vc2V0cyBhIHJlbmRlciBsYXllclxyXG4gICAgcHVzaFRvTGF5ZXIob2JqLCBsYXllcikge1xyXG4gICAgICAgIHRoaXMubGF5ZXJzW2xheWVyXS5wdXNoKG9iaik7XHJcbiAgICAgICAgdGhpcy5nZXRMYXllcnNBcnJheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdHJhbnNmb3JtcyBsYXllcnMgb2JqZWN0IGludG8gc2ltcGxlIGFycmF5IHRpIHNpbXBsaWZ5IHJlbmRlcmluZ1xyXG4gICAgZ2V0TGF5ZXJzQXJyYXkoKSB7XHJcbiAgICAgICAgdGhpcy5sYXllcnNBcnJheSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGxheWVyc1ZhbHVlcyA9IE9iamVjdC52YWx1ZXModGhpcy5sYXllcnMpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBsYXllcnNWYWx1ZXMubGVuZ3RoIC0gMTsgaSA+PTA7IGktLSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBvYmogb2YgbGF5ZXJzVmFsdWVzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxheWVyc0FycmF5LnB1c2gob2JqKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL3N0YXJ0IHNjZW5lXHJcbiAgICBhc3luYyBzdGFydCgpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLmluaXQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnR2FtZSBzdGFydGVkLicpXHJcblxyXG4gICAgICAgIC8vIGdhbWUgc3RhcnQgdGltZVxyXG4gICAgICAgIHRoaXMuc3RhcnRTY2VuZUxvb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydFNjZW5lTG9vcCgpIHtcclxuICAgICAgICAvLyBnYW1lIHN0YXJ0IHRpbWVcclxuICAgICAgICB0aGlzLmxhc3QgPSB0aGlzLmxhc3RUaWxlVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHRoaXMucmVxdWVzdElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZnJhbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vTE9HSUMgPD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMua2V5SGFuZGxlcigpO1xyXG4gICAgICAgIHRoaXMucGxheWVyLmNoZWNrQm9yZGVycyh0aGlzLmdhbWVXaW5kb3cpO1xyXG4gICAgICAgIGZvciAobGV0IGVuZW15IG9mIHRoaXMuZW5lbWllcykge1xyXG4gICAgICAgICAgICBlbmVteS5kb0N1cnJlbnRBY3Rpb24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vQU5JTUFUSU9OIDw9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGZyYW1lKCkge1xyXG4gICAgICAgIGxldCBkdCA9IHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5sYXN0VGltZTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoZHQgPCB0aGlzLmZyYW1lRGVsYXkpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0SWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5mcmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVGlsZXModGhpcy5vYmplY3RzKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmxhc3RUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZnJhbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoVGlsZXMob2JqZWN0cykge1xyXG4gICAgICAgIGxldCBkdCA9IHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5sYXN0VGlsZVRpbWU7XHJcbiAgICAgICAgaWYgKGR0ID4gdGhpcy50aWxlRGVsYXkpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgb2JqIG9mIG9iamVjdHMpIHtcclxuICAgICAgICAgICAgICAgIG9iai5uZXh0VGlsZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbGVUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vUkVOREVSIDw9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmZpbGxGaWVsZCgpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBvYmogb2YgdGhpcy5sYXllcnNBcnJheSkge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdPYmplY3Qob2JqKTtcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG5cclxuICAgIC8vZHJhd3MgYSBzaW5nbGUgb2JqZWN0XHJcbiAgICBkcmF3T2JqZWN0KG9iaiwgc2NhbGUpIHtcclxuICAgICAgICB0aGlzLmdhbWVXaW5kb3cuY3R4LnNhdmUoKTtcclxuICAgICAgICAvLyB0aGlzLmdhbWVXaW5kb3cuY3R4LnRyYW5zbGF0ZSh0aGlzLmdhbWVXaW5kb3cud2lkdGggLyAyLCB0aGlzLmdhbWVXaW5kb3cuaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgdGhpcy5nYW1lV2luZG93LmN0eC50cmFuc2xhdGUob2JqLnBvc2l0aW9uWCArIDE5MiAvIDIsIG9iai5wb3NpdGlvblkgKyA2NCAvIDIpO1xyXG4gICAgICAgIHRoaXMuZ2FtZVdpbmRvdy5jdHgucm90YXRlKC1vYmoucmFkQW5nbGUpO1xyXG4gICAgICAgIC8vIHRoaXMuZ2FtZVdpbmRvdy5jdHguZHJhd0ltYWdlKG9iai5pbWFnZSwgLTE5MiAvIDIsIC02NCAvIDIpO1xyXG4gICAgICAgIC8vIGlmIChzY2FsZSkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmdhbWVXaW5kb3cuY3R4LmRyYXdJbWFnZShvYmouaW1hZ2UsIG9iai5jdXJyZW50VGlsZSAqIG9iai50aWxlU2l6ZSwgMCwgb2JqLnRpbGVTaXplLCBvYmoudGlsZVNpemUsIG9iai5wb3NpdGlvblgsIG9iai5wb3NpdGlvblksIG9iai50aWxlU2l6ZSAqIHNjYWxlLCBvYmoudGlsZVNpemUgKiBzY2FsZSk7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lV2luZG93LmN0eC5kcmF3SW1hZ2Uob2JqLmltYWdlLCBvYmouY3VycmVudFRpbGUgKiBvYmoudGlsZVNpemUsIDAsIG9iai50aWxlU2l6ZSwgb2JqLnRpbGVTaXplLCAtb2JqLnRpbGVTaXplIC8gMiwgLW9iai50aWxlU2l6ZSAvIDIsIG9iai50aWxlU2l6ZSwgb2JqLnRpbGVTaXplKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgdGhpcy5nYW1lV2luZG93LmN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsbEZpZWxkKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVdpbmRvdy5jdHguZmlsbFN0eWxlID0gdGhpcy5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgdGhpcy5nYW1lV2luZG93LmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmdhbWVXaW5kb3cud2lkdGgsIHRoaXMuZ2FtZVdpbmRvdy5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGtleUhhbmRsZXIoKSB7XHJcbiAgICAgICAgaWYgKGtleVN0YXRlcy51cCkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlRm9yd2FyZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa2V5U3RhdGVzLmRvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZUJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleVN0YXRlcy5sZWZ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnR1cm4oJ2xlZnQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleVN0YXRlcy5yaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci50dXJuKCdyaWdodCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgKGtleVN0YXRlcy51cCkge1xyXG4gICAgICAgIC8vICAgICBpZiAoa2V5U3RhdGVzLnJpZ2h0KSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnBsYXllci5tb3ZlKCd1cC1yaWdodCcpO1xyXG4gICAgICAgIC8vICAgICB9IGVsc2UgaWYgKGtleVN0YXRlcy5sZWZ0KXtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMucGxheWVyLm1vdmUoJ3VwLWxlZnQnKTtcclxuICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMucGxheWVyLm1vdmUoJ3VwJyk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9IGVsc2UgaWYgKGtleVN0YXRlcy5kb3duKSB7XHJcbiAgICAgICAgLy8gICAgIGlmIChrZXlTdGF0ZXMucmlnaHQpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMucGxheWVyLm1vdmUoJ2Rvd24tcmlnaHQnKTtcclxuICAgICAgICAvLyAgICAgfSBlbHNlIGlmIChrZXlTdGF0ZXMubGVmdCl7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnBsYXllci5tb3ZlKCdkb3duLWxlZnQnKTtcclxuICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMucGxheWVyLm1vdmUoJ2Rvd24nKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0gZWxzZSBpZiAoa2V5U3RhdGVzLmxlZnQpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5wbGF5ZXIubW92ZSgnbGVmdCcpO1xyXG4gICAgICAgIC8vIH0gZWxzZSBpZiAoa2V5U3RhdGVzLnJpZ2h0KXtcclxuICAgICAgICAvLyAgICAgdGhpcy5wbGF5ZXIubW92ZSgncmlnaHQnKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lV2luZG93IHtcclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5jYW52YXMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy50b3AgPSAwO1xyXG4gICAgICAgIHRoaXMucmlnaHQgPSB0aGlzLmNhbnZhcy53aWR0aDtcclxuICAgICAgICB0aGlzLmJvdHRvbSA9IHRoaXMuY2FudmFzLmhlaWdodDtcclxuICAgICAgICB0aGlzLmxlZnQgPSAwO1xyXG4gICAgfVxyXG59IiwiLyphIGNsYXNzIG9mIHBsYXllciBjaGFyYWN0ZXIuIGEgcGxheWVyIGlzIGEgU0hJUCwgc28gaXQgZXh0ZW5kcyBhcHByb3ByaWF0ZSBjbGFzc1xyXG50byBjcmVhdGUgYSBwbGF5ZXIsIHlvdSBuZWVkIHRpIHBhc3MgUFJPUFMgdmFyaWFibGVcclxuZXhhbXBsZVxyXG57XHJcbiAgICBocDogMTAwLFxyXG4gICAgc3BlZWQ6IDEwLFxyXG4gICAgcG9zaXRpb25YOiAxMDAsXHJcbiAgICBwb3NpdGlvbnk6IDIwMCxcclxuICAgIGltYWdlOiBpbWcsXHJcbiAgICB0aWxlc0Ftb3VudDogMixcclxuICAgIHRpbGVIZWlnaHRMIDY0XHJcbiAgICBjdXJyZW50VGlsZTogMDsgXHJcbn1cclxuKi9cclxuaW1wb3J0IFNoaXAgZnJvbSAnLi9TaGlwJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIFNoaXAge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZShkaXJlY3Rpb24pIHtcclxuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlICd1cCc6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25ZIC09IHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdkb3duJzoge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvblkgKz0gdGhpcy5zcGVlZDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0Jzoge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvblggKz0gdGhpcy5zcGVlZDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uWCAtPSB0aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAndXAtcmlnaHQnOiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0ID0gTWF0aC5yb3VuZCh0aGlzLnNwZWVkICogTWF0aC5zcXJ0KDIpIC8gMik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uWSAtPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uWCArPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICd1cC1sZWZ0Jzoge1xyXG4gICAgICAgICAgICAgICAgbGV0IG9mZnNldCA9IE1hdGgucm91bmQodGhpcy5zcGVlZCAqIE1hdGguc3FydCgyKSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvblkgLT0gb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvblggLT0gb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAnZG93bi1yaWdodCc6IHtcclxuICAgICAgICAgICAgICAgIGxldCBvZmZzZXQgPSBNYXRoLnJvdW5kKHRoaXMuc3BlZWQgKiBNYXRoLnNxcnQoMikgLyAyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25ZICs9IG9mZnNldDtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25YICs9IG9mZnNldDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ2Rvd24tbGVmdCc6IHtcclxuICAgICAgICAgICAgICAgIGxldCBvZmZzZXQgPSBNYXRoLnJvdW5kKHRoaXMuc3BlZWQgKiBNYXRoLnNxcnQoMikgLyAyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25ZICs9IG9mZnNldDtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25YIC09IG9mZnNldDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQm9yZGVycyhyZWN0YW5nbGUpIHtcclxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvblkgPCByZWN0YW5nbGUudG9wKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25ZID0gcmVjdGFuZ2xlLnRvcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb25ZID4gcmVjdGFuZ2xlLmJvdHRvbSAtIHRoaXMudGlsZVNpemUpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvblkgPSByZWN0YW5nbGUuYm90dG9tIC0gdGhpcy50aWxlU2l6ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb25YIDwgcmVjdGFuZ2xlLmxlZnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvblggPSByZWN0YW5nbGUubGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb25YID4gcmVjdGFuZ2xlLnJpZ2h0IC0gdGhpcy50aWxlU2l6ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uWCA9IHJlY3RhbmdsZS5yaWdodCAtIHRoaXMudGlsZVNpemU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSAnLi9PYmplY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5ocCA9IHByb3BzLmhwIHx8IDEwMDtcclxuICAgICAgICB0aGlzLnNwZWVkID0gcHJvcHMuc3BlZWQgfHwgMTA7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IHByb3BzLmltYWdlIHx8IG51bGw7XHJcbiAgICAgICAgdGhpcy50aWxlc0Ftb3VudCA9IHByb3BzLnRpbGVzQW1vdW50IHx8IDA7XHJcbiAgICAgICAgdGhpcy50aWxlU2l6ZSAgPSBwcm9wcy50aWxlU2l6ZSB8fCAwO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbGUgPSBwcm9wcy5jdXJyZW50VGlsZSB8fCAwO1xyXG4gICAgICAgIHRoaXMuYW5nbGUgPSBwcm9wcy5hbmdsZSB8fCA5MDtcclxuICAgICAgICB0aGlzLnJhZEFuZ2xlID0gdGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODA7XHJcbiAgICAgICAgdGhpcy50dXJuU3BlZWQgPSBwcm9wcy50dXJuU3BlZWQgfHwgNTtcclxuXHJcbiAgICAgICAgLy9tZXRob2RzXHJcbiAgICAgICAgdGhpcy5tb3ZlID0gdGhpcy5tb3ZlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zZXRTcGVlZCA9IHRoaXMuc2V0U3BlZWQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlKGRpcmVjdGlvbikge1xyXG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3VwJzoge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvblkgLT0gdGhpcy5zcGVlZDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ2Rvd24nOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uWSArPSB0aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAncmlnaHQnOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uWCArPSB0aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAnbGVmdCc6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25YIC09IHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICd1cC1yaWdodCc6IHtcclxuICAgICAgICAgICAgICAgIGxldCBvZmZzZXQgPSBNYXRoLnJvdW5kKHRoaXMuc3BlZWQgKiBNYXRoLnNxcnQoMikgLyAyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25ZIC09IG9mZnNldDtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25YICs9IG9mZnNldDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ3VwLWxlZnQnOiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0ID0gTWF0aC5yb3VuZCh0aGlzLnNwZWVkICogTWF0aC5zcXJ0KDIpIC8gMik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uWSAtPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uWCAtPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdkb3duLXJpZ2h0Jzoge1xyXG4gICAgICAgICAgICAgICAgbGV0IG9mZnNldCA9IE1hdGgucm91bmQodGhpcy5zcGVlZCAqIE1hdGguc3FydCgyKSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvblkgKz0gb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvblggKz0gb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAnZG93bi1sZWZ0Jzoge1xyXG4gICAgICAgICAgICAgICAgbGV0IG9mZnNldCA9IE1hdGgucm91bmQodGhpcy5zcGVlZCAqIE1hdGguc3FydCgyKSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvblkgKz0gb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvblggLT0gb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZUZvcndhcmQoKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblggKz0gTWF0aC5jb3ModGhpcy5yYWRBbmdsZSkgKiB0aGlzLnNwZWVkO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25ZIC09IE1hdGguc2luKHRoaXMucmFkQW5nbGUpICogdGhpcy5zcGVlZDtcclxuICAgIH1cclxuICAgIG1vdmVCYWNrKCkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25YIC09IE1hdGguY29zKHRoaXMucmFkQW5nbGUpICogdGhpcy5zcGVlZDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uWSArPSBNYXRoLnNpbih0aGlzLnJhZEFuZ2xlKSAqIHRoaXMuc3BlZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgdHVybihkaXJlY3Rpb24pIHtcclxuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlICdyaWdodCc6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5nbGUgLT0gdGhpcy50dXJuU3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuYW5nbGUgPD0gMCApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuZ2xlID0gMzYwIC0gdGhpcy5hbmdsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucmFkQW5nbGUgPSB0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuZ2xlICs9IHRoaXMudHVyblNwZWVkO1xyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLmFuZ2xlID49IDM2MCApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuZ2xlID0gdGhpcy5hbmdsZSAtIDM2MDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucmFkQW5nbGUgPSB0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFNwZWVkKHNwZWVkKSB7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHRUaWxlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaWxlIDwgKHRoaXMudGlsZXNBbW91bnQgLSAxKSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUaWxlKys7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGlsZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEltYWdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlO1xyXG4gICAgfVxyXG59IiwiLy9hIGJhc2ljIGdhbWUgb2JqZWN0IGNsYXNzLiBpbmNsdWRlcyBtZXRob2RzIEVWRVJZIG9iamVjdCBvbiBhIHNjcmVlbiBoYXNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU9iamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25YID0gcHJvcHMucG9zaXRpb25YIHx8IDA7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblkgPSBwcm9wcy5wb3NpdGlvblkgfHwgMDtcclxuICAgIH1cclxufSIsImltcG9ydCBTaGlwIGZyb20gJy4vU2hpcCc7XHJcbmltcG9ydCBCZWhhdmlvciBmcm9tICcuL0JlaGF2aW9yJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtZW55U2hpcCBleHRlbmRzIFNoaXAge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMucGF1c2UgPSB0aGlzLnBhdXNlLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuYmVoYXZpb3IgPSBuZXcgQmVoYXZpb3IoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy9FTkVNWSBTSElQIExJR0lDIEFORCBBQ1RJT05TXHJcbiAgICBwYXVzZSgpIHt9XHJcbiBcclxuICAgIC8vU0VUIEJFSEFWSU9SXHJcbiAgICBzZXRCZWhhdmlvcihhY3Rpb25zKSB7XHJcbiAgICAgICAgdGhpcy5iZWhhdmlvci5zZXRBY3Rpb25zKGFjdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvQ3VycmVudEFjdGlvbigpIHtcclxuICAgICAgICB0aGlzLmJlaGF2aW9yLmRvQ3VycmVudEFjdGlvbigpO1xyXG4gICAgfVxyXG59IiwiLy9CRUhBVklPVVIgQ0xBU1MuIEhBTkRMRVMgQUNUSU9OJ1MgRVhFQ1VUSU9OXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJlaGF2aW9yIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgLy90aGlzIGlzIGFuIGFycmF5IG9mIGVuZW15IGFjdGlvbnMgbGlrZSBtb3ZlLCB0dXJuLCBzdG9wIGV0Yy4gXHJcbiAgICAgICAgLy8gcHJvcHMuYWN0aW9ucyA/IHRoaXMuYWN0aW9ucyA9IHByb3BzLmFjdGlvbnMuc2xpY2UoKSA6IFtdO1xyXG4gICAgICAgIGlmIChwcm9wcyAmJiBwcm9wcy5hY3Rpb25zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aW9ucyA9IHByb3BzLmFjdGlvbnM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hY3Rpb25zID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRBY3Rpb24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uU3RhcnRUaW1lID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5hY3Rpb25TdGFydFZhbHVlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvL1NFVFRJTkcgQUNUSU9OU1xyXG4gICAgc2V0QWN0aW9ucyhhY3Rpb25zKSB7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25zID0gYWN0aW9ucy5zbGljZSgpO1xyXG4gICAgICAgIHRoaXMubmV4dEFjdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEFjdGlvbihhY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmFjdGlvbnMucHVzaChhY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vTkVYVCBBQ1RJT05TXHJcbiAgICBuZXh0QWN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEFjdGlvbiA9IHRoaXMuYWN0aW9ucy5zaGlmdCgpO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uU3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9DdXJyZW50QWN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRBY3Rpb24uZHVyYXRpb24pIHtcclxuICAgICAgICAgICAgbGV0IGR0ID0gcGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLmFjdGlvblN0YXJ0VGltZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkdCA+PSB0aGlzLmN1cnJlbnRBY3Rpb24uZHVyYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dEFjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25TdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QWN0aW9uLm1ldGhvZCh0aGlzLmN1cnJlbnRBY3Rpb24udmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50QWN0aW9uLm9uY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QWN0aW9uLm1ldGhvZCh0aGlzLmN1cnJlbnRBY3Rpb24udmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLm5leHRBY3Rpb24oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBY3Rpb24ubWV0aG9kKHRoaXMuY3VycmVudEFjdGlvbi52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59ICIsIi8vQU4gQUNUSU9OIENMQVNTLiBJUyBORUVERUQgVE8gQ09OU1RSVUNUIEJFSEFWSU9SIEFSUkFZUyBGT1IgQVVUT01BVElDIEVOVElUSUVTXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHRoaXMubWV0aG9kID0gcHJvcHMubWV0aG9kO1xyXG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBwcm9wcy5kdXJhdGlvbjtcclxuICAgICAgICB0aGlzLm9uY2UgPSBwcm9wcy5vbmNlO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBwcm9wcy52YWx1ZTtcclxuICAgICAgICB0aGlzLmFjdGlvblN0YXJ0VGltZSA9IG51bGw7XHJcbiAgICB9XHJcbn0gIiwibGV0IGdhbWVNZWRpYSA9IFtdO1xyXG5leHBvcnQgZGVmYXVsdCBnYW1lTWVkaWE7Il0sInNvdXJjZVJvb3QiOiIifQ==