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
            '../../dist/images/enemy.png',
            '../../dist/images/bullet.png'
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
            mediaHandler.addImage(await this.preloadImage(src), src);
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

    addImage(image, src) {
        const imageName = src.match(/(\w+)(?:\.\w+)$/)[1];
        _gameMedia__WEBPACK_IMPORTED_MODULE_0__["default"][imageName] = image;
    }

    getImage(image) {
        return _gameMedia__WEBPACK_IMPORTED_MODULE_0__["default"][image];
    }

    // getImage(n) {
    //     return gameMedia[n];
    // }

    // getImages() {
    //     return gameMedia;
    // }
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let gameMedia = {};
/* harmony default export */ __webpack_exports__["default"] = (gameMedia);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameScene; });
/* harmony import */ var _GameWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _MediaHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _ObjectHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _EmenyShip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _Weapon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);
/* harmony import */ var _keyStates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14);









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
            shotingSpeed: 10,
            image: mediaHandler.getImage('ship'),
            tilesAmount: 1,
            tileSize: 32,
            // weapon: 
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
        if (_keyStates__WEBPACK_IMPORTED_MODULE_7__["default"].space) {
            this.player.shot();
        }

        if (_keyStates__WEBPACK_IMPORTED_MODULE_7__["default"].up) {
            if (_keyStates__WEBPACK_IMPORTED_MODULE_7__["default"].right) {
                this.player.move(45);
            } else if (_keyStates__WEBPACK_IMPORTED_MODULE_7__["default"].left){
                this.player.move(135);
            } else {
                this.player.move(90);
            }
        } else if (_keyStates__WEBPACK_IMPORTED_MODULE_7__["default"].down) {
            if (_keyStates__WEBPACK_IMPORTED_MODULE_7__["default"].right) {
                this.player.move(315);
            } else if (_keyStates__WEBPACK_IMPORTED_MODULE_7__["default"].left){
                this.player.move(225);
            } else {
                this.player.move(270);
            }
        } else if (_keyStates__WEBPACK_IMPORTED_MODULE_7__["default"].left) {
            this.player.move(180);
        } else if (_keyStates__WEBPACK_IMPORTED_MODULE_7__["default"].right){
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ObjectHandler; });
/* harmony import */ var _gameObjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);


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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let objects = [];
/* harmony default export */ __webpack_exports__["default"] = (objects);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ship; });
/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);


class Ship extends _Object__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(props) {
        super(props);
        
        this.hp = props.hp || 100;
        this.speed = props.speed || 10;
        this.turnSpeed = props.turnSpeed || 5;
        this.shotingSpeed = props.shotingSpeed || 1;
        this.lastShot = null;
        this.weapon = props.weapon || null;
    }

    shot() {
        if (!this.lastShot) {
            this.lastShot = performance.now(); 
        }
        let dt = performance.now() - this.lastShot;
        if (dt >= 1000 / this.shotingSpeed) {
            this.weapon.shot();
            this.lastShot = performance.now();
        }
    }
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameObject; });
//a basic game object class. includes methods EVERY object on a screen has
class GameObject {
    constructor(props) {
        this.image = props.image || null;
        this.tilesAmount = props.tilesAmount || 0;
        this.tileSize  = props.tileSize || 0;
        this.currentTile = props.currentTile || 0;
        this.angle = props.angle || 90;
        this.radAngle = this.angle * Math.PI / 180;
        this.positionX = props.positionX || 0;
        this.positionY = props.positionY || 0;
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EmenyShip; });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _Behavior__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);



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
/* 12 */
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
/* 13 */
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

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Weapon; });
/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _ObjectHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);



const objectHandler = new _ObjectHandler__WEBPACK_IMPORTED_MODULE_1__["default"]();

class Weapon extends _Object__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (props) {
        super(props);

