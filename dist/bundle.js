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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvTWVkaWFIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lTWVkaWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1NjZW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9HYW1lV2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9PYmplY3RIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvUGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9rZXlTdGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0R5bmFtaWNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvRW1lbnlTaGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9CZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9XZWFwb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0J1bGxldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2ViZ2wtMmQvd2ViZ2wtMmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDOzs7Ozs7O0FDakNBO0FBQUE7QUFBQTtBQUFBO0FBQTRDO0FBQ0E7O0FBRTVDLDBCQUEwQixzREFBYTs7QUFFeEIscUJBQXFCLHNEQUFhO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNB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QUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQ0FBc0MsRUFBRTtBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLHVCQUF1QixPQUFPO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQjs7QUFFdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUNBQXVDOztBQUV2QztBQUNBLHVCQUF1Qiw4Q0FBOEMsRUFBRTtBQUN2RTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLHlDQUF5Qzs7QUFFekM7QUFDQSx1QkFBdUIsZ0RBQWdELEVBQUU7QUFDekU7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1Qiw0QkFBNEIsRUFBRTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QiwwQkFBMEIsRUFBRTtBQUNuRDtBQUNBO0FBQ0E7QUFD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Q0E7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLFEiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lJztcclxuaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvd2ViZ2wtMmQvd2ViZ2wtMmQnO1xyXG5cclxuLy9HQU1FIElOSVQgPD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXHJcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJyk7XHJcbldlYkdMMkQuZW5hYmxlKGNhbnZhcyk7IC8vIGFkZHMgXCJ3ZWJnbC0yZFwiIGNvbnRleHQgdG8gY3ZzXHJcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbC0yZCcpO1xyXG5cclxuXHJcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZShjdHgpO1xyXG5nYW1lLnN0YXJ0KCk7ICAgICIsImltcG9ydCBNZWRpYUhhbmRsZXIgZnJvbSAnLi9NZWRpYUhhbmRsZXInO1xyXG5pbXBvcnQgR2FtZVNjZW5lIGZyb20gJy4vU2NlbmUnO1xyXG5cclxuY29uc3QgbWVkaWFIYW5kbGVyID0gbmV3IE1lZGlhSGFuZGxlcigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihjdHgpIHtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcclxuXHJcbiAgICAgICAgLy9nYW1lIHN0YXRlIChvZmYgPSAwLCBvbiA9IDEsIHBhdXNlID0gMilcclxuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IDA7XHJcblxyXG4gICAgICAgIC8vc2FtcGxlIG9mIGEgc3RhZ2UgY2xhc3NcclxuICAgICAgICB0aGlzLnN0YWdlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvL2dhbWUgaW5pdGlhbGl6YXRpb24gcHJvY2Vzc1xyXG4gICAgYXN5bmMgaW5pdCgpIHtcclxuICAgICAgICBtZWRpYUhhbmRsZXIuc2V0SW1hZ2VTb3VyY2VzKFtcclxuICAgICAgICAgICAgJy4vZGlzdC9pbWFnZXMvc2hpcC5wbmcnLFxyXG4gICAgICAgICAgICAnLi9kaXN0L2ltYWdlcy9taXNzaWxlLnBuZycsXHJcbiAgICAgICAgICAgICcuL2Rpc3QvaW1hZ2VzL2JpZ2dlcnNoaXAucG5nJyxcclxuICAgICAgICAgICAgJy4vZGlzdC9pbWFnZXMvZW5lbXkucG5nJyxcclxuICAgICAgICAgICAgJy4vZGlzdC9pbWFnZXMvYnVsbGV0LnBuZycsXHJcbiAgICAgICAgICAgICcuL2Rpc3QvaW1hZ2VzL3JvY2tldC5wbmcnLFxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICAvL3ByZWxvYWQgaW1hZ2VzXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0ltYWdlIHByZWxvYWRpbmcuJyk7XHJcbiAgICAgICAgYXdhaXQgbWVkaWFIYW5kbGVyLnByZWxvYWRBbGxJbWFnZXMoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnSW1hZ2VzIHByZWxvYWRpbmcgZG9uZS4nKTtcclxuICAgIH1cclxuICAgIC8vZ2FtZSBzdGFydFxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PXdpcD09PT09PT09PT09PT09PT09XHJcbiAgICBhc3luYyBzdGFydCgpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLmluaXQoKTtcclxuXHJcbiAgICAgICAgLy9nYW1lIG9uIHN0YXRlXHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSAxO1xyXG5cclxuICAgICAgICAvL2NyZWF0aW9uIG9mIHN0YWdlIDEgPD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBXaVAhXHJcbiAgICAgICAgdGhpcy5zdGFnZSA9IG5ldyBHYW1lU2NlbmUoe1xyXG4gICAgICAgICAgICBuYW1lOiAnQSBUZXN0IEdhbWUgU3RhZ2UnLFxyXG4gICAgICAgICAgICBjdHg6IHRoaXMuY3R4LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3RhZ2Uuc3RhcnQoKTtcclxuICAgIH0gIFxyXG59IiwiaW1wb3J0IGdhbWVNZWRpYSBmcm9tICcuL2dhbWVNZWRpYSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYUhhbmRsZXIge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICB0aGlzLmltYWdlU291cmNlcyA9IChwcm9wcyAmJiBwcm9wcy5pbWFnZVNvdXJjZXMuc2xpY2UoKSkgfHwgW107XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SW1hZ2VTb3VyY2VzKHNvdXJjZXNBcnJheSkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VTb3VyY2VzID0gc291cmNlc0FycmF5LnNsaWNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW1hZ2VTb3VyY2VzKCkge1xyXG4gICAgICAgIHJldHVybiAgdGhpcy5pbWFnZVNvdXJjZXM7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkSW1hZ2UoaW1hZ2UsIHNyYykge1xyXG4gICAgICAgIGNvbnN0IGltYWdlTmFtZSA9IHNyYy5tYXRjaCgvKFxcdyspKD86XFwuXFx3KykkLylbMV07XHJcbiAgICAgICAgZ2FtZU1lZGlhW2ltYWdlTmFtZV0gPSBpbWFnZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbWFnZShpbWFnZSkge1xyXG4gICAgICAgIHJldHVybiBnYW1lTWVkaWFbaW1hZ2VdO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHByZWxvYWRBbGxJbWFnZXMoKSB7XHJcbiAgICAgICAgZm9yKGxldCBzcmMgb2YgdGhpcy5pbWFnZVNvdXJjZXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYExvYWRpbmcgJHtzcmN9LmApO1xyXG4gICAgICAgICAgICB0aGlzLmFkZEltYWdlKGF3YWl0IHRoaXMucHJlbG9hZEltYWdlKHNyYyksIHNyYyk7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICBwcmVsb2FkSW1hZ2Uoc3JjKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEltYWdlICR7aW1nLnNyY30gbG9hZGVkLmApXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGltZyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGltZy5vbmVycm9yID0gKCkgPT4gcmVqZWN0KCk7XHJcbiAgICAgICAgICAgIGltZy5zcmMgPSBzcmM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJsZXQgZ2FtZU1lZGlhID0ge307XHJcbmV4cG9ydCBkZWZhdWx0IGdhbWVNZWRpYTsiLCJpbXBvcnQgR2FtZVdpbmRvdyBmcm9tICcuL0dhbWVXaW5kb3cnO1xyXG5pbXBvcnQgTWVkaWFIYW5kbGVyIGZyb20gJy4vTWVkaWFIYW5kbGVyJztcclxuaW1wb3J0IE9iamVjdEhhbmRsZXIgZnJvbSAnLi9PYmplY3RIYW5kbGVyJztcclxuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XHJcbmltcG9ydCBFbWVueVNoaXAgZnJvbSAnLi9FbWVueVNoaXAnO1xyXG5pbXBvcnQgQWN0aW9uIGZyb20gJy4vQWN0aW9uJztcclxuaW1wb3J0IFdlYXBvbiBmcm9tICcuL1dlYXBvbic7XHJcbmltcG9ydCBrZXlTdGF0ZXMgZnJvbSAnLi9rZXlTdGF0ZXMnO1xyXG5cclxuY29uc3QgbWVkaWFIYW5kbGVyID0gbmV3IE1lZGlhSGFuZGxlcigpO1xyXG5jb25zdCBvYmplY3RIYW5kbGVyID0gbmV3IE9iamVjdEhhbmRsZXIoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHByb3BzLm5hbWU7XHJcbiAgICAgICAgdGhpcy5nYW1lV2luZG93ID0gbmV3IEdhbWVXaW5kb3coe1xyXG4gICAgICAgICAgICBjdHg6IHByb3BzLmN0eCxcclxuICAgICAgICAgICAgd2lkdGg6IDkwMCxcclxuICAgICAgICAgICAgaGVpZ2h0OiA3MDAsXHJcbiAgICAgICAgICAgIC8vIHNjYWxlOiAyXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0SWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZnBzID0gNjA7XHJcbiAgICAgICAgdGhpcy50cHMgPSAxMjtcclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLmxhc3RUaWxlVGltZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5mcmFtZURlbGF5ID0gTWF0aC5mbG9vcigxMDAwIC8gdGhpcy5mcHMpO1xyXG4gICAgICAgIHRoaXMudGlsZURlbGF5ID0gIE1hdGguZmxvb3IoMTAwMCAvIHRoaXMudHBzKTtcclxuICAgICAgICB0aGlzLmRlZmF1bHRTY2FsZSA9IDE7XHJcbiAgICAgICAgdGhpcy5vYmplY3RzID0gb2JqZWN0SGFuZGxlci5nZXRPYmplY3RzKCk7XHJcbiAgICAgICAgdGhpcy5sYXllcnMgPSB7XHJcbiAgICAgICAgICAgIG92ZXJsYXk6IFtdLFxyXG4gICAgICAgICAgICBmcm9udDogW10sXHJcbiAgICAgICAgICAgIG1haW46IFtdLFxyXG4gICAgICAgICAgICBiYWNrOiBbXSxcclxuICAgICAgICAgICAgYmFja2Jyb3VuZDogW11cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubGF5ZXJzQXJyYXkgPSBbXTtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9ICcjMTExMTExJztcclxuXHJcbiAgICAgICAgdGhpcy5mcmFtZSA9IHRoaXMuZnJhbWUuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0lOSVRJQUxJWkFUSU9OIDw9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGFzeW5jIGluaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFNjZW5lIFwiJHsgdGhpcy5uYW1lIH1cIiBsb2FkaW5nLmApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyBvYmplY3RzLicpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuY3JlYXRlU2NlbmVPYmplY3RzKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIG9iamVjdHMgZG9uZS4nKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgU2NlbmUgXCIkeyB0aGlzLm5hbWUgfVwiIGxvYWRlZC5gKTtcclxuICAgIH1cclxuXHJcbiAgICAvL09CSkVDVCBDUkVBVElPTiA8PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjcmVhdGVTY2VuZU9iamVjdHMoKSB7XHJcbiAgICAgICAgY29uc3QgYmFzaWNXZWFwb24gPSBuZXcgV2VhcG9uKHtcclxuICAgICAgICAgICAgYnVsbGV0SW1hZ2U6IG1lZGlhSGFuZGxlci5nZXRJbWFnZSgnbWlzc2lsZScpLFxyXG4gICAgICAgICAgICB0aWxlV2lkdGg6IDMyLFxyXG4gICAgICAgICAgICB0aWxlSGVpZ2h0OiAzMixcclxuICAgICAgICAgICAgdGlsZXNBbW91bnQ6IDgsXHJcbiAgICAgICAgICAgIHNwZWVkOiAxMDAsXHJcbiAgICAgICAgICAgIGhpdGJveFdpZHRoOiAxMCxcclxuICAgICAgICAgICAgaGl0Ym94SGVpZ2h0OiAxMCxcclxuICAgICAgICAgICAgd2VhcG9uWDogNDgsXHJcbiAgICAgICAgICAgIHdlYXBvblk6IDAsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyID0gb2JqZWN0SGFuZGxlci5jcmVhdGVPYmplY3QoUGxheWVyLCB7XHJcbiAgICAgICAgICAgIGhwOiAxMDAsXHJcbiAgICAgICAgICAgIHNwZWVkOiAyMDAsXHJcbiAgICAgICAgICAgIHR1cm5TcGVlZDogNSxcclxuICAgICAgICAgICAgc2hvdGluZ1NwZWVkOiAyLFxyXG4gICAgICAgICAgICBpbWFnZTogbWVkaWFIYW5kbGVyLmdldEltYWdlKCdzaGlwJyksXHJcbiAgICAgICAgICAgIHRpbGVzQW1vdW50OiAyLFxyXG4gICAgICAgICAgICB0aWxlV2lkdGg6IDEyOCxcclxuICAgICAgICAgICAgdGlsZUhlaWdodDogMTI4LFxyXG4gICAgICAgICAgICB3ZWFwb246IGJhc2ljV2VhcG9uLFxyXG4gICAgICAgICAgICBoaXRib3hPZmZzZXRYOiAxNixcclxuICAgICAgICAgICAgaGl0Ym94T2Zmc2V0WTogMTYsXHJcbiAgICAgICAgICAgIGhpdGJveFdpZHRoOiAzMixcclxuICAgICAgICAgICAgaGl0Ym94SGVpZ2h0OiAzMixcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBsYXllci5zZXRQb3NpdGlvbih0aGlzLmdhbWVXaW5kb3cud2lkdGggLyAyIC0gdGhpcy5wbGF5ZXIudGlsZVdpZHRoIC8gMiwgdGhpcy5nYW1lV2luZG93LmhlaWdodCAvIDIgLSB0aGlzLnBsYXllci50aWxlSGVpZ2h0IC8gMik7XHJcbiAgICAgICAgdGhpcy5wdXNoVG9MYXllcih0aGlzLnBsYXllciwgJ21haW4nKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBsYXllcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy9zZXRzIGEgcmVuZGVyIGxheWVyXHJcbiAgICBwdXNoVG9MYXllcihvYmosIGxheWVyKSB7XHJcbiAgICAgICAgdGhpcy5sYXllcnNbbGF5ZXJdLnB1c2gob2JqKTtcclxuICAgICAgICB0aGlzLmdldExheWVyc0FycmF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy90cmFuc2Zvcm1zIGxheWVycyBvYmplY3QgaW50byBzaW1wbGUgYXJyYXkgdGkgc2ltcGxpZnkgcmVuZGVyaW5nXHJcbiAgICBnZXRMYXllcnNBcnJheSgpIHtcclxuICAgICAgICB0aGlzLmxheWVyc0FycmF5ID0gW107XHJcbiAgICAgICAgY29uc3QgbGF5ZXJzVmFsdWVzID0gT2JqZWN0LnZhbHVlcyh0aGlzLmxheWVycyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGxheWVyc1ZhbHVlcy5sZW5ndGggLSAxOyBpID49MDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG9iaiBvZiBsYXllcnNWYWx1ZXNbaV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGF5ZXJzQXJyYXkucHVzaChvYmopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vc3RhcnQgc2NlbmVcclxuICAgIGFzeW5jIHN0YXJ0KCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdHYW1lIHN0YXJ0ZWQuJylcclxuXHJcbiAgICAgICAgLy8gZ2FtZSBzdGFydCB0aW1lXHJcbiAgICAgICAgdGhpcy5zdGFydFNjZW5lTG9vcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0U2NlbmVMb29wKCkge1xyXG4gICAgICAgIC8vIGdhbWUgc3RhcnQgdGltZVxyXG4gICAgICAgIHRoaXMubGFzdCA9IHRoaXMubGFzdFRpbGVUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0SWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5mcmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9MT0dJQyA8PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLmtleUhhbmRsZXIoZHQpO1xyXG4gICAgICAgIGZvciAobGV0IG9iaiBvZiB0aGlzLm9iamVjdHMpIHtcclxuICAgICAgICAgICAgaWYgKG9iai51cGRhdGUpIHtcclxuICAgICAgICAgICAgICAgIG9iai51cGRhdGUoZHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL0FOSU1BVElPTiA8PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBmcmFtZSgpIHtcclxuICAgICAgICBsZXQgZHQgPSB+fihwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMubGFzdFRpbWUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChkdCA8IHRoaXMuZnJhbWVEZWxheSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmZyYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZShkdCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaFRpbGVzKHRoaXMub2JqZWN0cyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmZyYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaFRpbGVzKG9iamVjdHMpIHtcclxuICAgICAgICBsZXQgZHQgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMubGFzdFRpbGVUaW1lO1xyXG4gICAgICAgIGlmIChkdCA+IHRoaXMudGlsZURlbGF5KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG9iaiBvZiBvYmplY3RzKSB7XHJcbiAgICAgICAgICAgICAgICBvYmoubmV4dFRpbGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxhc3RUaWxlVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL1JFTkRFUiA8PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5maWxsRmllbGQoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgb2JqIG9mIHRoaXMub2JqZWN0cykge1xyXG4gICAgICAgICAgICBvYmouZHJhdyh0aGlzLmdhbWVXaW5kb3cuY3R4KTtcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG5cclxuICAgIGZpbGxGaWVsZCgpIHtcclxuICAgICAgICB0aGlzLmdhbWVXaW5kb3cuY3R4LmZpbGxTdHlsZSA9IHRoaXMuYmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgIHRoaXMuZ2FtZVdpbmRvdy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5nYW1lV2luZG93LndpZHRoLCB0aGlzLmdhbWVXaW5kb3cuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBrZXlIYW5kbGVyKGR0KSB7XHJcbiAgICAgICAgaWYgKGtleVN0YXRlcy5zcGFjZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zaG90KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiAoa2V5U3RhdGVzLnVwKSB7XHJcbiAgICAgICAgLy8gICAgIGlmIChrZXlTdGF0ZXMucmlnaHQpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMucGxheWVyLm1vdmUoNDUsIGR0KTtcclxuICAgICAgICAvLyAgICAgfSBlbHNlIGlmIChrZXlTdGF0ZXMubGVmdCl7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnBsYXllci5tb3ZlKDEzNSwgZHQpO1xyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZSg5MCwgZHQpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSBlbHNlIGlmIChrZXlTdGF0ZXMuZG93bikge1xyXG4gICAgICAgIC8vICAgICBpZiAoa2V5U3RhdGVzLnJpZ2h0KSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnBsYXllci5tb3ZlKDMxNSwgZHQpO1xyXG4gICAgICAgIC8vICAgICB9IGVsc2UgaWYgKGtleVN0YXRlcy5sZWZ0KXtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMucGxheWVyLm1vdmUoMjI1LCBkdCk7XHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnBsYXllci5tb3ZlKDI3MCwgZHQpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSBlbHNlIGlmIChrZXlTdGF0ZXMubGVmdCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnBsYXllci5tb3ZlKDE4MCwgZHQpO1xyXG4gICAgICAgIC8vIH0gZWxzZSBpZiAoa2V5U3RhdGVzLnJpZ2h0KXtcclxuICAgICAgICAvLyAgICAgdGhpcy5wbGF5ZXIubW92ZSgwLCBkdCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChrZXlTdGF0ZXMudXApIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZUZvcndhcmQoZHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa2V5U3RhdGVzLmxlZnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIudHVybignbGVmdCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa2V5U3RhdGVzLnJpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnR1cm4oJ3JpZ2h0Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBsYXllci5jaGVja0JvcmRlcnModGhpcy5nYW1lV2luZG93KTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVXaW5kb3cge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICB0aGlzLmN0eCA9IHByb3BzLmN0eDtcclxuICAgICAgICB0aGlzLndpZHRoID0gcHJvcHMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBwcm9wcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy50b3AgPSAwO1xyXG4gICAgICAgIHRoaXMucmlnaHQgPSBwcm9wcy53aWR0aDtcclxuICAgICAgICB0aGlzLmJvdHRvbSA9IHByb3BzLmhlaWdodDtcclxuICAgICAgICB0aGlzLmxlZnQgPSAwO1xyXG4gICAgICAgIHRoaXMuc2NhbGUgPSBwcm9wcy5zY2FsZSB8fCAxO1xyXG5cclxuICAgICAgICBpZiAocHJvcHMuc2NhbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2FsZUNvbnRleHQodGhpcy5zY2FsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNjYWxlQ29udGV4dChzY2FsZSkge1xyXG4gICAgICAgIHRoaXMuY3R4LnNjYWxlKHNjYWxlLCBzY2FsZSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgZ2FtZU9iamVjdHMgZnJvbSAnLi9nYW1lT2JqZWN0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYmplY3RIYW5kbGVyIHtcclxuICAgIFxyXG4gICAgY3JlYXRlT2JqZWN0KENsYXNzLCBwcm9wcykge1xyXG4gICAgICAgIGxldCBvYmogPSBuZXcgQ2xhc3MocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuYWRkT2JqZWN0KG9iaik7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuXHJcbiAgICBhZGRPYmplY3Qob2JqKSB7XHJcbiAgICAgICAgZ2FtZU9iamVjdHMucHVzaChvYmopO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE9iamVjdChuKSB7XHJcbiAgICAgICAgcmV0dXJuIGdhbWVPYmplY3RzW25dO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE9iamVjdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGdhbWVPYmplY3RzO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZU9iamVjdChvYmopIHtcclxuICAgICAgICBnYW1lT2JqZWN0cy5zcGxpY2UoZ2FtZU9iamVjdHMuaW5kZXhPZihvYmopLCAxKTtcclxuICAgIH1cclxufSIsImxldCBvYmplY3RzID0gW107XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvYmplY3RzOyIsImltcG9ydCBrZXlTdGF0ZXMgZnJvbSAnLi9rZXlTdGF0ZXMnO1xyXG5pbXBvcnQgU2hpcCBmcm9tICcuL1NoaXAnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgU2hpcCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0JvcmRlcnMocmVjdGFuZ2xlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb25ZIDwgcmVjdGFuZ2xlLnRvcCkge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uWSA9IHJlY3RhbmdsZS50b3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uWSArIHRoaXMudGlsZUhlaWdodCA+IHJlY3RhbmdsZS5ib3R0b20pIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvblkgPSByZWN0YW5nbGUuYm90dG9tIC0gdGhpcy50aWxlSGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvblggPCByZWN0YW5nbGUubGVmdCkge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uWCA9IHJlY3RhbmdsZS5sZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvblggKyB0aGlzLnRpbGVXaWR0aCA+IHJlY3RhbmdsZS5yaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uWCA9IHJlY3RhbmdsZS5yaWdodCAtIHRoaXMudGlsZVdpZHRoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3ZlRm9yd2FyZChhbmdsZSwgZHQpIHtcclxuICAgICAgICBzdXBlci5tb3ZlRm9yd2FyZChhbmdsZSwgZHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHR1cm4oZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIudHVybihkaXJlY3Rpb24pO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlICdyaWdodCc6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbGVSb3cgPSAyO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAnbGVmdCc6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbGVSb3cgPSAxOyBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmKGtleVN0YXRlcy5sZWZ0ICYmIGtleVN0YXRlcy5yaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUaWxlUm93ID0gMztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIWtleVN0YXRlcy5sZWZ0ICYmICFrZXlTdGF0ZXMucmlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGlsZVJvdyA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibGV0IGtleVN0YXRlcyA9IHsgXHJcbiAgICB1cDogZmFsc2UsXHJcbiAgICByaWdodDogZmFsc2UsXHJcbiAgICBkb3duOiBmYWxzZSxcclxuICAgIGxlZnQ6IGZhbHNlLFxyXG4gICAgc3BhY2U6IGZhbHNlXHJcbn07XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSA4NyB8fCBlLmtleUNvZGUgPT09IDM4KSB7XHJcbiAgICAgICAga2V5U3RhdGVzLnVwID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChlLmtleUNvZGUgPT09IDY1IHx8IGUua2V5Q29kZSA9PT0gMzcpIHtcclxuICAgICAgICBrZXlTdGF0ZXMubGVmdCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSA4MyB8fCBlLmtleUNvZGUgPT09IDQwKSB7XHJcbiAgICAgICAga2V5U3RhdGVzLmRvd24gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gNjggfHwgZS5rZXlDb2RlID09PSAzOSkge1xyXG4gICAgICAgIGtleVN0YXRlcy5yaWdodCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSAzMikge1xyXG4gICAgICAgIGtleVN0YXRlcy5zcGFjZSA9IHRydWU7XHJcbiAgICB9XHJcbn0sIHRydWUpO1xyXG4gICAgXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSA4NyB8fCBlLmtleUNvZGUgPT09IDM4KSB7XHJcbiAgICAgICAga2V5U3RhdGVzLnVwID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSA2NSB8fCBlLmtleUNvZGUgPT09IDM3KSB7XHJcbiAgICAgICAga2V5U3RhdGVzLmxlZnQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChlLmtleUNvZGUgPT09IDgzIHx8IGUua2V5Q29kZSA9PT0gNDApIHtcclxuICAgICAgICBrZXlTdGF0ZXMuZG93biA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gNjggfHwgZS5rZXlDb2RlID09PSAzOSkge1xyXG4gICAgICAgIGtleVN0YXRlcy5yaWdodCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMzIpIHtcclxuICAgICAgICBrZXlTdGF0ZXMuc3BhY2UgPSBmYWxzZTtcclxuICAgIH1cclxufSwgdHJ1ZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBrZXlTdGF0ZXM7IiwiaW1wb3J0IER5bmFtaWNPYmplY3QgZnJvbSAnLi9EeW5hbWljT2JqZWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAgZXh0ZW5kcyBEeW5hbWljT2JqZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuaHAgPSBwcm9wcy5ocCB8fCAxMDA7XHJcbiAgICAgICAgdGhpcy5zaG90aW5nU3BlZWQgPSBwcm9wcy5zaG90aW5nU3BlZWQgfHwgMTtcclxuICAgICAgICB0aGlzLmxhc3RTaG90ID0gbnVsbDtcclxuICAgICAgICB0aGlzLndlYXBvbiA9IHByb3BzLndlYXBvbiB8fCBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoYW5nbGUsIGR0KSB7XHJcbiAgICAgICAgc3VwZXIubW92ZShhbmdsZSwgZHQpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVGb3J3YXJkKGR0KSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlKHRoaXMuYW5nbGUsIGR0KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG90KCkgeyAgICAgICAgICAgIFxyXG4gICAgICAgIGlmICghdGhpcy5sYXN0U2hvdCkge1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RTaG90ID0gcGVyZm9ybWFuY2Uubm93KCk7IFxyXG4gICAgICAgICAgICB0aGlzLndlYXBvbi5zaG90KHRoaXMucG9zaXRpb25YLCB0aGlzLnBvc2l0aW9uWSwgdGhpcy5hbmdsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBkdCA9IHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5sYXN0U2hvdDtcclxuICAgICAgICBpZiAoZHQgPj0gMTAwMCAvIHRoaXMuc2hvdGluZ1NwZWVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2VhcG9uLnNob3QodGhpcy5wb3NpdGlvblgsIHRoaXMucG9zaXRpb25ZLCB0aGlzLmFuZ2xlKTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0U2hvdCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbn0iLCJpbXBvcnQgT2JqZWN0IGZyb20gJy4vT2JqZWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER5bmFtaWNPYmplY3QgZXh0ZW5kcyBPYmplY3Qge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHByb3BzLnNwZWVkIHx8IDA7XHJcbiAgICAgICAgdGhpcy50dXJuU3BlZWQgPSBwcm9wcy50dXJuU3BlZWQgfHwgMDtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlKGFuZ2xlLCBkdCkge1xyXG4gICAgICAgIGxldCBvZmZzZXQgPSB0aGlzLnNwZWVkICogZHQgLyAxMDAwO1xyXG4gICAgICAgIGNvbnN0IHJhZEFuZ2xlID0gYW5nbGUgKiBNYXRoLlBJIC8gMTgwO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25YICs9IE1hdGgucm91bmQoTWF0aC5jb3MocmFkQW5nbGUpICogb2Zmc2V0KTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uWSAtPSBNYXRoLnJvdW5kKE1hdGguc2luKHJhZEFuZ2xlKSAqIG9mZnNldCk7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzSGl0Ym94KSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSGl0Ym94UG9zaXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdHVybihkaXJlY3Rpb24pIHtcclxuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlICdyaWdodCc6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5nbGUgLT0gdGhpcy50dXJuU3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuYW5nbGUgPD0gMCApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuZ2xlID0gMzYwIC0gdGhpcy5hbmdsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucmFkQW5nbGUgPSB0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuZ2xlICs9IHRoaXMudHVyblNwZWVkO1xyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLmFuZ2xlID49IDM2MCApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuZ2xlID0gdGhpcy5hbmdsZSAtIDM2MDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucmFkQW5nbGUgPSB0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFNwZWVkKHNwZWVkKSB7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUhpdGJveFBvc2l0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuaGl0Ym94UG9zaXRpb25YID0gdGhpcy5wb3NpdGlvblggKyB0aGlzLmhpdGJveE9mZnNldFg7XHJcbiAgICAgICAgdGhpcy5oaXRib3hQb3NpdGlvblkgPSB0aGlzLnBvc2l0aW9uWSArIHRoaXMuaGl0Ym94T2Zmc2V0WTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHByb3BzLm5hbWU7XHJcbiAgICAgICAgdGhpcy5ncm91cCA9IHByb3BzLmdyb3VwIHx8IG51bGw7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IHByb3BzLmltYWdlIHx8IG51bGw7XHJcbiAgICAgICAgdGhpcy50aWxlc0Ftb3VudCA9IHByb3BzLnRpbGVzQW1vdW50IHx8IDA7XHJcbiAgICAgICAgdGhpcy50aWxlV2lkdGggPSBwcm9wcy50aWxlV2lkdGggfHwgMDtcclxuICAgICAgICB0aGlzLnRpbGVIZWlnaHQgPSBwcm9wcy50aWxlSGVpZ2h0IHx8IDA7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGlsZVJvdyA9IHByb3BzLmN1cnJlbnRUaWxlUm93IHx8IDA7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGlsZSA9IHByb3BzLmN1cnJlbnRUaWxlIHx8IDA7XHJcbiAgICAgICAgdGhpcy5hbmdsZSA9IHByb3BzLmFuZ2xlIHx8IDkwO1xyXG4gICAgICAgIHRoaXMucmFkQW5nbGUgPSB0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uWCA9IHByb3BzLnBvc2l0aW9uWCB8fCAwO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25ZID0gcHJvcHMucG9zaXRpb25ZIHx8IDA7XHJcbiAgICAgICAgaWYgKHByb3BzLmhpdGJveE9mZnNldFggfHwgIHByb3BzLmhpdGJveE9mZnNldFkgfHwgcHJvcHMuaGl0Ym94SGVpZ2h0IHx8IHByb3BzLmhpdGJveFdpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGl0Ym94T2Zmc2V0WCA9IHByb3BzLmhpdGJveE9mZnNldFggfHwgMDtcclxuICAgICAgICAgICAgdGhpcy5oaXRib3hPZmZzZXRZID0gcHJvcHMuaGl0Ym94T2Zmc2V0WSB8fCAwO1xyXG4gICAgICAgICAgICB0aGlzLmhpdGJveEhlaWdodCA9IHByb3BzLmhpdGJveEhlaWdodCB8fCAwO1xyXG4gICAgICAgICAgICB0aGlzLmhpdGJveFdpZHRoID0gcHJvcHMuaGl0Ym94V2lkdGggfHwgMDtcclxuICAgICAgICAgICAgdGhpcy5oaXRib3hQb3NpdGlvblggPSB0aGlzLnBvc2l0aW9uWCArIHRoaXMuaGl0Ym94T2Zmc2V0WDtcclxuICAgICAgICAgICAgdGhpcy5oaXRib3hQb3NpdGlvblkgPSB0aGlzLnBvc2l0aW9uWSArIHRoaXMuaGl0Ym94T2Zmc2V0WTtcclxuICAgICAgICAgICAgdGhpcy5oYXNIaXRib3ggPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRQb3NpdGlvbih4LCB5KSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblggPSB4O1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25ZID0geTtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0VGlsZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50VGlsZSA8ICh0aGlzLnRpbGVzQW1vdW50IC0gMSkpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGlsZSsrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbGUgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRJbWFnZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGN0eCkge1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLnBvc2l0aW9uWCAgKyB0aGlzLnRpbGVXaWR0aCAvIDIsIHRoaXMucG9zaXRpb25ZICsgdGhpcy50aWxlSGVpZ2h0IC8gMik7XHJcbiAgICAgICAgY3R4LnJvdGF0ZSgtKHRoaXMuYW5nbGUgLSA5MCkgKiBNYXRoLlBJIC8gMTgwKTtcclxuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHRoaXMuY3VycmVudFRpbGUgKiB0aGlzLnRpbGVXaWR0aCwgIHRoaXMuY3VycmVudFRpbGVSb3cgKiB0aGlzLnRpbGVIZWlnaHQsIHRoaXMudGlsZVdpZHRoLCB0aGlzLnRpbGVIZWlnaHQsIC10aGlzLnRpbGVXaWR0aCAvIDIsIC10aGlzLnRpbGVIZWlnaHQgLyAyLCB0aGlzLnRpbGVXaWR0aCwgdGhpcy50aWxlSGVpZ2h0KTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9TaGlwJztcclxuaW1wb3J0IEJlaGF2aW9yIGZyb20gJy4vQmVoYXZpb3InO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1lbnlTaGlwIGV4dGVuZHMgU2hpcCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5wYXVzZSA9IHRoaXMucGF1c2UuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5iZWhhdmlvciA9IG5ldyBCZWhhdmlvcigpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL0VORU1ZIFNISVAgTElHSUMgQU5EIEFDVElPTlNcclxuICAgIHBhdXNlKCkge31cclxuIFxyXG4gICAgLy9TRVQgQkVIQVZJT1JcclxuICAgIHNldEJlaGF2aW9yKGFjdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmJlaGF2aW9yLnNldEFjdGlvbnMoYWN0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9DdXJyZW50QWN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuYmVoYXZpb3IuZG9DdXJyZW50QWN0aW9uKCk7XHJcbiAgICB9XHJcbn0iLCIvL0JFSEFWSU9VUiBDTEFTUy4gSEFORExFUyBBQ1RJT04nUyBFWEVDVVRJT05cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmVoYXZpb3Ige1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICAvL3RoaXMgaXMgYW4gYXJyYXkgb2YgZW5lbXkgYWN0aW9ucyBsaWtlIG1vdmUsIHR1cm4sIHN0b3AgZXRjLiBcclxuICAgICAgICAvLyBwcm9wcy5hY3Rpb25zID8gdGhpcy5hY3Rpb25zID0gcHJvcHMuYWN0aW9ucy5zbGljZSgpIDogW107XHJcbiAgICAgICAgaWYgKHByb3BzICYmIHByb3BzLmFjdGlvbnMpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3Rpb25zID0gcHJvcHMuYWN0aW9ucztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGlvbnMgPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudEFjdGlvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25TdGFydFRpbWUgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGlvblN0YXJ0VmFsdWUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vU0VUVElORyBBQ1RJT05TXHJcbiAgICBzZXRBY3Rpb25zKGFjdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmFjdGlvbnMgPSBhY3Rpb25zLnNsaWNlKCk7XHJcbiAgICAgICAgdGhpcy5uZXh0QWN0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQWN0aW9uKGFjdGlvbikge1xyXG4gICAgICAgIHRoaXMuYWN0aW9ucy5wdXNoKGFjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy9ORVhUIEFDVElPTlNcclxuICAgIG5leHRBY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50QWN0aW9uID0gdGhpcy5hY3Rpb25zLnNoaWZ0KCk7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25TdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICB0aGlzLmRvQ3VycmVudEFjdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvQ3VycmVudEFjdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50QWN0aW9uLmR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIGxldCBkdCA9IHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5hY3Rpb25TdGFydFRpbWU7XHJcblxyXG4gICAgICAgICAgICBpZiAoZHQgPj0gdGhpcy5jdXJyZW50QWN0aW9uLmR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRBY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uU3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFjdGlvbi5tZXRob2QodGhpcy5jdXJyZW50QWN0aW9uLnZhbHVlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudEFjdGlvbi5vbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFjdGlvbi5tZXRob2QodGhpcy5jdXJyZW50QWN0aW9uLnZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy5uZXh0QWN0aW9uKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QWN0aW9uLm1ldGhvZCh0aGlzLmN1cnJlbnRBY3Rpb24udmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSAiLCIvL0FOIEFDVElPTiBDTEFTUy4gSVMgTkVFREVEIFRPIENPTlNUUlVDVCBCRUhBVklPUiBBUlJBWVMgRk9SIEFVVE9NQVRJQyBFTlRJVElFU1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3Rpb24ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICB0aGlzLm1ldGhvZCA9IHByb3BzLm1ldGhvZDtcclxuICAgICAgICB0aGlzLmR1cmF0aW9uID0gcHJvcHMuZHVyYXRpb247XHJcbiAgICAgICAgdGhpcy5vbmNlID0gcHJvcHMub25jZTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gcHJvcHMudmFsdWU7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25TdGFydFRpbWUgPSBudWxsO1xyXG4gICAgfVxyXG59ICAiLCJpbXBvcnQgQnVsbGV0IGZyb20gJy4vQnVsbGV0JztcclxuaW1wb3J0IE9iamVjdEhhbmRsZXIgZnJvbSAnLi9PYmplY3RIYW5kbGVyJztcclxuXHJcbmNvbnN0IG9iamVjdEhhbmRsZXIgPSBuZXcgT2JqZWN0SGFuZGxlcigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VhcG9uIHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHByb3BzLm5hbWU7XHJcbiAgICAgICAgdGhpcy5ncm91cCA9IHByb3BzLmdyb3VwO1xyXG4gICAgICAgIHRoaXMuYnVsbGV0SW1hZ2UgPSBwcm9wcy5idWxsZXRJbWFnZTtcclxuICAgICAgICB0aGlzLnRpbGVXaWR0aCA9IHByb3BzLnRpbGVXaWR0aDtcclxuICAgICAgICB0aGlzLnRpbGVIZWlnaHQgPSBwcm9wcy50aWxlSGVpZ2h0O1xyXG4gICAgICAgIHRoaXMudGlsZXNBbW91bnQgPSBwcm9wcy50aWxlc0Ftb3VudCB8fCAxO1xyXG4gICAgICAgIHRoaXMuZGFtYWdlID0gcHJvcHMuZGFtYWdlIHx8IDE7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHByb3BzLnNwZWVkIHx8IDE7XHJcbiAgICAgICAgdGhpcy53ZWFwb25YID0gcHJvcHMud2VhcG9uWCB8fCAwO1xyXG4gICAgICAgIHRoaXMud2VhcG9uWSA9IHByb3BzLndlYXBvblkgfHwgMDtcclxuICAgIH1cclxuIFxyXG4gICAgc2hvdChwb3NpdGlvblgsIHBvc2l0aW9uWSwgYW5nbGUpIHtcclxuICAgICAgICBvYmplY3RIYW5kbGVyLmNyZWF0ZU9iamVjdChCdWxsZXQsIHtcclxuICAgICAgICAgICAgZ3JvdXA6ICdwbGF5ZXJCdWxsZXQnLFxyXG4gICAgICAgICAgICBpbWFnZTogdGhpcy5idWxsZXRJbWFnZSxcclxuICAgICAgICAgICAgdGlsZVdpZHRoOiB0aGlzLnRpbGVXaWR0aCxcclxuICAgICAgICAgICAgdGlsZUhlaWdodDogdGhpcy50aWxlSGVpZ2h0LFxyXG4gICAgICAgICAgICB0aWxlc0Ftb3VudDogdGhpcy50aWxlc0Ftb3VudCxcclxuICAgICAgICAgICAgYW5nbGU6IGFuZ2xlLFxyXG4gICAgICAgICAgICBwb3NpdGlvblg6IHBvc2l0aW9uWCArIHRoaXMud2VhcG9uWCxcclxuICAgICAgICAgICAgcG9zaXRpb25ZOiBwb3NpdGlvblkgKyB0aGlzLndlYXBvblksXHJcbiAgICAgICAgICAgIGRhbWFnZTogdGhpcy5kYW1hZ2UsXHJcbiAgICAgICAgICAgIHNwZWVkOiB0aGlzLnNwZWVkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgRHluYW1pY09iamVjdCBmcm9tICcuL0R5bmFtaWNPYmplY3QnO1xyXG5pbXBvcnQgT2JqZWN0SGFuZGxlciBmcm9tICcuL09iamVjdEhhbmRsZXInO1xyXG5cclxuY29uc3Qgb2JqZWN0SGFuZGxlciA9IG5ldyBPYmplY3RIYW5kbGVyKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWxsZXQgZXh0ZW5kcyBEeW5hbWljT2JqZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmFuZ2xlID0gcHJvcHMuYW5nbGU7XHJcbiAgICAgICAgdGhpcy5kYW1hZ2UgPSBwcm9wcy5kYW1hZ2UgfHwgMDtcclxuICAgICAgICB0aGlzLnNwZWVkID0gcHJvcHMuc3BlZWQgfHwgMDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLm1vdmUodGhpcy5hbmdsZSwgZHQpO1xyXG4gICAgICAgIC8vIHRoaXMuY2hlY2tCb3JkZXJzKClcclxuICAgIH1cclxuXHJcbiAgICAvLyBjaGVja0JvcmRlcnMoKSB7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMucG9zaXRpb25ZICsgdGhpcy50aWxlSGVpZ2h0IDw9IDApIHtcclxuICAgIC8vICAgICAgICAgb2JqZWN0SGFuZGxlci5kZWxldGVPYmplY3QodGhpcyk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGlmICh0aGlzLnBvc2l0aW9uWSArIHRoaXMudGlsZUhlaWdodCA+IDApIHtcclxuICAgIC8vICAgICAgICAgb2JqZWN0SGFuZGxlci5kZWxldGVPYmplY3QodGhpcyk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGlmICh0aGlzLnBvc2l0aW9uWSArIHRoaXMudGlsZUhlaWdodCA8PSAwKSB7XHJcbiAgICAvLyAgICAgICAgIG9iamVjdEhhbmRsZXIuZGVsZXRlT2JqZWN0KHRoaXMpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBpZiAodGhpcy5wb3NpdGlvblkgKyB0aGlzLnRpbGVIZWlnaHQgPD0gMCkge1xyXG4gICAgLy8gICAgICAgICBvYmplY3RIYW5kbGVyLmRlbGV0ZU9iamVjdCh0aGlzKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbn0iLCIvKipcbiAqICBXZWJHTC0yRC5qcyAtIEhUTUw1IENhbnZhczJEIEFQSSBpbiBhIFdlYkdMIGNvbnRleHRcbiAqXG4gKiAgQ3JlYXRlZCBieSBDb3JiYW4gQnJvb2sgPGNvcmJhbmJyb29rQGdtYWlsLmNvbT4gb24gMjAxMS0wMy0wMi5cbiAqICBBbWVuZGVkIHRvIGJ5IEJvYmJ5IFJpY2h0ZXIgPHNlY3JldHJvYm90cm9uQGdtYWlsLmNvbT4gb24gMjAxMS0wMy0wM1xuICogIEN1YmljVlIuanMgYnkgQ2hhcmxlcyBDbGlmZmUgPGNqQGN1YmljcHJvZHVjdGlvbnMuY29tPiBvbiAyMDExLTAzLTAzXG4gKlxuICovXG5cbi8qXG4gKiAgQ29weXJpZ2h0IChjKSAyMDExIENvcmJhbiBCcm9va1xuICpcbiAqICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmdcbiAqICBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbiAqICBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbiAqICB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4gKiAgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvXG4gKiAgcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvXG4gKiAgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuICogIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICogIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICogIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gKiAgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRVxuICogIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT05cbiAqICBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT05cbiAqICBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqXG4gKi9cblxuLyoqXG4gKiBVc2FnZTpcbiAqXG4gKiAgICB2YXIgY3ZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbiAqXG4gKiAgICBXZWJHTDJELmVuYWJsZShjdnMpOyAvLyBhZGRzIFwid2ViZ2wtMmRcIiB0byBjdnNcbiAqXG4gKiAgICBjdnMuZ2V0Q29udGV4dChcIndlYmdsLTJkXCIpO1xuICpcbiAqL1xuXG4oZnVuY3Rpb24oTWF0aCwgdW5kZWZpbmVkKSB7XG5cbiAgLy8gVmVjdG9yICYgTWF0cml4IGxpYnJhcmllcyBmcm9tIEN1YmljVlIuanNcbiAgdmFyIE1fUEkgPSAzLjE0MTU5MjY1MzU4OTc5MzIzODQ2MjY0MzM4MzI3OTUwMjg4NDE5Njg7XG4gIHZhciBNX1RXT19QSSA9IDIuMCAqIE1fUEk7XG4gIHZhciBNX0hBTEZfUEkgPSBNX1BJIC8gMi4wO1xuXG4gIGZ1bmN0aW9uIGlzUE9UKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID4gMCAmJiAoKHZhbHVlIC0gMSkgJiB2YWx1ZSkgPT09IDA7XG4gIH1cblxuICB2YXIgdmVjMyA9IHtcbiAgICBsZW5ndGg6IGZ1bmN0aW9uKHB0KSB7XG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KHB0WzBdICogcHRbMF0gKyBwdFsxXSAqIHB0WzFdICsgcHRbMl0gKiBwdFsyXSk7XG4gICAgfSxcblxuICAgIG5vcm1hbGl6ZTogZnVuY3Rpb24ocHQpIHtcbiAgICAgIHZhciBkID0gTWF0aC5zcXJ0KChwdFswXSAqIHB0WzBdKSArIChwdFsxXSAqIHB0WzFdKSArIChwdFsyXSAqIHB0WzJdKSk7XG4gICAgICBpZiAoZCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gWzAsIDAsIDBdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFtwdFswXSAvIGQsIHB0WzFdIC8gZCwgcHRbMl0gLyBkXTtcbiAgICB9LFxuXG4gICAgZG90OiBmdW5jdGlvbih2MSwgdjIpIHtcbiAgICAgIHJldHVybiB2MVswXSAqIHYyWzBdICsgdjFbMV0gKiB2MlsxXSArIHYxWzJdICogdjJbMl07XG4gICAgfSxcblxuICAgIGFuZ2xlOiBmdW5jdGlvbih2MSwgdjIpIHtcbiAgICAgIHJldHVybiBNYXRoLmFjb3MoKHYxWzBdICogdjJbMF0gKyB2MVsxXSAqIHYyWzFdICsgdjFbMl0gKiB2MlsyXSkgLyAoTWF0aC5zcXJ0KHYxWzBdICogdjFbMF0gKyB2MVsxXSAqIHYxWzFdICsgdjFbMl0gKiB2MVsyXSkgKiBNYXRoLnNxcnQodjJbMF0gKiB2MlswXSArIHYyWzFdICogdjJbMV0gKyB2MlsyXSAqIHYyWzJdKSkpO1xuICAgIH0sXG5cbiAgICBjcm9zczogZnVuY3Rpb24odmVjdEEsIHZlY3RCKSB7XG4gICAgICByZXR1cm4gW3ZlY3RBWzFdICogdmVjdEJbMl0gLSB2ZWN0QlsxXSAqIHZlY3RBWzJdLCB2ZWN0QVsyXSAqIHZlY3RCWzBdIC0gdmVjdEJbMl0gKiB2ZWN0QVswXSwgdmVjdEFbMF0gKiB2ZWN0QlsxXSAtIHZlY3RCWzBdICogdmVjdEFbMV1dO1xuICAgIH0sXG5cbiAgICBtdWx0aXBseTogZnVuY3Rpb24odmVjdEEsIGNvbnN0Qikge1xuICAgICAgcmV0dXJuIFt2ZWN0QVswXSAqIGNvbnN0QiwgdmVjdEFbMV0gKiBjb25zdEIsIHZlY3RBWzJdICogY29uc3RCXTtcbiAgICB9LFxuXG4gICAgYWRkOiBmdW5jdGlvbih2ZWN0QSwgdmVjdEIpIHtcbiAgICAgIHJldHVybiBbdmVjdEFbMF0gKyB2ZWN0QlswXSwgdmVjdEFbMV0gKyB2ZWN0QlsxXSwgdmVjdEFbMl0gKyB2ZWN0QlsyXV07XG4gICAgfSxcblxuICAgIHN1YnRyYWN0OiBmdW5jdGlvbih2ZWN0QSwgdmVjdEIpIHtcbiAgICAgIHJldHVybiBbdmVjdEFbMF0gLSB2ZWN0QlswXSwgdmVjdEFbMV0gLSB2ZWN0QlsxXSwgdmVjdEFbMl0gLSB2ZWN0QlsyXV07XG4gICAgfSxcblxuICAgIGVxdWFsOiBmdW5jdGlvbihhLCBiKSB7XG4gICAgICB2YXIgZXBzaWxvbiA9IDAuMDAwMDAwMTtcbiAgICAgIGlmICgoYSA9PT0gdW5kZWZpbmVkKSAmJiAoYiA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICgoYSA9PT0gdW5kZWZpbmVkKSB8fCAoYiA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gKE1hdGguYWJzKGFbMF0gLSBiWzBdKSA8IGVwc2lsb24gJiYgTWF0aC5hYnMoYVsxXSAtIGJbMV0pIDwgZXBzaWxvbiAmJiBNYXRoLmFicyhhWzJdIC0gYlsyXSkgPCBlcHNpbG9uKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIG1hdDMgPSB7XG4gICAgaWRlbnRpdHk6IFsxLjAsIDAuMCwgMC4wLFxuICAgICAgMC4wLCAxLjAsIDAuMCxcbiAgICAgIDAuMCwgMC4wLCAxLjBdLFxuXG4gICAgbXVsdGlwbHk6IGZ1bmN0aW9uIChtMSwgbTIpIHtcbiAgICAgIHZhciBtMTAgPSBtMVswXSwgbTExID0gbTFbMV0sIG0xMiA9IG0xWzJdLCBtMTMgPSBtMVszXSwgbTE0ID0gbTFbNF0sIG0xNSA9IG0xWzVdLCBtMTYgPSBtMVs2XSwgbTE3ID0gbTFbN10sIG0xOCA9IG0xWzhdLFxuICAgICAgICBtMjAgPSBtMlswXSwgbTIxID0gbTJbMV0sIG0yMiA9IG0yWzJdLCBtMjMgPSBtMlszXSwgbTI0ID0gbTJbNF0sIG0yNSA9IG0yWzVdLCBtMjYgPSBtMls2XSwgbTI3ID0gbTJbN10sIG0yOCA9IG0yWzhdO1xuXG4gICAgICBtMlswXSA9IG0yMCAqIG0xMCArIG0yMyAqIG0xMSArIG0yNiAqIG0xMjtcbiAgICAgIG0yWzFdID0gbTIxICogbTEwICsgbTI0ICogbTExICsgbTI3ICogbTEyO1xuICAgICAgbTJbMl0gPSBtMjIgKiBtMTAgKyBtMjUgKiBtMTEgKyBtMjggKiBtMTI7XG4gICAgICBtMlszXSA9IG0yMCAqIG0xMyArIG0yMyAqIG0xNCArIG0yNiAqIG0xNTtcbiAgICAgIG0yWzRdID0gbTIxICogbTEzICsgbTI0ICogbTE0ICsgbTI3ICogbTE1O1xuICAgICAgbTJbNV0gPSBtMjIgKiBtMTMgKyBtMjUgKiBtMTQgKyBtMjggKiBtMTU7XG4gICAgICBtMls2XSA9IG0yMCAqIG0xNiArIG0yMyAqIG0xNyArIG0yNiAqIG0xODtcbiAgICAgIG0yWzddID0gbTIxICogbTE2ICsgbTI0ICogbTE3ICsgbTI3ICogbTE4O1xuICAgICAgbTJbOF0gPSBtMjIgKiBtMTYgKyBtMjUgKiBtMTcgKyBtMjggKiBtMTg7XG4gICAgfSxcblxuICAgIHZlYzJfbXVsdGlwbHk6IGZ1bmN0aW9uIChtMSwgbTIpIHtcbiAgICAgIHZhciBtT3V0ID0gW107XG4gICAgICBtT3V0WzBdID0gbTJbMF0gKiBtMVswXSArIG0yWzNdICogbTFbMV0gKyBtMls2XTtcbiAgICAgIG1PdXRbMV0gPSBtMlsxXSAqIG0xWzBdICsgbTJbNF0gKiBtMVsxXSArIG0yWzddO1xuICAgICAgcmV0dXJuIG1PdXQ7XG4gICAgfSxcblxuICAgIHRyYW5zcG9zZTogZnVuY3Rpb24gKG0pIHtcbiAgICAgIHJldHVybiBbbVswXSwgbVszXSwgbVs2XSwgbVsxXSwgbVs0XSwgbVs3XSwgbVsyXSwgbVs1XSwgbVs4XV07XG4gICAgfVxuICB9OyAvL21hdDNcblxuICAvLyBUcmFuc2Zvcm0gbGlicmFyeSBmcm9tIEN1YmljVlIuanNcbiAgZnVuY3Rpb24gVHJhbnNmb3JtKG1hdCkge1xuICAgIHJldHVybiB0aGlzLmNsZWFyU3RhY2sobWF0KTtcbiAgfVxuXG4gIHZhciBTVEFDS19ERVBUSF9MSU1JVCA9IDE2O1xuXG4gIFRyYW5zZm9ybS5wcm90b3R5cGUuY2xlYXJTdGFjayA9IGZ1bmN0aW9uKGluaXRfbWF0KSB7XG4gICAgdGhpcy5tX3N0YWNrID0gW107XG4gICAgdGhpcy5tX2NhY2hlID0gW107XG4gICAgdGhpcy5jX3N0YWNrID0gMDtcbiAgICB0aGlzLnZhbGlkID0gMDtcbiAgICB0aGlzLnJlc3VsdCA9IG51bGw7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IFNUQUNLX0RFUFRIX0xJTUlUOyBpKyspIHtcbiAgICAgIHRoaXMubV9zdGFja1tpXSA9IHRoaXMuZ2V0SWRlbnRpdHkoKTtcbiAgICB9XG5cbiAgICBpZiAoaW5pdF9tYXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5tX3N0YWNrWzBdID0gaW5pdF9tYXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0SWRlbnRpdHkoKTtcbiAgICB9XG4gIH07IC8vY2xlYXJTdGFja1xuXG4gIFRyYW5zZm9ybS5wcm90b3R5cGUuc2V0SWRlbnRpdHkgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLm1fc3RhY2tbdGhpcy5jX3N0YWNrXSA9IHRoaXMuZ2V0SWRlbnRpdHkoKTtcbiAgICBpZiAodGhpcy52YWxpZCA9PT0gdGhpcy5jX3N0YWNrICYmIHRoaXMuY19zdGFjaykge1xuICAgICAgdGhpcy52YWxpZC0tO1xuICAgIH1cbiAgfTtcblxuICBUcmFuc2Zvcm0ucHJvdG90eXBlLmdldElkZW50aXR5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFsxLjAsIDAuMCwgMC4wLFxuICAgICAgMC4wLCAxLjAsIDAuMCxcbiAgICAgIDAuMCwgMC4wLCAxLjBdO1xuICB9O1xuXG4gIFRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0UmVzdWx0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLmNfc3RhY2spIHtcbiAgICAgIHJldHVybiB0aGlzLm1fc3RhY2tbMF07XG4gICAgfVxuXG4gICAgdmFyIG0gPSBtYXQzLmlkZW50aXR5O1xuXG4gICAgaWYgKHRoaXMudmFsaWQgPiB0aGlzLmNfc3RhY2stMSkgeyB0aGlzLnZhbGlkID0gdGhpcy5jX3N0YWNrLTE7IH1cblxuICAgIGZvciAodmFyIGkgPSB0aGlzLnZhbGlkOyBpIDwgdGhpcy5jX3N0YWNrKzE7IGkrKykge1xuICAgICAgbSA9IG1hdDMubXVsdGlwbHkodGhpcy5tX3N0YWNrW2ldLG0pO1xuICAgICAgdGhpcy5tX2NhY2hlW2ldID0gbTtcbiAgICB9XG5cbiAgICB0aGlzLnZhbGlkID0gdGhpcy5jX3N0YWNrLTE7XG5cbiAgICB0aGlzLnJlc3VsdCA9IHRoaXMubV9jYWNoZVt0aGlzLmNfc3RhY2tdO1xuXG4gICAgcmV0dXJuIHRoaXMucmVzdWx0O1xuICB9O1xuXG4gIFRyYW5zZm9ybS5wcm90b3R5cGUucHVzaE1hdHJpeCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuY19zdGFjaysrO1xuICAgIHRoaXMubV9zdGFja1t0aGlzLmNfc3RhY2tdID0gdGhpcy5nZXRJZGVudGl0eSgpO1xuICB9O1xuXG4gIFRyYW5zZm9ybS5wcm90b3R5cGUucG9wTWF0cml4ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuY19zdGFjayA9PT0gMCkgeyByZXR1cm47IH1cbiAgICB0aGlzLmNfc3RhY2stLTtcbiAgfTtcblxuICB2YXIgdHJhbnNsYXRlTWF0cml4ID0gVHJhbnNmb3JtLnByb3RvdHlwZS5nZXRJZGVudGl0eSgpO1xuXG4gIFRyYW5zZm9ybS5wcm90b3R5cGUudHJhbnNsYXRlID0gZnVuY3Rpb24oeCwgeSkge1xuICAgIHRyYW5zbGF0ZU1hdHJpeFs2XSA9IHg7XG4gICAgdHJhbnNsYXRlTWF0cml4WzddID0geTtcblxuICAgIG1hdDMubXVsdGlwbHkodHJhbnNsYXRlTWF0cml4LCB0aGlzLm1fc3RhY2tbdGhpcy5jX3N0YWNrXSk7XG5cbiAgICAvKlxuICAgICBpZiAodGhpcy52YWxpZCA9PT0gdGhpcy5jX3N0YWNrICYmIHRoaXMuY19zdGFjaykge1xuICAgICB0aGlzLnZhbGlkLS07XG4gICAgIH1cbiAgICAgKi9cbiAgfTtcblxuICB2YXIgc2NhbGVNYXRyaXggPSBUcmFuc2Zvcm0ucHJvdG90eXBlLmdldElkZW50aXR5KCk7XG5cbiAgVHJhbnNmb3JtLnByb3RvdHlwZS5zY2FsZSA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICBzY2FsZU1hdHJpeFswXSA9IHg7XG4gICAgc2NhbGVNYXRyaXhbNF0gPSB5O1xuXG4gICAgbWF0My5tdWx0aXBseShzY2FsZU1hdHJpeCwgdGhpcy5tX3N0YWNrW3RoaXMuY19zdGFja10pO1xuXG4gICAgLypcbiAgICAgaWYgKHRoaXMudmFsaWQgPT09IHRoaXMuY19zdGFjayAmJiB0aGlzLmNfc3RhY2spIHtcbiAgICAgdGhpcy52YWxpZC0tO1xuICAgICB9XG4gICAgICovXG4gIH07XG5cbiAgdmFyIHJvdGF0ZU1hdHJpeCA9IFRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0SWRlbnRpdHkoKTtcblxuICBUcmFuc2Zvcm0ucHJvdG90eXBlLnJvdGF0ZSA9IGZ1bmN0aW9uKGFuZykge1xuICAgIHZhciBzQW5nLCBjQW5nO1xuXG4gICAgc0FuZyA9IE1hdGguc2luKC1hbmcpO1xuICAgIGNBbmcgPSBNYXRoLmNvcygtYW5nKTtcblxuICAgIHJvdGF0ZU1hdHJpeFswXSA9IGNBbmc7XG4gICAgcm90YXRlTWF0cml4WzNdID0gc0FuZztcbiAgICByb3RhdGVNYXRyaXhbMV0gPSAtc0FuZztcbiAgICByb3RhdGVNYXRyaXhbNF0gPSBjQW5nO1xuXG4gICAgbWF0My5tdWx0aXBseShyb3RhdGVNYXRyaXgsIHRoaXMubV9zdGFja1t0aGlzLmNfc3RhY2tdKTtcblxuICAgIC8qXG4gICAgIGlmICh0aGlzLnZhbGlkID09PSB0aGlzLmNfc3RhY2sgJiYgdGhpcy5jX3N0YWNrKSB7XG4gICAgIHRoaXMudmFsaWQtLTtcbiAgICAgfVxuICAgICAqL1xuICB9O1xuXG4gIHZhciBXZWJHTDJEID0gdGhpcy5XZWJHTDJEID0gZnVuY3Rpb24gV2ViR0wyRChjYW52YXMsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmNhbnZhcyAgICAgICAgID0gY2FudmFzO1xuICAgIHRoaXMub3B0aW9ucyAgICAgICAgPSBvcHRpb25zIHx8IHt9O1xuICAgIHRoaXMuZ2wgICAgICAgICAgICAgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5mcyAgICAgICAgICAgICA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnZzICAgICAgICAgICAgID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2hhZGVyUHJvZ3JhbSAgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy50cmFuc2Zvcm0gICAgICA9IG5ldyBUcmFuc2Zvcm0oKTtcbiAgICB0aGlzLnNoYWRlclBvb2wgICAgID0gW107XG4gICAgdGhpcy5tYXhUZXh0dXJlU2l6ZSA9IHVuZGVmaW5lZDtcblxuICAgIC8vIFNhdmUgYSByZWZlcmVuY2UgdG8gdGhlIFdlYkdMMkQgaW5zdGFuY2Ugb24gdGhlIGNhbnZhcyBvYmplY3RcbiAgICBjYW52YXMuZ2wyZCAgICAgICAgID0gdGhpcztcblxuICAgIC8vIFN0b3JlIGdldENvbnRleHQgZnVuY3Rpb24gZm9yIGxhdGVyIHVzZVxuICAgIGNhbnZhcy4kZ2V0Q29udGV4dCAgPSBjYW52YXMuZ2V0Q29udGV4dDtcblxuICAgIC8vIE92ZXJyaWRlIGdldENvbnRleHQgZnVuY3Rpb24gd2l0aCBcIndlYmdsLTJkXCIgZW5hYmxlZCB2ZXJzaW9uXG4gICAgY2FudmFzLmdldENvbnRleHQgPSAoZnVuY3Rpb24oZ2wyZCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgICAgICAgaWYgKChnbDJkLm9wdGlvbnMuZm9yY2UgfHwgY29udGV4dCA9PT0gXCJ3ZWJnbC0yZFwiKSAmJiAhKGNhbnZhcy53aWR0aCA9PT0gMCB8fCBjYW52YXMuaGVpZ2h0ID09PSAwKSkge1xuICAgICAgICAgIGlmIChnbDJkLmdsKSB7IHJldHVybiBnbDJkLmdsOyB9XG5cbiAgICAgICAgICB2YXIgZ2wgPSBnbDJkLmdsID0gZ2wyZC5jYW52YXMuJGdldENvbnRleHQoXCJleHBlcmltZW50YWwtd2ViZ2xcIik7XG5cbiAgICAgICAgICBnbDJkLmluaXRTaGFkZXJzKCk7XG4gICAgICAgICAgZ2wyZC5pbml0QnVmZmVycygpO1xuXG4gICAgICAgICAgLy8gQXBwZW5kIENhbnZhczJEIEFQSSBmZWF0dXJlcyB0byB0aGUgV2ViR0wgY29udGV4dFxuICAgICAgICAgIGdsMmQuaW5pdENhbnZhczJEQVBJKCk7XG5cbiAgICAgICAgICBnbC52aWV3cG9ydCgwLCAwLCBnbDJkLmNhbnZhcy53aWR0aCwgZ2wyZC5jYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICAgIC8vIERpc2FibGVzIHdyaXRpbmcgdG8gZGVzdC1hbHBoYVxuICAgICAgICAgIC8vIGdsLmNvbG9yTWFzaygxLDEsMSwwKVxuXG4gICAgICAgICAgLy8gRGVwdGggb3B0aW9uc1xuICAgICAgICAgIC8vZ2wuZW5hYmxlKGdsLkRFUFRIX1RFU1QpO1xuICAgICAgICAgIC8vZ2wuZGVwdGhGdW5jKGdsLkxFUVVBTCk7XG5cbiAgICAgICAgICAvLyBCbGVuZGluZyBvcHRpb25zXG4gICAgICAgICAgLy8gU2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTE1MjEwMzUvYmxlbmRpbmctd2l0aC1odG1sLWJhY2tncm91bmQtaW4td2ViZ2xcbiAgICAgICAgICBnbC5lbmFibGUoZ2wuQkxFTkQpO1xuICAgICAgICAgIGdsLmJsZW5kRnVuY1NlcGFyYXRlKGdsLlNSQ19BTFBIQSwgZ2wuT05FX01JTlVTX1NSQ19BTFBIQSwgZ2wuT05FLCBnbC5PTkVfTUlOVVNfU1JDX0FMUEhBKTtcblxuICAgICAgICAgIGdsMmQubWF4VGV4dHVyZVNpemUgPSBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1RFWFRVUkVfU0laRSk7XG5cbiAgICAgICAgICByZXR1cm4gZ2w7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGdsMmQuY2FudmFzLiRnZXRDb250ZXh0KGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0odGhpcykpO1xuXG4gICAgdGhpcy5wb3N0SW5pdCgpO1xuICB9O1xuXG4gIC8vIEVuYWJsZXMgV2ViR0wyRCBvbiB5b3VyIGNhbnZhc1xuICBXZWJHTDJELmVuYWJsZSA9IGZ1bmN0aW9uKGNhbnZhcywgb3B0aW9ucykge1xuICAgIHJldHVybiBjYW52YXMuZ2wyZCB8fCBuZXcgV2ViR0wyRChjYW52YXMsIG9wdGlvbnMpO1xuICB9O1xuXG5cbiAgLy8gU2hhZGVyIFBvb2wgQml0TWFza3MsIGkuZS4gc01hc2sgPSAoc2hhZGVyTWFzay50ZXh0dXJlK3NoYWRlck1hc2suc3Ryb2tlKVxuICB2YXIgc2hhZGVyTWFzayA9IHtcbiAgICB0ZXh0dXJlOiAxLFxuICAgIGNyb3A6IDIsXG4gICAgcGF0aDogNFxuICB9O1xuXG5cbiAgLy8gRnJhZ21lbnQgc2hhZGVyIHNvdXJjZVxuICBXZWJHTDJELnByb3RvdHlwZS5nZXRGcmFnbWVudFNoYWRlclNvdXJjZSA9IGZ1bmN0aW9uIGdldEZyYWdtZW50U2hhZGVyU291cmNlKHNNYXNrKSB7XG4gICAgdmFyIGZzU291cmNlID0gW1xuICAgICAgXCIjaWZkZWYgR0xfRVNcIixcbiAgICAgIFwicHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1wiLFxuICAgICAgXCIjZW5kaWZcIixcblxuICAgICAgXCIjZGVmaW5lIGhhc1RleHR1cmUgXCIgKyAoKHNNYXNrJnNoYWRlck1hc2sudGV4dHVyZSkgPyBcIjFcIiA6IFwiMFwiKSxcbiAgICAgIFwiI2RlZmluZSBoYXNDcm9wIFwiICsgKChzTWFzayZzaGFkZXJNYXNrLmNyb3ApID8gXCIxXCIgOiBcIjBcIiksXG5cbiAgICAgIFwidmFyeWluZyB2ZWM0IHZDb2xvcjtcIixcblxuICAgICAgXCIjaWYgaGFzVGV4dHVyZVwiLFxuICAgICAgXCJ2YXJ5aW5nIHZlYzIgdlRleHR1cmVDb29yZDtcIixcbiAgICAgIFwidW5pZm9ybSBzYW1wbGVyMkQgdVNhbXBsZXI7XCIsXG4gICAgICBcIiNpZiBoYXNDcm9wXCIsXG4gICAgICBcInVuaWZvcm0gdmVjNCB1Q3JvcFNvdXJjZTtcIixcbiAgICAgIFwiI2VuZGlmXCIsXG4gICAgICBcIiNlbmRpZlwiLFxuXG4gICAgICBcInZvaWQgbWFpbih2b2lkKSB7XCIsXG4gICAgICBcIiNpZiBoYXNUZXh0dXJlXCIsXG4gICAgICBcIiNpZiBoYXNDcm9wXCIsXG4gICAgICBcImdsX0ZyYWdDb2xvciA9IHRleHR1cmUyRCh1U2FtcGxlciwgdmVjMih2VGV4dHVyZUNvb3JkLnggKiB1Q3JvcFNvdXJjZS56LCB2VGV4dHVyZUNvb3JkLnkgKiB1Q3JvcFNvdXJjZS53KSArIHVDcm9wU291cmNlLnh5KTtcIixcbiAgICAgIFwiI2Vsc2VcIixcbiAgICAgIFwiZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKHVTYW1wbGVyLCB2VGV4dHVyZUNvb3JkKTtcIixcbiAgICAgIFwiI2VuZGlmXCIsXG4gICAgICBcIiNlbHNlXCIsXG4gICAgICBcImdsX0ZyYWdDb2xvciA9IHZDb2xvcjtcIixcbiAgICAgIFwiI2VuZGlmXCIsXG4gICAgICBcIn1cIlxuICAgIF0uam9pbihcIlxcblwiKTtcblxuICAgIHJldHVybiBmc1NvdXJjZTtcbiAgfTtcblxuICBXZWJHTDJELnByb3RvdHlwZS5nZXRWZXJ0ZXhTaGFkZXJTb3VyY2UgPSBmdW5jdGlvbiBnZXRWZXJ0ZXhTaGFkZXJTb3VyY2Uoc3RhY2tEZXB0aCxzTWFzaykge1xuICAgIHZhciB3ID0gMiAvIHRoaXMuY2FudmFzLndpZHRoLCBoID0gLTIgLyB0aGlzLmNhbnZhcy5oZWlnaHQ7XG5cbiAgICBzdGFja0RlcHRoID0gc3RhY2tEZXB0aCB8fCAxO1xuXG4gICAgdmFyIHZzU291cmNlID0gW1xuICAgICAgXCIjZGVmaW5lIGhhc1RleHR1cmUgXCIgKyAoKHNNYXNrJnNoYWRlck1hc2sudGV4dHVyZSkgPyBcIjFcIiA6IFwiMFwiKSxcbiAgICAgIFwiYXR0cmlidXRlIHZlYzQgYVZlcnRleFBvc2l0aW9uO1wiLFxuXG4gICAgICBcIiNpZiBoYXNUZXh0dXJlXCIsXG4gICAgICBcInZhcnlpbmcgdmVjMiB2VGV4dHVyZUNvb3JkO1wiLFxuICAgICAgXCIjZW5kaWZcIixcblxuICAgICAgXCJ1bmlmb3JtIHZlYzQgdUNvbG9yO1wiLFxuICAgICAgXCJ1bmlmb3JtIG1hdDMgdVRyYW5zZm9ybXNbXCIgKyBzdGFja0RlcHRoICsgXCJdO1wiLFxuXG4gICAgICBcInZhcnlpbmcgdmVjNCB2Q29sb3I7XCIsXG5cbiAgICAgIFwiY29uc3QgbWF0NCBwTWF0cml4ID0gbWF0NChcIiArIHcgKyBcIiwwLDAsMCwgMCxcIiArIGggKyBcIiwwLDAsIDAsMCwxLjAsMS4wLCAtMS4wLDEuMCwwLDApO1wiLFxuXG4gICAgICBcIm1hdDMgY3J1bmNoU3RhY2sodm9pZCkge1wiLFxuICAgICAgXCJtYXQzIHJlc3VsdCA9IHVUcmFuc2Zvcm1zWzBdO1wiLFxuICAgICAgXCJmb3IgKGludCBpID0gMTsgaSA8IFwiICsgc3RhY2tEZXB0aCArIFwiOyArK2kpIHtcIixcbiAgICAgIFwicmVzdWx0ID0gdVRyYW5zZm9ybXNbaV0gKiByZXN1bHQ7XCIsXG4gICAgICBcIn1cIixcbiAgICAgIFwicmV0dXJuIHJlc3VsdDtcIixcbiAgICAgIFwifVwiLFxuXG4gICAgICBcInZvaWQgbWFpbih2b2lkKSB7XCIsXG4gICAgICBcInZlYzMgcG9zaXRpb24gPSBjcnVuY2hTdGFjaygpICogdmVjMyhhVmVydGV4UG9zaXRpb24ueCwgYVZlcnRleFBvc2l0aW9uLnksIDEuMCk7XCIsXG4gICAgICBcImdsX1Bvc2l0aW9uID0gcE1hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XCIsXG4gICAgICBcInZDb2xvciA9IHVDb2xvcjtcIixcbiAgICAgIFwiI2lmIGhhc1RleHR1cmVcIixcbiAgICAgIFwidlRleHR1cmVDb29yZCA9IGFWZXJ0ZXhQb3NpdGlvbi56dztcIixcbiAgICAgIFwiI2VuZGlmXCIsXG4gICAgICBcIn1cIlxuICAgIF0uam9pbihcIlxcblwiKTtcbiAgICByZXR1cm4gdnNTb3VyY2U7XG4gIH07XG5cblxuICAvLyBJbml0aWFsaXplIGZyYWdtZW50IGFuZCB2ZXJ0ZXggc2hhZGVyc1xuICBXZWJHTDJELnByb3RvdHlwZS5pbml0U2hhZGVycyA9IGZ1bmN0aW9uIGluaXRTaGFkZXJzKHRyYW5zZm9ybVN0YWNrRGVwdGgsc01hc2spIHtcbiAgICB2YXIgZ2wgPSB0aGlzLmdsO1xuXG4gICAgdHJhbnNmb3JtU3RhY2tEZXB0aCA9IHRyYW5zZm9ybVN0YWNrRGVwdGggfHwgMTtcbiAgICBzTWFzayA9IHNNYXNrIHx8IDA7XG4gICAgdmFyIHN0b3JlZFNoYWRlciA9IHRoaXMuc2hhZGVyUG9vbFt0cmFuc2Zvcm1TdGFja0RlcHRoXTtcblxuICAgIGlmICghc3RvcmVkU2hhZGVyKSB7IHN0b3JlZFNoYWRlciA9IHRoaXMuc2hhZGVyUG9vbFt0cmFuc2Zvcm1TdGFja0RlcHRoXSA9IFtdOyB9XG4gICAgc3RvcmVkU2hhZGVyID0gc3RvcmVkU2hhZGVyW3NNYXNrXTtcblxuICAgIGlmIChzdG9yZWRTaGFkZXIpIHtcbiAgICAgIGdsLnVzZVByb2dyYW0oc3RvcmVkU2hhZGVyKTtcbiAgICAgIHRoaXMuc2hhZGVyUHJvZ3JhbSA9IHN0b3JlZFNoYWRlcjtcbiAgICAgIHJldHVybiBzdG9yZWRTaGFkZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBmcyA9IHRoaXMuZnMgPSBnbC5jcmVhdGVTaGFkZXIoZ2wuRlJBR01FTlRfU0hBREVSKTtcbiAgICAgIGdsLnNoYWRlclNvdXJjZSh0aGlzLmZzLCB0aGlzLmdldEZyYWdtZW50U2hhZGVyU291cmNlKHNNYXNrKSk7XG4gICAgICBnbC5jb21waWxlU2hhZGVyKHRoaXMuZnMpO1xuXG4gICAgICBpZiAoIWdsLmdldFNoYWRlclBhcmFtZXRlcih0aGlzLmZzLCBnbC5DT01QSUxFX1NUQVRVUykpIHtcbiAgICAgICAgdGhyb3cgXCJmcmFnbWVudCBzaGFkZXIgZXJyb3I6IFwiK2dsLmdldFNoYWRlckluZm9Mb2codGhpcy5mcyk7XG4gICAgICB9XG5cbiAgICAgIHZhciB2cyA9IHRoaXMudnMgPSBnbC5jcmVhdGVTaGFkZXIoZ2wuVkVSVEVYX1NIQURFUik7XG4gICAgICBnbC5zaGFkZXJTb3VyY2UodGhpcy52cywgdGhpcy5nZXRWZXJ0ZXhTaGFkZXJTb3VyY2UodHJhbnNmb3JtU3RhY2tEZXB0aCxzTWFzaykpO1xuICAgICAgZ2wuY29tcGlsZVNoYWRlcih0aGlzLnZzKTtcblxuICAgICAgaWYgKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIodGhpcy52cywgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XG4gICAgICAgIHRocm93IFwidmVydGV4IHNoYWRlciBlcnJvcjogXCIrZ2wuZ2V0U2hhZGVySW5mb0xvZyh0aGlzLnZzKTtcbiAgICAgIH1cblxuXG4gICAgICB2YXIgc2hhZGVyUHJvZ3JhbSA9IHRoaXMuc2hhZGVyUHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcbiAgICAgIHNoYWRlclByb2dyYW0uc3RhY2tEZXB0aCA9IHRyYW5zZm9ybVN0YWNrRGVwdGg7XG4gICAgICBnbC5hdHRhY2hTaGFkZXIoc2hhZGVyUHJvZ3JhbSwgZnMpO1xuICAgICAgZ2wuYXR0YWNoU2hhZGVyKHNoYWRlclByb2dyYW0sIHZzKTtcbiAgICAgIGdsLmxpbmtQcm9ncmFtKHNoYWRlclByb2dyYW0pO1xuXG4gICAgICBpZiAoIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIoc2hhZGVyUHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpKSB7XG4gICAgICAgIHRocm93IFwiQ291bGQgbm90IGluaXRpYWxpc2Ugc2hhZGVycy5cIjtcbiAgICAgIH1cblxuICAgICAgZ2wudXNlUHJvZ3JhbShzaGFkZXJQcm9ncmFtKTtcblxuICAgICAgc2hhZGVyUHJvZ3JhbS52ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZSA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHNoYWRlclByb2dyYW0sIFwiYVZlcnRleFBvc2l0aW9uXCIpO1xuICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoc2hhZGVyUHJvZ3JhbS52ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZSk7XG5cbiAgICAgIHNoYWRlclByb2dyYW0udUNvbG9yICAgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3VDb2xvcicpO1xuICAgICAgc2hhZGVyUHJvZ3JhbS51U2FtcGxlciA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAndVNhbXBsZXInKTtcbiAgICAgIHNoYWRlclByb2dyYW0udUNyb3BTb3VyY2UgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3VDcm9wU291cmNlJyk7XG5cbiAgICAgIHNoYWRlclByb2dyYW0udVRyYW5zZm9ybXMgPSBbXTtcbiAgICAgIGZvciAodmFyIGk9MDsgaTx0cmFuc2Zvcm1TdGFja0RlcHRoOyArK2kpIHtcbiAgICAgICAgc2hhZGVyUHJvZ3JhbS51VHJhbnNmb3Jtc1tpXSA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAndVRyYW5zZm9ybXNbJyArIGkgKyAnXScpO1xuICAgICAgfSAvL2ZvclxuICAgICAgdGhpcy5zaGFkZXJQb29sW3RyYW5zZm9ybVN0YWNrRGVwdGhdW3NNYXNrXSA9IHNoYWRlclByb2dyYW07XG4gICAgICByZXR1cm4gc2hhZGVyUHJvZ3JhbTtcbiAgICB9IC8vaWZcbiAgfTtcblxuICB2YXIgcmVjdFZlcnRleFBvc2l0aW9uQnVmZmVyO1xuICB2YXIgcmVjdFZlcnRleENvbG9yQnVmZmVyO1xuXG4gIHZhciBwYXRoVmVydGV4UG9zaXRpb25CdWZmZXI7XG4gIHZhciBwYXRoVmVydGV4Q29sb3JCdWZmZXI7XG5cbiAgLy8gMkQgVmVydGljZXMgYW5kIFRleHR1cmUgVVYgY29vcmRzXG4gIHZhciByZWN0VmVydHMgPSBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAwLDAsIDAsMCxcbiAgICAwLDEsIDAsMSxcbiAgICAxLDEsIDEsMSxcbiAgICAxLDAsIDEsMFxuICBdKTtcblxuICBXZWJHTDJELnByb3RvdHlwZS5pbml0QnVmZmVycyA9IGZ1bmN0aW9uIGluaXRCdWZmZXJzKCkge1xuICAgIHZhciBnbCA9IHRoaXMuZ2w7XG5cbiAgICByZWN0VmVydGV4UG9zaXRpb25CdWZmZXIgID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgcmVjdFZlcnRleENvbG9yQnVmZmVyICAgICA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuXG4gICAgcGF0aFZlcnRleFBvc2l0aW9uQnVmZmVyICA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgIHBhdGhWZXJ0ZXhDb2xvckJ1ZmZlciAgICAgPSBnbC5jcmVhdGVCdWZmZXIoKTtcblxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCByZWN0VmVydGV4UG9zaXRpb25CdWZmZXIpO1xuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCByZWN0VmVydHMsIGdsLlNUQVRJQ19EUkFXKTtcbiAgfTtcblxuICAvLyBNYWludGFpbnMgYW4gYXJyYXkgb2YgYWxsIFdlYkdMMkQgaW5zdGFuY2VzXG4gIFdlYkdMMkQuaW5zdGFuY2VzID0gW107XG5cbiAgV2ViR0wyRC5wcm90b3R5cGUucG9zdEluaXQgPSBmdW5jdGlvbigpIHtcbiAgICBXZWJHTDJELmluc3RhbmNlcy5wdXNoKHRoaXMpO1xuICB9O1xuXG4gIC8vIEV4dGVuZHMgZ2wgY29udGV4dCB3aXRoIENhbnZhczJEIEFQSVxuICBXZWJHTDJELnByb3RvdHlwZS5pbml0Q2FudmFzMkRBUEkgPSBmdW5jdGlvbiBpbml0Q2FudmFzMkRBUEkoKSB7XG4gICAgdmFyIGdsMmQgPSB0aGlzLFxuICAgICAgZ2wgICA9IHRoaXMuZ2w7XG5cblxuICAgIC8vIFJlbmRlcmluZyBDYW52YXMgZm9yIHRleHQgZm9udHNcbiAgICB2YXIgdGV4dENhbnZhcyAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgdGV4dENhbnZhcy53aWR0aCAgPSBnbDJkLmNhbnZhcy53aWR0aDtcbiAgICB0ZXh0Q2FudmFzLmhlaWdodCA9IGdsMmQuY2FudmFzLmhlaWdodDtcbiAgICB2YXIgdGV4dEN0eCAgICAgICA9IHRleHRDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgdmFyIHJlUkdCQUNvbG9yID0gL15yZ2IoYSk/XFwoXFxzKigtP1tcXGRdKykoJSk/XFxzKixcXHMqKC0/W1xcZF0rKSglKT9cXHMqLFxccyooLT9bXFxkXSspKCUpP1xccyosP1xccyooLT9bXFxkXFwuXSspP1xccypcXCkkLztcbiAgICB2YXIgcmVIU0xBQ29sb3IgPSAvXmhzbChhKT9cXChcXHMqKC0/W1xcZFxcLl0rKVxccyosXFxzKigtP1tcXGRcXC5dKyklXFxzKixcXHMqKC0/W1xcZFxcLl0rKSVcXHMqLD9cXHMqKC0/W1xcZFxcLl0rKT9cXHMqXFwpJC87XG4gICAgdmFyIHJlSGV4NkNvbG9yID0gL14jKFswLTlBLUZhLWZdezZ9KSQvO1xuICAgIHZhciByZUhleDNDb2xvciA9IC9eIyhbMC05QS1GYS1mXSkoWzAtOUEtRmEtZl0pKFswLTlBLUZhLWZdKSQvO1xuXG4gICAgLy8gaHR0cDovL2F4b25mbHV4LmNvbS9oYW5keS1yZ2ItdG8taHNsLWFuZC1yZ2ItdG8taHN2LWNvbG9yLW1vZGVsLWNcbiAgICBmdW5jdGlvbiBIU0xBVG9SR0JBKGgsIHMsIGwsIGEpIHtcbiAgICAgIHZhciByLCBnLCBiLCBwLCBxO1xuXG4gICAgICAvLyBDbGFtcCBhbmQgTm9ybWFsaXplIHZhbHVlc1xuICAgICAgaCA9ICgoKGggJSAzNjApICsgMzYwKSAlIDM2MCkgLyAzNjA7XG4gICAgICBzID0gcyA+IDEwMCA/IDEgOiBzIC8gMTAwO1xuICAgICAgcyA9IHMgPCAgIDAgPyAwIDogcztcbiAgICAgIGwgPSBsID4gMTAwID8gMSA6IGwgLyAxMDA7XG4gICAgICBsID0gbCA8ICAgMCA/IDAgOiBsO1xuXG4gICAgICBpZihzID09IDApIHtcbiAgICAgICAgciA9IGcgPSBiID0gbDsgLy8gYWNocm9tYXRpY1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZnVuY3Rpb24gaHVlMnJnYihwLCBxLCB0KXtcbiAgICAgICAgICBpZih0IDwgMCkgdCArPSAxO1xuICAgICAgICAgIGlmKHQgPiAxKSB0IC09IDE7XG4gICAgICAgICAgaWYodCA8IDEvNikgcmV0dXJuIHAgKyAocSAtIHApICogNiAqIHQ7XG4gICAgICAgICAgaWYodCA8IDEvMikgcmV0dXJuIHE7XG4gICAgICAgICAgaWYodCA8IDIvMykgcmV0dXJuIHAgKyAocSAtIHApICogKDIvMyAtIHQpICogNjtcbiAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgfVxuXG4gICAgICAgIHEgPSBsIDwgMC41ID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzO1xuICAgICAgICBwID0gMiAqIGwgLSBxO1xuXG4gICAgICAgIHIgPSBodWUycmdiKHAsIHEsIGggKyAxLzMpO1xuICAgICAgICBnID0gaHVlMnJnYihwLCBxLCBoKTtcbiAgICAgICAgYiA9IGh1ZTJyZ2IocCwgcSwgaCAtIDEvMyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbciwgZywgYiwgYV07XG4gICAgfVxuXG5cbiAgICAvLyBDb252ZXJ0cyByZ2IoYSkgY29sb3Igc3RyaW5nIHRvIGdsIGNvbG9yIHZlY3RvclxuICAgIGZ1bmN0aW9uIGNvbG9yU3RyaW5nVG9WZWM0KHZhbHVlKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gW10sIG1hdGNoLCBjaGFubmVsLCBpc1BlcmNlbnQsIGhhc0FscGhhLCBhbHBoYUNoYW5uZWwsIHNhbWVUeXBlO1xuXG4gICAgICBpZiAoKG1hdGNoID0gcmVSR0JBQ29sb3IuZXhlYyh2YWx1ZSkpKSB7XG4gICAgICAgIGhhc0FscGhhID0gbWF0Y2hbMV0sIGFscGhhQ2hhbm5lbCA9IHBhcnNlRmxvYXQobWF0Y2hbOF0pO1xuXG4gICAgICAgIGlmICgoaGFzQWxwaGEgJiYgaXNOYU4oYWxwaGFDaGFubmVsKSkgfHwgKCFoYXNBbHBoYSAmJiAhaXNOYU4oYWxwaGFDaGFubmVsKSkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBzYW1lVHlwZSA9IG1hdGNoWzNdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAyOyBpIDwgODsgaSs9Mikge1xuICAgICAgICAgIGNoYW5uZWwgPSBtYXRjaFtpXSwgaXNQZXJjZW50ID0gbWF0Y2hbaSsxXTtcblxuICAgICAgICAgIGlmIChpc1BlcmNlbnQgIT09IHNhbWVUeXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ2xhbXAgYW5kIG5vcm1hbGl6ZSB2YWx1ZXNcbiAgICAgICAgICBpZiAoaXNQZXJjZW50KSB7XG4gICAgICAgICAgICBjaGFubmVsID0gY2hhbm5lbCA+IDEwMCA/IDEgOiBjaGFubmVsIC8gMTAwO1xuICAgICAgICAgICAgY2hhbm5lbCA9IGNoYW5uZWwgPCAgIDAgPyAwIDogY2hhbm5lbDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hhbm5lbCA9IGNoYW5uZWwgPiAyNTUgPyAxIDogY2hhbm5lbCAvIDI1NTtcbiAgICAgICAgICAgIGNoYW5uZWwgPSBjaGFubmVsIDwgICAwID8gMCA6IGNoYW5uZWw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzdWx0LnB1c2goY2hhbm5lbCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQucHVzaChoYXNBbHBoYSA/IGFscGhhQ2hhbm5lbCA6IDEuMCk7XG4gICAgICB9IGVsc2UgaWYgKChtYXRjaCA9IHJlSFNMQUNvbG9yLmV4ZWModmFsdWUpKSkge1xuICAgICAgICBoYXNBbHBoYSA9IG1hdGNoWzFdLCBhbHBoYUNoYW5uZWwgPSBwYXJzZUZsb2F0KG1hdGNoWzVdKTtcbiAgICAgICAgcmVzdWx0ID0gSFNMQVRvUkdCQShtYXRjaFsyXSwgbWF0Y2hbM10sIG1hdGNoWzRdLCBwYXJzZUZsb2F0KGhhc0FscGhhICYmIGFscGhhQ2hhbm5lbCA/IGFscGhhQ2hhbm5lbCA6IDEuMCkpO1xuICAgICAgfSBlbHNlIGlmICgobWF0Y2ggPSByZUhleDZDb2xvci5leGVjKHZhbHVlKSkpIHtcbiAgICAgICAgdmFyIGNvbG9ySW50ID0gcGFyc2VJbnQobWF0Y2hbMV0sIDE2KTtcbiAgICAgICAgcmVzdWx0ID0gWygoY29sb3JJbnQgJiAweEZGMDAwMCkgPj4gMTYpIC8gMjU1LCAoKGNvbG9ySW50ICYgMHgwMEZGMDApID4+IDgpIC8gMjU1LCAoY29sb3JJbnQgJiAweDAwMDBGRikgLyAyNTUsIDEuMF07XG4gICAgICB9IGVsc2UgaWYgKChtYXRjaCA9IHJlSGV4M0NvbG9yLmV4ZWModmFsdWUpKSkge1xuICAgICAgICB2YXIgaGV4U3RyaW5nID0gXCIjXCIgKyBbbWF0Y2hbMV0sIG1hdGNoWzFdLCBtYXRjaFsyXSwgbWF0Y2hbMl0sIG1hdGNoWzNdLCBtYXRjaFszXV0uam9pbihcIlwiKTtcbiAgICAgICAgcmVzdWx0ID0gY29sb3JTdHJpbmdUb1ZlYzQoaGV4U3RyaW5nKTtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUudG9Mb3dlckNhc2UoKSBpbiBjb2xvcktleXdvcmRzKSB7XG4gICAgICAgIHJlc3VsdCA9IGNvbG9yU3RyaW5nVG9WZWM0KGNvbG9yS2V5d29yZHNbdmFsdWUudG9Mb3dlckNhc2UoKV0pO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSBcInRyYW5zcGFyZW50XCIpIHtcbiAgICAgICAgcmVzdWx0ID0gWzAsIDAsIDAsIDBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQ29sb3Iga2V5d29yZHMgbm90IHlldCBpbXBsZW1lbnRlZCwgaWUgXCJvcmFuZ2VcIiwgcmV0dXJuIGhvdCBwaW5rXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb2xvclZlY1RvU3RyaW5nKHZlYzQpIHtcbiAgICAgIHJldHVybiBcInJnYmEoXCIgKyAodmVjNFswXSAqIDI1NSkgKyBcIiwgXCIgKyAodmVjNFsxXSAqIDI1NSkgKyBcIiwgXCIgKyAodmVjNFsyXSAqIDI1NSkgKyBcIiwgXCIgKyBwYXJzZUZsb2F0KHZlYzRbM10pICsgXCIpXCI7XG4gICAgfVxuXG4gICAgdmFyIGNvbG9yS2V5d29yZHMgPSB7XG4gICAgICBhbGljZWJsdWU6ICAgICAgICAgICAgXCIjZjBmOGZmXCIsXG4gICAgICBhbnRpcXVld2hpdGU6ICAgICAgICAgXCIjZmFlYmQ3XCIsXG4gICAgICBhcXVhOiAgICAgICAgICAgICAgICAgXCIjMDBmZmZmXCIsXG4gICAgICBhcXVhbWFyaW5lOiAgICAgICAgICAgXCIjN2ZmZmQ0XCIsXG4gICAgICBhenVyZTogICAgICAgICAgICAgICAgXCIjZjBmZmZmXCIsXG4gICAgICBiZWlnZTogICAgICAgICAgICAgICAgXCIjZjVmNWRjXCIsXG4gICAgICBiaXNxdWU6ICAgICAgICAgICAgICAgXCIjZmZlNGM0XCIsXG4gICAgICBibGFjazogICAgICAgICAgICAgICAgXCIjMDAwMDAwXCIsXG4gICAgICBibGFuY2hlZGFsbW9uZDogICAgICAgXCIjZmZlYmNkXCIsXG4gICAgICBibHVlOiAgICAgICAgICAgICAgICAgXCIjMDAwMGZmXCIsXG4gICAgICBibHVldmlvbGV0OiAgICAgICAgICAgXCIjOGEyYmUyXCIsXG4gICAgICBicm93bjogICAgICAgICAgICAgICAgXCIjYTUyYTJhXCIsXG4gICAgICBidXJseXdvb2Q6ICAgICAgICAgICAgXCIjZGViODg3XCIsXG4gICAgICBjYWRldGJsdWU6ICAgICAgICAgICAgXCIjNWY5ZWEwXCIsXG4gICAgICBjaGFydHJldXNlOiAgICAgICAgICAgXCIjN2ZmZjAwXCIsXG4gICAgICBjaG9jb2xhdGU6ICAgICAgICAgICAgXCIjZDI2OTFlXCIsXG4gICAgICBjb3JhbDogICAgICAgICAgICAgICAgXCIjZmY3ZjUwXCIsXG4gICAgICBjb3JuZmxvd2VyYmx1ZTogICAgICAgXCIjNjQ5NWVkXCIsXG4gICAgICBjb3Juc2lsazogICAgICAgICAgICAgXCIjZmZmOGRjXCIsXG4gICAgICBjcmltc29uOiAgICAgICAgICAgICAgXCIjZGMxNDNjXCIsXG4gICAgICBjeWFuOiAgICAgICAgICAgICAgICAgXCIjMDBmZmZmXCIsXG4gICAgICBkYXJrYmx1ZTogICAgICAgICAgICAgXCIjMDAwMDhiXCIsXG4gICAgICBkYXJrY3lhbjogICAgICAgICAgICAgXCIjMDA4YjhiXCIsXG4gICAgICBkYXJrZ29sZGVucm9kOiAgICAgICAgXCIjYjg4NjBiXCIsXG4gICAgICBkYXJrZ3JheTogICAgICAgICAgICAgXCIjYTlhOWE5XCIsXG4gICAgICBkYXJrZ3JlZW46ICAgICAgICAgICAgXCIjMDA2NDAwXCIsXG4gICAgICBkYXJra2hha2k6ICAgICAgICAgICAgXCIjYmRiNzZiXCIsXG4gICAgICBkYXJrbWFnZW50YTogICAgICAgICAgXCIjOGIwMDhiXCIsXG4gICAgICBkYXJrb2xpdmVncmVlbjogICAgICAgXCIjNTU2YjJmXCIsXG4gICAgICBkYXJrb3JhbmdlOiAgICAgICAgICAgXCIjZmY4YzAwXCIsXG4gICAgICBkYXJrb3JjaGlkOiAgICAgICAgICAgXCIjOTkzMmNjXCIsXG4gICAgICBkYXJrcmVkOiAgICAgICAgICAgICAgXCIjOGIwMDAwXCIsXG4gICAgICBkYXJrc2FsbW9uOiAgICAgICAgICAgXCIjZTk5NjdhXCIsXG4gICAgICBkYXJrc2VhZ3JlZW46ICAgICAgICAgXCIjOGZiYzhmXCIsXG4gICAgICBkYXJrc2xhdGVibHVlOiAgICAgICAgXCIjNDgzZDhiXCIsXG4gICAgICBkYXJrc2xhdGVncmF5OiAgICAgICAgXCIjMmY0ZjRmXCIsXG4gICAgICBkYXJrdHVycXVvaXNlOiAgICAgICAgXCIjMDBjZWQxXCIsXG4gICAgICBkYXJrdmlvbGV0OiAgICAgICAgICAgXCIjOTQwMGQzXCIsXG4gICAgICBkZWVwcGluazogICAgICAgICAgICAgXCIjZmYxNDkzXCIsXG4gICAgICBkZWVwc2t5Ymx1ZTogICAgICAgICAgXCIjMDBiZmZmXCIsXG4gICAgICBkaW1ncmF5OiAgICAgICAgICAgICAgXCIjNjk2OTY5XCIsXG4gICAgICBkb2RnZXJibHVlOiAgICAgICAgICAgXCIjMWU5MGZmXCIsXG4gICAgICBmaXJlYnJpY2s6ICAgICAgICAgICAgXCIjYjIyMjIyXCIsXG4gICAgICBmbG9yYWx3aGl0ZTogICAgICAgICAgXCIjZmZmYWYwXCIsXG4gICAgICBmb3Jlc3RncmVlbjogICAgICAgICAgXCIjMjI4YjIyXCIsXG4gICAgICBmdWNoc2lhOiAgICAgICAgICAgICAgXCIjZmYwMGZmXCIsXG4gICAgICBnYWluc2Jvcm86ICAgICAgICAgICAgXCIjZGNkY2RjXCIsXG4gICAgICBnaG9zdHdoaXRlOiAgICAgICAgICAgXCIjZjhmOGZmXCIsXG4gICAgICBnb2xkOiAgICAgICAgICAgICAgICAgXCIjZmZkNzAwXCIsXG4gICAgICBnb2xkZW5yb2Q6ICAgICAgICAgICAgXCIjZGFhNTIwXCIsXG4gICAgICBncmF5OiAgICAgICAgICAgICAgICAgXCIjODA4MDgwXCIsXG4gICAgICBncmVlbjogICAgICAgICAgICAgICAgXCIjMDA4MDAwXCIsXG4gICAgICBncmVlbnllbGxvdzogICAgICAgICAgXCIjYWRmZjJmXCIsXG4gICAgICBncmV5OiAgICAgICAgICAgICAgICAgXCIjODA4MDgwXCIsXG4gICAgICBob25leWRldzogICAgICAgICAgICAgXCIjZjBmZmYwXCIsXG4gICAgICBob3RwaW5rOiAgICAgICAgICAgICAgXCIjZmY2OWI0XCIsXG4gICAgICBpbmRpYW5yZWQ6ICAgICAgICAgICAgXCIjY2Q1YzVjXCIsXG4gICAgICBpbmRpZ286ICAgICAgICAgICAgICAgXCIjNGIwMDgyXCIsXG4gICAgICBpdm9yeTogICAgICAgICAgICAgICAgXCIjZmZmZmYwXCIsXG4gICAgICBraGFraTogICAgICAgICAgICAgICAgXCIjZjBlNjhjXCIsXG4gICAgICBsYXZlbmRlcjogICAgICAgICAgICAgXCIjZTZlNmZhXCIsXG4gICAgICBsYXZlbmRlcmJsdXNoOiAgICAgICAgXCIjZmZmMGY1XCIsXG4gICAgICBsYXduZ3JlZW46ICAgICAgICAgICAgXCIjN2NmYzAwXCIsXG4gICAgICBsZW1vbmNoaWZmb246ICAgICAgICAgXCIjZmZmYWNkXCIsXG4gICAgICBsaWdodGJsdWU6ICAgICAgICAgICAgXCIjYWRkOGU2XCIsXG4gICAgICBsaWdodGNvcmFsOiAgICAgICAgICAgXCIjZjA4MDgwXCIsXG4gICAgICBsaWdodGN5YW46ICAgICAgICAgICAgXCIjZTBmZmZmXCIsXG4gICAgICBsaWdodGdvbGRlbnJvZHllbGxvdzogXCIjZmFmYWQyXCIsXG4gICAgICBsaWdodGdyZXk6ICAgICAgICAgICAgXCIjZDNkM2QzXCIsXG4gICAgICBsaWdodGdyZWVuOiAgICAgICAgICAgXCIjOTBlZTkwXCIsXG4gICAgICBsaWdodHBpbms6ICAgICAgICAgICAgXCIjZmZiNmMxXCIsXG4gICAgICBsaWdodHNhbG1vbjogICAgICAgICAgXCIjZmZhMDdhXCIsXG4gICAgICBsaWdodHNlYWdyZWVuOiAgICAgICAgXCIjMjBiMmFhXCIsXG4gICAgICBsaWdodHNreWJsdWU6ICAgICAgICAgXCIjODdjZWZhXCIsXG4gICAgICBsaWdodHNsYXRlZ3JheTogICAgICAgXCIjNzc4ODk5XCIsXG4gICAgICBsaWdodHN0ZWVsYmx1ZTogICAgICAgXCIjYjBjNGRlXCIsXG4gICAgICBsaWdodHllbGxvdzogICAgICAgICAgXCIjZmZmZmUwXCIsXG4gICAgICBsaW1lOiAgICAgICAgICAgICAgICAgXCIjMDBmZjAwXCIsXG4gICAgICBsaW1lZ3JlZW46ICAgICAgICAgICAgXCIjMzJjZDMyXCIsXG4gICAgICBsaW5lbjogICAgICAgICAgICAgICAgXCIjZmFmMGU2XCIsXG4gICAgICBtYWdlbnRhOiAgICAgICAgICAgICAgXCIjZmYwMGZmXCIsXG4gICAgICBtYXJvb246ICAgICAgICAgICAgICAgXCIjODAwMDAwXCIsXG4gICAgICBtZWRpdW1hcXVhbWFyaW5lOiAgICAgXCIjNjZjZGFhXCIsXG4gICAgICBtZWRpdW1ibHVlOiAgICAgICAgICAgXCIjMDAwMGNkXCIsXG4gICAgICBtZWRpdW1vcmNoaWQ6ICAgICAgICAgXCIjYmE1NWQzXCIsXG4gICAgICBtZWRpdW1wdXJwbGU6ICAgICAgICAgXCIjOTM3MGQ4XCIsXG4gICAgICBtZWRpdW1zZWFncmVlbjogICAgICAgXCIjM2NiMzcxXCIsXG4gICAgICBtZWRpdW1zbGF0ZWJsdWU6ICAgICAgXCIjN2I2OGVlXCIsXG4gICAgICBtZWRpdW1zcHJpbmdncmVlbjogICAgXCIjMDBmYTlhXCIsXG4gICAgICBtZWRpdW10dXJxdW9pc2U6ICAgICAgXCIjNDhkMWNjXCIsXG4gICAgICBtZWRpdW12aW9sZXRyZWQ6ICAgICAgXCIjYzcxNTg1XCIsXG4gICAgICBtaWRuaWdodGJsdWU6ICAgICAgICAgXCIjMTkxOTcwXCIsXG4gICAgICBtaW50Y3JlYW06ICAgICAgICAgICAgXCIjZjVmZmZhXCIsXG4gICAgICBtaXN0eXJvc2U6ICAgICAgICAgICAgXCIjZmZlNGUxXCIsXG4gICAgICBtb2NjYXNpbjogICAgICAgICAgICAgXCIjZmZlNGI1XCIsXG4gICAgICBuYXZham93aGl0ZTogICAgICAgICAgXCIjZmZkZWFkXCIsXG4gICAgICBuYXZ5OiAgICAgICAgICAgICAgICAgXCIjMDAwMDgwXCIsXG4gICAgICBvbGRsYWNlOiAgICAgICAgICAgICAgXCIjZmRmNWU2XCIsXG4gICAgICBvbGl2ZTogICAgICAgICAgICAgICAgXCIjODA4MDAwXCIsXG4gICAgICBvbGl2ZWRyYWI6ICAgICAgICAgICAgXCIjNmI4ZTIzXCIsXG4gICAgICBvcmFuZ2U6ICAgICAgICAgICAgICAgXCIjZmZhNTAwXCIsXG4gICAgICBvcmFuZ2VyZWQ6ICAgICAgICAgICAgXCIjZmY0NTAwXCIsXG4gICAgICBvcmNoaWQ6ICAgICAgICAgICAgICAgXCIjZGE3MGQ2XCIsXG4gICAgICBwYWxlZ29sZGVucm9kOiAgICAgICAgXCIjZWVlOGFhXCIsXG4gICAgICBwYWxlZ3JlZW46ICAgICAgICAgICAgXCIjOThmYjk4XCIsXG4gICAgICBwYWxldHVycXVvaXNlOiAgICAgICAgXCIjYWZlZWVlXCIsXG4gICAgICBwYWxldmlvbGV0cmVkOiAgICAgICAgXCIjZDg3MDkzXCIsXG4gICAgICBwYXBheWF3aGlwOiAgICAgICAgICAgXCIjZmZlZmQ1XCIsXG4gICAgICBwZWFjaHB1ZmY6ICAgICAgICAgICAgXCIjZmZkYWI5XCIsXG4gICAgICBwZXJ1OiAgICAgICAgICAgICAgICAgXCIjY2Q4NTNmXCIsXG4gICAgICBwaW5rOiAgICAgICAgICAgICAgICAgXCIjZmZjMGNiXCIsXG4gICAgICBwbHVtOiAgICAgICAgICAgICAgICAgXCIjZGRhMGRkXCIsXG4gICAgICBwb3dkZXJibHVlOiAgICAgICAgICAgXCIjYjBlMGU2XCIsXG4gICAgICBwdXJwbGU6ICAgICAgICAgICAgICAgXCIjODAwMDgwXCIsXG4gICAgICByZWQ6ICAgICAgICAgICAgICAgICAgXCIjZmYwMDAwXCIsXG4gICAgICByb3N5YnJvd246ICAgICAgICAgICAgXCIjYmM4ZjhmXCIsXG4gICAgICByb3lhbGJsdWU6ICAgICAgICAgICAgXCIjNDE2OWUxXCIsXG4gICAgICBzYWRkbGVicm93bjogICAgICAgICAgXCIjOGI0NTEzXCIsXG4gICAgICBzYWxtb246ICAgICAgICAgICAgICAgXCIjZmE4MDcyXCIsXG4gICAgICBzYW5keWJyb3duOiAgICAgICAgICAgXCIjZjRhNDYwXCIsXG4gICAgICBzZWFncmVlbjogICAgICAgICAgICAgXCIjMmU4YjU3XCIsXG4gICAgICBzZWFzaGVsbDogICAgICAgICAgICAgXCIjZmZmNWVlXCIsXG4gICAgICBzaWVubmE6ICAgICAgICAgICAgICAgXCIjYTA1MjJkXCIsXG4gICAgICBzaWx2ZXI6ICAgICAgICAgICAgICAgXCIjYzBjMGMwXCIsXG4gICAgICBza3libHVlOiAgICAgICAgICAgICAgXCIjODdjZWViXCIsXG4gICAgICBzbGF0ZWJsdWU6ICAgICAgICAgICAgXCIjNmE1YWNkXCIsXG4gICAgICBzbGF0ZWdyYXk6ICAgICAgICAgICAgXCIjNzA4MDkwXCIsXG4gICAgICBzbm93OiAgICAgICAgICAgICAgICAgXCIjZmZmYWZhXCIsXG4gICAgICBzcHJpbmdncmVlbjogICAgICAgICAgXCIjMDBmZjdmXCIsXG4gICAgICBzdGVlbGJsdWU6ICAgICAgICAgICAgXCIjNDY4MmI0XCIsXG4gICAgICB0YW46ICAgICAgICAgICAgICAgICAgXCIjZDJiNDhjXCIsXG4gICAgICB0ZWFsOiAgICAgICAgICAgICAgICAgXCIjMDA4MDgwXCIsXG4gICAgICB0aGlzdGxlOiAgICAgICAgICAgICAgXCIjZDhiZmQ4XCIsXG4gICAgICB0b21hdG86ICAgICAgICAgICAgICAgXCIjZmY2MzQ3XCIsXG4gICAgICB0dXJxdW9pc2U6ICAgICAgICAgICAgXCIjNDBlMGQwXCIsXG4gICAgICB2aW9sZXQ6ICAgICAgICAgICAgICAgXCIjZWU4MmVlXCIsXG4gICAgICB3aGVhdDogICAgICAgICAgICAgICAgXCIjZjVkZWIzXCIsXG4gICAgICB3aGl0ZTogICAgICAgICAgICAgICAgXCIjZmZmZmZmXCIsXG4gICAgICB3aGl0ZXNtb2tlOiAgICAgICAgICAgXCIjZjVmNWY1XCIsXG4gICAgICB5ZWxsb3c6ICAgICAgICAgICAgICAgXCIjZmZmZjAwXCIsXG4gICAgICB5ZWxsb3dncmVlbjogICAgICAgICAgXCIjOWFjZDMyXCJcbiAgICB9O1xuXG4gICAgLy8gTWFpbnRhaW4gZHJhd2luZyBzdGF0ZSBwYXJhbXMgZHVyaW5nIGdsLnNhdmUgYW5kIGdsLnJlc3RvcmUuIHNlZSBzYXZlRHJhd1N0YXRlKCkgYW5kIHJlc3RvcmVEcmF3U3RhdGUoKVxuICAgIHZhciBkcmF3U3RhdGUgPSB7fSwgZHJhd1N0YXRlU3RhY2sgPSBbXTtcblxuICAgIC8vIEEgZmFzdCBzaW1wbGUgc2hhbGxvdyBjbG9uZVxuICAgIGZ1bmN0aW9uIGNsb25lT2JqZWN0KG9iaikge1xuICAgICAgdmFyIHRhcmdldCA9IHt9O1xuICAgICAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgIHRhcmdldFtpXSA9IG9ialtpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzYXZlRHJhd1N0YXRlKCkge1xuICAgICAgdmFyIGJha2VkRHJhd1N0YXRlID0ge1xuICAgICAgICBmaWxsU3R5bGU6ICAgICAgICAgICAgICAgIFtkcmF3U3RhdGUuZmlsbFN0eWxlWzBdLCAgIGRyYXdTdGF0ZS5maWxsU3R5bGVbMV0sICAgZHJhd1N0YXRlLmZpbGxTdHlsZVsyXSwgICBkcmF3U3RhdGUuZmlsbFN0eWxlWzNdXSxcbiAgICAgICAgc3Ryb2tlU3R5bGU6ICAgICAgICAgICAgICBbZHJhd1N0YXRlLnN0cm9rZVN0eWxlWzBdLCBkcmF3U3RhdGUuc3Ryb2tlU3R5bGVbMV0sIGRyYXdTdGF0ZS5zdHJva2VTdHlsZVsyXSwgZHJhd1N0YXRlLnN0cm9rZVN0eWxlWzNdXSxcbiAgICAgICAgZ2xvYmFsQWxwaGE6ICAgICAgICAgICAgICBkcmF3U3RhdGUuZ2xvYmFsQWxwaGEsXG4gICAgICAgIGdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbjogZHJhd1N0YXRlLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbixcbiAgICAgICAgbGluZUNhcDogICAgICAgICAgICAgICAgICBkcmF3U3RhdGUubGluZUNhcCxcbiAgICAgICAgbGluZUpvaW46ICAgICAgICAgICAgICAgICBkcmF3U3RhdGUubGluZUpvaW4sXG4gICAgICAgIGxpbmVXaWR0aDogICAgICAgICAgICAgICAgZHJhd1N0YXRlLmxpbmVXaWR0aCxcbiAgICAgICAgbWl0ZXJMaW1pdDogICAgICAgICAgICAgICBkcmF3U3RhdGUubWl0ZXJMaW1pdCxcbiAgICAgICAgc2hhZG93Q29sb3I6ICAgICAgICAgICAgICBkcmF3U3RhdGUuc2hhZG93Q29sb3IsXG4gICAgICAgIHNoYWRvd0JsdXI6ICAgICAgICAgICAgICAgZHJhd1N0YXRlLnNoYWRvd0JsdXIsXG4gICAgICAgIHNoYWRvd09mZnNldFg6ICAgICAgICAgICAgZHJhd1N0YXRlLnNoYWRvd09mZnNldFgsXG4gICAgICAgIHNoYWRvd09mZnNldFk6ICAgICAgICAgICAgZHJhd1N0YXRlLnNoYWRvd09mZnNldFksXG4gICAgICAgIHRleHRBbGlnbjogICAgICAgICAgICAgICAgZHJhd1N0YXRlLnRleHRBbGlnbixcbiAgICAgICAgZm9udDogICAgICAgICAgICAgICAgICAgICBkcmF3U3RhdGUuZm9udCxcbiAgICAgICAgdGV4dEJhc2VsaW5lOiAgICAgICAgICAgICBkcmF3U3RhdGUudGV4dEJhc2VsaW5lXG4gICAgICB9O1xuXG4gICAgICBkcmF3U3RhdGVTdGFjay5wdXNoKGJha2VkRHJhd1N0YXRlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXN0b3JlRHJhd1N0YXRlKCkge1xuICAgICAgaWYgKGRyYXdTdGF0ZVN0YWNrLmxlbmd0aCkge1xuICAgICAgICBkcmF3U3RhdGUgPSBkcmF3U3RhdGVTdGFjay5wb3AoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBXZWJHTCByZXF1aXJlcyBjb2xvcnMgYXMgYSB2ZWN0b3Igd2hpbGUgQ2FudmFzMkQgc2V0cyBjb2xvcnMgYXMgYW4gcmdiYSBzdHJpbmdcbiAgICAvLyBUaGVzZSBnZXR0ZXJzIGFuZCBzZXR0ZXJzIHN0b3JlIHRoZSBvcmlnaW5hbCByZ2JhIHN0cmluZyBhcyB3ZWxsIGFzIGNvbnZlcnQgdG8gYSB2ZWN0b3JcbiAgICBkcmF3U3RhdGUuZmlsbFN0eWxlID0gWzAsIDAsIDAsIDFdOyAvLyBkZWZhdWx0IGJsYWNrXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZ2wsIFwiZmlsbFN0eWxlXCIsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBjb2xvclZlY1RvU3RyaW5nKGRyYXdTdGF0ZS5maWxsU3R5bGUpOyB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBkcmF3U3RhdGUuZmlsbFN0eWxlID0gY29sb3JTdHJpbmdUb1ZlYzQodmFsdWUpIHx8IGRyYXdTdGF0ZS5maWxsU3R5bGU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkcmF3U3RhdGUuc3Ryb2tlU3R5bGUgPSBbMCwgMCwgMCwgMV07IC8vIGRlZmF1bHQgYmxhY2tcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShnbCwgXCJzdHJva2VTdHlsZVwiLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29sb3JWZWNUb1N0cmluZyhkcmF3U3RhdGUuc3Ryb2tlU3R5bGUpOyB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBkcmF3U3RhdGUuc3Ryb2tlU3R5bGUgPSBjb2xvclN0cmluZ1RvVmVjNCh2YWx1ZSkgfHwgZHJhd1N0eWxlLnN0cm9rZVN0eWxlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gV2ViR0wgYWxyZWFkeSBoYXMgYSBsaW5lV2lkdGgoKSBmdW5jdGlvbiBidXQgQ2FudmFzMkQgcmVxdWlyZXMgYSBsaW5lV2lkdGggcHJvcGVydHlcbiAgICAvLyBTdG9yZSB0aGUgb3JpZ2luYWwgbGluZVdpZHRoKCkgZnVuY3Rpb24gZm9yIGxhdGVyIHVzZVxuICAgIGdsLiRsaW5lV2lkdGggPSBnbC5saW5lV2lkdGg7XG4gICAgZHJhd1N0YXRlLmxpbmVXaWR0aCA9IDEuMDtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShnbCwgXCJsaW5lV2lkdGhcIiwge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIGRyYXdTdGF0ZS5saW5lV2lkdGg7IH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGdsLiRsaW5lV2lkdGgodmFsdWUpO1xuICAgICAgICBkcmF3U3RhdGUubGluZVdpZHRoID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBDdXJyZW50bHkgdW5zdXBwb3J0ZWQgYXR0cmlidXRlcyBhbmQgdGhlaXIgZGVmYXVsdCB2YWx1ZXNcbiAgICBkcmF3U3RhdGUubGluZUNhcCA9IFwiYnV0dFwiO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGdsLCBcImxpbmVDYXBcIiwge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIGRyYXdTdGF0ZS5saW5lQ2FwOyB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBkcmF3U3RhdGUubGluZUNhcCA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZHJhd1N0YXRlLmxpbmVKb2luID0gXCJtaXRlclwiO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGdsLCBcImxpbmVKb2luXCIsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBkcmF3U3RhdGUubGluZUpvaW47IH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGRyYXdTdGF0ZS5saW5lSm9pbiA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZHJhd1N0YXRlLm1pdGVyTGltaXQgPSAxMDtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShnbCwgXCJtaXRlckxpbWl0XCIsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBkcmF3U3RhdGUubWl0ZXJMaW1pdDsgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgZHJhd1N0YXRlLm1pdGVyTGltaXQgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRyYXdTdGF0ZS5zaGFkb3dPZmZzZXRYID0gMDtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShnbCwgXCJzaGFkb3dPZmZzZXRYXCIsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBkcmF3U3RhdGUuc2hhZG93T2Zmc2V0WDsgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgZHJhd1N0YXRlLnNoYWRvd09mZnNldFggPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRyYXdTdGF0ZS5zaGFkb3dPZmZzZXRZID0gMDtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShnbCwgXCJzaGFkb3dPZmZzZXRZXCIsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBkcmF3U3RhdGUuc2hhZG93T2Zmc2V0WTsgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgZHJhd1N0YXRlLnNoYWRvd09mZnNldFkgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRyYXdTdGF0ZS5zaGFkb3dCbHVyID0gMDtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShnbCwgXCJzaGFkb3dCbHVyXCIsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBkcmF3U3RhdGUuc2hhZG93Qmx1cjsgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgZHJhd1N0YXRlLnNoYWRvd0JsdXIgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRyYXdTdGF0ZS5zaGFkb3dDb2xvciA9IFwicmdiYSgwLCAwLCAwLCAwLjApXCI7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZ2wsIFwic2hhZG93Q29sb3JcIiwge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIGRyYXdTdGF0ZS5zaGFkb3dDb2xvcjsgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgZHJhd1N0YXRlLnNoYWRvd0NvbG9yID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkcmF3U3RhdGUuZm9udCA9IFwiMTBweCBzYW5zLXNlcmlmXCI7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZ2wsIFwiZm9udFwiLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gZHJhd1N0YXRlLmZvbnQ7IH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHRleHRDdHguZm9udCA9IHZhbHVlO1xuICAgICAgICBkcmF3U3RhdGUuZm9udCA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZHJhd1N0YXRlLnRleHRBbGlnbiA9IFwic3RhcnRcIjtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShnbCwgXCJ0ZXh0QWxpZ25cIiwge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIGRyYXdTdGF0ZS50ZXh0QWxpZ247IH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGRyYXdTdGF0ZS50ZXh0QWxpZ24gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRyYXdTdGF0ZS50ZXh0QmFzZWxpbmUgPSBcImFscGhhYmV0aWNcIjtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShnbCwgXCJ0ZXh0QmFzZWxpbmVcIiwge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIGRyYXdTdGF0ZS50ZXh0QmFzZWxpbmU7IH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGRyYXdTdGF0ZS50ZXh0QmFzZWxpbmUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFRoaXMgYXR0cmlidXRlIHdpbGwgbmVlZCB0byBjb250cm9sIGdsb2JhbCBhbHBoYSBvZiBvYmplY3RzIGRyYXduLlxuICAgIGRyYXdTdGF0ZS5nbG9iYWxBbHBoYSA9IDEuMDtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShnbCwgXCJnbG9iYWxBbHBoYVwiLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gZHJhd1N0YXRlLmdsb2JhbEFscGhhOyB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBkcmF3U3RhdGUuZ2xvYmFsQWxwaGEgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFRoaXMgYXR0cmlidXRlIHdpbGwgbmVlZCB0byBzZXQgdGhlIGdsLmJsZW5kRnVuYyBtb2RlXG4gICAgZHJhd1N0YXRlLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwic291cmNlLW92ZXJcIjtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShnbCwgXCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb25cIiwge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIGRyYXdTdGF0ZS5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb247IH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGRyYXdTdGF0ZS5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIE5lZWQgYSBzb2x1dGlvbiBmb3IgZHJhd2luZyB0ZXh0IHRoYXQgaXNudCBzdHVwaWQgc2xvd1xuICAgIGdsLmZpbGxUZXh0ID0gZnVuY3Rpb24gZmlsbFRleHQodGV4dCwgeCwgeSkge1xuICAgICAgLypcbiAgICAgICB0ZXh0Q3R4LmNsZWFyUmVjdCgwLCAwLCBnbDJkLmNhbnZhcy53aWR0aCwgZ2wyZC5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICB0ZXh0Q3R4LmZpbGxTdHlsZSA9IGdsLmZpbGxTdHlsZTtcbiAgICAgICB0ZXh0Q3R4LmZpbGxUZXh0KHRleHQsIHgsIHkpO1xuXG4gICAgICAgZ2wuZHJhd0ltYWdlKHRleHRDYW52YXMsIDAsIDApO1xuICAgICAgICovXG4gICAgfTtcblxuICAgIGdsLnN0cm9rZVRleHQgPSBmdW5jdGlvbiBzdHJva2VUZXh0KCkge307XG5cbiAgICBnbC5tZWFzdXJlVGV4dCA9IGZ1bmN0aW9uIG1lYXN1cmVUZXh0KCkgeyByZXR1cm4gMTsgfTtcblxuICAgIHZhciB0ZW1wQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdmFyIHRlbXBDdHggPSB0ZW1wQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBnbC5zYXZlID0gZnVuY3Rpb24gc2F2ZSgpIHtcbiAgICAgIGdsMmQudHJhbnNmb3JtLnB1c2hNYXRyaXgoKTtcbiAgICAgIHNhdmVEcmF3U3RhdGUoKTtcbiAgICB9O1xuXG4gICAgZ2wucmVzdG9yZSA9IGZ1bmN0aW9uIHJlc3RvcmUoKSB7XG4gICAgICBnbDJkLnRyYW5zZm9ybS5wb3BNYXRyaXgoKTtcbiAgICAgIHJlc3RvcmVEcmF3U3RhdGUoKTtcbiAgICB9O1xuXG4gICAgZ2wudHJhbnNsYXRlID0gZnVuY3Rpb24gdHJhbnNsYXRlKHgsIHkpIHtcbiAgICAgIGdsMmQudHJhbnNmb3JtLnRyYW5zbGF0ZSh4LCB5KTtcbiAgICB9O1xuXG4gICAgZ2wucm90YXRlID0gZnVuY3Rpb24gcm90YXRlKGEpIHtcbiAgICAgIGdsMmQudHJhbnNmb3JtLnJvdGF0ZShhKTtcbiAgICB9O1xuXG4gICAgZ2wuc2NhbGUgPSBmdW5jdGlvbiBzY2FsZSh4LCB5KSB7XG4gICAgICBnbDJkLnRyYW5zZm9ybS5zY2FsZSh4LCB5KTtcbiAgICB9O1xuXG4gICAgZ2wuY3JlYXRlSW1hZ2VEYXRhID0gZnVuY3Rpb24gY3JlYXRlSW1hZ2VEYXRhKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgIHJldHVybiB0ZW1wQ3R4LmNyZWF0ZUltYWdlRGF0YSh3aWR0aCwgaGVpZ2h0KTtcbiAgICB9O1xuXG4gICAgZ2wuZ2V0SW1hZ2VEYXRhID0gZnVuY3Rpb24gZ2V0SW1hZ2VEYXRhKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgIHZhciBkYXRhID0gdGVtcEN0eC5jcmVhdGVJbWFnZURhdGEod2lkdGgsIGhlaWdodCk7XG4gICAgICB2YXIgYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkod2lkdGgqaGVpZ2h0KjQpO1xuICAgICAgZ2wucmVhZFBpeGVscyh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCBidWZmZXIpO1xuICAgICAgdmFyIHc9d2lkdGgqNCwgaD1oZWlnaHQ7XG4gICAgICBmb3IgKHZhciBpPTAsIG1heEk9aC8yOyBpPG1heEk7ICsraSkge1xuICAgICAgICBmb3IgKHZhciBqPTAsIG1heEo9dzsgajxtYXhKOyArK2opIHtcbiAgICAgICAgICB2YXIgaW5kZXgxID0gaSAqIHcgKyBqO1xuICAgICAgICAgIHZhciBpbmRleDIgPSAoaC1pLTEpICogdyArIGo7XG4gICAgICAgICAgZGF0YS5kYXRhW2luZGV4MV0gPSBidWZmZXJbaW5kZXgyXTtcbiAgICAgICAgICBkYXRhLmRhdGFbaW5kZXgyXSA9IGJ1ZmZlcltpbmRleDFdO1xuICAgICAgICB9IC8vZm9yXG4gICAgICB9IC8vZm9yXG5cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH07XG5cbiAgICBnbC5wdXRJbWFnZURhdGEgPSBmdW5jdGlvbiBwdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCB4LCB5KSB7XG4gICAgICBnbC5kcmF3SW1hZ2UoaW1hZ2VEYXRhLCB4LCB5KTtcbiAgICB9O1xuXG4gICAgZ2wudHJhbnNmb3JtID0gZnVuY3Rpb24gdHJhbnNmb3JtKG0xMSwgbTEyLCBtMjEsIG0yMiwgZHgsIGR5KSB7XG4gICAgICB2YXIgbSA9IGdsMmQudHJhbnNmb3JtLm1fc3RhY2tbZ2wyZC50cmFuc2Zvcm0uY19zdGFja107XG5cbiAgICAgIG1bMF0gKj0gbTExO1xuICAgICAgbVsxXSAqPSBtMjE7XG4gICAgICBtWzJdICo9IGR4O1xuICAgICAgbVszXSAqPSBtMTI7XG4gICAgICBtWzRdICo9IG0yMjtcbiAgICAgIG1bNV0gKj0gZHk7XG4gICAgICBtWzZdID0gMDtcbiAgICAgIG1bN10gPSAwO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBzZW5kVHJhbnNmb3JtU3RhY2soc3ApIHtcbiAgICAgIHZhciBzdGFjayA9IGdsMmQudHJhbnNmb3JtLm1fc3RhY2s7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbWF4SSA9IGdsMmQudHJhbnNmb3JtLmNfc3RhY2sgKyAxOyBpIDwgbWF4STsgKytpKSB7XG4gICAgICAgIGdsLnVuaWZvcm1NYXRyaXgzZnYoc3AudVRyYW5zZm9ybXNbaV0sIGZhbHNlLCBzdGFja1ttYXhJLTEtaV0pO1xuICAgICAgfSAvL2ZvclxuICAgIH1cblxuICAgIGdsLnNldFRyYW5zZm9ybSA9IGZ1bmN0aW9uIHNldFRyYW5zZm9ybShtMTEsIG0xMiwgbTIxLCBtMjIsIGR4LCBkeSkge1xuICAgICAgZ2wyZC50cmFuc2Zvcm0uc2V0SWRlbnRpdHkoKTtcbiAgICAgIGdsLnRyYW5zZm9ybS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBnbC5maWxsUmVjdCA9IGZ1bmN0aW9uIGZpbGxSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgIHZhciB0cmFuc2Zvcm0gPSBnbDJkLnRyYW5zZm9ybTtcbiAgICAgIHZhciBzaGFkZXJQcm9ncmFtID0gZ2wyZC5pbml0U2hhZGVycyh0cmFuc2Zvcm0uY19zdGFjaysyLDApO1xuXG4gICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgcmVjdFZlcnRleFBvc2l0aW9uQnVmZmVyKTtcbiAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoc2hhZGVyUHJvZ3JhbS52ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZSwgNCwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcblxuICAgICAgdHJhbnNmb3JtLnB1c2hNYXRyaXgoKTtcblxuICAgICAgdHJhbnNmb3JtLnRyYW5zbGF0ZSh4LCB5KTtcbiAgICAgIHRyYW5zZm9ybS5zY2FsZSh3aWR0aCwgaGVpZ2h0KTtcblxuICAgICAgc2VuZFRyYW5zZm9ybVN0YWNrKHNoYWRlclByb2dyYW0pO1xuXG4gICAgICBnbC51bmlmb3JtNGYoc2hhZGVyUHJvZ3JhbS51Q29sb3IsIGRyYXdTdGF0ZS5maWxsU3R5bGVbMF0sIGRyYXdTdGF0ZS5maWxsU3R5bGVbMV0sIGRyYXdTdGF0ZS5maWxsU3R5bGVbMl0sIGRyYXdTdGF0ZS5maWxsU3R5bGVbM10pO1xuXG4gICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFX0ZBTiwgMCwgNCk7XG5cbiAgICAgIHRyYW5zZm9ybS5wb3BNYXRyaXgoKTtcbiAgICB9O1xuXG4gICAgZ2wuc3Ryb2tlUmVjdCA9IGZ1bmN0aW9uIHN0cm9rZVJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgdmFyIHRyYW5zZm9ybSA9IGdsMmQudHJhbnNmb3JtO1xuICAgICAgdmFyIHNoYWRlclByb2dyYW0gPSBnbDJkLmluaXRTaGFkZXJzKHRyYW5zZm9ybS5jX3N0YWNrICsgMiwwKTtcblxuICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHJlY3RWZXJ0ZXhQb3NpdGlvbkJ1ZmZlcik7XG4gICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHNoYWRlclByb2dyYW0udmVydGV4UG9zaXRpb25BdHRyaWJ1dGUsIDQsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XG5cbiAgICAgIHRyYW5zZm9ybS5wdXNoTWF0cml4KCk7XG5cbiAgICAgIHRyYW5zZm9ybS50cmFuc2xhdGUoeCwgeSk7XG4gICAgICB0cmFuc2Zvcm0uc2NhbGUod2lkdGgsIGhlaWdodCk7XG5cbiAgICAgIHNlbmRUcmFuc2Zvcm1TdGFjayhzaGFkZXJQcm9ncmFtKTtcblxuICAgICAgZ2wudW5pZm9ybTRmKHNoYWRlclByb2dyYW0udUNvbG9yLCBkcmF3U3RhdGUuc3Ryb2tlU3R5bGVbMF0sIGRyYXdTdGF0ZS5zdHJva2VTdHlsZVsxXSwgZHJhd1N0YXRlLnN0cm9rZVN0eWxlWzJdLCBkcmF3U3RhdGUuc3Ryb2tlU3R5bGVbM10pO1xuXG4gICAgICBnbC5kcmF3QXJyYXlzKGdsLkxJTkVfTE9PUCwgMCwgNCk7XG5cbiAgICAgIHRyYW5zZm9ybS5wb3BNYXRyaXgoKTtcbiAgICB9O1xuXG4gICAgZ2wuY2xlYXJSZWN0ID0gZnVuY3Rpb24gY2xlYXJSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpIHt9O1xuXG4gICAgdmFyIHN1YlBhdGhzID0gW107XG5cbiAgICBmdW5jdGlvbiBTdWJQYXRoKHgsIHkpIHtcbiAgICAgIHRoaXMuY2xvc2VkID0gZmFsc2U7XG4gICAgICB0aGlzLnZlcnRzID0gW3gsIHksIDAsIDBdO1xuICAgIH1cblxuICAgIC8vIEVtcHR5IHRoZSBsaXN0IG9mIHN1YnBhdGhzIHNvIHRoYXQgdGhlIGNvbnRleHQgb25jZSBhZ2FpbiBoYXMgemVybyBzdWJwYXRoc1xuICAgIGdsLmJlZ2luUGF0aCA9IGZ1bmN0aW9uIGJlZ2luUGF0aCgpIHtcbiAgICAgIHN1YlBhdGhzLmxlbmd0aCA9IDA7XG4gICAgfTtcblxuICAgIC8vIE1hcmsgbGFzdCBzdWJwYXRoIGFzIGNsb3NlZCBhbmQgY3JlYXRlIGEgbmV3IHN1YnBhdGggd2l0aCB0aGUgc2FtZSBzdGFydGluZyBwb2ludCBhcyB0aGUgcHJldmlvdXMgc3VicGF0aFxuICAgIGdsLmNsb3NlUGF0aCA9IGZ1bmN0aW9uIGNsb3NlUGF0aCgpIHtcbiAgICAgIGlmIChzdWJQYXRocy5sZW5ndGgpIHtcbiAgICAgICAgLy8gTWFyayBsYXN0IHN1YnBhdGggY2xvc2VkLlxuICAgICAgICB2YXIgcHJldlBhdGggPSBzdWJQYXRoc1tzdWJQYXRocy5sZW5ndGggLTFdLCBzdGFydFggPSBwcmV2UGF0aC52ZXJ0c1swXSwgc3RhcnRZID0gcHJldlBhdGgudmVydHNbMV07XG4gICAgICAgIHByZXZQYXRoLmNsb3NlZCA9IHRydWU7XG5cbiAgICAgICAgLy8gQ3JlYXRlIG5ldyBzdWJwYXRoIHVzaW5nIHRoZSBzdGFydGluZyBwb3NpdGlvbiBvZiBwcmV2aW91cyBzdWJwYXRoXG4gICAgICAgIHZhciBuZXdQYXRoID0gbmV3IFN1YlBhdGgoc3RhcnRYLCBzdGFydFkpO1xuICAgICAgICBzdWJQYXRocy5wdXNoKG5ld1BhdGgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBDcmVhdGUgYSBuZXcgc3VicGF0aCB3aXRoIHRoZSBzcGVjaWZpZWQgcG9pbnQgYXMgaXRzIGZpcnN0IChhbmQgb25seSkgcG9pbnRcbiAgICBnbC5tb3ZlVG8gPSBmdW5jdGlvbiBtb3ZlVG8oeCwgeSkge1xuICAgICAgc3ViUGF0aHMucHVzaChuZXcgU3ViUGF0aCh4LCB5KSk7XG4gICAgfTtcblxuICAgIGdsLmxpbmVUbyA9IGZ1bmN0aW9uIGxpbmVUbyh4LCB5KSB7XG4gICAgICBpZiAoc3ViUGF0aHMubGVuZ3RoKSB7XG4gICAgICAgIHN1YlBhdGhzW3N1YlBhdGhzLmxlbmd0aCAtMV0udmVydHMucHVzaCh4LCB5LCAwLCAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIENyZWF0ZSBhIG5ldyBzdWJwYXRoIGlmIG5vbmUgY3VycmVudGx5IGV4aXN0XG4gICAgICAgIGdsLm1vdmVUbyh4LCB5KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZ2wucXVhZHJhdGljQ3VydmVUbyA9IGZ1bmN0aW9uIHF1YWRyYXRpY0N1cnZlVG8oY3AxeCwgY3AxeSwgeCwgeSkge307XG5cbiAgICBnbC5iZXppZXJDdXJ2ZVRvID0gZnVuY3Rpb24gYmV6aWVyQ3VydmVUbyhjcDF4LCBjcDF5LCBjcDJ4LCBjcDJ5LCB4LCB5KSB7fTtcblxuICAgIGdsLmFyY1RvID0gZnVuY3Rpb24gYXJjVG8oKSB7fTtcblxuICAgIC8vIEFkZHMgYSBjbG9zZWQgcmVjdCBzdWJwYXRoIGFuZCBjcmVhdGVzIGEgbmV3IHN1YnBhdGhcbiAgICBnbC5yZWN0ID0gZnVuY3Rpb24gcmVjdCh4LCB5LCB3LCBoKSB7XG4gICAgICBnbC5tb3ZlVG8oeCwgeSk7XG4gICAgICBnbC5saW5lVG8oeCArIHcsIHkpO1xuICAgICAgZ2wubGluZVRvKHggKyB3LCB5ICsgaCk7XG4gICAgICBnbC5saW5lVG8oeCwgeSArIGgpO1xuICAgICAgZ2wuY2xvc2VQYXRoKCk7XG4gICAgfTtcblxuICAgIGdsLmFyYyA9IGZ1bmN0aW9uIGFyYyh4LCB5LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBhbnRpY2xvY2t3aXNlKSB7fTtcblxuICAgIGZ1bmN0aW9uIGZpbGxTdWJQYXRoKGluZGV4KSB7XG4gICAgICB2YXIgdHJhbnNmb3JtID0gZ2wyZC50cmFuc2Zvcm07XG4gICAgICB2YXIgc2hhZGVyUHJvZ3JhbSA9IGdsMmQuaW5pdFNoYWRlcnModHJhbnNmb3JtLmNfc3RhY2sgKyAyLDApO1xuXG4gICAgICB2YXIgc3ViUGF0aCA9IHN1YlBhdGhzW2luZGV4XTtcbiAgICAgIHZhciB2ZXJ0cyA9IHN1YlBhdGgudmVydHM7XG5cbiAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBwYXRoVmVydGV4UG9zaXRpb25CdWZmZXIpO1xuICAgICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkodmVydHMpLCBnbC5TVEFUSUNfRFJBVyk7XG5cbiAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoc2hhZGVyUHJvZ3JhbS52ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZSwgNCwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcblxuICAgICAgdHJhbnNmb3JtLnB1c2hNYXRyaXgoKTtcblxuICAgICAgc2VuZFRyYW5zZm9ybVN0YWNrKHNoYWRlclByb2dyYW0pO1xuXG4gICAgICBnbC51bmlmb3JtNGYoc2hhZGVyUHJvZ3JhbS51Q29sb3IsIGRyYXdTdGF0ZS5maWxsU3R5bGVbMF0sIGRyYXdTdGF0ZS5maWxsU3R5bGVbMV0sIGRyYXdTdGF0ZS5maWxsU3R5bGVbMl0sIGRyYXdTdGF0ZS5maWxsU3R5bGVbM10pO1xuXG4gICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFX0ZBTiwgMCwgdmVydHMubGVuZ3RoLzQpO1xuXG4gICAgICB0cmFuc2Zvcm0ucG9wTWF0cml4KCk7XG4gICAgfVxuXG4gICAgZ2wuZmlsbCA9IGZ1bmN0aW9uIGZpbGwoKSB7XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgc3ViUGF0aHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZmlsbFN1YlBhdGgoaSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHN0cm9rZVN1YlBhdGgoaW5kZXgpIHtcbiAgICAgIHZhciB0cmFuc2Zvcm0gPSBnbDJkLnRyYW5zZm9ybTtcbiAgICAgIHZhciBzaGFkZXJQcm9ncmFtID0gZ2wyZC5pbml0U2hhZGVycyh0cmFuc2Zvcm0uY19zdGFjayArIDIsMCk7XG5cbiAgICAgIHZhciBzdWJQYXRoID0gc3ViUGF0aHNbaW5kZXhdO1xuICAgICAgdmFyIHZlcnRzID0gc3ViUGF0aC52ZXJ0cztcblxuICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHBhdGhWZXJ0ZXhQb3NpdGlvbkJ1ZmZlcik7XG4gICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheSh2ZXJ0cyksIGdsLlNUQVRJQ19EUkFXKTtcblxuICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihzaGFkZXJQcm9ncmFtLnZlcnRleFBvc2l0aW9uQXR0cmlidXRlLCA0LCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xuXG4gICAgICB0cmFuc2Zvcm0ucHVzaE1hdHJpeCgpO1xuXG4gICAgICBzZW5kVHJhbnNmb3JtU3RhY2soc2hhZGVyUHJvZ3JhbSk7XG5cbiAgICAgIGdsLnVuaWZvcm00ZihzaGFkZXJQcm9ncmFtLnVDb2xvciwgZHJhd1N0YXRlLnN0cm9rZVN0eWxlWzBdLCBkcmF3U3RhdGUuc3Ryb2tlU3R5bGVbMV0sIGRyYXdTdGF0ZS5zdHJva2VTdHlsZVsyXSwgZHJhd1N0YXRlLnN0cm9rZVN0eWxlWzNdKTtcblxuICAgICAgaWYgKHN1YlBhdGguY2xvc2VkKSB7XG4gICAgICAgIGdsLmRyYXdBcnJheXMoZ2wuTElORV9MT09QLCAwLCB2ZXJ0cy5sZW5ndGgvNCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnbC5kcmF3QXJyYXlzKGdsLkxJTkVfU1RSSVAsIDAsIHZlcnRzLmxlbmd0aC80KTtcbiAgICAgIH1cblxuICAgICAgdHJhbnNmb3JtLnBvcE1hdHJpeCgpO1xuICAgIH1cblxuICAgIGdsLnN0cm9rZSA9IGZ1bmN0aW9uIHN0cm9rZSgpIHtcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBzdWJQYXRocy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzdHJva2VTdWJQYXRoKGkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBnbC5jbGlwID0gZnVuY3Rpb24gY2xpcCgpIHt9O1xuXG4gICAgZ2wuaXNQb2ludEluUGF0aCA9IGZ1bmN0aW9uIGlzUG9pbnRJblBhdGgoKSB7fTtcblxuICAgIGdsLmRyYXdGb2N1c1JpbmcgPSBmdW5jdGlvbiBkcmF3Rm9jdXNSaW5nKCkge307XG5cblxuXG4gICAgdmFyIGltYWdlQ2FjaGUgPSBbXSwgdGV4dHVyZUNhY2hlID0gW107XG5cbiAgICBmdW5jdGlvbiBUZXh0dXJlKGltYWdlKSB7XG4gICAgICB0aGlzLm9iaiAgID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xuICAgICAgdGhpcy5pbmRleCA9IHRleHR1cmVDYWNoZS5wdXNoKHRoaXMpO1xuXG4gICAgICBpbWFnZUNhY2hlLnB1c2goaW1hZ2UpO1xuXG4gICAgICAvLyB3ZSBtYXkgd2lzaCB0byBjb25zaWRlciB0aWxpbmcgbGFyZ2UgaW1hZ2VzIGxpa2UgdGhpcyBpbnN0ZWFkIG9mIHNjYWxpbmcgYW5kXG4gICAgICAvLyBhZGp1c3QgYXBwcm9wcmlhdGVseSAoZmxpcCB0byBuZXh0IHRleHR1cmUgc291cmNlIGFuZCB0aWxlIG9mZnNldCkgd2hlbiBkcmF3aW5nXG4gICAgICBpZiAoaW1hZ2Uud2lkdGggPiBnbDJkLm1heFRleHR1cmVTaXplIHx8IGltYWdlLmhlaWdodCA+IGdsMmQubWF4VGV4dHVyZVNpemUpIHtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG5cbiAgICAgICAgY2FudmFzLndpZHRoICA9IChpbWFnZS53aWR0aCAgPiBnbDJkLm1heFRleHR1cmVTaXplKSA/IGdsMmQubWF4VGV4dHVyZVNpemUgOiBpbWFnZS53aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IChpbWFnZS5oZWlnaHQgPiBnbDJkLm1heFRleHR1cmVTaXplKSA/IGdsMmQubWF4VGV4dHVyZVNpemUgOiBpbWFnZS5oZWlnaHQ7XG5cbiAgICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgMCwgMCwgaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCwgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICBpbWFnZSA9IGNhbnZhcztcbiAgICAgIH1cblxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy5vYmopO1xuICAgICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBnbC5SR0JBLCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCBpbWFnZSk7XG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5DTEFNUF9UT19FREdFKTtcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLkNMQU1QX1RPX0VER0UpO1xuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLkxJTkVBUik7XG5cbiAgICAgIC8vIEVuYWJsZSBNaXAgbWFwcGluZyBvbiBwb3dlci1vZi0yIHRleHR1cmVzXG4gICAgICBpZiAoaXNQT1QoaW1hZ2Uud2lkdGgpICYmIGlzUE9UKGltYWdlLmhlaWdodCkpIHtcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLkxJTkVBUl9NSVBNQVBfTElORUFSKTtcbiAgICAgICAgZ2wuZ2VuZXJhdGVNaXBtYXAoZ2wuVEVYVFVSRV8yRCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTElORUFSKTtcbiAgICAgIH1cblxuICAgICAgLy8gVW5iaW5kIHRleHR1cmVcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpO1xuICAgIH1cblxuICAgIGdsLmRyYXdJbWFnZSA9IGZ1bmN0aW9uIGRyYXdJbWFnZShpbWFnZSwgYSwgYiwgYywgZCwgZSwgZiwgZywgaCkge1xuICAgICAgdmFyIHRyYW5zZm9ybSA9IGdsMmQudHJhbnNmb3JtO1xuXG4gICAgICB0cmFuc2Zvcm0ucHVzaE1hdHJpeCgpO1xuXG4gICAgICB2YXIgc01hc2sgPSBzaGFkZXJNYXNrLnRleHR1cmU7XG4gICAgICB2YXIgZG9Dcm9wID0gZmFsc2U7XG5cbiAgICAgIC8vZHJhd0ltYWdlKGltYWdlLCBkeCwgZHkpXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICB0cmFuc2Zvcm0udHJhbnNsYXRlKGEsIGIpO1xuICAgICAgICB0cmFuc2Zvcm0uc2NhbGUoaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCk7XG4gICAgICB9XG5cbiAgICAgIC8vZHJhd0ltYWdlKGltYWdlLCBkeCwgZHksIGR3LCBkaClcbiAgICAgIGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDUpIHtcbiAgICAgICAgdHJhbnNmb3JtLnRyYW5zbGF0ZShhLCBiKTtcbiAgICAgICAgdHJhbnNmb3JtLnNjYWxlKGMsIGQpO1xuICAgICAgfVxuXG4gICAgICAvL2RyYXdJbWFnZShpbWFnZSwgc3gsIHN5LCBzdywgc2gsIGR4LCBkeSwgZHcsIGRoKVxuICAgICAgZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gOSkge1xuICAgICAgICB0cmFuc2Zvcm0udHJhbnNsYXRlKGUsIGYpO1xuICAgICAgICB0cmFuc2Zvcm0uc2NhbGUoZywgaCk7XG4gICAgICAgIHNNYXNrID0gc01hc2t8c2hhZGVyTWFzay5jcm9wO1xuICAgICAgICBkb0Nyb3AgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2hhZGVyUHJvZ3JhbSA9IGdsMmQuaW5pdFNoYWRlcnModHJhbnNmb3JtLmNfc3RhY2ssIHNNYXNrKTtcblxuICAgICAgdmFyIHRleHR1cmUsIGNhY2hlSW5kZXggPSBpbWFnZUNhY2hlLmluZGV4T2YoaW1hZ2UpO1xuXG4gICAgICBpZiAoY2FjaGVJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdGV4dHVyZSA9IHRleHR1cmVDYWNoZVtjYWNoZUluZGV4XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRleHR1cmUgPSBuZXcgVGV4dHVyZShpbWFnZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkb0Nyb3ApIHtcbiAgICAgICAgZ2wudW5pZm9ybTRmKHNoYWRlclByb2dyYW0udUNyb3BTb3VyY2UsIGEvaW1hZ2Uud2lkdGgsIGIvaW1hZ2UuaGVpZ2h0LCBjL2ltYWdlLndpZHRoLCBkL2ltYWdlLmhlaWdodCk7XG4gICAgICB9XG5cbiAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCByZWN0VmVydGV4UG9zaXRpb25CdWZmZXIpO1xuICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihzaGFkZXJQcm9ncmFtLnZlcnRleFBvc2l0aW9uQXR0cmlidXRlLCA0LCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xuXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlLm9iaik7XG4gICAgICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUwKTtcblxuICAgICAgZ2wudW5pZm9ybTFpKHNoYWRlclByb2dyYW0udVNhbXBsZXIsIDApO1xuXG4gICAgICBzZW5kVHJhbnNmb3JtU3RhY2soc2hhZGVyUHJvZ3JhbSk7XG4gICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFX0ZBTiwgMCwgNCk7XG5cbiAgICAgIHRyYW5zZm9ybS5wb3BNYXRyaXgoKTtcbiAgICB9O1xuICB9O1xuXG59KE1hdGgpKTsiXSwic291cmNlUm9vdCI6IiJ9