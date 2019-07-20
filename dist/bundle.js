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
        this.gameWindow.ctx.rotate(-(obj.angle - 90) * Math.PI / 180);
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
        console.log(this.angle);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvTWVkaWFIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TY2VuZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvR2FtZVdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvUGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TaGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0VtZW55U2hpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZ2FtZU1lZGlhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNoRkE7QUFBQTtBQUFBO0FBQWtDOztBQUVuQixtQkFBbUIsK0NBQVU7QUFDNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDaEhBO0FBQUE7QUFBQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDTkE7QUFBQTtBQUFBO0FBQUE7QUFBMEI7QUFDUTs7QUFFbkIsd0JBQXdCLDZDQUFJO0FBQzNDO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLGlEQUFRO0FBQ3BDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDbERBO0FBQUE7QUFBQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDVEE7QUFBQTtBQUNlLHdFQUFTLEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lJztcclxuXHJcbi8vR0FNRSBJTklUIDw9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFxyXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpO1xyXG5jb25zdCBnYW1lID0gbmV3IEdhbWUoY2FudmFzKTtcclxuZ2FtZS5zdGFydCgpOyAgICAiLCJpbXBvcnQgTWVkaWFIYW5kbGVyIGZyb20gJy4vTWVkaWFIYW5kbGVyJztcclxuaW1wb3J0IEdhbWVTY2VuZSBmcm9tICcuL1NjZW5lJztcclxuXHJcbmNvbnN0IG1lZGlhSGFuZGxlciA9IG5ldyBNZWRpYUhhbmRsZXIoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xyXG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcblxyXG4gICAgICAgIC8vZ2FtZSBzdGF0ZSAob2ZmID0gMCwgb24gPSAxLCBwYXVzZSA9IDIpXHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSAwO1xyXG5cclxuICAgICAgICAvL3NhbXBsZSBvZiBhIHN0YWdlIGNsYXNzXHJcbiAgICAgICAgdGhpcy5zdGFnZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLy9nYW1lIGluaXRpYWxpemF0aW9uIHByb2Nlc3NcclxuICAgIGFzeW5jIGluaXQoKSB7XHJcbiAgICAgICAgbWVkaWFIYW5kbGVyLnNldEltYWdlU291cmNlcyhbXHJcbiAgICAgICAgICAgICcuLi8uLi9kaXN0L2ltYWdlcy9zaGlwLnBuZycsXHJcbiAgICAgICAgICAgICcuLi8uLi9kaXN0L2ltYWdlcy9lbmVteS5wbmcnXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIC8vcHJlbG9hZCBpbWFnZXNcclxuICAgICAgICBjb25zb2xlLmxvZygnSW1hZ2UgcHJlbG9hZGluZy4nKTtcclxuICAgICAgICBhd2FpdCB0aGlzLnByZWxvYWRBbGxJbWFnZXMoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnSW1hZ2VzIHByZWxvYWRpbmcgZG9uZS4nKTtcclxuICAgIH1cclxuXHJcbiAgICAvL3RoaXMgbWV0aG9kIHRha2VzIGFsbCBvZiB0aGUgc291cmNlcyBmcm9tIHRoaXMuaW1hZ2VTb3VyY2VzIGFuZCBwcmVsb2FkcyB0aGVtXHJcbiAgICBhc3luYyBwcmVsb2FkQWxsSW1hZ2VzKCkge1xyXG4gICAgICAgIGNvbnN0IGltYWdlU291cmNlcyA9IG1lZGlhSGFuZGxlci5nZXRJbWFnZVNvdXJjZXMoKTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBzcmMgb2YgaW1hZ2VTb3VyY2VzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBMb2FkaW5nICR7c3JjfS5gKTtcclxuICAgICAgICAgICAgbWVkaWFIYW5kbGVyLmFkZEltYWdlKGF3YWl0IHRoaXMucHJlbG9hZEltYWdlKHNyYykpO1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgLy9wcmVsb2FkcyBhIHNpbmdsZSBpbWFnZSBmcm9tIHNyY1xyXG4gICAgcHJlbG9hZEltYWdlKHNyYykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBJbWFnZSAke2ltZy5zcmN9IGxvYWRlZC5gKVxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShpbWcpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpbWcub25lcnJvciA9ICgpID0+IHJlamVjdCgpO1xyXG4gICAgICAgICAgICBpbWcuc3JjID0gc3JjO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vZ2FtZSBzdGFydFxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PXdpcD09PT09PT09PT09PT09PT09XHJcbiAgICBhc3luYyBzdGFydCgpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLmluaXQoKTtcclxuXHJcbiAgICAgICAgLy9nYW1lIG9uIHN0YXRlXHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSAxO1xyXG5cclxuICAgICAgICAvL2NyZWF0aW9uIG9mIHN0YWdlIDEgPD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBXaVAhXHJcbiAgICAgICAgdGhpcy5zdGFnZSA9IG5ldyBHYW1lU2NlbmUoe1xyXG4gICAgICAgICAgICBuYW1lOiAnQSBUZXN0IEdhbWUgU3RhZ2UnLFxyXG4gICAgICAgICAgICBjYW52YXM6IHRoaXMuY2FudmFzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3RhZ2Uuc3RhcnQoKTtcclxuICAgIH0gIFxyXG59IiwiaW1wb3J0IGdhbWVNZWRpYSBmcm9tICcuL2dhbWVNZWRpYSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYUhhbmRsZXIge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICB0aGlzLmltYWdlU291cmNlcyA9IChwcm9wcyAmJiBwcm9wcy5pbWFnZVNvdXJjZXMuc2xpY2UoKSkgfHwgW107XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SW1hZ2VTb3VyY2VzKHNvdXJjZXNBcnJheSkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VTb3VyY2VzID0gc291cmNlc0FycmF5LnNsaWNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW1hZ2VTb3VyY2VzKCkge1xyXG4gICAgICAgIHJldHVybiAgdGhpcy5pbWFnZVNvdXJjZXM7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkSW1hZ2UoaW1hZ2UpIHtcclxuICAgICAgICBnYW1lTWVkaWEucHVzaChpbWFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW1hZ2Uobikge1xyXG4gICAgICAgIHJldHVybiBnYW1lTWVkaWFbbl07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW1hZ2VzKCkge1xyXG4gICAgICAgIHJldHVybiBnYW1lTWVkaWE7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgR2FtZVdpbmRvdyBmcm9tICcuL0dhbWVXaW5kb3cnO1xyXG5pbXBvcnQgTWVkaWFIYW5kbGVyIGZyb20gJy4vTWVkaWFIYW5kbGVyJztcclxuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XHJcbmltcG9ydCBFbWVueVNoaXAgZnJvbSAnLi9FbWVueVNoaXAnO1xyXG5pbXBvcnQgQWN0aW9uIGZyb20gJy4vQWN0aW9uJztcclxuY29uc3QgbWVkaWFIYW5kbGVyID0gbmV3IE1lZGlhSGFuZGxlcigpO1xyXG5cclxubGV0IGtleVN0YXRlcyA9IHsgXHJcbiAgICB1cDogZmFsc2UsXHJcbiAgICByaWdodDogZmFsc2UsXHJcbiAgICBkb3duOiBmYWxzZSxcclxuICAgIGxlZnQ6IGZhbHNlXHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcclxuICAgIGlmIChlLmtleUNvZGUgPT09IDg3IHx8IGUua2V5Q29kZSA9PT0gMzgpIHtcclxuICAgICAgICBrZXlTdGF0ZXMudXAgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gNjUgfHwgZS5rZXlDb2RlID09PSAzNykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdBIGlzIHByZXNzZWQhJyk7XHJcbiAgICAgICAga2V5U3RhdGVzLmxlZnQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gODMgfHwgZS5rZXlDb2RlID09PSA0MCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdTIGlzIHByZXNzZWQhJyk7XHJcbiAgICAgICAga2V5U3RhdGVzLmRvd24gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gNjggfHwgZS5rZXlDb2RlID09PSAzOSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdEIGlzIHByZXNzZWQhJyk7XHJcbiAgICAgICAga2V5U3RhdGVzLnJpZ2h0ID0gdHJ1ZTtcclxuICAgIH1cclxufSwgdHJ1ZSk7XHJcbiAgICBcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcclxuICAgIGlmIChlLmtleUNvZGUgPT09IDg3IHx8IGUua2V5Q29kZSA9PT0gMzgpIHtcclxuICAgICAgICBrZXlTdGF0ZXMudXAgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChlLmtleUNvZGUgPT09IDY1IHx8IGUua2V5Q29kZSA9PT0gMzcpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnQSBpcyBwcmVzc2VkIScpO1xyXG4gICAgICAgIGtleVN0YXRlcy5sZWZ0ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSA4MyB8fCBlLmtleUNvZGUgPT09IDQwKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1MgaXMgcHJlc3NlZCEnKTtcclxuICAgICAgICBrZXlTdGF0ZXMuZG93biA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gNjggfHwgZS5rZXlDb2RlID09PSAzOSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdEIGlzIHByZXNzZWQhJyk7XHJcbiAgICAgICAga2V5U3RhdGVzLnJpZ2h0ID0gZmFsc2U7XHJcbiAgICB9XHJcbn0sIHRydWUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVNjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gcHJvcHMubmFtZTtcclxuICAgICAgICB0aGlzLmdhbWVXaW5kb3cgPSBuZXcgR2FtZVdpbmRvdyhwcm9wcy5jYW52YXMpO1xyXG4gICAgICAgIHRoaXMub2JqZWN0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZW5lbWllcyA9IFtdO1xyXG4gICAgICAgIHRoaXMucmVxdWVzdElkID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZwcyA9IDYwO1xyXG4gICAgICAgIHRoaXMudHBzID0gMTI7XHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5sYXN0VGlsZVRpbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZnJhbWVEZWxheSA9IDEwMDAgLyB0aGlzLmZwcztcclxuICAgICAgICB0aGlzLnRpbGVEZWxheSA9IDEwMDAgLyB0aGlzLnRwcztcclxuICAgICAgICB0aGlzLmRlZmF1bHRTY2FsZSA9IDE7XHJcbiAgICAgICAgdGhpcy5sYXllcnMgPSB7XHJcbiAgICAgICAgICAgIG92ZXJsYXk6IFtdLFxyXG4gICAgICAgICAgICBmcm9udDogW10sXHJcbiAgICAgICAgICAgIG1haW46IFtdLFxyXG4gICAgICAgICAgICBiYWNrOiBbXSxcclxuICAgICAgICAgICAgYmFja2Jyb3VuZDogW11cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubGF5ZXJzQXJyYXkgPSBbXTtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9ICcjMTExMTExJztcclxuXHJcbiAgICAgICAgdGhpcy5mcmFtZSA9IHRoaXMuZnJhbWUuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0lOSVRJQUxJWkFUSU9OIDw9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGFzeW5jIGluaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFNjZW5lIFwiJHsgdGhpcy5uYW1lIH1cIiBsb2FkaW5nLmApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyBvYmplY3RzLicpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuY3JlYXRlU2NlbmVPYmplY3RzKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIG9iamVjdHMgZG9uZS4nKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgU2NlbmUgXCIkeyB0aGlzLm5hbWUgfVwiIGxvYWRlZC5gKTtcclxuICAgIH1cclxuXHJcbiAgICAvL09CSkVDVCBDUkVBVElPTiA8PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjcmVhdGVTY2VuZU9iamVjdHMoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSB0aGlzLmNyZWF0ZU9iamVjdChQbGF5ZXIsIHtcclxuICAgICAgICAgICAgaHA6IDEwMCxcclxuICAgICAgICAgICAgc3BlZWQ6IDEwLFxyXG4gICAgICAgICAgICBpbWFnZTogbWVkaWFIYW5kbGVyLmdldEltYWdlKDApLFxyXG4gICAgICAgICAgICB0aWxlc0Ftb3VudDogMyxcclxuICAgICAgICAgICAgdGlsZVNpemU6IDY0LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnBvc2l0aW9uWCA9IHRoaXMuZ2FtZVdpbmRvdy53aWR0aCAvIDIgLSB0aGlzLnBsYXllci50aWxlU2l6ZSAvIDI7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucG9zaXRpb25ZID0gdGhpcy5nYW1lV2luZG93LmhlaWdodCAvIDIgLSB0aGlzLnBsYXllci50aWxlU2l6ZSAvIDI7XHJcbiAgICAgICAgdGhpcy5wdXNoVG9MYXllcih0aGlzLnBsYXllciwgJ21haW4nKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBsYXllcik7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbWllcy5wdXNoKHRoaXMuY3JlYXRlT2JqZWN0KEVtZW55U2hpcCwge1xyXG4gICAgICAgICAgICAgICAgaHA6IDEwMCxcclxuICAgICAgICAgICAgICAgIHNwZWVkOjIsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvblg6IGkgKiA2NCxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uWTogMCxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBtZWRpYUhhbmRsZXIuZ2V0SW1hZ2UoMSksXHJcbiAgICAgICAgICAgICAgICB0aWxlc0Ftb3VudDogMyxcclxuICAgICAgICAgICAgICAgIHRpbGVTaXplOiA2NCxcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB0aGlzLnB1c2hUb0xheWVyKHRoaXMuZW5lbWllc1tpXSwgJ2JhY2snKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZW5lbWllc1tpXS5zZXRCZWhhdmlvcihbXHJcbiAgICAgICAgICAgICAgICBuZXcgQWN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IHRoaXMuZW5lbWllc1tpXS5tb3ZlLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnZG93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgbmV3IEFjdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiB0aGlzLmVuZW1pZXNbaV0ucGF1c2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMFxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBuZXcgQWN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IHRoaXMuZW5lbWllc1tpXS5tb3ZlLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAndXAnLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIG5ldyBBY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogdGhpcy5lbmVtaWVzW2ldLnNldFNwZWVkLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiA2LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uY2U6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgbmV3IEFjdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiB0aGlzLmVuZW1pZXNbaV0ubW92ZSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2Rvd24nLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIG5ldyBBY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogdGhpcy5lbmVtaWVzW2ldLnBhdXNlLFxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIF0pO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5lbmVtaWVzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9jcmVhdGVzIGEgZ2FtZSBvYmplY3RcclxuICAgIGNyZWF0ZU9iamVjdChDbGFzcywgcHJvcHMpIHtcclxuICAgICAgICBsZXQgb2JqID0gbmV3IENsYXNzKHByb3BzKTtcclxuICAgICAgICB0aGlzLm9iamVjdHMucHVzaChvYmopO1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcblxyXG4gICAgLy9zZXRzIGEgcmVuZGVyIGxheWVyXHJcbiAgICBwdXNoVG9MYXllcihvYmosIGxheWVyKSB7XHJcbiAgICAgICAgdGhpcy5sYXllcnNbbGF5ZXJdLnB1c2gob2JqKTtcclxuICAgICAgICB0aGlzLmdldExheWVyc0FycmF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy90cmFuc2Zvcm1zIGxheWVycyBvYmplY3QgaW50byBzaW1wbGUgYXJyYXkgdGkgc2ltcGxpZnkgcmVuZGVyaW5nXHJcbiAgICBnZXRMYXllcnNBcnJheSgpIHtcclxuICAgICAgICB0aGlzLmxheWVyc0FycmF5ID0gW107XHJcbiAgICAgICAgY29uc3QgbGF5ZXJzVmFsdWVzID0gT2JqZWN0LnZhbHVlcyh0aGlzLmxheWVycyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGxheWVyc1ZhbHVlcy5sZW5ndGggLSAxOyBpID49MDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG9iaiBvZiBsYXllcnNWYWx1ZXNbaV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGF5ZXJzQXJyYXkucHVzaChvYmopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vc3RhcnQgc2NlbmVcclxuICAgIGFzeW5jIHN0YXJ0KCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdHYW1lIHN0YXJ0ZWQuJylcclxuXHJcbiAgICAgICAgLy8gZ2FtZSBzdGFydCB0aW1lXHJcbiAgICAgICAgdGhpcy5zdGFydFNjZW5lTG9vcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0U2NlbmVMb29wKCkge1xyXG4gICAgICAgIC8vIGdhbWUgc3RhcnQgdGltZVxyXG4gICAgICAgIHRoaXMubGFzdCA9IHRoaXMubGFzdFRpbGVUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0SWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5mcmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9MT0dJQyA8PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5rZXlIYW5kbGVyKCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuY2hlY2tCb3JkZXJzKHRoaXMuZ2FtZVdpbmRvdyk7XHJcbiAgICAgICAgZm9yIChsZXQgZW5lbXkgb2YgdGhpcy5lbmVtaWVzKSB7XHJcbiAgICAgICAgICAgIGVuZW15LmRvQ3VycmVudEFjdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy9BTklNQVRJT04gPD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgZnJhbWUoKSB7XHJcbiAgICAgICAgbGV0IGR0ID0gcGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLmxhc3RUaW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChkdCA8IHRoaXMuZnJhbWVEZWxheSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmZyYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hUaWxlcyh0aGlzLm9iamVjdHMpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0SWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5mcmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hUaWxlcyhvYmplY3RzKSB7XHJcbiAgICAgICAgbGV0IGR0ID0gcGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLmxhc3RUaWxlVGltZTtcclxuICAgICAgICBpZiAoZHQgPiB0aGlzLnRpbGVEZWxheSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBvYmogb2Ygb2JqZWN0cykge1xyXG4gICAgICAgICAgICAgICAgb2JqLm5leHRUaWxlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sYXN0VGlsZVRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9SRU5ERVIgPD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuZmlsbEZpZWxkKCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IG9iaiBvZiB0aGlzLmxheWVyc0FycmF5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd09iamVjdChvYmopO1xyXG4gICAgICAgIH1cclxuICAgIH0gXHJcblxyXG4gICAgLy9kcmF3cyBhIHNpbmdsZSBvYmplY3RcclxuICAgIGRyYXdPYmplY3Qob2JqLCBzY2FsZSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVdpbmRvdy5jdHguc2F2ZSgpO1xyXG4gICAgICAgIC8vIHRoaXMuZ2FtZVdpbmRvdy5jdHgudHJhbnNsYXRlKHRoaXMuZ2FtZVdpbmRvdy53aWR0aCAvIDIsIHRoaXMuZ2FtZVdpbmRvdy5oZWlnaHQgLyAyKTtcclxuICAgICAgICB0aGlzLmdhbWVXaW5kb3cuY3R4LnRyYW5zbGF0ZShvYmoucG9zaXRpb25YICsgMTkyIC8gMiwgb2JqLnBvc2l0aW9uWSArIDY0IC8gMik7XHJcbiAgICAgICAgdGhpcy5nYW1lV2luZG93LmN0eC5yb3RhdGUoLShvYmouYW5nbGUgLSA5MCkgKiBNYXRoLlBJIC8gMTgwKTtcclxuICAgICAgICAvLyB0aGlzLmdhbWVXaW5kb3cuY3R4LmRyYXdJbWFnZShvYmouaW1hZ2UsIC0xOTIgLyAyLCAtNjQgLyAyKTtcclxuICAgICAgICAvLyBpZiAoc2NhbGUpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5nYW1lV2luZG93LmN0eC5kcmF3SW1hZ2Uob2JqLmltYWdlLCBvYmouY3VycmVudFRpbGUgKiBvYmoudGlsZVNpemUsIDAsIG9iai50aWxlU2l6ZSwgb2JqLnRpbGVTaXplLCBvYmoucG9zaXRpb25YLCBvYmoucG9zaXRpb25ZLCBvYmoudGlsZVNpemUgKiBzY2FsZSwgb2JqLnRpbGVTaXplICogc2NhbGUpO1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVdpbmRvdy5jdHguZHJhd0ltYWdlKG9iai5pbWFnZSwgb2JqLmN1cnJlbnRUaWxlICogb2JqLnRpbGVTaXplLCAwLCBvYmoudGlsZVNpemUsIG9iai50aWxlU2l6ZSwgLW9iai50aWxlU2l6ZSAvIDIsIC1vYmoudGlsZVNpemUgLyAyLCBvYmoudGlsZVNpemUsIG9iai50aWxlU2l6ZSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHRoaXMuZ2FtZVdpbmRvdy5jdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbGxGaWVsZCgpIHtcclxuICAgICAgICB0aGlzLmdhbWVXaW5kb3cuY3R4LmZpbGxTdHlsZSA9IHRoaXMuYmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgIHRoaXMuZ2FtZVdpbmRvdy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5nYW1lV2luZG93LndpZHRoLCB0aGlzLmdhbWVXaW5kb3cuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBrZXlIYW5kbGVyKCkge1xyXG4gICAgICAgIGlmIChrZXlTdGF0ZXMudXApIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZUZvcndhcmQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleVN0YXRlcy5kb3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmVCYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChrZXlTdGF0ZXMubGVmdCkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci50dXJuKCdsZWZ0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChrZXlTdGF0ZXMucmlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIudHVybigncmlnaHQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmIChrZXlTdGF0ZXMudXApIHtcclxuICAgICAgICAvLyAgICAgaWYgKGtleVN0YXRlcy5yaWdodCkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZSgndXAtcmlnaHQnKTtcclxuICAgICAgICAvLyAgICAgfSBlbHNlIGlmIChrZXlTdGF0ZXMubGVmdCl7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnBsYXllci5tb3ZlKCd1cC1sZWZ0Jyk7XHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnBsYXllci5tb3ZlKCd1cCcpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSBlbHNlIGlmIChrZXlTdGF0ZXMuZG93bikge1xyXG4gICAgICAgIC8vICAgICBpZiAoa2V5U3RhdGVzLnJpZ2h0KSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnBsYXllci5tb3ZlKCdkb3duLXJpZ2h0Jyk7XHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSBpZiAoa2V5U3RhdGVzLmxlZnQpe1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZSgnZG93bi1sZWZ0Jyk7XHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnBsYXllci5tb3ZlKCdkb3duJyk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9IGVsc2UgaWYgKGtleVN0YXRlcy5sZWZ0KSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMucGxheWVyLm1vdmUoJ2xlZnQnKTtcclxuICAgICAgICAvLyB9IGVsc2UgaWYgKGtleVN0YXRlcy5yaWdodCl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMucGxheWVyLm1vdmUoJ3JpZ2h0Jyk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVdpbmRvdyB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuY2FudmFzLndpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5jYW52YXMuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMudG9wID0gMDtcclxuICAgICAgICB0aGlzLnJpZ2h0ID0gdGhpcy5jYW52YXMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5ib3R0b20gPSB0aGlzLmNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5sZWZ0ID0gMDtcclxuICAgIH1cclxufSIsIi8qYSBjbGFzcyBvZiBwbGF5ZXIgY2hhcmFjdGVyLiBhIHBsYXllciBpcyBhIFNISVAsIHNvIGl0IGV4dGVuZHMgYXBwcm9wcmlhdGUgY2xhc3NcclxudG8gY3JlYXRlIGEgcGxheWVyLCB5b3UgbmVlZCB0aSBwYXNzIFBST1BTIHZhcmlhYmxlXHJcbmV4YW1wbGVcclxue1xyXG4gICAgaHA6IDEwMCxcclxuICAgIHNwZWVkOiAxMCxcclxuICAgIHBvc2l0aW9uWDogMTAwLFxyXG4gICAgcG9zaXRpb255OiAyMDAsXHJcbiAgICBpbWFnZTogaW1nLFxyXG4gICAgdGlsZXNBbW91bnQ6IDIsXHJcbiAgICB0aWxlSGVpZ2h0TCA2NFxyXG4gICAgY3VycmVudFRpbGU6IDA7IFxyXG59XHJcbiovXHJcbmltcG9ydCBTaGlwIGZyb20gJy4vU2hpcCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBTaGlwIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSAndXAnOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uWSAtPSB0aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAnZG93bic6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25ZICs9IHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdyaWdodCc6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25YICs9IHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdsZWZ0Jzoge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvblggLT0gdGhpcy5zcGVlZDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ3VwLXJpZ2h0Jzoge1xyXG4gICAgICAgICAgICAgICAgbGV0IG9mZnNldCA9IE1hdGgucm91bmQodGhpcy5zcGVlZCAqIE1hdGguc3FydCgyKSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvblkgLT0gb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvblggKz0gb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAndXAtbGVmdCc6IHtcclxuICAgICAgICAgICAgICAgIGxldCBvZmZzZXQgPSBNYXRoLnJvdW5kKHRoaXMuc3BlZWQgKiBNYXRoLnNxcnQoMikgLyAyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25ZIC09IG9mZnNldDtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25YIC09IG9mZnNldDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ2Rvd24tcmlnaHQnOiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0ID0gTWF0aC5yb3VuZCh0aGlzLnNwZWVkICogTWF0aC5zcXJ0KDIpIC8gMik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uWSArPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uWCArPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdkb3duLWxlZnQnOiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0ID0gTWF0aC5yb3VuZCh0aGlzLnNwZWVkICogTWF0aC5zcXJ0KDIpIC8gMik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uWSArPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uWCAtPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGVja0JvcmRlcnMocmVjdGFuZ2xlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb25ZIDwgcmVjdGFuZ2xlLnRvcCkge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uWSA9IHJlY3RhbmdsZS50b3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uWSA+IHJlY3RhbmdsZS5ib3R0b20gLSB0aGlzLnRpbGVTaXplKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25ZID0gcmVjdGFuZ2xlLmJvdHRvbSAtIHRoaXMudGlsZVNpemU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uWCA8IHJlY3RhbmdsZS5sZWZ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25YID0gcmVjdGFuZ2xlLmxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uWCA+IHJlY3RhbmdsZS5yaWdodCAtIHRoaXMudGlsZVNpemUpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvblggPSByZWN0YW5nbGUucmlnaHQgLSB0aGlzLnRpbGVTaXplO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gJy4vT2JqZWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaHAgPSBwcm9wcy5ocCB8fCAxMDA7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHByb3BzLnNwZWVkIHx8IDEwO1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBwcm9wcy5pbWFnZSB8fCBudWxsO1xyXG4gICAgICAgIHRoaXMudGlsZXNBbW91bnQgPSBwcm9wcy50aWxlc0Ftb3VudCB8fCAwO1xyXG4gICAgICAgIHRoaXMudGlsZVNpemUgID0gcHJvcHMudGlsZVNpemUgfHwgMDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaWxlID0gcHJvcHMuY3VycmVudFRpbGUgfHwgMDtcclxuICAgICAgICB0aGlzLmFuZ2xlID0gcHJvcHMuYW5nbGUgfHwgOTA7XHJcbiAgICAgICAgdGhpcy5yYWRBbmdsZSA9IHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwO1xyXG4gICAgICAgIHRoaXMudHVyblNwZWVkID0gcHJvcHMudHVyblNwZWVkIHx8IDU7XHJcblxyXG4gICAgICAgIC8vbWV0aG9kc1xyXG4gICAgICAgIHRoaXMubW92ZSA9IHRoaXMubW92ZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2V0U3BlZWQgPSB0aGlzLnNldFNwZWVkLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZShkaXJlY3Rpb24pIHtcclxuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlICd1cCc6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25ZIC09IHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdkb3duJzoge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvblkgKz0gdGhpcy5zcGVlZDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0Jzoge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvblggKz0gdGhpcy5zcGVlZDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uWCAtPSB0aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAndXAtcmlnaHQnOiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0ID0gTWF0aC5yb3VuZCh0aGlzLnNwZWVkICogTWF0aC5zcXJ0KDIpIC8gMik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uWSAtPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uWCArPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICd1cC1sZWZ0Jzoge1xyXG4gICAgICAgICAgICAgICAgbGV0IG9mZnNldCA9IE1hdGgucm91bmQodGhpcy5zcGVlZCAqIE1hdGguc3FydCgyKSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvblkgLT0gb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvblggLT0gb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAnZG93bi1yaWdodCc6IHtcclxuICAgICAgICAgICAgICAgIGxldCBvZmZzZXQgPSBNYXRoLnJvdW5kKHRoaXMuc3BlZWQgKiBNYXRoLnNxcnQoMikgLyAyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25ZICs9IG9mZnNldDtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25YICs9IG9mZnNldDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ2Rvd24tbGVmdCc6IHtcclxuICAgICAgICAgICAgICAgIGxldCBvZmZzZXQgPSBNYXRoLnJvdW5kKHRoaXMuc3BlZWQgKiBNYXRoLnNxcnQoMikgLyAyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25ZICs9IG9mZnNldDtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25YIC09IG9mZnNldDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdmVGb3J3YXJkKCkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25YICs9IE1hdGguY29zKHRoaXMucmFkQW5nbGUpICogdGhpcy5zcGVlZDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uWSAtPSBNYXRoLnNpbih0aGlzLnJhZEFuZ2xlKSAqIHRoaXMuc3BlZWQ7XHJcbiAgICB9XHJcbiAgICBtb3ZlQmFjaygpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uWCAtPSBNYXRoLmNvcyh0aGlzLnJhZEFuZ2xlKSAqIHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblkgKz0gTWF0aC5zaW4odGhpcy5yYWRBbmdsZSkgKiB0aGlzLnNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIHR1cm4oZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hbmdsZSk7XHJcbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSAncmlnaHQnOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuZ2xlIC09IHRoaXMudHVyblNwZWVkO1xyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLmFuZ2xlIDw9IDAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmdsZSA9IDM2MCAtIHRoaXMuYW5nbGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJhZEFuZ2xlID0gdGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdsZWZ0Jzoge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmdsZSArPSB0aGlzLnR1cm5TcGVlZDtcclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5hbmdsZSA+PSAzNjAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmdsZSA9IHRoaXMuYW5nbGUgLSAzNjA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJhZEFuZ2xlID0gdGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRTcGVlZChzcGVlZCkge1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0VGlsZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50VGlsZSA8ICh0aGlzLnRpbGVzQW1vdW50IC0gMSkpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGlsZSsrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbGUgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRJbWFnZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZTtcclxuICAgIH1cclxufSIsIi8vYSBiYXNpYyBnYW1lIG9iamVjdCBjbGFzcy4gaW5jbHVkZXMgbWV0aG9kcyBFVkVSWSBvYmplY3Qgb24gYSBzY3JlZW4gaGFzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVPYmplY3Qge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uWCA9IHByb3BzLnBvc2l0aW9uWCB8fCAwO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25ZID0gcHJvcHMucG9zaXRpb25ZIHx8IDA7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgU2hpcCBmcm9tICcuL1NoaXAnO1xyXG5pbXBvcnQgQmVoYXZpb3IgZnJvbSAnLi9CZWhhdmlvcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWVueVNoaXAgZXh0ZW5kcyBTaGlwIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnBhdXNlID0gdGhpcy5wYXVzZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmJlaGF2aW9yID0gbmV3IEJlaGF2aW9yKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vRU5FTVkgU0hJUCBMSUdJQyBBTkQgQUNUSU9OU1xyXG4gICAgcGF1c2UoKSB7fVxyXG4gXHJcbiAgICAvL1NFVCBCRUhBVklPUlxyXG4gICAgc2V0QmVoYXZpb3IoYWN0aW9ucykge1xyXG4gICAgICAgIHRoaXMuYmVoYXZpb3Iuc2V0QWN0aW9ucyhhY3Rpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBkb0N1cnJlbnRBY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5iZWhhdmlvci5kb0N1cnJlbnRBY3Rpb24oKTtcclxuICAgIH1cclxufSIsIi8vQkVIQVZJT1VSIENMQVNTLiBIQU5ETEVTIEFDVElPTidTIEVYRUNVVElPTlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCZWhhdmlvciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIC8vdGhpcyBpcyBhbiBhcnJheSBvZiBlbmVteSBhY3Rpb25zIGxpa2UgbW92ZSwgdHVybiwgc3RvcCBldGMuIFxyXG4gICAgICAgIC8vIHByb3BzLmFjdGlvbnMgPyB0aGlzLmFjdGlvbnMgPSBwcm9wcy5hY3Rpb25zLnNsaWNlKCkgOiBbXTtcclxuICAgICAgICBpZiAocHJvcHMgJiYgcHJvcHMuYWN0aW9ucykge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGlvbnMgPSBwcm9wcy5hY3Rpb25zO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aW9ucyA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50QWN0aW9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLmFjdGlvblN0YXJ0VGltZSA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aW9uU3RhcnRWYWx1ZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLy9TRVRUSU5HIEFDVElPTlNcclxuICAgIHNldEFjdGlvbnMoYWN0aW9ucykge1xyXG4gICAgICAgIHRoaXMuYWN0aW9ucyA9IGFjdGlvbnMuc2xpY2UoKTtcclxuICAgICAgICB0aGlzLm5leHRBY3Rpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRBY3Rpb24oYWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25zLnB1c2goYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvL05FWFQgQUNUSU9OU1xyXG4gICAgbmV4dEFjdGlvbigpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRBY3Rpb24gPSB0aGlzLmFjdGlvbnMuc2hpZnQoKTtcclxuICAgICAgICB0aGlzLmFjdGlvblN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvQ3VycmVudEFjdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50QWN0aW9uLmR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIGxldCBkdCA9IHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5hY3Rpb25TdGFydFRpbWU7XHJcblxyXG4gICAgICAgICAgICBpZiAoZHQgPj0gdGhpcy5jdXJyZW50QWN0aW9uLmR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRBY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uU3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFjdGlvbi5tZXRob2QodGhpcy5jdXJyZW50QWN0aW9uLnZhbHVlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudEFjdGlvbi5vbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFjdGlvbi5tZXRob2QodGhpcy5jdXJyZW50QWN0aW9uLnZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy5uZXh0QWN0aW9uKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QWN0aW9uLm1ldGhvZCh0aGlzLmN1cnJlbnRBY3Rpb24udmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSAiLCIvL0FOIEFDVElPTiBDTEFTUy4gSVMgTkVFREVEIFRPIENPTlNUUlVDVCBCRUhBVklPUiBBUlJBWVMgRk9SIEFVVE9NQVRJQyBFTlRJVElFU1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3Rpb24ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICB0aGlzLm1ldGhvZCA9IHByb3BzLm1ldGhvZDtcclxuICAgICAgICB0aGlzLmR1cmF0aW9uID0gcHJvcHMuZHVyYXRpb247XHJcbiAgICAgICAgdGhpcy5vbmNlID0gcHJvcHMub25jZTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gcHJvcHMudmFsdWU7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25TdGFydFRpbWUgPSBudWxsO1xyXG4gICAgfVxyXG59ICIsImxldCBnYW1lTWVkaWEgPSBbXTtcclxuZXhwb3J0IGRlZmF1bHQgZ2FtZU1lZGlhOyJdLCJzb3VyY2VSb290IjoiIn0=