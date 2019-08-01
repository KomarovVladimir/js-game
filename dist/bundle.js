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
            '../../dist/images/bullet.png',
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
        this.gameWindow = new _GameWindow__WEBPACK_IMPORTED_MODULE_0__["default"]({
            canvas: props.canvas,
            width: 400,
            height: 600
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
        const basicWeapon = new _Weapon__WEBPACK_IMPORTED_MODULE_6__["default"]({
            speed: 20,
            image: mediaHandler.getImage('bullet'),
            tileWidth: 1,
            tileHeight: 3
        });

        this.player = objectHandler.createObject(_Player__WEBPACK_IMPORTED_MODULE_3__["default"], {
            hp: 100,
            speed: 5,
            shotingSpeed: 10,
            image: mediaHandler.getImage('ship'),
            tilesAmount: 1,
            tileWidth: 32,
            tileHeight: 32,
            weapon: basicWeapon
        });
        this.player.positionX = this.gameWindow.width / 2 - this.player.tileWidth / 2;
        this.player.positionY = this.gameWindow.height / 2 - this.player.tileHeight / 2;
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
            obj.draw(this.gameWindow.ctx, 1/this.gameWindow.scale);
        }
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
    constructor(props) {
        this.canvas = props.canvas;
        this.ctx = this.canvas.getContext('2d');
        this.width = props.width;
        this.height = props.height;
        this.top = 0;
        this.right = props.width;
        this.bottom = props.height;
        this.left = 0;
        this.scale = props.scale || 1;

        if (props.scale) {
            this.scaleContext(this.scale);
        }
    }

    scaleContext(scale) {
        this.ctx.scale(scale, scale);
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
        if (this.positionY > rectangle.bottom - this.tileHeight) {
            this.positionY = rectangle.bottom - this.tileHeight;
        }
        if (this.positionX < rectangle.left) {
            this.positionX = rectangle.left;
        }
        if (this.positionX > rectangle.right - this.tileWidth) {
            this.positionX = rectangle.right - this.tileWidth;
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
        this.tileWidth = props.tileWidth || 0;
        this.tileHeight = props.tileHeight || 0;
        this.currentTile = props.currentTile || 0;
        this.speed = props.speed || 10;
        this.turnSpeed = props.turnSpeed || 5;
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

    draw(ctx, scale) {
        ctx.save();
        ctx.translate(this.positionX  + this.tileWidth / 2, this.positionY + this.tileHeight / 2);
        ctx.rotate(-(this.angle - 90) * Math.PI / 180);
        ctx.drawImage(this.image, this.currentTile * this.tileWidth, 0, this.tileWidth, this.tileHeight, -this.tileWidth / 2, -this.tileHeight / 2, this.tileWidth, this.tileHeight);
        ctx.restore();
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
        // objectHandler.createObject();
    }

    createBullet() {

    }
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvTWVkaWFIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lTWVkaWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1NjZW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9HYW1lV2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9PYmplY3RIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvUGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TaGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0VtZW55U2hpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMva2V5U3RhdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9XZWFwb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDbERBO0FBQUE7QUFBQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDVEE7QUFBQSxpQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVjLHdFQUFTLEU7Ozs7Ozs7QUNsRHhCO0FBQUE7QUFBQTtBQUFBO0FBQThCO0FBQ2M7O0FBRTVDLDBCQUEwQixzREFBYTs7QUFFeEIscUJBQXFCLCtDQUFNO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lJztcclxuXHJcbi8vR0FNRSBJTklUIDw9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFxyXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpO1xyXG5jb25zdCBnYW1lID0gbmV3IEdhbWUoY2FudmFzKTtcclxuZ2FtZS5zdGFydCgpOyAgICAiLCJpbXBvcnQgTWVkaWFIYW5kbGVyIGZyb20gJy4vTWVkaWFIYW5kbGVyJztcclxuaW1wb3J0IEdhbWVTY2VuZSBmcm9tICcuL1NjZW5lJztcclxuXHJcbmNvbnN0IG1lZGlhSGFuZGxlciA9IG5ldyBNZWRpYUhhbmRsZXIoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xyXG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcblxyXG4gICAgICAgIC8vZ2FtZSBzdGF0ZSAob2ZmID0gMCwgb24gPSAxLCBwYXVzZSA9IDIpXHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSAwO1xyXG5cclxuICAgICAgICAvL3NhbXBsZSBvZiBhIHN0YWdlIGNsYXNzXHJcbiAgICAgICAgdGhpcy5zdGFnZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLy9nYW1lIGluaXRpYWxpemF0aW9uIHByb2Nlc3NcclxuICAgIGFzeW5jIGluaXQoKSB7XHJcbiAgICAgICAgbWVkaWFIYW5kbGVyLnNldEltYWdlU291cmNlcyhbXHJcbiAgICAgICAgICAgICcuLi8uLi9kaXN0L2ltYWdlcy9zaGlwLnBuZycsXHJcbiAgICAgICAgICAgICcuLi8uLi9kaXN0L2ltYWdlcy9lbmVteS5wbmcnLFxyXG4gICAgICAgICAgICAnLi4vLi4vZGlzdC9pbWFnZXMvYnVsbGV0LnBuZycsXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIC8vcHJlbG9hZCBpbWFnZXNcclxuICAgICAgICBjb25zb2xlLmxvZygnSW1hZ2UgcHJlbG9hZGluZy4nKTtcclxuICAgICAgICBhd2FpdCB0aGlzLnByZWxvYWRBbGxJbWFnZXMoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnSW1hZ2VzIHByZWxvYWRpbmcgZG9uZS4nKTtcclxuICAgIH1cclxuXHJcbiAgICAvL3RoaXMgbWV0aG9kIHRha2VzIGFsbCBvZiB0aGUgc291cmNlcyBmcm9tIHRoaXMuaW1hZ2VTb3VyY2VzIGFuZCBwcmVsb2FkcyB0aGVtXHJcbiAgICBhc3luYyBwcmVsb2FkQWxsSW1hZ2VzKCkge1xyXG4gICAgICAgIGNvbnN0IGltYWdlU291cmNlcyA9IG1lZGlhSGFuZGxlci5nZXRJbWFnZVNvdXJjZXMoKTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBzcmMgb2YgaW1hZ2VTb3VyY2VzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBMb2FkaW5nICR7c3JjfS5gKTtcclxuICAgICAgICAgICAgbWVkaWFIYW5kbGVyLmFkZEltYWdlKGF3YWl0IHRoaXMucHJlbG9hZEltYWdlKHNyYyksIHNyYyk7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICAvL3ByZWxvYWRzIGEgc2luZ2xlIGltYWdlIGZyb20gc3JjXHJcbiAgICBwcmVsb2FkSW1hZ2Uoc3JjKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEltYWdlICR7aW1nLnNyY30gbG9hZGVkLmApXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGltZyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGltZy5vbmVycm9yID0gKCkgPT4gcmVqZWN0KCk7XHJcbiAgICAgICAgICAgIGltZy5zcmMgPSBzcmM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9nYW1lIHN0YXJ0XHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09d2lwPT09PT09PT09PT09PT09PT1cclxuICAgIGFzeW5jIHN0YXJ0KCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuaW5pdCgpO1xyXG5cclxuICAgICAgICAvL2dhbWUgb24gc3RhdGVcclxuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IDE7XHJcblxyXG4gICAgICAgIC8vY3JlYXRpb24gb2Ygc3RhZ2UgMSA8PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFdpUCFcclxuICAgICAgICB0aGlzLnN0YWdlID0gbmV3IEdhbWVTY2VuZSh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdBIFRlc3QgR2FtZSBTdGFnZScsXHJcbiAgICAgICAgICAgIGNhbnZhczogdGhpcy5jYW52YXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zdGFnZS5zdGFydCgpO1xyXG4gICAgfSAgXHJcbn0iLCJpbXBvcnQgZ2FtZU1lZGlhIGZyb20gJy4vZ2FtZU1lZGlhJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhSGFuZGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VTb3VyY2VzID0gKHByb3BzICYmIHByb3BzLmltYWdlU291cmNlcy5zbGljZSgpKSB8fCBbXTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJbWFnZVNvdXJjZXMoc291cmNlc0FycmF5KSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZVNvdXJjZXMgPSBzb3VyY2VzQXJyYXkuc2xpY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbWFnZVNvdXJjZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuICB0aGlzLmltYWdlU291cmNlcztcclxuICAgIH1cclxuXHJcbiAgICBhZGRJbWFnZShpbWFnZSwgc3JjKSB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2VOYW1lID0gc3JjLm1hdGNoKC8oXFx3KykoPzpcXC5cXHcrKSQvKVsxXTtcclxuICAgICAgICBnYW1lTWVkaWFbaW1hZ2VOYW1lXSA9IGltYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEltYWdlKGltYWdlKSB7XHJcbiAgICAgICAgcmV0dXJuIGdhbWVNZWRpYVtpbWFnZV07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0SW1hZ2Uobikge1xyXG4gICAgLy8gICAgIHJldHVybiBnYW1lTWVkaWFbbl07XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gZ2V0SW1hZ2VzKCkge1xyXG4gICAgLy8gICAgIHJldHVybiBnYW1lTWVkaWE7XHJcbiAgICAvLyB9XHJcbn0iLCJsZXQgZ2FtZU1lZGlhID0ge307XHJcbmV4cG9ydCBkZWZhdWx0IGdhbWVNZWRpYTsiLCJpbXBvcnQgR2FtZVdpbmRvdyBmcm9tICcuL0dhbWVXaW5kb3cnO1xyXG5pbXBvcnQgTWVkaWFIYW5kbGVyIGZyb20gJy4vTWVkaWFIYW5kbGVyJztcclxuaW1wb3J0IE9iamVjdEhhbmRsZXIgZnJvbSAnLi9PYmplY3RIYW5kbGVyJztcclxuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XHJcbmltcG9ydCBFbWVueVNoaXAgZnJvbSAnLi9FbWVueVNoaXAnO1xyXG5pbXBvcnQgQWN0aW9uIGZyb20gJy4vQWN0aW9uJztcclxuaW1wb3J0IFdlYXBvbiBmcm9tICcuL1dlYXBvbic7XHJcbmltcG9ydCBrZXlTdGF0ZXMgZnJvbSAnLi9rZXlTdGF0ZXMnO1xyXG5cclxuY29uc3QgbWVkaWFIYW5kbGVyID0gbmV3IE1lZGlhSGFuZGxlcigpO1xyXG5jb25zdCBvYmplY3RIYW5kbGVyID0gbmV3IE9iamVjdEhhbmRsZXIoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHByb3BzLm5hbWU7XHJcbiAgICAgICAgdGhpcy5nYW1lV2luZG93ID0gbmV3IEdhbWVXaW5kb3coe1xyXG4gICAgICAgICAgICBjYW52YXM6IHByb3BzLmNhbnZhcyxcclxuICAgICAgICAgICAgd2lkdGg6IDQwMCxcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MDBcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnJlcXVlc3RJZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5mcHMgPSA2MDtcclxuICAgICAgICB0aGlzLnRwcyA9IDEyO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbGVUaW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZyYW1lRGVsYXkgPSBNYXRoLmZsb29yKDEwMDAgLyB0aGlzLmZwcyk7XHJcbiAgICAgICAgdGhpcy50aWxlRGVsYXkgPSAgTWF0aC5mbG9vcigxMDAwIC8gdGhpcy50cHMpO1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdFNjYWxlID0gMTtcclxuICAgICAgICB0aGlzLm9iamVjdHMgPSBvYmplY3RIYW5kbGVyLmdldE9iamVjdHMoKTtcclxuICAgICAgICB0aGlzLmxheWVycyA9IHtcclxuICAgICAgICAgICAgb3ZlcmxheTogW10sXHJcbiAgICAgICAgICAgIGZyb250OiBbXSxcclxuICAgICAgICAgICAgbWFpbjogW10sXHJcbiAgICAgICAgICAgIGJhY2s6IFtdLFxyXG4gICAgICAgICAgICBiYWNrYnJvdW5kOiBbXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5sYXllcnNBcnJheSA9IFtdO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gJyMxMTExMTEnO1xyXG5cclxuICAgICAgICB0aGlzLmZyYW1lID0gdGhpcy5mcmFtZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vSU5JVElBTElaQVRJT04gPD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgYXN5bmMgaW5pdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgU2NlbmUgXCIkeyB0aGlzLm5hbWUgfVwiIGxvYWRpbmcuYCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIG9iamVjdHMuJyk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5jcmVhdGVTY2VuZU9iamVjdHMoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgb2JqZWN0cyBkb25lLicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBTY2VuZSBcIiR7IHRoaXMubmFtZSB9XCIgbG9hZGVkLmApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vT0JKRUNUIENSRUFUSU9OIDw9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNyZWF0ZVNjZW5lT2JqZWN0cygpIHtcclxuICAgICAgICBjb25zdCBiYXNpY1dlYXBvbiA9IG5ldyBXZWFwb24oe1xyXG4gICAgICAgICAgICBzcGVlZDogMjAsXHJcbiAgICAgICAgICAgIGltYWdlOiBtZWRpYUhhbmRsZXIuZ2V0SW1hZ2UoJ2J1bGxldCcpLFxyXG4gICAgICAgICAgICB0aWxlV2lkdGg6IDEsXHJcbiAgICAgICAgICAgIHRpbGVIZWlnaHQ6IDNcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBvYmplY3RIYW5kbGVyLmNyZWF0ZU9iamVjdChQbGF5ZXIsIHtcclxuICAgICAgICAgICAgaHA6IDEwMCxcclxuICAgICAgICAgICAgc3BlZWQ6IDUsXHJcbiAgICAgICAgICAgIHNob3RpbmdTcGVlZDogMTAsXHJcbiAgICAgICAgICAgIGltYWdlOiBtZWRpYUhhbmRsZXIuZ2V0SW1hZ2UoJ3NoaXAnKSxcclxuICAgICAgICAgICAgdGlsZXNBbW91bnQ6IDEsXHJcbiAgICAgICAgICAgIHRpbGVXaWR0aDogMzIsXHJcbiAgICAgICAgICAgIHRpbGVIZWlnaHQ6IDMyLFxyXG4gICAgICAgICAgICB3ZWFwb246IGJhc2ljV2VhcG9uXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucG9zaXRpb25YID0gdGhpcy5nYW1lV2luZG93LndpZHRoIC8gMiAtIHRoaXMucGxheWVyLnRpbGVXaWR0aCAvIDI7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucG9zaXRpb25ZID0gdGhpcy5nYW1lV2luZG93LmhlaWdodCAvIDIgLSB0aGlzLnBsYXllci50aWxlSGVpZ2h0IC8gMjtcclxuICAgICAgICB0aGlzLnB1c2hUb0xheWVyKHRoaXMucGxheWVyLCAnbWFpbicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGxheWVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvL3NldHMgYSByZW5kZXIgbGF5ZXJcclxuICAgIHB1c2hUb0xheWVyKG9iaiwgbGF5ZXIpIHtcclxuICAgICAgICB0aGlzLmxheWVyc1tsYXllcl0ucHVzaChvYmopO1xyXG4gICAgICAgIHRoaXMuZ2V0TGF5ZXJzQXJyYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL3RyYW5zZm9ybXMgbGF5ZXJzIG9iamVjdCBpbnRvIHNpbXBsZSBhcnJheSB0aSBzaW1wbGlmeSByZW5kZXJpbmdcclxuICAgIGdldExheWVyc0FycmF5KCkge1xyXG4gICAgICAgIHRoaXMubGF5ZXJzQXJyYXkgPSBbXTtcclxuICAgICAgICBjb25zdCBsYXllcnNWYWx1ZXMgPSBPYmplY3QudmFsdWVzKHRoaXMubGF5ZXJzKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gbGF5ZXJzVmFsdWVzLmxlbmd0aCAtIDE7IGkgPj0wOyBpLS0pIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgb2JqIG9mIGxheWVyc1ZhbHVlc1tpXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXllcnNBcnJheS5wdXNoKG9iaik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9zdGFydCBzY2VuZVxyXG4gICAgYXN5bmMgc3RhcnQoKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0dhbWUgc3RhcnRlZC4nKVxyXG5cclxuICAgICAgICAvLyBnYW1lIHN0YXJ0IHRpbWVcclxuICAgICAgICB0aGlzLnN0YXJ0U2NlbmVMb29wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRTY2VuZUxvb3AoKSB7XHJcbiAgICAgICAgLy8gZ2FtZSBzdGFydCB0aW1lXHJcbiAgICAgICAgdGhpcy5sYXN0ID0gdGhpcy5sYXN0VGlsZVRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICB0aGlzLnJlcXVlc3RJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmZyYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0xPR0lDIDw9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmtleUhhbmRsZXIoKTtcclxuICAgICAgICAvLyBmb3IgKGxldCBlbmVteSBvZiB0aGlzLmVuZW1pZXMpIHtcclxuICAgICAgICAvLyAgICAgZW5lbXkuZG9DdXJyZW50QWN0aW9uKCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL0FOSU1BVElPTiA8PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBmcmFtZSgpIHtcclxuICAgICAgICBsZXQgZHQgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMubGFzdFRpbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGR0IDwgdGhpcy5mcmFtZURlbGF5KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZnJhbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaFRpbGVzKHRoaXMub2JqZWN0cyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmZyYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaFRpbGVzKG9iamVjdHMpIHtcclxuICAgICAgICBsZXQgZHQgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMubGFzdFRpbGVUaW1lO1xyXG4gICAgICAgIGlmIChkdCA+IHRoaXMudGlsZURlbGF5KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG9iaiBvZiBvYmplY3RzKSB7XHJcbiAgICAgICAgICAgICAgICBvYmoubmV4dFRpbGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxhc3RUaWxlVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL1JFTkRFUiA8PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5maWxsRmllbGQoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgb2JqIG9mIHRoaXMubGF5ZXJzQXJyYXkpIHtcclxuICAgICAgICAgICAgb2JqLmRyYXcodGhpcy5nYW1lV2luZG93LmN0eCwgMS90aGlzLmdhbWVXaW5kb3cuc2NhbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0gXHJcblxyXG4gICAgZmlsbEZpZWxkKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVdpbmRvdy5jdHguZmlsbFN0eWxlID0gdGhpcy5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgdGhpcy5nYW1lV2luZG93LmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmdhbWVXaW5kb3cud2lkdGgsIHRoaXMuZ2FtZVdpbmRvdy5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGtleUhhbmRsZXIoKSB7XHJcbiAgICAgICAgaWYgKGtleVN0YXRlcy5zcGFjZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zaG90KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoa2V5U3RhdGVzLnVwKSB7XHJcbiAgICAgICAgICAgIGlmIChrZXlTdGF0ZXMucmlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmUoNDUpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleVN0YXRlcy5sZWZ0KXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmUoMTM1KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmUoOTApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChrZXlTdGF0ZXMuZG93bikge1xyXG4gICAgICAgICAgICBpZiAoa2V5U3RhdGVzLnJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlKDMxNSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5U3RhdGVzLmxlZnQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZSgyMjUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZSgyNzApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChrZXlTdGF0ZXMubGVmdCkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlKDE4MCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChrZXlTdGF0ZXMucmlnaHQpe1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlKDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuY2hlY2tCb3JkZXJzKHRoaXMuZ2FtZVdpbmRvdyk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xyXG4vLyAgICAgdGhpcy5lbmVtaWVzLnB1c2godGhpcy5jcmVhdGVPYmplY3QoRW1lbnlTaGlwLCB7XHJcbi8vICAgICAgICAgaHA6IDEwMCxcclxuLy8gICAgICAgICBzcGVlZDoyLFxyXG4vLyAgICAgICAgIHBvc2l0aW9uWDogaSAqIDY0LFxyXG4vLyAgICAgICAgIHBvc2l0aW9uWTogMCxcclxuLy8gICAgICAgICBpbWFnZTogbWVkaWFIYW5kbGVyLmdldEltYWdlKDEpLFxyXG4vLyAgICAgICAgIHRpbGVzQW1vdW50OiAzLFxyXG4vLyAgICAgICAgIHRpbGVTaXplOiA2NCxcclxuLy8gICAgIH0pKTtcclxuLy8gICAgIHRoaXMucHVzaFRvTGF5ZXIodGhpcy5lbmVtaWVzW2ldLCAnYmFjaycpO1xyXG5cclxuLy8gICAgIHRoaXMuZW5lbWllc1tpXS5zZXRCZWhhdmlvcihbXHJcbi8vICAgICAgICAgbmV3IEFjdGlvbih7XHJcbi8vICAgICAgICAgICAgIG1ldGhvZDogdGhpcy5lbmVtaWVzW2ldLm1vdmUsXHJcbi8vICAgICAgICAgICAgIHZhbHVlOiAnZG93bicsXHJcbi8vICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXHJcbi8vICAgICAgICAgfSksXHJcbi8vICAgICAgICAgbmV3IEFjdGlvbih7XHJcbi8vICAgICAgICAgICAgIG1ldGhvZDogdGhpcy5lbmVtaWVzW2ldLnBhdXNlLFxyXG4vLyAgICAgICAgICAgICBkdXJhdGlvbjogNTAwXHJcbi8vICAgICAgICAgfSksXHJcbi8vICAgICAgICAgbmV3IEFjdGlvbih7XHJcbi8vICAgICAgICAgICAgIG1ldGhvZDogdGhpcy5lbmVtaWVzW2ldLm1vdmUsXHJcbi8vICAgICAgICAgICAgIHZhbHVlOiAndXAnLFxyXG4vLyAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMFxyXG4vLyAgICAgICAgIH0pLFxyXG4vLyAgICAgICAgIG5ldyBBY3Rpb24oe1xyXG4vLyAgICAgICAgICAgICBtZXRob2Q6IHRoaXMuZW5lbWllc1tpXS5zZXRTcGVlZCxcclxuLy8gICAgICAgICAgICAgdmFsdWU6IDYsXHJcbi8vICAgICAgICAgICAgIG9uY2U6IHRydWVcclxuLy8gICAgICAgICB9KSxcclxuLy8gICAgICAgICBuZXcgQWN0aW9uKHtcclxuLy8gICAgICAgICAgICAgbWV0aG9kOiB0aGlzLmVuZW1pZXNbaV0ubW92ZSxcclxuLy8gICAgICAgICAgICAgdmFsdWU6ICdkb3duJyxcclxuLy8gICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcclxuLy8gICAgICAgICB9KSxcclxuLy8gICAgICAgICBuZXcgQWN0aW9uKHtcclxuLy8gICAgICAgICAgICAgbWV0aG9kOiB0aGlzLmVuZW1pZXNbaV0ucGF1c2UsXHJcbi8vICAgICAgICAgfSksXHJcbi8vICAgICBdKTtcclxuXHJcbi8vICAgICBjb25zb2xlLmxvZyh0aGlzLmVuZW1pZXNbaV0pO1xyXG4vLyB9IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVdpbmRvdyB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gcHJvcHMuY2FudmFzO1xyXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB0aGlzLndpZHRoID0gcHJvcHMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBwcm9wcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy50b3AgPSAwO1xyXG4gICAgICAgIHRoaXMucmlnaHQgPSBwcm9wcy53aWR0aDtcclxuICAgICAgICB0aGlzLmJvdHRvbSA9IHByb3BzLmhlaWdodDtcclxuICAgICAgICB0aGlzLmxlZnQgPSAwO1xyXG4gICAgICAgIHRoaXMuc2NhbGUgPSBwcm9wcy5zY2FsZSB8fCAxO1xyXG5cclxuICAgICAgICBpZiAocHJvcHMuc2NhbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2FsZUNvbnRleHQodGhpcy5zY2FsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNjYWxlQ29udGV4dChzY2FsZSkge1xyXG4gICAgICAgIHRoaXMuY3R4LnNjYWxlKHNjYWxlLCBzY2FsZSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgZ2FtZU9iamVjdHMgZnJvbSAnLi9nYW1lT2JqZWN0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYmplY3RIYW5kbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU9iamVjdChDbGFzcywgcHJvcHMpIHtcclxuICAgICAgICBsZXQgb2JqID0gbmV3IENsYXNzKHByb3BzKTtcclxuICAgICAgICBnYW1lT2JqZWN0cy5wdXNoKG9iaik7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuXHJcbiAgICBnZXRPYmplY3Qobikge1xyXG4gICAgICAgIHJldHVybiBnYW1lT2JqZWN0c1tuXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRPYmplY3RzKCkge1xyXG4gICAgICAgIHJldHVybiBnYW1lT2JqZWN0cztcclxuICAgIH1cclxufSIsImxldCBvYmplY3RzID0gW107XHJcbmV4cG9ydCBkZWZhdWx0IG9iamVjdHM7IiwiLyphIGNsYXNzIG9mIHBsYXllciBjaGFyYWN0ZXIuIGEgcGxheWVyIGlzIGEgU0hJUCwgc28gaXQgZXh0ZW5kcyBhcHByb3ByaWF0ZSBjbGFzc1xyXG50byBjcmVhdGUgYSBwbGF5ZXIsIHlvdSBuZWVkIHRpIHBhc3MgUFJPUFMgdmFyaWFibGVcclxuZXhhbXBsZVxyXG57XHJcbiAgICBocDogMTAwLFxyXG4gICAgc3BlZWQ6IDEwLFxyXG4gICAgcG9zaXRpb25YOiAxMDAsXHJcbiAgICBwb3NpdGlvbnk6IDIwMCxcclxuICAgIGltYWdlOiBpbWcsXHJcbiAgICB0aWxlc0Ftb3VudDogMixcclxuICAgIHRpbGVIZWlnaHRMIDY0XHJcbiAgICBjdXJyZW50VGlsZTogMDsgXHJcbn1cclxuKi9cclxuaW1wb3J0IFNoaXAgZnJvbSAnLi9TaGlwJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIFNoaXAge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tCb3JkZXJzKHJlY3RhbmdsZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uWSA8IHJlY3RhbmdsZS50b3ApIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvblkgPSByZWN0YW5nbGUudG9wO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvblkgPiByZWN0YW5nbGUuYm90dG9tIC0gdGhpcy50aWxlSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25ZID0gcmVjdGFuZ2xlLmJvdHRvbSAtIHRoaXMudGlsZUhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb25YIDwgcmVjdGFuZ2xlLmxlZnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvblggPSByZWN0YW5nbGUubGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb25YID4gcmVjdGFuZ2xlLnJpZ2h0IC0gdGhpcy50aWxlV2lkdGgpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvblggPSByZWN0YW5nbGUucmlnaHQgLSB0aGlzLnRpbGVXaWR0aDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgT2JqZWN0IGZyb20gJy4vT2JqZWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAgZXh0ZW5kcyBPYmplY3Qge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5ocCA9IHByb3BzLmhwIHx8IDEwMDtcclxuICAgICAgICB0aGlzLnNob3RpbmdTcGVlZCA9IHByb3BzLnNob3RpbmdTcGVlZCB8fCAxO1xyXG4gICAgICAgIHRoaXMubGFzdFNob3QgPSBudWxsO1xyXG4gICAgICAgIHRoaXMud2VhcG9uID0gcHJvcHMud2VhcG9uIHx8IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdCgpIHsgICAgICAgICAgICBcclxuICAgICAgICBpZiAoIXRoaXMubGFzdFNob3QpIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0U2hvdCA9IHBlcmZvcm1hbmNlLm5vdygpOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGR0ID0gcGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLmxhc3RTaG90O1xyXG4gICAgICAgIGlmIChkdCA+PSAxMDAwIC8gdGhpcy5zaG90aW5nU3BlZWQpIHtcclxuICAgICAgICAgICAgdGhpcy53ZWFwb24uc2hvdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RTaG90ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxufSIsIi8vYSBiYXNpYyBnYW1lIG9iamVjdCBjbGFzcy4gaW5jbHVkZXMgbWV0aG9kcyBFVkVSWSBvYmplY3Qgb24gYSBzY3JlZW4gaGFzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVPYmplY3Qge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICB0aGlzLmltYWdlID0gcHJvcHMuaW1hZ2UgfHwgbnVsbDtcclxuICAgICAgICB0aGlzLnRpbGVzQW1vdW50ID0gcHJvcHMudGlsZXNBbW91bnQgfHwgMDtcclxuICAgICAgICB0aGlzLnRpbGVXaWR0aCA9IHByb3BzLnRpbGVXaWR0aCB8fCAwO1xyXG4gICAgICAgIHRoaXMudGlsZUhlaWdodCA9IHByb3BzLnRpbGVIZWlnaHQgfHwgMDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaWxlID0gcHJvcHMuY3VycmVudFRpbGUgfHwgMDtcclxuICAgICAgICB0aGlzLnNwZWVkID0gcHJvcHMuc3BlZWQgfHwgMTA7XHJcbiAgICAgICAgdGhpcy50dXJuU3BlZWQgPSBwcm9wcy50dXJuU3BlZWQgfHwgNTtcclxuICAgICAgICB0aGlzLmFuZ2xlID0gcHJvcHMuYW5nbGUgfHwgOTA7XHJcbiAgICAgICAgdGhpcy5yYWRBbmdsZSA9IHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25YID0gcHJvcHMucG9zaXRpb25YIHx8IDA7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblkgPSBwcm9wcy5wb3NpdGlvblkgfHwgMDtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlKGFuZ2xlKSB7XHJcbiAgICAgICAgY29uc3QgcmFkQW5nbGUgPSBhbmdsZSAqIE1hdGguUEkgLyAxODA7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblggKz0gTWF0aC5yb3VuZChNYXRoLmNvcyhyYWRBbmdsZSkgKiB0aGlzLnNwZWVkKTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uWSAtPSBNYXRoLnJvdW5kKE1hdGguc2luKHJhZEFuZ2xlKSAqIHRoaXMuc3BlZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHR1cm4oZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSAncmlnaHQnOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuZ2xlIC09IHRoaXMudHVyblNwZWVkO1xyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLmFuZ2xlIDw9IDAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmdsZSA9IDM2MCAtIHRoaXMuYW5nbGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJhZEFuZ2xlID0gdGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdsZWZ0Jzoge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmdsZSArPSB0aGlzLnR1cm5TcGVlZDtcclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5hbmdsZSA+PSAzNjAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmdsZSA9IHRoaXMuYW5nbGUgLSAzNjA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJhZEFuZ2xlID0gdGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRTcGVlZChzcGVlZCkge1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0VGlsZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50VGlsZSA8ICh0aGlzLnRpbGVzQW1vdW50IC0gMSkpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGlsZSsrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbGUgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRJbWFnZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGN0eCwgc2NhbGUpIHtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5wb3NpdGlvblggICsgdGhpcy50aWxlV2lkdGggLyAyLCB0aGlzLnBvc2l0aW9uWSArIHRoaXMudGlsZUhlaWdodCAvIDIpO1xyXG4gICAgICAgIGN0eC5yb3RhdGUoLSh0aGlzLmFuZ2xlIC0gOTApICogTWF0aC5QSSAvIDE4MCk7XHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB0aGlzLmN1cnJlbnRUaWxlICogdGhpcy50aWxlV2lkdGgsIDAsIHRoaXMudGlsZVdpZHRoLCB0aGlzLnRpbGVIZWlnaHQsIC10aGlzLnRpbGVXaWR0aCAvIDIsIC10aGlzLnRpbGVIZWlnaHQgLyAyLCB0aGlzLnRpbGVXaWR0aCwgdGhpcy50aWxlSGVpZ2h0KTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9TaGlwJztcclxuaW1wb3J0IEJlaGF2aW9yIGZyb20gJy4vQmVoYXZpb3InO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1lbnlTaGlwIGV4dGVuZHMgU2hpcCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5wYXVzZSA9IHRoaXMucGF1c2UuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5iZWhhdmlvciA9IG5ldyBCZWhhdmlvcigpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL0VORU1ZIFNISVAgTElHSUMgQU5EIEFDVElPTlNcclxuICAgIHBhdXNlKCkge31cclxuIFxyXG4gICAgLy9TRVQgQkVIQVZJT1JcclxuICAgIHNldEJlaGF2aW9yKGFjdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmJlaGF2aW9yLnNldEFjdGlvbnMoYWN0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9DdXJyZW50QWN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuYmVoYXZpb3IuZG9DdXJyZW50QWN0aW9uKCk7XHJcbiAgICB9XHJcbn0iLCIvL0JFSEFWSU9VUiBDTEFTUy4gSEFORExFUyBBQ1RJT04nUyBFWEVDVVRJT05cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmVoYXZpb3Ige1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICAvL3RoaXMgaXMgYW4gYXJyYXkgb2YgZW5lbXkgYWN0aW9ucyBsaWtlIG1vdmUsIHR1cm4sIHN0b3AgZXRjLiBcclxuICAgICAgICAvLyBwcm9wcy5hY3Rpb25zID8gdGhpcy5hY3Rpb25zID0gcHJvcHMuYWN0aW9ucy5zbGljZSgpIDogW107XHJcbiAgICAgICAgaWYgKHByb3BzICYmIHByb3BzLmFjdGlvbnMpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3Rpb25zID0gcHJvcHMuYWN0aW9ucztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGlvbnMgPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudEFjdGlvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25TdGFydFRpbWUgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGlvblN0YXJ0VmFsdWUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vU0VUVElORyBBQ1RJT05TXHJcbiAgICBzZXRBY3Rpb25zKGFjdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmFjdGlvbnMgPSBhY3Rpb25zLnNsaWNlKCk7XHJcbiAgICAgICAgdGhpcy5uZXh0QWN0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQWN0aW9uKGFjdGlvbikge1xyXG4gICAgICAgIHRoaXMuYWN0aW9ucy5wdXNoKGFjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy9ORVhUIEFDVElPTlNcclxuICAgIG5leHRBY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50QWN0aW9uID0gdGhpcy5hY3Rpb25zLnNoaWZ0KCk7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25TdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgIH1cclxuXHJcbiAgICBkb0N1cnJlbnRBY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEFjdGlvbi5kdXJhdGlvbikge1xyXG4gICAgICAgICAgICBsZXQgZHQgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMuYWN0aW9uU3RhcnRUaW1lO1xyXG5cclxuICAgICAgICAgICAgaWYgKGR0ID49IHRoaXMuY3VycmVudEFjdGlvbi5kdXJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0QWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvblN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBY3Rpb24ubWV0aG9kKHRoaXMuY3VycmVudEFjdGlvbi52YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRBY3Rpb24ub25jZSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBY3Rpb24ubWV0aG9kKHRoaXMuY3VycmVudEFjdGlvbi52YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dEFjdGlvbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFjdGlvbi5tZXRob2QodGhpcy5jdXJyZW50QWN0aW9uLnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0gIiwiLy9BTiBBQ1RJT04gQ0xBU1MuIElTIE5FRURFRCBUTyBDT05TVFJVQ1QgQkVIQVZJT1IgQVJSQVlTIEZPUiBBVVRPTUFUSUMgRU5USVRJRVNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5tZXRob2QgPSBwcm9wcy5tZXRob2Q7XHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IHByb3BzLmR1cmF0aW9uO1xyXG4gICAgICAgIHRoaXMub25jZSA9IHByb3BzLm9uY2U7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHByb3BzLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uU3RhcnRUaW1lID0gbnVsbDtcclxuICAgIH1cclxufSAiLCJsZXQga2V5U3RhdGVzID0geyBcclxuICAgIHVwOiBmYWxzZSxcclxuICAgIHJpZ2h0OiBmYWxzZSxcclxuICAgIGRvd246IGZhbHNlLFxyXG4gICAgbGVmdDogZmFsc2UsXHJcbiAgICBzcGFjZTogZmFsc2VcclxufTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcclxuICAgIGlmIChlLmtleUNvZGUgPT09IDg3IHx8IGUua2V5Q29kZSA9PT0gMzgpIHtcclxuICAgICAgICBrZXlTdGF0ZXMudXAgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gNjUgfHwgZS5rZXlDb2RlID09PSAzNykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdBIGlzIHByZXNzZWQhJyk7XHJcbiAgICAgICAga2V5U3RhdGVzLmxlZnQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gODMgfHwgZS5rZXlDb2RlID09PSA0MCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdTIGlzIHByZXNzZWQhJyk7XHJcbiAgICAgICAga2V5U3RhdGVzLmRvd24gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gNjggfHwgZS5rZXlDb2RlID09PSAzOSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdEIGlzIHByZXNzZWQhJyk7XHJcbiAgICAgICAga2V5U3RhdGVzLnJpZ2h0ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChlLmtleUNvZGUgPT09IDMyKSB7XHJcbiAgICAgICAga2V5U3RhdGVzLnNwYWNlID0gdHJ1ZTtcclxuICAgIH1cclxufSwgdHJ1ZSk7XHJcbiAgICBcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcclxuICAgIGlmIChlLmtleUNvZGUgPT09IDg3IHx8IGUua2V5Q29kZSA9PT0gMzgpIHtcclxuICAgICAgICBrZXlTdGF0ZXMudXAgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChlLmtleUNvZGUgPT09IDY1IHx8IGUua2V5Q29kZSA9PT0gMzcpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnQSBpcyBwcmVzc2VkIScpO1xyXG4gICAgICAgIGtleVN0YXRlcy5sZWZ0ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSA4MyB8fCBlLmtleUNvZGUgPT09IDQwKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1MgaXMgcHJlc3NlZCEnKTtcclxuICAgICAgICBrZXlTdGF0ZXMuZG93biA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gNjggfHwgZS5rZXlDb2RlID09PSAzOSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdEIGlzIHByZXNzZWQhJyk7XHJcbiAgICAgICAga2V5U3RhdGVzLnJpZ2h0ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSAzMikge1xyXG4gICAgICAgIGtleVN0YXRlcy5zcGFjZSA9IGZhbHNlO1xyXG4gICAgfVxyXG59LCB0cnVlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGtleVN0YXRlczsiLCJpbXBvcnQgT2JqZWN0IGZyb20gJy4vT2JqZWN0JztcclxuaW1wb3J0IE9iamVjdEhhbmRsZXIgZnJvbSAnLi9PYmplY3RIYW5kbGVyJztcclxuXHJcbmNvbnN0IG9iamVjdEhhbmRsZXIgPSBuZXcgT2JqZWN0SGFuZGxlcigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VhcG9uIGV4dGVuZHMgT2JqZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5kYW1hZ2UgPSBwcm9wcy5kYW1hZ2UgfHwgMTtcclxuICAgICAgICB0aGlzLnNwZWVkID0gcHJvcHMuc3BlZWQgfHwgMTA7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdCgpIHtcclxuICAgICAgICAvLyBvYmplY3RIYW5kbGVyLmNyZWF0ZU9iamVjdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUJ1bGxldCgpIHtcclxuXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9