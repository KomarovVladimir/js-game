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
/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);



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
/* harmony import */ var _gameMedia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


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
let gameMedia = [];
/* harmony default export */ __webpack_exports__["default"] = (gameMedia);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameScene; });
/* harmony import */ var _GameWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _MediaHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _ObjectHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _EmenyShip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var _keyStates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14);








const mediaHandler = new _MediaHandler__WEBPACK_IMPORTED_MODULE_1__["default"]();
const objectHandler = new _ObjectHandler__WEBPACK_IMPORTED_MODULE_2__["default"]();

class GameScene {
    constructor(props) {
        this.name = props.name;
        this.gameWindow = new _GameWindow__WEBPACK_IMPORTED_MODULE_0__["default"](props.canvas);
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
        this.player = objectHandler.createObject(_Player__WEBPACK_IMPORTED_MODULE_3__["default"], {
            hp: 100,
            speed: 10,
            image: mediaHandler.getImage(0),
            tilesAmount: 1,
            tileSize: 32,
        });
        this.player.positionX = this.gameWindow.width / 2 - this.player.tileSize / 2;
        this.player.positionY = this.gameWindow.height / 2 - this.player.tileSize / 2;
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
        this.gameWindow.ctx.translate(obj.positionX  + obj.tileSize / 2, obj.positionY + obj.tileSize / 2);
        this.gameWindow.ctx.rotate(-(obj.angle - 90) * Math.PI / 180);
        if (scale) {
            this.gameWindow.ctx.drawImage(obj.image, obj.currentTile * obj.tileSize, 0, obj.tileSize, obj.tileSize, obj.positionX, obj.positionY, obj.tileSize * scale, obj.tileSize * scale);
        } else {
            this.gameWindow.ctx.drawImage(obj.image, obj.currentTile * obj.tileSize, 0, obj.tileSize, obj.tileSize, -obj.tileSize / 2, -obj.tileSize / 2, obj.tileSize, obj.tileSize);
        }
        this.gameWindow.ctx.restore();
    }

    fillField() {
        this.gameWindow.ctx.fillStyle = this.backgroundColor;
        this.gameWindow.ctx.fillRect(0, 0, this.gameWindow.width, this.gameWindow.height);
    }

    keyHandler() {
        if (_keyStates__WEBPACK_IMPORTED_MODULE_6__["default"].space) {
            this.player.shot();
        }

        if (_keyStates__WEBPACK_IMPORTED_MODULE_6__["default"].up) {
            if (_keyStates__WEBPACK_IMPORTED_MODULE_6__["default"].right) {
                this.player.move(45);
            } else if (_keyStates__WEBPACK_IMPORTED_MODULE_6__["default"].left){
                this.player.move(135);
            } else {
                this.player.move(90);
            }
        } else if (_keyStates__WEBPACK_IMPORTED_MODULE_6__["default"].down) {
            if (_keyStates__WEBPACK_IMPORTED_MODULE_6__["default"].right) {
                this.player.move(315);
            } else if (_keyStates__WEBPACK_IMPORTED_MODULE_6__["default"].left){
                this.player.move(225);
            } else {
                this.player.move(270);
            }
        } else if (_keyStates__WEBPACK_IMPORTED_MODULE_6__["default"].left) {
            this.player.move(180);
        } else if (_keyStates__WEBPACK_IMPORTED_MODULE_6__["default"].right){
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

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ship; });
/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);


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
        this.shootingSpeed = props.shootingSpeed || 1;
        this.items = [];

        //methods
        this.move = this.move.bind(this);
        this.setSpeed = this.setSpeed.bind(this);
    }

    shot() {
        console.log('shot');
    }

    move(angle) {
        const radAngle = angle * Math.PI / 180;
        this.positionX += Math.round(Math.cos(radAngle) * this.speed);
        this.positionY -= Math.round(Math.sin(radAngle) * this.speed);
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
/* 8 */
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EmenyShip; });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _Behavior__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);



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
/* 10 */
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
/* 11 */
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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ObjectHandler; });
/* harmony import */ var _gameObjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);


class ObjectHandler {
    constructor() {
    }

    createObject(Class, props) {
        let obj = new Class(props);
        _gameObjects__WEBPACK_IMPORTED_MODULE_0__["default"].push(obj);
        return obj;
    }

    getObject(n) {
        return _gameObjects__WEBPACK_IMPORTED_MODULE_0__["default"][n];
    }

    getObjects() {
        return _gameObjects__WEBPACK_IMPORTED_MODULE_0__["default"];
    }
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let objects = [];
/* harmony default export */ __webpack_exports__["default"] = (objects);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let keyStates = { 
    up: false,
    right: false,
    down: false,
    left: false,
    space: false
};

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
    if (e.keyCode === 32) {
        keyStates.space = true;
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
    if (e.keyCode === 32) {
        keyStates.space = false;
    }
}, true);

