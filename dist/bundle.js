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
            bulletImage: mediaHandler.getImage('bullet'),
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
    
    createObject(Class, props) {
        let obj = new Class(props);
        this.addObject(obj);
        return obj;
    }

    addObject(obj) {
        _gameObjects__WEBPACK_IMPORTED_MODULE_0__["default"].push(obj);
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
/* harmony import */ var _DynamicObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);


class Ship extends _DynamicObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Object; });
//a basic game object class. includes methods EVERY object on a screen has
class Object {
    constructor(props) {
        this.name = props.name;
        this.group = props.group || null;
        this.image = props.image || null;
        this.tilesAmount = props.tilesAmount || 0;
        this.tileWidth = props.tileWidth || 0;
        this.tileHeight = props.tileHeight || 0;
        this.currentTile = props.currentTile || 0;
        this.angle = props.angle || 90;
        this.radAngle = this.angle * Math.PI / 180;
        this.positionX = props.positionX || 0;
        this.positionY = props.positionY || 0;
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
        this.name = props.name;
        this.group = props.group;
        this.bulletImage = props.bulletImage;
        this.tileWidth = props.tileWidth;
        this.tileHeight = props.tileHeight;
        this.damage = props.damage || 1;
        this.speed = props.speed || 1;
    }

    shot(positionX, positionY) {
        objectHandler.createObject(_Bullet__WEBPACK_IMPORTED_MODULE_0__["default"], {
            group: 'playerBullet',
            image: this.bulletImage,
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
/* harmony import */ var _DynamicObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _ObjectHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);



const objectHandler = new _ObjectHandler__WEBPACK_IMPORTED_MODULE_1__["default"]();

class Bullet extends _DynamicObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DynamicObject; });
/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);


