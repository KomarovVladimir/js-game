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
        if(_keyStates__WEBPACK_IMPORTED_MODULE_0__["default"].left && _keyStates__WEBPACK_IMPORTED_MODULE_0__["default"].right) {
            this.currentTileRow = 3;
        }
        if(!_keyStates__WEBPACK_IMPORTED_MODULE_0__["default"].left && !_keyStates__WEBPACK_IMPORTED_MODULE_0__["default"].right) {
            this.currentTileRow = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvTWVkaWFIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lTWVkaWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1NjZW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9HYW1lV2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9PYmplY3RIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvUGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9rZXlTdGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0R5bmFtaWNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvRW1lbnlTaGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9CZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9XZWFwb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0J1bGxldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2ViZ2wtMmQvd2ViZ2wtMmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdD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QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDOzs7Ozs7O0FDakNBO0FBQUE7QUFBQTtBQUFBO0FBQTRDO0FBQ0E7O0FBRTVDLDBCQUEwQixzREFBYTs7QUFFeEIscUJBQXFCLHNEQUFhO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FB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OztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQ0FBc0MsRUFBRTtBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLHVCQUF1QixPQUFPO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQjs7QUFFdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUNBQXVDOztBQUV2QztBQUNBLHVCQUF1Qiw4Q0FBOEMsRUFBRTtBQUN2RTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLHlDQUF5Qzs7QUFFekM7QUFDQSx1QkFBdUIsZ0RBQWdELEVBQUU7QUFDekU7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1Qiw0QkFBNEIsRUFBRTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QiwwQkFBMEIsRUFBRTtBQUNuRDtBQUNBO0FBQ0E7QUFDQSxL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O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLFEiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lJztcclxuaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvd2ViZ2wtMmQvd2ViZ2wtMmQnO1xyXG5cclxuLy9HQU1FIElOSVQgPD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXHJcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJyk7XHJcbldlYkdMMkQuZW5hYmxlKGNhbnZhcyk7IC8vIGFkZHMgXCJ3ZWJnbC0yZFwiIGNvbnRleHQgdG8gY3ZzXHJcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbC0yZCcpO1xyXG5cclxuXHJcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZShjdHgpO1xyXG5nYW1lLnN0YXJ0KCk7ICAgICIsImltcG9ydCBNZWRpYUhhbmRsZXIgZnJvbSAnLi9NZWRpYUhhbmRsZXInO1xyXG5pbXBvcnQgR2FtZVNjZW5lIGZyb20gJy4vU2NlbmUnO1xyXG5cclxuY29uc3QgbWVkaWFIYW5kbGVyID0gbmV3IE1lZGlhSGFuZGxlcigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihjdHgpIHtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcclxuXHJcbiAgICAgICAgLy9nYW1lIHN0YXRlIChvZmYgPSAwLCBvbiA9IDEsIHBhdXNlID0gMilcclxuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IDA7XHJcblxyXG4gICAgICAgIC8vc2FtcGxlIG9mIGEgc3RhZ2UgY2xhc3NcclxuICAgICAgICB0aGlzLnN0YWdlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvL2dhbWUgaW5pdGlhbGl6YXRpb24gcHJvY2Vzc1xyXG4gICAgYXN5bmMgaW5pdCgpIHtcclxuICAgICAgICBtZWRpYUhhbmRsZXIuc2V0SW1hZ2VTb3VyY2VzKFtcclxuICAgICAgICAgICAgJy4vZGlzdC9pbWFnZXMvc2hpcC5wbmcnLFxyXG4gICAgICAgICAgICAnLi9kaXN0L2ltYWdlcy9taXNzaWxlLnBuZycsXHJcbiAgICAgICAgICAgICcuL2Rpc3QvaW1hZ2VzL2JpZ2dlcnNoaXAucG5nJyxcclxuICAgICAgICAgICAgJy4vZGlzdC9pbWFnZXMvZW5lbXkucG5nJyxcclxuICAgICAgICAgICAgJy4vZGlzdC9pbWFnZXMvYnVsbGV0LnBuZycsXHJcbiAgICAgICAgICAgICcuL2Rpc3QvaW1hZ2VzL3JvY2tldC5wbmcnLFxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICAvL3ByZWxvYWQgaW1hZ2VzXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0ltYWdlIHByZWxvYWRpbmcuJyk7XHJcbiAgICAgICAgYXdhaXQgbWVkaWFIYW5kbGVyLnByZWxvYWRBbGxJbWFnZXMoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnSW1hZ2VzIHByZWxvYWRpbmcgZG9uZS4nKTtcclxuICAgIH1cclxuICAgIC8vZ2FtZSBzdGFydFxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PXdpcD09PT09PT09PT09PT09PT09XHJcbiAgICBhc3luYyBzdGFydCgpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLmluaXQoKTtcclxuXHJcbiAgICAgICAgLy9nYW1lIG9uIHN0YXRlXHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSAxO1xyXG5cclxuICAgICAgICAvL2NyZWF0aW9uIG9mIHN0YWdlIDEgPD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBXaVAhXHJcbiAgICAgICAgdGhpcy5zdGFnZSA9IG5ldyBHYW1lU2NlbmUoe1xyXG4gICAgICAgICAgICBuYW1lOiAnQSBUZXN0IEdhbWUgU3RhZ2UnLFxyXG4gICAgICAgICAgICBjdHg6IHRoaXMuY3R4LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3RhZ2Uuc3RhcnQoKTtcclxuICAgIH0gIFxyXG59IiwiaW1wb3J0IGdhbWVNZWRpYSBmcm9tICcuL2dhbWVNZWRpYSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYUhhbmRsZXIge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICB0aGlzLmltYWdlU291cmNlcyA9IChwcm9wcyAmJiBwcm9wcy5pbWFnZVNvdXJjZXMuc2xpY2UoKSkgfHwgW107XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SW1hZ2VTb3VyY2VzKHNvdXJjZXNBcnJheSkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VTb3VyY2VzID0gc291cmNlc0FycmF5LnNsaWNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW1hZ2VTb3VyY2VzKCkge1xyXG4gICAgICAgIHJldHVybiAgdGhpcy5pbWFnZVNvdXJjZXM7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkSW1hZ2UoaW1hZ2UsIHNyYykge1xyXG4gICAgICAgIGNvbnN0IGltYWdlTmFtZSA9IHNyYy5tYXRjaCgvKFxcdyspKD86XFwuXFx3KykkLylbMV07XHJcbiAgICAgICAgZ2FtZU1lZGlhW2ltYWdlTmFtZV0gPSBpbWFnZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbWFnZShpbWFnZSkge1xyXG4gICAgICAgIHJldHVybiBnYW1lTWVkaWFbaW1hZ2VdO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHByZWxvYWRBbGxJbWFnZXMoKSB7XHJcbiAgICAgICAgZm9yKGxldCBzcmMgb2YgdGhpcy5pbWFnZVNvdXJjZXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYExvYWRpbmcgJHtzcmN9LmApO1xyXG4gICAgICAgICAgICB0aGlzLmFkZEltYWdlKGF3YWl0IHRoaXMucHJlbG9hZEltYWdlKHNyYyksIHNyYyk7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICBwcmVsb2FkSW1hZ2Uoc3JjKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEltYWdlICR7aW1nLnNyY30gbG9hZGVkLmApXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGltZyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGltZy5vbmVycm9yID0gKCkgPT4gcmVqZWN0KCk7XHJcbiAgICAgICAgICAgIGltZy5zcmMgPSBzcmM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJsZXQgZ2FtZU1lZGlhID0ge307XHJcbmV4cG9ydCBkZWZhdWx0IGdhbWVNZWRpYTsiLCJpbXBvcnQgR2FtZVdpbmRvdyBmcm9tICcuL0dhbWVXaW5kb3cnO1xyXG5pbXBvcnQgTWVkaWFIYW5kbGVyIGZyb20gJy4vTWVkaWFIYW5kbGVyJztcclxuaW1wb3J0IE9iamVjdEhhbmRsZXIgZnJvbSAnLi9PYmplY3RIYW5kbGVyJztcclxuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XHJcbmltcG9ydCBFbWVueVNoaXAgZnJvbSAnLi9FbWVueVNoaXAnO1xyXG5pbXBvcnQgQWN0aW9uIGZyb20gJy4vQWN0aW9uJztcclxuaW1wb3J0IFdlYXBvbiBmcm9tICcuL1dlYXBvbic7XHJcbmltcG9ydCBrZXlTdGF0ZXMgZnJvbSAnLi9rZXlTdGF0ZXMnO1xyXG5cclxuY29uc3QgbWVkaWFIYW5kbGVyID0gbmV3IE1lZGlhSGFuZGxlcigpO1xyXG5jb25zdCBvYmplY3RIYW5kbGVyID0gbmV3IE9iamVjdEhhbmRsZXIoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHByb3BzLm5hbWU7XHJcbiAgICAgICAgdGhpcy5nYW1lV2luZG93ID0gbmV3IEdhbWVXaW5kb3coe1xyXG4gICAgICAgICAgICBjdHg6IHByb3BzLmN0eCxcclxuICAgICAgICAgICAgd2lkdGg6IDkwMCxcclxuICAgICAgICAgICAgaGVpZ2h0OiA3MDAsXHJcbiAgICAgICAgICAgIC8vIHNjYWxlOiAyXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0SWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZnBzID0gNjA7XHJcbiAgICAgICAgdGhpcy50cHMgPSAxMjtcclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLmxhc3RUaWxlVGltZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5mcmFtZURlbGF5ID0gTWF0aC5mbG9vcigxMDAwIC8gdGhpcy5mcHMpO1xyXG4gICAgICAgIHRoaXMudGlsZURlbGF5ID0gIE1hdGguZmxvb3IoMTAwMCAvIHRoaXMudHBzKTtcclxuICAgICAgICB0aGlzLmRlZmF1bHRTY2FsZSA9IDE7XHJcbiAgICAgICAgdGhpcy5vYmplY3RzID0gb2JqZWN0SGFuZGxlci5nZXRPYmplY3RzKCk7XHJcbiAgICAgICAgdGhpcy5sYXllcnMgPSB7XHJcbiAgICAgICAgICAgIG92ZXJsYXk6IFtdLFxyXG4gICAgICAgICAgICBmcm9udDogW10sXHJcbiAgICAgICAgICAgIG1haW46IFtdLFxyXG4gICAgICAgICAgICBiYWNrOiBbXSxcclxuICAgICAgICAgICAgYmFja2Jyb3VuZDogW11cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubGF5ZXJzQXJyYXkgPSBbXTtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9ICcjMTExMTExJztcclxuXHJcbiAgICAgICAgdGhpcy5mcmFtZSA9IHRoaXMuZnJhbWUuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0lOSVRJQUxJWkFUSU9OIDw9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGFzeW5jIGluaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFNjZW5lIFwiJHsgdGhpcy5uYW1lIH1cIiBsb2FkaW5nLmApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyBvYmplY3RzLicpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuY3JlYXRlU2NlbmVPYmplY3RzKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIG9iamVjdHMgZG9uZS4nKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgU2NlbmUgXCIkeyB0aGlzLm5hbWUgfVwiIGxvYWRlZC5gKTtcclxuICAgIH1cclxuXHJcbiAgICAvL09CSkVDVCBDUkVBVElPTiA8PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjcmVhdGVTY2VuZU9iamVjdHMoKSB7XHJcbiAgICAgICAgY29uc3QgYmFzaWNXZWFwb24gPSBuZXcgV2VhcG9uKHtcclxuICAgICAgICAgICAgYnVsbGV0SW1hZ2U6IG1lZGlhSGFuZGxlci5nZXRJbWFnZSgnbWlzc2lsZScpLFxyXG4gICAgICAgICAgICB0aWxlV2lkdGg6IDMyLFxyXG4gICAgICAgICAgICB0aWxlSGVpZ2h0OiAzMixcclxuICAgICAgICAgICAgdGlsZXNBbW91bnQ6IDgsXHJcbiAgICAgICAgICAgIHNwZWVkOiAxMDAsXHJcbiAgICAgICAgICAgIGhpdGJveFdpZHRoOiAxMCxcclxuICAgICAgICAgICAgaGl0Ym94SGVpZ2h0OiAxMCxcclxuICAgICAgICAgICAgd2VhcG9uWDogNDgsXHJcbiAgICAgICAgICAgIHdlYXBvblk6IDAsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyID0gb2JqZWN0SGFuZGxlci5jcmVhdGVPYmplY3QoUGxheWVyLCB7XHJcbiAgICAgICAgICAgIGhwOiAxMDAsXHJcbiAgICAgICAgICAgIHNwZWVkOiAyMDAsXHJcbiAgICAgICAgICAgIHR1cm5TcGVlZDogNSxcclxuICAgICAgICAgICAgc2hvdGluZ1NwZWVkOiAyLFxyXG4gICAgICAgICAgICBpbWFnZTogbWVkaWFIYW5kbGVyLmdldEltYWdlKCdzaGlwJyksXHJcbiAgICAgICAgICAgIHRpbGVzQW1vdW50OiAyLFxyXG4gICAgICAgICAgICB0aWxlV2lkdGg6IDEyOCxcclxuICAgICAgICAgICAgdGlsZUhlaWdodDogMTI4LFxyXG4gICAgICAgICAgICB3ZWFwb246IGJhc2ljV2VhcG9uLFxyXG4gICAgICAgICAgICBoaXRib3hPZmZzZXRYOiAxNixcclxuICAgICAgICAgICAgaGl0Ym94T2Zmc2V0WTogMTYsXHJcbiAgICAgICAgICAgIGhpdGJveFdpZHRoOiAzMixcclxuICAgICAgICAgICAgaGl0Ym94SGVpZ2h0OiAzMixcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBsYXllci5zZXRQb3NpdGlvbih0aGlzLmdhbWVXaW5kb3cud2lkdGggLyAyIC0gdGhpcy5wbGF5ZXIudGlsZVdpZHRoIC8gMiwgdGhpcy5nYW1lV2luZG93LmhlaWdodCAvIDIgLSB0aGlzLnBsYXllci50aWxlSGVpZ2h0IC8gMik7XHJcbiAgICAgICAgdGhpcy5wdXNoVG9MYXllcih0aGlzLnBsYXllciwgJ21haW4nKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBsYXllcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy9zZXRzIGEgcmVuZGVyIGxheWVyXHJcbiAgICBwdXNoVG9MYXllcihvYmosIGxheWVyKSB7XHJcbiAgICAgICAgdGhpcy5sYXllcnNbbGF5ZXJdLnB1c2gob2JqKTtcclxuICAgICAgICB0aGlzLmdldExheWVyc0FycmF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy90cmFuc2Zvcm1zIGxheWVycyBvYmplY3QgaW50byBzaW1wbGUgYXJyYXkgdGkgc2ltcGxpZnkgcmVuZGVyaW5nXHJcbiAgICBnZXRMYXllcnNBcnJheSgpIHtcclxuICAgICAgICB0aGlzLmxheWVyc0FycmF5ID0gW107XHJcbiAgICAgICAgY29uc3QgbGF5ZXJzVmFsdWVzID0gT2JqZWN0LnZhbHVlcyh0aGlzLmxheWVycyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGxheWVyc1ZhbHVlcy5sZW5ndGggLSAxOyBpID49MDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG9iaiBvZiBsYXllcnNWYWx1ZXNbaV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGF5ZXJzQXJyYXkucHVzaChvYmopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vc3RhcnQgc2NlbmVcclxuICAgIGFzeW5jIHN0YXJ0KCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdHYW1lIHN0YXJ0ZWQuJylcclxuXHJcbiAgICAgICAgLy8gZ2FtZSBzdGFydCB0aW1lXHJcbiAgICAgICAgdGhpcy5zdGFydFNjZW5lTG9vcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0U2NlbmVMb29wKCkge1xyXG4gICAgICAgIC8vIGdhbWUgc3RhcnQgdGltZVxyXG4gICAgICAgIHRoaXMubGFzdCA9IHRoaXMubGFzdFRpbGVUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0SWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5mcmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9MT0dJQyA8PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLmtleUhhbmRsZXIoZHQpO1xyXG4gICAgICAgIGZvciAobGV0IG9iaiBvZiB0aGlzLm9iamVjdHMpIHtcclxuICAgICAgICAgICAgaWYgKG9iai51cGRhdGUpIHtcclxuICAgICAgICAgICAgICAgIG9iai51cGRhdGUoZHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL0FOSU1BVElPTiA8PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBmcmFtZSgpIHtcclxuICAgICAgICBsZXQgZHQgPSB+fihwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMubGFzdFRpbWUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChkdCA8IHRoaXMuZnJhbWVEZWxheSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmZyYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZShkdCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaFRpbGVzKHRoaXMub2JqZWN0cyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmZyYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaFRpbGVzKG9iamVjdHMpIHtcclxuICAgICAgICBsZXQgZHQgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMubGFzdFRpbGVUaW1lO1xyXG4gICAgICAgIGlmIChkdCA+IHRoaXMudGlsZURlbGF5KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG9iaiBvZiBvYmplY3RzKSB7XHJcbiAgICAgICAgICAgICAgICBvYmoubmV4dFRpbGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxhc3RUaWxlVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL1JFTkRFUiA8PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5maWxsRmllbGQoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgb2JqIG9mIHRoaXMub2JqZWN0cykge1xyXG4gICAgICAgICAgICBvYmouZHJhdyh0aGlzLmdhbWVXaW5kb3cuY3R4KTtcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG5cclxuICAgIGZpbGxGaWVsZCgpIHtcclxuICAgICAgICB0aGlzLmdhbWVXaW5kb3cuY3R4LmZpbGxTdHlsZSA9IHRoaXMuYmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgIHRoaXMuZ2FtZVdpbmRvdy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5nYW1lV2luZG93LndpZHRoLCB0aGlzLmdhbWVXaW5kb3cuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBrZXlIYW5kbGVyKGR0KSB7XHJcbiAgICAgICAgaWYgKGtleVN0YXRlcy5zcGFjZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zaG90KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiAoa2V5U3RhdGVzLnVwKSB7XHJcbiAgICAgICAgLy8gICAgIGlmIChrZXlTdGF0ZXMucmlnaHQpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMucGxheWVyLm1vdmUoNDUsIGR0KTtcclxuICAgICAgICAvLyAgICAgfSBlbHNlIGlmIChrZXlTdGF0ZXMubGVmdCl7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnBsYXllci5tb3ZlKDEzNSwgZHQpO1xyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZSg5MCwgZHQpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSBlbHNlIGlmIChrZXlTdGF0ZXMuZG93bikge1xyXG4gICAgICAgIC8vICAgICBpZiAoa2V5U3RhdGVzLnJpZ2h0KSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnBsYXllci5tb3ZlKDMxNSwgZHQpO1xyXG4gICAgICAgIC8vICAgICB9IGVsc2UgaWYgKGtleVN0YXRlcy5sZWZ0KXtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMucGxheWVyLm1vdmUoMjI1LCBkdCk7XHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnBsYXllci5tb3ZlKDI3MCwgZHQpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSBlbHNlIGlmIChrZXlTdGF0ZXMubGVmdCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnBsYXllci5tb3ZlKDE4MCwgZHQpO1xyXG4gICAgICAgIC8vIH0gZWxzZSBpZiAoa2V5U3RhdGVzLnJpZ2h0KXtcclxuICAgICAgICAvLyAgICAgdGhpcy5wbGF5ZXIubW92ZSgwLCBkdCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChrZXlTdGF0ZXMudXApIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZUZvcndhcmQoZHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa2V5U3RhdGVzLmxlZnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIudHVybignbGVmdCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa2V5U3RhdGVzLnJpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnR1cm4oJ3JpZ2h0Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBsYXllci5jaGVja0JvcmRlcnModGhpcy5nYW1lV2luZG93KTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVXaW5kb3cge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICB0aGlzLmN0eCA9IHByb3BzLmN0eDtcclxuICAgICAgICB0aGlzLndpZHRoID0gcHJvcHMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBwcm9wcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy50b3AgPSAwO1xyXG4gICAgICAgIHRoaXMucmlnaHQgPSBwcm9wcy53aWR0aDtcclxuICAgICAgICB0aGlzLmJvdHRvbSA9IHByb3BzLmhlaWdodDtcclxuICAgICAgICB0aGlzLmxlZnQgPSAwO1xyXG4gICAgICAgIHRoaXMuc2NhbGUgPSBwcm9wcy5zY2FsZSB8fCAxO1xyXG5cclxuICAgICAgICBpZiAocHJvcHMuc2NhbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2FsZUNvbnRleHQodGhpcy5zY2FsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNjYWxlQ29udGV4dChzY2FsZSkge1xyXG4gICAgICAgIHRoaXMuY3R4LnNjYWxlKHNjYWxlLCBzY2FsZSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgZ2FtZU9iamVjdHMgZnJvbSAnLi9nYW1lT2JqZWN0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYmplY3RIYW5kbGVyIHtcclxuICAgIFxyXG4gICAgY3JlYXRlT2JqZWN0KENsYXNzLCBwcm9wcykge1xyXG4gICAgICAgIGxldCBvYmogPSBuZXcgQ2xhc3MocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuYWRkT2JqZWN0KG9iaik7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuXHJcbiAgICBhZGRPYmplY3Qob2JqKSB7XHJcbiAgICAgICAgZ2FtZU9iamVjdHMucHVzaChvYmopO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE9iamVjdChuKSB7XHJcbiAgICAgICAgcmV0dXJuIGdhbWVPYmplY3RzW25dO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE9iamVjdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGdhbWVPYmplY3RzO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZU9iamVjdChvYmopIHtcclxuICAgICAgICBnYW1lT2JqZWN0cy5zcGxpY2UoZ2FtZU9iamVjdHMuaW5kZXhPZihvYmopLCAxKTtcclxuICAgIH1cclxufSIsImxldCBvYmplY3RzID0gW107XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvYmplY3RzOyIsImltcG9ydCBrZXlTdGF0ZXMgZnJvbSAnLi9rZXlTdGF0ZXMnO1xyXG5pbXBvcnQgU2hpcCBmcm9tICcuL1NoaXAnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgU2hpcCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0JvcmRlcnMocmVjdGFuZ2xlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb25ZIDwgcmVjdGFuZ2xlLnRvcCkge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uWSA9IHJlY3RhbmdsZS50b3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uWSArIHRoaXMudGlsZUhlaWdodCA+IHJlY3RhbmdsZS5ib3R0b20pIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvblkgPSByZWN0YW5nbGUuYm90dG9tIC0gdGhpcy50aWxlSGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvblggPCByZWN0YW5nbGUubGVmdCkge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uWCA9IHJlY3RhbmdsZS5sZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvblggKyB0aGlzLnRpbGVXaWR0aCA+IHJlY3RhbmdsZS5yaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uWCA9IHJlY3RhbmdsZS5yaWdodCAtIHRoaXMudGlsZVdpZHRoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3ZlRm9yd2FyZChhbmdsZSwgZHQpIHtcclxuICAgICAgICBzdXBlci5tb3ZlRm9yd2FyZChhbmdsZSwgZHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHR1cm4oZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIudHVybihkaXJlY3Rpb24pO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlICdyaWdodCc6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbGVSb3cgPSAyO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAnbGVmdCc6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbGVSb3cgPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYoa2V5U3RhdGVzLmxlZnQgJiYga2V5U3RhdGVzLnJpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbGVSb3cgPSAzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZigha2V5U3RhdGVzLmxlZnQgJiYgIWtleVN0YXRlcy5yaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUaWxlUm93ID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJsZXQga2V5U3RhdGVzID0geyBcclxuICAgIHVwOiBmYWxzZSxcclxuICAgIHJpZ2h0OiBmYWxzZSxcclxuICAgIGRvd246IGZhbHNlLFxyXG4gICAgbGVmdDogZmFsc2UsXHJcbiAgICBzcGFjZTogZmFsc2VcclxufTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcclxuICAgIGlmIChlLmtleUNvZGUgPT09IDg3IHx8IGUua2V5Q29kZSA9PT0gMzgpIHtcclxuICAgICAgICBrZXlTdGF0ZXMudXAgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gNjUgfHwgZS5rZXlDb2RlID09PSAzNykge1xyXG4gICAgICAgIGtleVN0YXRlcy5sZWZ0ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChlLmtleUNvZGUgPT09IDgzIHx8IGUua2V5Q29kZSA9PT0gNDApIHtcclxuICAgICAgICBrZXlTdGF0ZXMuZG93biA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSA2OCB8fCBlLmtleUNvZGUgPT09IDM5KSB7XHJcbiAgICAgICAga2V5U3RhdGVzLnJpZ2h0ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChlLmtleUNvZGUgPT09IDMyKSB7XHJcbiAgICAgICAga2V5U3RhdGVzLnNwYWNlID0gdHJ1ZTtcclxuICAgIH1cclxufSwgdHJ1ZSk7XHJcbiAgICBcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcclxuICAgIGlmIChlLmtleUNvZGUgPT09IDg3IHx8IGUua2V5Q29kZSA9PT0gMzgpIHtcclxuICAgICAgICBrZXlTdGF0ZXMudXAgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChlLmtleUNvZGUgPT09IDY1IHx8IGUua2V5Q29kZSA9PT0gMzcpIHtcclxuICAgICAgICBrZXlTdGF0ZXMubGVmdCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gODMgfHwgZS5rZXlDb2RlID09PSA0MCkge1xyXG4gICAgICAgIGtleVN0YXRlcy5kb3duID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSA2OCB8fCBlLmtleUNvZGUgPT09IDM5KSB7XHJcbiAgICAgICAga2V5U3RhdGVzLnJpZ2h0ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSAzMikge1xyXG4gICAgICAgIGtleVN0YXRlcy5zcGFjZSA9IGZhbHNlO1xyXG4gICAgfVxyXG59LCB0cnVlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGtleVN0YXRlczsiLCJpbXBvcnQgRHluYW1pY09iamVjdCBmcm9tICcuL0R5bmFtaWNPYmplY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCBleHRlbmRzIER5bmFtaWNPYmplY3Qge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5ocCA9IHByb3BzLmhwIHx8IDEwMDtcclxuICAgICAgICB0aGlzLnNob3RpbmdTcGVlZCA9IHByb3BzLnNob3RpbmdTcGVlZCB8fCAxO1xyXG4gICAgICAgIHRoaXMubGFzdFNob3QgPSBudWxsO1xyXG4gICAgICAgIHRoaXMud2VhcG9uID0gcHJvcHMud2VhcG9uIHx8IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZShhbmdsZSwgZHQpIHtcclxuICAgICAgICBzdXBlci5tb3ZlKGFuZ2xlLCBkdCk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZUZvcndhcmQoZHQpIHtcclxuICAgICAgICB0aGlzLm1vdmUodGhpcy5hbmdsZSwgZHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3QoKSB7ICAgICAgICAgICAgXHJcbiAgICAgICAgaWYgKCF0aGlzLmxhc3RTaG90KSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFNob3QgPSBwZXJmb3JtYW5jZS5ub3coKTsgXHJcbiAgICAgICAgICAgIHRoaXMud2VhcG9uLnNob3QodGhpcy5wb3NpdGlvblgsIHRoaXMucG9zaXRpb25ZLCB0aGlzLmFuZ2xlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGR0ID0gcGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLmxhc3RTaG90O1xyXG4gICAgICAgIGlmIChkdCA+PSAxMDAwIC8gdGhpcy5zaG90aW5nU3BlZWQpIHtcclxuICAgICAgICAgICAgdGhpcy53ZWFwb24uc2hvdCh0aGlzLnBvc2l0aW9uWCwgdGhpcy5wb3NpdGlvblksIHRoaXMuYW5nbGUpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RTaG90ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxufSIsImltcG9ydCBPYmplY3QgZnJvbSAnLi9PYmplY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHluYW1pY09iamVjdCBleHRlbmRzIE9iamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnNwZWVkID0gcHJvcHMuc3BlZWQgfHwgMDtcclxuICAgICAgICB0aGlzLnR1cm5TcGVlZCA9IHByb3BzLnR1cm5TcGVlZCB8fCAwO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoYW5nbGUsIGR0KSB7XHJcbiAgICAgICAgbGV0IG9mZnNldCA9IHRoaXMuc3BlZWQgKiBkdCAvIDEwMDA7XHJcbiAgICAgICAgY29uc3QgcmFkQW5nbGUgPSBhbmdsZSAqIE1hdGguUEkgLyAxODA7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblggKz0gTWF0aC5yb3VuZChNYXRoLmNvcyhyYWRBbmdsZSkgKiBvZmZzZXQpO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25ZIC09IE1hdGgucm91bmQoTWF0aC5zaW4ocmFkQW5nbGUpICogb2Zmc2V0KTtcclxuICAgICAgICBpZiAodGhpcy5oYXNIaXRib3gpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVIaXRib3hQb3NpdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0dXJuKGRpcmVjdGlvbikge1xyXG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0Jzoge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmdsZSAtPSB0aGlzLnR1cm5TcGVlZDtcclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5hbmdsZSA8PSAwICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5nbGUgPSAzNjAgLSB0aGlzLmFuZ2xlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yYWRBbmdsZSA9IHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAnbGVmdCc6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5nbGUgKz0gdGhpcy50dXJuU3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuYW5nbGUgPj0gMzYwICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLmFuZ2xlIC0gMzYwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yYWRBbmdsZSA9IHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3BlZWQoc3BlZWQpIHtcclxuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSGl0Ym94UG9zaXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5oaXRib3hQb3NpdGlvblggPSB0aGlzLnBvc2l0aW9uWCArIHRoaXMuaGl0Ym94T2Zmc2V0WDtcclxuICAgICAgICB0aGlzLmhpdGJveFBvc2l0aW9uWSA9IHRoaXMucG9zaXRpb25ZICsgdGhpcy5oaXRib3hPZmZzZXRZO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gcHJvcHMubmFtZTtcclxuICAgICAgICB0aGlzLmdyb3VwID0gcHJvcHMuZ3JvdXAgfHwgbnVsbDtcclxuICAgICAgICB0aGlzLmltYWdlID0gcHJvcHMuaW1hZ2UgfHwgbnVsbDtcclxuICAgICAgICB0aGlzLnRpbGVzQW1vdW50ID0gcHJvcHMudGlsZXNBbW91bnQgfHwgMDtcclxuICAgICAgICB0aGlzLnRpbGVXaWR0aCA9IHByb3BzLnRpbGVXaWR0aCB8fCAwO1xyXG4gICAgICAgIHRoaXMudGlsZUhlaWdodCA9IHByb3BzLnRpbGVIZWlnaHQgfHwgMDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaWxlUm93ID0gcHJvcHMuY3VycmVudFRpbGVSb3cgfHwgMDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaWxlID0gcHJvcHMuY3VycmVudFRpbGUgfHwgMDtcclxuICAgICAgICB0aGlzLmFuZ2xlID0gcHJvcHMuYW5nbGUgfHwgOTA7XHJcbiAgICAgICAgdGhpcy5yYWRBbmdsZSA9IHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25YID0gcHJvcHMucG9zaXRpb25YIHx8IDA7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblkgPSBwcm9wcy5wb3NpdGlvblkgfHwgMDtcclxuICAgICAgICBpZiAocHJvcHMuaGl0Ym94T2Zmc2V0WCB8fCAgcHJvcHMuaGl0Ym94T2Zmc2V0WSB8fCBwcm9wcy5oaXRib3hIZWlnaHQgfHwgcHJvcHMuaGl0Ym94V2lkdGgpIHtcclxuICAgICAgICAgICAgdGhpcy5oaXRib3hPZmZzZXRYID0gcHJvcHMuaGl0Ym94T2Zmc2V0WCB8fCAwO1xyXG4gICAgICAgICAgICB0aGlzLmhpdGJveE9mZnNldFkgPSBwcm9wcy5oaXRib3hPZmZzZXRZIHx8IDA7XHJcbiAgICAgICAgICAgIHRoaXMuaGl0Ym94SGVpZ2h0ID0gcHJvcHMuaGl0Ym94SGVpZ2h0IHx8IDA7XHJcbiAgICAgICAgICAgIHRoaXMuaGl0Ym94V2lkdGggPSBwcm9wcy5oaXRib3hXaWR0aCB8fCAwO1xyXG4gICAgICAgICAgICB0aGlzLmhpdGJveFBvc2l0aW9uWCA9IHRoaXMucG9zaXRpb25YICsgdGhpcy5oaXRib3hPZmZzZXRYO1xyXG4gICAgICAgICAgICB0aGlzLmhpdGJveFBvc2l0aW9uWSA9IHRoaXMucG9zaXRpb25ZICsgdGhpcy5oaXRib3hPZmZzZXRZO1xyXG4gICAgICAgICAgICB0aGlzLmhhc0hpdGJveCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFBvc2l0aW9uKHgsIHkpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uWCA9IHg7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblkgPSB5O1xyXG4gICAgfVxyXG5cclxuICAgIG5leHRUaWxlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaWxlIDwgKHRoaXMudGlsZXNBbW91bnQgLSAxKSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUaWxlKys7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGlsZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEltYWdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoY3R4KSB7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMucG9zaXRpb25YICArIHRoaXMudGlsZVdpZHRoIC8gMiwgdGhpcy5wb3NpdGlvblkgKyB0aGlzLnRpbGVIZWlnaHQgLyAyKTtcclxuICAgICAgICBjdHgucm90YXRlKC0odGhpcy5hbmdsZSAtIDkwKSAqIE1hdGguUEkgLyAxODApO1xyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy5jdXJyZW50VGlsZSAqIHRoaXMudGlsZVdpZHRoLCAgdGhpcy5jdXJyZW50VGlsZVJvdyAqIHRoaXMudGlsZUhlaWdodCwgdGhpcy50aWxlV2lkdGgsIHRoaXMudGlsZUhlaWdodCwgLXRoaXMudGlsZVdpZHRoIC8gMiwgLXRoaXMudGlsZUhlaWdodCAvIDIsIHRoaXMudGlsZVdpZHRoLCB0aGlzLnRpbGVIZWlnaHQpO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgU2hpcCBmcm9tICcuL1NoaXAnO1xyXG5pbXBvcnQgQmVoYXZpb3IgZnJvbSAnLi9CZWhhdmlvcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWVueVNoaXAgZXh0ZW5kcyBTaGlwIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnBhdXNlID0gdGhpcy5wYXVzZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmJlaGF2aW9yID0gbmV3IEJlaGF2aW9yKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vRU5FTVkgU0hJUCBMSUdJQyBBTkQgQUNUSU9OU1xyXG4gICAgcGF1c2UoKSB7fVxyXG4gXHJcbiAgICAvL1NFVCBCRUhBVklPUlxyXG4gICAgc2V0QmVoYXZpb3IoYWN0aW9ucykge1xyXG4gICAgICAgIHRoaXMuYmVoYXZpb3Iuc2V0QWN0aW9ucyhhY3Rpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBkb0N1cnJlbnRBY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5iZWhhdmlvci5kb0N1cnJlbnRBY3Rpb24oKTtcclxuICAgIH1cclxufSIsIi8vQkVIQVZJT1VSIENMQVNTLiBIQU5ETEVTIEFDVElPTidTIEVYRUNVVElPTlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCZWhhdmlvciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIC8vdGhpcyBpcyBhbiBhcnJheSBvZiBlbmVteSBhY3Rpb25zIGxpa2UgbW92ZSwgdHVybiwgc3RvcCBldGMuIFxyXG4gICAgICAgIC8vIHByb3BzLmFjdGlvbnMgPyB0aGlzLmFjdGlvbnMgPSBwcm9wcy5hY3Rpb25zLnNsaWNlKCkgOiBbXTtcclxuICAgICAgICBpZiAocHJvcHMgJiYgcHJvcHMuYWN0aW9ucykge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGlvbnMgPSBwcm9wcy5hY3Rpb25zO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aW9ucyA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50QWN0aW9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLmFjdGlvblN0YXJ0VGltZSA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aW9uU3RhcnRWYWx1ZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLy9TRVRUSU5HIEFDVElPTlNcclxuICAgIHNldEFjdGlvbnMoYWN0aW9ucykge1xyXG4gICAgICAgIHRoaXMuYWN0aW9ucyA9IGFjdGlvbnMuc2xpY2UoKTtcclxuICAgICAgICB0aGlzLm5leHRBY3Rpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRBY3Rpb24oYWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25zLnB1c2goYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvL05FWFQgQUNUSU9OU1xyXG4gICAgbmV4dEFjdGlvbigpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRBY3Rpb24gPSB0aGlzLmFjdGlvbnMuc2hpZnQoKTtcclxuICAgICAgICB0aGlzLmFjdGlvblN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuZG9DdXJyZW50QWN0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9DdXJyZW50QWN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRBY3Rpb24uZHVyYXRpb24pIHtcclxuICAgICAgICAgICAgbGV0IGR0ID0gcGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLmFjdGlvblN0YXJ0VGltZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkdCA+PSB0aGlzLmN1cnJlbnRBY3Rpb24uZHVyYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dEFjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25TdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QWN0aW9uLm1ldGhvZCh0aGlzLmN1cnJlbnRBY3Rpb24udmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50QWN0aW9uLm9uY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QWN0aW9uLm1ldGhvZCh0aGlzLmN1cnJlbnRBY3Rpb24udmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLm5leHRBY3Rpb24oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBY3Rpb24ubWV0aG9kKHRoaXMuY3VycmVudEFjdGlvbi52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59ICIsIi8vQU4gQUNUSU9OIENMQVNTLiBJUyBORUVERUQgVE8gQ09OU1RSVUNUIEJFSEFWSU9SIEFSUkFZUyBGT1IgQVVUT01BVElDIEVOVElUSUVTXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHRoaXMubWV0aG9kID0gcHJvcHMubWV0aG9kO1xyXG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBwcm9wcy5kdXJhdGlvbjtcclxuICAgICAgICB0aGlzLm9uY2UgPSBwcm9wcy5vbmNlO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBwcm9wcy52YWx1ZTtcclxuICAgICAgICB0aGlzLmFjdGlvblN0YXJ0VGltZSA9IG51bGw7XHJcbiAgICB9XHJcbn0gICIsImltcG9ydCBCdWxsZXQgZnJvbSAnLi9CdWxsZXQnO1xyXG5pbXBvcnQgT2JqZWN0SGFuZGxlciBmcm9tICcuL09iamVjdEhhbmRsZXInO1xyXG5cclxuY29uc3Qgb2JqZWN0SGFuZGxlciA9IG5ldyBPYmplY3RIYW5kbGVyKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWFwb24ge1xyXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gcHJvcHMubmFtZTtcclxuICAgICAgICB0aGlzLmdyb3VwID0gcHJvcHMuZ3JvdXA7XHJcbiAgICAgICAgdGhpcy5idWxsZXRJbWFnZSA9IHByb3BzLmJ1bGxldEltYWdlO1xyXG4gICAgICAgIHRoaXMudGlsZVdpZHRoID0gcHJvcHMudGlsZVdpZHRoO1xyXG4gICAgICAgIHRoaXMudGlsZUhlaWdodCA9IHByb3BzLnRpbGVIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy50aWxlc0Ftb3VudCA9IHByb3BzLnRpbGVzQW1vdW50IHx8IDE7XHJcbiAgICAgICAgdGhpcy5kYW1hZ2UgPSBwcm9wcy5kYW1hZ2UgfHwgMTtcclxuICAgICAgICB0aGlzLnNwZWVkID0gcHJvcHMuc3BlZWQgfHwgMTtcclxuICAgICAgICB0aGlzLndlYXBvblggPSBwcm9wcy53ZWFwb25YIHx8IDA7XHJcbiAgICAgICAgdGhpcy53ZWFwb25ZID0gcHJvcHMud2VhcG9uWSB8fCAwO1xyXG4gICAgfVxyXG4gXHJcbiAgICBzaG90KHBvc2l0aW9uWCwgcG9zaXRpb25ZLCBhbmdsZSkge1xyXG4gICAgICAgIG9iamVjdEhhbmRsZXIuY3JlYXRlT2JqZWN0KEJ1bGxldCwge1xyXG4gICAgICAgICAgICBncm91cDogJ3BsYXllckJ1bGxldCcsXHJcbiAgICAgICAgICAgIGltYWdlOiB0aGlzLmJ1bGxldEltYWdlLFxyXG4gICAgICAgICAgICB0aWxlV2lkdGg6IHRoaXMudGlsZVdpZHRoLFxyXG4gICAgICAgICAgICB0aWxlSGVpZ2h0OiB0aGlzLnRpbGVIZWlnaHQsXHJcbiAgICAgICAgICAgIHRpbGVzQW1vdW50OiB0aGlzLnRpbGVzQW1vdW50LFxyXG4gICAgICAgICAgICBhbmdsZTogYW5nbGUsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uWDogcG9zaXRpb25YICsgdGhpcy53ZWFwb25YLFxyXG4gICAgICAgICAgICBwb3NpdGlvblk6IHBvc2l0aW9uWSArIHRoaXMud2VhcG9uWSxcclxuICAgICAgICAgICAgZGFtYWdlOiB0aGlzLmRhbWFnZSxcclxuICAgICAgICAgICAgc3BlZWQ6IHRoaXMuc3BlZWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCBEeW5hbWljT2JqZWN0IGZyb20gJy4vRHluYW1pY09iamVjdCc7XHJcbmltcG9ydCBPYmplY3RIYW5kbGVyIGZyb20gJy4vT2JqZWN0SGFuZGxlcic7XHJcblxyXG5jb25zdCBvYmplY3RIYW5kbGVyID0gbmV3IE9iamVjdEhhbmRsZXIoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1bGxldCBleHRlbmRzIER5bmFtaWNPYmplY3Qge1xyXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuYW5nbGUgPSBwcm9wcy5hbmdsZTtcclxuICAgICAgICB0aGlzLmRhbWFnZSA9IHByb3BzLmRhbWFnZSB8fCAwO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBwcm9wcy5zcGVlZCB8fCAwO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHRoaXMubW92ZSh0aGlzLmFuZ2xlLCBkdCk7XHJcbiAgICAgICAgLy8gdGhpcy5jaGVja0JvcmRlcnMoKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNoZWNrQm9yZGVycygpIHtcclxuICAgIC8vICAgICBpZiAodGhpcy5wb3NpdGlvblkgKyB0aGlzLnRpbGVIZWlnaHQgPD0gMCkge1xyXG4gICAgLy8gICAgICAgICBvYmplY3RIYW5kbGVyLmRlbGV0ZU9iamVjdCh0aGlzKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgaWYgKHRoaXMucG9zaXRpb25ZICsgdGhpcy50aWxlSGVpZ2h0ID4gMCkge1xyXG4gICAgLy8gICAgICAgICBvYmplY3RIYW5kbGVyLmRlbGV0ZU9iamVjdCh0aGlzKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgaWYgKHRoaXMucG9zaXRpb25ZICsgdGhpcy50aWxlSGVpZ2h0IDw9IDApIHtcclxuICAgIC8vICAgICAgICAgb2JqZWN0SGFuZGxlci5kZWxldGVPYmplY3QodGhpcyk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGlmICh0aGlzLnBvc2l0aW9uWSArIHRoaXMudGlsZUhlaWdodCA8PSAwKSB7XHJcbiAgICAvLyAgICAgICAgIG9iamVjdEhhbmRsZXIuZGVsZXRlT2JqZWN0KHRoaXMpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxufSIsIi8qKlxuICogIFdlYkdMLTJELmpzIC0gSFRNTDUgQ2FudmFzMkQgQVBJIGluIGEgV2ViR0wgY29udGV4dFxuICpcbiAqICBDcmVhdGVkIGJ5IENvcmJhbiBCcm9vayA8Y29yYmFuYnJvb2tAZ21haWwuY29tPiBvbiAyMDExLTAzLTAyLlxuICogIEFtZW5kZWQgdG8gYnkgQm9iYnkgUmljaHRlciA8c2VjcmV0cm9ib3Ryb25AZ21haWwuY29tPiBvbiAyMDExLTAzLTAzXG4gKiAgQ3ViaWNWUi5qcyBieSBDaGFybGVzIENsaWZmZSA8Y2pAY3ViaWNwcm9kdWN0aW9ucy5jb20+IG9uIDIwMTEtMDMtMDNcbiAqXG4gKi9cblxuLypcbiAqICBDb3B5cmlnaHQgKGMpIDIwMTEgQ29yYmFuIEJyb29rXG4gKlxuICogIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZ1xuICogIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuICogIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuICogIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbiAqICBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG9cbiAqICBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG9cbiAqICB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG4gKiAgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4gKiAgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAqICBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFXG4gKiAgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTlxuICogIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTlxuICogIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICpcbiAqL1xuXG4vKipcbiAqIFVzYWdlOlxuICpcbiAqICAgIHZhciBjdnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xuICpcbiAqICAgIFdlYkdMMkQuZW5hYmxlKGN2cyk7IC8vIGFkZHMgXCJ3ZWJnbC0yZFwiIHRvIGN2c1xuICpcbiAqICAgIGN2cy5nZXRDb250ZXh0KFwid2ViZ2wtMmRcIik7XG4gKlxuICovXG5cbihmdW5jdGlvbihNYXRoLCB1bmRlZmluZWQpIHtcblxuICAvLyBWZWN0b3IgJiBNYXRyaXggbGlicmFyaWVzIGZyb20gQ3ViaWNWUi5qc1xuICB2YXIgTV9QSSA9IDMuMTQxNTkyNjUzNTg5NzkzMjM4NDYyNjQzMzgzMjc5NTAyODg0MTk2ODtcbiAgdmFyIE1fVFdPX1BJID0gMi4wICogTV9QSTtcbiAgdmFyIE1fSEFMRl9QSSA9IE1fUEkgLyAyLjA7XG5cbiAgZnVuY3Rpb24gaXNQT1QodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPiAwICYmICgodmFsdWUgLSAxKSAmIHZhbHVlKSA9PT0gMDtcbiAgfVxuXG4gIHZhciB2ZWMzID0ge1xuICAgIGxlbmd0aDogZnVuY3Rpb24ocHQpIHtcbiAgICAgIHJldHVybiBNYXRoLnNxcnQocHRbMF0gKiBwdFswXSArIHB0WzFdICogcHRbMV0gKyBwdFsyXSAqIHB0WzJdKTtcbiAgICB9LFxuXG4gICAgbm9ybWFsaXplOiBmdW5jdGlvbihwdCkge1xuICAgICAgdmFyIGQgPSBNYXRoLnNxcnQoKHB0WzBdICogcHRbMF0pICsgKHB0WzFdICogcHRbMV0pICsgKHB0WzJdICogcHRbMl0pKTtcbiAgICAgIGlmIChkID09PSAwKSB7XG4gICAgICAgIHJldHVybiBbMCwgMCwgMF07XG4gICAgICB9XG4gICAgICByZXR1cm4gW3B0WzBdIC8gZCwgcHRbMV0gLyBkLCBwdFsyXSAvIGRdO1xuICAgIH0sXG5cbiAgICBkb3Q6IGZ1bmN0aW9uKHYxLCB2Mikge1xuICAgICAgcmV0dXJuIHYxWzBdICogdjJbMF0gKyB2MVsxXSAqIHYyWzFdICsgdjFbMl0gKiB2MlsyXTtcbiAgICB9LFxuXG4gICAgYW5nbGU6IGZ1bmN0aW9uKHYxLCB2Mikge1xuICAgICAgcmV0dXJuIE1hdGguYWNvcygodjFbMF0gKiB2MlswXSArIHYxWzFdICogdjJbMV0gKyB2MVsyXSAqIHYyWzJdKSAvIChNYXRoLnNxcnQodjFbMF0gKiB2MVswXSArIHYxWzFdICogdjFbMV0gKyB2MVsyXSAqIHYxWzJdKSAqIE1hdGguc3FydCh2MlswXSAqIHYyWzBdICsgdjJbMV0gKiB2MlsxXSArIHYyWzJdICogdjJbMl0pKSk7XG4gICAgfSxcblxuICAgIGNyb3NzOiBmdW5jdGlvbih2ZWN0QSwgdmVjdEIpIHtcbiAgICAgIHJldHVybiBbdmVjdEFbMV0gKiB2ZWN0QlsyXSAtIHZlY3RCWzFdICogdmVjdEFbMl0sIHZlY3RBWzJdICogdmVjdEJbMF0gLSB2ZWN0QlsyXSAqIHZlY3RBWzBdLCB2ZWN0QVswXSAqIHZlY3RCWzFdIC0gdmVjdEJbMF0gKiB2ZWN0QVsxXV07XG4gICAgfSxcblxuICAgIG11bHRpcGx5OiBmdW5jdGlvbih2ZWN0QSwgY29uc3RCKSB7XG4gICAgICByZXR1cm4gW3ZlY3RBWzBdICogY29uc3RCLCB2ZWN0QVsxXSAqIGNvbnN0QiwgdmVjdEFbMl0gKiBjb25zdEJdO1xuICAgIH0sXG5cbiAgICBhZGQ6IGZ1bmN0aW9uKHZlY3RBLCB2ZWN0Qikge1xuICAgICAgcmV0dXJuIFt2ZWN0QVswXSArIHZlY3RCWzBdLCB2ZWN0QVsxXSArIHZlY3RCWzFdLCB2ZWN0QVsyXSArIHZlY3RCWzJdXTtcbiAgICB9LFxuXG4gICAgc3VidHJhY3Q6IGZ1bmN0aW9uKHZlY3RBLCB2ZWN0Qikge1xuICAgICAgcmV0dXJuIFt2ZWN0QVswXSAtIHZlY3RCWzBdLCB2ZWN0QVsxXSAtIHZlY3RCWzFdLCB2ZWN0QVsyXSAtIHZlY3RCWzJdXTtcbiAgICB9LFxuXG4gICAgZXF1YWw6IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgIHZhciBlcHNpbG9uID0gMC4wMDAwMDAxO1xuICAgICAgaWYgKChhID09PSB1bmRlZmluZWQpICYmIChiID09PSB1bmRlZmluZWQpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKChhID09PSB1bmRlZmluZWQpIHx8IChiID09PSB1bmRlZmluZWQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoTWF0aC5hYnMoYVswXSAtIGJbMF0pIDwgZXBzaWxvbiAmJiBNYXRoLmFicyhhWzFdIC0gYlsxXSkgPCBlcHNpbG9uICYmIE1hdGguYWJzKGFbMl0gLSBiWzJdKSA8IGVwc2lsb24pO1xuICAgIH1cbiAgfTtcblxuICB2YXIgbWF0MyA9IHtcbiAgICBpZGVudGl0eTogWzEuMCwgMC4wLCAwLjAsXG4gICAgICAwLjAsIDEuMCwgMC4wLFxuICAgICAgMC4wLCAwLjAsIDEuMF0sXG5cbiAgICBtdWx0aXBseTogZnVuY3Rpb24gKG0xLCBtMikge1xuICAgICAgdmFyIG0xMCA9IG0xWzBdLCBtMTEgPSBtMVsxXSwgbTEyID0gbTFbMl0sIG0xMyA9IG0xWzNdLCBtMTQgPSBtMVs0XSwgbTE1ID0gbTFbNV0sIG0xNiA9IG0xWzZdLCBtMTcgPSBtMVs3XSwgbTE4ID0gbTFbOF0sXG4gICAgICAgIG0yMCA9IG0yWzBdLCBtMjEgPSBtMlsxXSwgbTIyID0gbTJbMl0sIG0yMyA9IG0yWzNdLCBtMjQgPSBtMls0XSwgbTI1ID0gbTJbNV0sIG0yNiA9IG0yWzZdLCBtMjcgPSBtMls3XSwgbTI4ID0gbTJbOF07XG5cbiAgICAgIG0yWzBdID0gbTIwICogbTEwICsgbTIzICogbTExICsgbTI2ICogbTEyO1xuICAgICAgbTJbMV0gPSBtMjEgKiBtMTAgKyBtMjQgKiBtMTEgKyBtMjcgKiBtMTI7XG4gICAgICBtMlsyXSA9IG0yMiAqIG0xMCArIG0yNSAqIG0xMSArIG0yOCAqIG0xMjtcbiAgICAgIG0yWzNdID0gbTIwICogbTEzICsgbTIzICogbTE0ICsgbTI2ICogbTE1O1xuICAgICAgbTJbNF0gPSBtMjEgKiBtMTMgKyBtMjQgKiBtMTQgKyBtMjcgKiBtMTU7XG4gICAgICBtMls1XSA9IG0yMiAqIG0xMyArIG0yNSAqIG0xNCArIG0yOCAqIG0xNTtcbiAgICAgIG0yWzZdID0gbTIwICogbTE2ICsgbTIzICogbTE3ICsgbTI2ICogbTE4O1xuICAgICAgbTJbN10gPSBtMjEgKiBtMTYgKyBtMjQgKiBtMTcgKyBtMjcgKiBtMTg7XG4gICAgICBtMls4XSA9IG0yMiAqIG0xNiArIG0yNSAqIG0xNyArIG0yOCAqIG0xODtcbiAgICB9LFxuXG4gICAgdmVjMl9tdWx0aXBseTogZnVuY3Rpb24gKG0xLCBtMikge1xuICAgICAgdmFyIG1PdXQgPSBbXTtcbiAgICAgIG1PdXRbMF0gPSBtMlswXSAqIG0xWzBdICsgbTJbM10gKiBtMVsxXSArIG0yWzZdO1xuICAgICAgbU91dFsxXSA9IG0yWzFdICogbTFbMF0gKyBtMls0XSAqIG0xWzFdICsgbTJbN107XG4gICAgICByZXR1cm4gbU91dDtcbiAgICB9LFxuXG4gICAgdHJhbnNwb3NlOiBmdW5jdGlvbiAobSkge1xuICAgICAgcmV0dXJuIFttWzBdLCBtWzNdLCBtWzZdLCBtWzFdLCBtWzRdLCBtWzddLCBtWzJdLCBtWzVdLCBtWzhdXTtcbiAgICB9XG4gIH07IC8vbWF0M1xuXG4gIC8vIFRyYW5zZm9ybSBsaWJyYXJ5IGZyb20gQ3ViaWNWUi5qc1xuICBmdW5jdGlvbiBUcmFuc2Zvcm0obWF0KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xlYXJTdGFjayhtYXQpO1xuICB9XG5cbiAgdmFyIFNUQUNLX0RFUFRIX0xJTUlUID0gMTY7XG5cbiAgVHJhbnNmb3JtLnByb3RvdHlwZS5jbGVhclN0YWNrID0gZnVuY3Rpb24oaW5pdF9tYXQpIHtcbiAgICB0aGlzLm1fc3RhY2sgPSBbXTtcbiAgICB0aGlzLm1fY2FjaGUgPSBbXTtcbiAgICB0aGlzLmNfc3RhY2sgPSAwO1xuICAgIHRoaXMudmFsaWQgPSAwO1xuICAgIHRoaXMucmVzdWx0ID0gbnVsbDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgU1RBQ0tfREVQVEhfTElNSVQ7IGkrKykge1xuICAgICAgdGhpcy5tX3N0YWNrW2ldID0gdGhpcy5nZXRJZGVudGl0eSgpO1xuICAgIH1cblxuICAgIGlmIChpbml0X21hdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm1fc3RhY2tbMF0gPSBpbml0X21hdDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRJZGVudGl0eSgpO1xuICAgIH1cbiAgfTsgLy9jbGVhclN0YWNrXG5cbiAgVHJhbnNmb3JtLnByb3RvdHlwZS5zZXRJZGVudGl0eSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMubV9zdGFja1t0aGlzLmNfc3RhY2tdID0gdGhpcy5nZXRJZGVudGl0eSgpO1xuICAgIGlmICh0aGlzLnZhbGlkID09PSB0aGlzLmNfc3RhY2sgJiYgdGhpcy5jX3N0YWNrKSB7XG4gICAgICB0aGlzLnZhbGlkLS07XG4gICAgfVxuICB9O1xuXG4gIFRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0SWRlbnRpdHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gWzEuMCwgMC4wLCAwLjAsXG4gICAgICAwLjAsIDEuMCwgMC4wLFxuICAgICAgMC4wLCAwLjAsIDEuMF07XG4gIH07XG5cbiAgVHJhbnNmb3JtLnByb3RvdHlwZS5nZXRSZXN1bHQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuY19zdGFjaykge1xuICAgICAgcmV0dXJuIHRoaXMubV9zdGFja1swXTtcbiAgICB9XG5cbiAgICB2YXIgbSA9IG1hdDMuaWRlbnRpdHk7XG5cbiAgICBpZiAodGhpcy52YWxpZCA+IHRoaXMuY19zdGFjay0xKSB7IHRoaXMudmFsaWQgPSB0aGlzLmNfc3RhY2stMTsgfVxuXG4gICAgZm9yICh2YXIgaSA9IHRoaXMudmFsaWQ7IGkgPCB0aGlzLmNfc3RhY2srMTsgaSsrKSB7XG4gICAgICBtID0gbWF0My5tdWx0aXBseSh0aGlzLm1fc3RhY2tbaV0sbSk7XG4gICAgICB0aGlzLm1fY2FjaGVbaV0gPSBtO1xuICAgIH1cblxuICAgIHRoaXMudmFsaWQgPSB0aGlzLmNfc3RhY2stMTtcblxuICAgIHRoaXMucmVzdWx0ID0gdGhpcy5tX2NhY2hlW3RoaXMuY19zdGFja107XG5cbiAgICByZXR1cm4gdGhpcy5yZXN1bHQ7XG4gIH07XG5cbiAgVHJhbnNmb3JtLnByb3RvdHlwZS5wdXNoTWF0cml4ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5jX3N0YWNrKys7XG4gICAgdGhpcy5tX3N0YWNrW3RoaXMuY19zdGFja10gPSB0aGlzLmdldElkZW50aXR5KCk7XG4gIH07XG5cbiAgVHJhbnNmb3JtLnByb3RvdHlwZS5wb3BNYXRyaXggPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5jX3N0YWNrID09PSAwKSB7IHJldHVybjsgfVxuICAgIHRoaXMuY19zdGFjay0tO1xuICB9O1xuXG4gIHZhciB0cmFuc2xhdGVNYXRyaXggPSBUcmFuc2Zvcm0ucHJvdG90eXBlLmdldElkZW50aXR5KCk7XG5cbiAgVHJhbnNmb3JtLnByb3RvdHlwZS50cmFuc2xhdGUgPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgdHJhbnNsYXRlTWF0cml4WzZdID0geDtcbiAgICB0cmFuc2xhdGVNYXRyaXhbN10gPSB5O1xuXG4gICAgbWF0My5tdWx0aXBseSh0cmFuc2xhdGVNYXRyaXgsIHRoaXMubV9zdGFja1t0aGlzLmNfc3RhY2tdKTtcblxuICAgIC8qXG4gICAgIGlmICh0aGlzLnZhbGlkID09PSB0aGlzLmNfc3RhY2sgJiYgdGhpcy5jX3N0YWNrKSB7XG4gICAgIHRoaXMudmFsaWQtLTtcbiAgICAgfVxuICAgICAqL1xuICB9O1xuXG4gIHZhciBzY2FsZU1hdHJpeCA9IFRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0SWRlbnRpdHkoKTtcblxuICBUcmFuc2Zvcm0ucHJvdG90eXBlLnNjYWxlID0gZnVuY3Rpb24oeCwgeSkge1xuICAgIHNjYWxlTWF0cml4WzBdID0geDtcbiAgICBzY2FsZU1hdHJpeFs0XSA9IHk7XG5cbiAgICBtYXQzLm11bHRpcGx5KHNjYWxlTWF0cml4LCB0aGlzLm1fc3RhY2tbdGhpcy5jX3N0YWNrXSk7XG5cbiAgICAvKlxuICAgICBpZiAodGhpcy52YWxpZCA9PT0gdGhpcy5jX3N0YWNrICYmIHRoaXMuY19zdGFjaykge1xuICAgICB0aGlzLnZhbGlkLS07XG4gICAgIH1cbiAgICAgKi9cbiAgfTtcblxuICB2YXIgcm90YXRlTWF0cml4ID0gVHJhbnNmb3JtLnByb3RvdHlwZS5nZXRJZGVudGl0eSgpO1xuXG4gIFRyYW5zZm9ybS5wcm90b3R5cGUucm90YXRlID0gZnVuY3Rpb24oYW5nKSB7XG4gICAgdmFyIHNBbmcsIGNBbmc7XG5cbiAgICBzQW5nID0gTWF0aC5zaW4oLWFuZyk7XG4gICAgY0FuZyA9IE1hdGguY29zKC1hbmcpO1xuXG4gICAgcm90YXRlTWF0cml4WzBdID0gY0FuZztcbiAgICByb3RhdGVNYXRyaXhbM10gPSBzQW5nO1xuICAgIHJvdGF0ZU1hdHJpeFsxXSA9IC1zQW5nO1xuICAgIHJvdGF0ZU1hdHJpeFs0XSA9IGNBbmc7XG5cbiAgICBtYXQzLm11bHRpcGx5KHJvdGF0ZU1hdHJpeCwgdGhpcy5tX3N0YWNrW3RoaXMuY19zdGFja10pO1xuXG4gICAgLypcbiAgICAgaWYgKHRoaXMudmFsaWQgPT09IHRoaXMuY19zdGFjayAmJiB0aGlzLmNfc3RhY2spIHtcbiAgICAgdGhpcy52YWxpZC0tO1xuICAgICB9XG4gICAgICovXG4gIH07XG5cbiAgdmFyIFdlYkdMMkQgPSB0aGlzLldlYkdMMkQgPSBmdW5jdGlvbiBXZWJHTDJEKGNhbnZhcywgb3B0aW9ucykge1xuICAgIHRoaXMuY2FudmFzICAgICAgICAgPSBjYW52YXM7XG4gICAgdGhpcy5vcHRpb25zICAgICAgICA9IG9wdGlvbnMgfHwge307XG4gICAgdGhpcy5nbCAgICAgICAgICAgICA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmZzICAgICAgICAgICAgID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudnMgICAgICAgICAgICAgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zaGFkZXJQcm9ncmFtICA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRyYW5zZm9ybSAgICAgID0gbmV3IFRyYW5zZm9ybSgpO1xuICAgIHRoaXMuc2hhZGVyUG9vbCAgICAgPSBbXTtcbiAgICB0aGlzLm1heFRleHR1cmVTaXplID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gU2F2ZSBhIHJlZmVyZW5jZSB0byB0aGUgV2ViR0wyRCBpbnN0YW5jZSBvbiB0aGUgY2FudmFzIG9iamVjdFxuICAgIGNhbnZhcy5nbDJkICAgICAgICAgPSB0aGlzO1xuXG4gICAgLy8gU3RvcmUgZ2V0Q29udGV4dCBmdW5jdGlvbiBmb3IgbGF0ZXIgdXNlXG4gICAgY2FudmFzLiRnZXRDb250ZXh0ICA9IGNhbnZhcy5nZXRDb250ZXh0O1xuXG4gICAgLy8gT3ZlcnJpZGUgZ2V0Q29udGV4dCBmdW5jdGlvbiB3aXRoIFwid2ViZ2wtMmRcIiBlbmFibGVkIHZlcnNpb25cbiAgICBjYW52YXMuZ2V0Q29udGV4dCA9IChmdW5jdGlvbihnbDJkKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oY29udGV4dCkge1xuICAgICAgICBpZiAoKGdsMmQub3B0aW9ucy5mb3JjZSB8fCBjb250ZXh0ID09PSBcIndlYmdsLTJkXCIpICYmICEoY2FudmFzLndpZHRoID09PSAwIHx8IGNhbnZhcy5oZWlnaHQgPT09IDApKSB7XG4gICAgICAgICAgaWYgKGdsMmQuZ2wpIHsgcmV0dXJuIGdsMmQuZ2w7IH1cblxuICAgICAgICAgIHZhciBnbCA9IGdsMmQuZ2wgPSBnbDJkLmNhbnZhcy4kZ2V0Q29udGV4dChcImV4cGVyaW1lbnRhbC13ZWJnbFwiKTtcblxuICAgICAgICAgIGdsMmQuaW5pdFNoYWRlcnMoKTtcbiAgICAgICAgICBnbDJkLmluaXRCdWZmZXJzKCk7XG5cbiAgICAgICAgICAvLyBBcHBlbmQgQ2FudmFzMkQgQVBJIGZlYXR1cmVzIHRvIHRoZSBXZWJHTCBjb250ZXh0XG4gICAgICAgICAgZ2wyZC5pbml0Q2FudmFzMkRBUEkoKTtcblxuICAgICAgICAgIGdsLnZpZXdwb3J0KDAsIDAsIGdsMmQuY2FudmFzLndpZHRoLCBnbDJkLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgICAgLy8gRGlzYWJsZXMgd3JpdGluZyB0byBkZXN0LWFscGhhXG4gICAgICAgICAgLy8gZ2wuY29sb3JNYXNrKDEsMSwxLDApXG5cbiAgICAgICAgICAvLyBEZXB0aCBvcHRpb25zXG4gICAgICAgICAgLy9nbC5lbmFibGUoZ2wuREVQVEhfVEVTVCk7XG4gICAgICAgICAgLy9nbC5kZXB0aEZ1bmMoZ2wuTEVRVUFMKTtcblxuICAgICAgICAgIC8vIEJsZW5kaW5nIG9wdGlvbnNcbiAgICAgICAgICAvLyBTZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMTUyMTAzNS9ibGVuZGluZy13aXRoLWh0bWwtYmFja2dyb3VuZC1pbi13ZWJnbFxuICAgICAgICAgIGdsLmVuYWJsZShnbC5CTEVORCk7XG4gICAgICAgICAgZ2wuYmxlbmRGdW5jU2VwYXJhdGUoZ2wuU1JDX0FMUEhBLCBnbC5PTkVfTUlOVVNfU1JDX0FMUEhBLCBnbC5PTkUsIGdsLk9ORV9NSU5VU19TUkNfQUxQSEEpO1xuXG4gICAgICAgICAgZ2wyZC5tYXhUZXh0dXJlU2l6ZSA9IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVEVYVFVSRV9TSVpFKTtcblxuICAgICAgICAgIHJldHVybiBnbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZ2wyZC5jYW52YXMuJGdldENvbnRleHQoY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSh0aGlzKSk7XG5cbiAgICB0aGlzLnBvc3RJbml0KCk7XG4gIH07XG5cbiAgLy8gRW5hYmxlcyBXZWJHTDJEIG9uIHlvdXIgY2FudmFzXG4gIFdlYkdMMkQuZW5hYmxlID0gZnVuY3Rpb24oY2FudmFzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGNhbnZhcy5nbDJkIHx8IG5ldyBXZWJHTDJEKGNhbnZhcywgb3B0aW9ucyk7XG4gIH07XG5cblxuICAvLyBTaGFkZXIgUG9vbCBCaXRNYXNrcywgaS5lLiBzTWFzayA9IChzaGFkZXJNYXNrLnRleHR1cmUrc2hhZGVyTWFzay5zdHJva2UpXG4gIHZhciBzaGFkZXJNYXNrID0ge1xuICAgIHRleHR1cmU6IDEsXG4gICAgY3JvcDogMixcbiAgICBwYXRoOiA0XG4gIH07XG5cblxuICAvLyBGcmFnbWVudCBzaGFkZXIgc291cmNlXG4gIFdlYkdMMkQucHJvdG90eXBlLmdldEZyYWdtZW50U2hhZGVyU291cmNlID0gZnVuY3Rpb24gZ2V0RnJhZ21lbnRTaGFkZXJTb3VyY2Uoc01hc2spIHtcbiAgICB2YXIgZnNTb3VyY2UgPSBbXG4gICAgICBcIiNpZmRlZiBHTF9FU1wiLFxuICAgICAgXCJwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XCIsXG4gICAgICBcIiNlbmRpZlwiLFxuXG4gICAgICBcIiNkZWZpbmUgaGFzVGV4dHVyZSBcIiArICgoc01hc2smc2hhZGVyTWFzay50ZXh0dXJlKSA/IFwiMVwiIDogXCIwXCIpLFxuICAgICAgXCIjZGVmaW5lIGhhc0Nyb3AgXCIgKyAoKHNNYXNrJnNoYWRlck1hc2suY3JvcCkgPyBcIjFcIiA6IFwiMFwiKSxcblxuICAgICAgXCJ2YXJ5aW5nIHZlYzQgdkNvbG9yO1wiLFxuXG4gICAgICBcIiNpZiBoYXNUZXh0dXJlXCIsXG4gICAgICBcInZhcnlpbmcgdmVjMiB2VGV4dHVyZUNvb3JkO1wiLFxuICAgICAgXCJ1bmlmb3JtIHNhbXBsZXIyRCB1U2FtcGxlcjtcIixcbiAgICAgIFwiI2lmIGhhc0Nyb3BcIixcbiAgICAgIFwidW5pZm9ybSB2ZWM0IHVDcm9wU291cmNlO1wiLFxuICAgICAgXCIjZW5kaWZcIixcbiAgICAgIFwiI2VuZGlmXCIsXG5cbiAgICAgIFwidm9pZCBtYWluKHZvaWQpIHtcIixcbiAgICAgIFwiI2lmIGhhc1RleHR1cmVcIixcbiAgICAgIFwiI2lmIGhhc0Nyb3BcIixcbiAgICAgIFwiZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKHVTYW1wbGVyLCB2ZWMyKHZUZXh0dXJlQ29vcmQueCAqIHVDcm9wU291cmNlLnosIHZUZXh0dXJlQ29vcmQueSAqIHVDcm9wU291cmNlLncpICsgdUNyb3BTb3VyY2UueHkpO1wiLFxuICAgICAgXCIjZWxzZVwiLFxuICAgICAgXCJnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQodVNhbXBsZXIsIHZUZXh0dXJlQ29vcmQpO1wiLFxuICAgICAgXCIjZW5kaWZcIixcbiAgICAgIFwiI2Vsc2VcIixcbiAgICAgIFwiZ2xfRnJhZ0NvbG9yID0gdkNvbG9yO1wiLFxuICAgICAgXCIjZW5kaWZcIixcbiAgICAgIFwifVwiXG4gICAgXS5qb2luKFwiXFxuXCIpO1xuXG4gICAgcmV0dXJuIGZzU291cmNlO1xuICB9O1xuXG4gIFdlYkdMMkQucHJvdG90eXBlLmdldFZlcnRleFNoYWRlclNvdXJjZSA9IGZ1bmN0aW9uIGdldFZlcnRleFNoYWRlclNvdXJjZShzdGFja0RlcHRoLHNNYXNrKSB7XG4gICAgdmFyIHcgPSAyIC8gdGhpcy5jYW52YXMud2lkdGgsIGggPSAtMiAvIHRoaXMuY2FudmFzLmhlaWdodDtcblxuICAgIHN0YWNrRGVwdGggPSBzdGFja0RlcHRoIHx8IDE7XG5cbiAgICB2YXIgdnNTb3VyY2UgPSBbXG4gICAgICBcIiNkZWZpbmUgaGFzVGV4dHVyZSBcIiArICgoc01hc2smc2hhZGVyTWFzay50ZXh0dXJlKSA/IFwiMVwiIDogXCIwXCIpLFxuICAgICAgXCJhdHRyaWJ1dGUgdmVjNCBhVmVydGV4UG9zaXRpb247XCIsXG5cbiAgICAgIFwiI2lmIGhhc1RleHR1cmVcIixcbiAgICAgIFwidmFyeWluZyB2ZWMyIHZUZXh0dXJlQ29vcmQ7XCIsXG4gICAgICBcIiNlbmRpZlwiLFxuXG4gICAgICBcInVuaWZvcm0gdmVjNCB1Q29sb3I7XCIsXG4gICAgICBcInVuaWZvcm0gbWF0MyB1VHJhbnNmb3Jtc1tcIiArIHN0YWNrRGVwdGggKyBcIl07XCIsXG5cbiAgICAgIFwidmFyeWluZyB2ZWM0IHZDb2xvcjtcIixcblxuICAgICAgXCJjb25zdCBtYXQ0IHBNYXRyaXggPSBtYXQ0KFwiICsgdyArIFwiLDAsMCwwLCAwLFwiICsgaCArIFwiLDAsMCwgMCwwLDEuMCwxLjAsIC0xLjAsMS4wLDAsMCk7XCIsXG5cbiAgICAgIFwibWF0MyBjcnVuY2hTdGFjayh2b2lkKSB7XCIsXG4gICAgICBcIm1hdDMgcmVzdWx0ID0gdVRyYW5zZm9ybXNbMF07XCIsXG4gICAgICBcImZvciAoaW50IGkgPSAxOyBpIDwgXCIgKyBzdGFja0RlcHRoICsgXCI7ICsraSkge1wiLFxuICAgICAgXCJyZXN1bHQgPSB1VHJhbnNmb3Jtc1tpXSAqIHJlc3VsdDtcIixcbiAgICAgIFwifVwiLFxuICAgICAgXCJyZXR1cm4gcmVzdWx0O1wiLFxuICAgICAgXCJ9XCIsXG5cbiAgICAgIFwidm9pZCBtYWluKHZvaWQpIHtcIixcbiAgICAgIFwidmVjMyBwb3NpdGlvbiA9IGNydW5jaFN0YWNrKCkgKiB2ZWMzKGFWZXJ0ZXhQb3NpdGlvbi54LCBhVmVydGV4UG9zaXRpb24ueSwgMS4wKTtcIixcbiAgICAgIFwiZ2xfUG9zaXRpb24gPSBwTWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcIixcbiAgICAgIFwidkNvbG9yID0gdUNvbG9yO1wiLFxuICAgICAgXCIjaWYgaGFzVGV4dHVyZVwiLFxuICAgICAgXCJ2VGV4dHVyZUNvb3JkID0gYVZlcnRleFBvc2l0aW9uLnp3O1wiLFxuICAgICAgXCIjZW5kaWZcIixcbiAgICAgIFwifVwiXG4gICAgXS5qb2luKFwiXFxuXCIpO1xuICAgIHJldHVybiB2c1NvdXJjZTtcbiAgfTtcblxuXG4gIC8vIEluaXRpYWxpemUgZnJhZ21lbnQgYW5kIHZlcnRleCBzaGFkZXJzXG4gIFdlYkdMMkQucHJvdG90eXBlLmluaXRTaGFkZXJzID0gZnVuY3Rpb24gaW5pdFNoYWRlcnModHJhbnNmb3JtU3RhY2tEZXB0aCxzTWFzaykge1xuICAgIHZhciBnbCA9IHRoaXMuZ2w7XG5cbiAgICB0cmFuc2Zvcm1TdGFja0RlcHRoID0gdHJhbnNmb3JtU3RhY2tEZXB0aCB8fCAxO1xuICAgIHNNYXNrID0gc01hc2sgfHwgMDtcbiAgICB2YXIgc3RvcmVkU2hhZGVyID0gdGhpcy5zaGFkZXJQb29sW3RyYW5zZm9ybVN0YWNrRGVwdGhdO1xuXG4gICAgaWYgKCFzdG9yZWRTaGFkZXIpIHsgc3RvcmVkU2hhZGVyID0gdGhpcy5zaGFkZXJQb29sW3RyYW5zZm9ybVN0YWNrRGVwdGhdID0gW107IH1cbiAgICBzdG9yZWRTaGFkZXIgPSBzdG9yZWRTaGFkZXJbc01hc2tdO1xuXG4gICAgaWYgKHN0b3JlZFNoYWRlcikge1xuICAgICAgZ2wudXNlUHJvZ3JhbShzdG9yZWRTaGFkZXIpO1xuICAgICAgdGhpcy5zaGFkZXJQcm9ncmFtID0gc3RvcmVkU2hhZGVyO1xuICAgICAgcmV0dXJuIHN0b3JlZFNoYWRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGZzID0gdGhpcy5mcyA9IGdsLmNyZWF0ZVNoYWRlcihnbC5GUkFHTUVOVF9TSEFERVIpO1xuICAgICAgZ2wuc2hhZGVyU291cmNlKHRoaXMuZnMsIHRoaXMuZ2V0RnJhZ21lbnRTaGFkZXJTb3VyY2Uoc01hc2spKTtcbiAgICAgIGdsLmNvbXBpbGVTaGFkZXIodGhpcy5mcyk7XG5cbiAgICAgIGlmICghZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHRoaXMuZnMsIGdsLkNPTVBJTEVfU1RBVFVTKSkge1xuICAgICAgICB0aHJvdyBcImZyYWdtZW50IHNoYWRlciBlcnJvcjogXCIrZ2wuZ2V0U2hhZGVySW5mb0xvZyh0aGlzLmZzKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHZzID0gdGhpcy52cyA9IGdsLmNyZWF0ZVNoYWRlcihnbC5WRVJURVhfU0hBREVSKTtcbiAgICAgIGdsLnNoYWRlclNvdXJjZSh0aGlzLnZzLCB0aGlzLmdldFZlcnRleFNoYWRlclNvdXJjZSh0cmFuc2Zvcm1TdGFja0RlcHRoLHNNYXNrKSk7XG4gICAgICBnbC5jb21waWxlU2hhZGVyKHRoaXMudnMpO1xuXG4gICAgICBpZiAoIWdsLmdldFNoYWRlclBhcmFtZXRlcih0aGlzLnZzLCBnbC5DT01QSUxFX1NUQVRVUykpIHtcbiAgICAgICAgdGhyb3cgXCJ2ZXJ0ZXggc2hhZGVyIGVycm9yOiBcIitnbC5nZXRTaGFkZXJJbmZvTG9nKHRoaXMudnMpO1xuICAgICAgfVxuXG5cbiAgICAgIHZhciBzaGFkZXJQcm9ncmFtID0gdGhpcy5zaGFkZXJQcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xuICAgICAgc2hhZGVyUHJvZ3JhbS5zdGFja0RlcHRoID0gdHJhbnNmb3JtU3RhY2tEZXB0aDtcbiAgICAgIGdsLmF0dGFjaFNoYWRlcihzaGFkZXJQcm9ncmFtLCBmcyk7XG4gICAgICBnbC5hdHRhY2hTaGFkZXIoc2hhZGVyUHJvZ3JhbSwgdnMpO1xuICAgICAgZ2wubGlua1Byb2dyYW0oc2hhZGVyUHJvZ3JhbSk7XG5cbiAgICAgIGlmICghZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihzaGFkZXJQcm9ncmFtLCBnbC5MSU5LX1NUQVRVUykpIHtcbiAgICAgICAgdGhyb3cgXCJDb3VsZCBub3QgaW5pdGlhbGlzZSBzaGFkZXJzLlwiO1xuICAgICAgfVxuXG4gICAgICBnbC51c2VQcm9ncmFtKHNoYWRlclByb2dyYW0pO1xuXG4gICAgICBzaGFkZXJQcm9ncmFtLnZlcnRleFBvc2l0aW9uQXR0cmlidXRlID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgXCJhVmVydGV4UG9zaXRpb25cIik7XG4gICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShzaGFkZXJQcm9ncmFtLnZlcnRleFBvc2l0aW9uQXR0cmlidXRlKTtcblxuICAgICAgc2hhZGVyUHJvZ3JhbS51Q29sb3IgICA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAndUNvbG9yJyk7XG4gICAgICBzaGFkZXJQcm9ncmFtLnVTYW1wbGVyID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICd1U2FtcGxlcicpO1xuICAgICAgc2hhZGVyUHJvZ3JhbS51Q3JvcFNvdXJjZSA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAndUNyb3BTb3VyY2UnKTtcblxuICAgICAgc2hhZGVyUHJvZ3JhbS51VHJhbnNmb3JtcyA9IFtdO1xuICAgICAgZm9yICh2YXIgaT0wOyBpPHRyYW5zZm9ybVN0YWNrRGVwdGg7ICsraSkge1xuICAgICAgICBzaGFkZXJQcm9ncmFtLnVUcmFuc2Zvcm1zW2ldID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICd1VHJhbnNmb3Jtc1snICsgaSArICddJyk7XG4gICAgICB9IC8vZm9yXG4gICAgICB0aGlzLnNoYWRlclBvb2xbdHJhbnNmb3JtU3RhY2tEZXB0aF1bc01hc2tdID0gc2hhZGVyUHJvZ3JhbTtcbiAgICAgIHJldHVybiBzaGFkZXJQcm9ncmFtO1xuICAgIH0gLy9pZlxuICB9O1xuXG4gIHZhciByZWN0VmVydGV4UG9zaXRpb25CdWZmZXI7XG4gIHZhciByZWN0VmVydGV4Q29sb3JCdWZmZXI7XG5cbiAgdmFyIHBhdGhWZXJ0ZXhQb3NpdGlvbkJ1ZmZlcjtcbiAgdmFyIHBhdGhWZXJ0ZXhDb2xvckJ1ZmZlcjtcblxuICAvLyAyRCBWZXJ0aWNlcyBhbmQgVGV4dHVyZSBVViBjb29yZHNcbiAgdmFyIHJlY3RWZXJ0cyA9IG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgIDAsMCwgMCwwLFxuICAgIDAsMSwgMCwxLFxuICAgIDEsMSwgMSwxLFxuICAgIDEsMCwgMSwwXG4gIF0pO1xuXG4gIFdlYkdMMkQucHJvdG90eXBlLmluaXRCdWZmZXJzID0gZnVuY3Rpb24gaW5pdEJ1ZmZlcnMoKSB7XG4gICAgdmFyIGdsID0gdGhpcy5nbDtcblxuICAgIHJlY3RWZXJ0ZXhQb3NpdGlvbkJ1ZmZlciAgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAgICByZWN0VmVydGV4Q29sb3JCdWZmZXIgICAgID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG5cbiAgICBwYXRoVmVydGV4UG9zaXRpb25CdWZmZXIgID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgcGF0aFZlcnRleENvbG9yQnVmZmVyICAgICA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuXG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHJlY3RWZXJ0ZXhQb3NpdGlvbkJ1ZmZlcik7XG4gICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIHJlY3RWZXJ0cywgZ2wuU1RBVElDX0RSQVcpO1xuICB9O1xuXG4gIC8vIE1haW50YWlucyBhbiBhcnJheSBvZiBhbGwgV2ViR0wyRCBpbnN0YW5jZXNcbiAgV2ViR0wyRC5pbnN0YW5jZXMgPSBbXTtcblxuICBXZWJHTDJELnByb3RvdHlwZS5wb3N0SW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIFdlYkdMMkQuaW5zdGFuY2VzLnB1c2godGhpcyk7XG4gIH07XG5cbiAgLy8gRXh0ZW5kcyBnbCBjb250ZXh0IHdpdGggQ2FudmFzMkQgQVBJXG4gIFdlYkdMMkQucHJvdG90eXBlLmluaXRDYW52YXMyREFQSSA9IGZ1bmN0aW9uIGluaXRDYW52YXMyREFQSSgpIHtcbiAgICB2YXIgZ2wyZCA9IHRoaXMsXG4gICAgICBnbCAgID0gdGhpcy5nbDtcblxuXG4gICAgLy8gUmVuZGVyaW5nIENhbnZhcyBmb3IgdGV4dCBmb250c1xuICAgIHZhciB0ZXh0Q2FudmFzICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICB0ZXh0Q2FudmFzLndpZHRoICA9IGdsMmQuY2FudmFzLndpZHRoO1xuICAgIHRleHRDYW52YXMuaGVpZ2h0ID0gZ2wyZC5jYW52YXMuaGVpZ2h0O1xuICAgIHZhciB0ZXh0Q3R4ICAgICAgID0gdGV4dENhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICB2YXIgcmVSR0JBQ29sb3IgPSAvXnJnYihhKT9cXChcXHMqKC0/W1xcZF0rKSglKT9cXHMqLFxccyooLT9bXFxkXSspKCUpP1xccyosXFxzKigtP1tcXGRdKykoJSk/XFxzKiw/XFxzKigtP1tcXGRcXC5dKyk/XFxzKlxcKSQvO1xuICAgIHZhciByZUhTTEFDb2xvciA9IC9eaHNsKGEpP1xcKFxccyooLT9bXFxkXFwuXSspXFxzKixcXHMqKC0/W1xcZFxcLl0rKSVcXHMqLFxccyooLT9bXFxkXFwuXSspJVxccyosP1xccyooLT9bXFxkXFwuXSspP1xccypcXCkkLztcbiAgICB2YXIgcmVIZXg2Q29sb3IgPSAvXiMoWzAtOUEtRmEtZl17Nn0pJC87XG4gICAgdmFyIHJlSGV4M0NvbG9yID0gL14jKFswLTlBLUZhLWZdKShbMC05QS1GYS1mXSkoWzAtOUEtRmEtZl0pJC87XG5cbiAgICAvLyBodHRwOi8vYXhvbmZsdXguY29tL2hhbmR5LXJnYi10by1oc2wtYW5kLXJnYi10by1oc3YtY29sb3ItbW9kZWwtY1xuICAgIGZ1bmN0aW9uIEhTTEFUb1JHQkEoaCwgcywgbCwgYSkge1xuICAgICAgdmFyIHIsIGcsIGIsIHAsIHE7XG5cbiAgICAgIC8vIENsYW1wIGFuZCBOb3JtYWxpemUgdmFsdWVzXG4gICAgICBoID0gKCgoaCAlIDM2MCkgKyAzNjApICUgMzYwKSAvIDM2MDtcbiAgICAgIHMgPSBzID4gMTAwID8gMSA6IHMgLyAxMDA7XG4gICAgICBzID0gcyA8ICAgMCA/IDAgOiBzO1xuICAgICAgbCA9IGwgPiAxMDAgPyAxIDogbCAvIDEwMDtcbiAgICAgIGwgPSBsIDwgICAwID8gMCA6IGw7XG5cbiAgICAgIGlmKHMgPT0gMCkge1xuICAgICAgICByID0gZyA9IGIgPSBsOyAvLyBhY2hyb21hdGljXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmdW5jdGlvbiBodWUycmdiKHAsIHEsIHQpe1xuICAgICAgICAgIGlmKHQgPCAwKSB0ICs9IDE7XG4gICAgICAgICAgaWYodCA+IDEpIHQgLT0gMTtcbiAgICAgICAgICBpZih0IDwgMS82KSByZXR1cm4gcCArIChxIC0gcCkgKiA2ICogdDtcbiAgICAgICAgICBpZih0IDwgMS8yKSByZXR1cm4gcTtcbiAgICAgICAgICBpZih0IDwgMi8zKSByZXR1cm4gcCArIChxIC0gcCkgKiAoMi8zIC0gdCkgKiA2O1xuICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICB9XG5cbiAgICAgICAgcSA9IGwgPCAwLjUgPyBsICogKDEgKyBzKSA6IGwgKyBzIC0gbCAqIHM7XG4gICAgICAgIHAgPSAyICogbCAtIHE7XG5cbiAgICAgICAgciA9IGh1ZTJyZ2IocCwgcSwgaCArIDEvMyk7XG4gICAgICAgIGcgPSBodWUycmdiKHAsIHEsIGgpO1xuICAgICAgICBiID0gaHVlMnJnYihwLCBxLCBoIC0gMS8zKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFtyLCBnLCBiLCBhXTtcbiAgICB9XG5cblxuICAgIC8vIENvbnZlcnRzIHJnYihhKSBjb2xvciBzdHJpbmcgdG8gZ2wgY29sb3IgdmVjdG9yXG4gICAgZnVuY3Rpb24gY29sb3JTdHJpbmdUb1ZlYzQodmFsdWUpIHtcbiAgICAgIHZhciByZXN1bHQgPSBbXSwgbWF0Y2gsIGNoYW5uZWwsIGlzUGVyY2VudCwgaGFzQWxwaGEsIGFscGhhQ2hhbm5lbCwgc2FtZVR5cGU7XG5cbiAgICAgIGlmICgobWF0Y2ggPSByZVJHQkFDb2xvci5leGVjKHZhbHVlKSkpIHtcbiAgICAgICAgaGFzQWxwaGEgPSBtYXRjaFsxXSwgYWxwaGFDaGFubmVsID0gcGFyc2VGbG9hdChtYXRjaFs4XSk7XG5cbiAgICAgICAgaWYgKChoYXNBbHBoYSAmJiBpc05hTihhbHBoYUNoYW5uZWwpKSB8fCAoIWhhc0FscGhhICYmICFpc05hTihhbHBoYUNoYW5uZWwpKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNhbWVUeXBlID0gbWF0Y2hbM107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDI7IGkgPCA4OyBpKz0yKSB7XG4gICAgICAgICAgY2hhbm5lbCA9IG1hdGNoW2ldLCBpc1BlcmNlbnQgPSBtYXRjaFtpKzFdO1xuXG4gICAgICAgICAgaWYgKGlzUGVyY2VudCAhPT0gc2FtZVR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBDbGFtcCBhbmQgbm9ybWFsaXplIHZhbHVlc1xuICAgICAgICAgIGlmIChpc1BlcmNlbnQpIHtcbiAgICAgICAgICAgIGNoYW5uZWwgPSBjaGFubmVsID4gMTAwID8gMSA6IGNoYW5uZWwgLyAxMDA7XG4gICAgICAgICAgICBjaGFubmVsID0gY2hhbm5lbCA8ICAgMCA/IDAgOiBjaGFubmVsO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGFubmVsID0gY2hhbm5lbCA+IDI1NSA/IDEgOiBjaGFubmVsIC8gMjU1O1xuICAgICAgICAgICAgY2hhbm5lbCA9IGNoYW5uZWwgPCAgIDAgPyAwIDogY2hhbm5lbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXN1bHQucHVzaChjaGFubmVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC5wdXNoKGhhc0FscGhhID8gYWxwaGFDaGFubmVsIDogMS4wKTtcbiAgICAgIH0gZWxzZSBpZiAoKG1hdGNoID0gcmVIU0xBQ29sb3IuZXhlYyh2YWx1ZSkpKSB7XG4gICAgICAgIGhhc0FscGhhID0gbWF0Y2hbMV0sIGFscGhhQ2hhbm5lbCA9IHBhcnNlRmxvYXQobWF0Y2hbNV0pO1xuICAgICAgICByZXN1bHQgPSBIU0xBVG9SR0JBKG1hdGNoWzJdLCBtYXRjaFszXSwgbWF0Y2hbNF0sIHBhcnNlRmxvYXQoaGFzQWxwaGEgJiYgYWxwaGFDaGFubmVsID8gYWxwaGFDaGFubmVsIDogMS4wKSk7XG4gICAgICB9IGVsc2UgaWYgKChtYXRjaCA9IHJlSGV4NkNvbG9yLmV4ZWModmFsdWUpKSkge1xuICAgICAgICB2YXIgY29sb3JJbnQgPSBwYXJzZUludChtYXRjaFsxXSwgMTYpO1xuICAgICAgICByZXN1bHQgPSBbKChjb2xvckludCAmIDB4RkYwMDAwKSA+PiAxNikgLyAyNTUsICgoY29sb3JJbnQgJiAweDAwRkYwMCkgPj4gOCkgLyAyNTUsIChjb2xvckludCAmIDB4MDAwMEZGKSAvIDI1NSwgMS4wXTtcbiAgICAgIH0gZWxzZSBpZiAoKG1hdGNoID0gcmVIZXgzQ29sb3IuZXhlYyh2YWx1ZSkpKSB7XG4gICAgICAgIHZhciBoZXhTdHJpbmcgPSBcIiNcIiArIFttYXRjaFsxXSwgbWF0Y2hbMV0sIG1hdGNoWzJdLCBtYXRjaFsyXSwgbWF0Y2hbM10sIG1hdGNoWzNdXS5qb2luKFwiXCIpO1xuICAgICAgICByZXN1bHQgPSBjb2xvclN0cmluZ1RvVmVjNChoZXhTdHJpbmcpO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZS50b0xvd2VyQ2FzZSgpIGluIGNvbG9yS2V5d29yZHMpIHtcbiAgICAgICAgcmVzdWx0ID0gY29sb3JTdHJpbmdUb1ZlYzQoY29sb3JLZXl3b3Jkc1t2YWx1ZS50b0xvd2VyQ2FzZSgpXSk7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IFwidHJhbnNwYXJlbnRcIikge1xuICAgICAgICByZXN1bHQgPSBbMCwgMCwgMCwgMF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBDb2xvciBrZXl3b3JkcyBub3QgeWV0IGltcGxlbWVudGVkLCBpZSBcIm9yYW5nZVwiLCByZXR1cm4gaG90IHBpbmtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbG9yVmVjVG9TdHJpbmcodmVjNCkge1xuICAgICAgcmV0dXJuIFwicmdiYShcIiArICh2ZWM0WzBdICogMjU1KSArIFwiLCBcIiArICh2ZWM0WzFdICogMjU1KSArIFwiLCBcIiArICh2ZWM0WzJdICogMjU1KSArIFwiLCBcIiArIHBhcnNlRmxvYXQodmVjNFszXSkgKyBcIilcIjtcbiAgICB9XG5cbiAgICB2YXIgY29sb3JLZXl3b3JkcyA9IHtcbiAgICAgIGFsaWNlYmx1ZTogICAgICAgICAgICBcIiNmMGY4ZmZcIixcbiAgICAgIGFudGlxdWV3aGl0ZTogICAgICAgICBcIiNmYWViZDdcIixcbiAgICAgIGFxdWE6ICAgICAgICAgICAgICAgICBcIiMwMGZmZmZcIixcbiAgICAgIGFxdWFtYXJpbmU6ICAgICAgICAgICBcIiM3ZmZmZDRcIixcbiAgICAgIGF6dXJlOiAgICAgICAgICAgICAgICBcIiNmMGZmZmZcIixcbiAgICAgIGJlaWdlOiAgICAgICAgICAgICAgICBcIiNmNWY1ZGNcIixcbiAgICAgIGJpc3F1ZTogICAgICAgICAgICAgICBcIiNmZmU0YzRcIixcbiAgICAgIGJsYWNrOiAgICAgICAgICAgICAgICBcIiMwMDAwMDBcIixcbiAgICAgIGJsYW5jaGVkYWxtb25kOiAgICAgICBcIiNmZmViY2RcIixcbiAgICAgIGJsdWU6ICAgICAgICAgICAgICAgICBcIiMwMDAwZmZcIixcbiAgICAgIGJsdWV2aW9sZXQ6ICAgICAgICAgICBcIiM4YTJiZTJcIixcbiAgICAgIGJyb3duOiAgICAgICAgICAgICAgICBcIiNhNTJhMmFcIixcbiAgICAgIGJ1cmx5d29vZDogICAgICAgICAgICBcIiNkZWI4ODdcIixcbiAgICAgIGNhZGV0Ymx1ZTogICAgICAgICAgICBcIiM1ZjllYTBcIixcbiAgICAgIGNoYXJ0cmV1c2U6ICAgICAgICAgICBcIiM3ZmZmMDBcIixcbiAgICAgIGNob2NvbGF0ZTogICAgICAgICAgICBcIiNkMjY5MWVcIixcbiAgICAgIGNvcmFsOiAgICAgICAgICAgICAgICBcIiNmZjdmNTBcIixcbiAgICAgIGNvcm5mbG93ZXJibHVlOiAgICAgICBcIiM2NDk1ZWRcIixcbiAgICAgIGNvcm5zaWxrOiAgICAgICAgICAgICBcIiNmZmY4ZGNcIixcbiAgICAgIGNyaW1zb246ICAgICAgICAgICAgICBcIiNkYzE0M2NcIixcbiAgICAgIGN5YW46ICAgICAgICAgICAgICAgICBcIiMwMGZmZmZcIixcbiAgICAgIGRhcmtibHVlOiAgICAgICAgICAgICBcIiMwMDAwOGJcIixcbiAgICAgIGRhcmtjeWFuOiAgICAgICAgICAgICBcIiMwMDhiOGJcIixcbiAgICAgIGRhcmtnb2xkZW5yb2Q6ICAgICAgICBcIiNiODg2MGJcIixcbiAgICAgIGRhcmtncmF5OiAgICAgICAgICAgICBcIiNhOWE5YTlcIixcbiAgICAgIGRhcmtncmVlbjogICAgICAgICAgICBcIiMwMDY0MDBcIixcbiAgICAgIGRhcmtraGFraTogICAgICAgICAgICBcIiNiZGI3NmJcIixcbiAgICAgIGRhcmttYWdlbnRhOiAgICAgICAgICBcIiM4YjAwOGJcIixcbiAgICAgIGRhcmtvbGl2ZWdyZWVuOiAgICAgICBcIiM1NTZiMmZcIixcbiAgICAgIGRhcmtvcmFuZ2U6ICAgICAgICAgICBcIiNmZjhjMDBcIixcbiAgICAgIGRhcmtvcmNoaWQ6ICAgICAgICAgICBcIiM5OTMyY2NcIixcbiAgICAgIGRhcmtyZWQ6ICAgICAgICAgICAgICBcIiM4YjAwMDBcIixcbiAgICAgIGRhcmtzYWxtb246ICAgICAgICAgICBcIiNlOTk2N2FcIixcbiAgICAgIGRhcmtzZWFncmVlbjogICAgICAgICBcIiM4ZmJjOGZcIixcbiAgICAgIGRhcmtzbGF0ZWJsdWU6ICAgICAgICBcIiM0ODNkOGJcIixcbiAgICAgIGRhcmtzbGF0ZWdyYXk6ICAgICAgICBcIiMyZjRmNGZcIixcbiAgICAgIGRhcmt0dXJxdW9pc2U6ICAgICAgICBcIiMwMGNlZDFcIixcbiAgICAgIGRhcmt2aW9sZXQ6ICAgICAgICAgICBcIiM5NDAwZDNcIixcbiAgICAgIGRlZXBwaW5rOiAgICAgICAgICAgICBcIiNmZjE0OTNcIixcbiAgICAgIGRlZXBza3libHVlOiAgICAgICAgICBcIiMwMGJmZmZcIixcbiAgICAgIGRpbWdyYXk6ICAgICAgICAgICAgICBcIiM2OTY5NjlcIixcbiAgICAgIGRvZGdlcmJsdWU6ICAgICAgICAgICBcIiMxZTkwZmZcIixcbiAgICAgIGZpcmVicmljazogICAgICAgICAgICBcIiNiMjIyMjJcIixcbiAgICAgIGZsb3JhbHdoaXRlOiAgICAgICAgICBcIiNmZmZhZjBcIixcbiAgICAgIGZvcmVzdGdyZWVuOiAgICAgICAgICBcIiMyMjhiMjJcIixcbiAgICAgIGZ1Y2hzaWE6ICAgICAgICAgICAgICBcIiNmZjAwZmZcIixcbiAgICAgIGdhaW5zYm9ybzogICAgICAgICAgICBcIiNkY2RjZGNcIixcbiAgICAgIGdob3N0d2hpdGU6ICAgICAgICAgICBcIiNmOGY4ZmZcIixcbiAgICAgIGdvbGQ6ICAgICAgICAgICAgICAgICBcIiNmZmQ3MDBcIixcbiAgICAgIGdvbGRlbnJvZDogICAgICAgICAgICBcIiNkYWE1MjBcIixcbiAgICAgIGdyYXk6ICAgICAgICAgICAgICAgICBcIiM4MDgwODBcIixcbiAgICAgIGdyZWVuOiAgICAgICAgICAgICAgICBcIiMwMDgwMDBcIixcbiAgICAgIGdyZWVueWVsbG93OiAgICAgICAgICBcIiNhZGZmMmZcIixcbiAgICAgIGdyZXk6ICAgICAgICAgICAgICAgICBcIiM4MDgwODBcIixcbiAgICAgIGhvbmV5ZGV3OiAgICAgICAgICAgICBcIiNmMGZmZjBcIixcbiAgICAgIGhvdHBpbms6ICAgICAgICAgICAgICBcIiNmZjY5YjRcIixcbiAgICAgIGluZGlhbnJlZDogICAgICAgICAgICBcIiNjZDVjNWNcIixcbiAgICAgIGluZGlnbzogICAgICAgICAgICAgICBcIiM0YjAwODJcIixcbiAgICAgIGl2b3J5OiAgICAgICAgICAgICAgICBcIiNmZmZmZjBcIixcbiAgICAgIGtoYWtpOiAgICAgICAgICAgICAgICBcIiNmMGU2OGNcIixcbiAgICAgIGxhdmVuZGVyOiAgICAgICAgICAgICBcIiNlNmU2ZmFcIixcbiAgICAgIGxhdmVuZGVyYmx1c2g6ICAgICAgICBcIiNmZmYwZjVcIixcbiAgICAgIGxhd25ncmVlbjogICAgICAgICAgICBcIiM3Y2ZjMDBcIixcbiAgICAgIGxlbW9uY2hpZmZvbjogICAgICAgICBcIiNmZmZhY2RcIixcbiAgICAgIGxpZ2h0Ymx1ZTogICAgICAgICAgICBcIiNhZGQ4ZTZcIixcbiAgICAgIGxpZ2h0Y29yYWw6ICAgICAgICAgICBcIiNmMDgwODBcIixcbiAgICAgIGxpZ2h0Y3lhbjogICAgICAgICAgICBcIiNlMGZmZmZcIixcbiAgICAgIGxpZ2h0Z29sZGVucm9keWVsbG93OiBcIiNmYWZhZDJcIixcbiAgICAgIGxpZ2h0Z3JleTogICAgICAgICAgICBcIiNkM2QzZDNcIixcbiAgICAgIGxpZ2h0Z3JlZW46ICAgICAgICAgICBcIiM5MGVlOTBcIixcbiAgICAgIGxpZ2h0cGluazogICAgICAgICAgICBcIiNmZmI2YzFcIixcbiAgICAgIGxpZ2h0c2FsbW9uOiAgICAgICAgICBcIiNmZmEwN2FcIixcbiAgICAgIGxpZ2h0c2VhZ3JlZW46ICAgICAgICBcIiMyMGIyYWFcIixcbiAgICAgIGxpZ2h0c2t5Ymx1ZTogICAgICAgICBcIiM4N2NlZmFcIixcbiAgICAgIGxpZ2h0c2xhdGVncmF5OiAgICAgICBcIiM3Nzg4OTlcIixcbiAgICAgIGxpZ2h0c3RlZWxibHVlOiAgICAgICBcIiNiMGM0ZGVcIixcbiAgICAgIGxpZ2h0eWVsbG93OiAgICAgICAgICBcIiNmZmZmZTBcIixcbiAgICAgIGxpbWU6ICAgICAgICAgICAgICAgICBcIiMwMGZmMDBcIixcbiAgICAgIGxpbWVncmVlbjogICAgICAgICAgICBcIiMzMmNkMzJcIixcbiAgICAgIGxpbmVuOiAgICAgICAgICAgICAgICBcIiNmYWYwZTZcIixcbiAgICAgIG1hZ2VudGE6ICAgICAgICAgICAgICBcIiNmZjAwZmZcIixcbiAgICAgIG1hcm9vbjogICAgICAgICAgICAgICBcIiM4MDAwMDBcIixcbiAgICAgIG1lZGl1bWFxdWFtYXJpbmU6ICAgICBcIiM2NmNkYWFcIixcbiAgICAgIG1lZGl1bWJsdWU6ICAgICAgICAgICBcIiMwMDAwY2RcIixcbiAgICAgIG1lZGl1bW9yY2hpZDogICAgICAgICBcIiNiYTU1ZDNcIixcbiAgICAgIG1lZGl1bXB1cnBsZTogICAgICAgICBcIiM5MzcwZDhcIixcbiAgICAgIG1lZGl1bXNlYWdyZWVuOiAgICAgICBcIiMzY2IzNzFcIixcbiAgICAgIG1lZGl1bXNsYXRlYmx1ZTogICAgICBcIiM3YjY4ZWVcIixcbiAgICAgIG1lZGl1bXNwcmluZ2dyZWVuOiAgICBcIiMwMGZhOWFcIixcbiAgICAgIG1lZGl1bXR1cnF1b2lzZTogICAgICBcIiM0OGQxY2NcIixcbiAgICAgIG1lZGl1bXZpb2xldHJlZDogICAgICBcIiNjNzE1ODVcIixcbiAgICAgIG1pZG5pZ2h0Ymx1ZTogICAgICAgICBcIiMxOTE5NzBcIixcbiAgICAgIG1pbnRjcmVhbTogICAgICAgICAgICBcIiNmNWZmZmFcIixcbiAgICAgIG1pc3R5cm9zZTogICAgICAgICAgICBcIiNmZmU0ZTFcIixcbiAgICAgIG1vY2Nhc2luOiAgICAgICAgICAgICBcIiNmZmU0YjVcIixcbiAgICAgIG5hdmFqb3doaXRlOiAgICAgICAgICBcIiNmZmRlYWRcIixcbiAgICAgIG5hdnk6ICAgICAgICAgICAgICAgICBcIiMwMDAwODBcIixcbiAgICAgIG9sZGxhY2U6ICAgICAgICAgICAgICBcIiNmZGY1ZTZcIixcbiAgICAgIG9saXZlOiAgICAgICAgICAgICAgICBcIiM4MDgwMDBcIixcbiAgICAgIG9saXZlZHJhYjogICAgICAgICAgICBcIiM2YjhlMjNcIixcbiAgICAgIG9yYW5nZTogICAgICAgICAgICAgICBcIiNmZmE1MDBcIixcbiAgICAgIG9yYW5nZXJlZDogICAgICAgICAgICBcIiNmZjQ1MDBcIixcbiAgICAgIG9yY2hpZDogICAgICAgICAgICAgICBcIiNkYTcwZDZcIixcbiAgICAgIHBhbGVnb2xkZW5yb2Q6ICAgICAgICBcIiNlZWU4YWFcIixcbiAgICAgIHBhbGVncmVlbjogICAgICAgICAgICBcIiM5OGZiOThcIixcbiAgICAgIHBhbGV0dXJxdW9pc2U6ICAgICAgICBcIiNhZmVlZWVcIixcbiAgICAgIHBhbGV2aW9sZXRyZWQ6ICAgICAgICBcIiNkODcwOTNcIixcbiAgICAgIHBhcGF5YXdoaXA6ICAgICAgICAgICBcIiNmZmVmZDVcIixcbiAgICAgIHBlYWNocHVmZjogICAgICAgICAgICBcIiNmZmRhYjlcIixcbiAgICAgIHBlcnU6ICAgICAgICAgICAgICAgICBcIiNjZDg1M2ZcIixcbiAgICAgIHBpbms6ICAgICAgICAgICAgICAgICBcIiNmZmMwY2JcIixcbiAgICAgIHBsdW06ICAgICAgICAgICAgICAgICBcIiNkZGEwZGRcIixcbiAgICAgIHBvd2RlcmJsdWU6ICAgICAgICAgICBcIiNiMGUwZTZcIixcbiAgICAgIHB1cnBsZTogICAgICAgICAgICAgICBcIiM4MDAwODBcIixcbiAgICAgIHJlZDogICAgICAgICAgICAgICAgICBcIiNmZjAwMDBcIixcbiAgICAgIHJvc3licm93bjogICAgICAgICAgICBcIiNiYzhmOGZcIixcbiAgICAgIHJveWFsYmx1ZTogICAgICAgICAgICBcIiM0MTY5ZTFcIixcbiAgICAgIHNhZGRsZWJyb3duOiAgICAgICAgICBcIiM4YjQ1MTNcIixcbiAgICAgIHNhbG1vbjogICAgICAgICAgICAgICBcIiNmYTgwNzJcIixcbiAgICAgIHNhbmR5YnJvd246ICAgICAgICAgICBcIiNmNGE0NjBcIixcbiAgICAgIHNlYWdyZWVuOiAgICAgICAgICAgICBcIiMyZThiNTdcIixcbiAgICAgIHNlYXNoZWxsOiAgICAgICAgICAgICBcIiNmZmY1ZWVcIixcbiAgICAgIHNpZW5uYTogICAgICAgICAgICAgICBcIiNhMDUyMmRcIixcbiAgICAgIHNpbHZlcjogICAgICAgICAgICAgICBcIiNjMGMwYzBcIixcbiAgICAgIHNreWJsdWU6ICAgICAgICAgICAgICBcIiM4N2NlZWJcIixcbiAgICAgIHNsYXRlYmx1ZTogICAgICAgICAgICBcIiM2YTVhY2RcIixcbiAgICAgIHNsYXRlZ3JheTogICAgICAgICAgICBcIiM3MDgwOTBcIixcbiAgICAgIHNub3c6ICAgICAgICAgICAgICAgICBcIiNmZmZhZmFcIixcbiAgICAgIHNwcmluZ2dyZWVuOiAgICAgICAgICBcIiMwMGZmN2ZcIixcbiAgICAgIHN0ZWVsYmx1ZTogICAgICAgICAgICBcIiM0NjgyYjRcIixcbiAgICAgIHRhbjogICAgICAgICAgICAgICAgICBcIiNkMmI0OGNcIixcbiAgICAgIHRlYWw6ICAgICAgICAgICAgICAgICBcIiMwMDgwODBcIixcbiAgICAgIHRoaXN0bGU6ICAgICAgICAgICAgICBcIiNkOGJmZDhcIixcbiAgICAgIHRvbWF0bzogICAgICAgICAgICAgICBcIiNmZjYzNDdcIixcbiAgICAgIHR1cnF1b2lzZTogICAgICAgICAgICBcIiM0MGUwZDBcIixcbiAgICAgIHZpb2xldDogICAgICAgICAgICAgICBcIiNlZTgyZWVcIixcbiAgICAgIHdoZWF0OiAgICAgICAgICAgICAgICBcIiNmNWRlYjNcIixcbiAgICAgIHdoaXRlOiAgICAgICAgICAgICAgICBcIiNmZmZmZmZcIixcbiAgICAgIHdoaXRlc21va2U6ICAgICAgICAgICBcIiNmNWY1ZjVcIixcbiAgICAgIHllbGxvdzogICAgICAgICAgICAgICBcIiNmZmZmMDBcIixcbiAgICAgIHllbGxvd2dyZWVuOiAgICAgICAgICBcIiM5YWNkMzJcIlxuICAgIH07XG5cbiAgICAvLyBNYWludGFpbiBkcmF3aW5nIHN0YXRlIHBhcmFtcyBkdXJpbmcgZ2wuc2F2ZSBhbmQgZ2wucmVzdG9yZS4gc2VlIHNhdmVEcmF3U3RhdGUoKSBhbmQgcmVzdG9yZURyYXdTdGF0ZSgpXG4gICAgdmFyIGRyYXdTdGF0ZSA9IHt9LCBkcmF3U3RhdGVTdGFjayA9IFtdO1xuXG4gICAgLy8gQSBmYXN0IHNpbXBsZSBzaGFsbG93IGNsb25lXG4gICAgZnVuY3Rpb24gY2xvbmVPYmplY3Qob2JqKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0ge307XG4gICAgICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2ldID0gb2JqW2ldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNhdmVEcmF3U3RhdGUoKSB7XG4gICAgICB2YXIgYmFrZWREcmF3U3RhdGUgPSB7XG4gICAgICAgIGZpbGxTdHlsZTogICAgICAgICAgICAgICAgW2RyYXdTdGF0ZS5maWxsU3R5bGVbMF0sICAgZHJhd1N0YXRlLmZpbGxTdHlsZVsxXSwgICBkcmF3U3RhdGUuZmlsbFN0eWxlWzJdLCAgIGRyYXdTdGF0ZS5maWxsU3R5bGVbM11dLFxuICAgICAgICBzdHJva2VTdHlsZTogICAgICAgICAgICAgIFtkcmF3U3RhdGUuc3Ryb2tlU3R5bGVbMF0sIGRyYXdTdGF0ZS5zdHJva2VTdHlsZVsxXSwgZHJhd1N0YXRlLnN0cm9rZVN0eWxlWzJdLCBkcmF3U3RhdGUuc3Ryb2tlU3R5bGVbM11dLFxuICAgICAgICBnbG9iYWxBbHBoYTogICAgICAgICAgICAgIGRyYXdTdGF0ZS5nbG9iYWxBbHBoYSxcbiAgICAgICAgZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uOiBkcmF3U3RhdGUuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uLFxuICAgICAgICBsaW5lQ2FwOiAgICAgICAgICAgICAgICAgIGRyYXdTdGF0ZS5saW5lQ2FwLFxuICAgICAgICBsaW5lSm9pbjogICAgICAgICAgICAgICAgIGRyYXdTdGF0ZS5saW5lSm9pbixcbiAgICAgICAgbGluZVdpZHRoOiAgICAgICAgICAgICAgICBkcmF3U3RhdGUubGluZVdpZHRoLFxuICAgICAgICBtaXRlckxpbWl0OiAgICAgICAgICAgICAgIGRyYXdTdGF0ZS5taXRlckxpbWl0LFxuICAgICAgICBzaGFkb3dDb2xvcjogICAgICAgICAgICAgIGRyYXdTdGF0ZS5zaGFkb3dDb2xvcixcbiAgICAgICAgc2hhZG93Qmx1cjogICAgICAgICAgICAgICBkcmF3U3RhdGUuc2hhZG93Qmx1cixcbiAgICAgICAgc2hhZG93T2Zmc2V0WDogICAgICAgICAgICBkcmF3U3RhdGUuc2hhZG93T2Zmc2V0WCxcbiAgICAgICAgc2hhZG93T2Zmc2V0WTogICAgICAgICAgICBkcmF3U3RhdGUuc2hhZG93T2Zmc2V0WSxcbiAgICAgICAgdGV4dEFsaWduOiAgICAgICAgICAgICAgICBkcmF3U3RhdGUudGV4dEFsaWduLFxuICAgICAgICBmb250OiAgICAgICAgICAgICAgICAgICAgIGRyYXdTdGF0ZS5mb250LFxuICAgICAgICB0ZXh0QmFzZWxpbmU6ICAgICAgICAgICAgIGRyYXdTdGF0ZS50ZXh0QmFzZWxpbmVcbiAgICAgIH07XG5cbiAgICAgIGRyYXdTdGF0ZVN0YWNrLnB1c2goYmFrZWREcmF3U3RhdGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc3RvcmVEcmF3U3RhdGUoKSB7XG4gICAgICBpZiAoZHJhd1N0YXRlU3RhY2subGVuZ3RoKSB7XG4gICAgICAgIGRyYXdTdGF0ZSA9IGRyYXdTdGF0ZVN0YWNrLnBvcCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFdlYkdMIHJlcXVpcmVzIGNvbG9ycyBhcyBhIHZlY3RvciB3aGlsZSBDYW52YXMyRCBzZXRzIGNvbG9ycyBhcyBhbiByZ2JhIHN0cmluZ1xuICAgIC8vIFRoZXNlIGdldHRlcnMgYW5kIHNldHRlcnMgc3RvcmUgdGhlIG9yaWdpbmFsIHJnYmEgc3RyaW5nIGFzIHdlbGwgYXMgY29udmVydCB0byBhIHZlY3RvclxuICAgIGRyYXdTdGF0ZS5maWxsU3R5bGUgPSBbMCwgMCwgMCwgMV07IC8vIGRlZmF1bHQgYmxhY2tcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShnbCwgXCJmaWxsU3R5bGVcIiwge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbG9yVmVjVG9TdHJpbmcoZHJhd1N0YXRlLmZpbGxTdHlsZSk7IH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGRyYXdTdGF0ZS5maWxsU3R5bGUgPSBjb2xvclN0cmluZ1RvVmVjNCh2YWx1ZSkgfHwgZHJhd1N0YXRlLmZpbGxTdHlsZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRyYXdTdGF0ZS5zdHJva2VTdHlsZSA9IFswLCAwLCAwLCAxXTsgLy8gZGVmYXVsdCBibGFja1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGdsLCBcInN0cm9rZVN0eWxlXCIsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBjb2xvclZlY1RvU3RyaW5nKGRyYXdTdGF0ZS5zdHJva2VTdHlsZSk7IH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGRyYXdTdGF0ZS5zdHJva2VTdHlsZSA9IGNvbG9yU3RyaW5nVG9WZWM0KHZhbHVlKSB8fCBkcmF3U3R5bGUuc3Ryb2tlU3R5bGU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBXZWJHTCBhbHJlYWR5IGhhcyBhIGxpbmVXaWR0aCgpIGZ1bmN0aW9uIGJ1dCBDYW52YXMyRCByZXF1aXJlcyBhIGxpbmVXaWR0aCBwcm9wZXJ0eVxuICAgIC8vIFN0b3JlIHRoZSBvcmlnaW5hbCBsaW5lV2lkdGgoKSBmdW5jdGlvbiBmb3IgbGF0ZXIgdXNlXG4gICAgZ2wuJGxpbmVXaWR0aCA9IGdsLmxpbmVXaWR0aDtcbiAgICBkcmF3U3RhdGUubGluZVdpZHRoID0gMS4wO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGdsLCBcImxpbmVXaWR0aFwiLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gZHJhd1N0YXRlLmxpbmVXaWR0aDsgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgZ2wuJGxpbmVXaWR0aCh2YWx1ZSk7XG4gICAgICAgIGRyYXdTdGF0ZS5saW5lV2lkdGggPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEN1cnJlbnRseSB1bnN1cHBvcnRlZCBhdHRyaWJ1dGVzIGFuZCB0aGVpciBkZWZhdWx0IHZhbHVlc1xuICAgIGRyYXdTdGF0ZS5saW5lQ2FwID0gXCJidXR0XCI7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZ2wsIFwibGluZUNhcFwiLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gZHJhd1N0YXRlLmxpbmVDYXA7IH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGRyYXdTdGF0ZS5saW5lQ2FwID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkcmF3U3RhdGUubGluZUpvaW4gPSBcIm1pdGVyXCI7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZ2wsIFwibGluZUpvaW5cIiwge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIGRyYXdTdGF0ZS5saW5lSm9pbjsgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgZHJhd1N0YXRlLmxpbmVKb2luID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkcmF3U3RhdGUubWl0ZXJMaW1pdCA9IDEwO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGdsLCBcIm1pdGVyTGltaXRcIiwge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIGRyYXdTdGF0ZS5taXRlckxpbWl0OyB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBkcmF3U3RhdGUubWl0ZXJMaW1pdCA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZHJhd1N0YXRlLnNoYWRvd09mZnNldFggPSAwO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGdsLCBcInNoYWRvd09mZnNldFhcIiwge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIGRyYXdTdGF0ZS5zaGFkb3dPZmZzZXRYOyB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBkcmF3U3RhdGUuc2hhZG93T2Zmc2V0WCA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZHJhd1N0YXRlLnNoYWRvd09mZnNldFkgPSAwO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGdsLCBcInNoYWRvd09mZnNldFlcIiwge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIGRyYXdTdGF0ZS5zaGFkb3dPZmZzZXRZOyB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBkcmF3U3RhdGUuc2hhZG93T2Zmc2V0WSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZHJhd1N0YXRlLnNoYWRvd0JsdXIgPSAwO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGdsLCBcInNoYWRvd0JsdXJcIiwge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIGRyYXdTdGF0ZS5zaGFkb3dCbHVyOyB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBkcmF3U3RhdGUuc2hhZG93Qmx1ciA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZHJhd1N0YXRlLnNoYWRvd0NvbG9yID0gXCJyZ2JhKDAsIDAsIDAsIDAuMClcIjtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShnbCwgXCJzaGFkb3dDb2xvclwiLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gZHJhd1N0YXRlLnNoYWRvd0NvbG9yOyB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBkcmF3U3RhdGUuc2hhZG93Q29sb3IgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRyYXdTdGF0ZS5mb250ID0gXCIxMHB4IHNhbnMtc2VyaWZcIjtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShnbCwgXCJmb250XCIsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBkcmF3U3RhdGUuZm9udDsgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgdGV4dEN0eC5mb250ID0gdmFsdWU7XG4gICAgICAgIGRyYXdTdGF0ZS5mb250ID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkcmF3U3RhdGUudGV4dEFsaWduID0gXCJzdGFydFwiO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGdsLCBcInRleHRBbGlnblwiLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gZHJhd1N0YXRlLnRleHRBbGlnbjsgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgZHJhd1N0YXRlLnRleHRBbGlnbiA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZHJhd1N0YXRlLnRleHRCYXNlbGluZSA9IFwiYWxwaGFiZXRpY1wiO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGdsLCBcInRleHRCYXNlbGluZVwiLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gZHJhd1N0YXRlLnRleHRCYXNlbGluZTsgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgZHJhd1N0YXRlLnRleHRCYXNlbGluZSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gVGhpcyBhdHRyaWJ1dGUgd2lsbCBuZWVkIHRvIGNvbnRyb2wgZ2xvYmFsIGFscGhhIG9mIG9iamVjdHMgZHJhd24uXG4gICAgZHJhd1N0YXRlLmdsb2JhbEFscGhhID0gMS4wO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGdsLCBcImdsb2JhbEFscGhhXCIsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBkcmF3U3RhdGUuZ2xvYmFsQWxwaGE7IH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGRyYXdTdGF0ZS5nbG9iYWxBbHBoYSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gVGhpcyBhdHRyaWJ1dGUgd2lsbCBuZWVkIHRvIHNldCB0aGUgZ2wuYmxlbmRGdW5jIG1vZGVcbiAgICBkcmF3U3RhdGUuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJzb3VyY2Utb3ZlclwiO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGdsLCBcImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvblwiLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gZHJhd1N0YXRlLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbjsgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgZHJhd1N0YXRlLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gTmVlZCBhIHNvbHV0aW9uIGZvciBkcmF3aW5nIHRleHQgdGhhdCBpc250IHN0dXBpZCBzbG93XG4gICAgZ2wuZmlsbFRleHQgPSBmdW5jdGlvbiBmaWxsVGV4dCh0ZXh0LCB4LCB5KSB7XG4gICAgICAvKlxuICAgICAgIHRleHRDdHguY2xlYXJSZWN0KDAsIDAsIGdsMmQuY2FudmFzLndpZHRoLCBnbDJkLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgIHRleHRDdHguZmlsbFN0eWxlID0gZ2wuZmlsbFN0eWxlO1xuICAgICAgIHRleHRDdHguZmlsbFRleHQodGV4dCwgeCwgeSk7XG5cbiAgICAgICBnbC5kcmF3SW1hZ2UodGV4dENhbnZhcywgMCwgMCk7XG4gICAgICAgKi9cbiAgICB9O1xuXG4gICAgZ2wuc3Ryb2tlVGV4dCA9IGZ1bmN0aW9uIHN0cm9rZVRleHQoKSB7fTtcblxuICAgIGdsLm1lYXN1cmVUZXh0ID0gZnVuY3Rpb24gbWVhc3VyZVRleHQoKSB7IHJldHVybiAxOyB9O1xuXG4gICAgdmFyIHRlbXBDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB2YXIgdGVtcEN0eCA9IHRlbXBDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIGdsLnNhdmUgPSBmdW5jdGlvbiBzYXZlKCkge1xuICAgICAgZ2wyZC50cmFuc2Zvcm0ucHVzaE1hdHJpeCgpO1xuICAgICAgc2F2ZURyYXdTdGF0ZSgpO1xuICAgIH07XG5cbiAgICBnbC5yZXN0b3JlID0gZnVuY3Rpb24gcmVzdG9yZSgpIHtcbiAgICAgIGdsMmQudHJhbnNmb3JtLnBvcE1hdHJpeCgpO1xuICAgICAgcmVzdG9yZURyYXdTdGF0ZSgpO1xuICAgIH07XG5cbiAgICBnbC50cmFuc2xhdGUgPSBmdW5jdGlvbiB0cmFuc2xhdGUoeCwgeSkge1xuICAgICAgZ2wyZC50cmFuc2Zvcm0udHJhbnNsYXRlKHgsIHkpO1xuICAgIH07XG5cbiAgICBnbC5yb3RhdGUgPSBmdW5jdGlvbiByb3RhdGUoYSkge1xuICAgICAgZ2wyZC50cmFuc2Zvcm0ucm90YXRlKGEpO1xuICAgIH07XG5cbiAgICBnbC5zY2FsZSA9IGZ1bmN0aW9uIHNjYWxlKHgsIHkpIHtcbiAgICAgIGdsMmQudHJhbnNmb3JtLnNjYWxlKHgsIHkpO1xuICAgIH07XG5cbiAgICBnbC5jcmVhdGVJbWFnZURhdGEgPSBmdW5jdGlvbiBjcmVhdGVJbWFnZURhdGEod2lkdGgsIGhlaWdodCkge1xuICAgICAgcmV0dXJuIHRlbXBDdHguY3JlYXRlSW1hZ2VEYXRhKHdpZHRoLCBoZWlnaHQpO1xuICAgIH07XG5cbiAgICBnbC5nZXRJbWFnZURhdGEgPSBmdW5jdGlvbiBnZXRJbWFnZURhdGEoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgdmFyIGRhdGEgPSB0ZW1wQ3R4LmNyZWF0ZUltYWdlRGF0YSh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgIHZhciBidWZmZXIgPSBuZXcgVWludDhBcnJheSh3aWR0aCpoZWlnaHQqNCk7XG4gICAgICBnbC5yZWFkUGl4ZWxzKHgsIHksIHdpZHRoLCBoZWlnaHQsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIGJ1ZmZlcik7XG4gICAgICB2YXIgdz13aWR0aCo0LCBoPWhlaWdodDtcbiAgICAgIGZvciAodmFyIGk9MCwgbWF4ST1oLzI7IGk8bWF4STsgKytpKSB7XG4gICAgICAgIGZvciAodmFyIGo9MCwgbWF4Sj13OyBqPG1heEo7ICsraikge1xuICAgICAgICAgIHZhciBpbmRleDEgPSBpICogdyArIGo7XG4gICAgICAgICAgdmFyIGluZGV4MiA9IChoLWktMSkgKiB3ICsgajtcbiAgICAgICAgICBkYXRhLmRhdGFbaW5kZXgxXSA9IGJ1ZmZlcltpbmRleDJdO1xuICAgICAgICAgIGRhdGEuZGF0YVtpbmRleDJdID0gYnVmZmVyW2luZGV4MV07XG4gICAgICAgIH0gLy9mb3JcbiAgICAgIH0gLy9mb3JcblxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfTtcblxuICAgIGdsLnB1dEltYWdlRGF0YSA9IGZ1bmN0aW9uIHB1dEltYWdlRGF0YShpbWFnZURhdGEsIHgsIHkpIHtcbiAgICAgIGdsLmRyYXdJbWFnZShpbWFnZURhdGEsIHgsIHkpO1xuICAgIH07XG5cbiAgICBnbC50cmFuc2Zvcm0gPSBmdW5jdGlvbiB0cmFuc2Zvcm0obTExLCBtMTIsIG0yMSwgbTIyLCBkeCwgZHkpIHtcbiAgICAgIHZhciBtID0gZ2wyZC50cmFuc2Zvcm0ubV9zdGFja1tnbDJkLnRyYW5zZm9ybS5jX3N0YWNrXTtcblxuICAgICAgbVswXSAqPSBtMTE7XG4gICAgICBtWzFdICo9IG0yMTtcbiAgICAgIG1bMl0gKj0gZHg7XG4gICAgICBtWzNdICo9IG0xMjtcbiAgICAgIG1bNF0gKj0gbTIyO1xuICAgICAgbVs1XSAqPSBkeTtcbiAgICAgIG1bNl0gPSAwO1xuICAgICAgbVs3XSA9IDA7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHNlbmRUcmFuc2Zvcm1TdGFjayhzcCkge1xuICAgICAgdmFyIHN0YWNrID0gZ2wyZC50cmFuc2Zvcm0ubV9zdGFjaztcbiAgICAgIGZvciAodmFyIGkgPSAwLCBtYXhJID0gZ2wyZC50cmFuc2Zvcm0uY19zdGFjayArIDE7IGkgPCBtYXhJOyArK2kpIHtcbiAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDNmdihzcC51VHJhbnNmb3Jtc1tpXSwgZmFsc2UsIHN0YWNrW21heEktMS1pXSk7XG4gICAgICB9IC8vZm9yXG4gICAgfVxuXG4gICAgZ2wuc2V0VHJhbnNmb3JtID0gZnVuY3Rpb24gc2V0VHJhbnNmb3JtKG0xMSwgbTEyLCBtMjEsIG0yMiwgZHgsIGR5KSB7XG4gICAgICBnbDJkLnRyYW5zZm9ybS5zZXRJZGVudGl0eSgpO1xuICAgICAgZ2wudHJhbnNmb3JtLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIGdsLmZpbGxSZWN0ID0gZnVuY3Rpb24gZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgdmFyIHRyYW5zZm9ybSA9IGdsMmQudHJhbnNmb3JtO1xuICAgICAgdmFyIHNoYWRlclByb2dyYW0gPSBnbDJkLmluaXRTaGFkZXJzKHRyYW5zZm9ybS5jX3N0YWNrKzIsMCk7XG5cbiAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCByZWN0VmVydGV4UG9zaXRpb25CdWZmZXIpO1xuICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihzaGFkZXJQcm9ncmFtLnZlcnRleFBvc2l0aW9uQXR0cmlidXRlLCA0LCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xuXG4gICAgICB0cmFuc2Zvcm0ucHVzaE1hdHJpeCgpO1xuXG4gICAgICB0cmFuc2Zvcm0udHJhbnNsYXRlKHgsIHkpO1xuICAgICAgdHJhbnNmb3JtLnNjYWxlKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgICBzZW5kVHJhbnNmb3JtU3RhY2soc2hhZGVyUHJvZ3JhbSk7XG5cbiAgICAgIGdsLnVuaWZvcm00ZihzaGFkZXJQcm9ncmFtLnVDb2xvciwgZHJhd1N0YXRlLmZpbGxTdHlsZVswXSwgZHJhd1N0YXRlLmZpbGxTdHlsZVsxXSwgZHJhd1N0YXRlLmZpbGxTdHlsZVsyXSwgZHJhd1N0YXRlLmZpbGxTdHlsZVszXSk7XG5cbiAgICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVfRkFOLCAwLCA0KTtcblxuICAgICAgdHJhbnNmb3JtLnBvcE1hdHJpeCgpO1xuICAgIH07XG5cbiAgICBnbC5zdHJva2VSZWN0ID0gZnVuY3Rpb24gc3Ryb2tlUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICB2YXIgdHJhbnNmb3JtID0gZ2wyZC50cmFuc2Zvcm07XG4gICAgICB2YXIgc2hhZGVyUHJvZ3JhbSA9IGdsMmQuaW5pdFNoYWRlcnModHJhbnNmb3JtLmNfc3RhY2sgKyAyLDApO1xuXG4gICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgcmVjdFZlcnRleFBvc2l0aW9uQnVmZmVyKTtcbiAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoc2hhZGVyUHJvZ3JhbS52ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZSwgNCwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcblxuICAgICAgdHJhbnNmb3JtLnB1c2hNYXRyaXgoKTtcblxuICAgICAgdHJhbnNmb3JtLnRyYW5zbGF0ZSh4LCB5KTtcbiAgICAgIHRyYW5zZm9ybS5zY2FsZSh3aWR0aCwgaGVpZ2h0KTtcblxuICAgICAgc2VuZFRyYW5zZm9ybVN0YWNrKHNoYWRlclByb2dyYW0pO1xuXG4gICAgICBnbC51bmlmb3JtNGYoc2hhZGVyUHJvZ3JhbS51Q29sb3IsIGRyYXdTdGF0ZS5zdHJva2VTdHlsZVswXSwgZHJhd1N0YXRlLnN0cm9rZVN0eWxlWzFdLCBkcmF3U3RhdGUuc3Ryb2tlU3R5bGVbMl0sIGRyYXdTdGF0ZS5zdHJva2VTdHlsZVszXSk7XG5cbiAgICAgIGdsLmRyYXdBcnJheXMoZ2wuTElORV9MT09QLCAwLCA0KTtcblxuICAgICAgdHJhbnNmb3JtLnBvcE1hdHJpeCgpO1xuICAgIH07XG5cbiAgICBnbC5jbGVhclJlY3QgPSBmdW5jdGlvbiBjbGVhclJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCkge307XG5cbiAgICB2YXIgc3ViUGF0aHMgPSBbXTtcblxuICAgIGZ1bmN0aW9uIFN1YlBhdGgoeCwgeSkge1xuICAgICAgdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMudmVydHMgPSBbeCwgeSwgMCwgMF07XG4gICAgfVxuXG4gICAgLy8gRW1wdHkgdGhlIGxpc3Qgb2Ygc3VicGF0aHMgc28gdGhhdCB0aGUgY29udGV4dCBvbmNlIGFnYWluIGhhcyB6ZXJvIHN1YnBhdGhzXG4gICAgZ2wuYmVnaW5QYXRoID0gZnVuY3Rpb24gYmVnaW5QYXRoKCkge1xuICAgICAgc3ViUGF0aHMubGVuZ3RoID0gMDtcbiAgICB9O1xuXG4gICAgLy8gTWFyayBsYXN0IHN1YnBhdGggYXMgY2xvc2VkIGFuZCBjcmVhdGUgYSBuZXcgc3VicGF0aCB3aXRoIHRoZSBzYW1lIHN0YXJ0aW5nIHBvaW50IGFzIHRoZSBwcmV2aW91cyBzdWJwYXRoXG4gICAgZ2wuY2xvc2VQYXRoID0gZnVuY3Rpb24gY2xvc2VQYXRoKCkge1xuICAgICAgaWYgKHN1YlBhdGhzLmxlbmd0aCkge1xuICAgICAgICAvLyBNYXJrIGxhc3Qgc3VicGF0aCBjbG9zZWQuXG4gICAgICAgIHZhciBwcmV2UGF0aCA9IHN1YlBhdGhzW3N1YlBhdGhzLmxlbmd0aCAtMV0sIHN0YXJ0WCA9IHByZXZQYXRoLnZlcnRzWzBdLCBzdGFydFkgPSBwcmV2UGF0aC52ZXJ0c1sxXTtcbiAgICAgICAgcHJldlBhdGguY2xvc2VkID0gdHJ1ZTtcblxuICAgICAgICAvLyBDcmVhdGUgbmV3IHN1YnBhdGggdXNpbmcgdGhlIHN0YXJ0aW5nIHBvc2l0aW9uIG9mIHByZXZpb3VzIHN1YnBhdGhcbiAgICAgICAgdmFyIG5ld1BhdGggPSBuZXcgU3ViUGF0aChzdGFydFgsIHN0YXJ0WSk7XG4gICAgICAgIHN1YlBhdGhzLnB1c2gobmV3UGF0aCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIENyZWF0ZSBhIG5ldyBzdWJwYXRoIHdpdGggdGhlIHNwZWNpZmllZCBwb2ludCBhcyBpdHMgZmlyc3QgKGFuZCBvbmx5KSBwb2ludFxuICAgIGdsLm1vdmVUbyA9IGZ1bmN0aW9uIG1vdmVUbyh4LCB5KSB7XG4gICAgICBzdWJQYXRocy5wdXNoKG5ldyBTdWJQYXRoKHgsIHkpKTtcbiAgICB9O1xuXG4gICAgZ2wubGluZVRvID0gZnVuY3Rpb24gbGluZVRvKHgsIHkpIHtcbiAgICAgIGlmIChzdWJQYXRocy5sZW5ndGgpIHtcbiAgICAgICAgc3ViUGF0aHNbc3ViUGF0aHMubGVuZ3RoIC0xXS52ZXJ0cy5wdXNoKHgsIHksIDAsIDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IHN1YnBhdGggaWYgbm9uZSBjdXJyZW50bHkgZXhpc3RcbiAgICAgICAgZ2wubW92ZVRvKHgsIHkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBnbC5xdWFkcmF0aWNDdXJ2ZVRvID0gZnVuY3Rpb24gcXVhZHJhdGljQ3VydmVUbyhjcDF4LCBjcDF5LCB4LCB5KSB7fTtcblxuICAgIGdsLmJlemllckN1cnZlVG8gPSBmdW5jdGlvbiBiZXppZXJDdXJ2ZVRvKGNwMXgsIGNwMXksIGNwMngsIGNwMnksIHgsIHkpIHt9O1xuXG4gICAgZ2wuYXJjVG8gPSBmdW5jdGlvbiBhcmNUbygpIHt9O1xuXG4gICAgLy8gQWRkcyBhIGNsb3NlZCByZWN0IHN1YnBhdGggYW5kIGNyZWF0ZXMgYSBuZXcgc3VicGF0aFxuICAgIGdsLnJlY3QgPSBmdW5jdGlvbiByZWN0KHgsIHksIHcsIGgpIHtcbiAgICAgIGdsLm1vdmVUbyh4LCB5KTtcbiAgICAgIGdsLmxpbmVUbyh4ICsgdywgeSk7XG4gICAgICBnbC5saW5lVG8oeCArIHcsIHkgKyBoKTtcbiAgICAgIGdsLmxpbmVUbyh4LCB5ICsgaCk7XG4gICAgICBnbC5jbG9zZVBhdGgoKTtcbiAgICB9O1xuXG4gICAgZ2wuYXJjID0gZnVuY3Rpb24gYXJjKHgsIHksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGFudGljbG9ja3dpc2UpIHt9O1xuXG4gICAgZnVuY3Rpb24gZmlsbFN1YlBhdGgoaW5kZXgpIHtcbiAgICAgIHZhciB0cmFuc2Zvcm0gPSBnbDJkLnRyYW5zZm9ybTtcbiAgICAgIHZhciBzaGFkZXJQcm9ncmFtID0gZ2wyZC5pbml0U2hhZGVycyh0cmFuc2Zvcm0uY19zdGFjayArIDIsMCk7XG5cbiAgICAgIHZhciBzdWJQYXRoID0gc3ViUGF0aHNbaW5kZXhdO1xuICAgICAgdmFyIHZlcnRzID0gc3ViUGF0aC52ZXJ0cztcblxuICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHBhdGhWZXJ0ZXhQb3NpdGlvbkJ1ZmZlcik7XG4gICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheSh2ZXJ0cyksIGdsLlNUQVRJQ19EUkFXKTtcblxuICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihzaGFkZXJQcm9ncmFtLnZlcnRleFBvc2l0aW9uQXR0cmlidXRlLCA0LCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xuXG4gICAgICB0cmFuc2Zvcm0ucHVzaE1hdHJpeCgpO1xuXG4gICAgICBzZW5kVHJhbnNmb3JtU3RhY2soc2hhZGVyUHJvZ3JhbSk7XG5cbiAgICAgIGdsLnVuaWZvcm00ZihzaGFkZXJQcm9ncmFtLnVDb2xvciwgZHJhd1N0YXRlLmZpbGxTdHlsZVswXSwgZHJhd1N0YXRlLmZpbGxTdHlsZVsxXSwgZHJhd1N0YXRlLmZpbGxTdHlsZVsyXSwgZHJhd1N0YXRlLmZpbGxTdHlsZVszXSk7XG5cbiAgICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVfRkFOLCAwLCB2ZXJ0cy5sZW5ndGgvNCk7XG5cbiAgICAgIHRyYW5zZm9ybS5wb3BNYXRyaXgoKTtcbiAgICB9XG5cbiAgICBnbC5maWxsID0gZnVuY3Rpb24gZmlsbCgpIHtcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBzdWJQYXRocy5sZW5ndGg7IGkrKykge1xuICAgICAgICBmaWxsU3ViUGF0aChpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gc3Ryb2tlU3ViUGF0aChpbmRleCkge1xuICAgICAgdmFyIHRyYW5zZm9ybSA9IGdsMmQudHJhbnNmb3JtO1xuICAgICAgdmFyIHNoYWRlclByb2dyYW0gPSBnbDJkLmluaXRTaGFkZXJzKHRyYW5zZm9ybS5jX3N0YWNrICsgMiwwKTtcblxuICAgICAgdmFyIHN1YlBhdGggPSBzdWJQYXRoc1tpbmRleF07XG4gICAgICB2YXIgdmVydHMgPSBzdWJQYXRoLnZlcnRzO1xuXG4gICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgcGF0aFZlcnRleFBvc2l0aW9uQnVmZmVyKTtcbiAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KHZlcnRzKSwgZ2wuU1RBVElDX0RSQVcpO1xuXG4gICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHNoYWRlclByb2dyYW0udmVydGV4UG9zaXRpb25BdHRyaWJ1dGUsIDQsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XG5cbiAgICAgIHRyYW5zZm9ybS5wdXNoTWF0cml4KCk7XG5cbiAgICAgIHNlbmRUcmFuc2Zvcm1TdGFjayhzaGFkZXJQcm9ncmFtKTtcblxuICAgICAgZ2wudW5pZm9ybTRmKHNoYWRlclByb2dyYW0udUNvbG9yLCBkcmF3U3RhdGUuc3Ryb2tlU3R5bGVbMF0sIGRyYXdTdGF0ZS5zdHJva2VTdHlsZVsxXSwgZHJhd1N0YXRlLnN0cm9rZVN0eWxlWzJdLCBkcmF3U3RhdGUuc3Ryb2tlU3R5bGVbM10pO1xuXG4gICAgICBpZiAoc3ViUGF0aC5jbG9zZWQpIHtcbiAgICAgICAgZ2wuZHJhd0FycmF5cyhnbC5MSU5FX0xPT1AsIDAsIHZlcnRzLmxlbmd0aC80KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdsLmRyYXdBcnJheXMoZ2wuTElORV9TVFJJUCwgMCwgdmVydHMubGVuZ3RoLzQpO1xuICAgICAgfVxuXG4gICAgICB0cmFuc2Zvcm0ucG9wTWF0cml4KCk7XG4gICAgfVxuXG4gICAgZ2wuc3Ryb2tlID0gZnVuY3Rpb24gc3Ryb2tlKCkge1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHN1YlBhdGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHN0cm9rZVN1YlBhdGgoaSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGdsLmNsaXAgPSBmdW5jdGlvbiBjbGlwKCkge307XG5cbiAgICBnbC5pc1BvaW50SW5QYXRoID0gZnVuY3Rpb24gaXNQb2ludEluUGF0aCgpIHt9O1xuXG4gICAgZ2wuZHJhd0ZvY3VzUmluZyA9IGZ1bmN0aW9uIGRyYXdGb2N1c1JpbmcoKSB7fTtcblxuXG5cbiAgICB2YXIgaW1hZ2VDYWNoZSA9IFtdLCB0ZXh0dXJlQ2FjaGUgPSBbXTtcblxuICAgIGZ1bmN0aW9uIFRleHR1cmUoaW1hZ2UpIHtcbiAgICAgIHRoaXMub2JqICAgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XG4gICAgICB0aGlzLmluZGV4ID0gdGV4dHVyZUNhY2hlLnB1c2godGhpcyk7XG5cbiAgICAgIGltYWdlQ2FjaGUucHVzaChpbWFnZSk7XG5cbiAgICAgIC8vIHdlIG1heSB3aXNoIHRvIGNvbnNpZGVyIHRpbGluZyBsYXJnZSBpbWFnZXMgbGlrZSB0aGlzIGluc3RlYWQgb2Ygc2NhbGluZyBhbmRcbiAgICAgIC8vIGFkanVzdCBhcHByb3ByaWF0ZWx5IChmbGlwIHRvIG5leHQgdGV4dHVyZSBzb3VyY2UgYW5kIHRpbGUgb2Zmc2V0KSB3aGVuIGRyYXdpbmdcbiAgICAgIGlmIChpbWFnZS53aWR0aCA+IGdsMmQubWF4VGV4dHVyZVNpemUgfHwgaW1hZ2UuaGVpZ2h0ID4gZ2wyZC5tYXhUZXh0dXJlU2l6ZSkge1xuICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcblxuICAgICAgICBjYW52YXMud2lkdGggID0gKGltYWdlLndpZHRoICA+IGdsMmQubWF4VGV4dHVyZVNpemUpID8gZ2wyZC5tYXhUZXh0dXJlU2l6ZSA6IGltYWdlLndpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gKGltYWdlLmhlaWdodCA+IGdsMmQubWF4VGV4dHVyZVNpemUpID8gZ2wyZC5tYXhUZXh0dXJlU2l6ZSA6IGltYWdlLmhlaWdodDtcblxuICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlLCAwLCAwLCBpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0LCAwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIGltYWdlID0gY2FudmFzO1xuICAgICAgfVxuXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLm9iaik7XG4gICAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGdsLlJHQkEsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIGltYWdlKTtcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLkNMQU1QX1RPX0VER0UpO1xuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTElORUFSKTtcblxuICAgICAgLy8gRW5hYmxlIE1pcCBtYXBwaW5nIG9uIHBvd2VyLW9mLTIgdGV4dHVyZXNcbiAgICAgIGlmIChpc1BPVChpbWFnZS53aWR0aCkgJiYgaXNQT1QoaW1hZ2UuaGVpZ2h0KSkge1xuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTElORUFSX01JUE1BUF9MSU5FQVIpO1xuICAgICAgICBnbC5nZW5lcmF0ZU1pcG1hcChnbC5URVhUVVJFXzJEKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5MSU5FQVIpO1xuICAgICAgfVxuXG4gICAgICAvLyBVbmJpbmQgdGV4dHVyZVxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbnVsbCk7XG4gICAgfVxuXG4gICAgZ2wuZHJhd0ltYWdlID0gZnVuY3Rpb24gZHJhd0ltYWdlKGltYWdlLCBhLCBiLCBjLCBkLCBlLCBmLCBnLCBoKSB7XG4gICAgICB2YXIgdHJhbnNmb3JtID0gZ2wyZC50cmFuc2Zvcm07XG5cbiAgICAgIHRyYW5zZm9ybS5wdXNoTWF0cml4KCk7XG5cbiAgICAgIHZhciBzTWFzayA9IHNoYWRlck1hc2sudGV4dHVyZTtcbiAgICAgIHZhciBkb0Nyb3AgPSBmYWxzZTtcblxuICAgICAgLy9kcmF3SW1hZ2UoaW1hZ2UsIGR4LCBkeSlcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIHRyYW5zZm9ybS50cmFuc2xhdGUoYSwgYik7XG4gICAgICAgIHRyYW5zZm9ybS5zY2FsZShpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgLy9kcmF3SW1hZ2UoaW1hZ2UsIGR4LCBkeSwgZHcsIGRoKVxuICAgICAgZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICB0cmFuc2Zvcm0udHJhbnNsYXRlKGEsIGIpO1xuICAgICAgICB0cmFuc2Zvcm0uc2NhbGUoYywgZCk7XG4gICAgICB9XG5cbiAgICAgIC8vZHJhd0ltYWdlKGltYWdlLCBzeCwgc3ksIHN3LCBzaCwgZHgsIGR5LCBkdywgZGgpXG4gICAgICBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSA5KSB7XG4gICAgICAgIHRyYW5zZm9ybS50cmFuc2xhdGUoZSwgZik7XG4gICAgICAgIHRyYW5zZm9ybS5zY2FsZShnLCBoKTtcbiAgICAgICAgc01hc2sgPSBzTWFza3xzaGFkZXJNYXNrLmNyb3A7XG4gICAgICAgIGRvQ3JvcCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBzaGFkZXJQcm9ncmFtID0gZ2wyZC5pbml0U2hhZGVycyh0cmFuc2Zvcm0uY19zdGFjaywgc01hc2spO1xuXG4gICAgICB2YXIgdGV4dHVyZSwgY2FjaGVJbmRleCA9IGltYWdlQ2FjaGUuaW5kZXhPZihpbWFnZSk7XG5cbiAgICAgIGlmIChjYWNoZUluZGV4ICE9PSAtMSkge1xuICAgICAgICB0ZXh0dXJlID0gdGV4dHVyZUNhY2hlW2NhY2hlSW5kZXhdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGV4dHVyZSA9IG5ldyBUZXh0dXJlKGltYWdlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRvQ3JvcCkge1xuICAgICAgICBnbC51bmlmb3JtNGYoc2hhZGVyUHJvZ3JhbS51Q3JvcFNvdXJjZSwgYS9pbWFnZS53aWR0aCwgYi9pbWFnZS5oZWlnaHQsIGMvaW1hZ2Uud2lkdGgsIGQvaW1hZ2UuaGVpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHJlY3RWZXJ0ZXhQb3NpdGlvbkJ1ZmZlcik7XG4gICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHNoYWRlclByb2dyYW0udmVydGV4UG9zaXRpb25BdHRyaWJ1dGUsIDQsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XG5cbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRleHR1cmUub2JqKTtcbiAgICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTApO1xuXG4gICAgICBnbC51bmlmb3JtMWkoc2hhZGVyUHJvZ3JhbS51U2FtcGxlciwgMCk7XG5cbiAgICAgIHNlbmRUcmFuc2Zvcm1TdGFjayhzaGFkZXJQcm9ncmFtKTtcbiAgICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVfRkFOLCAwLCA0KTtcblxuICAgICAgdHJhbnNmb3JtLnBvcE1hdHJpeCgpO1xuICAgIH07XG4gIH07XG5cbn0oTWF0aCkpOyJdLCJzb3VyY2VSb290IjoiIn0=