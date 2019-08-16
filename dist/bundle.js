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
/* harmony import */ var _node_modules_webgl_2d_webgl_2d__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _node_modules_webgl_2d_webgl_2d__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_webgl_2d_webgl_2d__WEBPACK_IMPORTED_MODULE_1__);



//GAME INIT <======================================================= 
const canvas = document.getElementById('game');
WebGL2D.enable(canvas); // adds "webgl-2d" context to cvs
const ctx = canvas.getContext('webgl-2d');


const game = new _Game__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);
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
    constructor(ctx) {
        this.ctx = ctx;

        //game state (off = 0, on = 1, pause = 2)
        this.gameState = 0;

        //sample of a stage class
        this.stage = null;
    }

    //game initialization process
    async init() {
        mediaHandler.setImageSources([
            './dist/images/ship.png',
            './dist/images/missile.png',
            './dist/images/biggership.png',
            './dist/images/enemy.png',
            './dist/images/bullet.png',
            './dist/images/rocket.png',
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
            ctx: this.ctx,
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
/* harmony import */ var _EmenyShip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
/* harmony import */ var _Weapon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16);
/* harmony import */ var _keyStates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9);









const mediaHandler = new _MediaHandler__WEBPACK_IMPORTED_MODULE_1__["default"]();
const objectHandler = new _ObjectHandler__WEBPACK_IMPORTED_MODULE_2__["default"]();

class GameScene {
    constructor(props) {
        this.name = props.name;
        this.gameWindow = new _GameWindow__WEBPACK_IMPORTED_MODULE_0__["default"]({
            ctx: props.ctx,
            width: 900,
            height: 700,
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
            bulletImage: mediaHandler.getImage('missile'),
            tileWidth: 32,
            tileHeight: 32,
            tilesAmount: 8,
            speed: 100,
            hitboxWidth: 10,
            hitboxHeight: 10,
            weaponX: 48,
            weaponY: 0,
        });

        this.player = objectHandler.createObject(_Player__WEBPACK_IMPORTED_MODULE_3__["default"], {
            hp: 100,
            speed: 200,
            turnSpeed: 5,
            shotingSpeed: 2,
            image: mediaHandler.getImage('ship'),
            tilesAmount: 2,
            tileWidth: 128,
            tileHeight: 128,
            weapon: basicWeapon,
            hitboxOffsetX: 16,
            hitboxOffsetY: 16,
            hitboxWidth: 32,
            hitboxHeight: 32,
        });
        this.player.setPosition(this.gameWindow.width / 2 - this.player.tileWidth / 2, this.gameWindow.height / 2 - this.player.tileHeight / 2);
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
    update(dt) {
        this.keyHandler(dt);
        for (let obj of this.objects) {
            if (obj.update) {
                obj.update(dt);
            }
        }
    }
    
    //ANIMATION <================================================================================================
    frame() {
        let dt = ~~(performance.now() - this.lastTime);
        
        if (dt < this.frameDelay) {
            this.requestId = requestAnimationFrame(this.frame);
        } else {
            this.update(dt);
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

    keyHandler(dt) {
        if (_keyStates__WEBPACK_IMPORTED_MODULE_7__["default"].space) {
            this.player.shot();
        }

        // if (keyStates.up) {
        //     if (keyStates.right) {
        //         this.player.move(45, dt);
        //     } else if (keyStates.left){
        //         this.player.move(135, dt);
        //     } else {
        //         this.player.move(90, dt);
        //     }
        // } else if (keyStates.down) {
        //     if (keyStates.right) {
        //         this.player.move(315, dt);
        //     } else if (keyStates.left){
        //         this.player.move(225, dt);
        //     } else {
        //         this.player.move(270, dt);
        //     }
        // } else if (keyStates.left) {
        //     this.player.move(180, dt);
        // } else if (keyStates.right){
        //     this.player.move(0, dt);
        // }
        
        if (_keyStates__WEBPACK_IMPORTED_MODULE_7__["default"].up) {
            this.player.moveForward(dt);
        }
        if (_keyStates__WEBPACK_IMPORTED_MODULE_7__["default"].left) {
            this.player.turn('left');
        }
        if (_keyStates__WEBPACK_IMPORTED_MODULE_7__["default"].right) {
            this.player.turn('right');
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
        this.ctx = props.ctx;
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
/* harmony import */ var _keyStates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);



class Player extends _Ship__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(props) {
        super(props);
    }

    checkBorders(rectangle) {
        if (this.positionY < rectangle.top) {
            this.positionY = rectangle.top;
        }
        if (this.positionY + this.tileHeight > rectangle.bottom) {
            this.positionY = rectangle.bottom - this.tileHeight;
        }
        if (this.positionX < rectangle.left) {
            this.positionX = rectangle.left;
        }
        if (this.positionX + this.tileWidth > rectangle.right) {
            this.positionX = rectangle.right - this.tileWidth;
        }
    }

    moveForward(angle, dt) {
        super.moveForward(angle, dt);
    }

    turn(direction) {
        super.turn(direction);

        switch (direction) {
            case 'right': {
                this.currentTileRow = 2;
                break;
            }
            case 'left': {
                this.currentTileRow = 1;
                break;
            }
        }
    }

    update(dt) {
        if(!_keyStates__WEBPACK_IMPORTED_MODULE_0__["default"].left && !_keyStates__WEBPACK_IMPORTED_MODULE_0__["default"].right && !_keyStates__WEBPACK_IMPORTED_MODULE_0__["default"].up) {
            this.currentTileRow = 0;
        } else if (_keyStates__WEBPACK_IMPORTED_MODULE_0__["default"].up) {
            if (_keyStates__WEBPACK_IMPORTED_MODULE_0__["default"].right && _keyStates__WEBPACK_IMPORTED_MODULE_0__["default"].left) {
                this.currentTileRow = 7;
            } else if (_keyStates__WEBPACK_IMPORTED_MODULE_0__["default"].right) {
                this.currentTileRow = 5;
            } else if (_keyStates__WEBPACK_IMPORTED_MODULE_0__["default"].left){
                this.currentTileRow = 3;
            } else {
                this.currentTileRow = 1;
            }
        } else if (_keyStates__WEBPACK_IMPORTED_MODULE_0__["default"].right && _keyStates__WEBPACK_IMPORTED_MODULE_0__["default"].left) {
            this.currentTileRow = 6;
        } else if (_keyStates__WEBPACK_IMPORTED_MODULE_0__["default"].left) {
            this.currentTileRow = 2;
        } else if (_keyStates__WEBPACK_IMPORTED_MODULE_0__["default"].right){
            this.currentTileRow = 4;
        }
    }
}

/***/ }),
/* 9 */
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
        keyStates.left = true;
    }
    if (e.keyCode === 83 || e.keyCode === 40) {
        keyStates.down = true;
    }
    if (e.keyCode === 68 || e.keyCode === 39) {
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
        keyStates.left = false;
    }
    if (e.keyCode === 83 || e.keyCode === 40) {
        keyStates.down = false;
    }
    if (e.keyCode === 68 || e.keyCode === 39) {
        keyStates.right = false;
    }
    if (e.keyCode === 32) {
        keyStates.space = false;
    }
}, true);

/* harmony default export */ __webpack_exports__["default"] = (keyStates);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ship; });
/* harmony import */ var _DynamicObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);


class Ship extends _DynamicObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(props) {
        super(props);
        this.hp = props.hp || 100;
        this.shotingSpeed = props.shotingSpeed || 1;
        this.lastShot = null;
        this.weapon = props.weapon || null;
    }

    move(angle, dt) {
        super.move(angle, dt);
    }

    moveForward(dt) {
        this.move(this.angle, dt);
    }

    shot() {            
        if (!this.lastShot) {
            this.lastShot = performance.now(); 
            this.weapon.shot(this.positionX, this.positionY, this.angle);
        }
        let dt = performance.now() - this.lastShot;
        if (dt >= 1000 / this.shotingSpeed) {
            this.weapon.shot(this.positionX, this.positionY, this.angle);
            this.lastShot = performance.now();
        }
    } 
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DynamicObject; });
/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);


class DynamicObject extends _Object__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(props) {
        super(props);
        this.speed = props.speed || 0;
        this.turnSpeed = props.turnSpeed || 0;
    }

    move(angle, dt) {
        let offset = this.speed * dt / 1000;
        const radAngle = angle * Math.PI / 180;
        this.positionX += Math.round(Math.cos(radAngle) * offset);
        this.positionY -= Math.round(Math.sin(radAngle) * offset);
        if (this.hasHitbox) {
            this.updateHitboxPosition();
        }
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

    updateHitboxPosition() {
        this.hitboxPositionX = this.positionX + this.hitboxOffsetX;
        this.hitboxPositionY = this.positionY + this.hitboxOffsetY;
    }
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Object; });
class Object {
    constructor(props) {
        this.name = props.name;
        this.group = props.group || null;
        this.image = props.image || null;
        this.tilesAmount = props.tilesAmount || 0;
        this.tileWidth = props.tileWidth || 0;
        this.tileHeight = props.tileHeight || 0;
        this.currentTileRow = props.currentTileRow || 0;
        this.currentTile = props.currentTile || 0;
        this.angle = props.angle || 90;
        this.radAngle = this.angle * Math.PI / 180;
        this.positionX = props.positionX || 0;
        this.positionY = props.positionY || 0;
        if (props.hitboxOffsetX ||  props.hitboxOffsetY || props.hitboxHeight || props.hitboxWidth) {
            this.hitboxOffsetX = props.hitboxOffsetX || 0;
            this.hitboxOffsetY = props.hitboxOffsetY || 0;
            this.hitboxHeight = props.hitboxHeight || 0;
            this.hitboxWidth = props.hitboxWidth || 0;
            this.hitboxPositionX = this.positionX + this.hitboxOffsetX;
            this.hitboxPositionY = this.positionY + this.hitboxOffsetY;
            this.hasHitbox = true;
        }
    }

    setPosition(x, y) {
        this.positionX = x;
        this.positionY = y;
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
        ctx.drawImage(this.image, this.currentTile * this.tileWidth,  this.currentTileRow * this.tileHeight, this.tileWidth, this.tileHeight, -this.tileWidth / 2, -this.tileHeight / 2, this.tileWidth, this.tileHeight);
        ctx.restore();
    }
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EmenyShip; });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _Behavior__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);



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
/* 14 */
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
/* 15 */
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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Weapon; });
/* harmony import */ var _Bullet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _ObjectHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);



const objectHandler = new _ObjectHandler__WEBPACK_IMPORTED_MODULE_1__["default"]();

class Weapon {
    constructor (props) {
        this.name = props.name;
        this.group = props.group;
        this.bulletImage = props.bulletImage;
        this.tileWidth = props.tileWidth;
        this.tileHeight = props.tileHeight;
        this.tilesAmount = props.tilesAmount || 1;
        this.damage = props.damage || 1;
        this.speed = props.speed || 1;
        this.weaponX = props.weaponX || 0;
        this.weaponY = props.weaponY || 0;
    }
 
    shot(positionX, positionY, angle) {
        objectHandler.createObject(_Bullet__WEBPACK_IMPORTED_MODULE_0__["default"], {
            group: 'playerBullet',
            image: this.bulletImage,
            tileWidth: this.tileWidth,
            tileHeight: this.tileHeight,
            tilesAmount: this.tilesAmount,
            angle: angle,
            positionX: positionX + this.weaponX,
            positionY: positionY + this.weaponY,
            damage: this.damage,
            speed: this.speed
        });
    }
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bullet; });
/* harmony import */ var _DynamicObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _ObjectHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);



const objectHandler = new _ObjectHandler__WEBPACK_IMPORTED_MODULE_1__["default"]();

class Bullet extends _DynamicObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (props) {
        super(props);
        this.angle = props.angle;
        this.damage = props.damage || 0;
        this.speed = props.speed || 0;
    }

    update(dt) {
        this.move(this.angle, dt);
        // this.checkBorders()
    }

    // checkBorders() {
    //     if (this.positionY + this.tileHeight <= 0) {
    //         objectHandler.deleteObject(this);
    //     }
    //     if (this.positionY + this.tileHeight > 0) {
    //         objectHandler.deleteObject(this);
    //     }
    //     if (this.positionY + this.tileHeight <= 0) {
    //         objectHandler.deleteObject(this);
    //     }
    //     if (this.positionY + this.tileHeight <= 0) {
    //         objectHandler.deleteObject(this);
    //     }
    // }
}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

/**
 *  WebGL-2D.js - HTML5 Canvas2D API in a WebGL context
 *
 *  Created by Corban Brook <corbanbrook@gmail.com> on 2011-03-02.
 *  Amended to by Bobby Richter <secretrobotron@gmail.com> on 2011-03-03
 *  CubicVR.js by Charles Cliffe <cj@cubicproductions.com> on 2011-03-03
 *
 */

/*
 *  Copyright (c) 2011 Corban Brook
 *
 *  Permission is hereby granted, free of charge, to any person obtaining
 *  a copy of this software and associated documentation files (the
 *  "Software"), to deal in the Software without restriction, including
 *  without limitation the rights to use, copy, modify, merge, publish,
 *  distribute, sublicense, and/or sell copies of the Software, and to
 *  permit persons to whom the Software is furnished to do so, subject to
 *  the following conditions:
 *
 *  The above copyright notice and this permission notice shall be
 *  included in all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 *  LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 *  OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 *  WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

/**
 * Usage:
 *
 *    var cvs = document.getElementById("myCanvas");
 *
 *    WebGL2D.enable(cvs); // adds "webgl-2d" to cvs
 *
 *    cvs.getContext("webgl-2d");
 *
 */