/* harmony default export */ __webpack_exports__["default"] = (keyStates);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvTWVkaWFIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lTWVkaWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1NjZW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9HYW1lV2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvRW1lbnlTaGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9CZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9PYmplY3RIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMva2V5U3RhdGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FB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QUFBLGlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRWMsd0VBQVMsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUnO1xyXG5cclxuLy9HQU1FIElOSVQgPD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXHJcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJyk7XHJcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMpO1xyXG5nYW1lLnN0YXJ0KCk7ICAgICIsImltcG9ydCBNZWRpYUhhbmRsZXIgZnJvbSAnLi9NZWRpYUhhbmRsZXInO1xyXG5pbXBvcnQgR2FtZVNjZW5lIGZyb20gJy4vU2NlbmUnO1xyXG5cclxuY29uc3QgbWVkaWFIYW5kbGVyID0gbmV3IE1lZGlhSGFuZGxlcigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuXHJcbiAgICAgICAgLy9nYW1lIHN0YXRlIChvZmYgPSAwLCBvbiA9IDEsIHBhdXNlID0gMilcclxuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IDA7XHJcblxyXG4gICAgICAgIC8vc2FtcGxlIG9mIGEgc3RhZ2UgY2xhc3NcclxuICAgICAgICB0aGlzLnN0YWdlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvL2dhbWUgaW5pdGlhbGl6YXRpb24gcHJvY2Vzc1xyXG4gICAgYXN5bmMgaW5pdCgpIHtcclxuICAgICAgICBtZWRpYUhhbmRsZXIuc2V0SW1hZ2VTb3VyY2VzKFtcclxuICAgICAgICAgICAgJy4uLy4uL2Rpc3QvaW1hZ2VzL3NoaXAucG5nJyxcclxuICAgICAgICAgICAgJy4uLy4uL2Rpc3QvaW1hZ2VzL2VuZW15LnBuZydcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgLy9wcmVsb2FkIGltYWdlc1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdJbWFnZSBwcmVsb2FkaW5nLicpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMucHJlbG9hZEFsbEltYWdlcygpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdJbWFnZXMgcHJlbG9hZGluZyBkb25lLicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdGhpcyBtZXRob2QgdGFrZXMgYWxsIG9mIHRoZSBzb3VyY2VzIGZyb20gdGhpcy5pbWFnZVNvdXJjZXMgYW5kIHByZWxvYWRzIHRoZW1cclxuICAgIGFzeW5jIHByZWxvYWRBbGxJbWFnZXMoKSB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2VTb3VyY2VzID0gbWVkaWFIYW5kbGVyLmdldEltYWdlU291cmNlcygpO1xyXG5cclxuICAgICAgICBmb3IobGV0IHNyYyBvZiBpbWFnZVNvdXJjZXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYExvYWRpbmcgJHtzcmN9LmApO1xyXG4gICAgICAgICAgICBtZWRpYUhhbmRsZXIuYWRkSW1hZ2UoYXdhaXQgdGhpcy5wcmVsb2FkSW1hZ2Uoc3JjKSk7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICAvL3ByZWxvYWRzIGEgc2luZ2xlIGltYWdlIGZyb20gc3JjXHJcbiAgICBwcmVsb2FkSW1hZ2Uoc3JjKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEltYWdlICR7aW1nLnNyY30gbG9hZGVkLmApXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGltZyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGltZy5vbmVycm9yID0gKCkgPT4gcmVqZWN0KCk7XHJcbiAgICAgICAgICAgIGltZy5zcmMgPSBzcmM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9nYW1lIHN0YXJ0XHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09d2lwPT09PT09PT09PT09PT09PT1cclxuICAgIGFzeW5jIHN0YXJ0KCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuaW5pdCgpO1xyXG5cclxuICAgICAgICAvL2dhbWUgb24gc3RhdGVcclxuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IDE7XHJcblxyXG4gICAgICAgIC8vY3JlYXRpb24gb2Ygc3RhZ2UgMSA8PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFdpUCFcclxuICAgICAgICB0aGlzLnN0YWdlID0gbmV3IEdhbWVTY2VuZSh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdBIFRlc3QgR2FtZSBTdGFnZScsXHJcbiAgICAgICAgICAgIGNhbnZhczogdGhpcy5jYW52YXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zdGFnZS5zdGFydCgpO1xyXG4gICAgfSAgXHJcbn0iLCJpbXBvcnQgZ2FtZU1lZGlhIGZyb20gJy4vZ2FtZU1lZGlhJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhSGFuZGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VTb3VyY2VzID0gKHByb3BzICYmIHByb3BzLmltYWdlU291cmNlcy5zbGljZSgpKSB8fCBbXTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJbWFnZVNvdXJjZXMoc291cmNlc0FycmF5KSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZVNvdXJjZXMgPSBzb3VyY2VzQXJyYXkuc2xpY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbWFnZVNvdXJjZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuICB0aGlzLmltYWdlU291cmNlcztcclxuICAgIH1cclxuXHJcbiAgICBhZGRJbWFnZShpbWFnZSkge1xyXG4gICAgICAgIGdhbWVNZWRpYS5wdXNoKGltYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbWFnZShuKSB7XHJcbiAgICAgICAgcmV0dXJuIGdhbWVNZWRpYVtuXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbWFnZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGdhbWVNZWRpYTtcclxuICAgIH1cclxufSIsImxldCBnYW1lTWVkaWEgPSBbXTtcclxuZXhwb3J0IGRlZmF1bHQgZ2FtZU1lZGlhOyIsImltcG9ydCBHYW1lV2luZG93IGZyb20gJy4vR2FtZVdpbmRvdyc7XHJcbmltcG9ydCBNZWRpYUhhbmRsZXIgZnJvbSAnLi9NZWRpYUhhbmRsZXInO1xyXG5pbXBvcnQgT2JqZWN0SGFuZGxlciBmcm9tICcuL09iamVjdEhhbmRsZXInO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJztcclxuaW1wb3J0IEVtZW55U2hpcCBmcm9tICcuL0VtZW55U2hpcCc7XHJcbmltcG9ydCBBY3Rpb24gZnJvbSAnLi9BY3Rpb24nO1xyXG5pbXBvcnQga2V5U3RhdGVzIGZyb20gJy4va2V5U3RhdGVzJztcclxuXHJcbmNvbnN0IG1lZGlhSGFuZGxlciA9IG5ldyBNZWRpYUhhbmRsZXIoKTtcclxuY29uc3Qgb2JqZWN0SGFuZGxlciA9IG5ldyBPYmplY3RIYW5kbGVyKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU2NlbmUge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBwcm9wcy5uYW1lO1xyXG4gICAgICAgIHRoaXMuZ2FtZVdpbmRvdyA9IG5ldyBHYW1lV2luZG93KHByb3BzLmNhbnZhcyk7XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0SWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZnBzID0gNjA7XHJcbiAgICAgICAgdGhpcy50cHMgPSAxMjtcclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLmxhc3RUaWxlVGltZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5mcmFtZURlbGF5ID0gMTAwMCAvIHRoaXMuZnBzO1xyXG4gICAgICAgIHRoaXMudGlsZURlbGF5ID0gMTAwMCAvIHRoaXMudHBzO1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdFNjYWxlID0gMTtcclxuICAgICAgICB0aGlzLm9iamVjdHMgPSBvYmplY3RIYW5kbGVyLmdldE9iamVjdHMoKTtcclxuICAgICAgICB0aGlzLmxheWVycyA9IHtcclxuICAgICAgICAgICAgb3ZlcmxheTogW10sXHJcbiAgICAgICAgICAgIGZyb250OiBbXSxcclxuICAgICAgICAgICAgbWFpbjogW10sXHJcbiAgICAgICAgICAgIGJhY2s6IFtdLFxyXG4gICAgICAgICAgICBiYWNrYnJvdW5kOiBbXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5sYXllcnNBcnJheSA9IFtdO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gJyMxMTExMTEnO1xyXG5cclxuICAgICAgICB0aGlzLmZyYW1lID0gdGhpcy5mcmFtZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vSU5JVElBTElaQVRJT04gPD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgYXN5bmMgaW5pdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgU2NlbmUgXCIkeyB0aGlzLm5hbWUgfVwiIGxvYWRpbmcuYCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIG9iamVjdHMuJyk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5jcmVhdGVTY2VuZU9iamVjdHMoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgb2JqZWN0cyBkb25lLicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBTY2VuZSBcIiR7IHRoaXMubmFtZSB9XCIgbG9hZGVkLmApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vT0JKRUNUIENSRUFUSU9OIDw9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNyZWF0ZVNjZW5lT2JqZWN0cygpIHtcclxuICAgICAgICB0aGlzLnBsYXllciA9IG9iamVjdEhhbmRsZXIuY3JlYXRlT2JqZWN0KFBsYXllciwge1xyXG4gICAgICAgICAgICBocDogMTAwLFxyXG4gICAgICAgICAgICBzcGVlZDogMTAsXHJcbiAgICAgICAgICAgIGltYWdlOiBtZWRpYUhhbmRsZXIuZ2V0SW1hZ2UoMCksXHJcbiAgICAgICAgICAgIHRpbGVzQW1vdW50OiAxLFxyXG4gICAgICAgICAgICB0aWxlU2l6ZTogMzIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucG9zaXRpb25YID0gdGhpcy5nYW1lV2luZG93LndpZHRoIC8gMiAtIHRoaXMucGxheWVyLnRpbGVTaXplIC8gMjtcclxuICAgICAgICB0aGlzLnBsYXllci5wb3NpdGlvblkgPSB0aGlzLmdhbWVXaW5kb3cuaGVpZ2h0IC8gMiAtIHRoaXMucGxheWVyLnRpbGVTaXplIC8gMjtcclxuICAgICAgICB0aGlzLnB1c2hUb0xheWVyKHRoaXMucGxheWVyLCAnbWFpbicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGxheWVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvL3NldHMgYSByZW5kZXIgbGF5ZXJcclxuICAgIHB1c2hUb0xheWVyKG9iaiwgbGF5ZXIpIHtcclxuICAgICAgICB0aGlzLmxheWVyc1tsYXllcl0ucHVzaChvYmopO1xyXG4gICAgICAgIHRoaXMuZ2V0TGF5ZXJzQXJyYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL3RyYW5zZm9ybXMgbGF5ZXJzIG9iamVjdCBpbnRvIHNpbXBsZSBhcnJheSB0aSBzaW1wbGlmeSByZW5kZXJpbmdcclxuICAgIGdldExheWVyc0FycmF5KCkge1xyXG4gICAgICAgIHRoaXMubGF5ZXJzQXJyYXkgPSBbXTtcclxuICAgICAgICBjb25zdCBsYXllcnNWYWx1ZXMgPSBPYmplY3QudmFsdWVzKHRoaXMubGF5ZXJzKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gbGF5ZXJzVmFsdWVzLmxlbmd0aCAtIDE7IGkgPj0wOyBpLS0pIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgb2JqIG9mIGxheWVyc1ZhbHVlc1tpXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXllcnNBcnJheS5wdXNoKG9iaik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9zdGFydCBzY2VuZVxyXG4gICAgYXN5bmMgc3RhcnQoKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0dhbWUgc3RhcnRlZC4nKVxyXG5cclxuICAgICAgICAvLyBnYW1lIHN0YXJ0IHRpbWVcclxuICAgICAgICB0aGlzLnN0YXJ0U2NlbmVMb29wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRTY2VuZUxvb3AoKSB7XHJcbiAgICAgICAgLy8gZ2FtZSBzdGFydCB0aW1lXHJcbiAgICAgICAgdGhpcy5sYXN0ID0gdGhpcy5sYXN0VGlsZVRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICB0aGlzLnJlcXVlc3RJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmZyYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0xPR0lDIDw9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmtleUhhbmRsZXIoKTtcclxuICAgICAgICAvLyBmb3IgKGxldCBlbmVteSBvZiB0aGlzLmVuZW1pZXMpIHtcclxuICAgICAgICAvLyAgICAgZW5lbXkuZG9DdXJyZW50QWN0aW9uKCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL0FOSU1BVElPTiA8PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBmcmFtZSgpIHtcclxuICAgICAgICBsZXQgZHQgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMubGFzdFRpbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGR0IDwgdGhpcy5mcmFtZURlbGF5KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZnJhbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaFRpbGVzKHRoaXMub2JqZWN0cyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmZyYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaFRpbGVzKG9iamVjdHMpIHtcclxuICAgICAgICBsZXQgZHQgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMubGFzdFRpbGVUaW1lO1xyXG4gICAgICAgIGlmIChkdCA+IHRoaXMudGlsZURlbGF5KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG9iaiBvZiBvYmplY3RzKSB7XHJcbiAgICAgICAgICAgICAgICBvYmoubmV4dFRpbGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxhc3RUaWxlVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL1JFTkRFUiA8PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5maWxsRmllbGQoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgb2JqIG9mIHRoaXMubGF5ZXJzQXJyYXkpIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3T2JqZWN0KG9iaik7XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuXHJcbiAgICAvL2RyYXdzIGEgc2luZ2xlIG9iamVjdFxyXG4gICAgZHJhd09iamVjdChvYmosIHNjYWxlKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lV2luZG93LmN0eC5zYXZlKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lV2luZG93LmN0eC50cmFuc2xhdGUob2JqLnBvc2l0aW9uWCAgKyBvYmoudGlsZVNpemUgLyAyLCBvYmoucG9zaXRpb25ZICsgb2JqLnRpbGVTaXplIC8gMik7XHJcbiAgICAgICAgdGhpcy5nYW1lV2luZG93LmN0eC5yb3RhdGUoLShvYmouYW5nbGUgLSA5MCkgKiBNYXRoLlBJIC8gMTgwKTtcclxuICAgICAgICBpZiAoc2NhbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lV2luZG93LmN0eC5kcmF3SW1hZ2Uob2JqLmltYWdlLCBvYmouY3VycmVudFRpbGUgKiBvYmoudGlsZVNpemUsIDAsIG9iai50aWxlU2l6ZSwgb2JqLnRpbGVTaXplLCBvYmoucG9zaXRpb25YLCBvYmoucG9zaXRpb25ZLCBvYmoudGlsZVNpemUgKiBzY2FsZSwgb2JqLnRpbGVTaXplICogc2NhbGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVdpbmRvdy5jdHguZHJhd0ltYWdlKG9iai5pbWFnZSwgb2JqLmN1cnJlbnRUaWxlICogb2JqLnRpbGVTaXplLCAwLCBvYmoudGlsZVNpemUsIG9iai50aWxlU2l6ZSwgLW9iai50aWxlU2l6ZSAvIDIsIC1vYmoudGlsZVNpemUgLyAyLCBvYmoudGlsZVNpemUsIG9iai50aWxlU2l6ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2FtZVdpbmRvdy5jdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbGxGaWVsZCgpIHtcclxuICAgICAgICB0aGlzLmdhbWVXaW5kb3cuY3R4LmZpbGxTdHlsZSA9IHRoaXMuYmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgIHRoaXMuZ2FtZVdpbmRvdy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5nYW1lV2luZG93LndpZHRoLCB0aGlzLmdhbWVXaW5kb3cuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBrZXlIYW5kbGVyKCkge1xyXG4gICAgICAgIGlmIChrZXlTdGF0ZXMuc3BhY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2hvdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGtleVN0YXRlcy51cCkge1xyXG4gICAgICAgICAgICBpZiAoa2V5U3RhdGVzLnJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlKDQ1KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXlTdGF0ZXMubGVmdCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlKDEzNSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlKDkwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5U3RhdGVzLmRvd24pIHtcclxuICAgICAgICAgICAgaWYgKGtleVN0YXRlcy5yaWdodCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZSgzMTUpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleVN0YXRlcy5sZWZ0KXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmUoMjI1KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmUoMjcwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5U3RhdGVzLmxlZnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZSgxODApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5U3RhdGVzLnJpZ2h0KXtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZSgwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyLmNoZWNrQm9yZGVycyh0aGlzLmdhbWVXaW5kb3cpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcclxuLy8gICAgIHRoaXMuZW5lbWllcy5wdXNoKHRoaXMuY3JlYXRlT2JqZWN0KEVtZW55U2hpcCwge1xyXG4vLyAgICAgICAgIGhwOiAxMDAsXHJcbi8vICAgICAgICAgc3BlZWQ6MixcclxuLy8gICAgICAgICBwb3NpdGlvblg6IGkgKiA2NCxcclxuLy8gICAgICAgICBwb3NpdGlvblk6IDAsXHJcbi8vICAgICAgICAgaW1hZ2U6IG1lZGlhSGFuZGxlci5nZXRJbWFnZSgxKSxcclxuLy8gICAgICAgICB0aWxlc0Ftb3VudDogMyxcclxuLy8gICAgICAgICB0aWxlU2l6ZTogNjQsXHJcbi8vICAgICB9KSk7XHJcbi8vICAgICB0aGlzLnB1c2hUb0xheWVyKHRoaXMuZW5lbWllc1tpXSwgJ2JhY2snKTtcclxuXHJcbi8vICAgICB0aGlzLmVuZW1pZXNbaV0uc2V0QmVoYXZpb3IoW1xyXG4vLyAgICAgICAgIG5ldyBBY3Rpb24oe1xyXG4vLyAgICAgICAgICAgICBtZXRob2Q6IHRoaXMuZW5lbWllc1tpXS5tb3ZlLFxyXG4vLyAgICAgICAgICAgICB2YWx1ZTogJ2Rvd24nLFxyXG4vLyAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMFxyXG4vLyAgICAgICAgIH0pLFxyXG4vLyAgICAgICAgIG5ldyBBY3Rpb24oe1xyXG4vLyAgICAgICAgICAgICBtZXRob2Q6IHRoaXMuZW5lbWllc1tpXS5wYXVzZSxcclxuLy8gICAgICAgICAgICAgZHVyYXRpb246IDUwMFxyXG4vLyAgICAgICAgIH0pLFxyXG4vLyAgICAgICAgIG5ldyBBY3Rpb24oe1xyXG4vLyAgICAgICAgICAgICBtZXRob2Q6IHRoaXMuZW5lbWllc1tpXS5tb3ZlLFxyXG4vLyAgICAgICAgICAgICB2YWx1ZTogJ3VwJyxcclxuLy8gICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcclxuLy8gICAgICAgICB9KSxcclxuLy8gICAgICAgICBuZXcgQWN0aW9uKHtcclxuLy8gICAgICAgICAgICAgbWV0aG9kOiB0aGlzLmVuZW1pZXNbaV0uc2V0U3BlZWQsXHJcbi8vICAgICAgICAgICAgIHZhbHVlOiA2LFxyXG4vLyAgICAgICAgICAgICBvbmNlOiB0cnVlXHJcbi8vICAgICAgICAgfSksXHJcbi8vICAgICAgICAgbmV3IEFjdGlvbih7XHJcbi8vICAgICAgICAgICAgIG1ldGhvZDogdGhpcy5lbmVtaWVzW2ldLm1vdmUsXHJcbi8vICAgICAgICAgICAgIHZhbHVlOiAnZG93bicsXHJcbi8vICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbi8vICAgICAgICAgfSksXHJcbi8vICAgICAgICAgbmV3IEFjdGlvbih7XHJcbi8vICAgICAgICAgICAgIG1ldGhvZDogdGhpcy5lbmVtaWVzW2ldLnBhdXNlLFxyXG4vLyAgICAgICAgIH0pLFxyXG4vLyAgICAgXSk7XHJcblxyXG4vLyAgICAgY29uc29sZS5sb2codGhpcy5lbmVtaWVzW2ldKTtcclxuLy8gfSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVXaW5kb3cge1xyXG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodDtcclxuICAgICAgICB0aGlzLnRvcCA9IDA7XHJcbiAgICAgICAgdGhpcy5yaWdodCA9IHRoaXMuY2FudmFzLndpZHRoO1xyXG4gICAgICAgIHRoaXMuYm90dG9tID0gdGhpcy5jYW52YXMuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMubGVmdCA9IDA7XHJcbiAgICB9XHJcbn0iLCIvKmEgY2xhc3Mgb2YgcGxheWVyIGNoYXJhY3Rlci4gYSBwbGF5ZXIgaXMgYSBTSElQLCBzbyBpdCBleHRlbmRzIGFwcHJvcHJpYXRlIGNsYXNzXHJcbnRvIGNyZWF0ZSBhIHBsYXllciwgeW91IG5lZWQgdGkgcGFzcyBQUk9QUyB2YXJpYWJsZVxyXG5leGFtcGxlXHJcbntcclxuICAgIGhwOiAxMDAsXHJcbiAgICBzcGVlZDogMTAsXHJcbiAgICBwb3NpdGlvblg6IDEwMCxcclxuICAgIHBvc2l0aW9ueTogMjAwLFxyXG4gICAgaW1hZ2U6IGltZyxcclxuICAgIHRpbGVzQW1vdW50OiAyLFxyXG4gICAgdGlsZUhlaWdodEwgNjRcclxuICAgIGN1cnJlbnRUaWxlOiAwOyBcclxufVxyXG4qL1xyXG5pbXBvcnQgU2hpcCBmcm9tICcuL1NoaXAnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgU2hpcCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0JvcmRlcnMocmVjdGFuZ2xlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb25ZIDwgcmVjdGFuZ2xlLnRvcCkge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uWSA9IHJlY3RhbmdsZS50b3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uWSA+IHJlY3RhbmdsZS5ib3R0b20gLSB0aGlzLnRpbGVTaXplKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25ZID0gcmVjdGFuZ2xlLmJvdHRvbSAtIHRoaXMudGlsZVNpemU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uWCA8IHJlY3RhbmdsZS5sZWZ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25YID0gcmVjdGFuZ2xlLmxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uWCA+IHJlY3RhbmdsZS5yaWdodCAtIHRoaXMudGlsZVNpemUpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvblggPSByZWN0YW5nbGUucmlnaHQgLSB0aGlzLnRpbGVTaXplO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gJy4vT2JqZWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaHAgPSBwcm9wcy5ocCB8fCAxMDA7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHByb3BzLnNwZWVkIHx8IDEwO1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBwcm9wcy5pbWFnZSB8fCBudWxsO1xyXG4gICAgICAgIHRoaXMudGlsZXNBbW91bnQgPSBwcm9wcy50aWxlc0Ftb3VudCB8fCAwO1xyXG4gICAgICAgIHRoaXMudGlsZVNpemUgID0gcHJvcHMudGlsZVNpemUgfHwgMDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaWxlID0gcHJvcHMuY3VycmVudFRpbGUgfHwgMDtcclxuICAgICAgICB0aGlzLmFuZ2xlID0gcHJvcHMuYW5nbGUgfHwgOTA7XHJcbiAgICAgICAgdGhpcy5yYWRBbmdsZSA9IHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwO1xyXG4gICAgICAgIHRoaXMudHVyblNwZWVkID0gcHJvcHMudHVyblNwZWVkIHx8IDU7XHJcbiAgICAgICAgdGhpcy5zaG9vdGluZ1NwZWVkID0gcHJvcHMuc2hvb3RpbmdTcGVlZCB8fCAxO1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcclxuXHJcbiAgICAgICAgLy9tZXRob2RzXHJcbiAgICAgICAgdGhpcy5tb3ZlID0gdGhpcy5tb3ZlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zZXRTcGVlZCA9IHRoaXMuc2V0U3BlZWQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG90KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzaG90Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZShhbmdsZSkge1xyXG4gICAgICAgIGNvbnN0IHJhZEFuZ2xlID0gYW5nbGUgKiBNYXRoLlBJIC8gMTgwO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25YICs9IE1hdGgucm91bmQoTWF0aC5jb3MocmFkQW5nbGUpICogdGhpcy5zcGVlZCk7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblkgLT0gTWF0aC5yb3VuZChNYXRoLnNpbihyYWRBbmdsZSkgKiB0aGlzLnNwZWVkKTtcclxuICAgIH1cclxuXHJcbiAgICB0dXJuKGRpcmVjdGlvbikge1xyXG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0Jzoge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmdsZSAtPSB0aGlzLnR1cm5TcGVlZDtcclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5hbmdsZSA8PSAwICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5nbGUgPSAzNjAgLSB0aGlzLmFuZ2xlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yYWRBbmdsZSA9IHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAnbGVmdCc6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5nbGUgKz0gdGhpcy50dXJuU3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuYW5nbGUgPj0gMzYwICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLmFuZ2xlIC0gMzYwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yYWRBbmdsZSA9IHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3BlZWQoc3BlZWQpIHtcclxuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dFRpbGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRpbGUgPCAodGhpcy50aWxlc0Ftb3VudCAtIDEpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbGUrKztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUaWxlID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW1hZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2U7XHJcbiAgICB9XHJcbn0iLCIvL2EgYmFzaWMgZ2FtZSBvYmplY3QgY2xhc3MuIGluY2x1ZGVzIG1ldGhvZHMgRVZFUlkgb2JqZWN0IG9uIGEgc2NyZWVuIGhhc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lT2JqZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblggPSBwcm9wcy5wb3NpdGlvblggfHwgMDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uWSA9IHByb3BzLnBvc2l0aW9uWSB8fCAwO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9TaGlwJztcclxuaW1wb3J0IEJlaGF2aW9yIGZyb20gJy4vQmVoYXZpb3InO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1lbnlTaGlwIGV4dGVuZHMgU2hpcCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5wYXVzZSA9IHRoaXMucGF1c2UuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5iZWhhdmlvciA9IG5ldyBCZWhhdmlvcigpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL0VORU1ZIFNISVAgTElHSUMgQU5EIEFDVElPTlNcclxuICAgIHBhdXNlKCkge31cclxuIFxyXG4gICAgLy9TRVQgQkVIQVZJT1JcclxuICAgIHNldEJlaGF2aW9yKGFjdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmJlaGF2aW9yLnNldEFjdGlvbnMoYWN0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9DdXJyZW50QWN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuYmVoYXZpb3IuZG9DdXJyZW50QWN0aW9uKCk7XHJcbiAgICB9XHJcbn0iLCIvL0JFSEFWSU9VUiBDTEFTUy4gSEFORExFUyBBQ1RJT04nUyBFWEVDVVRJT05cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmVoYXZpb3Ige1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICAvL3RoaXMgaXMgYW4gYXJyYXkgb2YgZW5lbXkgYWN0aW9ucyBsaWtlIG1vdmUsIHR1cm4sIHN0b3AgZXRjLiBcclxuICAgICAgICAvLyBwcm9wcy5hY3Rpb25zID8gdGhpcy5hY3Rpb25zID0gcHJvcHMuYWN0aW9ucy5zbGljZSgpIDogW107XHJcbiAgICAgICAgaWYgKHByb3BzICYmIHByb3BzLmFjdGlvbnMpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3Rpb25zID0gcHJvcHMuYWN0aW9ucztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGlvbnMgPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudEFjdGlvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25TdGFydFRpbWUgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGlvblN0YXJ0VmFsdWUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vU0VUVElORyBBQ1RJT05TXHJcbiAgICBzZXRBY3Rpb25zKGFjdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmFjdGlvbnMgPSBhY3Rpb25zLnNsaWNlKCk7XHJcbiAgICAgICAgdGhpcy5uZXh0QWN0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQWN0aW9uKGFjdGlvbikge1xyXG4gICAgICAgIHRoaXMuYWN0aW9ucy5wdXNoKGFjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy9ORVhUIEFDVElPTlNcclxuICAgIG5leHRBY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50QWN0aW9uID0gdGhpcy5hY3Rpb25zLnNoaWZ0KCk7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25TdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgIH1cclxuXHJcbiAgICBkb0N1cnJlbnRBY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEFjdGlvbi5kdXJhdGlvbikge1xyXG4gICAgICAgICAgICBsZXQgZHQgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMuYWN0aW9uU3RhcnRUaW1lO1xyXG5cclxuICAgICAgICAgICAgaWYgKGR0ID49IHRoaXMuY3VycmVudEFjdGlvbi5kdXJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0QWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvblN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBY3Rpb24ubWV0aG9kKHRoaXMuY3VycmVudEFjdGlvbi52YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRBY3Rpb24ub25jZSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBY3Rpb24ubWV0aG9kKHRoaXMuY3VycmVudEFjdGlvbi52YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dEFjdGlvbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFjdGlvbi5tZXRob2QodGhpcy5jdXJyZW50QWN0aW9uLnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0gIiwiLy9BTiBBQ1RJT04gQ0xBU1MuIElTIE5FRURFRCBUTyBDT05TVFJVQ1QgQkVIQVZJT1IgQVJSQVlTIEZPUiBBVVRPTUFUSUMgRU5USVRJRVNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5tZXRob2QgPSBwcm9wcy5tZXRob2Q7XHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IHByb3BzLmR1cmF0aW9uO1xyXG4gICAgICAgIHRoaXMub25jZSA9IHByb3BzLm9uY2U7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHByb3BzLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uU3RhcnRUaW1lID0gbnVsbDtcclxuICAgIH1cclxufSAiLCJpbXBvcnQgZ2FtZU9iamVjdHMgZnJvbSAnLi9nYW1lT2JqZWN0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYmplY3RIYW5kbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU9iamVjdChDbGFzcywgcHJvcHMpIHtcclxuICAgICAgICBsZXQgb2JqID0gbmV3IENsYXNzKHByb3BzKTtcclxuICAgICAgICBnYW1lT2JqZWN0cy5wdXNoKG9iaik7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuXHJcbiAgICBnZXRPYmplY3Qobikge1xyXG4gICAgICAgIHJldHVybiBnYW1lT2JqZWN0c1tuXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRPYmplY3RzKCkge1xyXG4gICAgICAgIHJldHVybiBnYW1lT2JqZWN0cztcclxuICAgIH1cclxufSIsImxldCBvYmplY3RzID0gW107XHJcbmV4cG9ydCBkZWZhdWx0IG9iamVjdHM7IiwibGV0IGtleVN0YXRlcyA9IHsgXHJcbiAgICB1cDogZmFsc2UsXHJcbiAgICByaWdodDogZmFsc2UsXHJcbiAgICBkb3duOiBmYWxzZSxcclxuICAgIGxlZnQ6IGZhbHNlLFxyXG4gICAgc3BhY2U6IGZhbHNlXHJcbn07XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSA4NyB8fCBlLmtleUNvZGUgPT09IDM4KSB7XHJcbiAgICAgICAga2V5U3RhdGVzLnVwID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChlLmtleUNvZGUgPT09IDY1IHx8IGUua2V5Q29kZSA9PT0gMzcpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnQSBpcyBwcmVzc2VkIScpO1xyXG4gICAgICAgIGtleVN0YXRlcy5sZWZ0ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChlLmtleUNvZGUgPT09IDgzIHx8IGUua2V5Q29kZSA9PT0gNDApIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnUyBpcyBwcmVzc2VkIScpO1xyXG4gICAgICAgIGtleVN0YXRlcy5kb3duID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChlLmtleUNvZGUgPT09IDY4IHx8IGUua2V5Q29kZSA9PT0gMzkpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnRCBpcyBwcmVzc2VkIScpO1xyXG4gICAgICAgIGtleVN0YXRlcy5yaWdodCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSAzMikge1xyXG4gICAgICAgIGtleVN0YXRlcy5zcGFjZSA9IHRydWU7XHJcbiAgICB9XHJcbn0sIHRydWUpO1xyXG4gICAgXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSA4NyB8fCBlLmtleUNvZGUgPT09IDM4KSB7XHJcbiAgICAgICAga2V5U3RhdGVzLnVwID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSA2NSB8fCBlLmtleUNvZGUgPT09IDM3KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0EgaXMgcHJlc3NlZCEnKTtcclxuICAgICAgICBrZXlTdGF0ZXMubGVmdCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gODMgfHwgZS5rZXlDb2RlID09PSA0MCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdTIGlzIHByZXNzZWQhJyk7XHJcbiAgICAgICAga2V5U3RhdGVzLmRvd24gPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChlLmtleUNvZGUgPT09IDY4IHx8IGUua2V5Q29kZSA9PT0gMzkpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnRCBpcyBwcmVzc2VkIScpO1xyXG4gICAgICAgIGtleVN0YXRlcy5yaWdodCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMzIpIHtcclxuICAgICAgICBrZXlTdGF0ZXMuc3BhY2UgPSBmYWxzZTtcclxuICAgIH1cclxufSwgdHJ1ZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBrZXlTdGF0ZXM7Il0sInNvdXJjZVJvb3QiOiIifQ==