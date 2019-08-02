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
            './dist/images/ship.png',
            './dist/images/enemy.png',
            './dist/images/bullet.png',
        ]);

        //preload images
        console.log('Image preloading.');
        await mediaHandler.preloadAllImages();
        console.log('Images preloading done.');
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

    async preloadAllImages() {
        for(let src of this.imageSources) {
            console.log(`Loading ${src}.`);
            this.addImage(await this.preloadImage(src), src);
        } 
    }

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
/* harmony import */ var _Weapon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14);
/* harmony import */ var _keyStates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16);









const mediaHandler = new _MediaHandler__WEBPACK_IMPORTED_MODULE_1__["default"]();
const objectHandler = new _ObjectHandler__WEBPACK_IMPORTED_MODULE_2__["default"]();

class GameScene {
    constructor(props) {
        this.name = props.name;
        this.gameWindow = new _GameWindow__WEBPACK_IMPORTED_MODULE_0__["default"]({
            canvas: props.canvas,
            width: 400,
            height: 600,
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
        const basicWeapon = new _Weapon__WEBPACK_IMPORTED_MODULE_6__["default"]({
            image: mediaHandler.getImage('bullet'),
            tileWidth: 1,
            tileHeight: 3,
            speed: 10,
        });

        this.player = objectHandler.createObject(_Player__WEBPACK_IMPORTED_MODULE_3__["default"], {
            hp: 100,
            speed: 5,
            shotingSpeed: 10,
            image: mediaHandler.getImage('ship'),
            tilesAmount: 1,
            tileWidth: 16,
            tileHeight: 16,
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

    deleteObject(obj) {
        _gameObjects__WEBPACK_IMPORTED_MODULE_0__["default"].splice(_gameObjects__WEBPACK_IMPORTED_MODULE_0__["default"].indexOf(obj), 1);
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
            this.weapon.shot(this.positionX + this.tileWidth / 2, this.positionY);
        }
        let dt = performance.now() - this.lastShot;
        if (dt >= 1000 / this.shotingSpeed) {
            this.weapon.shot(this.positionX + this.tileWidth / 2, this.positionY);
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

        this.move = this.move.bind(this);
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

    draw(ctx) {
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
        this.doCurrentAction();
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Weapon; });
/* harmony import */ var _Bullet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _ObjectHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);



const objectHandler = new _ObjectHandler__WEBPACK_IMPORTED_MODULE_1__["default"]();

class Weapon {
    constructor (props) {
        this.image = props.image;
        this.tileWidth = props.tileWidth;
        this.tileHeight = props.tileHeight;
        this.damage = props.damage || 1;
        this.speed = props.speed || 1;
    }

    shot(positionX, positionY) {
        objectHandler.createObject(_Bullet__WEBPACK_IMPORTED_MODULE_0__["default"], {
            image: this.image,
            tileWidth: this.tileWidth,
            tileHeight: this.tileHeight,
            positionX: positionX,
            positionY: positionY,
            damage: this.damage,
            speed: this.speed
        });
    }
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bullet; });
/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _ObjectHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);



const objectHandler = new _ObjectHandler__WEBPACK_IMPORTED_MODULE_1__["default"]();

class Bullet extends _Object__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (props) {
        super(props);

        this.damage = props.damage || 1;
        this.speed = props.speed || 1;
    }

    update() {
        this.move(this.angle);
        this.checkBorders()
    }

    checkBorders() {
        if (this.positionY - this.tileHeight < 0) {
            objectHandler.deleteObject(this);
        }
    }
}

/***/ }),
/* 16 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvTWVkaWFIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lTWVkaWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1NjZW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9HYW1lV2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9PYmplY3RIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvUGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TaGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0VtZW55U2hpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvV2VhcG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9CdWxsZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2tleVN0YXRlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FB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bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBHYW1lIGZyb20gJy4vR2FtZSc7XHJcblxyXG4vL0dBTUUgSU5JVCA8PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcclxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKTtcclxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcyk7XHJcbmdhbWUuc3RhcnQoKTsgICAgIiwiaW1wb3J0IE1lZGlhSGFuZGxlciBmcm9tICcuL01lZGlhSGFuZGxlcic7XHJcbmltcG9ydCBHYW1lU2NlbmUgZnJvbSAnLi9TY2VuZSc7XHJcblxyXG5jb25zdCBtZWRpYUhhbmRsZXIgPSBuZXcgTWVkaWFIYW5kbGVyKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG5cclxuICAgICAgICAvL2dhbWUgc3RhdGUgKG9mZiA9IDAsIG9uID0gMSwgcGF1c2UgPSAyKVxyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gMDtcclxuXHJcbiAgICAgICAgLy9zYW1wbGUgb2YgYSBzdGFnZSBjbGFzc1xyXG4gICAgICAgIHRoaXMuc3RhZ2UgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vZ2FtZSBpbml0aWFsaXphdGlvbiBwcm9jZXNzXHJcbiAgICBhc3luYyBpbml0KCkge1xyXG4gICAgICAgIG1lZGlhSGFuZGxlci5zZXRJbWFnZVNvdXJjZXMoW1xyXG4gICAgICAgICAgICAnLi9kaXN0L2ltYWdlcy9zaGlwLnBuZycsXHJcbiAgICAgICAgICAgICcuL2Rpc3QvaW1hZ2VzL2VuZW15LnBuZycsXHJcbiAgICAgICAgICAgICcuL2Rpc3QvaW1hZ2VzL2J1bGxldC5wbmcnLFxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICAvL3ByZWxvYWQgaW1hZ2VzXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0ltYWdlIHByZWxvYWRpbmcuJyk7XHJcbiAgICAgICAgYXdhaXQgbWVkaWFIYW5kbGVyLnByZWxvYWRBbGxJbWFnZXMoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnSW1hZ2VzIHByZWxvYWRpbmcgZG9uZS4nKTtcclxuICAgIH1cclxuICAgIC8vZ2FtZSBzdGFydFxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PXdpcD09PT09PT09PT09PT09PT09XHJcbiAgICBhc3luYyBzdGFydCgpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLmluaXQoKTtcclxuXHJcbiAgICAgICAgLy9nYW1lIG9uIHN0YXRlXHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSAxO1xyXG5cclxuICAgICAgICAvL2NyZWF0aW9uIG9mIHN0YWdlIDEgPD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBXaVAhXHJcbiAgICAgICAgdGhpcy5zdGFnZSA9IG5ldyBHYW1lU2NlbmUoe1xyXG4gICAgICAgICAgICBuYW1lOiAnQSBUZXN0IEdhbWUgU3RhZ2UnLFxyXG4gICAgICAgICAgICBjYW52YXM6IHRoaXMuY2FudmFzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3RhZ2Uuc3RhcnQoKTtcclxuICAgIH0gIFxyXG59IiwiaW1wb3J0IGdhbWVNZWRpYSBmcm9tICcuL2dhbWVNZWRpYSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYUhhbmRsZXIge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICB0aGlzLmltYWdlU291cmNlcyA9IChwcm9wcyAmJiBwcm9wcy5pbWFnZVNvdXJjZXMuc2xpY2UoKSkgfHwgW107XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SW1hZ2VTb3VyY2VzKHNvdXJjZXNBcnJheSkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VTb3VyY2VzID0gc291cmNlc0FycmF5LnNsaWNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW1hZ2VTb3VyY2VzKCkge1xyXG4gICAgICAgIHJldHVybiAgdGhpcy5pbWFnZVNvdXJjZXM7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkSW1hZ2UoaW1hZ2UsIHNyYykge1xyXG4gICAgICAgIGNvbnN0IGltYWdlTmFtZSA9IHNyYy5tYXRjaCgvKFxcdyspKD86XFwuXFx3KykkLylbMV07XHJcbiAgICAgICAgZ2FtZU1lZGlhW2ltYWdlTmFtZV0gPSBpbWFnZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbWFnZShpbWFnZSkge1xyXG4gICAgICAgIHJldHVybiBnYW1lTWVkaWFbaW1hZ2VdO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHByZWxvYWRBbGxJbWFnZXMoKSB7XHJcbiAgICAgICAgZm9yKGxldCBzcmMgb2YgdGhpcy5pbWFnZVNvdXJjZXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYExvYWRpbmcgJHtzcmN9LmApO1xyXG4gICAgICAgICAgICB0aGlzLmFkZEltYWdlKGF3YWl0IHRoaXMucHJlbG9hZEltYWdlKHNyYyksIHNyYyk7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICBwcmVsb2FkSW1hZ2Uoc3JjKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEltYWdlICR7aW1nLnNyY30gbG9hZGVkLmApXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGltZyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGltZy5vbmVycm9yID0gKCkgPT4gcmVqZWN0KCk7XHJcbiAgICAgICAgICAgIGltZy5zcmMgPSBzcmM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJsZXQgZ2FtZU1lZGlhID0ge307XHJcbmV4cG9ydCBkZWZhdWx0IGdhbWVNZWRpYTsiLCJpbXBvcnQgR2FtZVdpbmRvdyBmcm9tICcuL0dhbWVXaW5kb3cnO1xyXG5pbXBvcnQgTWVkaWFIYW5kbGVyIGZyb20gJy4vTWVkaWFIYW5kbGVyJztcclxuaW1wb3J0IE9iamVjdEhhbmRsZXIgZnJvbSAnLi9PYmplY3RIYW5kbGVyJztcclxuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XHJcbmltcG9ydCBFbWVueVNoaXAgZnJvbSAnLi9FbWVueVNoaXAnO1xyXG5pbXBvcnQgQWN0aW9uIGZyb20gJy4vQWN0aW9uJztcclxuaW1wb3J0IFdlYXBvbiBmcm9tICcuL1dlYXBvbic7XHJcbmltcG9ydCBrZXlTdGF0ZXMgZnJvbSAnLi9rZXlTdGF0ZXMnO1xyXG5cclxuY29uc3QgbWVkaWFIYW5kbGVyID0gbmV3IE1lZGlhSGFuZGxlcigpO1xyXG5jb25zdCBvYmplY3RIYW5kbGVyID0gbmV3IE9iamVjdEhhbmRsZXIoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHByb3BzLm5hbWU7XHJcbiAgICAgICAgdGhpcy5nYW1lV2luZG93ID0gbmV3IEdhbWVXaW5kb3coe1xyXG4gICAgICAgICAgICBjYW52YXM6IHByb3BzLmNhbnZhcyxcclxuICAgICAgICAgICAgd2lkdGg6IDQwMCxcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MDAsXHJcbiAgICAgICAgICAgIC8vIHNjYWxlOiAyXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0SWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZnBzID0gNjA7XHJcbiAgICAgICAgdGhpcy50cHMgPSAxMjtcclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLmxhc3RUaWxlVGltZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5mcmFtZURlbGF5ID0gTWF0aC5mbG9vcigxMDAwIC8gdGhpcy5mcHMpO1xyXG4gICAgICAgIHRoaXMudGlsZURlbGF5ID0gIE1hdGguZmxvb3IoMTAwMCAvIHRoaXMudHBzKTtcclxuICAgICAgICB0aGlzLmRlZmF1bHRTY2FsZSA9IDE7XHJcbiAgICAgICAgdGhpcy5vYmplY3RzID0gb2JqZWN0SGFuZGxlci5nZXRPYmplY3RzKCk7XHJcbiAgICAgICAgdGhpcy5sYXllcnMgPSB7XHJcbiAgICAgICAgICAgIG92ZXJsYXk6IFtdLFxyXG4gICAgICAgICAgICBmcm9udDogW10sXHJcbiAgICAgICAgICAgIG1haW46IFtdLFxyXG4gICAgICAgICAgICBiYWNrOiBbXSxcclxuICAgICAgICAgICAgYmFja2Jyb3VuZDogW11cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubGF5ZXJzQXJyYXkgPSBbXTtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9ICcjMTExMTExJztcclxuXHJcbiAgICAgICAgdGhpcy5mcmFtZSA9IHRoaXMuZnJhbWUuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0lOSVRJQUxJWkFUSU9OIDw9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGFzeW5jIGluaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFNjZW5lIFwiJHsgdGhpcy5uYW1lIH1cIiBsb2FkaW5nLmApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyBvYmplY3RzLicpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuY3JlYXRlU2NlbmVPYmplY3RzKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIG9iamVjdHMgZG9uZS4nKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgU2NlbmUgXCIkeyB0aGlzLm5hbWUgfVwiIGxvYWRlZC5gKTtcclxuICAgIH1cclxuXHJcbiAgICAvL09CSkVDVCBDUkVBVElPTiA8PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjcmVhdGVTY2VuZU9iamVjdHMoKSB7XHJcbiAgICAgICAgY29uc3QgYmFzaWNXZWFwb24gPSBuZXcgV2VhcG9uKHtcclxuICAgICAgICAgICAgaW1hZ2U6IG1lZGlhSGFuZGxlci5nZXRJbWFnZSgnYnVsbGV0JyksXHJcbiAgICAgICAgICAgIHRpbGVXaWR0aDogMSxcclxuICAgICAgICAgICAgdGlsZUhlaWdodDogMyxcclxuICAgICAgICAgICAgc3BlZWQ6IDEwLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllciA9IG9iamVjdEhhbmRsZXIuY3JlYXRlT2JqZWN0KFBsYXllciwge1xyXG4gICAgICAgICAgICBocDogMTAwLFxyXG4gICAgICAgICAgICBzcGVlZDogNSxcclxuICAgICAgICAgICAgc2hvdGluZ1NwZWVkOiAxMCxcclxuICAgICAgICAgICAgaW1hZ2U6IG1lZGlhSGFuZGxlci5nZXRJbWFnZSgnc2hpcCcpLFxyXG4gICAgICAgICAgICB0aWxlc0Ftb3VudDogMSxcclxuICAgICAgICAgICAgdGlsZVdpZHRoOiAxNixcclxuICAgICAgICAgICAgdGlsZUhlaWdodDogMTYsXHJcbiAgICAgICAgICAgIHdlYXBvbjogYmFzaWNXZWFwb25cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBsYXllci5wb3NpdGlvblggPSB0aGlzLmdhbWVXaW5kb3cud2lkdGggLyAyIC0gdGhpcy5wbGF5ZXIudGlsZVdpZHRoIC8gMjtcclxuICAgICAgICB0aGlzLnBsYXllci5wb3NpdGlvblkgPSB0aGlzLmdhbWVXaW5kb3cuaGVpZ2h0IC8gMiAtIHRoaXMucGxheWVyLnRpbGVIZWlnaHQgLyAyO1xyXG4gICAgICAgIHRoaXMucHVzaFRvTGF5ZXIodGhpcy5wbGF5ZXIsICdtYWluJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wbGF5ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vc2V0cyBhIHJlbmRlciBsYXllclxyXG4gICAgcHVzaFRvTGF5ZXIob2JqLCBsYXllcikge1xyXG4gICAgICAgIHRoaXMubGF5ZXJzW2xheWVyXS5wdXNoKG9iaik7XHJcbiAgICAgICAgdGhpcy5nZXRMYXllcnNBcnJheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdHJhbnNmb3JtcyBsYXllcnMgb2JqZWN0IGludG8gc2ltcGxlIGFycmF5IHRpIHNpbXBsaWZ5IHJlbmRlcmluZ1xyXG4gICAgZ2V0TGF5ZXJzQXJyYXkoKSB7XHJcbiAgICAgICAgdGhpcy5sYXllcnNBcnJheSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGxheWVyc1ZhbHVlcyA9IE9iamVjdC52YWx1ZXModGhpcy5sYXllcnMpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBsYXllcnNWYWx1ZXMubGVuZ3RoIC0gMTsgaSA+PTA7IGktLSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBvYmogb2YgbGF5ZXJzVmFsdWVzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxheWVyc0FycmF5LnB1c2gob2JqKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL3N0YXJ0IHNjZW5lXHJcbiAgICBhc3luYyBzdGFydCgpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLmluaXQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnR2FtZSBzdGFydGVkLicpXHJcblxyXG4gICAgICAgIC8vIGdhbWUgc3RhcnQgdGltZVxyXG4gICAgICAgIHRoaXMuc3RhcnRTY2VuZUxvb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydFNjZW5lTG9vcCgpIHtcclxuICAgICAgICAvLyBnYW1lIHN0YXJ0IHRpbWVcclxuICAgICAgICB0aGlzLmxhc3QgPSB0aGlzLmxhc3RUaWxlVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHRoaXMucmVxdWVzdElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZnJhbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vTE9HSUMgPD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMua2V5SGFuZGxlcigpO1xyXG4gICAgICAgIGZvciAobGV0IG9iaiBvZiB0aGlzLm9iamVjdHMpIHtcclxuICAgICAgICAgICAgaWYgKG9iai51cGRhdGUpIHtcclxuICAgICAgICAgICAgICAgIG9iai51cGRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy9BTklNQVRJT04gPD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgZnJhbWUoKSB7XHJcbiAgICAgICAgbGV0IGR0ID0gcGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLmxhc3RUaW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChkdCA8IHRoaXMuZnJhbWVEZWxheSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmZyYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hUaWxlcyh0aGlzLm9iamVjdHMpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0SWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5mcmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hUaWxlcyhvYmplY3RzKSB7XHJcbiAgICAgICAgbGV0IGR0ID0gcGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLmxhc3RUaWxlVGltZTtcclxuICAgICAgICBpZiAoZHQgPiB0aGlzLnRpbGVEZWxheSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBvYmogb2Ygb2JqZWN0cykge1xyXG4gICAgICAgICAgICAgICAgb2JqLm5leHRUaWxlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sYXN0VGlsZVRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9SRU5ERVIgPD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuZmlsbEZpZWxkKCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IG9iaiBvZiB0aGlzLm9iamVjdHMpIHtcclxuICAgICAgICAgICAgb2JqLmRyYXcodGhpcy5nYW1lV2luZG93LmN0eCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuXHJcbiAgICBmaWxsRmllbGQoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lV2luZG93LmN0eC5maWxsU3R5bGUgPSB0aGlzLmJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICB0aGlzLmdhbWVXaW5kb3cuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZ2FtZVdpbmRvdy53aWR0aCwgdGhpcy5nYW1lV2luZG93LmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAga2V5SGFuZGxlcigpIHtcclxuICAgICAgICBpZiAoa2V5U3RhdGVzLnNwYWNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnNob3QoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChrZXlTdGF0ZXMudXApIHtcclxuICAgICAgICAgICAgaWYgKGtleVN0YXRlcy5yaWdodCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZSg0NSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5U3RhdGVzLmxlZnQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZSgxMzUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZSg5MCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGtleVN0YXRlcy5kb3duKSB7XHJcbiAgICAgICAgICAgIGlmIChrZXlTdGF0ZXMucmlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmUoMzE1KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXlTdGF0ZXMubGVmdCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlKDIyNSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlKDI3MCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGtleVN0YXRlcy5sZWZ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmUoMTgwKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGtleVN0YXRlcy5yaWdodCl7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmUoMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBsYXllci5jaGVja0JvcmRlcnModGhpcy5nYW1lV2luZG93KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XHJcbi8vICAgICB0aGlzLmVuZW1pZXMucHVzaCh0aGlzLmNyZWF0ZU9iamVjdChFbWVueVNoaXAsIHtcclxuLy8gICAgICAgICBocDogMTAwLFxyXG4vLyAgICAgICAgIHNwZWVkOjIsXHJcbi8vICAgICAgICAgcG9zaXRpb25YOiBpICogNjQsXHJcbi8vICAgICAgICAgcG9zaXRpb25ZOiAwLFxyXG4vLyAgICAgICAgIGltYWdlOiBtZWRpYUhhbmRsZXIuZ2V0SW1hZ2UoMSksXHJcbi8vICAgICAgICAgdGlsZXNBbW91bnQ6IDMsXHJcbi8vICAgICAgICAgdGlsZVNpemU6IDY0LFxyXG4vLyAgICAgfSkpO1xyXG4vLyAgICAgdGhpcy5wdXNoVG9MYXllcih0aGlzLmVuZW1pZXNbaV0sICdiYWNrJyk7XHJcblxyXG4vLyAgICAgdGhpcy5lbmVtaWVzW2ldLnNldEJlaGF2aW9yKFtcclxuLy8gICAgICAgICBuZXcgQWN0aW9uKHtcclxuLy8gICAgICAgICAgICAgbWV0aG9kOiB0aGlzLmVuZW1pZXNbaV0ubW92ZSxcclxuLy8gICAgICAgICAgICAgdmFsdWU6ICdkb3duJyxcclxuLy8gICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcclxuLy8gICAgICAgICB9KSxcclxuLy8gICAgICAgICBuZXcgQWN0aW9uKHtcclxuLy8gICAgICAgICAgICAgbWV0aG9kOiB0aGlzLmVuZW1pZXNbaV0ucGF1c2UsXHJcbi8vICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDBcclxuLy8gICAgICAgICB9KSxcclxuLy8gICAgICAgICBuZXcgQWN0aW9uKHtcclxuLy8gICAgICAgICAgICAgbWV0aG9kOiB0aGlzLmVuZW1pZXNbaV0ubW92ZSxcclxuLy8gICAgICAgICAgICAgdmFsdWU6ICd1cCcsXHJcbi8vICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXHJcbi8vICAgICAgICAgfSksXHJcbi8vICAgICAgICAgbmV3IEFjdGlvbih7XHJcbi8vICAgICAgICAgICAgIG1ldGhvZDogdGhpcy5lbmVtaWVzW2ldLnNldFNwZWVkLFxyXG4vLyAgICAgICAgICAgICB2YWx1ZTogNixcclxuLy8gICAgICAgICAgICAgb25jZTogdHJ1ZVxyXG4vLyAgICAgICAgIH0pLFxyXG4vLyAgICAgICAgIG5ldyBBY3Rpb24oe1xyXG4vLyAgICAgICAgICAgICBtZXRob2Q6IHRoaXMuZW5lbWllc1tpXS5tb3ZlLFxyXG4vLyAgICAgICAgICAgICB2YWx1ZTogJ2Rvd24nLFxyXG4vLyAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4vLyAgICAgICAgIH0pLFxyXG4vLyAgICAgICAgIG5ldyBBY3Rpb24oe1xyXG4vLyAgICAgICAgICAgICBtZXRob2Q6IHRoaXMuZW5lbWllc1tpXS5wYXVzZSxcclxuLy8gICAgICAgICB9KSxcclxuLy8gICAgIF0pO1xyXG5cclxuLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuZW5lbWllc1tpXSk7XHJcbi8vIH0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lV2luZG93IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBwcm9wcy5jYW52YXM7XHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBwcm9wcy53aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHByb3BzLmhlaWdodDtcclxuICAgICAgICB0aGlzLnRvcCA9IDA7XHJcbiAgICAgICAgdGhpcy5yaWdodCA9IHByb3BzLndpZHRoO1xyXG4gICAgICAgIHRoaXMuYm90dG9tID0gcHJvcHMuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMubGVmdCA9IDA7XHJcbiAgICAgICAgdGhpcy5zY2FsZSA9IHByb3BzLnNjYWxlIHx8IDE7XHJcblxyXG4gICAgICAgIGlmIChwcm9wcy5zY2FsZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNjYWxlQ29udGV4dCh0aGlzLnNjYWxlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2NhbGVDb250ZXh0KHNjYWxlKSB7XHJcbiAgICAgICAgdGhpcy5jdHguc2NhbGUoc2NhbGUsIHNjYWxlKTtcclxuICAgIH1cclxufSIsImltcG9ydCBnYW1lT2JqZWN0cyBmcm9tICcuL2dhbWVPYmplY3RzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdEhhbmRsZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlT2JqZWN0KENsYXNzLCBwcm9wcykge1xyXG4gICAgICAgIGxldCBvYmogPSBuZXcgQ2xhc3MocHJvcHMpO1xyXG4gICAgICAgIGdhbWVPYmplY3RzLnB1c2gob2JqKTtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE9iamVjdChuKSB7XHJcbiAgICAgICAgcmV0dXJuIGdhbWVPYmplY3RzW25dO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE9iamVjdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGdhbWVPYmplY3RzO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZU9iamVjdChvYmopIHtcclxuICAgICAgICBnYW1lT2JqZWN0cy5zcGxpY2UoZ2FtZU9iamVjdHMuaW5kZXhPZihvYmopLCAxKTtcclxuICAgIH1cclxufSIsImxldCBvYmplY3RzID0gW107XHJcbmV4cG9ydCBkZWZhdWx0IG9iamVjdHM7IiwiLyphIGNsYXNzIG9mIHBsYXllciBjaGFyYWN0ZXIuIGEgcGxheWVyIGlzIGEgU0hJUCwgc28gaXQgZXh0ZW5kcyBhcHByb3ByaWF0ZSBjbGFzc1xyXG50byBjcmVhdGUgYSBwbGF5ZXIsIHlvdSBuZWVkIHRpIHBhc3MgUFJPUFMgdmFyaWFibGVcclxuZXhhbXBsZVxyXG57XHJcbiAgICBocDogMTAwLFxyXG4gICAgc3BlZWQ6IDEwLFxyXG4gICAgcG9zaXRpb25YOiAxMDAsXHJcbiAgICBwb3NpdGlvbnk6IDIwMCxcclxuICAgIGltYWdlOiBpbWcsXHJcbiAgICB0aWxlc0Ftb3VudDogMixcclxuICAgIHRpbGVIZWlnaHRMIDY0XHJcbiAgICBjdXJyZW50VGlsZTogMDsgXHJcbn1cclxuKi9cclxuaW1wb3J0IFNoaXAgZnJvbSAnLi9TaGlwJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIFNoaXAge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tCb3JkZXJzKHJlY3RhbmdsZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uWSA8IHJlY3RhbmdsZS50b3ApIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvblkgPSByZWN0YW5nbGUudG9wO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvblkgPiByZWN0YW5nbGUuYm90dG9tIC0gdGhpcy50aWxlSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25ZID0gcmVjdGFuZ2xlLmJvdHRvbSAtIHRoaXMudGlsZUhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb25YIDwgcmVjdGFuZ2xlLmxlZnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvblggPSByZWN0YW5nbGUubGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb25YID4gcmVjdGFuZ2xlLnJpZ2h0IC0gdGhpcy50aWxlV2lkdGgpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvblggPSByZWN0YW5nbGUucmlnaHQgLSB0aGlzLnRpbGVXaWR0aDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgT2JqZWN0IGZyb20gJy4vT2JqZWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAgZXh0ZW5kcyBPYmplY3Qge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5ocCA9IHByb3BzLmhwIHx8IDEwMDtcclxuICAgICAgICB0aGlzLnNob3RpbmdTcGVlZCA9IHByb3BzLnNob3RpbmdTcGVlZCB8fCAxO1xyXG4gICAgICAgIHRoaXMubGFzdFNob3QgPSBudWxsO1xyXG4gICAgICAgIHRoaXMud2VhcG9uID0gcHJvcHMud2VhcG9uIHx8IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdCgpIHsgICAgICAgICAgICBcclxuICAgICAgICBpZiAoIXRoaXMubGFzdFNob3QpIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0U2hvdCA9IHBlcmZvcm1hbmNlLm5vdygpOyBcclxuICAgICAgICAgICAgdGhpcy53ZWFwb24uc2hvdCh0aGlzLnBvc2l0aW9uWCArIHRoaXMudGlsZVdpZHRoIC8gMiwgdGhpcy5wb3NpdGlvblkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZHQgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMubGFzdFNob3Q7XHJcbiAgICAgICAgaWYgKGR0ID49IDEwMDAgLyB0aGlzLnNob3RpbmdTcGVlZCkge1xyXG4gICAgICAgICAgICB0aGlzLndlYXBvbi5zaG90KHRoaXMucG9zaXRpb25YICsgdGhpcy50aWxlV2lkdGggLyAyLCB0aGlzLnBvc2l0aW9uWSk7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFNob3QgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG59IiwiLy9hIGJhc2ljIGdhbWUgb2JqZWN0IGNsYXNzLiBpbmNsdWRlcyBtZXRob2RzIEVWRVJZIG9iamVjdCBvbiBhIHNjcmVlbiBoYXNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU9iamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBwcm9wcy5pbWFnZSB8fCBudWxsO1xyXG4gICAgICAgIHRoaXMudGlsZXNBbW91bnQgPSBwcm9wcy50aWxlc0Ftb3VudCB8fCAwO1xyXG4gICAgICAgIHRoaXMudGlsZVdpZHRoID0gcHJvcHMudGlsZVdpZHRoIHx8IDA7XHJcbiAgICAgICAgdGhpcy50aWxlSGVpZ2h0ID0gcHJvcHMudGlsZUhlaWdodCB8fCAwO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbGUgPSBwcm9wcy5jdXJyZW50VGlsZSB8fCAwO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBwcm9wcy5zcGVlZCB8fCAxMDtcclxuICAgICAgICB0aGlzLnR1cm5TcGVlZCA9IHByb3BzLnR1cm5TcGVlZCB8fCA1O1xyXG4gICAgICAgIHRoaXMuYW5nbGUgPSBwcm9wcy5hbmdsZSB8fCA5MDtcclxuICAgICAgICB0aGlzLnJhZEFuZ2xlID0gdGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODA7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblggPSBwcm9wcy5wb3NpdGlvblggfHwgMDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uWSA9IHByb3BzLnBvc2l0aW9uWSB8fCAwO1xyXG5cclxuICAgICAgICB0aGlzLm1vdmUgPSB0aGlzLm1vdmUuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlKGFuZ2xlKSB7XHJcbiAgICAgICAgY29uc3QgcmFkQW5nbGUgPSBhbmdsZSAqIE1hdGguUEkgLyAxODA7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblggKz0gTWF0aC5yb3VuZChNYXRoLmNvcyhyYWRBbmdsZSkgKiB0aGlzLnNwZWVkKTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uWSAtPSBNYXRoLnJvdW5kKE1hdGguc2luKHJhZEFuZ2xlKSAqIHRoaXMuc3BlZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHR1cm4oZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSAncmlnaHQnOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuZ2xlIC09IHRoaXMudHVyblNwZWVkO1xyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLmFuZ2xlIDw9IDAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmdsZSA9IDM2MCAtIHRoaXMuYW5nbGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJhZEFuZ2xlID0gdGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdsZWZ0Jzoge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmdsZSArPSB0aGlzLnR1cm5TcGVlZDtcclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5hbmdsZSA+PSAzNjAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmdsZSA9IHRoaXMuYW5nbGUgLSAzNjA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJhZEFuZ2xlID0gdGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRTcGVlZChzcGVlZCkge1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0VGlsZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50VGlsZSA8ICh0aGlzLnRpbGVzQW1vdW50IC0gMSkpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGlsZSsrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbGUgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRJbWFnZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGN0eCkge1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLnBvc2l0aW9uWCAgKyB0aGlzLnRpbGVXaWR0aCAvIDIsIHRoaXMucG9zaXRpb25ZICsgdGhpcy50aWxlSGVpZ2h0IC8gMik7XHJcbiAgICAgICAgY3R4LnJvdGF0ZSgtKHRoaXMuYW5nbGUgLSA5MCkgKiBNYXRoLlBJIC8gMTgwKTtcclxuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHRoaXMuY3VycmVudFRpbGUgKiB0aGlzLnRpbGVXaWR0aCwgMCwgdGhpcy50aWxlV2lkdGgsIHRoaXMudGlsZUhlaWdodCwgLXRoaXMudGlsZVdpZHRoIC8gMiwgLXRoaXMudGlsZUhlaWdodCAvIDIsIHRoaXMudGlsZVdpZHRoLCB0aGlzLnRpbGVIZWlnaHQpO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgU2hpcCBmcm9tICcuL1NoaXAnO1xyXG5pbXBvcnQgQmVoYXZpb3IgZnJvbSAnLi9CZWhhdmlvcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWVueVNoaXAgZXh0ZW5kcyBTaGlwIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnBhdXNlID0gdGhpcy5wYXVzZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmJlaGF2aW9yID0gbmV3IEJlaGF2aW9yKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vRU5FTVkgU0hJUCBMSUdJQyBBTkQgQUNUSU9OU1xyXG4gICAgcGF1c2UoKSB7fVxyXG4gXHJcbiAgICAvL1NFVCBCRUhBVklPUlxyXG4gICAgc2V0QmVoYXZpb3IoYWN0aW9ucykge1xyXG4gICAgICAgIHRoaXMuYmVoYXZpb3Iuc2V0QWN0aW9ucyhhY3Rpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBkb0N1cnJlbnRBY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5iZWhhdmlvci5kb0N1cnJlbnRBY3Rpb24oKTtcclxuICAgIH1cclxufSIsIi8vQkVIQVZJT1VSIENMQVNTLiBIQU5ETEVTIEFDVElPTidTIEVYRUNVVElPTlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCZWhhdmlvciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIC8vdGhpcyBpcyBhbiBhcnJheSBvZiBlbmVteSBhY3Rpb25zIGxpa2UgbW92ZSwgdHVybiwgc3RvcCBldGMuIFxyXG4gICAgICAgIC8vIHByb3BzLmFjdGlvbnMgPyB0aGlzLmFjdGlvbnMgPSBwcm9wcy5hY3Rpb25zLnNsaWNlKCkgOiBbXTtcclxuICAgICAgICBpZiAocHJvcHMgJiYgcHJvcHMuYWN0aW9ucykge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGlvbnMgPSBwcm9wcy5hY3Rpb25zO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aW9ucyA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50QWN0aW9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLmFjdGlvblN0YXJ0VGltZSA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aW9uU3RhcnRWYWx1ZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLy9TRVRUSU5HIEFDVElPTlNcclxuICAgIHNldEFjdGlvbnMoYWN0aW9ucykge1xyXG4gICAgICAgIHRoaXMuYWN0aW9ucyA9IGFjdGlvbnMuc2xpY2UoKTtcclxuICAgICAgICB0aGlzLm5leHRBY3Rpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRBY3Rpb24oYWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25zLnB1c2goYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvL05FWFQgQUNUSU9OU1xyXG4gICAgbmV4dEFjdGlvbigpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRBY3Rpb24gPSB0aGlzLmFjdGlvbnMuc2hpZnQoKTtcclxuICAgICAgICB0aGlzLmFjdGlvblN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuZG9DdXJyZW50QWN0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9DdXJyZW50QWN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRBY3Rpb24uZHVyYXRpb24pIHtcclxuICAgICAgICAgICAgbGV0IGR0ID0gcGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLmFjdGlvblN0YXJ0VGltZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkdCA+PSB0aGlzLmN1cnJlbnRBY3Rpb24uZHVyYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dEFjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25TdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QWN0aW9uLm1ldGhvZCh0aGlzLmN1cnJlbnRBY3Rpb24udmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50QWN0aW9uLm9uY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QWN0aW9uLm1ldGhvZCh0aGlzLmN1cnJlbnRBY3Rpb24udmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLm5leHRBY3Rpb24oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBY3Rpb24ubWV0aG9kKHRoaXMuY3VycmVudEFjdGlvbi52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59ICIsIi8vQU4gQUNUSU9OIENMQVNTLiBJUyBORUVERUQgVE8gQ09OU1RSVUNUIEJFSEFWSU9SIEFSUkFZUyBGT1IgQVVUT01BVElDIEVOVElUSUVTXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHRoaXMubWV0aG9kID0gcHJvcHMubWV0aG9kO1xyXG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBwcm9wcy5kdXJhdGlvbjtcclxuICAgICAgICB0aGlzLm9uY2UgPSBwcm9wcy5vbmNlO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBwcm9wcy52YWx1ZTtcclxuICAgICAgICB0aGlzLmFjdGlvblN0YXJ0VGltZSA9IG51bGw7XHJcbiAgICB9XHJcbn0gICIsImltcG9ydCBCdWxsZXQgZnJvbSAnLi9CdWxsZXQnO1xyXG5pbXBvcnQgT2JqZWN0SGFuZGxlciBmcm9tICcuL09iamVjdEhhbmRsZXInO1xyXG5cclxuY29uc3Qgb2JqZWN0SGFuZGxlciA9IG5ldyBPYmplY3RIYW5kbGVyKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWFwb24ge1xyXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IHByb3BzLmltYWdlO1xyXG4gICAgICAgIHRoaXMudGlsZVdpZHRoID0gcHJvcHMudGlsZVdpZHRoO1xyXG4gICAgICAgIHRoaXMudGlsZUhlaWdodCA9IHByb3BzLnRpbGVIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5kYW1hZ2UgPSBwcm9wcy5kYW1hZ2UgfHwgMTtcclxuICAgICAgICB0aGlzLnNwZWVkID0gcHJvcHMuc3BlZWQgfHwgMTtcclxuICAgIH1cclxuXHJcbiAgICBzaG90KHBvc2l0aW9uWCwgcG9zaXRpb25ZKSB7XHJcbiAgICAgICAgb2JqZWN0SGFuZGxlci5jcmVhdGVPYmplY3QoQnVsbGV0LCB7XHJcbiAgICAgICAgICAgIGltYWdlOiB0aGlzLmltYWdlLFxyXG4gICAgICAgICAgICB0aWxlV2lkdGg6IHRoaXMudGlsZVdpZHRoLFxyXG4gICAgICAgICAgICB0aWxlSGVpZ2h0OiB0aGlzLnRpbGVIZWlnaHQsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uWDogcG9zaXRpb25YLFxyXG4gICAgICAgICAgICBwb3NpdGlvblk6IHBvc2l0aW9uWSxcclxuICAgICAgICAgICAgZGFtYWdlOiB0aGlzLmRhbWFnZSxcclxuICAgICAgICAgICAgc3BlZWQ6IHRoaXMuc3BlZWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCBPYmplY3QgZnJvbSAnLi9PYmplY3QnO1xyXG5pbXBvcnQgT2JqZWN0SGFuZGxlciBmcm9tICcuL09iamVjdEhhbmRsZXInO1xyXG5cclxuY29uc3Qgb2JqZWN0SGFuZGxlciA9IG5ldyBPYmplY3RIYW5kbGVyKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWxsZXQgZXh0ZW5kcyBPYmplY3Qge1xyXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLmRhbWFnZSA9IHByb3BzLmRhbWFnZSB8fCAxO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBwcm9wcy5zcGVlZCB8fCAxO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLm1vdmUodGhpcy5hbmdsZSk7XHJcbiAgICAgICAgdGhpcy5jaGVja0JvcmRlcnMoKVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQm9yZGVycygpIHtcclxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvblkgLSB0aGlzLnRpbGVIZWlnaHQgPCAwKSB7XHJcbiAgICAgICAgICAgIG9iamVjdEhhbmRsZXIuZGVsZXRlT2JqZWN0KHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImxldCBrZXlTdGF0ZXMgPSB7IFxyXG4gICAgdXA6IGZhbHNlLFxyXG4gICAgcmlnaHQ6IGZhbHNlLFxyXG4gICAgZG93bjogZmFsc2UsXHJcbiAgICBsZWZ0OiBmYWxzZSxcclxuICAgIHNwYWNlOiBmYWxzZVxyXG59O1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gODcgfHwgZS5rZXlDb2RlID09PSAzOCkge1xyXG4gICAgICAgIGtleVN0YXRlcy51cCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSA2NSB8fCBlLmtleUNvZGUgPT09IDM3KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0EgaXMgcHJlc3NlZCEnKTtcclxuICAgICAgICBrZXlTdGF0ZXMubGVmdCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSA4MyB8fCBlLmtleUNvZGUgPT09IDQwKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1MgaXMgcHJlc3NlZCEnKTtcclxuICAgICAgICBrZXlTdGF0ZXMuZG93biA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSA2OCB8fCBlLmtleUNvZGUgPT09IDM5KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0QgaXMgcHJlc3NlZCEnKTtcclxuICAgICAgICBrZXlTdGF0ZXMucmlnaHQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMzIpIHtcclxuICAgICAgICBrZXlTdGF0ZXMuc3BhY2UgPSB0cnVlO1xyXG4gICAgfVxyXG59LCB0cnVlKTtcclxuICAgIFxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gODcgfHwgZS5rZXlDb2RlID09PSAzOCkge1xyXG4gICAgICAgIGtleVN0YXRlcy51cCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gNjUgfHwgZS5rZXlDb2RlID09PSAzNykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdBIGlzIHByZXNzZWQhJyk7XHJcbiAgICAgICAga2V5U3RhdGVzLmxlZnQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChlLmtleUNvZGUgPT09IDgzIHx8IGUua2V5Q29kZSA9PT0gNDApIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnUyBpcyBwcmVzc2VkIScpO1xyXG4gICAgICAgIGtleVN0YXRlcy5kb3duID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSA2OCB8fCBlLmtleUNvZGUgPT09IDM5KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0QgaXMgcHJlc3NlZCEnKTtcclxuICAgICAgICBrZXlTdGF0ZXMucmlnaHQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChlLmtleUNvZGUgPT09IDMyKSB7XHJcbiAgICAgICAga2V5U3RhdGVzLnNwYWNlID0gZmFsc2U7XHJcbiAgICB9XHJcbn0sIHRydWUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQga2V5U3RhdGVzOyJdLCJzb3VyY2VSb290IjoiIn0=