class DynamicObject extends _Object__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(props) {
        super(props);
        this.speed = props.speed || 10;
        this.turnSpeed = props.turnSpeed || 5;
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
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvTWVkaWFIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lTWVkaWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1NjZW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9HYW1lV2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9PYmplY3RIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvUGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TaGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0VtZW55U2hpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvV2VhcG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9CdWxsZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2tleVN0YXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvRHluYW1pY09iamVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFr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QTtBQUFBO0FBQUE7QUFBQTtBQUE0QztBQUNBOztBQUU1QywwQkFBMEIsc0RBQWE7O0FBRXhCLHFCQUFxQixzREFBYTtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3ZCQTtBQUFBLGlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRWMsd0VBQVMsRTs7Ozs7OztBQ2xEeEI7QUFBQTtBQUFBO0FBQThCOztBQUVmLDRCQUE0QiwrQ0FBTTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBHYW1lIGZyb20gJy4vR2FtZSc7XHJcblxyXG4vL0dBTUUgSU5JVCA8PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcclxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKTtcclxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcyk7XHJcbmdhbWUuc3RhcnQoKTsgICAgIiwiaW1wb3J0IE1lZGlhSGFuZGxlciBmcm9tICcuL01lZGlhSGFuZGxlcic7XHJcbmltcG9ydCBHYW1lU2NlbmUgZnJvbSAnLi9TY2VuZSc7XHJcblxyXG5jb25zdCBtZWRpYUhhbmRsZXIgPSBuZXcgTWVkaWFIYW5kbGVyKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG5cclxuICAgICAgICAvL2dhbWUgc3RhdGUgKG9mZiA9IDAsIG9uID0gMSwgcGF1c2UgPSAyKVxyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gMDtcclxuXHJcbiAgICAgICAgLy9zYW1wbGUgb2YgYSBzdGFnZSBjbGFzc1xyXG4gICAgICAgIHRoaXMuc3RhZ2UgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vZ2FtZSBpbml0aWFsaXphdGlvbiBwcm9jZXNzXHJcbiAgICBhc3luYyBpbml0KCkge1xyXG4gICAgICAgIG1lZGlhSGFuZGxlci5zZXRJbWFnZVNvdXJjZXMoW1xyXG4gICAgICAgICAgICAnLi9kaXN0L2ltYWdlcy9zaGlwLnBuZycsXHJcbiAgICAgICAgICAgICcuL2Rpc3QvaW1hZ2VzL2VuZW15LnBuZycsXHJcbiAgICAgICAgICAgICcuL2Rpc3QvaW1hZ2VzL2J1bGxldC5wbmcnLFxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICAvL3ByZWxvYWQgaW1hZ2VzXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0ltYWdlIHByZWxvYWRpbmcuJyk7XHJcbiAgICAgICAgYXdhaXQgbWVkaWFIYW5kbGVyLnByZWxvYWRBbGxJbWFnZXMoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnSW1hZ2VzIHByZWxvYWRpbmcgZG9uZS4nKTtcclxuICAgIH1cclxuICAgIC8vZ2FtZSBzdGFydFxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PXdpcD09PT09PT09PT09PT09PT09XHJcbiAgICBhc3luYyBzdGFydCgpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLmluaXQoKTtcclxuXHJcbiAgICAgICAgLy9nYW1lIG9uIHN0YXRlXHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSAxO1xyXG5cclxuICAgICAgICAvL2NyZWF0aW9uIG9mIHN0YWdlIDEgPD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBXaVAhXHJcbiAgICAgICAgdGhpcy5zdGFnZSA9IG5ldyBHYW1lU2NlbmUoe1xyXG4gICAgICAgICAgICBuYW1lOiAnQSBUZXN0IEdhbWUgU3RhZ2UnLFxyXG4gICAgICAgICAgICBjYW52YXM6IHRoaXMuY2FudmFzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3RhZ2Uuc3RhcnQoKTtcclxuICAgIH0gIFxyXG59IiwiaW1wb3J0IGdhbWVNZWRpYSBmcm9tICcuL2dhbWVNZWRpYSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYUhhbmRsZXIge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICB0aGlzLmltYWdlU291cmNlcyA9IChwcm9wcyAmJiBwcm9wcy5pbWFnZVNvdXJjZXMuc2xpY2UoKSkgfHwgW107XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SW1hZ2VTb3VyY2VzKHNvdXJjZXNBcnJheSkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VTb3VyY2VzID0gc291cmNlc0FycmF5LnNsaWNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW1hZ2VTb3VyY2VzKCkge1xyXG4gICAgICAgIHJldHVybiAgdGhpcy5pbWFnZVNvdXJjZXM7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkSW1hZ2UoaW1hZ2UsIHNyYykge1xyXG4gICAgICAgIGNvbnN0IGltYWdlTmFtZSA9IHNyYy5tYXRjaCgvKFxcdyspKD86XFwuXFx3KykkLylbMV07XHJcbiAgICAgICAgZ2FtZU1lZGlhW2ltYWdlTmFtZV0gPSBpbWFnZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbWFnZShpbWFnZSkge1xyXG4gICAgICAgIHJldHVybiBnYW1lTWVkaWFbaW1hZ2VdO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHByZWxvYWRBbGxJbWFnZXMoKSB7XHJcbiAgICAgICAgZm9yKGxldCBzcmMgb2YgdGhpcy5pbWFnZVNvdXJjZXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYExvYWRpbmcgJHtzcmN9LmApO1xyXG4gICAgICAgICAgICB0aGlzLmFkZEltYWdlKGF3YWl0IHRoaXMucHJlbG9hZEltYWdlKHNyYyksIHNyYyk7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICBwcmVsb2FkSW1hZ2Uoc3JjKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEltYWdlICR7aW1nLnNyY30gbG9hZGVkLmApXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGltZyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGltZy5vbmVycm9yID0gKCkgPT4gcmVqZWN0KCk7XHJcbiAgICAgICAgICAgIGltZy5zcmMgPSBzcmM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJsZXQgZ2FtZU1lZGlhID0ge307XHJcbmV4cG9ydCBkZWZhdWx0IGdhbWVNZWRpYTsiLCJpbXBvcnQgR2FtZVdpbmRvdyBmcm9tICcuL0dhbWVXaW5kb3cnO1xyXG5pbXBvcnQgTWVkaWFIYW5kbGVyIGZyb20gJy4vTWVkaWFIYW5kbGVyJztcclxuaW1wb3J0IE9iamVjdEhhbmRsZXIgZnJvbSAnLi9PYmplY3RIYW5kbGVyJztcclxuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XHJcbmltcG9ydCBFbWVueVNoaXAgZnJvbSAnLi9FbWVueVNoaXAnO1xyXG5pbXBvcnQgQWN0aW9uIGZyb20gJy4vQWN0aW9uJztcclxuaW1wb3J0IFdlYXBvbiBmcm9tICcuL1dlYXBvbic7XHJcbmltcG9ydCBrZXlTdGF0ZXMgZnJvbSAnLi9rZXlTdGF0ZXMnO1xyXG5cclxuY29uc3QgbWVkaWFIYW5kbGVyID0gbmV3IE1lZGlhSGFuZGxlcigpO1xyXG5jb25zdCBvYmplY3RIYW5kbGVyID0gbmV3IE9iamVjdEhhbmRsZXIoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHByb3BzLm5hbWU7XHJcbiAgICAgICAgdGhpcy5nYW1lV2luZG93ID0gbmV3IEdhbWVXaW5kb3coe1xyXG4gICAgICAgICAgICBjYW52YXM6IHByb3BzLmNhbnZhcyxcclxuICAgICAgICAgICAgd2lkdGg6IDQwMCxcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MDAsXHJcbiAgICAgICAgICAgIC8vIHNjYWxlOiAyXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0SWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZnBzID0gNjA7XHJcbiAgICAgICAgdGhpcy50cHMgPSAxMjtcclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLmxhc3RUaWxlVGltZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5mcmFtZURlbGF5ID0gTWF0aC5mbG9vcigxMDAwIC8gdGhpcy5mcHMpO1xyXG4gICAgICAgIHRoaXMudGlsZURlbGF5ID0gIE1hdGguZmxvb3IoMTAwMCAvIHRoaXMudHBzKTtcclxuICAgICAgICB0aGlzLmRlZmF1bHRTY2FsZSA9IDE7XHJcbiAgICAgICAgdGhpcy5vYmplY3RzID0gb2JqZWN0SGFuZGxlci5nZXRPYmplY3RzKCk7XHJcbiAgICAgICAgdGhpcy5sYXllcnMgPSB7XHJcbiAgICAgICAgICAgIG92ZXJsYXk6IFtdLFxyXG4gICAgICAgICAgICBmcm9udDogW10sXHJcbiAgICAgICAgICAgIG1haW46IFtdLFxyXG4gICAgICAgICAgICBiYWNrOiBbXSxcclxuICAgICAgICAgICAgYmFja2Jyb3VuZDogW11cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubGF5ZXJzQXJyYXkgPSBbXTtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9ICcjMTExMTExJztcclxuXHJcbiAgICAgICAgdGhpcy5mcmFtZSA9IHRoaXMuZnJhbWUuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0lOSVRJQUxJWkFUSU9OIDw9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGFzeW5jIGluaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFNjZW5lIFwiJHsgdGhpcy5uYW1lIH1cIiBsb2FkaW5nLmApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyBvYmplY3RzLicpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuY3JlYXRlU2NlbmVPYmplY3RzKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIG9iamVjdHMgZG9uZS4nKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgU2NlbmUgXCIkeyB0aGlzLm5hbWUgfVwiIGxvYWRlZC5gKTtcclxuICAgIH1cclxuXHJcbiAgICAvL09CSkVDVCBDUkVBVElPTiA8PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjcmVhdGVTY2VuZU9iamVjdHMoKSB7XHJcbiAgICAgICAgY29uc3QgYmFzaWNXZWFwb24gPSBuZXcgV2VhcG9uKHtcclxuICAgICAgICAgICAgYnVsbGV0SW1hZ2U6IG1lZGlhSGFuZGxlci5nZXRJbWFnZSgnYnVsbGV0JyksXHJcbiAgICAgICAgICAgIHRpbGVXaWR0aDogMSxcclxuICAgICAgICAgICAgdGlsZUhlaWdodDogMyxcclxuICAgICAgICAgICAgc3BlZWQ6IDEwLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllciA9IG9iamVjdEhhbmRsZXIuY3JlYXRlT2JqZWN0KFBsYXllciwge1xyXG4gICAgICAgICAgICBocDogMTAwLFxyXG4gICAgICAgICAgICBzcGVlZDogNSxcclxuICAgICAgICAgICAgc2hvdGluZ1NwZWVkOiAxMCxcclxuICAgICAgICAgICAgaW1hZ2U6IG1lZGlhSGFuZGxlci5nZXRJbWFnZSgnc2hpcCcpLFxyXG4gICAgICAgICAgICB0aWxlc0Ftb3VudDogMSxcclxuICAgICAgICAgICAgdGlsZVdpZHRoOiAxNixcclxuICAgICAgICAgICAgdGlsZUhlaWdodDogMTYsXHJcbiAgICAgICAgICAgIHdlYXBvbjogYmFzaWNXZWFwb25cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBsYXllci5wb3NpdGlvblggPSB0aGlzLmdhbWVXaW5kb3cud2lkdGggLyAyIC0gdGhpcy5wbGF5ZXIudGlsZVdpZHRoIC8gMjtcclxuICAgICAgICB0aGlzLnBsYXllci5wb3NpdGlvblkgPSB0aGlzLmdhbWVXaW5kb3cuaGVpZ2h0IC8gMiAtIHRoaXMucGxheWVyLnRpbGVIZWlnaHQgLyAyO1xyXG4gICAgICAgIHRoaXMucHVzaFRvTGF5ZXIodGhpcy5wbGF5ZXIsICdtYWluJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wbGF5ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vc2V0cyBhIHJlbmRlciBsYXllclxyXG4gICAgcHVzaFRvTGF5ZXIob2JqLCBsYXllcikge1xyXG4gICAgICAgIHRoaXMubGF5ZXJzW2xheWVyXS5wdXNoKG9iaik7XHJcbiAgICAgICAgdGhpcy5nZXRMYXllcnNBcnJheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdHJhbnNmb3JtcyBsYXllcnMgb2JqZWN0IGludG8gc2ltcGxlIGFycmF5IHRpIHNpbXBsaWZ5IHJlbmRlcmluZ1xyXG4gICAgZ2V0TGF5ZXJzQXJyYXkoKSB7XHJcbiAgICAgICAgdGhpcy5sYXllcnNBcnJheSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGxheWVyc1ZhbHVlcyA9IE9iamVjdC52YWx1ZXModGhpcy5sYXllcnMpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBsYXllcnNWYWx1ZXMubGVuZ3RoIC0gMTsgaSA+PTA7IGktLSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBvYmogb2YgbGF5ZXJzVmFsdWVzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxheWVyc0FycmF5LnB1c2gob2JqKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL3N0YXJ0IHNjZW5lXHJcbiAgICBhc3luYyBzdGFydCgpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLmluaXQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnR2FtZSBzdGFydGVkLicpXHJcblxyXG4gICAgICAgIC8vIGdhbWUgc3RhcnQgdGltZVxyXG4gICAgICAgIHRoaXMuc3RhcnRTY2VuZUxvb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydFNjZW5lTG9vcCgpIHtcclxuICAgICAgICAvLyBnYW1lIHN0YXJ0IHRpbWVcclxuICAgICAgICB0aGlzLmxhc3QgPSB0aGlzLmxhc3RUaWxlVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHRoaXMucmVxdWVzdElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZnJhbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vTE9HSUMgPD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMua2V5SGFuZGxlcigpO1xyXG4gICAgICAgIGZvciAobGV0IG9iaiBvZiB0aGlzLm9iamVjdHMpIHtcclxuICAgICAgICAgICAgaWYgKG9iai51cGRhdGUpIHtcclxuICAgICAgICAgICAgICAgIG9iai51cGRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy9BTklNQVRJT04gPD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgZnJhbWUoKSB7XHJcbiAgICAgICAgbGV0IGR0ID0gcGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLmxhc3RUaW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChkdCA8IHRoaXMuZnJhbWVEZWxheSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmZyYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hUaWxlcyh0aGlzLm9iamVjdHMpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0SWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5mcmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hUaWxlcyhvYmplY3RzKSB7XHJcbiAgICAgICAgbGV0IGR0ID0gcGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLmxhc3RUaWxlVGltZTtcclxuICAgICAgICBpZiAoZHQgPiB0aGlzLnRpbGVEZWxheSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBvYmogb2Ygb2JqZWN0cykge1xyXG4gICAgICAgICAgICAgICAgb2JqLm5leHRUaWxlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sYXN0VGlsZVRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9SRU5ERVIgPD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuZmlsbEZpZWxkKCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IG9iaiBvZiB0aGlzLm9iamVjdHMpIHtcclxuICAgICAgICAgICAgb2JqLmRyYXcodGhpcy5nYW1lV2luZG93LmN0eCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuXHJcbiAgICBmaWxsRmllbGQoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lV2luZG93LmN0eC5maWxsU3R5bGUgPSB0aGlzLmJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICB0aGlzLmdhbWVXaW5kb3cuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZ2FtZVdpbmRvdy53aWR0aCwgdGhpcy5nYW1lV2luZG93LmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAga2V5SGFuZGxlcigpIHtcclxuICAgICAgICBpZiAoa2V5U3RhdGVzLnNwYWNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnNob3QoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChrZXlTdGF0ZXMudXApIHtcclxuICAgICAgICAgICAgaWYgKGtleVN0YXRlcy5yaWdodCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZSg0NSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5U3RhdGVzLmxlZnQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZSgxMzUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZSg5MCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGtleVN0YXRlcy5kb3duKSB7XHJcbiAgICAgICAgICAgIGlmIChrZXlTdGF0ZXMucmlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmUoMzE1KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXlTdGF0ZXMubGVmdCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlKDIyNSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlKDI3MCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGtleVN0YXRlcy5sZWZ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmUoMTgwKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGtleVN0YXRlcy5yaWdodCl7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmUoMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBsYXllci5jaGVja0JvcmRlcnModGhpcy5nYW1lV2luZG93KTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVXaW5kb3cge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IHByb3BzLmNhbnZhcztcclxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHByb3BzLndpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gcHJvcHMuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMudG9wID0gMDtcclxuICAgICAgICB0aGlzLnJpZ2h0ID0gcHJvcHMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5ib3R0b20gPSBwcm9wcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5sZWZ0ID0gMDtcclxuICAgICAgICB0aGlzLnNjYWxlID0gcHJvcHMuc2NhbGUgfHwgMTtcclxuXHJcbiAgICAgICAgaWYgKHByb3BzLnNjYWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NhbGVDb250ZXh0KHRoaXMuc2NhbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzY2FsZUNvbnRleHQoc2NhbGUpIHtcclxuICAgICAgICB0aGlzLmN0eC5zY2FsZShzY2FsZSwgc2NhbGUpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IGdhbWVPYmplY3RzIGZyb20gJy4vZ2FtZU9iamVjdHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0SGFuZGxlciB7XHJcbiAgICBcclxuICAgIGNyZWF0ZU9iamVjdChDbGFzcywgcHJvcHMpIHtcclxuICAgICAgICBsZXQgb2JqID0gbmV3IENsYXNzKHByb3BzKTtcclxuICAgICAgICB0aGlzLmFkZE9iamVjdChvYmopO1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkT2JqZWN0KG9iaikge1xyXG4gICAgICAgIGdhbWVPYmplY3RzLnB1c2gob2JqKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRPYmplY3Qobikge1xyXG4gICAgICAgIHJldHVybiBnYW1lT2JqZWN0c1tuXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRPYmplY3RzKCkge1xyXG4gICAgICAgIHJldHVybiBnYW1lT2JqZWN0cztcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVPYmplY3Qob2JqKSB7XHJcbiAgICAgICAgZ2FtZU9iamVjdHMuc3BsaWNlKGdhbWVPYmplY3RzLmluZGV4T2Yob2JqKSwgMSk7XHJcbiAgICB9XHJcbn0iLCJsZXQgb2JqZWN0cyA9IFtdO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgb2JqZWN0czsiLCJpbXBvcnQgU2hpcCBmcm9tICcuL1NoaXAnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgU2hpcCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0JvcmRlcnMocmVjdGFuZ2xlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb25ZIDwgcmVjdGFuZ2xlLnRvcCkge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uWSA9IHJlY3RhbmdsZS50b3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uWSA+IHJlY3RhbmdsZS5ib3R0b20gLSB0aGlzLnRpbGVIZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvblkgPSByZWN0YW5nbGUuYm90dG9tIC0gdGhpcy50aWxlSGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvblggPCByZWN0YW5nbGUubGVmdCkge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uWCA9IHJlY3RhbmdsZS5sZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvblggPiByZWN0YW5nbGUucmlnaHQgLSB0aGlzLnRpbGVXaWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uWCA9IHJlY3RhbmdsZS5yaWdodCAtIHRoaXMudGlsZVdpZHRoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBEeW5hbWljT2JqZWN0IGZyb20gJy4vRHluYW1pY09iamVjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIGV4dGVuZHMgRHluYW1pY09iamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmhwID0gcHJvcHMuaHAgfHwgMTAwO1xyXG4gICAgICAgIHRoaXMuc2hvdGluZ1NwZWVkID0gcHJvcHMuc2hvdGluZ1NwZWVkIHx8IDE7XHJcbiAgICAgICAgdGhpcy5sYXN0U2hvdCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy53ZWFwb24gPSBwcm9wcy53ZWFwb24gfHwgbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzaG90KCkgeyAgICAgICAgICAgIFxyXG4gICAgICAgIGlmICghdGhpcy5sYXN0U2hvdCkge1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RTaG90ID0gcGVyZm9ybWFuY2Uubm93KCk7IFxyXG4gICAgICAgICAgICB0aGlzLndlYXBvbi5zaG90KHRoaXMucG9zaXRpb25YICsgdGhpcy50aWxlV2lkdGggLyAyLCB0aGlzLnBvc2l0aW9uWSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBkdCA9IHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5sYXN0U2hvdDtcclxuICAgICAgICBpZiAoZHQgPj0gMTAwMCAvIHRoaXMuc2hvdGluZ1NwZWVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2VhcG9uLnNob3QodGhpcy5wb3NpdGlvblggKyB0aGlzLnRpbGVXaWR0aCAvIDIsIHRoaXMucG9zaXRpb25ZKTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0U2hvdCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbn0iLCIvL2EgYmFzaWMgZ2FtZSBvYmplY3QgY2xhc3MuIGluY2x1ZGVzIG1ldGhvZHMgRVZFUlkgb2JqZWN0IG9uIGEgc2NyZWVuIGhhc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYmplY3Qge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBwcm9wcy5uYW1lO1xyXG4gICAgICAgIHRoaXMuZ3JvdXAgPSBwcm9wcy5ncm91cCB8fCBudWxsO1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBwcm9wcy5pbWFnZSB8fCBudWxsO1xyXG4gICAgICAgIHRoaXMudGlsZXNBbW91bnQgPSBwcm9wcy50aWxlc0Ftb3VudCB8fCAwO1xyXG4gICAgICAgIHRoaXMudGlsZVdpZHRoID0gcHJvcHMudGlsZVdpZHRoIHx8IDA7XHJcbiAgICAgICAgdGhpcy50aWxlSGVpZ2h0ID0gcHJvcHMudGlsZUhlaWdodCB8fCAwO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbGUgPSBwcm9wcy5jdXJyZW50VGlsZSB8fCAwO1xyXG4gICAgICAgIHRoaXMuYW5nbGUgPSBwcm9wcy5hbmdsZSB8fCA5MDtcclxuICAgICAgICB0aGlzLnJhZEFuZ2xlID0gdGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODA7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblggPSBwcm9wcy5wb3NpdGlvblggfHwgMDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uWSA9IHByb3BzLnBvc2l0aW9uWSB8fCAwO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHRUaWxlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaWxlIDwgKHRoaXMudGlsZXNBbW91bnQgLSAxKSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUaWxlKys7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGlsZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEltYWdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoY3R4KSB7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMucG9zaXRpb25YICArIHRoaXMudGlsZVdpZHRoIC8gMiwgdGhpcy5wb3NpdGlvblkgKyB0aGlzLnRpbGVIZWlnaHQgLyAyKTtcclxuICAgICAgICBjdHgucm90YXRlKC0odGhpcy5hbmdsZSAtIDkwKSAqIE1hdGguUEkgLyAxODApO1xyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy5jdXJyZW50VGlsZSAqIHRoaXMudGlsZVdpZHRoLCAwLCB0aGlzLnRpbGVXaWR0aCwgdGhpcy50aWxlSGVpZ2h0LCAtdGhpcy50aWxlV2lkdGggLyAyLCAtdGhpcy50aWxlSGVpZ2h0IC8gMiwgdGhpcy50aWxlV2lkdGgsIHRoaXMudGlsZUhlaWdodCk7XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxufSIsImltcG9ydCBTaGlwIGZyb20gJy4vU2hpcCc7XHJcbmltcG9ydCBCZWhhdmlvciBmcm9tICcuL0JlaGF2aW9yJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtZW55U2hpcCBleHRlbmRzIFNoaXAge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMucGF1c2UgPSB0aGlzLnBhdXNlLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuYmVoYXZpb3IgPSBuZXcgQmVoYXZpb3IoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy9FTkVNWSBTSElQIExJR0lDIEFORCBBQ1RJT05TXHJcbiAgICBwYXVzZSgpIHt9XHJcbiBcclxuICAgIC8vU0VUIEJFSEFWSU9SXHJcbiAgICBzZXRCZWhhdmlvcihhY3Rpb25zKSB7XHJcbiAgICAgICAgdGhpcy5iZWhhdmlvci5zZXRBY3Rpb25zKGFjdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvQ3VycmVudEFjdGlvbigpIHtcclxuICAgICAgICB0aGlzLmJlaGF2aW9yLmRvQ3VycmVudEFjdGlvbigpO1xyXG4gICAgfVxyXG59IiwiLy9CRUhBVklPVVIgQ0xBU1MuIEhBTkRMRVMgQUNUSU9OJ1MgRVhFQ1VUSU9OXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJlaGF2aW9yIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgLy90aGlzIGlzIGFuIGFycmF5IG9mIGVuZW15IGFjdGlvbnMgbGlrZSBtb3ZlLCB0dXJuLCBzdG9wIGV0Yy4gXHJcbiAgICAgICAgLy8gcHJvcHMuYWN0aW9ucyA/IHRoaXMuYWN0aW9ucyA9IHByb3BzLmFjdGlvbnMuc2xpY2UoKSA6IFtdO1xyXG4gICAgICAgIGlmIChwcm9wcyAmJiBwcm9wcy5hY3Rpb25zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aW9ucyA9IHByb3BzLmFjdGlvbnM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hY3Rpb25zID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRBY3Rpb24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uU3RhcnRUaW1lID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5hY3Rpb25TdGFydFZhbHVlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvL1NFVFRJTkcgQUNUSU9OU1xyXG4gICAgc2V0QWN0aW9ucyhhY3Rpb25zKSB7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25zID0gYWN0aW9ucy5zbGljZSgpO1xyXG4gICAgICAgIHRoaXMubmV4dEFjdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEFjdGlvbihhY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmFjdGlvbnMucHVzaChhY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vTkVYVCBBQ1RJT05TXHJcbiAgICBuZXh0QWN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEFjdGlvbiA9IHRoaXMuYWN0aW9ucy5zaGlmdCgpO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uU3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgdGhpcy5kb0N1cnJlbnRBY3Rpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBkb0N1cnJlbnRBY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEFjdGlvbi5kdXJhdGlvbikge1xyXG4gICAgICAgICAgICBsZXQgZHQgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMuYWN0aW9uU3RhcnRUaW1lO1xyXG5cclxuICAgICAgICAgICAgaWYgKGR0ID49IHRoaXMuY3VycmVudEFjdGlvbi5kdXJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0QWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvblN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBY3Rpb24ubWV0aG9kKHRoaXMuY3VycmVudEFjdGlvbi52YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRBY3Rpb24ub25jZSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBY3Rpb24ubWV0aG9kKHRoaXMuY3VycmVudEFjdGlvbi52YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dEFjdGlvbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFjdGlvbi5tZXRob2QodGhpcy5jdXJyZW50QWN0aW9uLnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0gIiwiLy9BTiBBQ1RJT04gQ0xBU1MuIElTIE5FRURFRCBUTyBDT05TVFJVQ1QgQkVIQVZJT1IgQVJSQVlTIEZPUiBBVVRPTUFUSUMgRU5USVRJRVNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5tZXRob2QgPSBwcm9wcy5tZXRob2Q7XHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IHByb3BzLmR1cmF0aW9uO1xyXG4gICAgICAgIHRoaXMub25jZSA9IHByb3BzLm9uY2U7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHByb3BzLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uU3RhcnRUaW1lID0gbnVsbDtcclxuICAgIH1cclxufSAgIiwiaW1wb3J0IEJ1bGxldCBmcm9tICcuL0J1bGxldCc7XHJcbmltcG9ydCBPYmplY3RIYW5kbGVyIGZyb20gJy4vT2JqZWN0SGFuZGxlcic7XHJcblxyXG5jb25zdCBvYmplY3RIYW5kbGVyID0gbmV3IE9iamVjdEhhbmRsZXIoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYXBvbiB7XHJcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBwcm9wcy5uYW1lO1xyXG4gICAgICAgIHRoaXMuZ3JvdXAgPSBwcm9wcy5ncm91cDtcclxuICAgICAgICB0aGlzLmJ1bGxldEltYWdlID0gcHJvcHMuYnVsbGV0SW1hZ2U7XHJcbiAgICAgICAgdGhpcy50aWxlV2lkdGggPSBwcm9wcy50aWxlV2lkdGg7XHJcbiAgICAgICAgdGhpcy50aWxlSGVpZ2h0ID0gcHJvcHMudGlsZUhlaWdodDtcclxuICAgICAgICB0aGlzLmRhbWFnZSA9IHByb3BzLmRhbWFnZSB8fCAxO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBwcm9wcy5zcGVlZCB8fCAxO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3QocG9zaXRpb25YLCBwb3NpdGlvblkpIHtcclxuICAgICAgICBvYmplY3RIYW5kbGVyLmNyZWF0ZU9iamVjdChCdWxsZXQsIHtcclxuICAgICAgICAgICAgZ3JvdXA6ICdwbGF5ZXJCdWxsZXQnLFxyXG4gICAgICAgICAgICBpbWFnZTogdGhpcy5idWxsZXRJbWFnZSxcclxuICAgICAgICAgICAgdGlsZVdpZHRoOiB0aGlzLnRpbGVXaWR0aCxcclxuICAgICAgICAgICAgdGlsZUhlaWdodDogdGhpcy50aWxlSGVpZ2h0LFxyXG4gICAgICAgICAgICBwb3NpdGlvblg6IHBvc2l0aW9uWCxcclxuICAgICAgICAgICAgcG9zaXRpb25ZOiBwb3NpdGlvblksXHJcbiAgICAgICAgICAgIGRhbWFnZTogdGhpcy5kYW1hZ2UsXHJcbiAgICAgICAgICAgIHNwZWVkOiB0aGlzLnNwZWVkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgRHluYW1pY09iamVjdCBmcm9tICcuL0R5bmFtaWNPYmplY3QnO1xyXG5pbXBvcnQgT2JqZWN0SGFuZGxlciBmcm9tICcuL09iamVjdEhhbmRsZXInO1xyXG5cclxuY29uc3Qgb2JqZWN0SGFuZGxlciA9IG5ldyBPYmplY3RIYW5kbGVyKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWxsZXQgZXh0ZW5kcyBEeW5hbWljT2JqZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5kYW1hZ2UgPSBwcm9wcy5kYW1hZ2UgfHwgMTtcclxuICAgICAgICB0aGlzLnNwZWVkID0gcHJvcHMuc3BlZWQgfHwgMTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlKHRoaXMuYW5nbGUpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tCb3JkZXJzKClcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0JvcmRlcnMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb25ZIC0gdGhpcy50aWxlSGVpZ2h0IDwgMCkge1xyXG4gICAgICAgICAgICBvYmplY3RIYW5kbGVyLmRlbGV0ZU9iamVjdCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJsZXQga2V5U3RhdGVzID0geyBcclxuICAgIHVwOiBmYWxzZSxcclxuICAgIHJpZ2h0OiBmYWxzZSxcclxuICAgIGRvd246IGZhbHNlLFxyXG4gICAgbGVmdDogZmFsc2UsXHJcbiAgICBzcGFjZTogZmFsc2VcclxufTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcclxuICAgIGlmIChlLmtleUNvZGUgPT09IDg3IHx8IGUua2V5Q29kZSA9PT0gMzgpIHtcclxuICAgICAgICBrZXlTdGF0ZXMudXAgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gNjUgfHwgZS5rZXlDb2RlID09PSAzNykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdBIGlzIHByZXNzZWQhJyk7XHJcbiAgICAgICAga2V5U3RhdGVzLmxlZnQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gODMgfHwgZS5rZXlDb2RlID09PSA0MCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdTIGlzIHByZXNzZWQhJyk7XHJcbiAgICAgICAga2V5U3RhdGVzLmRvd24gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gNjggfHwgZS5rZXlDb2RlID09PSAzOSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdEIGlzIHByZXNzZWQhJyk7XHJcbiAgICAgICAga2V5U3RhdGVzLnJpZ2h0ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChlLmtleUNvZGUgPT09IDMyKSB7XHJcbiAgICAgICAga2V5U3RhdGVzLnNwYWNlID0gdHJ1ZTtcclxuICAgIH1cclxufSwgdHJ1ZSk7XHJcbiAgICBcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcclxuICAgIGlmIChlLmtleUNvZGUgPT09IDg3IHx8IGUua2V5Q29kZSA9PT0gMzgpIHtcclxuICAgICAgICBrZXlTdGF0ZXMudXAgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChlLmtleUNvZGUgPT09IDY1IHx8IGUua2V5Q29kZSA9PT0gMzcpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnQSBpcyBwcmVzc2VkIScpO1xyXG4gICAgICAgIGtleVN0YXRlcy5sZWZ0ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSA4MyB8fCBlLmtleUNvZGUgPT09IDQwKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1MgaXMgcHJlc3NlZCEnKTtcclxuICAgICAgICBrZXlTdGF0ZXMuZG93biA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gNjggfHwgZS5rZXlDb2RlID09PSAzOSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdEIGlzIHByZXNzZWQhJyk7XHJcbiAgICAgICAga2V5U3RhdGVzLnJpZ2h0ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSAzMikge1xyXG4gICAgICAgIGtleVN0YXRlcy5zcGFjZSA9IGZhbHNlO1xyXG4gICAgfVxyXG59LCB0cnVlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGtleVN0YXRlczsiLCJpbXBvcnQgT2JqZWN0IGZyb20gJy4vT2JqZWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER5bmFtaWNPYmplY3QgZXh0ZW5kcyBPYmplY3Qge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHByb3BzLnNwZWVkIHx8IDEwO1xyXG4gICAgICAgIHRoaXMudHVyblNwZWVkID0gcHJvcHMudHVyblNwZWVkIHx8IDU7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZShhbmdsZSkge1xyXG4gICAgICAgIGNvbnN0IHJhZEFuZ2xlID0gYW5nbGUgKiBNYXRoLlBJIC8gMTgwO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25YICs9IE1hdGgucm91bmQoTWF0aC5jb3MocmFkQW5nbGUpICogdGhpcy5zcGVlZCk7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblkgLT0gTWF0aC5yb3VuZChNYXRoLnNpbihyYWRBbmdsZSkgKiB0aGlzLnNwZWVkKTtcclxuICAgIH1cclxuXHJcbiAgICB0dXJuKGRpcmVjdGlvbikge1xyXG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0Jzoge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmdsZSAtPSB0aGlzLnR1cm5TcGVlZDtcclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5hbmdsZSA8PSAwICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5nbGUgPSAzNjAgLSB0aGlzLmFuZ2xlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yYWRBbmdsZSA9IHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAnbGVmdCc6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5nbGUgKz0gdGhpcy50dXJuU3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuYW5nbGUgPj0gMzYwICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLmFuZ2xlIC0gMzYwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yYWRBbmdsZSA9IHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3BlZWQoc3BlZWQpIHtcclxuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9