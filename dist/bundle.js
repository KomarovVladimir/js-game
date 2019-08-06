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
/* harmony import */ var _EmenyShip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
/* harmony import */ var _Weapon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);
/* harmony import */ var _keyStates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17);









const mediaHandler = new _MediaHandler__WEBPACK_IMPORTED_MODULE_1__["default"]();
const objectHandler = new _ObjectHandler__WEBPACK_IMPORTED_MODULE_2__["default"]();

class GameScene {
    constructor(props) {
        this.name = props.name;
        this.gameWindow = new _GameWindow__WEBPACK_IMPORTED_MODULE_0__["default"]({
            canvas: props.canvas,
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
            speed: 10,
            hitboxWidth: 10,
            hitboxHeight: 10,
            weaponX: 16,
            weaponY: -16,
        });

        this.player = objectHandler.createObject(_Player__WEBPACK_IMPORTED_MODULE_3__["default"], {
            hp: 100,
            speed: 5,
            shotingSpeed: 4,
            image: mediaHandler.getImage('biggership'),
            tilesAmount: 2,
            tileWidth: 64,
            tileHeight: 64,
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
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ship; });
/* harmony import */ var _DynamicObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);


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
            this.weapon.shot(this.positionX, this.positionY);
        }
        let dt = performance.now() - this.lastShot;
        if (dt >= 1000 / this.shotingSpeed) {
            this.weapon.shot(this.positionX, this.positionY);
            this.lastShot = performance.now();
        }
    } 
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DynamicObject; });
/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);


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
/* 11 */
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
        ctx.drawImage(this.image, this.currentTile * this.tileWidth, 0, this.tileWidth, this.tileHeight, -this.tileWidth / 2, -this.tileHeight / 2, this.tileWidth, this.tileHeight);
        ctx.restore();
    }
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EmenyShip; });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _Behavior__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);



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
/* 13 */
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
/* 14 */
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
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Weapon; });
/* harmony import */ var _Bullet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
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
        this.weaponX = props.weaponX || 0;
        this.weaponY = props.weaponY || 0;
    }

    shot(positionX, positionY) {
        objectHandler.createObject(_Bullet__WEBPACK_IMPORTED_MODULE_0__["default"], {
            group: 'playerBullet',
            image: this.bulletImage,
            tileWidth: this.tileWidth,
            tileHeight: this.tileHeight,
            positionX: positionX + this.weaponX,
            positionY: positionY + this.weaponY,
            damage: this.damage,
            speed: this.speed
        });
    }
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bullet; });
/* harmony import */ var _DynamicObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
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
        if (this.positionY + this.tileHeight <= 0) {
            objectHandler.deleteObject(this);
        }
    }
}