        this.damage = props.damage || 1;
        this.speed = props.speed || 10;
    }

    shot() {
        objectHandler.createObject();
    }

    createBullet() {

    }
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvTWVkaWFIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lTWVkaWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1NjZW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9HYW1lV2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9PYmplY3RIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvUGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TaGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0VtZW55U2hpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMva2V5U3RhdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9XZWFwb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDbkNBO0FBQUE7QUFBQTtBQUE4Qjs7QUFFZixtQkFBbUIsK0NBQU07QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUN4QkE7QUFBQTtBQUFBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3ZEQTtBQUFBO0FBQUE7QUFBQTtBQUEwQjtBQUNROztBQUVuQix3QkFBd0IsNkNBQUk7QUFDM0M7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIsaURBQVE7QUFDcEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDdkJBO0FBQUE7QUFBQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNsREE7QUFBQTtBQUFBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNUQTtBQUFBLGlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRWMsd0VBQVMsRTs7Ozs7OztBQ2xEeEI7QUFBQTtBQUFBO0FBQUE7QUFBOEI7QUFDYzs7QUFFNUMsMEJBQTBCLHNEQUFhOztBQUV4QixxQkFBcUIsK0NBQU07QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUnO1xyXG5cclxuLy9HQU1FIElOSVQgPD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXHJcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJyk7XHJcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMpO1xyXG5nYW1lLnN0YXJ0KCk7ICAgICIsImltcG9ydCBNZWRpYUhhbmRsZXIgZnJvbSAnLi9NZWRpYUhhbmRsZXInO1xyXG5pbXBvcnQgR2FtZVNjZW5lIGZyb20gJy4vU2NlbmUnO1xyXG5cclxuY29uc3QgbWVkaWFIYW5kbGVyID0gbmV3IE1lZGlhSGFuZGxlcigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuXHJcbiAgICAgICAgLy9nYW1lIHN0YXRlIChvZmYgPSAwLCBvbiA9IDEsIHBhdXNlID0gMilcclxuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IDA7XHJcblxyXG4gICAgICAgIC8vc2FtcGxlIG9mIGEgc3RhZ2UgY2xhc3NcclxuICAgICAgICB0aGlzLnN0YWdlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvL2dhbWUgaW5pdGlhbGl6YXRpb24gcHJvY2Vzc1xyXG4gICAgYXN5bmMgaW5pdCgpIHtcclxuICAgICAgICBtZWRpYUhhbmRsZXIuc2V0SW1hZ2VTb3VyY2VzKFtcclxuICAgICAgICAgICAgJy4uLy4uL2Rpc3QvaW1hZ2VzL3NoaXAucG5nJyxcclxuICAgICAgICAgICAgJy4uLy4uL2Rpc3QvaW1hZ2VzL2VuZW15LnBuZycsXHJcbiAgICAgICAgICAgICcuLi8uLi9kaXN0L2ltYWdlcy9idWxsZXQucG5nJ1xyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICAvL3ByZWxvYWQgaW1hZ2VzXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0ltYWdlIHByZWxvYWRpbmcuJyk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5wcmVsb2FkQWxsSW1hZ2VzKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0ltYWdlcyBwcmVsb2FkaW5nIGRvbmUuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy90aGlzIG1ldGhvZCB0YWtlcyBhbGwgb2YgdGhlIHNvdXJjZXMgZnJvbSB0aGlzLmltYWdlU291cmNlcyBhbmQgcHJlbG9hZHMgdGhlbVxyXG4gICAgYXN5bmMgcHJlbG9hZEFsbEltYWdlcygpIHtcclxuICAgICAgICBjb25zdCBpbWFnZVNvdXJjZXMgPSBtZWRpYUhhbmRsZXIuZ2V0SW1hZ2VTb3VyY2VzKCk7XHJcblxyXG4gICAgICAgIGZvcihsZXQgc3JjIG9mIGltYWdlU291cmNlcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgTG9hZGluZyAke3NyY30uYCk7XHJcbiAgICAgICAgICAgIG1lZGlhSGFuZGxlci5hZGRJbWFnZShhd2FpdCB0aGlzLnByZWxvYWRJbWFnZShzcmMpLCBzcmMpO1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgLy9wcmVsb2FkcyBhIHNpbmdsZSBpbWFnZSBmcm9tIHNyY1xyXG4gICAgcHJlbG9hZEltYWdlKHNyYykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBJbWFnZSAke2ltZy5zcmN9IGxvYWRlZC5gKVxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShpbWcpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpbWcub25lcnJvciA9ICgpID0+IHJlamVjdCgpO1xyXG4gICAgICAgICAgICBpbWcuc3JjID0gc3JjO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vZ2FtZSBzdGFydFxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PXdpcD09PT09PT09PT09PT09PT09XHJcbiAgICBhc3luYyBzdGFydCgpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLmluaXQoKTtcclxuXHJcbiAgICAgICAgLy9nYW1lIG9uIHN0YXRlXHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSAxO1xyXG5cclxuICAgICAgICAvL2NyZWF0aW9uIG9mIHN0YWdlIDEgPD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBXaVAhXHJcbiAgICAgICAgdGhpcy5zdGFnZSA9IG5ldyBHYW1lU2NlbmUoe1xyXG4gICAgICAgICAgICBuYW1lOiAnQSBUZXN0IEdhbWUgU3RhZ2UnLFxyXG4gICAgICAgICAgICBjYW52YXM6IHRoaXMuY2FudmFzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3RhZ2Uuc3RhcnQoKTtcclxuICAgIH0gIFxyXG59IiwiaW1wb3J0IGdhbWVNZWRpYSBmcm9tICcuL2dhbWVNZWRpYSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYUhhbmRsZXIge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICB0aGlzLmltYWdlU291cmNlcyA9IChwcm9wcyAmJiBwcm9wcy5pbWFnZVNvdXJjZXMuc2xpY2UoKSkgfHwgW107XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SW1hZ2VTb3VyY2VzKHNvdXJjZXNBcnJheSkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VTb3VyY2VzID0gc291cmNlc0FycmF5LnNsaWNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW1hZ2VTb3VyY2VzKCkge1xyXG4gICAgICAgIHJldHVybiAgdGhpcy5pbWFnZVNvdXJjZXM7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkSW1hZ2UoaW1hZ2UsIHNyYykge1xyXG4gICAgICAgIGNvbnN0IGltYWdlTmFtZSA9IHNyYy5tYXRjaCgvKFxcdyspKD86XFwuXFx3KykkLylbMV07XHJcbiAgICAgICAgZ2FtZU1lZGlhW2ltYWdlTmFtZV0gPSBpbWFnZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbWFnZShpbWFnZSkge1xyXG4gICAgICAgIHJldHVybiBnYW1lTWVkaWFbaW1hZ2VdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGdldEltYWdlKG4pIHtcclxuICAgIC8vICAgICByZXR1cm4gZ2FtZU1lZGlhW25dO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGdldEltYWdlcygpIHtcclxuICAgIC8vICAgICByZXR1cm4gZ2FtZU1lZGlhO1xyXG4gICAgLy8gfVxyXG59IiwibGV0IGdhbWVNZWRpYSA9IHt9O1xyXG5leHBvcnQgZGVmYXVsdCBnYW1lTWVkaWE7IiwiaW1wb3J0IEdhbWVXaW5kb3cgZnJvbSAnLi9HYW1lV2luZG93JztcclxuaW1wb3J0IE1lZGlhSGFuZGxlciBmcm9tICcuL01lZGlhSGFuZGxlcic7XHJcbmltcG9ydCBPYmplY3RIYW5kbGVyIGZyb20gJy4vT2JqZWN0SGFuZGxlcic7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInO1xyXG5pbXBvcnQgRW1lbnlTaGlwIGZyb20gJy4vRW1lbnlTaGlwJztcclxuaW1wb3J0IEFjdGlvbiBmcm9tICcuL0FjdGlvbic7XHJcbmltcG9ydCBXZWFwb24gZnJvbSAnLi9XZWFwb24nO1xyXG5pbXBvcnQga2V5U3RhdGVzIGZyb20gJy4va2V5U3RhdGVzJztcclxuXHJcbmNvbnN0IG1lZGlhSGFuZGxlciA9IG5ldyBNZWRpYUhhbmRsZXIoKTtcclxuY29uc3Qgb2JqZWN0SGFuZGxlciA9IG5ldyBPYmplY3RIYW5kbGVyKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU2NlbmUge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBwcm9wcy5uYW1lO1xyXG4gICAgICAgIHRoaXMuZ2FtZVdpbmRvdyA9IG5ldyBHYW1lV2luZG93KHByb3BzLmNhbnZhcyk7XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0SWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZnBzID0gNjA7XHJcbiAgICAgICAgdGhpcy50cHMgPSAxMjtcclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLmxhc3RUaWxlVGltZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5mcmFtZURlbGF5ID0gMTAwMCAvIHRoaXMuZnBzO1xyXG4gICAgICAgIHRoaXMudGlsZURlbGF5ID0gMTAwMCAvIHRoaXMudHBzO1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdFNjYWxlID0gMTtcclxuICAgICAgICB0aGlzLm9iamVjdHMgPSBvYmplY3RIYW5kbGVyLmdldE9iamVjdHMoKTtcclxuICAgICAgICB0aGlzLmxheWVycyA9IHtcclxuICAgICAgICAgICAgb3ZlcmxheTogW10sXHJcbiAgICAgICAgICAgIGZyb250OiBbXSxcclxuICAgICAgICAgICAgbWFpbjogW10sXHJcbiAgICAgICAgICAgIGJhY2s6IFtdLFxyXG4gICAgICAgICAgICBiYWNrYnJvdW5kOiBbXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5sYXllcnNBcnJheSA9IFtdO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gJyMxMTExMTEnO1xyXG5cclxuICAgICAgICB0aGlzLmZyYW1lID0gdGhpcy5mcmFtZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vSU5JVElBTElaQVRJT04gPD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgYXN5bmMgaW5pdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgU2NlbmUgXCIkeyB0aGlzLm5hbWUgfVwiIGxvYWRpbmcuYCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIG9iamVjdHMuJyk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5jcmVhdGVTY2VuZU9iamVjdHMoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgb2JqZWN0cyBkb25lLicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBTY2VuZSBcIiR7IHRoaXMubmFtZSB9XCIgbG9hZGVkLmApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vT0JKRUNUIENSRUFUSU9OIDw9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNyZWF0ZVNjZW5lT2JqZWN0cygpIHtcclxuICAgICAgICB0aGlzLnBsYXllciA9IG9iamVjdEhhbmRsZXIuY3JlYXRlT2JqZWN0KFBsYXllciwge1xyXG4gICAgICAgICAgICBocDogMTAwLFxyXG4gICAgICAgICAgICBzcGVlZDogMTAsXHJcbiAgICAgICAgICAgIHNob3RpbmdTcGVlZDogMTAsXHJcbiAgICAgICAgICAgIGltYWdlOiBtZWRpYUhhbmRsZXIuZ2V0SW1hZ2UoJ3NoaXAnKSxcclxuICAgICAgICAgICAgdGlsZXNBbW91bnQ6IDEsXHJcbiAgICAgICAgICAgIHRpbGVTaXplOiAzMixcclxuICAgICAgICAgICAgLy8gd2VhcG9uOiBcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBsYXllci5wb3NpdGlvblggPSB0aGlzLmdhbWVXaW5kb3cud2lkdGggLyAyIC0gdGhpcy5wbGF5ZXIudGlsZVNpemUgLyAyO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnBvc2l0aW9uWSA9IHRoaXMuZ2FtZVdpbmRvdy5oZWlnaHQgLyAyIC0gdGhpcy5wbGF5ZXIudGlsZVNpemUgLyAyO1xyXG4gICAgICAgIHRoaXMucHVzaFRvTGF5ZXIodGhpcy5wbGF5ZXIsICdtYWluJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wbGF5ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vc2V0cyBhIHJlbmRlciBsYXllclxyXG4gICAgcHVzaFRvTGF5ZXIob2JqLCBsYXllcikge1xyXG4gICAgICAgIHRoaXMubGF5ZXJzW2xheWVyXS5wdXNoKG9iaik7XHJcbiAgICAgICAgdGhpcy5nZXRMYXllcnNBcnJheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdHJhbnNmb3JtcyBsYXllcnMgb2JqZWN0IGludG8gc2ltcGxlIGFycmF5IHRpIHNpbXBsaWZ5IHJlbmRlcmluZ1xyXG4gICAgZ2V0TGF5ZXJzQXJyYXkoKSB7XHJcbiAgICAgICAgdGhpcy5sYXllcnNBcnJheSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGxheWVyc1ZhbHVlcyA9IE9iamVjdC52YWx1ZXModGhpcy5sYXllcnMpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBsYXllcnNWYWx1ZXMubGVuZ3RoIC0gMTsgaSA+PTA7IGktLSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBvYmogb2YgbGF5ZXJzVmFsdWVzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxheWVyc0FycmF5LnB1c2gob2JqKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL3N0YXJ0IHNjZW5lXHJcbiAgICBhc3luYyBzdGFydCgpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLmluaXQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnR2FtZSBzdGFydGVkLicpXHJcblxyXG4gICAgICAgIC8vIGdhbWUgc3RhcnQgdGltZVxyXG4gICAgICAgIHRoaXMuc3RhcnRTY2VuZUxvb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydFNjZW5lTG9vcCgpIHtcclxuICAgICAgICAvLyBnYW1lIHN0YXJ0IHRpbWVcclxuICAgICAgICB0aGlzLmxhc3QgPSB0aGlzLmxhc3RUaWxlVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHRoaXMucmVxdWVzdElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZnJhbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vTE9HSUMgPD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMua2V5SGFuZGxlcigpO1xyXG4gICAgICAgIC8vIGZvciAobGV0IGVuZW15IG9mIHRoaXMuZW5lbWllcykge1xyXG4gICAgICAgIC8vICAgICBlbmVteS5kb0N1cnJlbnRBY3Rpb24oKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vQU5JTUFUSU9OIDw9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGZyYW1lKCkge1xyXG4gICAgICAgIGxldCBkdCA9IHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5sYXN0VGltZTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoZHQgPCB0aGlzLmZyYW1lRGVsYXkpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0SWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5mcmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVGlsZXModGhpcy5vYmplY3RzKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmxhc3RUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZnJhbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoVGlsZXMob2JqZWN0cykge1xyXG4gICAgICAgIGxldCBkdCA9IHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5sYXN0VGlsZVRpbWU7XHJcbiAgICAgICAgaWYgKGR0ID4gdGhpcy50aWxlRGVsYXkpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgb2JqIG9mIG9iamVjdHMpIHtcclxuICAgICAgICAgICAgICAgIG9iai5uZXh0VGlsZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbGVUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vUkVOREVSIDw9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmZpbGxGaWVsZCgpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBvYmogb2YgdGhpcy5sYXllcnNBcnJheSkge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdPYmplY3Qob2JqKTtcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG5cclxuICAgIC8vZHJhd3MgYSBzaW5nbGUgb2JqZWN0XHJcbiAgICBkcmF3T2JqZWN0KG9iaiwgc2NhbGUpIHtcclxuICAgICAgICB0aGlzLmdhbWVXaW5kb3cuY3R4LnNhdmUoKTtcclxuICAgICAgICB0aGlzLmdhbWVXaW5kb3cuY3R4LnRyYW5zbGF0ZShvYmoucG9zaXRpb25YICArIG9iai50aWxlU2l6ZSAvIDIsIG9iai5wb3NpdGlvblkgKyBvYmoudGlsZVNpemUgLyAyKTtcclxuICAgICAgICB0aGlzLmdhbWVXaW5kb3cuY3R4LnJvdGF0ZSgtKG9iai5hbmdsZSAtIDkwKSAqIE1hdGguUEkgLyAxODApO1xyXG4gICAgICAgIGlmIChzY2FsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVXaW5kb3cuY3R4LmRyYXdJbWFnZShvYmouaW1hZ2UsIG9iai5jdXJyZW50VGlsZSAqIG9iai50aWxlU2l6ZSwgMCwgb2JqLnRpbGVTaXplLCBvYmoudGlsZVNpemUsIG9iai5wb3NpdGlvblgsIG9iai5wb3NpdGlvblksIG9iai50aWxlU2l6ZSAqIHNjYWxlLCBvYmoudGlsZVNpemUgKiBzY2FsZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lV2luZG93LmN0eC5kcmF3SW1hZ2Uob2JqLmltYWdlLCBvYmouY3VycmVudFRpbGUgKiBvYmoudGlsZVNpemUsIDAsIG9iai50aWxlU2l6ZSwgb2JqLnRpbGVTaXplLCAtb2JqLnRpbGVTaXplIC8gMiwgLW9iai50aWxlU2l6ZSAvIDIsIG9iai50aWxlU2l6ZSwgb2JqLnRpbGVTaXplKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nYW1lV2luZG93LmN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsbEZpZWxkKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVdpbmRvdy5jdHguZmlsbFN0eWxlID0gdGhpcy5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgdGhpcy5nYW1lV2luZG93LmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmdhbWVXaW5kb3cud2lkdGgsIHRoaXMuZ2FtZVdpbmRvdy5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGtleUhhbmRsZXIoKSB7XHJcbiAgICAgICAgaWYgKGtleVN0YXRlcy5zcGFjZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zaG90KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoa2V5U3RhdGVzLnVwKSB7XHJcbiAgICAgICAgICAgIGlmIChrZXlTdGF0ZXMucmlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmUoNDUpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleVN0YXRlcy5sZWZ0KXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmUoMTM1KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmUoOTApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChrZXlTdGF0ZXMuZG93bikge1xyXG4gICAgICAgICAgICBpZiAoa2V5U3RhdGVzLnJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlKDMxNSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5U3RhdGVzLmxlZnQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZSgyMjUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZSgyNzApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChrZXlTdGF0ZXMubGVmdCkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlKDE4MCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChrZXlTdGF0ZXMucmlnaHQpe1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlKDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuY2hlY2tCb3JkZXJzKHRoaXMuZ2FtZVdpbmRvdyk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xyXG4vLyAgICAgdGhpcy5lbmVtaWVzLnB1c2godGhpcy5jcmVhdGVPYmplY3QoRW1lbnlTaGlwLCB7XHJcbi8vICAgICAgICAgaHA6IDEwMCxcclxuLy8gICAgICAgICBzcGVlZDoyLFxyXG4vLyAgICAgICAgIHBvc2l0aW9uWDogaSAqIDY0LFxyXG4vLyAgICAgICAgIHBvc2l0aW9uWTogMCxcclxuLy8gICAgICAgICBpbWFnZTogbWVkaWFIYW5kbGVyLmdldEltYWdlKDEpLFxyXG4vLyAgICAgICAgIHRpbGVzQW1vdW50OiAzLFxyXG4vLyAgICAgICAgIHRpbGVTaXplOiA2NCxcclxuLy8gICAgIH0pKTtcclxuLy8gICAgIHRoaXMucHVzaFRvTGF5ZXIodGhpcy5lbmVtaWVzW2ldLCAnYmFjaycpO1xyXG5cclxuLy8gICAgIHRoaXMuZW5lbWllc1tpXS5zZXRCZWhhdmlvcihbXHJcbi8vICAgICAgICAgbmV3IEFjdGlvbih7XHJcbi8vICAgICAgICAgICAgIG1ldGhvZDogdGhpcy5lbmVtaWVzW2ldLm1vdmUsXHJcbi8vICAgICAgICAgICAgIHZhbHVlOiAnZG93bicsXHJcbi8vICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXHJcbi8vICAgICAgICAgfSksXHJcbi8vICAgICAgICAgbmV3IEFjdGlvbih7XHJcbi8vICAgICAgICAgICAgIG1ldGhvZDogdGhpcy5lbmVtaWVzW2ldLnBhdXNlLFxyXG4vLyAgICAgICAgICAgICBkdXJhdGlvbjogNTAwXHJcbi8vICAgICAgICAgfSksXHJcbi8vICAgICAgICAgbmV3IEFjdGlvbih7XHJcbi8vICAgICAgICAgICAgIG1ldGhvZDogdGhpcy5lbmVtaWVzW2ldLm1vdmUsXHJcbi8vICAgICAgICAgICAgIHZhbHVlOiAndXAnLFxyXG4vLyAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMFxyXG4vLyAgICAgICAgIH0pLFxyXG4vLyAgICAgICAgIG5ldyBBY3Rpb24oe1xyXG4vLyAgICAgICAgICAgICBtZXRob2Q6IHRoaXMuZW5lbWllc1tpXS5zZXRTcGVlZCxcclxuLy8gICAgICAgICAgICAgdmFsdWU6IDYsXHJcbi8vICAgICAgICAgICAgIG9uY2U6IHRydWVcclxuLy8gICAgICAgICB9KSxcclxuLy8gICAgICAgICBuZXcgQWN0aW9uKHtcclxuLy8gICAgICAgICAgICAgbWV0aG9kOiB0aGlzLmVuZW1pZXNbaV0ubW92ZSxcclxuLy8gICAgICAgICAgICAgdmFsdWU6ICdkb3duJyxcclxuLy8gICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcclxuLy8gICAgICAgICB9KSxcclxuLy8gICAgICAgICBuZXcgQWN0aW9uKHtcclxuLy8gICAgICAgICAgICAgbWV0aG9kOiB0aGlzLmVuZW1pZXNbaV0ucGF1c2UsXHJcbi8vICAgICAgICAgfSksXHJcbi8vICAgICBdKTtcclxuXHJcbi8vICAgICBjb25zb2xlLmxvZyh0aGlzLmVuZW1pZXNbaV0pO1xyXG4vLyB9IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVdpbmRvdyB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuY2FudmFzLndpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5jYW52YXMuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMudG9wID0gMDtcclxuICAgICAgICB0aGlzLnJpZ2h0ID0gdGhpcy5jYW52YXMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5ib3R0b20gPSB0aGlzLmNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5sZWZ0ID0gMDtcclxuICAgIH1cclxufSIsImltcG9ydCBnYW1lT2JqZWN0cyBmcm9tICcuL2dhbWVPYmplY3RzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdEhhbmRsZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlT2JqZWN0KENsYXNzLCBwcm9wcykge1xyXG4gICAgICAgIGxldCBvYmogPSBuZXcgQ2xhc3MocHJvcHMpO1xyXG4gICAgICAgIGdhbWVPYmplY3RzLnB1c2gob2JqKTtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE9iamVjdChuKSB7XHJcbiAgICAgICAgcmV0dXJuIGdhbWVPYmplY3RzW25dO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE9iamVjdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGdhbWVPYmplY3RzO1xyXG4gICAgfVxyXG59IiwibGV0IG9iamVjdHMgPSBbXTtcclxuZXhwb3J0IGRlZmF1bHQgb2JqZWN0czsiLCIvKmEgY2xhc3Mgb2YgcGxheWVyIGNoYXJhY3Rlci4gYSBwbGF5ZXIgaXMgYSBTSElQLCBzbyBpdCBleHRlbmRzIGFwcHJvcHJpYXRlIGNsYXNzXHJcbnRvIGNyZWF0ZSBhIHBsYXllciwgeW91IG5lZWQgdGkgcGFzcyBQUk9QUyB2YXJpYWJsZVxyXG5leGFtcGxlXHJcbntcclxuICAgIGhwOiAxMDAsXHJcbiAgICBzcGVlZDogMTAsXHJcbiAgICBwb3NpdGlvblg6IDEwMCxcclxuICAgIHBvc2l0aW9ueTogMjAwLFxyXG4gICAgaW1hZ2U6IGltZyxcclxuICAgIHRpbGVzQW1vdW50OiAyLFxyXG4gICAgdGlsZUhlaWdodEwgNjRcclxuICAgIGN1cnJlbnRUaWxlOiAwOyBcclxufVxyXG4qL1xyXG5pbXBvcnQgU2hpcCBmcm9tICcuL1NoaXAnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgU2hpcCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0JvcmRlcnMocmVjdGFuZ2xlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb25ZIDwgcmVjdGFuZ2xlLnRvcCkge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uWSA9IHJlY3RhbmdsZS50b3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uWSA+IHJlY3RhbmdsZS5ib3R0b20gLSB0aGlzLnRpbGVTaXplKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25ZID0gcmVjdGFuZ2xlLmJvdHRvbSAtIHRoaXMudGlsZVNpemU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uWCA8IHJlY3RhbmdsZS5sZWZ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25YID0gcmVjdGFuZ2xlLmxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uWCA+IHJlY3RhbmdsZS5yaWdodCAtIHRoaXMudGlsZVNpemUpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvblggPSByZWN0YW5nbGUucmlnaHQgLSB0aGlzLnRpbGVTaXplO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBPYmplY3QgZnJvbSAnLi9PYmplY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCBleHRlbmRzIE9iamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmhwID0gcHJvcHMuaHAgfHwgMTAwO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBwcm9wcy5zcGVlZCB8fCAxMDtcclxuICAgICAgICB0aGlzLnR1cm5TcGVlZCA9IHByb3BzLnR1cm5TcGVlZCB8fCA1O1xyXG4gICAgICAgIHRoaXMuc2hvdGluZ1NwZWVkID0gcHJvcHMuc2hvdGluZ1NwZWVkIHx8IDE7XHJcbiAgICAgICAgdGhpcy5sYXN0U2hvdCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy53ZWFwb24gPSBwcm9wcy53ZWFwb24gfHwgbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzaG90KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5sYXN0U2hvdCkge1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RTaG90ID0gcGVyZm9ybWFuY2Uubm93KCk7IFxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZHQgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMubGFzdFNob3Q7XHJcbiAgICAgICAgaWYgKGR0ID49IDEwMDAgLyB0aGlzLnNob3RpbmdTcGVlZCkge1xyXG4gICAgICAgICAgICB0aGlzLndlYXBvbi5zaG90KCk7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFNob3QgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvL2EgYmFzaWMgZ2FtZSBvYmplY3QgY2xhc3MuIGluY2x1ZGVzIG1ldGhvZHMgRVZFUlkgb2JqZWN0IG9uIGEgc2NyZWVuIGhhc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lT2JqZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IHByb3BzLmltYWdlIHx8IG51bGw7XHJcbiAgICAgICAgdGhpcy50aWxlc0Ftb3VudCA9IHByb3BzLnRpbGVzQW1vdW50IHx8IDA7XHJcbiAgICAgICAgdGhpcy50aWxlU2l6ZSAgPSBwcm9wcy50aWxlU2l6ZSB8fCAwO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbGUgPSBwcm9wcy5jdXJyZW50VGlsZSB8fCAwO1xyXG4gICAgICAgIHRoaXMuYW5nbGUgPSBwcm9wcy5hbmdsZSB8fCA5MDtcclxuICAgICAgICB0aGlzLnJhZEFuZ2xlID0gdGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODA7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblggPSBwcm9wcy5wb3NpdGlvblggfHwgMDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uWSA9IHByb3BzLnBvc2l0aW9uWSB8fCAwO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoYW5nbGUpIHtcclxuICAgICAgICBjb25zdCByYWRBbmdsZSA9IGFuZ2xlICogTWF0aC5QSSAvIDE4MDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uWCArPSBNYXRoLnJvdW5kKE1hdGguY29zKHJhZEFuZ2xlKSAqIHRoaXMuc3BlZWQpO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25ZIC09IE1hdGgucm91bmQoTWF0aC5zaW4ocmFkQW5nbGUpICogdGhpcy5zcGVlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgdHVybihkaXJlY3Rpb24pIHtcclxuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlICdyaWdodCc6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5nbGUgLT0gdGhpcy50dXJuU3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuYW5nbGUgPD0gMCApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuZ2xlID0gMzYwIC0gdGhpcy5hbmdsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucmFkQW5nbGUgPSB0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuZ2xlICs9IHRoaXMudHVyblNwZWVkO1xyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLmFuZ2xlID49IDM2MCApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuZ2xlID0gdGhpcy5hbmdsZSAtIDM2MDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucmFkQW5nbGUgPSB0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFNwZWVkKHNwZWVkKSB7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHRUaWxlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaWxlIDwgKHRoaXMudGlsZXNBbW91bnQgLSAxKSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUaWxlKys7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGlsZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEltYWdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9TaGlwJztcclxuaW1wb3J0IEJlaGF2aW9yIGZyb20gJy4vQmVoYXZpb3InO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1lbnlTaGlwIGV4dGVuZHMgU2hpcCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5wYXVzZSA9IHRoaXMucGF1c2UuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5iZWhhdmlvciA9IG5ldyBCZWhhdmlvcigpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL0VORU1ZIFNISVAgTElHSUMgQU5EIEFDVElPTlNcclxuICAgIHBhdXNlKCkge31cclxuIFxyXG4gICAgLy9TRVQgQkVIQVZJT1JcclxuICAgIHNldEJlaGF2aW9yKGFjdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmJlaGF2aW9yLnNldEFjdGlvbnMoYWN0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9DdXJyZW50QWN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuYmVoYXZpb3IuZG9DdXJyZW50QWN0aW9uKCk7XHJcbiAgICB9XHJcbn0iLCIvL0JFSEFWSU9VUiBDTEFTUy4gSEFORExFUyBBQ1RJT04nUyBFWEVDVVRJT05cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmVoYXZpb3Ige1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICAvL3RoaXMgaXMgYW4gYXJyYXkgb2YgZW5lbXkgYWN0aW9ucyBsaWtlIG1vdmUsIHR1cm4sIHN0b3AgZXRjLiBcclxuICAgICAgICAvLyBwcm9wcy5hY3Rpb25zID8gdGhpcy5hY3Rpb25zID0gcHJvcHMuYWN0aW9ucy5zbGljZSgpIDogW107XHJcbiAgICAgICAgaWYgKHByb3BzICYmIHByb3BzLmFjdGlvbnMpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3Rpb25zID0gcHJvcHMuYWN0aW9ucztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGlvbnMgPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudEFjdGlvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25TdGFydFRpbWUgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGlvblN0YXJ0VmFsdWUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vU0VUVElORyBBQ1RJT05TXHJcbiAgICBzZXRBY3Rpb25zKGFjdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmFjdGlvbnMgPSBhY3Rpb25zLnNsaWNlKCk7XHJcbiAgICAgICAgdGhpcy5uZXh0QWN0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQWN0aW9uKGFjdGlvbikge1xyXG4gICAgICAgIHRoaXMuYWN0aW9ucy5wdXNoKGFjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy9ORVhUIEFDVElPTlNcclxuICAgIG5leHRBY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50QWN0aW9uID0gdGhpcy5hY3Rpb25zLnNoaWZ0KCk7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25TdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgIH1cclxuXHJcbiAgICBkb0N1cnJlbnRBY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEFjdGlvbi5kdXJhdGlvbikge1xyXG4gICAgICAgICAgICBsZXQgZHQgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMuYWN0aW9uU3RhcnRUaW1lO1xyXG5cclxuICAgICAgICAgICAgaWYgKGR0ID49IHRoaXMuY3VycmVudEFjdGlvbi5kdXJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0QWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvblN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBY3Rpb24ubWV0aG9kKHRoaXMuY3VycmVudEFjdGlvbi52YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRBY3Rpb24ub25jZSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBY3Rpb24ubWV0aG9kKHRoaXMuY3VycmVudEFjdGlvbi52YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dEFjdGlvbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFjdGlvbi5tZXRob2QodGhpcy5jdXJyZW50QWN0aW9uLnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0gIiwiLy9BTiBBQ1RJT04gQ0xBU1MuIElTIE5FRURFRCBUTyBDT05TVFJVQ1QgQkVIQVZJT1IgQVJSQVlTIEZPUiBBVVRPTUFUSUMgRU5USVRJRVNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5tZXRob2QgPSBwcm9wcy5tZXRob2Q7XHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IHByb3BzLmR1cmF0aW9uO1xyXG4gICAgICAgIHRoaXMub25jZSA9IHByb3BzLm9uY2U7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHByb3BzLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uU3RhcnRUaW1lID0gbnVsbDtcclxuICAgIH1cclxufSAiLCJsZXQga2V5U3RhdGVzID0geyBcclxuICAgIHVwOiBmYWxzZSxcclxuICAgIHJpZ2h0OiBmYWxzZSxcclxuICAgIGRvd246IGZhbHNlLFxyXG4gICAgbGVmdDogZmFsc2UsXHJcbiAgICBzcGFjZTogZmFsc2VcclxufTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcclxuICAgIGlmIChlLmtleUNvZGUgPT09IDg3IHx8IGUua2V5Q29kZSA9PT0gMzgpIHtcclxuICAgICAgICBrZXlTdGF0ZXMudXAgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gNjUgfHwgZS5rZXlDb2RlID09PSAzNykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdBIGlzIHByZXNzZWQhJyk7XHJcbiAgICAgICAga2V5U3RhdGVzLmxlZnQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gODMgfHwgZS5rZXlDb2RlID09PSA0MCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdTIGlzIHByZXNzZWQhJyk7XHJcbiAgICAgICAga2V5U3RhdGVzLmRvd24gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gNjggfHwgZS5rZXlDb2RlID09PSAzOSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdEIGlzIHByZXNzZWQhJyk7XHJcbiAgICAgICAga2V5U3RhdGVzLnJpZ2h0ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChlLmtleUNvZGUgPT09IDMyKSB7XHJcbiAgICAgICAga2V5U3RhdGVzLnNwYWNlID0gdHJ1ZTtcclxuICAgIH1cclxufSwgdHJ1ZSk7XHJcbiAgICBcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcclxuICAgIGlmIChlLmtleUNvZGUgPT09IDg3IHx8IGUua2V5Q29kZSA9PT0gMzgpIHtcclxuICAgICAgICBrZXlTdGF0ZXMudXAgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChlLmtleUNvZGUgPT09IDY1IHx8IGUua2V5Q29kZSA9PT0gMzcpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnQSBpcyBwcmVzc2VkIScpO1xyXG4gICAgICAgIGtleVN0YXRlcy5sZWZ0ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSA4MyB8fCBlLmtleUNvZGUgPT09IDQwKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1MgaXMgcHJlc3NlZCEnKTtcclxuICAgICAgICBrZXlTdGF0ZXMuZG93biA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gNjggfHwgZS5rZXlDb2RlID09PSAzOSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdEIGlzIHByZXNzZWQhJyk7XHJcbiAgICAgICAga2V5U3RhdGVzLnJpZ2h0ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSAzMikge1xyXG4gICAgICAgIGtleVN0YXRlcy5zcGFjZSA9IGZhbHNlO1xyXG4gICAgfVxyXG59LCB0cnVlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGtleVN0YXRlczsiLCJpbXBvcnQgT2JqZWN0IGZyb20gJy4vT2JqZWN0JztcclxuaW1wb3J0IE9iamVjdEhhbmRsZXIgZnJvbSAnLi9PYmplY3RIYW5kbGVyJztcclxuXHJcbmNvbnN0IG9iamVjdEhhbmRsZXIgPSBuZXcgT2JqZWN0SGFuZGxlcigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VhcG9uIGV4dGVuZHMgT2JqZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5kYW1hZ2UgPSBwcm9wcy5kYW1hZ2UgfHwgMTtcclxuICAgICAgICB0aGlzLnNwZWVkID0gcHJvcHMuc3BlZWQgfHwgMTA7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdCgpIHtcclxuICAgICAgICBvYmplY3RIYW5kbGVyLmNyZWF0ZU9iamVjdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUJ1bGxldCgpIHtcclxuXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9