(function(Math, undefined) {

  // Vector & Matrix libraries from CubicVR.js
  var M_PI = 3.1415926535897932384626433832795028841968;
  var M_TWO_PI = 2.0 * M_PI;
  var M_HALF_PI = M_PI / 2.0;

  function isPOT(value) {
    return value > 0 && ((value - 1) & value) === 0;
  }

  var vec3 = {
    length: function(pt) {
      return Math.sqrt(pt[0] * pt[0] + pt[1] * pt[1] + pt[2] * pt[2]);
    },

    normalize: function(pt) {
      var d = Math.sqrt((pt[0] * pt[0]) + (pt[1] * pt[1]) + (pt[2] * pt[2]));
      if (d === 0) {
        return [0, 0, 0];
      }
      return [pt[0] / d, pt[1] / d, pt[2] / d];
    },

    dot: function(v1, v2) {
      return v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2];
    },

    angle: function(v1, v2) {
      return Math.acos((v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2]) / (Math.sqrt(v1[0] * v1[0] + v1[1] * v1[1] + v1[2] * v1[2]) * Math.sqrt(v2[0] * v2[0] + v2[1] * v2[1] + v2[2] * v2[2])));
    },

    cross: function(vectA, vectB) {
      return [vectA[1] * vectB[2] - vectB[1] * vectA[2], vectA[2] * vectB[0] - vectB[2] * vectA[0], vectA[0] * vectB[1] - vectB[0] * vectA[1]];
    },

    multiply: function(vectA, constB) {
      return [vectA[0] * constB, vectA[1] * constB, vectA[2] * constB];
    },

    add: function(vectA, vectB) {
      return [vectA[0] + vectB[0], vectA[1] + vectB[1], vectA[2] + vectB[2]];
    },

    subtract: function(vectA, vectB) {
      return [vectA[0] - vectB[0], vectA[1] - vectB[1], vectA[2] - vectB[2]];
    },

    equal: function(a, b) {
      var epsilon = 0.0000001;
      if ((a === undefined) && (b === undefined)) {
        return true;
      }
      if ((a === undefined) || (b === undefined)) {
        return false;
      }
      return (Math.abs(a[0] - b[0]) < epsilon && Math.abs(a[1] - b[1]) < epsilon && Math.abs(a[2] - b[2]) < epsilon);
    }
  };

  var mat3 = {
    identity: [1.0, 0.0, 0.0,
      0.0, 1.0, 0.0,
      0.0, 0.0, 1.0],

    multiply: function (m1, m2) {
      var m10 = m1[0], m11 = m1[1], m12 = m1[2], m13 = m1[3], m14 = m1[4], m15 = m1[5], m16 = m1[6], m17 = m1[7], m18 = m1[8],
        m20 = m2[0], m21 = m2[1], m22 = m2[2], m23 = m2[3], m24 = m2[4], m25 = m2[5], m26 = m2[6], m27 = m2[7], m28 = m2[8];

      m2[0] = m20 * m10 + m23 * m11 + m26 * m12;
      m2[1] = m21 * m10 + m24 * m11 + m27 * m12;
      m2[2] = m22 * m10 + m25 * m11 + m28 * m12;
      m2[3] = m20 * m13 + m23 * m14 + m26 * m15;
      m2[4] = m21 * m13 + m24 * m14 + m27 * m15;
      m2[5] = m22 * m13 + m25 * m14 + m28 * m15;
      m2[6] = m20 * m16 + m23 * m17 + m26 * m18;
      m2[7] = m21 * m16 + m24 * m17 + m27 * m18;
      m2[8] = m22 * m16 + m25 * m17 + m28 * m18;
    },

    vec2_multiply: function (m1, m2) {
      var mOut = [];
      mOut[0] = m2[0] * m1[0] + m2[3] * m1[1] + m2[6];
      mOut[1] = m2[1] * m1[0] + m2[4] * m1[1] + m2[7];
      return mOut;
    },

    transpose: function (m) {
      return [m[0], m[3], m[6], m[1], m[4], m[7], m[2], m[5], m[8]];
    }
  }; //mat3

  // Transform library from CubicVR.js
  function Transform(mat) {
    return this.clearStack(mat);
  }

  var STACK_DEPTH_LIMIT = 16;

  Transform.prototype.clearStack = function(init_mat) {
    this.m_stack = [];
    this.m_cache = [];
    this.c_stack = 0;
    this.valid = 0;
    this.result = null;

    for (var i = 0; i < STACK_DEPTH_LIMIT; i++) {
      this.m_stack[i] = this.getIdentity();
    }

    if (init_mat !== undefined) {
      this.m_stack[0] = init_mat;
    } else {
      this.setIdentity();
    }
  }; //clearStack

  Transform.prototype.setIdentity = function() {
    this.m_stack[this.c_stack] = this.getIdentity();
    if (this.valid === this.c_stack && this.c_stack) {
      this.valid--;
    }
  };

  Transform.prototype.getIdentity = function() {
    return [1.0, 0.0, 0.0,
      0.0, 1.0, 0.0,
      0.0, 0.0, 1.0];
  };

  Transform.prototype.getResult = function() {
    if (!this.c_stack) {
      return this.m_stack[0];
    }

    var m = mat3.identity;

    if (this.valid > this.c_stack-1) { this.valid = this.c_stack-1; }

    for (var i = this.valid; i < this.c_stack+1; i++) {
      m = mat3.multiply(this.m_stack[i],m);
      this.m_cache[i] = m;
    }

    this.valid = this.c_stack-1;

    this.result = this.m_cache[this.c_stack];

    return this.result;
  };

  Transform.prototype.pushMatrix = function() {
    this.c_stack++;
    this.m_stack[this.c_stack] = this.getIdentity();
  };

  Transform.prototype.popMatrix = function() {
    if (this.c_stack === 0) { return; }
    this.c_stack--;
  };

  var translateMatrix = Transform.prototype.getIdentity();

  Transform.prototype.translate = function(x, y) {
    translateMatrix[6] = x;
    translateMatrix[7] = y;

    mat3.multiply(translateMatrix, this.m_stack[this.c_stack]);

    /*
     if (this.valid === this.c_stack && this.c_stack) {
     this.valid--;
     }
     */
  };

  var scaleMatrix = Transform.prototype.getIdentity();

  Transform.prototype.scale = function(x, y) {
    scaleMatrix[0] = x;
    scaleMatrix[4] = y;

    mat3.multiply(scaleMatrix, this.m_stack[this.c_stack]);

    /*
     if (this.valid === this.c_stack && this.c_stack) {
     this.valid--;
     }
     */
  };

  var rotateMatrix = Transform.prototype.getIdentity();

  Transform.prototype.rotate = function(ang) {
    var sAng, cAng;

    sAng = Math.sin(-ang);
    cAng = Math.cos(-ang);

    rotateMatrix[0] = cAng;
    rotateMatrix[3] = sAng;
    rotateMatrix[1] = -sAng;
    rotateMatrix[4] = cAng;

    mat3.multiply(rotateMatrix, this.m_stack[this.c_stack]);

    /*
     if (this.valid === this.c_stack && this.c_stack) {
     this.valid--;
     }
     */
  };

  var WebGL2D = this.WebGL2D = function WebGL2D(canvas, options) {
    this.canvas         = canvas;
    this.options        = options || {};
    this.gl             = undefined;
    this.fs             = undefined;
    this.vs             = undefined;
    this.shaderProgram  = undefined;
    this.transform      = new Transform();
    this.shaderPool     = [];
    this.maxTextureSize = undefined;

    // Save a reference to the WebGL2D instance on the canvas object
    canvas.gl2d         = this;

    // Store getContext function for later use
    canvas.$getContext  = canvas.getContext;

    // Override getContext function with "webgl-2d" enabled version
    canvas.getContext = (function(gl2d) {
      return function(context) {
        if ((gl2d.options.force || context === "webgl-2d") && !(canvas.width === 0 || canvas.height === 0)) {
          if (gl2d.gl) { return gl2d.gl; }

          var gl = gl2d.gl = gl2d.canvas.$getContext("experimental-webgl");

          gl2d.initShaders();
          gl2d.initBuffers();

          // Append Canvas2D API features to the WebGL context
          gl2d.initCanvas2DAPI();

          gl.viewport(0, 0, gl2d.canvas.width, gl2d.canvas.height);

          // Disables writing to dest-alpha
          // gl.colorMask(1,1,1,0)

          // Depth options
          //gl.enable(gl.DEPTH_TEST);
          //gl.depthFunc(gl.LEQUAL);

          // Blending options
          // See http://stackoverflow.com/questions/11521035/blending-with-html-background-in-webgl
          gl.enable(gl.BLEND);
          gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

          gl2d.maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);

          return gl;
        } else {
          return gl2d.canvas.$getContext(context);
        }
      };
    }(this));

    this.postInit();
  };

  // Enables WebGL2D on your canvas
  WebGL2D.enable = function(canvas, options) {
    return canvas.gl2d || new WebGL2D(canvas, options);
  };


  // Shader Pool BitMasks, i.e. sMask = (shaderMask.texture+shaderMask.stroke)
  var shaderMask = {
    texture: 1,
    crop: 2,
    path: 4
  };


  // Fragment shader source
  WebGL2D.prototype.getFragmentShaderSource = function getFragmentShaderSource(sMask) {
    var fsSource = [
      "#ifdef GL_ES",
      "precision highp float;",
      "#endif",

      "#define hasTexture " + ((sMask&shaderMask.texture) ? "1" : "0"),
      "#define hasCrop " + ((sMask&shaderMask.crop) ? "1" : "0"),

      "varying vec4 vColor;",

      "#if hasTexture",
      "varying vec2 vTextureCoord;",
      "uniform sampler2D uSampler;",
      "#if hasCrop",
      "uniform vec4 uCropSource;",
      "#endif",
      "#endif",

      "void main(void) {",
      "#if hasTexture",
      "#if hasCrop",
      "gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x * uCropSource.z, vTextureCoord.y * uCropSource.w) + uCropSource.xy);",
      "#else",
      "gl_FragColor = texture2D(uSampler, vTextureCoord);",
      "#endif",
      "#else",
      "gl_FragColor = vColor;",
      "#endif",
      "}"
    ].join("\n");

    return fsSource;
  };

  WebGL2D.prototype.getVertexShaderSource = function getVertexShaderSource(stackDepth,sMask) {
    var w = 2 / this.canvas.width, h = -2 / this.canvas.height;

    stackDepth = stackDepth || 1;

    var vsSource = [
      "#define hasTexture " + ((sMask&shaderMask.texture) ? "1" : "0"),
      "attribute vec4 aVertexPosition;",

      "#if hasTexture",
      "varying vec2 vTextureCoord;",
      "#endif",

      "uniform vec4 uColor;",
      "uniform mat3 uTransforms[" + stackDepth + "];",

      "varying vec4 vColor;",

      "const mat4 pMatrix = mat4(" + w + ",0,0,0, 0," + h + ",0,0, 0,0,1.0,1.0, -1.0,1.0,0,0);",

      "mat3 crunchStack(void) {",
      "mat3 result = uTransforms[0];",
      "for (int i = 1; i < " + stackDepth + "; ++i) {",
      "result = uTransforms[i] * result;",
      "}",
      "return result;",
      "}",

      "void main(void) {",
      "vec3 position = crunchStack() * vec3(aVertexPosition.x, aVertexPosition.y, 1.0);",
      "gl_Position = pMatrix * vec4(position, 1.0);",
      "vColor = uColor;",
      "#if hasTexture",
      "vTextureCoord = aVertexPosition.zw;",
      "#endif",
      "}"
    ].join("\n");
    return vsSource;
  };


  // Initialize fragment and vertex shaders
  WebGL2D.prototype.initShaders = function initShaders(transformStackDepth,sMask) {
    var gl = this.gl;

    transformStackDepth = transformStackDepth || 1;
    sMask = sMask || 0;
    var storedShader = this.shaderPool[transformStackDepth];

    if (!storedShader) { storedShader = this.shaderPool[transformStackDepth] = []; }
    storedShader = storedShader[sMask];

    if (storedShader) {
      gl.useProgram(storedShader);
      this.shaderProgram = storedShader;
      return storedShader;
    } else {
      var fs = this.fs = gl.createShader(gl.FRAGMENT_SHADER);
      gl.shaderSource(this.fs, this.getFragmentShaderSource(sMask));
      gl.compileShader(this.fs);

      if (!gl.getShaderParameter(this.fs, gl.COMPILE_STATUS)) {
        throw "fragment shader error: "+gl.getShaderInfoLog(this.fs);
      }

      var vs = this.vs = gl.createShader(gl.VERTEX_SHADER);
      gl.shaderSource(this.vs, this.getVertexShaderSource(transformStackDepth,sMask));
      gl.compileShader(this.vs);

      if (!gl.getShaderParameter(this.vs, gl.COMPILE_STATUS)) {
        throw "vertex shader error: "+gl.getShaderInfoLog(this.vs);
      }


      var shaderProgram = this.shaderProgram = gl.createProgram();
      shaderProgram.stackDepth = transformStackDepth;
      gl.attachShader(shaderProgram, fs);
      gl.attachShader(shaderProgram, vs);
      gl.linkProgram(shaderProgram);

      if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        throw "Could not initialise shaders.";
      }

      gl.useProgram(shaderProgram);

      shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
      gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);

      shaderProgram.uColor   = gl.getUniformLocation(shaderProgram, 'uColor');
      shaderProgram.uSampler = gl.getUniformLocation(shaderProgram, 'uSampler');
      shaderProgram.uCropSource = gl.getUniformLocation(shaderProgram, 'uCropSource');

      shaderProgram.uTransforms = [];
      for (var i=0; i<transformStackDepth; ++i) {
        shaderProgram.uTransforms[i] = gl.getUniformLocation(shaderProgram, 'uTransforms[' + i + ']');
      } //for
      this.shaderPool[transformStackDepth][sMask] = shaderProgram;
      return shaderProgram;
    } //if
  };

  var rectVertexPositionBuffer;
  var rectVertexColorBuffer;

  var pathVertexPositionBuffer;
  var pathVertexColorBuffer;

  // 2D Vertices and Texture UV coords
  var rectVerts = new Float32Array([
    0,0, 0,0,
    0,1, 0,1,
    1,1, 1,1,
    1,0, 1,0
  ]);

  WebGL2D.prototype.initBuffers = function initBuffers() {
    var gl = this.gl;

    rectVertexPositionBuffer  = gl.createBuffer();
    rectVertexColorBuffer     = gl.createBuffer();

    pathVertexPositionBuffer  = gl.createBuffer();
    pathVertexColorBuffer     = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, rectVertexPositionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, rectVerts, gl.STATIC_DRAW);
  };

  // Maintains an array of all WebGL2D instances
  WebGL2D.instances = [];

  WebGL2D.prototype.postInit = function() {
    WebGL2D.instances.push(this);
  };

  // Extends gl context with Canvas2D API
  WebGL2D.prototype.initCanvas2DAPI = function initCanvas2DAPI() {
    var gl2d = this,
      gl   = this.gl;


    // Rendering Canvas for text fonts
    var textCanvas    = document.createElement("canvas");
    textCanvas.width  = gl2d.canvas.width;
    textCanvas.height = gl2d.canvas.height;
    var textCtx       = textCanvas.getContext("2d");

    var reRGBAColor = /^rgb(a)?\(\s*(-?[\d]+)(%)?\s*,\s*(-?[\d]+)(%)?\s*,\s*(-?[\d]+)(%)?\s*,?\s*(-?[\d\.]+)?\s*\)$/;
    var reHSLAColor = /^hsl(a)?\(\s*(-?[\d\.]+)\s*,\s*(-?[\d\.]+)%\s*,\s*(-?[\d\.]+)%\s*,?\s*(-?[\d\.]+)?\s*\)$/;
    var reHex6Color = /^#([0-9A-Fa-f]{6})$/;
    var reHex3Color = /^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/;

    // http://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c
    function HSLAToRGBA(h, s, l, a) {
      var r, g, b, p, q;

      // Clamp and Normalize values
      h = (((h % 360) + 360) % 360) / 360;
      s = s > 100 ? 1 : s / 100;
      s = s <   0 ? 0 : s;
      l = l > 100 ? 1 : l / 100;
      l = l <   0 ? 0 : l;

      if(s == 0) {
        r = g = b = l; // achromatic
      } else {
        function hue2rgb(p, q, t){
          if(t < 0) t += 1;
          if(t > 1) t -= 1;
          if(t < 1/6) return p + (q - p) * 6 * t;
          if(t < 1/2) return q;
          if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
          return p;
        }

        q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        p = 2 * l - q;

        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
      }

      return [r, g, b, a];
    }


    // Converts rgb(a) color string to gl color vector
    function colorStringToVec4(value) {
      var result = [], match, channel, isPercent, hasAlpha, alphaChannel, sameType;

      if ((match = reRGBAColor.exec(value))) {
        hasAlpha = match[1], alphaChannel = parseFloat(match[8]);

        if ((hasAlpha && isNaN(alphaChannel)) || (!hasAlpha && !isNaN(alphaChannel))) {
          return false;
        }

        sameType = match[3];

        for (var i = 2; i < 8; i+=2) {
          channel = match[i], isPercent = match[i+1];

          if (isPercent !== sameType) {
            return false;
          }

          // Clamp and normalize values
          if (isPercent) {
            channel = channel > 100 ? 1 : channel / 100;
            channel = channel <   0 ? 0 : channel;
          } else {
            channel = channel > 255 ? 1 : channel / 255;
            channel = channel <   0 ? 0 : channel;
          }

          result.push(channel);
        }

        result.push(hasAlpha ? alphaChannel : 1.0);
      } else if ((match = reHSLAColor.exec(value))) {
        hasAlpha = match[1], alphaChannel = parseFloat(match[5]);
        result = HSLAToRGBA(match[2], match[3], match[4], parseFloat(hasAlpha && alphaChannel ? alphaChannel : 1.0));
      } else if ((match = reHex6Color.exec(value))) {
        var colorInt = parseInt(match[1], 16);
        result = [((colorInt & 0xFF0000) >> 16) / 255, ((colorInt & 0x00FF00) >> 8) / 255, (colorInt & 0x0000FF) / 255, 1.0];
      } else if ((match = reHex3Color.exec(value))) {
        var hexString = "#" + [match[1], match[1], match[2], match[2], match[3], match[3]].join("");
        result = colorStringToVec4(hexString);
      } else if (value.toLowerCase() in colorKeywords) {
        result = colorStringToVec4(colorKeywords[value.toLowerCase()]);
      } else if (value.toLowerCase() === "transparent") {
        result = [0, 0, 0, 0];
      } else {
        // Color keywords not yet implemented, ie "orange", return hot pink
        return false;
      }

      return result;
    }

    function colorVecToString(vec4) {
      return "rgba(" + (vec4[0] * 255) + ", " + (vec4[1] * 255) + ", " + (vec4[2] * 255) + ", " + parseFloat(vec4[3]) + ")";
    }

    var colorKeywords = {
      aliceblue:            "#f0f8ff",
      antiquewhite:         "#faebd7",
      aqua:                 "#00ffff",
      aquamarine:           "#7fffd4",
      azure:                "#f0ffff",
      beige:                "#f5f5dc",
      bisque:               "#ffe4c4",
      black:                "#000000",
      blanchedalmond:       "#ffebcd",
      blue:                 "#0000ff",
      blueviolet:           "#8a2be2",
      brown:                "#a52a2a",
      burlywood:            "#deb887",
      cadetblue:            "#5f9ea0",
      chartreuse:           "#7fff00",
      chocolate:            "#d2691e",
      coral:                "#ff7f50",
      cornflowerblue:       "#6495ed",
      cornsilk:             "#fff8dc",
      crimson:              "#dc143c",
      cyan:                 "#00ffff",
      darkblue:             "#00008b",
      darkcyan:             "#008b8b",
      darkgoldenrod:        "#b8860b",
      darkgray:             "#a9a9a9",
      darkgreen:            "#006400",
      darkkhaki:            "#bdb76b",
      darkmagenta:          "#8b008b",
      darkolivegreen:       "#556b2f",
      darkorange:           "#ff8c00",
      darkorchid:           "#9932cc",
      darkred:              "#8b0000",
      darksalmon:           "#e9967a",
      darkseagreen:         "#8fbc8f",
      darkslateblue:        "#483d8b",
      darkslategray:        "#2f4f4f",
      darkturquoise:        "#00ced1",
      darkviolet:           "#9400d3",
      deeppink:             "#ff1493",
      deepskyblue:          "#00bfff",
      dimgray:              "#696969",
      dodgerblue:           "#1e90ff",
      firebrick:            "#b22222",
      floralwhite:          "#fffaf0",
      forestgreen:          "#228b22",
      fuchsia:              "#ff00ff",
      gainsboro:            "#dcdcdc",
      ghostwhite:           "#f8f8ff",
      gold:                 "#ffd700",
      goldenrod:            "#daa520",
      gray:                 "#808080",
      green:                "#008000",
      greenyellow:          "#adff2f",
      grey:                 "#808080",
      honeydew:             "#f0fff0",
      hotpink:              "#ff69b4",
      indianred:            "#cd5c5c",
      indigo:               "#4b0082",
      ivory:                "#fffff0",
      khaki:                "#f0e68c",
      lavender:             "#e6e6fa",
      lavenderblush:        "#fff0f5",
      lawngreen:            "#7cfc00",
      lemonchiffon:         "#fffacd",
      lightblue:            "#add8e6",
      lightcoral:           "#f08080",
      lightcyan:            "#e0ffff",
      lightgoldenrodyellow: "#fafad2",
      lightgrey:            "#d3d3d3",
      lightgreen:           "#90ee90",
      lightpink:            "#ffb6c1",
      lightsalmon:          "#ffa07a",
      lightseagreen:        "#20b2aa",
      lightskyblue:         "#87cefa",
      lightslategray:       "#778899",
      lightsteelblue:       "#b0c4de",
      lightyellow:          "#ffffe0",
      lime:                 "#00ff00",
      limegreen:            "#32cd32",
      linen:                "#faf0e6",
      magenta:              "#ff00ff",
      maroon:               "#800000",
      mediumaquamarine:     "#66cdaa",
      mediumblue:           "#0000cd",
      mediumorchid:         "#ba55d3",
      mediumpurple:         "#9370d8",
      mediumseagreen:       "#3cb371",
      mediumslateblue:      "#7b68ee",
      mediumspringgreen:    "#00fa9a",
      mediumturquoise:      "#48d1cc",
      mediumvioletred:      "#c71585",
      midnightblue:         "#191970",
      mintcream:            "#f5fffa",
      mistyrose:            "#ffe4e1",
      moccasin:             "#ffe4b5",
      navajowhite:          "#ffdead",
      navy:                 "#000080",
      oldlace:              "#fdf5e6",
      olive:                "#808000",
      olivedrab:            "#6b8e23",
      orange:               "#ffa500",
      orangered:            "#ff4500",
      orchid:               "#da70d6",
      palegoldenrod:        "#eee8aa",
      palegreen:            "#98fb98",
      paleturquoise:        "#afeeee",
      palevioletred:        "#d87093",
      papayawhip:           "#ffefd5",
      peachpuff:            "#ffdab9",
      peru:                 "#cd853f",
      pink:                 "#ffc0cb",
      plum:                 "#dda0dd",
      powderblue:           "#b0e0e6",
      purple:               "#800080",
      red:                  "#ff0000",
      rosybrown:            "#bc8f8f",
      royalblue:            "#4169e1",
      saddlebrown:          "#8b4513",
      salmon:               "#fa8072",
      sandybrown:           "#f4a460",
      seagreen:             "#2e8b57",
      seashell:             "#fff5ee",
      sienna:               "#a0522d",
      silver:               "#c0c0c0",
      skyblue:              "#87ceeb",
      slateblue:            "#6a5acd",
      slategray:            "#708090",
      snow:                 "#fffafa",
      springgreen:          "#00ff7f",
      steelblue:            "#4682b4",
      tan:                  "#d2b48c",
      teal:                 "#008080",
      thistle:              "#d8bfd8",
      tomato:               "#ff6347",
      turquoise:            "#40e0d0",
      violet:               "#ee82ee",
      wheat:                "#f5deb3",
      white:                "#ffffff",
      whitesmoke:           "#f5f5f5",
      yellow:               "#ffff00",
      yellowgreen:          "#9acd32"
    };

    // Maintain drawing state params during gl.save and gl.restore. see saveDrawState() and restoreDrawState()
    var drawState = {}, drawStateStack = [];

    // A fast simple shallow clone
    function cloneObject(obj) {
      var target = {};
      for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
          target[i] = obj[i];
        }
      }
      return target;
    }

    function saveDrawState() {
      var bakedDrawState = {
        fillStyle:                [drawState.fillStyle[0],   drawState.fillStyle[1],   drawState.fillStyle[2],   drawState.fillStyle[3]],
        strokeStyle:              [drawState.strokeStyle[0], drawState.strokeStyle[1], drawState.strokeStyle[2], drawState.strokeStyle[3]],
        globalAlpha:              drawState.globalAlpha,
        globalCompositeOperation: drawState.globalCompositeOperation,
        lineCap:                  drawState.lineCap,
        lineJoin:                 drawState.lineJoin,
        lineWidth:                drawState.lineWidth,
        miterLimit:               drawState.miterLimit,
        shadowColor:              drawState.shadowColor,
        shadowBlur:               drawState.shadowBlur,
        shadowOffsetX:            drawState.shadowOffsetX,
        shadowOffsetY:            drawState.shadowOffsetY,
        textAlign:                drawState.textAlign,
        font:                     drawState.font,
        textBaseline:             drawState.textBaseline
      };

      drawStateStack.push(bakedDrawState);
    }

    function restoreDrawState() {
      if (drawStateStack.length) {
        drawState = drawStateStack.pop();
      }
    }

    // WebGL requires colors as a vector while Canvas2D sets colors as an rgba string
    // These getters and setters store the original rgba string as well as convert to a vector
    drawState.fillStyle = [0, 0, 0, 1]; // default black

    Object.defineProperty(gl, "fillStyle", {
      get: function() { return colorVecToString(drawState.fillStyle); },
      set: function(value) {
        drawState.fillStyle = colorStringToVec4(value) || drawState.fillStyle;
      }
    });

    drawState.strokeStyle = [0, 0, 0, 1]; // default black

    Object.defineProperty(gl, "strokeStyle", {
      get: function() { return colorVecToString(drawState.strokeStyle); },
      set: function(value) {
        drawState.strokeStyle = colorStringToVec4(value) || drawStyle.strokeStyle;
      }
    });

    // WebGL already has a lineWidth() function but Canvas2D requires a lineWidth property
    // Store the original lineWidth() function for later use
    gl.$lineWidth = gl.lineWidth;
    drawState.lineWidth = 1.0;

    Object.defineProperty(gl, "lineWidth", {
      get: function() { return drawState.lineWidth; },
      set: function(value) {
        gl.$lineWidth(value);
        drawState.lineWidth = value;
      }
    });

    // Currently unsupported attributes and their default values
    drawState.lineCap = "butt";

    Object.defineProperty(gl, "lineCap", {
      get: function() { return drawState.lineCap; },
      set: function(value) {
        drawState.lineCap = value;
      }
    });

    drawState.lineJoin = "miter";

    Object.defineProperty(gl, "lineJoin", {
      get: function() { return drawState.lineJoin; },
      set: function(value) {
        drawState.lineJoin = value;
      }
    });

    drawState.miterLimit = 10;

    Object.defineProperty(gl, "miterLimit", {
      get: function() { return drawState.miterLimit; },
      set: function(value) {
        drawState.miterLimit = value;
      }
    });

    drawState.shadowOffsetX = 0;

    Object.defineProperty(gl, "shadowOffsetX", {
      get: function() { return drawState.shadowOffsetX; },
      set: function(value) {
        drawState.shadowOffsetX = value;
      }
    });

    drawState.shadowOffsetY = 0;

    Object.defineProperty(gl, "shadowOffsetY", {
      get: function() { return drawState.shadowOffsetY; },
      set: function(value) {
        drawState.shadowOffsetY = value;
      }
    });

    drawState.shadowBlur = 0;

    Object.defineProperty(gl, "shadowBlur", {
      get: function() { return drawState.shadowBlur; },
      set: function(value) {
        drawState.shadowBlur = value;
      }
    });

    drawState.shadowColor = "rgba(0, 0, 0, 0.0)";

    Object.defineProperty(gl, "shadowColor", {
      get: function() { return drawState.shadowColor; },
      set: function(value) {
        drawState.shadowColor = value;
      }
    });

    drawState.font = "10px sans-serif";

    Object.defineProperty(gl, "font", {
      get: function() { return drawState.font; },
      set: function(value) {
        textCtx.font = value;
        drawState.font = value;
      }
    });

    drawState.textAlign = "start";

    Object.defineProperty(gl, "textAlign", {
      get: function() { return drawState.textAlign; },
      set: function(value) {
        drawState.textAlign = value;
      }
    });

    drawState.textBaseline = "alphabetic";

    Object.defineProperty(gl, "textBaseline", {
      get: function() { return drawState.textBaseline; },
      set: function(value) {
        drawState.textBaseline = value;
      }
    });

    // This attribute will need to control global alpha of objects drawn.
    drawState.globalAlpha = 1.0;

    Object.defineProperty(gl, "globalAlpha", {
      get: function() { return drawState.globalAlpha; },
      set: function(value) {
        drawState.globalAlpha = value;
      }
    });

    // This attribute will need to set the gl.blendFunc mode
    drawState.globalCompositeOperation = "source-over";

    Object.defineProperty(gl, "globalCompositeOperation", {
      get: function() { return drawState.globalCompositeOperation; },
      set: function(value) {
        drawState.globalCompositeOperation = value;
      }
    });

    // Need a solution for drawing text that isnt stupid slow
    gl.fillText = function fillText(text, x, y) {
      /*
       textCtx.clearRect(0, 0, gl2d.canvas.width, gl2d.canvas.height);
       textCtx.fillStyle = gl.fillStyle;
       textCtx.fillText(text, x, y);

       gl.drawImage(textCanvas, 0, 0);
       */
    };

    gl.strokeText = function strokeText() {};

    gl.measureText = function measureText() { return 1; };

    var tempCanvas = document.createElement('canvas');
    var tempCtx = tempCanvas.getContext('2d');

    gl.save = function save() {
      gl2d.transform.pushMatrix();
      saveDrawState();
    };

    gl.restore = function restore() {
      gl2d.transform.popMatrix();
      restoreDrawState();
    };

    gl.translate = function translate(x, y) {
      gl2d.transform.translate(x, y);
    };

    gl.rotate = function rotate(a) {
      gl2d.transform.rotate(a);
    };

    gl.scale = function scale(x, y) {
      gl2d.transform.scale(x, y);
    };

    gl.createImageData = function createImageData(width, height) {
      return tempCtx.createImageData(width, height);
    };

    gl.getImageData = function getImageData(x, y, width, height) {
      var data = tempCtx.createImageData(width, height);
      var buffer = new Uint8Array(width*height*4);
      gl.readPixels(x, y, width, height, gl.RGBA, gl.UNSIGNED_BYTE, buffer);
      var w=width*4, h=height;
      for (var i=0, maxI=h/2; i<maxI; ++i) {
        for (var j=0, maxJ=w; j<maxJ; ++j) {
          var index1 = i * w + j;
          var index2 = (h-i-1) * w + j;
          data.data[index1] = buffer[index2];
          data.data[index2] = buffer[index1];
        } //for
      } //for

      return data;
    };

    gl.putImageData = function putImageData(imageData, x, y) {
      gl.drawImage(imageData, x, y);
    };

    gl.transform = function transform(m11, m12, m21, m22, dx, dy) {
      var m = gl2d.transform.m_stack[gl2d.transform.c_stack];

      m[0] *= m11;
      m[1] *= m21;
      m[2] *= dx;
      m[3] *= m12;
      m[4] *= m22;
      m[5] *= dy;
      m[6] = 0;
      m[7] = 0;
    };

    function sendTransformStack(sp) {
      var stack = gl2d.transform.m_stack;
      for (var i = 0, maxI = gl2d.transform.c_stack + 1; i < maxI; ++i) {
        gl.uniformMatrix3fv(sp.uTransforms[i], false, stack[maxI-1-i]);
      } //for
    }

    gl.setTransform = function setTransform(m11, m12, m21, m22, dx, dy) {
      gl2d.transform.setIdentity();
      gl.transform.apply(this, arguments);
    };

    gl.fillRect = function fillRect(x, y, width, height) {
      var transform = gl2d.transform;
      var shaderProgram = gl2d.initShaders(transform.c_stack+2,0);

      gl.bindBuffer(gl.ARRAY_BUFFER, rectVertexPositionBuffer);
      gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, 4, gl.FLOAT, false, 0, 0);

      transform.pushMatrix();

      transform.translate(x, y);
      transform.scale(width, height);

      sendTransformStack(shaderProgram);

      gl.uniform4f(shaderProgram.uColor, drawState.fillStyle[0], drawState.fillStyle[1], drawState.fillStyle[2], drawState.fillStyle[3]);

      gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);

      transform.popMatrix();
    };

    gl.strokeRect = function strokeRect(x, y, width, height) {
      var transform = gl2d.transform;
      var shaderProgram = gl2d.initShaders(transform.c_stack + 2,0);

      gl.bindBuffer(gl.ARRAY_BUFFER, rectVertexPositionBuffer);
      gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, 4, gl.FLOAT, false, 0, 0);

      transform.pushMatrix();

      transform.translate(x, y);
      transform.scale(width, height);

      sendTransformStack(shaderProgram);

      gl.uniform4f(shaderProgram.uColor, drawState.strokeStyle[0], drawState.strokeStyle[1], drawState.strokeStyle[2], drawState.strokeStyle[3]);

      gl.drawArrays(gl.LINE_LOOP, 0, 4);

      transform.popMatrix();
    };

    gl.clearRect = function clearRect(x, y, width, height) {};

    var subPaths = [];

    function SubPath(x, y) {
      this.closed = false;
      this.verts = [x, y, 0, 0];
    }

    // Empty the list of subpaths so that the context once again has zero subpaths
    gl.beginPath = function beginPath() {
      subPaths.length = 0;
    };

    // Mark last subpath as closed and create a new subpath with the same starting point as the previous subpath
    gl.closePath = function closePath() {
      if (subPaths.length) {
        // Mark last subpath closed.
        var prevPath = subPaths[subPaths.length -1], startX = prevPath.verts[0], startY = prevPath.verts[1];
        prevPath.closed = true;

        // Create new subpath using the starting position of previous subpath
        var newPath = new SubPath(startX, startY);
        subPaths.push(newPath);
      }
    };

    // Create a new subpath with the specified point as its first (and only) point
    gl.moveTo = function moveTo(x, y) {
      subPaths.push(new SubPath(x, y));
    };

    gl.lineTo = function lineTo(x, y) {
      if (subPaths.length) {
        subPaths[subPaths.length -1].verts.push(x, y, 0, 0);
      } else {
        // Create a new subpath if none currently exist
        gl.moveTo(x, y);
      }
    };

    gl.quadraticCurveTo = function quadraticCurveTo(cp1x, cp1y, x, y) {};

    gl.bezierCurveTo = function bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {};

    gl.arcTo = function arcTo() {};

    // Adds a closed rect subpath and creates a new subpath
    gl.rect = function rect(x, y, w, h) {
      gl.moveTo(x, y);
      gl.lineTo(x + w, y);
      gl.lineTo(x + w, y + h);
      gl.lineTo(x, y + h);
      gl.closePath();
    };

    gl.arc = function arc(x, y, radius, startAngle, endAngle, anticlockwise) {};

    function fillSubPath(index) {
      var transform = gl2d.transform;
      var shaderProgram = gl2d.initShaders(transform.c_stack + 2,0);

      var subPath = subPaths[index];
      var verts = subPath.verts;

      gl.bindBuffer(gl.ARRAY_BUFFER, pathVertexPositionBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verts), gl.STATIC_DRAW);

      gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, 4, gl.FLOAT, false, 0, 0);

      transform.pushMatrix();

      sendTransformStack(shaderProgram);

      gl.uniform4f(shaderProgram.uColor, drawState.fillStyle[0], drawState.fillStyle[1], drawState.fillStyle[2], drawState.fillStyle[3]);

      gl.drawArrays(gl.TRIANGLE_FAN, 0, verts.length/4);

      transform.popMatrix();
    }

    gl.fill = function fill() {
      for(var i = 0; i < subPaths.length; i++) {
        fillSubPath(i);
      }
    };

    function strokeSubPath(index) {
      var transform = gl2d.transform;
      var shaderProgram = gl2d.initShaders(transform.c_stack + 2,0);

      var subPath = subPaths[index];
      var verts = subPath.verts;

      gl.bindBuffer(gl.ARRAY_BUFFER, pathVertexPositionBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verts), gl.STATIC_DRAW);

      gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, 4, gl.FLOAT, false, 0, 0);

      transform.pushMatrix();

      sendTransformStack(shaderProgram);

      gl.uniform4f(shaderProgram.uColor, drawState.strokeStyle[0], drawState.strokeStyle[1], drawState.strokeStyle[2], drawState.strokeStyle[3]);

      if (subPath.closed) {
        gl.drawArrays(gl.LINE_LOOP, 0, verts.length/4);
      } else {
        gl.drawArrays(gl.LINE_STRIP, 0, verts.length/4);
      }

      transform.popMatrix();
    }

    gl.stroke = function stroke() {
      for(var i = 0; i < subPaths.length; i++) {
        strokeSubPath(i);
      }
    };

    gl.clip = function clip() {};

    gl.isPointInPath = function isPointInPath() {};

    gl.drawFocusRing = function drawFocusRing() {};



    var imageCache = [], textureCache = [];

    function Texture(image) {
      this.obj   = gl.createTexture();
      this.index = textureCache.push(this);

      imageCache.push(image);

      // we may wish to consider tiling large images like this instead of scaling and
      // adjust appropriately (flip to next texture source and tile offset) when drawing
      if (image.width > gl2d.maxTextureSize || image.height > gl2d.maxTextureSize) {
        var canvas = document.createElement("canvas");

        canvas.width  = (image.width  > gl2d.maxTextureSize) ? gl2d.maxTextureSize : image.width;
        canvas.height = (image.height > gl2d.maxTextureSize) ? gl2d.maxTextureSize : image.height;

        var ctx = canvas.getContext("2d");

        ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);

        image = canvas;
      }

      gl.bindTexture(gl.TEXTURE_2D, this.obj);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

      // Enable Mip mapping on power-of-2 textures
      if (isPOT(image.width) && isPOT(image.height)) {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
        gl.generateMipmap(gl.TEXTURE_2D);
      } else {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      }

      // Unbind texture
      gl.bindTexture(gl.TEXTURE_2D, null);
    }

    gl.drawImage = function drawImage(image, a, b, c, d, e, f, g, h) {
      var transform = gl2d.transform;

      transform.pushMatrix();

      var sMask = shaderMask.texture;
      var doCrop = false;

      //drawImage(image, dx, dy)
      if (arguments.length === 3) {
        transform.translate(a, b);
        transform.scale(image.width, image.height);
      }

      //drawImage(image, dx, dy, dw, dh)
      else if (arguments.length === 5) {
        transform.translate(a, b);
        transform.scale(c, d);
      }

      //drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
      else if (arguments.length === 9) {
        transform.translate(e, f);
        transform.scale(g, h);
        sMask = sMask|shaderMask.crop;
        doCrop = true;
      }

      var shaderProgram = gl2d.initShaders(transform.c_stack, sMask);

      var texture, cacheIndex = imageCache.indexOf(image);

      if (cacheIndex !== -1) {
        texture = textureCache[cacheIndex];
      } else {
        texture = new Texture(image);
      }

      if (doCrop) {
        gl.uniform4f(shaderProgram.uCropSource, a/image.width, b/image.height, c/image.width, d/image.height);
      }

      gl.bindBuffer(gl.ARRAY_BUFFER, rectVertexPositionBuffer);
      gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, 4, gl.FLOAT, false, 0, 0);

      gl.bindTexture(gl.TEXTURE_2D, texture.obj);
      gl.activeTexture(gl.TEXTURE0);

      gl.uniform1i(shaderProgram.uSampler, 0);

      sendTransformStack(shaderProgram);
      gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);

      transform.popMatrix();
    };
  };

}(Math));

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvTWVkaWFIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lTWVkaWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1NjZW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9HYW1lV2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9PYmplY3RIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvUGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9rZXlTdGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0R5bmFtaWNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvRW1lbnlTaGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9CZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9XZWFwb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0J1bGxldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2ViZ2wtMmQvd2ViZ2wtMmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNoREE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNqREE7QUFBQTtBQUFBO0FBQUE7QUFBMEI7QUFDUTs7QUFFbkIsd0JBQXdCLDZDQUFJO0FBQzNDO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLGlEQUFRO0FBQ3BDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNuREE7QUFBQTtBQUFBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVDQUF1Qzs7QUFFdkM7QUFDQSx1QkFBdUIsOENBQThDLEVBQUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCx5Q0FBeUM7O0FBRXpDO0FBQ0EsdUJBQXVCLGdEQUFnRCxFQUFFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsNEJBQTRCLEVBQUU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsMEJBQTBCLEVBQUU7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBLHVCQUF1QiwyQkFBMkIsRUFBRTtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0EsdUJBQXVCLDZCQUE2QixFQUFFO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQSx1QkFBdUIsZ0NBQWdDLEVBQUU7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBLHVCQUF1QixnQ0FBZ0MsRUFBRTtBQUN6RDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0EsdUJBQXVCLDZCQUE2QixFQUFFO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQSx1QkFBdUIsOEJBQThCLEVBQUU7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBLHVCQUF1Qix1QkFBdUIsRUFBRTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQSx1QkFBdUIsNEJBQTRCLEVBQUU7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBLHVCQUF1QiwrQkFBK0IsRUFBRTtBQUN4RDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsOEJBQThCLEVBQUU7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLDJDQUEyQyxFQUFFO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw2Q0FBNkMsVUFBVTs7QUFFdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixRQUFRO0FBQ3JDLDZCQUE2QixRQUFRO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdEQUF3RCxVQUFVO0FBQ2xFO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxRIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBHYW1lIGZyb20gJy4vR2FtZSc7XHJcbmltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL3dlYmdsLTJkL3dlYmdsLTJkJztcclxuXHJcbi8vR0FNRSBJTklUIDw9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFxyXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpO1xyXG5XZWJHTDJELmVuYWJsZShjYW52YXMpOyAvLyBhZGRzIFwid2ViZ2wtMmRcIiBjb250ZXh0IHRvIGN2c1xyXG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wtMmQnKTtcclxuXHJcblxyXG5jb25zdCBnYW1lID0gbmV3IEdhbWUoY3R4KTtcclxuZ2FtZS5zdGFydCgpOyAgICAiLCJpbXBvcnQgTWVkaWFIYW5kbGVyIGZyb20gJy4vTWVkaWFIYW5kbGVyJztcclxuaW1wb3J0IEdhbWVTY2VuZSBmcm9tICcuL1NjZW5lJztcclxuXHJcbmNvbnN0IG1lZGlhSGFuZGxlciA9IG5ldyBNZWRpYUhhbmRsZXIoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xyXG4gICAgY29uc3RydWN0b3IoY3R4KSB7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XHJcblxyXG4gICAgICAgIC8vZ2FtZSBzdGF0ZSAob2ZmID0gMCwgb24gPSAxLCBwYXVzZSA9IDIpXHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSAwO1xyXG5cclxuICAgICAgICAvL3NhbXBsZSBvZiBhIHN0YWdlIGNsYXNzXHJcbiAgICAgICAgdGhpcy5zdGFnZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLy9nYW1lIGluaXRpYWxpemF0aW9uIHByb2Nlc3NcclxuICAgIGFzeW5jIGluaXQoKSB7XHJcbiAgICAgICAgbWVkaWFIYW5kbGVyLnNldEltYWdlU291cmNlcyhbXHJcbiAgICAgICAgICAgICcuL2Rpc3QvaW1hZ2VzL3NoaXAucG5nJyxcclxuICAgICAgICAgICAgJy4vZGlzdC9pbWFnZXMvbWlzc2lsZS5wbmcnLFxyXG4gICAgICAgICAgICAnLi9kaXN0L2ltYWdlcy9iaWdnZXJzaGlwLnBuZycsXHJcbiAgICAgICAgICAgICcuL2Rpc3QvaW1hZ2VzL2VuZW15LnBuZycsXHJcbiAgICAgICAgICAgICcuL2Rpc3QvaW1hZ2VzL2J1bGxldC5wbmcnLFxyXG4gICAgICAgICAgICAnLi9kaXN0L2ltYWdlcy9yb2NrZXQucG5nJyxcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgLy9wcmVsb2FkIGltYWdlc1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdJbWFnZSBwcmVsb2FkaW5nLicpO1xyXG4gICAgICAgIGF3YWl0IG1lZGlhSGFuZGxlci5wcmVsb2FkQWxsSW1hZ2VzKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0ltYWdlcyBwcmVsb2FkaW5nIGRvbmUuJyk7XHJcbiAgICB9XHJcbiAgICAvL2dhbWUgc3RhcnRcclxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT13aXA9PT09PT09PT09PT09PT09PVxyXG4gICAgYXN5bmMgc3RhcnQoKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5pbml0KCk7XHJcblxyXG4gICAgICAgIC8vZ2FtZSBvbiBzdGF0ZVxyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gMTtcclxuXHJcbiAgICAgICAgLy9jcmVhdGlvbiBvZiBzdGFnZSAxIDw9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gV2lQIVxyXG4gICAgICAgIHRoaXMuc3RhZ2UgPSBuZXcgR2FtZVNjZW5lKHtcclxuICAgICAgICAgICAgbmFtZTogJ0EgVGVzdCBHYW1lIFN0YWdlJyxcclxuICAgICAgICAgICAgY3R4OiB0aGlzLmN0eCxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnN0YWdlLnN0YXJ0KCk7XHJcbiAgICB9ICBcclxufSIsImltcG9ydCBnYW1lTWVkaWEgZnJvbSAnLi9nYW1lTWVkaWEnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVkaWFIYW5kbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZVNvdXJjZXMgPSAocHJvcHMgJiYgcHJvcHMuaW1hZ2VTb3VyY2VzLnNsaWNlKCkpIHx8IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEltYWdlU291cmNlcyhzb3VyY2VzQXJyYXkpIHtcclxuICAgICAgICB0aGlzLmltYWdlU291cmNlcyA9IHNvdXJjZXNBcnJheS5zbGljZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEltYWdlU291cmNlcygpIHtcclxuICAgICAgICByZXR1cm4gIHRoaXMuaW1hZ2VTb3VyY2VzO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEltYWdlKGltYWdlLCBzcmMpIHtcclxuICAgICAgICBjb25zdCBpbWFnZU5hbWUgPSBzcmMubWF0Y2goLyhcXHcrKSg/OlxcLlxcdyspJC8pWzFdO1xyXG4gICAgICAgIGdhbWVNZWRpYVtpbWFnZU5hbWVdID0gaW1hZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW1hZ2UoaW1hZ2UpIHtcclxuICAgICAgICByZXR1cm4gZ2FtZU1lZGlhW2ltYWdlXTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBwcmVsb2FkQWxsSW1hZ2VzKCkge1xyXG4gICAgICAgIGZvcihsZXQgc3JjIG9mIHRoaXMuaW1hZ2VTb3VyY2VzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBMb2FkaW5nICR7c3JjfS5gKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRJbWFnZShhd2FpdCB0aGlzLnByZWxvYWRJbWFnZShzcmMpLCBzcmMpO1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgcHJlbG9hZEltYWdlKHNyYykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBJbWFnZSAke2ltZy5zcmN9IGxvYWRlZC5gKVxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShpbWcpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpbWcub25lcnJvciA9ICgpID0+IHJlamVjdCgpO1xyXG4gICAgICAgICAgICBpbWcuc3JjID0gc3JjO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwibGV0IGdhbWVNZWRpYSA9IHt9O1xyXG5leHBvcnQgZGVmYXVsdCBnYW1lTWVkaWE7IiwiaW1wb3J0IEdhbWVXaW5kb3cgZnJvbSAnLi9HYW1lV2luZG93JztcclxuaW1wb3J0IE1lZGlhSGFuZGxlciBmcm9tICcuL01lZGlhSGFuZGxlcic7XHJcbmltcG9ydCBPYmplY3RIYW5kbGVyIGZyb20gJy4vT2JqZWN0SGFuZGxlcic7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInO1xyXG5pbXBvcnQgRW1lbnlTaGlwIGZyb20gJy4vRW1lbnlTaGlwJztcclxuaW1wb3J0IEFjdGlvbiBmcm9tICcuL0FjdGlvbic7XHJcbmltcG9ydCBXZWFwb24gZnJvbSAnLi9XZWFwb24nO1xyXG5pbXBvcnQga2V5U3RhdGVzIGZyb20gJy4va2V5U3RhdGVzJztcclxuXHJcbmNvbnN0IG1lZGlhSGFuZGxlciA9IG5ldyBNZWRpYUhhbmRsZXIoKTtcclxuY29uc3Qgb2JqZWN0SGFuZGxlciA9IG5ldyBPYmplY3RIYW5kbGVyKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU2NlbmUge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBwcm9wcy5uYW1lO1xyXG4gICAgICAgIHRoaXMuZ2FtZVdpbmRvdyA9IG5ldyBHYW1lV2luZG93KHtcclxuICAgICAgICAgICAgY3R4OiBwcm9wcy5jdHgsXHJcbiAgICAgICAgICAgIHdpZHRoOiA5MDAsXHJcbiAgICAgICAgICAgIGhlaWdodDogNzAwLFxyXG4gICAgICAgICAgICAvLyBzY2FsZTogMlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucmVxdWVzdElkID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZwcyA9IDYwO1xyXG4gICAgICAgIHRoaXMudHBzID0gMTI7XHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5sYXN0VGlsZVRpbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZnJhbWVEZWxheSA9IE1hdGguZmxvb3IoMTAwMCAvIHRoaXMuZnBzKTtcclxuICAgICAgICB0aGlzLnRpbGVEZWxheSA9ICBNYXRoLmZsb29yKDEwMDAgLyB0aGlzLnRwcyk7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0U2NhbGUgPSAxO1xyXG4gICAgICAgIHRoaXMub2JqZWN0cyA9IG9iamVjdEhhbmRsZXIuZ2V0T2JqZWN0cygpO1xyXG4gICAgICAgIHRoaXMubGF5ZXJzID0ge1xyXG4gICAgICAgICAgICBvdmVybGF5OiBbXSxcclxuICAgICAgICAgICAgZnJvbnQ6IFtdLFxyXG4gICAgICAgICAgICBtYWluOiBbXSxcclxuICAgICAgICAgICAgYmFjazogW10sXHJcbiAgICAgICAgICAgIGJhY2ticm91bmQ6IFtdXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmxheWVyc0FycmF5ID0gW107XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSAnIzExMTExMSc7XHJcblxyXG4gICAgICAgIHRoaXMuZnJhbWUgPSB0aGlzLmZyYW1lLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9JTklUSUFMSVpBVElPTiA8PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBhc3luYyBpbml0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBTY2VuZSBcIiR7IHRoaXMubmFtZSB9XCIgbG9hZGluZy5gKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgb2JqZWN0cy4nKTtcclxuICAgICAgICBhd2FpdCB0aGlzLmNyZWF0ZVNjZW5lT2JqZWN0cygpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyBvYmplY3RzIGRvbmUuJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFNjZW5lIFwiJHsgdGhpcy5uYW1lIH1cIiBsb2FkZWQuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9PQkpFQ1QgQ1JFQVRJT04gPD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY3JlYXRlU2NlbmVPYmplY3RzKCkge1xyXG4gICAgICAgIGNvbnN0IGJhc2ljV2VhcG9uID0gbmV3IFdlYXBvbih7XHJcbiAgICAgICAgICAgIGJ1bGxldEltYWdlOiBtZWRpYUhhbmRsZXIuZ2V0SW1hZ2UoJ21pc3NpbGUnKSxcclxuICAgICAgICAgICAgdGlsZVdpZHRoOiAzMixcclxuICAgICAgICAgICAgdGlsZUhlaWdodDogMzIsXHJcbiAgICAgICAgICAgIHRpbGVzQW1vdW50OiA4LFxyXG4gICAgICAgICAgICBzcGVlZDogMTAwLFxyXG4gICAgICAgICAgICBoaXRib3hXaWR0aDogMTAsXHJcbiAgICAgICAgICAgIGhpdGJveEhlaWdodDogMTAsXHJcbiAgICAgICAgICAgIHdlYXBvblg6IDQ4LFxyXG4gICAgICAgICAgICB3ZWFwb25ZOiAwLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllciA9IG9iamVjdEhhbmRsZXIuY3JlYXRlT2JqZWN0KFBsYXllciwge1xyXG4gICAgICAgICAgICBocDogMTAwLFxyXG4gICAgICAgICAgICBzcGVlZDogMjAwLFxyXG4gICAgICAgICAgICB0dXJuU3BlZWQ6IDUsXHJcbiAgICAgICAgICAgIHNob3RpbmdTcGVlZDogMixcclxuICAgICAgICAgICAgaW1hZ2U6IG1lZGlhSGFuZGxlci5nZXRJbWFnZSgnc2hpcCcpLFxyXG4gICAgICAgICAgICB0aWxlc0Ftb3VudDogMixcclxuICAgICAgICAgICAgdGlsZVdpZHRoOiAxMjgsXHJcbiAgICAgICAgICAgIHRpbGVIZWlnaHQ6IDEyOCxcclxuICAgICAgICAgICAgd2VhcG9uOiBiYXNpY1dlYXBvbixcclxuICAgICAgICAgICAgaGl0Ym94T2Zmc2V0WDogMTYsXHJcbiAgICAgICAgICAgIGhpdGJveE9mZnNldFk6IDE2LFxyXG4gICAgICAgICAgICBoaXRib3hXaWR0aDogMzIsXHJcbiAgICAgICAgICAgIGhpdGJveEhlaWdodDogMzIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuc2V0UG9zaXRpb24odGhpcy5nYW1lV2luZG93LndpZHRoIC8gMiAtIHRoaXMucGxheWVyLnRpbGVXaWR0aCAvIDIsIHRoaXMuZ2FtZVdpbmRvdy5oZWlnaHQgLyAyIC0gdGhpcy5wbGF5ZXIudGlsZUhlaWdodCAvIDIpO1xyXG4gICAgICAgIHRoaXMucHVzaFRvTGF5ZXIodGhpcy5wbGF5ZXIsICdtYWluJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wbGF5ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vc2V0cyBhIHJlbmRlciBsYXllclxyXG4gICAgcHVzaFRvTGF5ZXIob2JqLCBsYXllcikge1xyXG4gICAgICAgIHRoaXMubGF5ZXJzW2xheWVyXS5wdXNoKG9iaik7XHJcbiAgICAgICAgdGhpcy5nZXRMYXllcnNBcnJheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdHJhbnNmb3JtcyBsYXllcnMgb2JqZWN0IGludG8gc2ltcGxlIGFycmF5IHRpIHNpbXBsaWZ5IHJlbmRlcmluZ1xyXG4gICAgZ2V0TGF5ZXJzQXJyYXkoKSB7XHJcbiAgICAgICAgdGhpcy5sYXllcnNBcnJheSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGxheWVyc1ZhbHVlcyA9IE9iamVjdC52YWx1ZXModGhpcy5sYXllcnMpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBsYXllcnNWYWx1ZXMubGVuZ3RoIC0gMTsgaSA+PTA7IGktLSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBvYmogb2YgbGF5ZXJzVmFsdWVzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxheWVyc0FycmF5LnB1c2gob2JqKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL3N0YXJ0IHNjZW5lXHJcbiAgICBhc3luYyBzdGFydCgpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLmluaXQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnR2FtZSBzdGFydGVkLicpXHJcblxyXG4gICAgICAgIC8vIGdhbWUgc3RhcnQgdGltZVxyXG4gICAgICAgIHRoaXMuc3RhcnRTY2VuZUxvb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydFNjZW5lTG9vcCgpIHtcclxuICAgICAgICAvLyBnYW1lIHN0YXJ0IHRpbWVcclxuICAgICAgICB0aGlzLmxhc3QgPSB0aGlzLmxhc3RUaWxlVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHRoaXMucmVxdWVzdElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZnJhbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vTE9HSUMgPD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgdGhpcy5rZXlIYW5kbGVyKGR0KTtcclxuICAgICAgICBmb3IgKGxldCBvYmogb2YgdGhpcy5vYmplY3RzKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmoudXBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBvYmoudXBkYXRlKGR0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy9BTklNQVRJT04gPD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgZnJhbWUoKSB7XHJcbiAgICAgICAgbGV0IGR0ID0gfn4ocGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLmxhc3RUaW1lKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoZHQgPCB0aGlzLmZyYW1lRGVsYXkpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0SWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5mcmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGUoZHQpO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hUaWxlcyh0aGlzLm9iamVjdHMpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0SWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5mcmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hUaWxlcyhvYmplY3RzKSB7XHJcbiAgICAgICAgbGV0IGR0ID0gcGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLmxhc3RUaWxlVGltZTtcclxuICAgICAgICBpZiAoZHQgPiB0aGlzLnRpbGVEZWxheSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBvYmogb2Ygb2JqZWN0cykge1xyXG4gICAgICAgICAgICAgICAgb2JqLm5leHRUaWxlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sYXN0VGlsZVRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9SRU5ERVIgPD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuZmlsbEZpZWxkKCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IG9iaiBvZiB0aGlzLm9iamVjdHMpIHtcclxuICAgICAgICAgICAgb2JqLmRyYXcodGhpcy5nYW1lV2luZG93LmN0eCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuXHJcbiAgICBmaWxsRmllbGQoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lV2luZG93LmN0eC5maWxsU3R5bGUgPSB0aGlzLmJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICB0aGlzLmdhbWVXaW5kb3cuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZ2FtZVdpbmRvdy53aWR0aCwgdGhpcy5nYW1lV2luZG93LmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAga2V5SGFuZGxlcihkdCkge1xyXG4gICAgICAgIGlmIChrZXlTdGF0ZXMuc3BhY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2hvdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgKGtleVN0YXRlcy51cCkge1xyXG4gICAgICAgIC8vICAgICBpZiAoa2V5U3RhdGVzLnJpZ2h0KSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnBsYXllci5tb3ZlKDQ1LCBkdCk7XHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSBpZiAoa2V5U3RhdGVzLmxlZnQpe1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZSgxMzUsIGR0KTtcclxuICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMucGxheWVyLm1vdmUoOTAsIGR0KTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0gZWxzZSBpZiAoa2V5U3RhdGVzLmRvd24pIHtcclxuICAgICAgICAvLyAgICAgaWYgKGtleVN0YXRlcy5yaWdodCkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZSgzMTUsIGR0KTtcclxuICAgICAgICAvLyAgICAgfSBlbHNlIGlmIChrZXlTdGF0ZXMubGVmdCl7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnBsYXllci5tb3ZlKDIyNSwgZHQpO1xyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZSgyNzAsIGR0KTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0gZWxzZSBpZiAoa2V5U3RhdGVzLmxlZnQpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5wbGF5ZXIubW92ZSgxODAsIGR0KTtcclxuICAgICAgICAvLyB9IGVsc2UgaWYgKGtleVN0YXRlcy5yaWdodCl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMucGxheWVyLm1vdmUoMCwgZHQpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoa2V5U3RhdGVzLnVwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmVGb3J3YXJkKGR0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleVN0YXRlcy5sZWZ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnR1cm4oJ2xlZnQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleVN0YXRlcy5yaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci50dXJuKCdyaWdodCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuY2hlY2tCb3JkZXJzKHRoaXMuZ2FtZVdpbmRvdyk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lV2luZG93IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5jdHggPSBwcm9wcy5jdHg7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHByb3BzLndpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gcHJvcHMuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMudG9wID0gMDtcclxuICAgICAgICB0aGlzLnJpZ2h0ID0gcHJvcHMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5ib3R0b20gPSBwcm9wcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5sZWZ0ID0gMDtcclxuICAgICAgICB0aGlzLnNjYWxlID0gcHJvcHMuc2NhbGUgfHwgMTtcclxuXHJcbiAgICAgICAgaWYgKHByb3BzLnNjYWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NhbGVDb250ZXh0KHRoaXMuc2NhbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzY2FsZUNvbnRleHQoc2NhbGUpIHtcclxuICAgICAgICB0aGlzLmN0eC5zY2FsZShzY2FsZSwgc2NhbGUpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IGdhbWVPYmplY3RzIGZyb20gJy4vZ2FtZU9iamVjdHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0SGFuZGxlciB7XHJcbiAgICBcclxuICAgIGNyZWF0ZU9iamVjdChDbGFzcywgcHJvcHMpIHtcclxuICAgICAgICBsZXQgb2JqID0gbmV3IENsYXNzKHByb3BzKTtcclxuICAgICAgICB0aGlzLmFkZE9iamVjdChvYmopO1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkT2JqZWN0KG9iaikge1xyXG4gICAgICAgIGdhbWVPYmplY3RzLnB1c2gob2JqKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRPYmplY3Qobikge1xyXG4gICAgICAgIHJldHVybiBnYW1lT2JqZWN0c1tuXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRPYmplY3RzKCkge1xyXG4gICAgICAgIHJldHVybiBnYW1lT2JqZWN0cztcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVPYmplY3Qob2JqKSB7XHJcbiAgICAgICAgZ2FtZU9iamVjdHMuc3BsaWNlKGdhbWVPYmplY3RzLmluZGV4T2Yob2JqKSwgMSk7XHJcbiAgICB9XHJcbn0iLCJsZXQgb2JqZWN0cyA9IFtdO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgb2JqZWN0czsiLCJpbXBvcnQga2V5U3RhdGVzIGZyb20gJy4va2V5U3RhdGVzJztcclxuaW1wb3J0IFNoaXAgZnJvbSAnLi9TaGlwJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIFNoaXAge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tCb3JkZXJzKHJlY3RhbmdsZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uWSA8IHJlY3RhbmdsZS50b3ApIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvblkgPSByZWN0YW5nbGUudG9wO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvblkgKyB0aGlzLnRpbGVIZWlnaHQgPiByZWN0YW5nbGUuYm90dG9tKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25ZID0gcmVjdGFuZ2xlLmJvdHRvbSAtIHRoaXMudGlsZUhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb25YIDwgcmVjdGFuZ2xlLmxlZnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvblggPSByZWN0YW5nbGUubGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb25YICsgdGhpcy50aWxlV2lkdGggPiByZWN0YW5nbGUucmlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvblggPSByZWN0YW5nbGUucmlnaHQgLSB0aGlzLnRpbGVXaWR0aDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZUZvcndhcmQoYW5nbGUsIGR0KSB7XHJcbiAgICAgICAgc3VwZXIubW92ZUZvcndhcmQoYW5nbGUsIGR0KTtcclxuICAgIH1cclxuXHJcbiAgICB0dXJuKGRpcmVjdGlvbikge1xyXG4gICAgICAgIHN1cGVyLnR1cm4oZGlyZWN0aW9uKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSAncmlnaHQnOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUaWxlUm93ID0gMjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUaWxlUm93ID0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmKCFrZXlTdGF0ZXMubGVmdCAmJiAha2V5U3RhdGVzLnJpZ2h0ICYmICFrZXlTdGF0ZXMudXApIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGlsZVJvdyA9IDA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChrZXlTdGF0ZXMudXApIHtcclxuICAgICAgICAgICAgaWYgKGtleVN0YXRlcy5yaWdodCAmJiBrZXlTdGF0ZXMubGVmdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VGlsZVJvdyA9IDc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5U3RhdGVzLnJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUaWxlUm93ID0gNTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXlTdGF0ZXMubGVmdCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUaWxlUm93ID0gMztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbGVSb3cgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChrZXlTdGF0ZXMucmlnaHQgJiYga2V5U3RhdGVzLmxlZnQpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGlsZVJvdyA9IDY7XHJcbiAgICAgICAgfSBlbHNlIGlmIChrZXlTdGF0ZXMubGVmdCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUaWxlUm93ID0gMjtcclxuICAgICAgICB9IGVsc2UgaWYgKGtleVN0YXRlcy5yaWdodCl7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbGVSb3cgPSA0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImxldCBrZXlTdGF0ZXMgPSB7IFxyXG4gICAgdXA6IGZhbHNlLFxyXG4gICAgcmlnaHQ6IGZhbHNlLFxyXG4gICAgZG93bjogZmFsc2UsXHJcbiAgICBsZWZ0OiBmYWxzZSxcclxuICAgIHNwYWNlOiBmYWxzZVxyXG59O1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gODcgfHwgZS5rZXlDb2RlID09PSAzOCkge1xyXG4gICAgICAgIGtleVN0YXRlcy51cCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSA2NSB8fCBlLmtleUNvZGUgPT09IDM3KSB7XHJcbiAgICAgICAga2V5U3RhdGVzLmxlZnQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gODMgfHwgZS5rZXlDb2RlID09PSA0MCkge1xyXG4gICAgICAgIGtleVN0YXRlcy5kb3duID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChlLmtleUNvZGUgPT09IDY4IHx8IGUua2V5Q29kZSA9PT0gMzkpIHtcclxuICAgICAgICBrZXlTdGF0ZXMucmlnaHQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMzIpIHtcclxuICAgICAgICBrZXlTdGF0ZXMuc3BhY2UgPSB0cnVlO1xyXG4gICAgfVxyXG59LCB0cnVlKTtcclxuICAgIFxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gODcgfHwgZS5rZXlDb2RlID09PSAzOCkge1xyXG4gICAgICAgIGtleVN0YXRlcy51cCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gNjUgfHwgZS5rZXlDb2RlID09PSAzNykge1xyXG4gICAgICAgIGtleVN0YXRlcy5sZWZ0ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSA4MyB8fCBlLmtleUNvZGUgPT09IDQwKSB7XHJcbiAgICAgICAga2V5U3RhdGVzLmRvd24gPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChlLmtleUNvZGUgPT09IDY4IHx8IGUua2V5Q29kZSA9PT0gMzkpIHtcclxuICAgICAgICBrZXlTdGF0ZXMucmlnaHQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChlLmtleUNvZGUgPT09IDMyKSB7XHJcbiAgICAgICAga2V5U3RhdGVzLnNwYWNlID0gZmFsc2U7XHJcbiAgICB9XHJcbn0sIHRydWUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQga2V5U3RhdGVzOyIsImltcG9ydCBEeW5hbWljT2JqZWN0IGZyb20gJy4vRHluYW1pY09iamVjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIGV4dGVuZHMgRHluYW1pY09iamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmhwID0gcHJvcHMuaHAgfHwgMTAwO1xyXG4gICAgICAgIHRoaXMuc2hvdGluZ1NwZWVkID0gcHJvcHMuc2hvdGluZ1NwZWVkIHx8IDE7XHJcbiAgICAgICAgdGhpcy5sYXN0U2hvdCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy53ZWFwb24gPSBwcm9wcy53ZWFwb24gfHwgbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlKGFuZ2xlLCBkdCkge1xyXG4gICAgICAgIHN1cGVyLm1vdmUoYW5nbGUsIGR0KTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlRm9yd2FyZChkdCkge1xyXG4gICAgICAgIHRoaXMubW92ZSh0aGlzLmFuZ2xlLCBkdCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdCgpIHsgICAgICAgICAgICBcclxuICAgICAgICBpZiAoIXRoaXMubGFzdFNob3QpIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0U2hvdCA9IHBlcmZvcm1hbmNlLm5vdygpOyBcclxuICAgICAgICAgICAgdGhpcy53ZWFwb24uc2hvdCh0aGlzLnBvc2l0aW9uWCwgdGhpcy5wb3NpdGlvblksIHRoaXMuYW5nbGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZHQgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMubGFzdFNob3Q7XHJcbiAgICAgICAgaWYgKGR0ID49IDEwMDAgLyB0aGlzLnNob3RpbmdTcGVlZCkge1xyXG4gICAgICAgICAgICB0aGlzLndlYXBvbi5zaG90KHRoaXMucG9zaXRpb25YLCB0aGlzLnBvc2l0aW9uWSwgdGhpcy5hbmdsZSk7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFNob3QgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG59IiwiaW1wb3J0IE9iamVjdCBmcm9tICcuL09iamVjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEeW5hbWljT2JqZWN0IGV4dGVuZHMgT2JqZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBwcm9wcy5zcGVlZCB8fCAwO1xyXG4gICAgICAgIHRoaXMudHVyblNwZWVkID0gcHJvcHMudHVyblNwZWVkIHx8IDA7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZShhbmdsZSwgZHQpIHtcclxuICAgICAgICBsZXQgb2Zmc2V0ID0gdGhpcy5zcGVlZCAqIGR0IC8gMTAwMDtcclxuICAgICAgICBjb25zdCByYWRBbmdsZSA9IGFuZ2xlICogTWF0aC5QSSAvIDE4MDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uWCArPSBNYXRoLnJvdW5kKE1hdGguY29zKHJhZEFuZ2xlKSAqIG9mZnNldCk7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblkgLT0gTWF0aC5yb3VuZChNYXRoLnNpbihyYWRBbmdsZSkgKiBvZmZzZXQpO1xyXG4gICAgICAgIGlmICh0aGlzLmhhc0hpdGJveCkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUhpdGJveFBvc2l0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHR1cm4oZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSAncmlnaHQnOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuZ2xlIC09IHRoaXMudHVyblNwZWVkO1xyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLmFuZ2xlIDw9IDAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmdsZSA9IDM2MCAtIHRoaXMuYW5nbGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJhZEFuZ2xlID0gdGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdsZWZ0Jzoge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmdsZSArPSB0aGlzLnR1cm5TcGVlZDtcclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5hbmdsZSA+PSAzNjAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmdsZSA9IHRoaXMuYW5nbGUgLSAzNjA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJhZEFuZ2xlID0gdGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRTcGVlZChzcGVlZCkge1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVIaXRib3hQb3NpdGlvbigpIHtcclxuICAgICAgICB0aGlzLmhpdGJveFBvc2l0aW9uWCA9IHRoaXMucG9zaXRpb25YICsgdGhpcy5oaXRib3hPZmZzZXRYO1xyXG4gICAgICAgIHRoaXMuaGl0Ym94UG9zaXRpb25ZID0gdGhpcy5wb3NpdGlvblkgKyB0aGlzLmhpdGJveE9mZnNldFk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBPYmplY3Qge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBwcm9wcy5uYW1lO1xyXG4gICAgICAgIHRoaXMuZ3JvdXAgPSBwcm9wcy5ncm91cCB8fCBudWxsO1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBwcm9wcy5pbWFnZSB8fCBudWxsO1xyXG4gICAgICAgIHRoaXMudGlsZXNBbW91bnQgPSBwcm9wcy50aWxlc0Ftb3VudCB8fCAwO1xyXG4gICAgICAgIHRoaXMudGlsZVdpZHRoID0gcHJvcHMudGlsZVdpZHRoIHx8IDA7XHJcbiAgICAgICAgdGhpcy50aWxlSGVpZ2h0ID0gcHJvcHMudGlsZUhlaWdodCB8fCAwO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbGVSb3cgPSBwcm9wcy5jdXJyZW50VGlsZVJvdyB8fCAwO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbGUgPSBwcm9wcy5jdXJyZW50VGlsZSB8fCAwO1xyXG4gICAgICAgIHRoaXMuYW5nbGUgPSBwcm9wcy5hbmdsZSB8fCA5MDtcclxuICAgICAgICB0aGlzLnJhZEFuZ2xlID0gdGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODA7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblggPSBwcm9wcy5wb3NpdGlvblggfHwgMDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uWSA9IHByb3BzLnBvc2l0aW9uWSB8fCAwO1xyXG4gICAgICAgIGlmIChwcm9wcy5oaXRib3hPZmZzZXRYIHx8ICBwcm9wcy5oaXRib3hPZmZzZXRZIHx8IHByb3BzLmhpdGJveEhlaWdodCB8fCBwcm9wcy5oaXRib3hXaWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmhpdGJveE9mZnNldFggPSBwcm9wcy5oaXRib3hPZmZzZXRYIHx8IDA7XHJcbiAgICAgICAgICAgIHRoaXMuaGl0Ym94T2Zmc2V0WSA9IHByb3BzLmhpdGJveE9mZnNldFkgfHwgMDtcclxuICAgICAgICAgICAgdGhpcy5oaXRib3hIZWlnaHQgPSBwcm9wcy5oaXRib3hIZWlnaHQgfHwgMDtcclxuICAgICAgICAgICAgdGhpcy5oaXRib3hXaWR0aCA9IHByb3BzLmhpdGJveFdpZHRoIHx8IDA7XHJcbiAgICAgICAgICAgIHRoaXMuaGl0Ym94UG9zaXRpb25YID0gdGhpcy5wb3NpdGlvblggKyB0aGlzLmhpdGJveE9mZnNldFg7XHJcbiAgICAgICAgICAgIHRoaXMuaGl0Ym94UG9zaXRpb25ZID0gdGhpcy5wb3NpdGlvblkgKyB0aGlzLmhpdGJveE9mZnNldFk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzSGl0Ym94ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UG9zaXRpb24oeCwgeSkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25YID0geDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uWSA9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dFRpbGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRpbGUgPCAodGhpcy50aWxlc0Ftb3VudCAtIDEpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbGUrKztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUaWxlID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW1hZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhjdHgpIHtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5wb3NpdGlvblggICsgdGhpcy50aWxlV2lkdGggLyAyLCB0aGlzLnBvc2l0aW9uWSArIHRoaXMudGlsZUhlaWdodCAvIDIpO1xyXG4gICAgICAgIGN0eC5yb3RhdGUoLSh0aGlzLmFuZ2xlIC0gOTApICogTWF0aC5QSSAvIDE4MCk7XHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB0aGlzLmN1cnJlbnRUaWxlICogdGhpcy50aWxlV2lkdGgsICB0aGlzLmN1cnJlbnRUaWxlUm93ICogdGhpcy50aWxlSGVpZ2h0LCB0aGlzLnRpbGVXaWR0aCwgdGhpcy50aWxlSGVpZ2h0LCAtdGhpcy50aWxlV2lkdGggLyAyLCAtdGhpcy50aWxlSGVpZ2h0IC8gMiwgdGhpcy50aWxlV2lkdGgsIHRoaXMudGlsZUhlaWdodCk7XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxufSIsImltcG9ydCBTaGlwIGZyb20gJy4vU2hpcCc7XHJcbmltcG9ydCBCZWhhdmlvciBmcm9tICcuL0JlaGF2aW9yJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtZW55U2hpcCBleHRlbmRzIFNoaXAge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMucGF1c2UgPSB0aGlzLnBhdXNlLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuYmVoYXZpb3IgPSBuZXcgQmVoYXZpb3IoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy9FTkVNWSBTSElQIExJR0lDIEFORCBBQ1RJT05TXHJcbiAgICBwYXVzZSgpIHt9XHJcbiBcclxuICAgIC8vU0VUIEJFSEFWSU9SXHJcbiAgICBzZXRCZWhhdmlvcihhY3Rpb25zKSB7XHJcbiAgICAgICAgdGhpcy5iZWhhdmlvci5zZXRBY3Rpb25zKGFjdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvQ3VycmVudEFjdGlvbigpIHtcclxuICAgICAgICB0aGlzLmJlaGF2aW9yLmRvQ3VycmVudEFjdGlvbigpO1xyXG4gICAgfVxyXG59IiwiLy9CRUhBVklPVVIgQ0xBU1MuIEhBTkRMRVMgQUNUSU9OJ1MgRVhFQ1VUSU9OXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJlaGF2aW9yIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgLy90aGlzIGlzIGFuIGFycmF5IG9mIGVuZW15IGFjdGlvbnMgbGlrZSBtb3ZlLCB0dXJuLCBzdG9wIGV0Yy4gXHJcbiAgICAgICAgLy8gcHJvcHMuYWN0aW9ucyA/IHRoaXMuYWN0aW9ucyA9IHByb3BzLmFjdGlvbnMuc2xpY2UoKSA6IFtdO1xyXG4gICAgICAgIGlmIChwcm9wcyAmJiBwcm9wcy5hY3Rpb25zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aW9ucyA9IHByb3BzLmFjdGlvbnM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hY3Rpb25zID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRBY3Rpb24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uU3RhcnRUaW1lID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5hY3Rpb25TdGFydFZhbHVlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvL1NFVFRJTkcgQUNUSU9OU1xyXG4gICAgc2V0QWN0aW9ucyhhY3Rpb25zKSB7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25zID0gYWN0aW9ucy5zbGljZSgpO1xyXG4gICAgICAgIHRoaXMubmV4dEFjdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEFjdGlvbihhY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmFjdGlvbnMucHVzaChhY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vTkVYVCBBQ1RJT05TXHJcbiAgICBuZXh0QWN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEFjdGlvbiA9IHRoaXMuYWN0aW9ucy5zaGlmdCgpO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uU3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgdGhpcy5kb0N1cnJlbnRBY3Rpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBkb0N1cnJlbnRBY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEFjdGlvbi5kdXJhdGlvbikge1xyXG4gICAgICAgICAgICBsZXQgZHQgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMuYWN0aW9uU3RhcnRUaW1lO1xyXG5cclxuICAgICAgICAgICAgaWYgKGR0ID49IHRoaXMuY3VycmVudEFjdGlvbi5kdXJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0QWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvblN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBY3Rpb24ubWV0aG9kKHRoaXMuY3VycmVudEFjdGlvbi52YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRBY3Rpb24ub25jZSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBY3Rpb24ubWV0aG9kKHRoaXMuY3VycmVudEFjdGlvbi52YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dEFjdGlvbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFjdGlvbi5tZXRob2QodGhpcy5jdXJyZW50QWN0aW9uLnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0gIiwiLy9BTiBBQ1RJT04gQ0xBU1MuIElTIE5FRURFRCBUTyBDT05TVFJVQ1QgQkVIQVZJT1IgQVJSQVlTIEZPUiBBVVRPTUFUSUMgRU5USVRJRVNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5tZXRob2QgPSBwcm9wcy5tZXRob2Q7XHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IHByb3BzLmR1cmF0aW9uO1xyXG4gICAgICAgIHRoaXMub25jZSA9IHByb3BzLm9uY2U7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHByb3BzLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uU3RhcnRUaW1lID0gbnVsbDtcclxuICAgIH1cclxufSAgIiwiaW1wb3J0IEJ1bGxldCBmcm9tICcuL0J1bGxldCc7XHJcbmltcG9ydCBPYmplY3RIYW5kbGVyIGZyb20gJy4vT2JqZWN0SGFuZGxlcic7XHJcblxyXG5jb25zdCBvYmplY3RIYW5kbGVyID0gbmV3IE9iamVjdEhhbmRsZXIoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYXBvbiB7XHJcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBwcm9wcy5uYW1lO1xyXG4gICAgICAgIHRoaXMuZ3JvdXAgPSBwcm9wcy5ncm91cDtcclxuICAgICAgICB0aGlzLmJ1bGxldEltYWdlID0gcHJvcHMuYnVsbGV0SW1hZ2U7XHJcbiAgICAgICAgdGhpcy50aWxlV2lkdGggPSBwcm9wcy50aWxlV2lkdGg7XHJcbiAgICAgICAgdGhpcy50aWxlSGVpZ2h0ID0gcHJvcHMudGlsZUhlaWdodDtcclxuICAgICAgICB0aGlzLnRpbGVzQW1vdW50ID0gcHJvcHMudGlsZXNBbW91bnQgfHwgMTtcclxuICAgICAgICB0aGlzLmRhbWFnZSA9IHByb3BzLmRhbWFnZSB8fCAxO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBwcm9wcy5zcGVlZCB8fCAxO1xyXG4gICAgICAgIHRoaXMud2VhcG9uWCA9IHByb3BzLndlYXBvblggfHwgMDtcclxuICAgICAgICB0aGlzLndlYXBvblkgPSBwcm9wcy53ZWFwb25ZIHx8IDA7XHJcbiAgICB9XHJcbiBcclxuICAgIHNob3QocG9zaXRpb25YLCBwb3NpdGlvblksIGFuZ2xlKSB7XHJcbiAgICAgICAgb2JqZWN0SGFuZGxlci5jcmVhdGVPYmplY3QoQnVsbGV0LCB7XHJcbiAgICAgICAgICAgIGdyb3VwOiAncGxheWVyQnVsbGV0JyxcclxuICAgICAgICAgICAgaW1hZ2U6IHRoaXMuYnVsbGV0SW1hZ2UsXHJcbiAgICAgICAgICAgIHRpbGVXaWR0aDogdGhpcy50aWxlV2lkdGgsXHJcbiAgICAgICAgICAgIHRpbGVIZWlnaHQ6IHRoaXMudGlsZUhlaWdodCxcclxuICAgICAgICAgICAgdGlsZXNBbW91bnQ6IHRoaXMudGlsZXNBbW91bnQsXHJcbiAgICAgICAgICAgIGFuZ2xlOiBhbmdsZSxcclxuICAgICAgICAgICAgcG9zaXRpb25YOiBwb3NpdGlvblggKyB0aGlzLndlYXBvblgsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uWTogcG9zaXRpb25ZICsgdGhpcy53ZWFwb25ZLFxyXG4gICAgICAgICAgICBkYW1hZ2U6IHRoaXMuZGFtYWdlLFxyXG4gICAgICAgICAgICBzcGVlZDogdGhpcy5zcGVlZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IER5bmFtaWNPYmplY3QgZnJvbSAnLi9EeW5hbWljT2JqZWN0JztcclxuaW1wb3J0IE9iamVjdEhhbmRsZXIgZnJvbSAnLi9PYmplY3RIYW5kbGVyJztcclxuXHJcbmNvbnN0IG9iamVjdEhhbmRsZXIgPSBuZXcgT2JqZWN0SGFuZGxlcigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnVsbGV0IGV4dGVuZHMgRHluYW1pY09iamVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5hbmdsZSA9IHByb3BzLmFuZ2xlO1xyXG4gICAgICAgIHRoaXMuZGFtYWdlID0gcHJvcHMuZGFtYWdlIHx8IDA7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHByb3BzLnNwZWVkIHx8IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlKHRoaXMuYW5nbGUsIGR0KTtcclxuICAgICAgICAvLyB0aGlzLmNoZWNrQm9yZGVycygpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2hlY2tCb3JkZXJzKCkge1xyXG4gICAgLy8gICAgIGlmICh0aGlzLnBvc2l0aW9uWSArIHRoaXMudGlsZUhlaWdodCA8PSAwKSB7XHJcbiAgICAvLyAgICAgICAgIG9iamVjdEhhbmRsZXIuZGVsZXRlT2JqZWN0KHRoaXMpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBpZiAodGhpcy5wb3NpdGlvblkgKyB0aGlzLnRpbGVIZWlnaHQgPiAwKSB7XHJcbiAgICAvLyAgICAgICAgIG9iamVjdEhhbmRsZXIuZGVsZXRlT2JqZWN0KHRoaXMpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBpZiAodGhpcy5wb3NpdGlvblkgKyB0aGlzLnRpbGVIZWlnaHQgPD0gMCkge1xyXG4gICAgLy8gICAgICAgICBvYmplY3RIYW5kbGVyLmRlbGV0ZU9iamVjdCh0aGlzKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgaWYgKHRoaXMucG9zaXRpb25ZICsgdGhpcy50aWxlSGVpZ2h0IDw9IDApIHtcclxuICAgIC8vICAgICAgICAgb2JqZWN0SGFuZGxlci5kZWxldGVPYmplY3QodGhpcyk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG59IiwiLyoqXG4gKiAgV2ViR0wtMkQuanMgLSBIVE1MNSBDYW52YXMyRCBBUEkgaW4gYSBXZWJHTCBjb250ZXh0XG4gKlxuICogIENyZWF0ZWQgYnkgQ29yYmFuIEJyb29rIDxjb3JiYW5icm9va0BnbWFpbC5jb20+IG9uIDIwMTEtMDMtMDIuXG4gKiAgQW1lbmRlZCB0byBieSBCb2JieSBSaWNodGVyIDxzZWNyZXRyb2JvdHJvbkBnbWFpbC5jb20+IG9uIDIwMTEtMDMtMDNcbiAqICBDdWJpY1ZSLmpzIGJ5IENoYXJsZXMgQ2xpZmZlIDxjakBjdWJpY3Byb2R1Y3Rpb25zLmNvbT4gb24gMjAxMS0wMy0wM1xuICpcbiAqL1xuXG4vKlxuICogIENvcHlyaWdodCAoYykgMjAxMSBDb3JiYW4gQnJvb2tcbiAqXG4gKiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nXG4gKiAgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4gKiAgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4gKiAgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuICogIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0b1xuICogIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0b1xuICogIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbiAqICBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAqICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcbiAqICBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICogIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkVcbiAqICBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OXG4gKiAgT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OXG4gKiAgV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKlxuICovXG5cbi8qKlxuICogVXNhZ2U6XG4gKlxuICogICAgdmFyIGN2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXNcIik7XG4gKlxuICogICAgV2ViR0wyRC5lbmFibGUoY3ZzKTsgLy8gYWRkcyBcIndlYmdsLTJkXCIgdG8gY3ZzXG4gKlxuICogICAgY3ZzLmdldENvbnRleHQoXCJ3ZWJnbC0yZFwiKTtcbiAqXG4gKi9cblxuKGZ1bmN0aW9uKE1hdGgsIHVuZGVmaW5lZCkge1xuXG4gIC8vIFZlY3RvciAmIE1hdHJpeCBsaWJyYXJpZXMgZnJvbSBDdWJpY1ZSLmpzXG4gIHZhciBNX1BJID0gMy4xNDE1OTI2NTM1ODk3OTMyMzg0NjI2NDMzODMyNzk1MDI4ODQxOTY4O1xuICB2YXIgTV9UV09fUEkgPSAyLjAgKiBNX1BJO1xuICB2YXIgTV9IQUxGX1BJID0gTV9QSSAvIDIuMDtcblxuICBmdW5jdGlvbiBpc1BPVCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA+IDAgJiYgKCh2YWx1ZSAtIDEpICYgdmFsdWUpID09PSAwO1xuICB9XG5cbiAgdmFyIHZlYzMgPSB7XG4gICAgbGVuZ3RoOiBmdW5jdGlvbihwdCkge1xuICAgICAgcmV0dXJuIE1hdGguc3FydChwdFswXSAqIHB0WzBdICsgcHRbMV0gKiBwdFsxXSArIHB0WzJdICogcHRbMl0pO1xuICAgIH0sXG5cbiAgICBub3JtYWxpemU6IGZ1bmN0aW9uKHB0KSB7XG4gICAgICB2YXIgZCA9IE1hdGguc3FydCgocHRbMF0gKiBwdFswXSkgKyAocHRbMV0gKiBwdFsxXSkgKyAocHRbMl0gKiBwdFsyXSkpO1xuICAgICAgaWYgKGQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIFswLCAwLCAwXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbcHRbMF0gLyBkLCBwdFsxXSAvIGQsIHB0WzJdIC8gZF07XG4gICAgfSxcblxuICAgIGRvdDogZnVuY3Rpb24odjEsIHYyKSB7XG4gICAgICByZXR1cm4gdjFbMF0gKiB2MlswXSArIHYxWzFdICogdjJbMV0gKyB2MVsyXSAqIHYyWzJdO1xuICAgIH0sXG5cbiAgICBhbmdsZTogZnVuY3Rpb24odjEsIHYyKSB7XG4gICAgICByZXR1cm4gTWF0aC5hY29zKCh2MVswXSAqIHYyWzBdICsgdjFbMV0gKiB2MlsxXSArIHYxWzJdICogdjJbMl0pIC8gKE1hdGguc3FydCh2MVswXSAqIHYxWzBdICsgdjFbMV0gKiB2MVsxXSArIHYxWzJdICogdjFbMl0pICogTWF0aC5zcXJ0KHYyWzBdICogdjJbMF0gKyB2MlsxXSAqIHYyWzFdICsgdjJbMl0gKiB2MlsyXSkpKTtcbiAgICB9LFxuXG4gICAgY3Jvc3M6IGZ1bmN0aW9uKHZlY3RBLCB2ZWN0Qikge1xuICAgICAgcmV0dXJuIFt2ZWN0QVsxXSAqIHZlY3RCWzJdIC0gdmVjdEJbMV0gKiB2ZWN0QVsyXSwgdmVjdEFbMl0gKiB2ZWN0QlswXSAtIHZlY3RCWzJdICogdmVjdEFbMF0sIHZlY3RBWzBdICogdmVjdEJbMV0gLSB2ZWN0QlswXSAqIHZlY3RBWzFdXTtcbiAgICB9LFxuXG4gICAgbXVsdGlwbHk6IGZ1bmN0aW9uKHZlY3RBLCBjb25zdEIpIHtcbiAgICAgIHJldHVybiBbdmVjdEFbMF0gKiBjb25zdEIsIHZlY3RBWzFdICogY29uc3RCLCB2ZWN0QVsyXSAqIGNvbnN0Ql07XG4gICAgfSxcblxuICAgIGFkZDogZnVuY3Rpb24odmVjdEEsIHZlY3RCKSB7XG4gICAgICByZXR1cm4gW3ZlY3RBWzBdICsgdmVjdEJbMF0sIHZlY3RBWzFdICsgdmVjdEJbMV0sIHZlY3RBWzJdICsgdmVjdEJbMl1dO1xuICAgIH0sXG5cbiAgICBzdWJ0cmFjdDogZnVuY3Rpb24odmVjdEEsIHZlY3RCKSB7XG4gICAgICByZXR1cm4gW3ZlY3RBWzBdIC0gdmVjdEJbMF0sIHZlY3RBWzFdIC0gdmVjdEJbMV0sIHZlY3RBWzJdIC0gdmVjdEJbMl1dO1xuICAgIH0sXG5cbiAgICBlcXVhbDogZnVuY3Rpb24oYSwgYikge1xuICAgICAgdmFyIGVwc2lsb24gPSAwLjAwMDAwMDE7XG4gICAgICBpZiAoKGEgPT09IHVuZGVmaW5lZCkgJiYgKGIgPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoKGEgPT09IHVuZGVmaW5lZCkgfHwgKGIgPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChNYXRoLmFicyhhWzBdIC0gYlswXSkgPCBlcHNpbG9uICYmIE1hdGguYWJzKGFbMV0gLSBiWzFdKSA8IGVwc2lsb24gJiYgTWF0aC5hYnMoYVsyXSAtIGJbMl0pIDwgZXBzaWxvbik7XG4gICAgfVxuICB9O1xuXG4gIHZhciBtYXQzID0ge1xuICAgIGlkZW50aXR5OiBbMS4wLCAwLjAsIDAuMCxcbiAgICAgIDAuMCwgMS4wLCAwLjAsXG4gICAgICAwLjAsIDAuMCwgMS4wXSxcblxuICAgIG11bHRpcGx5OiBmdW5jdGlvbiAobTEsIG0yKSB7XG4gICAgICB2YXIgbTEwID0gbTFbMF0sIG0xMSA9IG0xWzFdLCBtMTIgPSBtMVsyXSwgbTEzID0gbTFbM10sIG0xNCA9IG0xWzRdLCBtMTUgPSBtMVs1XSwgbTE2ID0gbTFbNl0sIG0xNyA9IG0xWzddLCBtMTggPSBtMVs4XSxcbiAgICAgICAgbTIwID0gbTJbMF0sIG0yMSA9IG0yWzFdLCBtMjIgPSBtMlsyXSwgbTIzID0gbTJbM10sIG0yNCA9IG0yWzRdLCBtMjUgPSBtMls1XSwgbTI2ID0gbTJbNl0sIG0yNyA9IG0yWzddLCBtMjggPSBtMls4XTtcblxuICAgICAgbTJbMF0gPSBtMjAgKiBtMTAgKyBtMjMgKiBtMTEgKyBtMjYgKiBtMTI7XG4gICAgICBtMlsxXSA9IG0yMSAqIG0xMCArIG0yNCAqIG0xMSArIG0yNyAqIG0xMjtcbiAgICAgIG0yWzJdID0gbTIyICogbTEwICsgbTI1ICogbTExICsgbTI4ICogbTEyO1xuICAgICAgbTJbM10gPSBtMjAgKiBtMTMgKyBtMjMgKiBtMTQgKyBtMjYgKiBtMTU7XG4gICAgICBtMls0XSA9IG0yMSAqIG0xMyArIG0yNCAqIG0xNCArIG0yNyAqIG0xNTtcbiAgICAgIG0yWzVdID0gbTIyICogbTEzICsgbTI1ICogbTE0ICsgbTI4ICogbTE1O1xuICAgICAgbTJbNl0gPSBtMjAgKiBtMTYgKyBtMjMgKiBtMTcgKyBtMjYgKiBtMTg7XG4gICAgICBtMls3XSA9IG0yMSAqIG0xNiArIG0yNCAqIG0xNyArIG0yNyAqIG0xODtcbiAgICAgIG0yWzhdID0gbTIyICogbTE2ICsgbTI1ICogbTE3ICsgbTI4ICogbTE4O1xuICAgIH0sXG5cbiAgICB2ZWMyX211bHRpcGx5OiBmdW5jdGlvbiAobTEsIG0yKSB7XG4gICAgICB2YXIgbU91dCA9IFtdO1xuICAgICAgbU91dFswXSA9IG0yWzBdICogbTFbMF0gKyBtMlszXSAqIG0xWzFdICsgbTJbNl07XG4gICAgICBtT3V0WzFdID0gbTJbMV0gKiBtMVswXSArIG0yWzRdICogbTFbMV0gKyBtMls3XTtcbiAgICAgIHJldHVybiBtT3V0O1xuICAgIH0sXG5cbiAgICB0cmFuc3Bvc2U6IGZ1bmN0aW9uIChtKSB7XG4gICAgICByZXR1cm4gW21bMF0sIG1bM10sIG1bNl0sIG1bMV0sIG1bNF0sIG1bN10sIG1bMl0sIG1bNV0sIG1bOF1dO1xuICAgIH1cbiAgfTsgLy9tYXQzXG5cbiAgLy8gVHJhbnNmb3JtIGxpYnJhcnkgZnJvbSBDdWJpY1ZSLmpzXG4gIGZ1bmN0aW9uIFRyYW5zZm9ybShtYXQpIHtcbiAgICByZXR1cm4gdGhpcy5jbGVhclN0YWNrKG1hdCk7XG4gIH1cblxuICB2YXIgU1RBQ0tfREVQVEhfTElNSVQgPSAxNjtcblxuICBUcmFuc2Zvcm0ucHJvdG90eXBlLmNsZWFyU3RhY2sgPSBmdW5jdGlvbihpbml0X21hdCkge1xuICAgIHRoaXMubV9zdGFjayA9IFtdO1xuICAgIHRoaXMubV9jYWNoZSA9IFtdO1xuICAgIHRoaXMuY19zdGFjayA9IDA7XG4gICAgdGhpcy52YWxpZCA9IDA7XG4gICAgdGhpcy5yZXN1bHQgPSBudWxsO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBTVEFDS19ERVBUSF9MSU1JVDsgaSsrKSB7XG4gICAgICB0aGlzLm1fc3RhY2tbaV0gPSB0aGlzLmdldElkZW50aXR5KCk7XG4gICAgfVxuXG4gICAgaWYgKGluaXRfbWF0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubV9zdGFja1swXSA9IGluaXRfbWF0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldElkZW50aXR5KCk7XG4gICAgfVxuICB9OyAvL2NsZWFyU3RhY2tcblxuICBUcmFuc2Zvcm0ucHJvdG90eXBlLnNldElkZW50aXR5ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5tX3N0YWNrW3RoaXMuY19zdGFja10gPSB0aGlzLmdldElkZW50aXR5KCk7XG4gICAgaWYgKHRoaXMudmFsaWQgPT09IHRoaXMuY19zdGFjayAmJiB0aGlzLmNfc3RhY2spIHtcbiAgICAgIHRoaXMudmFsaWQtLTtcbiAgICB9XG4gIH07XG5cbiAgVHJhbnNmb3JtLnByb3RvdHlwZS5nZXRJZGVudGl0eSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBbMS4wLCAwLjAsIDAuMCxcbiAgICAgIDAuMCwgMS4wLCAwLjAsXG4gICAgICAwLjAsIDAuMCwgMS4wXTtcbiAgfTtcblxuICBUcmFuc2Zvcm0ucHJvdG90eXBlLmdldFJlc3VsdCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5jX3N0YWNrKSB7XG4gICAgICByZXR1cm4gdGhpcy5tX3N0YWNrWzBdO1xuICAgIH1cblxuICAgIHZhciBtID0gbWF0My5pZGVudGl0eTtcblxuICAgIGlmICh0aGlzLnZhbGlkID4gdGhpcy5jX3N0YWNrLTEpIHsgdGhpcy52YWxpZCA9IHRoaXMuY19zdGFjay0xOyB9XG5cbiAgICBmb3IgKHZhciBpID0gdGhpcy52YWxpZDsgaSA8IHRoaXMuY19zdGFjaysxOyBpKyspIHtcbiAgICAgIG0gPSBtYXQzLm11bHRpcGx5KHRoaXMubV9zdGFja1tpXSxtKTtcbiAgICAgIHRoaXMubV9jYWNoZVtpXSA9IG07XG4gICAgfVxuXG4gICAgdGhpcy52YWxpZCA9IHRoaXMuY19zdGFjay0xO1xuXG4gICAgdGhpcy5yZXN1bHQgPSB0aGlzLm1fY2FjaGVbdGhpcy5jX3N0YWNrXTtcblxuICAgIHJldHVybiB0aGlzLnJlc3VsdDtcbiAgfTtcblxuICBUcmFuc2Zvcm0ucHJvdG90eXBlLnB1c2hNYXRyaXggPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmNfc3RhY2srKztcbiAgICB0aGlzLm1fc3RhY2tbdGhpcy5jX3N0YWNrXSA9IHRoaXMuZ2V0SWRlbnRpdHkoKTtcbiAgfTtcblxuICBUcmFuc2Zvcm0ucHJvdG90eXBlLnBvcE1hdHJpeCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmNfc3RhY2sgPT09IDApIHsgcmV0dXJuOyB9XG4gICAgdGhpcy5jX3N0YWNrLS07XG4gIH07XG5cbiAgdmFyIHRyYW5zbGF0ZU1hdHJpeCA9IFRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0SWRlbnRpdHkoKTtcblxuICBUcmFuc2Zvcm0ucHJvdG90eXBlLnRyYW5zbGF0ZSA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB0cmFuc2xhdGVNYXRyaXhbNl0gPSB4O1xuICAgIHRyYW5zbGF0ZU1hdHJpeFs3XSA9IHk7XG5cbiAgICBtYXQzLm11bHRpcGx5KHRyYW5zbGF0ZU1hdHJpeCwgdGhpcy5tX3N0YWNrW3RoaXMuY19zdGFja10pO1xuXG4gICAgLypcbiAgICAgaWYgKHRoaXMudmFsaWQgPT09IHRoaXMuY19zdGFjayAmJiB0aGlzLmNfc3RhY2spIHtcbiAgICAgdGhpcy52YWxpZC0tO1xuICAgICB9XG4gICAgICovXG4gIH07XG5cbiAgdmFyIHNjYWxlTWF0cml4ID0gVHJhbnNmb3JtLnByb3RvdHlwZS5nZXRJZGVudGl0eSgpO1xuXG4gIFRyYW5zZm9ybS5wcm90b3R5cGUuc2NhbGUgPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgc2NhbGVNYXRyaXhbMF0gPSB4O1xuICAgIHNjYWxlTWF0cml4WzRdID0geTtcblxuICAgIG1hdDMubXVsdGlwbHkoc2NhbGVNYXRyaXgsIHRoaXMubV9zdGFja1t0aGlzLmNfc3RhY2tdKTtcblxuICAgIC8qXG4gICAgIGlmICh0aGlzLnZhbGlkID09PSB0aGlzLmNfc3RhY2sgJiYgdGhpcy5jX3N0YWNrKSB7XG4gICAgIHRoaXMudmFsaWQtLTtcbiAgICAgfVxuICAgICAqL1xuICB9O1xuXG4gIHZhciByb3RhdGVNYXRyaXggPSBUcmFuc2Zvcm0ucHJvdG90eXBlLmdldElkZW50aXR5KCk7XG5cbiAgVHJhbnNmb3JtLnByb3RvdHlwZS5yb3RhdGUgPSBmdW5jdGlvbihhbmcpIHtcbiAgICB2YXIgc0FuZywgY0FuZztcblxuICAgIHNBbmcgPSBNYXRoLnNpbigtYW5nKTtcbiAgICBjQW5nID0gTWF0aC5jb3MoLWFuZyk7XG5cbiAgICByb3RhdGVNYXRyaXhbMF0gPSBjQW5nO1xuICAgIHJvdGF0ZU1hdHJpeFszXSA9IHNBbmc7XG4gICAgcm90YXRlTWF0cml4WzFdID0gLXNBbmc7XG4gICAgcm90YXRlTWF0cml4WzRdID0gY0FuZztcblxuICAgIG1hdDMubXVsdGlwbHkocm90YXRlTWF0cml4LCB0aGlzLm1fc3RhY2tbdGhpcy5jX3N0YWNrXSk7XG5cbiAgICAvKlxuICAgICBpZiAodGhpcy52YWxpZCA9PT0gdGhpcy5jX3N0YWNrICYmIHRoaXMuY19zdGFjaykge1xuICAgICB0aGlzLnZhbGlkLS07XG4gICAgIH1cbiAgICAgKi9cbiAgfTtcblxuICB2YXIgV2ViR0wyRCA9IHRoaXMuV2ViR0wyRCA9IGZ1bmN0aW9uIFdlYkdMMkQoY2FudmFzLCBvcHRpb25zKSB7XG4gICAgdGhpcy5jYW52YXMgICAgICAgICA9IGNhbnZhcztcbiAgICB0aGlzLm9wdGlvbnMgICAgICAgID0gb3B0aW9ucyB8fCB7fTtcbiAgICB0aGlzLmdsICAgICAgICAgICAgID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZnMgICAgICAgICAgICAgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy52cyAgICAgICAgICAgICA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNoYWRlclByb2dyYW0gID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudHJhbnNmb3JtICAgICAgPSBuZXcgVHJhbnNmb3JtKCk7XG4gICAgdGhpcy5zaGFkZXJQb29sICAgICA9IFtdO1xuICAgIHRoaXMubWF4VGV4dHVyZVNpemUgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBTYXZlIGEgcmVmZXJlbmNlIHRvIHRoZSBXZWJHTDJEIGluc3RhbmNlIG9uIHRoZSBjYW52YXMgb2JqZWN0XG4gICAgY2FudmFzLmdsMmQgICAgICAgICA9IHRoaXM7XG5cbiAgICAvLyBTdG9yZSBnZXRDb250ZXh0IGZ1bmN0aW9uIGZvciBsYXRlciB1c2VcbiAgICBjYW52YXMuJGdldENvbnRleHQgID0gY2FudmFzLmdldENvbnRleHQ7XG5cbiAgICAvLyBPdmVycmlkZSBnZXRDb250ZXh0IGZ1bmN0aW9uIHdpdGggXCJ3ZWJnbC0yZFwiIGVuYWJsZWQgdmVyc2lvblxuICAgIGNhbnZhcy5nZXRDb250ZXh0ID0gKGZ1bmN0aW9uKGdsMmQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihjb250ZXh0KSB7XG4gICAgICAgIGlmICgoZ2wyZC5vcHRpb25zLmZvcmNlIHx8IGNvbnRleHQgPT09IFwid2ViZ2wtMmRcIikgJiYgIShjYW52YXMud2lkdGggPT09IDAgfHwgY2FudmFzLmhlaWdodCA9PT0gMCkpIHtcbiAgICAgICAgICBpZiAoZ2wyZC5nbCkgeyByZXR1cm4gZ2wyZC5nbDsgfVxuXG4gICAgICAgICAgdmFyIGdsID0gZ2wyZC5nbCA9IGdsMmQuY2FudmFzLiRnZXRDb250ZXh0KFwiZXhwZXJpbWVudGFsLXdlYmdsXCIpO1xuXG4gICAgICAgICAgZ2wyZC5pbml0U2hhZGVycygpO1xuICAgICAgICAgIGdsMmQuaW5pdEJ1ZmZlcnMoKTtcblxuICAgICAgICAgIC8vIEFwcGVuZCBDYW52YXMyRCBBUEkgZmVhdHVyZXMgdG8gdGhlIFdlYkdMIGNvbnRleHRcbiAgICAgICAgICBnbDJkLmluaXRDYW52YXMyREFQSSgpO1xuXG4gICAgICAgICAgZ2wudmlld3BvcnQoMCwgMCwgZ2wyZC5jYW52YXMud2lkdGgsIGdsMmQuY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgICAvLyBEaXNhYmxlcyB3cml0aW5nIHRvIGRlc3QtYWxwaGFcbiAgICAgICAgICAvLyBnbC5jb2xvck1hc2soMSwxLDEsMClcblxuICAgICAgICAgIC8vIERlcHRoIG9wdGlvbnNcbiAgICAgICAgICAvL2dsLmVuYWJsZShnbC5ERVBUSF9URVNUKTtcbiAgICAgICAgICAvL2dsLmRlcHRoRnVuYyhnbC5MRVFVQUwpO1xuXG4gICAgICAgICAgLy8gQmxlbmRpbmcgb3B0aW9uc1xuICAgICAgICAgIC8vIFNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzExNTIxMDM1L2JsZW5kaW5nLXdpdGgtaHRtbC1iYWNrZ3JvdW5kLWluLXdlYmdsXG4gICAgICAgICAgZ2wuZW5hYmxlKGdsLkJMRU5EKTtcbiAgICAgICAgICBnbC5ibGVuZEZ1bmNTZXBhcmF0ZShnbC5TUkNfQUxQSEEsIGdsLk9ORV9NSU5VU19TUkNfQUxQSEEsIGdsLk9ORSwgZ2wuT05FX01JTlVTX1NSQ19BTFBIQSk7XG5cbiAgICAgICAgICBnbDJkLm1heFRleHR1cmVTaXplID0gZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9URVhUVVJFX1NJWkUpO1xuXG4gICAgICAgICAgcmV0dXJuIGdsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBnbDJkLmNhbnZhcy4kZ2V0Q29udGV4dChjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KHRoaXMpKTtcblxuICAgIHRoaXMucG9zdEluaXQoKTtcbiAgfTtcblxuICAvLyBFbmFibGVzIFdlYkdMMkQgb24geW91ciBjYW52YXNcbiAgV2ViR0wyRC5lbmFibGUgPSBmdW5jdGlvbihjYW52YXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gY2FudmFzLmdsMmQgfHwgbmV3IFdlYkdMMkQoY2FudmFzLCBvcHRpb25zKTtcbiAgfTtcblxuXG4gIC8vIFNoYWRlciBQb29sIEJpdE1hc2tzLCBpLmUuIHNNYXNrID0gKHNoYWRlck1hc2sudGV4dHVyZStzaGFkZXJNYXNrLnN0cm9rZSlcbiAgdmFyIHNoYWRlck1hc2sgPSB7XG4gICAgdGV4dHVyZTogMSxcbiAgICBjcm9wOiAyLFxuICAgIHBhdGg6IDRcbiAgfTtcblxuXG4gIC8vIEZyYWdtZW50IHNoYWRlciBzb3VyY2VcbiAgV2ViR0wyRC5wcm90b3R5cGUuZ2V0RnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBmdW5jdGlvbiBnZXRGcmFnbWVudFNoYWRlclNvdXJjZShzTWFzaykge1xuICAgIHZhciBmc1NvdXJjZSA9IFtcbiAgICAgIFwiI2lmZGVmIEdMX0VTXCIsXG4gICAgICBcInByZWNpc2lvbiBoaWdocCBmbG9hdDtcIixcbiAgICAgIFwiI2VuZGlmXCIsXG5cbiAgICAgIFwiI2RlZmluZSBoYXNUZXh0dXJlIFwiICsgKChzTWFzayZzaGFkZXJNYXNrLnRleHR1cmUpID8gXCIxXCIgOiBcIjBcIiksXG4gICAgICBcIiNkZWZpbmUgaGFzQ3JvcCBcIiArICgoc01hc2smc2hhZGVyTWFzay5jcm9wKSA/IFwiMVwiIDogXCIwXCIpLFxuXG4gICAgICBcInZhcnlpbmcgdmVjNCB2Q29sb3I7XCIsXG5cbiAgICAgIFwiI2lmIGhhc1RleHR1cmVcIixcbiAgICAgIFwidmFyeWluZyB2ZWMyIHZUZXh0dXJlQ29vcmQ7XCIsXG4gICAgICBcInVuaWZvcm0gc2FtcGxlcjJEIHVTYW1wbGVyO1wiLFxuICAgICAgXCIjaWYgaGFzQ3JvcFwiLFxuICAgICAgXCJ1bmlmb3JtIHZlYzQgdUNyb3BTb3VyY2U7XCIsXG4gICAgICBcIiNlbmRpZlwiLFxuICAgICAgXCIjZW5kaWZcIixcblxuICAgICAgXCJ2b2lkIG1haW4odm9pZCkge1wiLFxuICAgICAgXCIjaWYgaGFzVGV4dHVyZVwiLFxuICAgICAgXCIjaWYgaGFzQ3JvcFwiLFxuICAgICAgXCJnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQodVNhbXBsZXIsIHZlYzIodlRleHR1cmVDb29yZC54ICogdUNyb3BTb3VyY2UueiwgdlRleHR1cmVDb29yZC55ICogdUNyb3BTb3VyY2UudykgKyB1Q3JvcFNvdXJjZS54eSk7XCIsXG4gICAgICBcIiNlbHNlXCIsXG4gICAgICBcImdsX0ZyYWdDb2xvciA9IHRleHR1cmUyRCh1U2FtcGxlciwgdlRleHR1cmVDb29yZCk7XCIsXG4gICAgICBcIiNlbmRpZlwiLFxuICAgICAgXCIjZWxzZVwiLFxuICAgICAgXCJnbF9GcmFnQ29sb3IgPSB2Q29sb3I7XCIsXG4gICAgICBcIiNlbmRpZlwiLFxuICAgICAgXCJ9XCJcbiAgICBdLmpvaW4oXCJcXG5cIik7XG5cbiAgICByZXR1cm4gZnNTb3VyY2U7XG4gIH07XG5cbiAgV2ViR0wyRC5wcm90b3R5cGUuZ2V0VmVydGV4U2hhZGVyU291cmNlID0gZnVuY3Rpb24gZ2V0VmVydGV4U2hhZGVyU291cmNlKHN0YWNrRGVwdGgsc01hc2spIHtcbiAgICB2YXIgdyA9IDIgLyB0aGlzLmNhbnZhcy53aWR0aCwgaCA9IC0yIC8gdGhpcy5jYW52YXMuaGVpZ2h0O1xuXG4gICAgc3RhY2tEZXB0aCA9IHN0YWNrRGVwdGggfHwgMTtcblxuICAgIHZhciB2c1NvdXJjZSA9IFtcbiAgICAgIFwiI2RlZmluZSBoYXNUZXh0dXJlIFwiICsgKChzTWFzayZzaGFkZXJNYXNrLnRleHR1cmUpID8gXCIxXCIgOiBcIjBcIiksXG4gICAgICBcImF0dHJpYnV0ZSB2ZWM0IGFWZXJ0ZXhQb3NpdGlvbjtcIixcblxuICAgICAgXCIjaWYgaGFzVGV4dHVyZVwiLFxuICAgICAgXCJ2YXJ5aW5nIHZlYzIgdlRleHR1cmVDb29yZDtcIixcbiAgICAgIFwiI2VuZGlmXCIsXG5cbiAgICAgIFwidW5pZm9ybSB2ZWM0IHVDb2xvcjtcIixcbiAgICAgIFwidW5pZm9ybSBtYXQzIHVUcmFuc2Zvcm1zW1wiICsgc3RhY2tEZXB0aCArIFwiXTtcIixcblxuICAgICAgXCJ2YXJ5aW5nIHZlYzQgdkNvbG9yO1wiLFxuXG4gICAgICBcImNvbnN0IG1hdDQgcE1hdHJpeCA9IG1hdDQoXCIgKyB3ICsgXCIsMCwwLDAsIDAsXCIgKyBoICsgXCIsMCwwLCAwLDAsMS4wLDEuMCwgLTEuMCwxLjAsMCwwKTtcIixcblxuICAgICAgXCJtYXQzIGNydW5jaFN0YWNrKHZvaWQpIHtcIixcbiAgICAgIFwibWF0MyByZXN1bHQgPSB1VHJhbnNmb3Jtc1swXTtcIixcbiAgICAgIFwiZm9yIChpbnQgaSA9IDE7IGkgPCBcIiArIHN0YWNrRGVwdGggKyBcIjsgKytpKSB7XCIsXG4gICAgICBcInJlc3VsdCA9IHVUcmFuc2Zvcm1zW2ldICogcmVzdWx0O1wiLFxuICAgICAgXCJ9XCIsXG4gICAgICBcInJldHVybiByZXN1bHQ7XCIsXG4gICAgICBcIn1cIixcblxuICAgICAgXCJ2b2lkIG1haW4odm9pZCkge1wiLFxuICAgICAgXCJ2ZWMzIHBvc2l0aW9uID0gY3J1bmNoU3RhY2soKSAqIHZlYzMoYVZlcnRleFBvc2l0aW9uLngsIGFWZXJ0ZXhQb3NpdGlvbi55LCAxLjApO1wiLFxuICAgICAgXCJnbF9Qb3NpdGlvbiA9IHBNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjApO1wiLFxuICAgICAgXCJ2Q29sb3IgPSB1Q29sb3I7XCIsXG4gICAgICBcIiNpZiBoYXNUZXh0dXJlXCIsXG4gICAgICBcInZUZXh0dXJlQ29vcmQgPSBhVmVydGV4UG9zaXRpb24uenc7XCIsXG4gICAgICBcIiNlbmRpZlwiLFxuICAgICAgXCJ9XCJcbiAgICBdLmpvaW4oXCJcXG5cIik7XG4gICAgcmV0dXJuIHZzU291cmNlO1xuICB9O1xuXG5cbiAgLy8gSW5pdGlhbGl6ZSBmcmFnbWVudCBhbmQgdmVydGV4IHNoYWRlcnNcbiAgV2ViR0wyRC5wcm90b3R5cGUuaW5pdFNoYWRlcnMgPSBmdW5jdGlvbiBpbml0U2hhZGVycyh0cmFuc2Zvcm1TdGFja0RlcHRoLHNNYXNrKSB7XG4gICAgdmFyIGdsID0gdGhpcy5nbDtcblxuICAgIHRyYW5zZm9ybVN0YWNrRGVwdGggPSB0cmFuc2Zvcm1TdGFja0RlcHRoIHx8IDE7XG4gICAgc01hc2sgPSBzTWFzayB8fCAwO1xuICAgIHZhciBzdG9yZWRTaGFkZXIgPSB0aGlzLnNoYWRlclBvb2xbdHJhbnNmb3JtU3RhY2tEZXB0aF07XG5cbiAgICBpZiAoIXN0b3JlZFNoYWRlcikgeyBzdG9yZWRTaGFkZXIgPSB0aGlzLnNoYWRlclBvb2xbdHJhbnNmb3JtU3RhY2tEZXB0aF0gPSBbXTsgfVxuICAgIHN0b3JlZFNoYWRlciA9IHN0b3JlZFNoYWRlcltzTWFza107XG5cbiAgICBpZiAoc3RvcmVkU2hhZGVyKSB7XG4gICAgICBnbC51c2VQcm9ncmFtKHN0b3JlZFNoYWRlcik7XG4gICAgICB0aGlzLnNoYWRlclByb2dyYW0gPSBzdG9yZWRTaGFkZXI7XG4gICAgICByZXR1cm4gc3RvcmVkU2hhZGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZnMgPSB0aGlzLmZzID0gZ2wuY3JlYXRlU2hhZGVyKGdsLkZSQUdNRU5UX1NIQURFUik7XG4gICAgICBnbC5zaGFkZXJTb3VyY2UodGhpcy5mcywgdGhpcy5nZXRGcmFnbWVudFNoYWRlclNvdXJjZShzTWFzaykpO1xuICAgICAgZ2wuY29tcGlsZVNoYWRlcih0aGlzLmZzKTtcblxuICAgICAgaWYgKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIodGhpcy5mcywgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XG4gICAgICAgIHRocm93IFwiZnJhZ21lbnQgc2hhZGVyIGVycm9yOiBcIitnbC5nZXRTaGFkZXJJbmZvTG9nKHRoaXMuZnMpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdnMgPSB0aGlzLnZzID0gZ2wuY3JlYXRlU2hhZGVyKGdsLlZFUlRFWF9TSEFERVIpO1xuICAgICAgZ2wuc2hhZGVyU291cmNlKHRoaXMudnMsIHRoaXMuZ2V0VmVydGV4U2hhZGVyU291cmNlKHRyYW5zZm9ybVN0YWNrRGVwdGgsc01hc2spKTtcbiAgICAgIGdsLmNvbXBpbGVTaGFkZXIodGhpcy52cyk7XG5cbiAgICAgIGlmICghZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHRoaXMudnMsIGdsLkNPTVBJTEVfU1RBVFVTKSkge1xuICAgICAgICB0aHJvdyBcInZlcnRleCBzaGFkZXIgZXJyb3I6IFwiK2dsLmdldFNoYWRlckluZm9Mb2codGhpcy52cyk7XG4gICAgICB9XG5cblxuICAgICAgdmFyIHNoYWRlclByb2dyYW0gPSB0aGlzLnNoYWRlclByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCk7XG4gICAgICBzaGFkZXJQcm9ncmFtLnN0YWNrRGVwdGggPSB0cmFuc2Zvcm1TdGFja0RlcHRoO1xuICAgICAgZ2wuYXR0YWNoU2hhZGVyKHNoYWRlclByb2dyYW0sIGZzKTtcbiAgICAgIGdsLmF0dGFjaFNoYWRlcihzaGFkZXJQcm9ncmFtLCB2cyk7XG4gICAgICBnbC5saW5rUHJvZ3JhbShzaGFkZXJQcm9ncmFtKTtcblxuICAgICAgaWYgKCFnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHNoYWRlclByb2dyYW0sIGdsLkxJTktfU1RBVFVTKSkge1xuICAgICAgICB0aHJvdyBcIkNvdWxkIG5vdCBpbml0aWFsaXNlIHNoYWRlcnMuXCI7XG4gICAgICB9XG5cbiAgICAgIGdsLnVzZVByb2dyYW0oc2hhZGVyUHJvZ3JhbSk7XG5cbiAgICAgIHNoYWRlclByb2dyYW0udmVydGV4UG9zaXRpb25BdHRyaWJ1dGUgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihzaGFkZXJQcm9ncmFtLCBcImFWZXJ0ZXhQb3NpdGlvblwiKTtcbiAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHNoYWRlclByb2dyYW0udmVydGV4UG9zaXRpb25BdHRyaWJ1dGUpO1xuXG4gICAgICBzaGFkZXJQcm9ncmFtLnVDb2xvciAgID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICd1Q29sb3InKTtcbiAgICAgIHNoYWRlclByb2dyYW0udVNhbXBsZXIgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3VTYW1wbGVyJyk7XG4gICAgICBzaGFkZXJQcm9ncmFtLnVDcm9wU291cmNlID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICd1Q3JvcFNvdXJjZScpO1xuXG4gICAgICBzaGFkZXJQcm9ncmFtLnVUcmFuc2Zvcm1zID0gW107XG4gICAgICBmb3IgKHZhciBpPTA7IGk8dHJhbnNmb3JtU3RhY2tEZXB0aDsgKytpKSB7XG4gICAgICAgIHNoYWRlclByb2dyYW0udVRyYW5zZm9ybXNbaV0gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3VUcmFuc2Zvcm1zWycgKyBpICsgJ10nKTtcbiAgICAgIH0gLy9mb3JcbiAgICAgIHRoaXMuc2hhZGVyUG9vbFt0cmFuc2Zvcm1TdGFja0RlcHRoXVtzTWFza10gPSBzaGFkZXJQcm9ncmFtO1xuICAgICAgcmV0dXJuIHNoYWRlclByb2dyYW07XG4gICAgfSAvL2lmXG4gIH07XG5cbiAgdmFyIHJlY3RWZXJ0ZXhQb3NpdGlvbkJ1ZmZlcjtcbiAgdmFyIHJlY3RWZXJ0ZXhDb2xvckJ1ZmZlcjtcblxuICB2YXIgcGF0aFZlcnRleFBvc2l0aW9uQnVmZmVyO1xuICB2YXIgcGF0aFZlcnRleENvbG9yQnVmZmVyO1xuXG4gIC8vIDJEIFZlcnRpY2VzIGFuZCBUZXh0dXJlIFVWIGNvb3Jkc1xuICB2YXIgcmVjdFZlcnRzID0gbmV3IEZsb2F0MzJBcnJheShbXG4gICAgMCwwLCAwLDAsXG4gICAgMCwxLCAwLDEsXG4gICAgMSwxLCAxLDEsXG4gICAgMSwwLCAxLDBcbiAgXSk7XG5cbiAgV2ViR0wyRC5wcm90b3R5cGUuaW5pdEJ1ZmZlcnMgPSBmdW5jdGlvbiBpbml0QnVmZmVycygpIHtcbiAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuXG4gICAgcmVjdFZlcnRleFBvc2l0aW9uQnVmZmVyICA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgIHJlY3RWZXJ0ZXhDb2xvckJ1ZmZlciAgICAgPSBnbC5jcmVhdGVCdWZmZXIoKTtcblxuICAgIHBhdGhWZXJ0ZXhQb3NpdGlvbkJ1ZmZlciAgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAgICBwYXRoVmVydGV4Q29sb3JCdWZmZXIgICAgID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG5cbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgcmVjdFZlcnRleFBvc2l0aW9uQnVmZmVyKTtcbiAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgcmVjdFZlcnRzLCBnbC5TVEFUSUNfRFJBVyk7XG4gIH07XG5cbiAgLy8gTWFpbnRhaW5zIGFuIGFycmF5IG9mIGFsbCBXZWJHTDJEIGluc3RhbmNlc1xuICBXZWJHTDJELmluc3RhbmNlcyA9IFtdO1xuXG4gIFdlYkdMMkQucHJvdG90eXBlLnBvc3RJbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgV2ViR0wyRC5pbnN0YW5jZXMucHVzaCh0aGlzKTtcbiAgfTtcblxuICAvLyBFeHRlbmRzIGdsIGNvbnRleHQgd2l0aCBDYW52YXMyRCBBUElcbiAgV2ViR0wyRC5wcm90b3R5cGUuaW5pdENhbnZhczJEQVBJID0gZnVuY3Rpb24gaW5pdENhbnZhczJEQVBJKCkge1xuICAgIHZhciBnbDJkID0gdGhpcyxcbiAgICAgIGdsICAgPSB0aGlzLmdsO1xuXG5cbiAgICAvLyBSZW5kZXJpbmcgQ2FudmFzIGZvciB0ZXh0IGZvbnRzXG4gICAgdmFyIHRleHRDYW52YXMgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIHRleHRDYW52YXMud2lkdGggID0gZ2wyZC5jYW52YXMud2lkdGg7XG4gICAgdGV4dENhbnZhcy5oZWlnaHQgPSBnbDJkLmNhbnZhcy5oZWlnaHQ7XG4gICAgdmFyIHRleHRDdHggICAgICAgPSB0ZXh0Q2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIHZhciByZVJHQkFDb2xvciA9IC9ecmdiKGEpP1xcKFxccyooLT9bXFxkXSspKCUpP1xccyosXFxzKigtP1tcXGRdKykoJSk/XFxzKixcXHMqKC0/W1xcZF0rKSglKT9cXHMqLD9cXHMqKC0/W1xcZFxcLl0rKT9cXHMqXFwpJC87XG4gICAgdmFyIHJlSFNMQUNvbG9yID0gL15oc2woYSk/XFwoXFxzKigtP1tcXGRcXC5dKylcXHMqLFxccyooLT9bXFxkXFwuXSspJVxccyosXFxzKigtP1tcXGRcXC5dKyklXFxzKiw/XFxzKigtP1tcXGRcXC5dKyk/XFxzKlxcKSQvO1xuICAgIHZhciByZUhleDZDb2xvciA9IC9eIyhbMC05QS1GYS1mXXs2fSkkLztcbiAgICB2YXIgcmVIZXgzQ29sb3IgPSAvXiMoWzAtOUEtRmEtZl0pKFswLTlBLUZhLWZdKShbMC05QS1GYS1mXSkkLztcblxuICAgIC8vIGh0dHA6Ly9heG9uZmx1eC5jb20vaGFuZHktcmdiLXRvLWhzbC1hbmQtcmdiLXRvLWhzdi1jb2xvci1tb2RlbC1jXG4gICAgZnVuY3Rpb24gSFNMQVRvUkdCQShoLCBzLCBsLCBhKSB7XG4gICAgICB2YXIgciwgZywgYiwgcCwgcTtcblxuICAgICAgLy8gQ2xhbXAgYW5kIE5vcm1hbGl6ZSB2YWx1ZXNcbiAgICAgIGggPSAoKChoICUgMzYwKSArIDM2MCkgJSAzNjApIC8gMzYwO1xuICAgICAgcyA9IHMgPiAxMDAgPyAxIDogcyAvIDEwMDtcbiAgICAgIHMgPSBzIDwgICAwID8gMCA6IHM7XG4gICAgICBsID0gbCA+IDEwMCA/IDEgOiBsIC8gMTAwO1xuICAgICAgbCA9IGwgPCAgIDAgPyAwIDogbDtcblxuICAgICAgaWYocyA9PSAwKSB7XG4gICAgICAgIHIgPSBnID0gYiA9IGw7IC8vIGFjaHJvbWF0aWNcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZ1bmN0aW9uIGh1ZTJyZ2IocCwgcSwgdCl7XG4gICAgICAgICAgaWYodCA8IDApIHQgKz0gMTtcbiAgICAgICAgICBpZih0ID4gMSkgdCAtPSAxO1xuICAgICAgICAgIGlmKHQgPCAxLzYpIHJldHVybiBwICsgKHEgLSBwKSAqIDYgKiB0O1xuICAgICAgICAgIGlmKHQgPCAxLzIpIHJldHVybiBxO1xuICAgICAgICAgIGlmKHQgPCAyLzMpIHJldHVybiBwICsgKHEgLSBwKSAqICgyLzMgLSB0KSAqIDY7XG4gICAgICAgICAgcmV0dXJuIHA7XG4gICAgICAgIH1cblxuICAgICAgICBxID0gbCA8IDAuNSA/IGwgKiAoMSArIHMpIDogbCArIHMgLSBsICogcztcbiAgICAgICAgcCA9IDIgKiBsIC0gcTtcblxuICAgICAgICByID0gaHVlMnJnYihwLCBxLCBoICsgMS8zKTtcbiAgICAgICAgZyA9IGh1ZTJyZ2IocCwgcSwgaCk7XG4gICAgICAgIGIgPSBodWUycmdiKHAsIHEsIGggLSAxLzMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gW3IsIGcsIGIsIGFdO1xuICAgIH1cblxuXG4gICAgLy8gQ29udmVydHMgcmdiKGEpIGNvbG9yIHN0cmluZyB0byBnbCBjb2xvciB2ZWN0b3JcbiAgICBmdW5jdGlvbiBjb2xvclN0cmluZ1RvVmVjNCh2YWx1ZSkge1xuICAgICAgdmFyIHJlc3VsdCA9IFtdLCBtYXRjaCwgY2hhbm5lbCwgaXNQZXJjZW50LCBoYXNBbHBoYSwgYWxwaGFDaGFubmVsLCBzYW1lVHlwZTtcblxuICAgICAgaWYgKChtYXRjaCA9IHJlUkdCQUNvbG9yLmV4ZWModmFsdWUpKSkge1xuICAgICAgICBoYXNBbHBoYSA9IG1hdGNoWzFdLCBhbHBoYUNoYW5uZWwgPSBwYXJzZUZsb2F0KG1hdGNoWzhdKTtcblxuICAgICAgICBpZiAoKGhhc0FscGhhICYmIGlzTmFOKGFscGhhQ2hhbm5lbCkpIHx8ICghaGFzQWxwaGEgJiYgIWlzTmFOKGFscGhhQ2hhbm5lbCkpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgc2FtZVR5cGUgPSBtYXRjaFszXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMjsgaSA8IDg7IGkrPTIpIHtcbiAgICAgICAgICBjaGFubmVsID0gbWF0Y2hbaV0sIGlzUGVyY2VudCA9IG1hdGNoW2krMV07XG5cbiAgICAgICAgICBpZiAoaXNQZXJjZW50ICE9PSBzYW1lVHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIENsYW1wIGFuZCBub3JtYWxpemUgdmFsdWVzXG4gICAgICAgICAgaWYgKGlzUGVyY2VudCkge1xuICAgICAgICAgICAgY2hhbm5lbCA9IGNoYW5uZWwgPiAxMDAgPyAxIDogY2hhbm5lbCAvIDEwMDtcbiAgICAgICAgICAgIGNoYW5uZWwgPSBjaGFubmVsIDwgICAwID8gMCA6IGNoYW5uZWw7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoYW5uZWwgPSBjaGFubmVsID4gMjU1ID8gMSA6IGNoYW5uZWwgLyAyNTU7XG4gICAgICAgICAgICBjaGFubmVsID0gY2hhbm5lbCA8ICAgMCA/IDAgOiBjaGFubmVsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlc3VsdC5wdXNoKGNoYW5uZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LnB1c2goaGFzQWxwaGEgPyBhbHBoYUNoYW5uZWwgOiAxLjApO1xuICAgICAgfSBlbHNlIGlmICgobWF0Y2ggPSByZUhTTEFDb2xvci5leGVjKHZhbHVlKSkpIHtcbiAgICAgICAgaGFzQWxwaGEgPSBtYXRjaFsxXSwgYWxwaGFDaGFubmVsID0gcGFyc2VGbG9hdChtYXRjaFs1XSk7XG4gICAgICAgIHJlc3VsdCA9IEhTTEFUb1JHQkEobWF0Y2hbMl0sIG1hdGNoWzNdLCBtYXRjaFs0XSwgcGFyc2VGbG9hdChoYXNBbHBoYSAmJiBhbHBoYUNoYW5uZWwgPyBhbHBoYUNoYW5uZWwgOiAxLjApKTtcbiAgICAgIH0gZWxzZSBpZiAoKG1hdGNoID0gcmVIZXg2Q29sb3IuZXhlYyh2YWx1ZSkpKSB7XG4gICAgICAgIHZhciBjb2xvckludCA9IHBhcnNlSW50KG1hdGNoWzFdLCAxNik7XG4gICAgICAgIHJlc3VsdCA9IFsoKGNvbG9ySW50ICYgMHhGRjAwMDApID4+IDE2KSAvIDI1NSwgKChjb2xvckludCAmIDB4MDBGRjAwKSA+PiA4KSAvIDI1NSwgKGNvbG9ySW50ICYgMHgwMDAwRkYpIC8gMjU1LCAxLjBdO1xuICAgICAgfSBlbHNlIGlmICgobWF0Y2ggPSByZUhleDNDb2xvci5leGVjKHZhbHVlKSkpIHtcbiAgICAgICAgdmFyIGhleFN0cmluZyA9IFwiI1wiICsgW21hdGNoWzFdLCBtYXRjaFsxXSwgbWF0Y2hbMl0sIG1hdGNoWzJdLCBtYXRjaFszXSwgbWF0Y2hbM11dLmpvaW4oXCJcIik7XG4gICAgICAgIHJlc3VsdCA9IGNvbG9yU3RyaW5nVG9WZWM0KGhleFN0cmluZyk7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlLnRvTG93ZXJDYXNlKCkgaW4gY29sb3JLZXl3b3Jkcykge1xuICAgICAgICByZXN1bHQgPSBjb2xvclN0cmluZ1RvVmVjNChjb2xvcktleXdvcmRzW3ZhbHVlLnRvTG93ZXJDYXNlKCldKTtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gXCJ0cmFuc3BhcmVudFwiKSB7XG4gICAgICAgIHJlc3VsdCA9IFswLCAwLCAwLCAwXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIENvbG9yIGtleXdvcmRzIG5vdCB5ZXQgaW1wbGVtZW50ZWQsIGllIFwib3JhbmdlXCIsIHJldHVybiBob3QgcGlua1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29sb3JWZWNUb1N0cmluZyh2ZWM0KSB7XG4gICAgICByZXR1cm4gXCJyZ2JhKFwiICsgKHZlYzRbMF0gKiAyNTUpICsgXCIsIFwiICsgKHZlYzRbMV0gKiAyNTUpICsgXCIsIFwiICsgKHZlYzRbMl0gKiAyNTUpICsgXCIsIFwiICsgcGFyc2VGbG9hdCh2ZWM0WzNdKSArIFwiKVwiO1xuICAgIH1cblxuICAgIHZhciBjb2xvcktleXdvcmRzID0ge1xuICAgICAgYWxpY2VibHVlOiAgICAgICAgICAgIFwiI2YwZjhmZlwiLFxuICAgICAgYW50aXF1ZXdoaXRlOiAgICAgICAgIFwiI2ZhZWJkN1wiLFxuICAgICAgYXF1YTogICAgICAgICAgICAgICAgIFwiIzAwZmZmZlwiLFxuICAgICAgYXF1YW1hcmluZTogICAgICAgICAgIFwiIzdmZmZkNFwiLFxuICAgICAgYXp1cmU6ICAgICAgICAgICAgICAgIFwiI2YwZmZmZlwiLFxuICAgICAgYmVpZ2U6ICAgICAgICAgICAgICAgIFwiI2Y1ZjVkY1wiLFxuICAgICAgYmlzcXVlOiAgICAgICAgICAgICAgIFwiI2ZmZTRjNFwiLFxuICAgICAgYmxhY2s6ICAgICAgICAgICAgICAgIFwiIzAwMDAwMFwiLFxuICAgICAgYmxhbmNoZWRhbG1vbmQ6ICAgICAgIFwiI2ZmZWJjZFwiLFxuICAgICAgYmx1ZTogICAgICAgICAgICAgICAgIFwiIzAwMDBmZlwiLFxuICAgICAgYmx1ZXZpb2xldDogICAgICAgICAgIFwiIzhhMmJlMlwiLFxuICAgICAgYnJvd246ICAgICAgICAgICAgICAgIFwiI2E1MmEyYVwiLFxuICAgICAgYnVybHl3b29kOiAgICAgICAgICAgIFwiI2RlYjg4N1wiLFxuICAgICAgY2FkZXRibHVlOiAgICAgICAgICAgIFwiIzVmOWVhMFwiLFxuICAgICAgY2hhcnRyZXVzZTogICAgICAgICAgIFwiIzdmZmYwMFwiLFxuICAgICAgY2hvY29sYXRlOiAgICAgICAgICAgIFwiI2QyNjkxZVwiLFxuICAgICAgY29yYWw6ICAgICAgICAgICAgICAgIFwiI2ZmN2Y1MFwiLFxuICAgICAgY29ybmZsb3dlcmJsdWU6ICAgICAgIFwiIzY0OTVlZFwiLFxuICAgICAgY29ybnNpbGs6ICAgICAgICAgICAgIFwiI2ZmZjhkY1wiLFxuICAgICAgY3JpbXNvbjogICAgICAgICAgICAgIFwiI2RjMTQzY1wiLFxuICAgICAgY3lhbjogICAgICAgICAgICAgICAgIFwiIzAwZmZmZlwiLFxuICAgICAgZGFya2JsdWU6ICAgICAgICAgICAgIFwiIzAwMDA4YlwiLFxuICAgICAgZGFya2N5YW46ICAgICAgICAgICAgIFwiIzAwOGI4YlwiLFxuICAgICAgZGFya2dvbGRlbnJvZDogICAgICAgIFwiI2I4ODYwYlwiLFxuICAgICAgZGFya2dyYXk6ICAgICAgICAgICAgIFwiI2E5YTlhOVwiLFxuICAgICAgZGFya2dyZWVuOiAgICAgICAgICAgIFwiIzAwNjQwMFwiLFxuICAgICAgZGFya2toYWtpOiAgICAgICAgICAgIFwiI2JkYjc2YlwiLFxuICAgICAgZGFya21hZ2VudGE6ICAgICAgICAgIFwiIzhiMDA4YlwiLFxuICAgICAgZGFya29saXZlZ3JlZW46ICAgICAgIFwiIzU1NmIyZlwiLFxuICAgICAgZGFya29yYW5nZTogICAgICAgICAgIFwiI2ZmOGMwMFwiLFxuICAgICAgZGFya29yY2hpZDogICAgICAgICAgIFwiIzk5MzJjY1wiLFxuICAgICAgZGFya3JlZDogICAgICAgICAgICAgIFwiIzhiMDAwMFwiLFxuICAgICAgZGFya3NhbG1vbjogICAgICAgICAgIFwiI2U5OTY3YVwiLFxuICAgICAgZGFya3NlYWdyZWVuOiAgICAgICAgIFwiIzhmYmM4ZlwiLFxuICAgICAgZGFya3NsYXRlYmx1ZTogICAgICAgIFwiIzQ4M2Q4YlwiLFxuICAgICAgZGFya3NsYXRlZ3JheTogICAgICAgIFwiIzJmNGY0ZlwiLFxuICAgICAgZGFya3R1cnF1b2lzZTogICAgICAgIFwiIzAwY2VkMVwiLFxuICAgICAgZGFya3Zpb2xldDogICAgICAgICAgIFwiIzk0MDBkM1wiLFxuICAgICAgZGVlcHBpbms6ICAgICAgICAgICAgIFwiI2ZmMTQ5M1wiLFxuICAgICAgZGVlcHNreWJsdWU6ICAgICAgICAgIFwiIzAwYmZmZlwiLFxuICAgICAgZGltZ3JheTogICAgICAgICAgICAgIFwiIzY5Njk2OVwiLFxuICAgICAgZG9kZ2VyYmx1ZTogICAgICAgICAgIFwiIzFlOTBmZlwiLFxuICAgICAgZmlyZWJyaWNrOiAgICAgICAgICAgIFwiI2IyMjIyMlwiLFxuICAgICAgZmxvcmFsd2hpdGU6ICAgICAgICAgIFwiI2ZmZmFmMFwiLFxuICAgICAgZm9yZXN0Z3JlZW46ICAgICAgICAgIFwiIzIyOGIyMlwiLFxuICAgICAgZnVjaHNpYTogICAgICAgICAgICAgIFwiI2ZmMDBmZlwiLFxuICAgICAgZ2FpbnNib3JvOiAgICAgICAgICAgIFwiI2RjZGNkY1wiLFxuICAgICAgZ2hvc3R3aGl0ZTogICAgICAgICAgIFwiI2Y4ZjhmZlwiLFxuICAgICAgZ29sZDogICAgICAgICAgICAgICAgIFwiI2ZmZDcwMFwiLFxuICAgICAgZ29sZGVucm9kOiAgICAgICAgICAgIFwiI2RhYTUyMFwiLFxuICAgICAgZ3JheTogICAgICAgICAgICAgICAgIFwiIzgwODA4MFwiLFxuICAgICAgZ3JlZW46ICAgICAgICAgICAgICAgIFwiIzAwODAwMFwiLFxuICAgICAgZ3JlZW55ZWxsb3c6ICAgICAgICAgIFwiI2FkZmYyZlwiLFxuICAgICAgZ3JleTogICAgICAgICAgICAgICAgIFwiIzgwODA4MFwiLFxuICAgICAgaG9uZXlkZXc6ICAgICAgICAgICAgIFwiI2YwZmZmMFwiLFxuICAgICAgaG90cGluazogICAgICAgICAgICAgIFwiI2ZmNjliNFwiLFxuICAgICAgaW5kaWFucmVkOiAgICAgICAgICAgIFwiI2NkNWM1Y1wiLFxuICAgICAgaW5kaWdvOiAgICAgICAgICAgICAgIFwiIzRiMDA4MlwiLFxuICAgICAgaXZvcnk6ICAgICAgICAgICAgICAgIFwiI2ZmZmZmMFwiLFxuICAgICAga2hha2k6ICAgICAgICAgICAgICAgIFwiI2YwZTY4Y1wiLFxuICAgICAgbGF2ZW5kZXI6ICAgICAgICAgICAgIFwiI2U2ZTZmYVwiLFxuICAgICAgbGF2ZW5kZXJibHVzaDogICAgICAgIFwiI2ZmZjBmNVwiLFxuICAgICAgbGF3bmdyZWVuOiAgICAgICAgICAgIFwiIzdjZmMwMFwiLFxuICAgICAgbGVtb25jaGlmZm9uOiAgICAgICAgIFwiI2ZmZmFjZFwiLFxuICAgICAgbGlnaHRibHVlOiAgICAgICAgICAgIFwiI2FkZDhlNlwiLFxuICAgICAgbGlnaHRjb3JhbDogICAgICAgICAgIFwiI2YwODA4MFwiLFxuICAgICAgbGlnaHRjeWFuOiAgICAgICAgICAgIFwiI2UwZmZmZlwiLFxuICAgICAgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6IFwiI2ZhZmFkMlwiLFxuICAgICAgbGlnaHRncmV5OiAgICAgICAgICAgIFwiI2QzZDNkM1wiLFxuICAgICAgbGlnaHRncmVlbjogICAgICAgICAgIFwiIzkwZWU5MFwiLFxuICAgICAgbGlnaHRwaW5rOiAgICAgICAgICAgIFwiI2ZmYjZjMVwiLFxuICAgICAgbGlnaHRzYWxtb246ICAgICAgICAgIFwiI2ZmYTA3YVwiLFxuICAgICAgbGlnaHRzZWFncmVlbjogICAgICAgIFwiIzIwYjJhYVwiLFxuICAgICAgbGlnaHRza3libHVlOiAgICAgICAgIFwiIzg3Y2VmYVwiLFxuICAgICAgbGlnaHRzbGF0ZWdyYXk6ICAgICAgIFwiIzc3ODg5OVwiLFxuICAgICAgbGlnaHRzdGVlbGJsdWU6ICAgICAgIFwiI2IwYzRkZVwiLFxuICAgICAgbGlnaHR5ZWxsb3c6ICAgICAgICAgIFwiI2ZmZmZlMFwiLFxuICAgICAgbGltZTogICAgICAgICAgICAgICAgIFwiIzAwZmYwMFwiLFxuICAgICAgbGltZWdyZWVuOiAgICAgICAgICAgIFwiIzMyY2QzMlwiLFxuICAgICAgbGluZW46ICAgICAgICAgICAgICAgIFwiI2ZhZjBlNlwiLFxuICAgICAgbWFnZW50YTogICAgICAgICAgICAgIFwiI2ZmMDBmZlwiLFxuICAgICAgbWFyb29uOiAgICAgICAgICAgICAgIFwiIzgwMDAwMFwiLFxuICAgICAgbWVkaXVtYXF1YW1hcmluZTogICAgIFwiIzY2Y2RhYVwiLFxuICAgICAgbWVkaXVtYmx1ZTogICAgICAgICAgIFwiIzAwMDBjZFwiLFxuICAgICAgbWVkaXVtb3JjaGlkOiAgICAgICAgIFwiI2JhNTVkM1wiLFxuICAgICAgbWVkaXVtcHVycGxlOiAgICAgICAgIFwiIzkzNzBkOFwiLFxuICAgICAgbWVkaXVtc2VhZ3JlZW46ICAgICAgIFwiIzNjYjM3MVwiLFxuICAgICAgbWVkaXVtc2xhdGVibHVlOiAgICAgIFwiIzdiNjhlZVwiLFxuICAgICAgbWVkaXVtc3ByaW5nZ3JlZW46ICAgIFwiIzAwZmE5YVwiLFxuICAgICAgbWVkaXVtdHVycXVvaXNlOiAgICAgIFwiIzQ4ZDFjY1wiLFxuICAgICAgbWVkaXVtdmlvbGV0cmVkOiAgICAgIFwiI2M3MTU4NVwiLFxuICAgICAgbWlkbmlnaHRibHVlOiAgICAgICAgIFwiIzE5MTk3MFwiLFxuICAgICAgbWludGNyZWFtOiAgICAgICAgICAgIFwiI2Y1ZmZmYVwiLFxuICAgICAgbWlzdHlyb3NlOiAgICAgICAgICAgIFwiI2ZmZTRlMVwiLFxuICAgICAgbW9jY2FzaW46ICAgICAgICAgICAgIFwiI2ZmZTRiNVwiLFxuICAgICAgbmF2YWpvd2hpdGU6ICAgICAgICAgIFwiI2ZmZGVhZFwiLFxuICAgICAgbmF2eTogICAgICAgICAgICAgICAgIFwiIzAwMDA4MFwiLFxuICAgICAgb2xkbGFjZTogICAgICAgICAgICAgIFwiI2ZkZjVlNlwiLFxuICAgICAgb2xpdmU6ICAgICAgICAgICAgICAgIFwiIzgwODAwMFwiLFxuICAgICAgb2xpdmVkcmFiOiAgICAgICAgICAgIFwiIzZiOGUyM1wiLFxuICAgICAgb3JhbmdlOiAgICAgICAgICAgICAgIFwiI2ZmYTUwMFwiLFxuICAgICAgb3JhbmdlcmVkOiAgICAgICAgICAgIFwiI2ZmNDUwMFwiLFxuICAgICAgb3JjaGlkOiAgICAgICAgICAgICAgIFwiI2RhNzBkNlwiLFxuICAgICAgcGFsZWdvbGRlbnJvZDogICAgICAgIFwiI2VlZThhYVwiLFxuICAgICAgcGFsZWdyZWVuOiAgICAgICAgICAgIFwiIzk4ZmI5OFwiLFxuICAgICAgcGFsZXR1cnF1b2lzZTogICAgICAgIFwiI2FmZWVlZVwiLFxuICAgICAgcGFsZXZpb2xldHJlZDogICAgICAgIFwiI2Q4NzA5M1wiLFxuICAgICAgcGFwYXlhd2hpcDogICAgICAgICAgIFwiI2ZmZWZkNVwiLFxuICAgICAgcGVhY2hwdWZmOiAgICAgICAgICAgIFwiI2ZmZGFiOVwiLFxuICAgICAgcGVydTogICAgICAgICAgICAgICAgIFwiI2NkODUzZlwiLFxuICAgICAgcGluazogICAgICAgICAgICAgICAgIFwiI2ZmYzBjYlwiLFxuICAgICAgcGx1bTogICAgICAgICAgICAgICAgIFwiI2RkYTBkZFwiLFxuICAgICAgcG93ZGVyYmx1ZTogICAgICAgICAgIFwiI2IwZTBlNlwiLFxuICAgICAgcHVycGxlOiAgICAgICAgICAgICAgIFwiIzgwMDA4MFwiLFxuICAgICAgcmVkOiAgICAgICAgICAgICAgICAgIFwiI2ZmMDAwMFwiLFxuICAgICAgcm9zeWJyb3duOiAgICAgICAgICAgIFwiI2JjOGY4ZlwiLFxuICAgICAgcm95YWxibHVlOiAgICAgICAgICAgIFwiIzQxNjllMVwiLFxuICAgICAgc2FkZGxlYnJvd246ICAgICAgICAgIFwiIzhiNDUxM1wiLFxuICAgICAgc2FsbW9uOiAgICAgICAgICAgICAgIFwiI2ZhODA3MlwiLFxuICAgICAgc2FuZHlicm93bjogICAgICAgICAgIFwiI2Y0YTQ2MFwiLFxuICAgICAgc2VhZ3JlZW46ICAgICAgICAgICAgIFwiIzJlOGI1N1wiLFxuICAgICAgc2Vhc2hlbGw6ICAgICAgICAgICAgIFwiI2ZmZjVlZVwiLFxuICAgICAgc2llbm5hOiAgICAgICAgICAgICAgIFwiI2EwNTIyZFwiLFxuICAgICAgc2lsdmVyOiAgICAgICAgICAgICAgIFwiI2MwYzBjMFwiLFxuICAgICAgc2t5Ymx1ZTogICAgICAgICAgICAgIFwiIzg3Y2VlYlwiLFxuICAgICAgc2xhdGVibHVlOiAgICAgICAgICAgIFwiIzZhNWFjZFwiLFxuICAgICAgc2xhdGVncmF5OiAgICAgICAgICAgIFwiIzcwODA5MFwiLFxuICAgICAgc25vdzogICAgICAgICAgICAgICAgIFwiI2ZmZmFmYVwiLFxuICAgICAgc3ByaW5nZ3JlZW46ICAgICAgICAgIFwiIzAwZmY3ZlwiLFxuICAgICAgc3RlZWxibHVlOiAgICAgICAgICAgIFwiIzQ2ODJiNFwiLFxuICAgICAgdGFuOiAgICAgICAgICAgICAgICAgIFwiI2QyYjQ4Y1wiLFxuICAgICAgdGVhbDogICAgICAgICAgICAgICAgIFwiIzAwODA4MFwiLFxuICAgICAgdGhpc3RsZTogICAgICAgICAgICAgIFwiI2Q4YmZkOFwiLFxuICAgICAgdG9tYXRvOiAgICAgICAgICAgICAgIFwiI2ZmNjM0N1wiLFxuICAgICAgdHVycXVvaXNlOiAgICAgICAgICAgIFwiIzQwZTBkMFwiLFxuICAgICAgdmlvbGV0OiAgICAgICAgICAgICAgIFwiI2VlODJlZVwiLFxuICAgICAgd2hlYXQ6ICAgICAgICAgICAgICAgIFwiI2Y1ZGViM1wiLFxuICAgICAgd2hpdGU6ICAgICAgICAgICAgICAgIFwiI2ZmZmZmZlwiLFxuICAgICAgd2hpdGVzbW9rZTogICAgICAgICAgIFwiI2Y1ZjVmNVwiLFxuICAgICAgeWVsbG93OiAgICAgICAgICAgICAgIFwiI2ZmZmYwMFwiLFxuICAgICAgeWVsbG93Z3JlZW46ICAgICAgICAgIFwiIzlhY2QzMlwiXG4gICAgfTtcblxuICAgIC8vIE1haW50YWluIGRyYXdpbmcgc3RhdGUgcGFyYW1zIGR1cmluZyBnbC5zYXZlIGFuZCBnbC5yZXN0b3JlLiBzZWUgc2F2ZURyYXdTdGF0ZSgpIGFuZCByZXN0b3JlRHJhd1N0YXRlKClcbiAgICB2YXIgZHJhd1N0YXRlID0ge30sIGRyYXdTdGF0ZVN0YWNrID0gW107XG5cbiAgICAvLyBBIGZhc3Qgc2ltcGxlIHNoYWxsb3cgY2xvbmVcbiAgICBmdW5jdGlvbiBjbG9uZU9iamVjdChvYmopIHtcbiAgICAgIHZhciB0YXJnZXQgPSB7fTtcbiAgICAgIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICB0YXJnZXRbaV0gPSBvYmpbaV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2F2ZURyYXdTdGF0ZSgpIHtcbiAgICAgIHZhciBiYWtlZERyYXdTdGF0ZSA9IHtcbiAgICAgICAgZmlsbFN0eWxlOiAgICAgICAgICAgICAgICBbZHJhd1N0YXRlLmZpbGxTdHlsZVswXSwgICBkcmF3U3RhdGUuZmlsbFN0eWxlWzFdLCAgIGRyYXdTdGF0ZS5maWxsU3R5bGVbMl0sICAgZHJhd1N0YXRlLmZpbGxTdHlsZVszXV0sXG4gICAgICAgIHN0cm9rZVN0eWxlOiAgICAgICAgICAgICAgW2RyYXdTdGF0ZS5zdHJva2VTdHlsZVswXSwgZHJhd1N0YXRlLnN0cm9rZVN0eWxlWzFdLCBkcmF3U3RhdGUuc3Ryb2tlU3R5bGVbMl0sIGRyYXdTdGF0ZS5zdHJva2VTdHlsZVszXV0sXG4gICAgICAgIGdsb2JhbEFscGhhOiAgICAgICAgICAgICAgZHJhd1N0YXRlLmdsb2JhbEFscGhhLFxuICAgICAgICBnbG9iYWxDb21wb3NpdGVPcGVyYXRpb246IGRyYXdTdGF0ZS5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24sXG4gICAgICAgIGxpbmVDYXA6ICAgICAgICAgICAgICAgICAgZHJhd1N0YXRlLmxpbmVDYXAsXG4gICAgICAgIGxpbmVKb2luOiAgICAgICAgICAgICAgICAgZHJhd1N0YXRlLmxpbmVKb2luLFxuICAgICAgICBsaW5lV2lkdGg6ICAgICAgICAgICAgICAgIGRyYXdTdGF0ZS5saW5lV2lkdGgsXG4gICAgICAgIG1pdGVyTGltaXQ6ICAgICAgICAgICAgICAgZHJhd1N0YXRlLm1pdGVyTGltaXQsXG4gICAgICAgIHNoYWRvd0NvbG9yOiAgICAgICAgICAgICAgZHJhd1N0YXRlLnNoYWRvd0NvbG9yLFxuICAgICAgICBzaGFkb3dCbHVyOiAgICAgICAgICAgICAgIGRyYXdTdGF0ZS5zaGFkb3dCbHVyLFxuICAgICAgICBzaGFkb3dPZmZzZXRYOiAgICAgICAgICAgIGRyYXdTdGF0ZS5zaGFkb3dPZmZzZXRYLFxuICAgICAgICBzaGFkb3dPZmZzZXRZOiAgICAgICAgICAgIGRyYXdTdGF0ZS5zaGFkb3dPZmZzZXRZLFxuICAgICAgICB0ZXh0QWxpZ246ICAgICAgICAgICAgICAgIGRyYXdTdGF0ZS50ZXh0QWxpZ24sXG4gICAgICAgIGZvbnQ6ICAgICAgICAgICAgICAgICAgICAgZHJhd1N0YXRlLmZvbnQsXG4gICAgICAgIHRleHRCYXNlbGluZTogICAgICAgICAgICAgZHJhd1N0YXRlLnRleHRCYXNlbGluZVxuICAgICAgfTtcblxuICAgICAgZHJhd1N0YXRlU3RhY2sucHVzaChiYWtlZERyYXdTdGF0ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzdG9yZURyYXdTdGF0ZSgpIHtcbiAgICAgIGlmIChkcmF3U3RhdGVTdGFjay5sZW5ndGgpIHtcbiAgICAgICAgZHJhd1N0YXRlID0gZHJhd1N0YXRlU3RhY2sucG9wKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gV2ViR0wgcmVxdWlyZXMgY29sb3JzIGFzIGEgdmVjdG9yIHdoaWxlIENhbnZhczJEIHNldHMgY29sb3JzIGFzIGFuIHJnYmEgc3RyaW5nXG4gICAgLy8gVGhlc2UgZ2V0dGVycyBhbmQgc2V0dGVycyBzdG9yZSB0aGUgb3JpZ2luYWwgcmdiYSBzdHJpbmcgYXMgd2VsbCBhcyBjb252ZXJ0IHRvIGEgdmVjdG9yXG4gICAgZHJhd1N0YXRlLmZpbGxTdHlsZSA9IFswLCAwLCAwLCAxXTsgLy8gZGVmYXVsdCBibGFja1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGdsLCBcImZpbGxTdHlsZVwiLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29sb3JWZWNUb1N0cmluZyhkcmF3U3RhdGUuZmlsbFN0eWxlKTsgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgZHJhd1N0YXRlLmZpbGxTdHlsZSA9IGNvbG9yU3RyaW5nVG9WZWM0KHZhbHVlKSB8fCBkcmF3U3RhdGUuZmlsbFN0eWxlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZHJhd1N0YXRlLnN0cm9rZVN0eWxlID0gWzAsIDAsIDAsIDFdOyAvLyBkZWZhdWx0IGJsYWNrXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZ2wsIFwic3Ryb2tlU3R5bGVcIiwge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbG9yVmVjVG9TdHJpbmcoZHJhd1N0YXRlLnN0cm9rZVN0eWxlKTsgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgZHJhd1N0YXRlLnN0cm9rZVN0eWxlID0gY29sb3JTdHJpbmdUb1ZlYzQodmFsdWUpIHx8IGRyYXdTdHlsZS5zdHJva2VTdHlsZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFdlYkdMIGFscmVhZHkgaGFzIGEgbGluZVdpZHRoKCkgZnVuY3Rpb24gYnV0IENhbnZhczJEIHJlcXVpcmVzIGEgbGluZVdpZHRoIHByb3BlcnR5XG4gICAgLy8gU3RvcmUgdGhlIG9yaWdpbmFsIGxpbmVXaWR0aCgpIGZ1bmN0aW9uIGZvciBsYXRlciB1c2VcbiAgICBnbC4kbGluZVdpZHRoID0gZ2wubGluZVdpZHRoO1xuICAgIGRyYXdTdGF0ZS5saW5lV2lkdGggPSAxLjA7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZ2wsIFwibGluZVdpZHRoXCIsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBkcmF3U3RhdGUubGluZVdpZHRoOyB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBnbC4kbGluZVdpZHRoKHZhbHVlKTtcbiAgICAgICAgZHJhd1N0YXRlLmxpbmVXaWR0aCA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gQ3VycmVudGx5IHVuc3VwcG9ydGVkIGF0dHJpYnV0ZXMgYW5kIHRoZWlyIGRlZmF1bHQgdmFsdWVzXG4gICAgZHJhd1N0YXRlLmxpbmVDYXAgPSBcImJ1dHRcIjtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShnbCwgXCJsaW5lQ2FwXCIsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBkcmF3U3RhdGUubGluZUNhcDsgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgZHJhd1N0YXRlLmxpbmVDYXAgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRyYXdTdGF0ZS5saW5lSm9pbiA9IFwibWl0ZXJcIjtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShnbCwgXCJsaW5lSm9pblwiLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gZHJhd1N0YXRlLmxpbmVKb2luOyB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBkcmF3U3RhdGUubGluZUpvaW4gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRyYXdTdGF0ZS5taXRlckxpbWl0ID0gMTA7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZ2wsIFwibWl0ZXJMaW1pdFwiLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gZHJhd1N0YXRlLm1pdGVyTGltaXQ7IH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGRyYXdTdGF0ZS5taXRlckxpbWl0ID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkcmF3U3RhdGUuc2hhZG93T2Zmc2V0WCA9IDA7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZ2wsIFwic2hhZG93T2Zmc2V0WFwiLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gZHJhd1N0YXRlLnNoYWRvd09mZnNldFg7IH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGRyYXdTdGF0ZS5zaGFkb3dPZmZzZXRYID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkcmF3U3RhdGUuc2hhZG93T2Zmc2V0WSA9IDA7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZ2wsIFwic2hhZG93T2Zmc2V0WVwiLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gZHJhd1N0YXRlLnNoYWRvd09mZnNldFk7IH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGRyYXdTdGF0ZS5zaGFkb3dPZmZzZXRZID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkcmF3U3RhdGUuc2hhZG93Qmx1ciA9IDA7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZ2wsIFwic2hhZG93Qmx1clwiLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gZHJhd1N0YXRlLnNoYWRvd0JsdXI7IH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGRyYXdTdGF0ZS5zaGFkb3dCbHVyID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkcmF3U3RhdGUuc2hhZG93Q29sb3IgPSBcInJnYmEoMCwgMCwgMCwgMC4wKVwiO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGdsLCBcInNoYWRvd0NvbG9yXCIsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBkcmF3U3RhdGUuc2hhZG93Q29sb3I7IH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGRyYXdTdGF0ZS5zaGFkb3dDb2xvciA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZHJhd1N0YXRlLmZvbnQgPSBcIjEwcHggc2Fucy1zZXJpZlwiO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGdsLCBcImZvbnRcIiwge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIGRyYXdTdGF0ZS5mb250OyB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICB0ZXh0Q3R4LmZvbnQgPSB2YWx1ZTtcbiAgICAgICAgZHJhd1N0YXRlLmZvbnQgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRyYXdTdGF0ZS50ZXh0QWxpZ24gPSBcInN0YXJ0XCI7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZ2wsIFwidGV4dEFsaWduXCIsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBkcmF3U3RhdGUudGV4dEFsaWduOyB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBkcmF3U3RhdGUudGV4dEFsaWduID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkcmF3U3RhdGUudGV4dEJhc2VsaW5lID0gXCJhbHBoYWJldGljXCI7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZ2wsIFwidGV4dEJhc2VsaW5lXCIsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBkcmF3U3RhdGUudGV4dEJhc2VsaW5lOyB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBkcmF3U3RhdGUudGV4dEJhc2VsaW5lID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBUaGlzIGF0dHJpYnV0ZSB3aWxsIG5lZWQgdG8gY29udHJvbCBnbG9iYWwgYWxwaGEgb2Ygb2JqZWN0cyBkcmF3bi5cbiAgICBkcmF3U3RhdGUuZ2xvYmFsQWxwaGEgPSAxLjA7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZ2wsIFwiZ2xvYmFsQWxwaGFcIiwge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIGRyYXdTdGF0ZS5nbG9iYWxBbHBoYTsgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgZHJhd1N0YXRlLmdsb2JhbEFscGhhID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBUaGlzIGF0dHJpYnV0ZSB3aWxsIG5lZWQgdG8gc2V0IHRoZSBnbC5ibGVuZEZ1bmMgbW9kZVxuICAgIGRyYXdTdGF0ZS5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcInNvdXJjZS1vdmVyXCI7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZ2wsIFwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uXCIsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBkcmF3U3RhdGUuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uOyB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBkcmF3U3RhdGUuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBOZWVkIGEgc29sdXRpb24gZm9yIGRyYXdpbmcgdGV4dCB0aGF0IGlzbnQgc3R1cGlkIHNsb3dcbiAgICBnbC5maWxsVGV4dCA9IGZ1bmN0aW9uIGZpbGxUZXh0KHRleHQsIHgsIHkpIHtcbiAgICAgIC8qXG4gICAgICAgdGV4dEN0eC5jbGVhclJlY3QoMCwgMCwgZ2wyZC5jYW52YXMud2lkdGgsIGdsMmQuY2FudmFzLmhlaWdodCk7XG4gICAgICAgdGV4dEN0eC5maWxsU3R5bGUgPSBnbC5maWxsU3R5bGU7XG4gICAgICAgdGV4dEN0eC5maWxsVGV4dCh0ZXh0LCB4LCB5KTtcblxuICAgICAgIGdsLmRyYXdJbWFnZSh0ZXh0Q2FudmFzLCAwLCAwKTtcbiAgICAgICAqL1xuICAgIH07XG5cbiAgICBnbC5zdHJva2VUZXh0ID0gZnVuY3Rpb24gc3Ryb2tlVGV4dCgpIHt9O1xuXG4gICAgZ2wubWVhc3VyZVRleHQgPSBmdW5jdGlvbiBtZWFzdXJlVGV4dCgpIHsgcmV0dXJuIDE7IH07XG5cbiAgICB2YXIgdGVtcENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHZhciB0ZW1wQ3R4ID0gdGVtcENhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgZ2wuc2F2ZSA9IGZ1bmN0aW9uIHNhdmUoKSB7XG4gICAgICBnbDJkLnRyYW5zZm9ybS5wdXNoTWF0cml4KCk7XG4gICAgICBzYXZlRHJhd1N0YXRlKCk7XG4gICAgfTtcblxuICAgIGdsLnJlc3RvcmUgPSBmdW5jdGlvbiByZXN0b3JlKCkge1xuICAgICAgZ2wyZC50cmFuc2Zvcm0ucG9wTWF0cml4KCk7XG4gICAgICByZXN0b3JlRHJhd1N0YXRlKCk7XG4gICAgfTtcblxuICAgIGdsLnRyYW5zbGF0ZSA9IGZ1bmN0aW9uIHRyYW5zbGF0ZSh4LCB5KSB7XG4gICAgICBnbDJkLnRyYW5zZm9ybS50cmFuc2xhdGUoeCwgeSk7XG4gICAgfTtcblxuICAgIGdsLnJvdGF0ZSA9IGZ1bmN0aW9uIHJvdGF0ZShhKSB7XG4gICAgICBnbDJkLnRyYW5zZm9ybS5yb3RhdGUoYSk7XG4gICAgfTtcblxuICAgIGdsLnNjYWxlID0gZnVuY3Rpb24gc2NhbGUoeCwgeSkge1xuICAgICAgZ2wyZC50cmFuc2Zvcm0uc2NhbGUoeCwgeSk7XG4gICAgfTtcblxuICAgIGdsLmNyZWF0ZUltYWdlRGF0YSA9IGZ1bmN0aW9uIGNyZWF0ZUltYWdlRGF0YSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICByZXR1cm4gdGVtcEN0eC5jcmVhdGVJbWFnZURhdGEod2lkdGgsIGhlaWdodCk7XG4gICAgfTtcblxuICAgIGdsLmdldEltYWdlRGF0YSA9IGZ1bmN0aW9uIGdldEltYWdlRGF0YSh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICB2YXIgZGF0YSA9IHRlbXBDdHguY3JlYXRlSW1hZ2VEYXRhKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgdmFyIGJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KHdpZHRoKmhlaWdodCo0KTtcbiAgICAgIGdsLnJlYWRQaXhlbHMoeCwgeSwgd2lkdGgsIGhlaWdodCwgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgYnVmZmVyKTtcbiAgICAgIHZhciB3PXdpZHRoKjQsIGg9aGVpZ2h0O1xuICAgICAgZm9yICh2YXIgaT0wLCBtYXhJPWgvMjsgaTxtYXhJOyArK2kpIHtcbiAgICAgICAgZm9yICh2YXIgaj0wLCBtYXhKPXc7IGo8bWF4SjsgKytqKSB7XG4gICAgICAgICAgdmFyIGluZGV4MSA9IGkgKiB3ICsgajtcbiAgICAgICAgICB2YXIgaW5kZXgyID0gKGgtaS0xKSAqIHcgKyBqO1xuICAgICAgICAgIGRhdGEuZGF0YVtpbmRleDFdID0gYnVmZmVyW2luZGV4Ml07XG4gICAgICAgICAgZGF0YS5kYXRhW2luZGV4Ml0gPSBidWZmZXJbaW5kZXgxXTtcbiAgICAgICAgfSAvL2ZvclxuICAgICAgfSAvL2ZvclxuXG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9O1xuXG4gICAgZ2wucHV0SW1hZ2VEYXRhID0gZnVuY3Rpb24gcHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgeCwgeSkge1xuICAgICAgZ2wuZHJhd0ltYWdlKGltYWdlRGF0YSwgeCwgeSk7XG4gICAgfTtcblxuICAgIGdsLnRyYW5zZm9ybSA9IGZ1bmN0aW9uIHRyYW5zZm9ybShtMTEsIG0xMiwgbTIxLCBtMjIsIGR4LCBkeSkge1xuICAgICAgdmFyIG0gPSBnbDJkLnRyYW5zZm9ybS5tX3N0YWNrW2dsMmQudHJhbnNmb3JtLmNfc3RhY2tdO1xuXG4gICAgICBtWzBdICo9IG0xMTtcbiAgICAgIG1bMV0gKj0gbTIxO1xuICAgICAgbVsyXSAqPSBkeDtcbiAgICAgIG1bM10gKj0gbTEyO1xuICAgICAgbVs0XSAqPSBtMjI7XG4gICAgICBtWzVdICo9IGR5O1xuICAgICAgbVs2XSA9IDA7XG4gICAgICBtWzddID0gMDtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gc2VuZFRyYW5zZm9ybVN0YWNrKHNwKSB7XG4gICAgICB2YXIgc3RhY2sgPSBnbDJkLnRyYW5zZm9ybS5tX3N0YWNrO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIG1heEkgPSBnbDJkLnRyYW5zZm9ybS5jX3N0YWNrICsgMTsgaSA8IG1heEk7ICsraSkge1xuICAgICAgICBnbC51bmlmb3JtTWF0cml4M2Z2KHNwLnVUcmFuc2Zvcm1zW2ldLCBmYWxzZSwgc3RhY2tbbWF4SS0xLWldKTtcbiAgICAgIH0gLy9mb3JcbiAgICB9XG5cbiAgICBnbC5zZXRUcmFuc2Zvcm0gPSBmdW5jdGlvbiBzZXRUcmFuc2Zvcm0obTExLCBtMTIsIG0yMSwgbTIyLCBkeCwgZHkpIHtcbiAgICAgIGdsMmQudHJhbnNmb3JtLnNldElkZW50aXR5KCk7XG4gICAgICBnbC50cmFuc2Zvcm0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgZ2wuZmlsbFJlY3QgPSBmdW5jdGlvbiBmaWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICB2YXIgdHJhbnNmb3JtID0gZ2wyZC50cmFuc2Zvcm07XG4gICAgICB2YXIgc2hhZGVyUHJvZ3JhbSA9IGdsMmQuaW5pdFNoYWRlcnModHJhbnNmb3JtLmNfc3RhY2srMiwwKTtcblxuICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHJlY3RWZXJ0ZXhQb3NpdGlvbkJ1ZmZlcik7XG4gICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHNoYWRlclByb2dyYW0udmVydGV4UG9zaXRpb25BdHRyaWJ1dGUsIDQsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XG5cbiAgICAgIHRyYW5zZm9ybS5wdXNoTWF0cml4KCk7XG5cbiAgICAgIHRyYW5zZm9ybS50cmFuc2xhdGUoeCwgeSk7XG4gICAgICB0cmFuc2Zvcm0uc2NhbGUod2lkdGgsIGhlaWdodCk7XG5cbiAgICAgIHNlbmRUcmFuc2Zvcm1TdGFjayhzaGFkZXJQcm9ncmFtKTtcblxuICAgICAgZ2wudW5pZm9ybTRmKHNoYWRlclByb2dyYW0udUNvbG9yLCBkcmF3U3RhdGUuZmlsbFN0eWxlWzBdLCBkcmF3U3RhdGUuZmlsbFN0eWxlWzFdLCBkcmF3U3RhdGUuZmlsbFN0eWxlWzJdLCBkcmF3U3RhdGUuZmlsbFN0eWxlWzNdKTtcblxuICAgICAgZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRV9GQU4sIDAsIDQpO1xuXG4gICAgICB0cmFuc2Zvcm0ucG9wTWF0cml4KCk7XG4gICAgfTtcblxuICAgIGdsLnN0cm9rZVJlY3QgPSBmdW5jdGlvbiBzdHJva2VSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgIHZhciB0cmFuc2Zvcm0gPSBnbDJkLnRyYW5zZm9ybTtcbiAgICAgIHZhciBzaGFkZXJQcm9ncmFtID0gZ2wyZC5pbml0U2hhZGVycyh0cmFuc2Zvcm0uY19zdGFjayArIDIsMCk7XG5cbiAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCByZWN0VmVydGV4UG9zaXRpb25CdWZmZXIpO1xuICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihzaGFkZXJQcm9ncmFtLnZlcnRleFBvc2l0aW9uQXR0cmlidXRlLCA0LCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xuXG4gICAgICB0cmFuc2Zvcm0ucHVzaE1hdHJpeCgpO1xuXG4gICAgICB0cmFuc2Zvcm0udHJhbnNsYXRlKHgsIHkpO1xuICAgICAgdHJhbnNmb3JtLnNjYWxlKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgICBzZW5kVHJhbnNmb3JtU3RhY2soc2hhZGVyUHJvZ3JhbSk7XG5cbiAgICAgIGdsLnVuaWZvcm00ZihzaGFkZXJQcm9ncmFtLnVDb2xvciwgZHJhd1N0YXRlLnN0cm9rZVN0eWxlWzBdLCBkcmF3U3RhdGUuc3Ryb2tlU3R5bGVbMV0sIGRyYXdTdGF0ZS5zdHJva2VTdHlsZVsyXSwgZHJhd1N0YXRlLnN0cm9rZVN0eWxlWzNdKTtcblxuICAgICAgZ2wuZHJhd0FycmF5cyhnbC5MSU5FX0xPT1AsIDAsIDQpO1xuXG4gICAgICB0cmFuc2Zvcm0ucG9wTWF0cml4KCk7XG4gICAgfTtcblxuICAgIGdsLmNsZWFyUmVjdCA9IGZ1bmN0aW9uIGNsZWFyUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7fTtcblxuICAgIHZhciBzdWJQYXRocyA9IFtdO1xuXG4gICAgZnVuY3Rpb24gU3ViUGF0aCh4LCB5KSB7XG4gICAgICB0aGlzLmNsb3NlZCA9IGZhbHNlO1xuICAgICAgdGhpcy52ZXJ0cyA9IFt4LCB5LCAwLCAwXTtcbiAgICB9XG5cbiAgICAvLyBFbXB0eSB0aGUgbGlzdCBvZiBzdWJwYXRocyBzbyB0aGF0IHRoZSBjb250ZXh0IG9uY2UgYWdhaW4gaGFzIHplcm8gc3VicGF0aHNcbiAgICBnbC5iZWdpblBhdGggPSBmdW5jdGlvbiBiZWdpblBhdGgoKSB7XG4gICAgICBzdWJQYXRocy5sZW5ndGggPSAwO1xuICAgIH07XG5cbiAgICAvLyBNYXJrIGxhc3Qgc3VicGF0aCBhcyBjbG9zZWQgYW5kIGNyZWF0ZSBhIG5ldyBzdWJwYXRoIHdpdGggdGhlIHNhbWUgc3RhcnRpbmcgcG9pbnQgYXMgdGhlIHByZXZpb3VzIHN1YnBhdGhcbiAgICBnbC5jbG9zZVBhdGggPSBmdW5jdGlvbiBjbG9zZVBhdGgoKSB7XG4gICAgICBpZiAoc3ViUGF0aHMubGVuZ3RoKSB7XG4gICAgICAgIC8vIE1hcmsgbGFzdCBzdWJwYXRoIGNsb3NlZC5cbiAgICAgICAgdmFyIHByZXZQYXRoID0gc3ViUGF0aHNbc3ViUGF0aHMubGVuZ3RoIC0xXSwgc3RhcnRYID0gcHJldlBhdGgudmVydHNbMF0sIHN0YXJ0WSA9IHByZXZQYXRoLnZlcnRzWzFdO1xuICAgICAgICBwcmV2UGF0aC5jbG9zZWQgPSB0cnVlO1xuXG4gICAgICAgIC8vIENyZWF0ZSBuZXcgc3VicGF0aCB1c2luZyB0aGUgc3RhcnRpbmcgcG9zaXRpb24gb2YgcHJldmlvdXMgc3VicGF0aFxuICAgICAgICB2YXIgbmV3UGF0aCA9IG5ldyBTdWJQYXRoKHN0YXJ0WCwgc3RhcnRZKTtcbiAgICAgICAgc3ViUGF0aHMucHVzaChuZXdQYXRoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gQ3JlYXRlIGEgbmV3IHN1YnBhdGggd2l0aCB0aGUgc3BlY2lmaWVkIHBvaW50IGFzIGl0cyBmaXJzdCAoYW5kIG9ubHkpIHBvaW50XG4gICAgZ2wubW92ZVRvID0gZnVuY3Rpb24gbW92ZVRvKHgsIHkpIHtcbiAgICAgIHN1YlBhdGhzLnB1c2gobmV3IFN1YlBhdGgoeCwgeSkpO1xuICAgIH07XG5cbiAgICBnbC5saW5lVG8gPSBmdW5jdGlvbiBsaW5lVG8oeCwgeSkge1xuICAgICAgaWYgKHN1YlBhdGhzLmxlbmd0aCkge1xuICAgICAgICBzdWJQYXRoc1tzdWJQYXRocy5sZW5ndGggLTFdLnZlcnRzLnB1c2goeCwgeSwgMCwgMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBDcmVhdGUgYSBuZXcgc3VicGF0aCBpZiBub25lIGN1cnJlbnRseSBleGlzdFxuICAgICAgICBnbC5tb3ZlVG8oeCwgeSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGdsLnF1YWRyYXRpY0N1cnZlVG8gPSBmdW5jdGlvbiBxdWFkcmF0aWNDdXJ2ZVRvKGNwMXgsIGNwMXksIHgsIHkpIHt9O1xuXG4gICAgZ2wuYmV6aWVyQ3VydmVUbyA9IGZ1bmN0aW9uIGJlemllckN1cnZlVG8oY3AxeCwgY3AxeSwgY3AyeCwgY3AyeSwgeCwgeSkge307XG5cbiAgICBnbC5hcmNUbyA9IGZ1bmN0aW9uIGFyY1RvKCkge307XG5cbiAgICAvLyBBZGRzIGEgY2xvc2VkIHJlY3Qgc3VicGF0aCBhbmQgY3JlYXRlcyBhIG5ldyBzdWJwYXRoXG4gICAgZ2wucmVjdCA9IGZ1bmN0aW9uIHJlY3QoeCwgeSwgdywgaCkge1xuICAgICAgZ2wubW92ZVRvKHgsIHkpO1xuICAgICAgZ2wubGluZVRvKHggKyB3LCB5KTtcbiAgICAgIGdsLmxpbmVUbyh4ICsgdywgeSArIGgpO1xuICAgICAgZ2wubGluZVRvKHgsIHkgKyBoKTtcbiAgICAgIGdsLmNsb3NlUGF0aCgpO1xuICAgIH07XG5cbiAgICBnbC5hcmMgPSBmdW5jdGlvbiBhcmMoeCwgeSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgYW50aWNsb2Nrd2lzZSkge307XG5cbiAgICBmdW5jdGlvbiBmaWxsU3ViUGF0aChpbmRleCkge1xuICAgICAgdmFyIHRyYW5zZm9ybSA9IGdsMmQudHJhbnNmb3JtO1xuICAgICAgdmFyIHNoYWRlclByb2dyYW0gPSBnbDJkLmluaXRTaGFkZXJzKHRyYW5zZm9ybS5jX3N0YWNrICsgMiwwKTtcblxuICAgICAgdmFyIHN1YlBhdGggPSBzdWJQYXRoc1tpbmRleF07XG4gICAgICB2YXIgdmVydHMgPSBzdWJQYXRoLnZlcnRzO1xuXG4gICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgcGF0aFZlcnRleFBvc2l0aW9uQnVmZmVyKTtcbiAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KHZlcnRzKSwgZ2wuU1RBVElDX0RSQVcpO1xuXG4gICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHNoYWRlclByb2dyYW0udmVydGV4UG9zaXRpb25BdHRyaWJ1dGUsIDQsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XG5cbiAgICAgIHRyYW5zZm9ybS5wdXNoTWF0cml4KCk7XG5cbiAgICAgIHNlbmRUcmFuc2Zvcm1TdGFjayhzaGFkZXJQcm9ncmFtKTtcblxuICAgICAgZ2wudW5pZm9ybTRmKHNoYWRlclByb2dyYW0udUNvbG9yLCBkcmF3U3RhdGUuZmlsbFN0eWxlWzBdLCBkcmF3U3RhdGUuZmlsbFN0eWxlWzFdLCBkcmF3U3RhdGUuZmlsbFN0eWxlWzJdLCBkcmF3U3RhdGUuZmlsbFN0eWxlWzNdKTtcblxuICAgICAgZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRV9GQU4sIDAsIHZlcnRzLmxlbmd0aC80KTtcblxuICAgICAgdHJhbnNmb3JtLnBvcE1hdHJpeCgpO1xuICAgIH1cblxuICAgIGdsLmZpbGwgPSBmdW5jdGlvbiBmaWxsKCkge1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHN1YlBhdGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZpbGxTdWJQYXRoKGkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBzdHJva2VTdWJQYXRoKGluZGV4KSB7XG4gICAgICB2YXIgdHJhbnNmb3JtID0gZ2wyZC50cmFuc2Zvcm07XG4gICAgICB2YXIgc2hhZGVyUHJvZ3JhbSA9IGdsMmQuaW5pdFNoYWRlcnModHJhbnNmb3JtLmNfc3RhY2sgKyAyLDApO1xuXG4gICAgICB2YXIgc3ViUGF0aCA9IHN1YlBhdGhzW2luZGV4XTtcbiAgICAgIHZhciB2ZXJ0cyA9IHN1YlBhdGgudmVydHM7XG5cbiAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBwYXRoVmVydGV4UG9zaXRpb25CdWZmZXIpO1xuICAgICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkodmVydHMpLCBnbC5TVEFUSUNfRFJBVyk7XG5cbiAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoc2hhZGVyUHJvZ3JhbS52ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZSwgNCwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcblxuICAgICAgdHJhbnNmb3JtLnB1c2hNYXRyaXgoKTtcblxuICAgICAgc2VuZFRyYW5zZm9ybVN0YWNrKHNoYWRlclByb2dyYW0pO1xuXG4gICAgICBnbC51bmlmb3JtNGYoc2hhZGVyUHJvZ3JhbS51Q29sb3IsIGRyYXdTdGF0ZS5zdHJva2VTdHlsZVswXSwgZHJhd1N0YXRlLnN0cm9rZVN0eWxlWzFdLCBkcmF3U3RhdGUuc3Ryb2tlU3R5bGVbMl0sIGRyYXdTdGF0ZS5zdHJva2VTdHlsZVszXSk7XG5cbiAgICAgIGlmIChzdWJQYXRoLmNsb3NlZCkge1xuICAgICAgICBnbC5kcmF3QXJyYXlzKGdsLkxJTkVfTE9PUCwgMCwgdmVydHMubGVuZ3RoLzQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2wuZHJhd0FycmF5cyhnbC5MSU5FX1NUUklQLCAwLCB2ZXJ0cy5sZW5ndGgvNCk7XG4gICAgICB9XG5cbiAgICAgIHRyYW5zZm9ybS5wb3BNYXRyaXgoKTtcbiAgICB9XG5cbiAgICBnbC5zdHJva2UgPSBmdW5jdGlvbiBzdHJva2UoKSB7XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgc3ViUGF0aHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc3Ryb2tlU3ViUGF0aChpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZ2wuY2xpcCA9IGZ1bmN0aW9uIGNsaXAoKSB7fTtcblxuICAgIGdsLmlzUG9pbnRJblBhdGggPSBmdW5jdGlvbiBpc1BvaW50SW5QYXRoKCkge307XG5cbiAgICBnbC5kcmF3Rm9jdXNSaW5nID0gZnVuY3Rpb24gZHJhd0ZvY3VzUmluZygpIHt9O1xuXG5cblxuICAgIHZhciBpbWFnZUNhY2hlID0gW10sIHRleHR1cmVDYWNoZSA9IFtdO1xuXG4gICAgZnVuY3Rpb24gVGV4dHVyZShpbWFnZSkge1xuICAgICAgdGhpcy5vYmogICA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcbiAgICAgIHRoaXMuaW5kZXggPSB0ZXh0dXJlQ2FjaGUucHVzaCh0aGlzKTtcblxuICAgICAgaW1hZ2VDYWNoZS5wdXNoKGltYWdlKTtcblxuICAgICAgLy8gd2UgbWF5IHdpc2ggdG8gY29uc2lkZXIgdGlsaW5nIGxhcmdlIGltYWdlcyBsaWtlIHRoaXMgaW5zdGVhZCBvZiBzY2FsaW5nIGFuZFxuICAgICAgLy8gYWRqdXN0IGFwcHJvcHJpYXRlbHkgKGZsaXAgdG8gbmV4dCB0ZXh0dXJlIHNvdXJjZSBhbmQgdGlsZSBvZmZzZXQpIHdoZW4gZHJhd2luZ1xuICAgICAgaWYgKGltYWdlLndpZHRoID4gZ2wyZC5tYXhUZXh0dXJlU2l6ZSB8fCBpbWFnZS5oZWlnaHQgPiBnbDJkLm1heFRleHR1cmVTaXplKSB7XG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuXG4gICAgICAgIGNhbnZhcy53aWR0aCAgPSAoaW1hZ2Uud2lkdGggID4gZ2wyZC5tYXhUZXh0dXJlU2l6ZSkgPyBnbDJkLm1heFRleHR1cmVTaXplIDogaW1hZ2Uud2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSAoaW1hZ2UuaGVpZ2h0ID4gZ2wyZC5tYXhUZXh0dXJlU2l6ZSkgPyBnbDJkLm1heFRleHR1cmVTaXplIDogaW1hZ2UuaGVpZ2h0O1xuXG4gICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDAsIGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQsIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgaW1hZ2UgPSBjYW52YXM7XG4gICAgICB9XG5cbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMub2JqKTtcbiAgICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuUkdCQSwgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgaW1hZ2UpO1xuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTtcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5MSU5FQVIpO1xuXG4gICAgICAvLyBFbmFibGUgTWlwIG1hcHBpbmcgb24gcG93ZXItb2YtMiB0ZXh0dXJlc1xuICAgICAgaWYgKGlzUE9UKGltYWdlLndpZHRoKSAmJiBpc1BPVChpbWFnZS5oZWlnaHQpKSB7XG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5MSU5FQVJfTUlQTUFQX0xJTkVBUik7XG4gICAgICAgIGdsLmdlbmVyYXRlTWlwbWFwKGdsLlRFWFRVUkVfMkQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLkxJTkVBUik7XG4gICAgICB9XG5cbiAgICAgIC8vIFVuYmluZCB0ZXh0dXJlXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBudWxsKTtcbiAgICB9XG5cbiAgICBnbC5kcmF3SW1hZ2UgPSBmdW5jdGlvbiBkcmF3SW1hZ2UoaW1hZ2UsIGEsIGIsIGMsIGQsIGUsIGYsIGcsIGgpIHtcbiAgICAgIHZhciB0cmFuc2Zvcm0gPSBnbDJkLnRyYW5zZm9ybTtcblxuICAgICAgdHJhbnNmb3JtLnB1c2hNYXRyaXgoKTtcblxuICAgICAgdmFyIHNNYXNrID0gc2hhZGVyTWFzay50ZXh0dXJlO1xuICAgICAgdmFyIGRvQ3JvcCA9IGZhbHNlO1xuXG4gICAgICAvL2RyYXdJbWFnZShpbWFnZSwgZHgsIGR5KVxuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgdHJhbnNmb3JtLnRyYW5zbGF0ZShhLCBiKTtcbiAgICAgICAgdHJhbnNmb3JtLnNjYWxlKGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICAvL2RyYXdJbWFnZShpbWFnZSwgZHgsIGR5LCBkdywgZGgpXG4gICAgICBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSA1KSB7XG4gICAgICAgIHRyYW5zZm9ybS50cmFuc2xhdGUoYSwgYik7XG4gICAgICAgIHRyYW5zZm9ybS5zY2FsZShjLCBkKTtcbiAgICAgIH1cblxuICAgICAgLy9kcmF3SW1hZ2UoaW1hZ2UsIHN4LCBzeSwgc3csIHNoLCBkeCwgZHksIGR3LCBkaClcbiAgICAgIGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDkpIHtcbiAgICAgICAgdHJhbnNmb3JtLnRyYW5zbGF0ZShlLCBmKTtcbiAgICAgICAgdHJhbnNmb3JtLnNjYWxlKGcsIGgpO1xuICAgICAgICBzTWFzayA9IHNNYXNrfHNoYWRlck1hc2suY3JvcDtcbiAgICAgICAgZG9Dcm9wID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNoYWRlclByb2dyYW0gPSBnbDJkLmluaXRTaGFkZXJzKHRyYW5zZm9ybS5jX3N0YWNrLCBzTWFzayk7XG5cbiAgICAgIHZhciB0ZXh0dXJlLCBjYWNoZUluZGV4ID0gaW1hZ2VDYWNoZS5pbmRleE9mKGltYWdlKTtcblxuICAgICAgaWYgKGNhY2hlSW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRleHR1cmUgPSB0ZXh0dXJlQ2FjaGVbY2FjaGVJbmRleF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZXh0dXJlID0gbmV3IFRleHR1cmUoaW1hZ2UpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZG9Dcm9wKSB7XG4gICAgICAgIGdsLnVuaWZvcm00ZihzaGFkZXJQcm9ncmFtLnVDcm9wU291cmNlLCBhL2ltYWdlLndpZHRoLCBiL2ltYWdlLmhlaWdodCwgYy9pbWFnZS53aWR0aCwgZC9pbWFnZS5oZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgcmVjdFZlcnRleFBvc2l0aW9uQnVmZmVyKTtcbiAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoc2hhZGVyUHJvZ3JhbS52ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZSwgNCwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcblxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZS5vYmopO1xuICAgICAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMCk7XG5cbiAgICAgIGdsLnVuaWZvcm0xaShzaGFkZXJQcm9ncmFtLnVTYW1wbGVyLCAwKTtcblxuICAgICAgc2VuZFRyYW5zZm9ybVN0YWNrKHNoYWRlclByb2dyYW0pO1xuICAgICAgZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRV9GQU4sIDAsIDQpO1xuXG4gICAgICB0cmFuc2Zvcm0ucG9wTWF0cml4KCk7XG4gICAgfTtcbiAgfTtcblxufShNYXRoKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==