/***/ }),
/* 17 */
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
    e.preventDefault();
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
    e.preventDefault();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvTWVkaWFIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lTWVkaWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1NjZW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9HYW1lV2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9PYmplY3RIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvUGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TaGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9EeW5hbWljT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0VtZW55U2hpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvV2VhcG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9CdWxsZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2tleVN0YXRlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFr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QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDbkRBO0FBQUE7QUFBQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBOEI7QUFDYzs7QUFFNUMsMEJBQTBCLHNEQUFhOztBQUV4QjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsK0NBQU07QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEM7Ozs7Ozs7QUM5QkE7QUFBQTtBQUFBO0FBQUE7QUFBNEM7QUFDQTs7QUFFNUMsMEJBQTBCLHNEQUFhOztBQUV4QixxQkFBcUIsc0RBQWE7QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUN2QkE7QUFBQSxpQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFYyx3RUFBUyxFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBHYW1lIGZyb20gJy4vR2FtZSc7XHJcblxyXG4vL0dBTUUgSU5JVCA8PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBcclxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKTtcclxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcyk7XHJcbmdhbWUuc3RhcnQoKTsgICAgIiwiaW1wb3J0IE1lZGlhSGFuZGxlciBmcm9tICcuL01lZGlhSGFuZGxlcic7XHJcbmltcG9ydCBHYW1lU2NlbmUgZnJvbSAnLi9TY2VuZSc7XHJcblxyXG5jb25zdCBtZWRpYUhhbmRsZXIgPSBuZXcgTWVkaWFIYW5kbGVyKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG5cclxuICAgICAgICAvL2dhbWUgc3RhdGUgKG9mZiA9IDAsIG9uID0gMSwgcGF1c2UgPSAyKVxyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gMDtcclxuXHJcbiAgICAgICAgLy9zYW1wbGUgb2YgYSBzdGFnZSBjbGFzc1xyXG4gICAgICAgIHRoaXMuc3RhZ2UgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vZ2FtZSBpbml0aWFsaXphdGlvbiBwcm9jZXNzXHJcbiAgICBhc3luYyBpbml0KCkge1xyXG4gICAgICAgIG1lZGlhSGFuZGxlci5zZXRJbWFnZVNvdXJjZXMoW1xyXG4gICAgICAgICAgICAnLi9kaXN0L2ltYWdlcy9zaGlwLnBuZycsXHJcbiAgICAgICAgICAgICcuL2Rpc3QvaW1hZ2VzL21pc3NpbGUucG5nJyxcclxuICAgICAgICAgICAgJy4vZGlzdC9pbWFnZXMvYmlnZ2Vyc2hpcC5wbmcnLFxyXG4gICAgICAgICAgICAnLi9kaXN0L2ltYWdlcy9lbmVteS5wbmcnLFxyXG4gICAgICAgICAgICAnLi9kaXN0L2ltYWdlcy9idWxsZXQucG5nJyxcclxuICAgICAgICAgICAgJy4vZGlzdC9pbWFnZXMvcm9ja2V0LnBuZycsXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIC8vcHJlbG9hZCBpbWFnZXNcclxuICAgICAgICBjb25zb2xlLmxvZygnSW1hZ2UgcHJlbG9hZGluZy4nKTtcclxuICAgICAgICBhd2FpdCBtZWRpYUhhbmRsZXIucHJlbG9hZEFsbEltYWdlcygpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdJbWFnZXMgcHJlbG9hZGluZyBkb25lLicpO1xyXG4gICAgfVxyXG4gICAgLy9nYW1lIHN0YXJ0XHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09d2lwPT09PT09PT09PT09PT09PT1cclxuICAgIGFzeW5jIHN0YXJ0KCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuaW5pdCgpO1xyXG5cclxuICAgICAgICAvL2dhbWUgb24gc3RhdGVcclxuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IDE7XHJcblxyXG4gICAgICAgIC8vY3JlYXRpb24gb2Ygc3RhZ2UgMSA8PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFdpUCFcclxuICAgICAgICB0aGlzLnN0YWdlID0gbmV3IEdhbWVTY2VuZSh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdBIFRlc3QgR2FtZSBTdGFnZScsXHJcbiAgICAgICAgICAgIGNhbnZhczogdGhpcy5jYW52YXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zdGFnZS5zdGFydCgpO1xyXG4gICAgfSAgXHJcbn0iLCJpbXBvcnQgZ2FtZU1lZGlhIGZyb20gJy4vZ2FtZU1lZGlhJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhSGFuZGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VTb3VyY2VzID0gKHByb3BzICYmIHByb3BzLmltYWdlU291cmNlcy5zbGljZSgpKSB8fCBbXTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJbWFnZVNvdXJjZXMoc291cmNlc0FycmF5KSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZVNvdXJjZXMgPSBzb3VyY2VzQXJyYXkuc2xpY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbWFnZVNvdXJjZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuICB0aGlzLmltYWdlU291cmNlcztcclxuICAgIH1cclxuXHJcbiAgICBhZGRJbWFnZShpbWFnZSwgc3JjKSB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2VOYW1lID0gc3JjLm1hdGNoKC8oXFx3KykoPzpcXC5cXHcrKSQvKVsxXTtcclxuICAgICAgICBnYW1lTWVkaWFbaW1hZ2VOYW1lXSA9IGltYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEltYWdlKGltYWdlKSB7XHJcbiAgICAgICAgcmV0dXJuIGdhbWVNZWRpYVtpbWFnZV07XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcHJlbG9hZEFsbEltYWdlcygpIHtcclxuICAgICAgICBmb3IobGV0IHNyYyBvZiB0aGlzLmltYWdlU291cmNlcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgTG9hZGluZyAke3NyY30uYCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkSW1hZ2UoYXdhaXQgdGhpcy5wcmVsb2FkSW1hZ2Uoc3JjKSwgc3JjKTtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuICAgIHByZWxvYWRJbWFnZShzcmMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgSW1hZ2UgJHtpbWcuc3JjfSBsb2FkZWQuYClcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoaW1nKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaW1nLm9uZXJyb3IgPSAoKSA9PiByZWplY3QoKTtcclxuICAgICAgICAgICAgaW1nLnNyYyA9IHNyYztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImxldCBnYW1lTWVkaWEgPSB7fTtcclxuZXhwb3J0IGRlZmF1bHQgZ2FtZU1lZGlhOyIsImltcG9ydCBHYW1lV2luZG93IGZyb20gJy4vR2FtZVdpbmRvdyc7XHJcbmltcG9ydCBNZWRpYUhhbmRsZXIgZnJvbSAnLi9NZWRpYUhhbmRsZXInO1xyXG5pbXBvcnQgT2JqZWN0SGFuZGxlciBmcm9tICcuL09iamVjdEhhbmRsZXInO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJztcclxuaW1wb3J0IEVtZW55U2hpcCBmcm9tICcuL0VtZW55U2hpcCc7XHJcbmltcG9ydCBBY3Rpb24gZnJvbSAnLi9BY3Rpb24nO1xyXG5pbXBvcnQgV2VhcG9uIGZyb20gJy4vV2VhcG9uJztcclxuaW1wb3J0IGtleVN0YXRlcyBmcm9tICcuL2tleVN0YXRlcyc7XHJcblxyXG5jb25zdCBtZWRpYUhhbmRsZXIgPSBuZXcgTWVkaWFIYW5kbGVyKCk7XHJcbmNvbnN0IG9iamVjdEhhbmRsZXIgPSBuZXcgT2JqZWN0SGFuZGxlcigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVNjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gcHJvcHMubmFtZTtcclxuICAgICAgICB0aGlzLmdhbWVXaW5kb3cgPSBuZXcgR2FtZVdpbmRvdyh7XHJcbiAgICAgICAgICAgIGNhbnZhczogcHJvcHMuY2FudmFzLFxyXG4gICAgICAgICAgICB3aWR0aDogOTAwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDcwMCxcclxuICAgICAgICAgICAgLy8gc2NhbGU6IDJcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnJlcXVlc3RJZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5mcHMgPSA2MDtcclxuICAgICAgICB0aGlzLnRwcyA9IDEyO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbGVUaW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZyYW1lRGVsYXkgPSBNYXRoLmZsb29yKDEwMDAgLyB0aGlzLmZwcyk7XHJcbiAgICAgICAgdGhpcy50aWxlRGVsYXkgPSAgTWF0aC5mbG9vcigxMDAwIC8gdGhpcy50cHMpO1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdFNjYWxlID0gMTtcclxuICAgICAgICB0aGlzLm9iamVjdHMgPSBvYmplY3RIYW5kbGVyLmdldE9iamVjdHMoKTtcclxuICAgICAgICB0aGlzLmxheWVycyA9IHtcclxuICAgICAgICAgICAgb3ZlcmxheTogW10sXHJcbiAgICAgICAgICAgIGZyb250OiBbXSxcclxuICAgICAgICAgICAgbWFpbjogW10sXHJcbiAgICAgICAgICAgIGJhY2s6IFtdLFxyXG4gICAgICAgICAgICBiYWNrYnJvdW5kOiBbXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5sYXllcnNBcnJheSA9IFtdO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gJyMxMTExMTEnO1xyXG5cclxuICAgICAgICB0aGlzLmZyYW1lID0gdGhpcy5mcmFtZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vSU5JVElBTElaQVRJT04gPD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgYXN5bmMgaW5pdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgU2NlbmUgXCIkeyB0aGlzLm5hbWUgfVwiIGxvYWRpbmcuYCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIG9iamVjdHMuJyk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5jcmVhdGVTY2VuZU9iamVjdHMoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgb2JqZWN0cyBkb25lLicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBTY2VuZSBcIiR7IHRoaXMubmFtZSB9XCIgbG9hZGVkLmApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vT0JKRUNUIENSRUFUSU9OIDw9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNyZWF0ZVNjZW5lT2JqZWN0cygpIHtcclxuICAgICAgICBjb25zdCBiYXNpY1dlYXBvbiA9IG5ldyBXZWFwb24oe1xyXG4gICAgICAgICAgICBidWxsZXRJbWFnZTogbWVkaWFIYW5kbGVyLmdldEltYWdlKCdtaXNzaWxlJyksXHJcbiAgICAgICAgICAgIHRpbGVXaWR0aDogMzIsXHJcbiAgICAgICAgICAgIHRpbGVIZWlnaHQ6IDMyLFxyXG4gICAgICAgICAgICBzcGVlZDogMTAsXHJcbiAgICAgICAgICAgIGhpdGJveFdpZHRoOiAxMCxcclxuICAgICAgICAgICAgaGl0Ym94SGVpZ2h0OiAxMCxcclxuICAgICAgICAgICAgd2VhcG9uWDogMTYsXHJcbiAgICAgICAgICAgIHdlYXBvblk6IC0xNixcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBvYmplY3RIYW5kbGVyLmNyZWF0ZU9iamVjdChQbGF5ZXIsIHtcclxuICAgICAgICAgICAgaHA6IDEwMCxcclxuICAgICAgICAgICAgc3BlZWQ6IDUsXHJcbiAgICAgICAgICAgIHNob3RpbmdTcGVlZDogNCxcclxuICAgICAgICAgICAgaW1hZ2U6IG1lZGlhSGFuZGxlci5nZXRJbWFnZSgnYmlnZ2Vyc2hpcCcpLFxyXG4gICAgICAgICAgICB0aWxlc0Ftb3VudDogMixcclxuICAgICAgICAgICAgdGlsZVdpZHRoOiA2NCxcclxuICAgICAgICAgICAgdGlsZUhlaWdodDogNjQsXHJcbiAgICAgICAgICAgIHdlYXBvbjogYmFzaWNXZWFwb24sXHJcbiAgICAgICAgICAgIGhpdGJveE9mZnNldFg6IDE2LFxyXG4gICAgICAgICAgICBoaXRib3hPZmZzZXRZOiAxNixcclxuICAgICAgICAgICAgaGl0Ym94V2lkdGg6IDMyLFxyXG4gICAgICAgICAgICBoaXRib3hIZWlnaHQ6IDMyLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnNldFBvc2l0aW9uKHRoaXMuZ2FtZVdpbmRvdy53aWR0aCAvIDIgLSB0aGlzLnBsYXllci50aWxlV2lkdGggLyAyLCB0aGlzLmdhbWVXaW5kb3cuaGVpZ2h0IC8gMiAtIHRoaXMucGxheWVyLnRpbGVIZWlnaHQgLyAyKTtcclxuICAgICAgICB0aGlzLnB1c2hUb0xheWVyKHRoaXMucGxheWVyLCAnbWFpbicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGxheWVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvL3NldHMgYSByZW5kZXIgbGF5ZXJcclxuICAgIHB1c2hUb0xheWVyKG9iaiwgbGF5ZXIpIHtcclxuICAgICAgICB0aGlzLmxheWVyc1tsYXllcl0ucHVzaChvYmopO1xyXG4gICAgICAgIHRoaXMuZ2V0TGF5ZXJzQXJyYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL3RyYW5zZm9ybXMgbGF5ZXJzIG9iamVjdCBpbnRvIHNpbXBsZSBhcnJheSB0aSBzaW1wbGlmeSByZW5kZXJpbmdcclxuICAgIGdldExheWVyc0FycmF5KCkge1xyXG4gICAgICAgIHRoaXMubGF5ZXJzQXJyYXkgPSBbXTtcclxuICAgICAgICBjb25zdCBsYXllcnNWYWx1ZXMgPSBPYmplY3QudmFsdWVzKHRoaXMubGF5ZXJzKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gbGF5ZXJzVmFsdWVzLmxlbmd0aCAtIDE7IGkgPj0wOyBpLS0pIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgb2JqIG9mIGxheWVyc1ZhbHVlc1tpXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXllcnNBcnJheS5wdXNoKG9iaik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9zdGFydCBzY2VuZVxyXG4gICAgYXN5bmMgc3RhcnQoKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0dhbWUgc3RhcnRlZC4nKVxyXG5cclxuICAgICAgICAvLyBnYW1lIHN0YXJ0IHRpbWVcclxuICAgICAgICB0aGlzLnN0YXJ0U2NlbmVMb29wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRTY2VuZUxvb3AoKSB7XHJcbiAgICAgICAgLy8gZ2FtZSBzdGFydCB0aW1lXHJcbiAgICAgICAgdGhpcy5sYXN0ID0gdGhpcy5sYXN0VGlsZVRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICB0aGlzLnJlcXVlc3RJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmZyYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0xPR0lDIDw9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmtleUhhbmRsZXIoKTtcclxuICAgICAgICBmb3IgKGxldCBvYmogb2YgdGhpcy5vYmplY3RzKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmoudXBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBvYmoudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vQU5JTUFUSU9OIDw9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGZyYW1lKCkge1xyXG4gICAgICAgIGxldCBkdCA9IHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5sYXN0VGltZTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoZHQgPCB0aGlzLmZyYW1lRGVsYXkpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0SWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5mcmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVGlsZXModGhpcy5vYmplY3RzKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmxhc3RUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZnJhbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoVGlsZXMob2JqZWN0cykge1xyXG4gICAgICAgIGxldCBkdCA9IHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5sYXN0VGlsZVRpbWU7XHJcbiAgICAgICAgaWYgKGR0ID4gdGhpcy50aWxlRGVsYXkpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgb2JqIG9mIG9iamVjdHMpIHtcclxuICAgICAgICAgICAgICAgIG9iai5uZXh0VGlsZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbGVUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vUkVOREVSIDw9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmZpbGxGaWVsZCgpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBvYmogb2YgdGhpcy5vYmplY3RzKSB7XHJcbiAgICAgICAgICAgIG9iai5kcmF3KHRoaXMuZ2FtZVdpbmRvdy5jdHgpO1xyXG4gICAgICAgIH1cclxuICAgIH0gXHJcblxyXG4gICAgZmlsbEZpZWxkKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVdpbmRvdy5jdHguZmlsbFN0eWxlID0gdGhpcy5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgdGhpcy5nYW1lV2luZG93LmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmdhbWVXaW5kb3cud2lkdGgsIHRoaXMuZ2FtZVdpbmRvdy5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGtleUhhbmRsZXIoKSB7XHJcbiAgICAgICAgaWYgKGtleVN0YXRlcy5zcGFjZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zaG90KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoa2V5U3RhdGVzLnVwKSB7XHJcbiAgICAgICAgICAgIGlmIChrZXlTdGF0ZXMucmlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmUoNDUpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleVN0YXRlcy5sZWZ0KXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmUoMTM1KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmUoOTApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChrZXlTdGF0ZXMuZG93bikge1xyXG4gICAgICAgICAgICBpZiAoa2V5U3RhdGVzLnJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlKDMxNSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5U3RhdGVzLmxlZnQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZSgyMjUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZSgyNzApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChrZXlTdGF0ZXMubGVmdCkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlKDE4MCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChrZXlTdGF0ZXMucmlnaHQpe1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlKDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuY2hlY2tCb3JkZXJzKHRoaXMuZ2FtZVdpbmRvdyk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lV2luZG93IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBwcm9wcy5jYW52YXM7XHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBwcm9wcy53aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHByb3BzLmhlaWdodDtcclxuICAgICAgICB0aGlzLnRvcCA9IDA7XHJcbiAgICAgICAgdGhpcy5yaWdodCA9IHByb3BzLndpZHRoO1xyXG4gICAgICAgIHRoaXMuYm90dG9tID0gcHJvcHMuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMubGVmdCA9IDA7XHJcbiAgICAgICAgdGhpcy5zY2FsZSA9IHByb3BzLnNjYWxlIHx8IDE7XHJcblxyXG4gICAgICAgIGlmIChwcm9wcy5zY2FsZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNjYWxlQ29udGV4dCh0aGlzLnNjYWxlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2NhbGVDb250ZXh0KHNjYWxlKSB7XHJcbiAgICAgICAgdGhpcy5jdHguc2NhbGUoc2NhbGUsIHNjYWxlKTtcclxuICAgIH1cclxufSIsImltcG9ydCBnYW1lT2JqZWN0cyBmcm9tICcuL2dhbWVPYmplY3RzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdEhhbmRsZXIge1xyXG4gICAgXHJcbiAgICBjcmVhdGVPYmplY3QoQ2xhc3MsIHByb3BzKSB7XHJcbiAgICAgICAgbGV0IG9iaiA9IG5ldyBDbGFzcyhwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5hZGRPYmplY3Qob2JqKTtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZE9iamVjdChvYmopIHtcclxuICAgICAgICBnYW1lT2JqZWN0cy5wdXNoKG9iaik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0T2JqZWN0KG4pIHtcclxuICAgICAgICByZXR1cm4gZ2FtZU9iamVjdHNbbl07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0T2JqZWN0cygpIHtcclxuICAgICAgICByZXR1cm4gZ2FtZU9iamVjdHM7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlT2JqZWN0KG9iaikge1xyXG4gICAgICAgIGdhbWVPYmplY3RzLnNwbGljZShnYW1lT2JqZWN0cy5pbmRleE9mKG9iaiksIDEpO1xyXG4gICAgfVxyXG59IiwibGV0IG9iamVjdHMgPSBbXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG9iamVjdHM7IiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9TaGlwJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIFNoaXAge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tCb3JkZXJzKHJlY3RhbmdsZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uWSA8IHJlY3RhbmdsZS50b3ApIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvblkgPSByZWN0YW5nbGUudG9wO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvblkgKyB0aGlzLnRpbGVIZWlnaHQgPiByZWN0YW5nbGUuYm90dG9tKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25ZID0gcmVjdGFuZ2xlLmJvdHRvbSAtIHRoaXMudGlsZUhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb25YIDwgcmVjdGFuZ2xlLmxlZnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvblggPSByZWN0YW5nbGUubGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb25YICsgdGhpcy50aWxlV2lkdGggPiByZWN0YW5nbGUucmlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvblggPSByZWN0YW5nbGUucmlnaHQgLSB0aGlzLnRpbGVXaWR0aDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgRHluYW1pY09iamVjdCBmcm9tICcuL0R5bmFtaWNPYmplY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCBleHRlbmRzIER5bmFtaWNPYmplY3Qge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5ocCA9IHByb3BzLmhwIHx8IDEwMDtcclxuICAgICAgICB0aGlzLnNob3RpbmdTcGVlZCA9IHByb3BzLnNob3RpbmdTcGVlZCB8fCAxO1xyXG4gICAgICAgIHRoaXMubGFzdFNob3QgPSBudWxsO1xyXG4gICAgICAgIHRoaXMud2VhcG9uID0gcHJvcHMud2VhcG9uIHx8IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdCgpIHsgICAgICAgICAgICBcclxuICAgICAgICBpZiAoIXRoaXMubGFzdFNob3QpIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0U2hvdCA9IHBlcmZvcm1hbmNlLm5vdygpOyBcclxuICAgICAgICAgICAgdGhpcy53ZWFwb24uc2hvdCh0aGlzLnBvc2l0aW9uWCwgdGhpcy5wb3NpdGlvblkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZHQgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMubGFzdFNob3Q7XHJcbiAgICAgICAgaWYgKGR0ID49IDEwMDAgLyB0aGlzLnNob3RpbmdTcGVlZCkge1xyXG4gICAgICAgICAgICB0aGlzLndlYXBvbi5zaG90KHRoaXMucG9zaXRpb25YLCB0aGlzLnBvc2l0aW9uWSk7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFNob3QgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG59IiwiaW1wb3J0IE9iamVjdCBmcm9tICcuL09iamVjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEeW5hbWljT2JqZWN0IGV4dGVuZHMgT2JqZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBwcm9wcy5zcGVlZCB8fCAxMDtcclxuICAgICAgICB0aGlzLnR1cm5TcGVlZCA9IHByb3BzLnR1cm5TcGVlZCB8fCA1O1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoYW5nbGUpIHtcclxuICAgICAgICBjb25zdCByYWRBbmdsZSA9IGFuZ2xlICogTWF0aC5QSSAvIDE4MDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uWCArPSBNYXRoLnJvdW5kKE1hdGguY29zKHJhZEFuZ2xlKSAqIHRoaXMuc3BlZWQpO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25ZIC09IE1hdGgucm91bmQoTWF0aC5zaW4ocmFkQW5nbGUpICogdGhpcy5zcGVlZCk7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzSGl0Ym94KSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSGl0Ym94UG9zaXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdHVybihkaXJlY3Rpb24pIHtcclxuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlICdyaWdodCc6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5nbGUgLT0gdGhpcy50dXJuU3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuYW5nbGUgPD0gMCApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuZ2xlID0gMzYwIC0gdGhpcy5hbmdsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucmFkQW5nbGUgPSB0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuZ2xlICs9IHRoaXMudHVyblNwZWVkO1xyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLmFuZ2xlID49IDM2MCApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuZ2xlID0gdGhpcy5hbmdsZSAtIDM2MDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucmFkQW5nbGUgPSB0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFNwZWVkKHNwZWVkKSB7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUhpdGJveFBvc2l0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuaGl0Ym94UG9zaXRpb25YID0gdGhpcy5wb3NpdGlvblggKyB0aGlzLmhpdGJveE9mZnNldFg7XHJcbiAgICAgICAgdGhpcy5oaXRib3hQb3NpdGlvblkgPSB0aGlzLnBvc2l0aW9uWSArIHRoaXMuaGl0Ym94T2Zmc2V0WTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHByb3BzLm5hbWU7XHJcbiAgICAgICAgdGhpcy5ncm91cCA9IHByb3BzLmdyb3VwIHx8IG51bGw7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IHByb3BzLmltYWdlIHx8IG51bGw7XHJcbiAgICAgICAgdGhpcy50aWxlc0Ftb3VudCA9IHByb3BzLnRpbGVzQW1vdW50IHx8IDA7XHJcbiAgICAgICAgdGhpcy50aWxlV2lkdGggPSBwcm9wcy50aWxlV2lkdGggfHwgMDtcclxuICAgICAgICB0aGlzLnRpbGVIZWlnaHQgPSBwcm9wcy50aWxlSGVpZ2h0IHx8IDA7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGlsZSA9IHByb3BzLmN1cnJlbnRUaWxlIHx8IDA7XHJcbiAgICAgICAgdGhpcy5hbmdsZSA9IHByb3BzLmFuZ2xlIHx8IDkwO1xyXG4gICAgICAgIHRoaXMucmFkQW5nbGUgPSB0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uWCA9IHByb3BzLnBvc2l0aW9uWCB8fCAwO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25ZID0gcHJvcHMucG9zaXRpb25ZIHx8IDA7XHJcbiAgICAgICAgaWYgKHByb3BzLmhpdGJveE9mZnNldFggfHwgIHByb3BzLmhpdGJveE9mZnNldFkgfHwgcHJvcHMuaGl0Ym94SGVpZ2h0IHx8IHByb3BzLmhpdGJveFdpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGl0Ym94T2Zmc2V0WCA9IHByb3BzLmhpdGJveE9mZnNldFggfHwgMDtcclxuICAgICAgICAgICAgdGhpcy5oaXRib3hPZmZzZXRZID0gcHJvcHMuaGl0Ym94T2Zmc2V0WSB8fCAwO1xyXG4gICAgICAgICAgICB0aGlzLmhpdGJveEhlaWdodCA9IHByb3BzLmhpdGJveEhlaWdodCB8fCAwO1xyXG4gICAgICAgICAgICB0aGlzLmhpdGJveFdpZHRoID0gcHJvcHMuaGl0Ym94V2lkdGggfHwgMDtcclxuICAgICAgICAgICAgdGhpcy5oaXRib3hQb3NpdGlvblggPSB0aGlzLnBvc2l0aW9uWCArIHRoaXMuaGl0Ym94T2Zmc2V0WDtcclxuICAgICAgICAgICAgdGhpcy5oaXRib3hQb3NpdGlvblkgPSB0aGlzLnBvc2l0aW9uWSArIHRoaXMuaGl0Ym94T2Zmc2V0WTtcclxuICAgICAgICAgICAgdGhpcy5oYXNIaXRib3ggPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRQb3NpdGlvbih4LCB5KSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblggPSB4O1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25ZID0geTtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0VGlsZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50VGlsZSA8ICh0aGlzLnRpbGVzQW1vdW50IC0gMSkpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGlsZSsrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbGUgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRJbWFnZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGN0eCkge1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLnBvc2l0aW9uWCAgKyB0aGlzLnRpbGVXaWR0aCAvIDIsIHRoaXMucG9zaXRpb25ZICsgdGhpcy50aWxlSGVpZ2h0IC8gMik7XHJcbiAgICAgICAgY3R4LnJvdGF0ZSgtKHRoaXMuYW5nbGUgLSA5MCkgKiBNYXRoLlBJIC8gMTgwKTtcclxuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHRoaXMuY3VycmVudFRpbGUgKiB0aGlzLnRpbGVXaWR0aCwgMCwgdGhpcy50aWxlV2lkdGgsIHRoaXMudGlsZUhlaWdodCwgLXRoaXMudGlsZVdpZHRoIC8gMiwgLXRoaXMudGlsZUhlaWdodCAvIDIsIHRoaXMudGlsZVdpZHRoLCB0aGlzLnRpbGVIZWlnaHQpO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgU2hpcCBmcm9tICcuL1NoaXAnO1xyXG5pbXBvcnQgQmVoYXZpb3IgZnJvbSAnLi9CZWhhdmlvcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWVueVNoaXAgZXh0ZW5kcyBTaGlwIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnBhdXNlID0gdGhpcy5wYXVzZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmJlaGF2aW9yID0gbmV3IEJlaGF2aW9yKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vRU5FTVkgU0hJUCBMSUdJQyBBTkQgQUNUSU9OU1xyXG4gICAgcGF1c2UoKSB7fVxyXG4gXHJcbiAgICAvL1NFVCBCRUhBVklPUlxyXG4gICAgc2V0QmVoYXZpb3IoYWN0aW9ucykge1xyXG4gICAgICAgIHRoaXMuYmVoYXZpb3Iuc2V0QWN0aW9ucyhhY3Rpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBkb0N1cnJlbnRBY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5iZWhhdmlvci5kb0N1cnJlbnRBY3Rpb24oKTtcclxuICAgIH1cclxufSIsIi8vQkVIQVZJT1VSIENMQVNTLiBIQU5ETEVTIEFDVElPTidTIEVYRUNVVElPTlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCZWhhdmlvciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIC8vdGhpcyBpcyBhbiBhcnJheSBvZiBlbmVteSBhY3Rpb25zIGxpa2UgbW92ZSwgdHVybiwgc3RvcCBldGMuIFxyXG4gICAgICAgIC8vIHByb3BzLmFjdGlvbnMgPyB0aGlzLmFjdGlvbnMgPSBwcm9wcy5hY3Rpb25zLnNsaWNlKCkgOiBbXTtcclxuICAgICAgICBpZiAocHJvcHMgJiYgcHJvcHMuYWN0aW9ucykge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGlvbnMgPSBwcm9wcy5hY3Rpb25zO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aW9ucyA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50QWN0aW9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLmFjdGlvblN0YXJ0VGltZSA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aW9uU3RhcnRWYWx1ZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLy9TRVRUSU5HIEFDVElPTlNcclxuICAgIHNldEFjdGlvbnMoYWN0aW9ucykge1xyXG4gICAgICAgIHRoaXMuYWN0aW9ucyA9IGFjdGlvbnMuc2xpY2UoKTtcclxuICAgICAgICB0aGlzLm5leHRBY3Rpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRBY3Rpb24oYWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25zLnB1c2goYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvL05FWFQgQUNUSU9OU1xyXG4gICAgbmV4dEFjdGlvbigpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRBY3Rpb24gPSB0aGlzLmFjdGlvbnMuc2hpZnQoKTtcclxuICAgICAgICB0aGlzLmFjdGlvblN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuZG9DdXJyZW50QWN0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9DdXJyZW50QWN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRBY3Rpb24uZHVyYXRpb24pIHtcclxuICAgICAgICAgICAgbGV0IGR0ID0gcGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLmFjdGlvblN0YXJ0VGltZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkdCA+PSB0aGlzLmN1cnJlbnRBY3Rpb24uZHVyYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dEFjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25TdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QWN0aW9uLm1ldGhvZCh0aGlzLmN1cnJlbnRBY3Rpb24udmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50QWN0aW9uLm9uY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QWN0aW9uLm1ldGhvZCh0aGlzLmN1cnJlbnRBY3Rpb24udmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLm5leHRBY3Rpb24oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBY3Rpb24ubWV0aG9kKHRoaXMuY3VycmVudEFjdGlvbi52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59ICIsIi8vQU4gQUNUSU9OIENMQVNTLiBJUyBORUVERUQgVE8gQ09OU1RSVUNUIEJFSEFWSU9SIEFSUkFZUyBGT1IgQVVUT01BVElDIEVOVElUSUVTXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHRoaXMubWV0aG9kID0gcHJvcHMubWV0aG9kO1xyXG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBwcm9wcy5kdXJhdGlvbjtcclxuICAgICAgICB0aGlzLm9uY2UgPSBwcm9wcy5vbmNlO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBwcm9wcy52YWx1ZTtcclxuICAgICAgICB0aGlzLmFjdGlvblN0YXJ0VGltZSA9IG51bGw7XHJcbiAgICB9XHJcbn0gICIsImltcG9ydCBCdWxsZXQgZnJvbSAnLi9CdWxsZXQnO1xyXG5pbXBvcnQgT2JqZWN0SGFuZGxlciBmcm9tICcuL09iamVjdEhhbmRsZXInO1xyXG5cclxuY29uc3Qgb2JqZWN0SGFuZGxlciA9IG5ldyBPYmplY3RIYW5kbGVyKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWFwb24ge1xyXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gcHJvcHMubmFtZTtcclxuICAgICAgICB0aGlzLmdyb3VwID0gcHJvcHMuZ3JvdXA7XHJcbiAgICAgICAgdGhpcy5idWxsZXRJbWFnZSA9IHByb3BzLmJ1bGxldEltYWdlO1xyXG4gICAgICAgIHRoaXMudGlsZVdpZHRoID0gcHJvcHMudGlsZVdpZHRoO1xyXG4gICAgICAgIHRoaXMudGlsZUhlaWdodCA9IHByb3BzLnRpbGVIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5kYW1hZ2UgPSBwcm9wcy5kYW1hZ2UgfHwgMTtcclxuICAgICAgICB0aGlzLnNwZWVkID0gcHJvcHMuc3BlZWQgfHwgMTtcclxuICAgICAgICB0aGlzLndlYXBvblggPSBwcm9wcy53ZWFwb25YIHx8IDA7XHJcbiAgICAgICAgdGhpcy53ZWFwb25ZID0gcHJvcHMud2VhcG9uWSB8fCAwO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3QocG9zaXRpb25YLCBwb3NpdGlvblkpIHtcclxuICAgICAgICBvYmplY3RIYW5kbGVyLmNyZWF0ZU9iamVjdChCdWxsZXQsIHtcclxuICAgICAgICAgICAgZ3JvdXA6ICdwbGF5ZXJCdWxsZXQnLFxyXG4gICAgICAgICAgICBpbWFnZTogdGhpcy5idWxsZXRJbWFnZSxcclxuICAgICAgICAgICAgdGlsZVdpZHRoOiB0aGlzLnRpbGVXaWR0aCxcclxuICAgICAgICAgICAgdGlsZUhlaWdodDogdGhpcy50aWxlSGVpZ2h0LFxyXG4gICAgICAgICAgICBwb3NpdGlvblg6IHBvc2l0aW9uWCArIHRoaXMud2VhcG9uWCxcclxuICAgICAgICAgICAgcG9zaXRpb25ZOiBwb3NpdGlvblkgKyB0aGlzLndlYXBvblksXHJcbiAgICAgICAgICAgIGRhbWFnZTogdGhpcy5kYW1hZ2UsXHJcbiAgICAgICAgICAgIHNwZWVkOiB0aGlzLnNwZWVkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgRHluYW1pY09iamVjdCBmcm9tICcuL0R5bmFtaWNPYmplY3QnO1xyXG5pbXBvcnQgT2JqZWN0SGFuZGxlciBmcm9tICcuL09iamVjdEhhbmRsZXInO1xyXG5cclxuY29uc3Qgb2JqZWN0SGFuZGxlciA9IG5ldyBPYmplY3RIYW5kbGVyKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWxsZXQgZXh0ZW5kcyBEeW5hbWljT2JqZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5kYW1hZ2UgPSBwcm9wcy5kYW1hZ2UgfHwgMTtcclxuICAgICAgICB0aGlzLnNwZWVkID0gcHJvcHMuc3BlZWQgfHwgMTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlKHRoaXMuYW5nbGUpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tCb3JkZXJzKClcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0JvcmRlcnMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb25ZICsgdGhpcy50aWxlSGVpZ2h0IDw9IDApIHtcclxuICAgICAgICAgICAgb2JqZWN0SGFuZGxlci5kZWxldGVPYmplY3QodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibGV0IGtleVN0YXRlcyA9IHsgXHJcbiAgICB1cDogZmFsc2UsXHJcbiAgICByaWdodDogZmFsc2UsXHJcbiAgICBkb3duOiBmYWxzZSxcclxuICAgIGxlZnQ6IGZhbHNlLFxyXG4gICAgc3BhY2U6IGZhbHNlXHJcbn07XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSA4NyB8fCBlLmtleUNvZGUgPT09IDM4KSB7XHJcbiAgICAgICAga2V5U3RhdGVzLnVwID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChlLmtleUNvZGUgPT09IDY1IHx8IGUua2V5Q29kZSA9PT0gMzcpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnQSBpcyBwcmVzc2VkIScpO1xyXG4gICAgICAgIGtleVN0YXRlcy5sZWZ0ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChlLmtleUNvZGUgPT09IDgzIHx8IGUua2V5Q29kZSA9PT0gNDApIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnUyBpcyBwcmVzc2VkIScpO1xyXG4gICAgICAgIGtleVN0YXRlcy5kb3duID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChlLmtleUNvZGUgPT09IDY4IHx8IGUua2V5Q29kZSA9PT0gMzkpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnRCBpcyBwcmVzc2VkIScpO1xyXG4gICAgICAgIGtleVN0YXRlcy5yaWdodCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSAzMikge1xyXG4gICAgICAgIGtleVN0YXRlcy5zcGFjZSA9IHRydWU7XHJcbiAgICB9XHJcbn0sIHRydWUpO1xyXG4gICAgXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSA4NyB8fCBlLmtleUNvZGUgPT09IDM4KSB7XHJcbiAgICAgICAga2V5U3RhdGVzLnVwID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSA2NSB8fCBlLmtleUNvZGUgPT09IDM3KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0EgaXMgcHJlc3NlZCEnKTtcclxuICAgICAgICBrZXlTdGF0ZXMubGVmdCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gODMgfHwgZS5rZXlDb2RlID09PSA0MCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdTIGlzIHByZXNzZWQhJyk7XHJcbiAgICAgICAga2V5U3RhdGVzLmRvd24gPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChlLmtleUNvZGUgPT09IDY4IHx8IGUua2V5Q29kZSA9PT0gMzkpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnRCBpcyBwcmVzc2VkIScpO1xyXG4gICAgICAgIGtleVN0YXRlcy5yaWdodCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMzIpIHtcclxuICAgICAgICBrZXlTdGF0ZXMuc3BhY2UgPSBmYWxzZTtcclxuICAgIH1cclxufSwgdHJ1ZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBrZXlTdGF0ZXM7Il0sInNvdXJjZVJvb3QiOiIifQ==