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
        this.name = props.name;
        this.group = props.group || null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvTWVkaWFIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lTWVkaWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1NjZW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9HYW1lV2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9PYmplY3RIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvUGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TaGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0VtZW55U2hpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvV2VhcG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9CdWxsZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2tleVN0YXRlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FB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c291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lJztcclxuXHJcbi8vR0FNRSBJTklUIDw9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFxyXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpO1xyXG5jb25zdCBnYW1lID0gbmV3IEdhbWUoY2FudmFzKTtcclxuZ2FtZS5zdGFydCgpOyAgICAiLCJpbXBvcnQgTWVkaWFIYW5kbGVyIGZyb20gJy4vTWVkaWFIYW5kbGVyJztcclxuaW1wb3J0IEdhbWVTY2VuZSBmcm9tICcuL1NjZW5lJztcclxuXHJcbmNvbnN0IG1lZGlhSGFuZGxlciA9IG5ldyBNZWRpYUhhbmRsZXIoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xyXG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcblxyXG4gICAgICAgIC8vZ2FtZSBzdGF0ZSAob2ZmID0gMCwgb24gPSAxLCBwYXVzZSA9IDIpXHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSAwO1xyXG5cclxuICAgICAgICAvL3NhbXBsZSBvZiBhIHN0YWdlIGNsYXNzXHJcbiAgICAgICAgdGhpcy5zdGFnZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLy9nYW1lIGluaXRpYWxpemF0aW9uIHByb2Nlc3NcclxuICAgIGFzeW5jIGluaXQoKSB7XHJcbiAgICAgICAgbWVkaWFIYW5kbGVyLnNldEltYWdlU291cmNlcyhbXHJcbiAgICAgICAgICAgICcuL2Rpc3QvaW1hZ2VzL3NoaXAucG5nJyxcclxuICAgICAgICAgICAgJy4vZGlzdC9pbWFnZXMvZW5lbXkucG5nJyxcclxuICAgICAgICAgICAgJy4vZGlzdC9pbWFnZXMvYnVsbGV0LnBuZycsXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIC8vcHJlbG9hZCBpbWFnZXNcclxuICAgICAgICBjb25zb2xlLmxvZygnSW1hZ2UgcHJlbG9hZGluZy4nKTtcclxuICAgICAgICBhd2FpdCBtZWRpYUhhbmRsZXIucHJlbG9hZEFsbEltYWdlcygpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdJbWFnZXMgcHJlbG9hZGluZyBkb25lLicpO1xyXG4gICAgfVxyXG4gICAgLy9nYW1lIHN0YXJ0XHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09d2lwPT09PT09PT09PT09PT09PT1cclxuICAgIGFzeW5jIHN0YXJ0KCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuaW5pdCgpO1xyXG5cclxuICAgICAgICAvL2dhbWUgb24gc3RhdGVcclxuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IDE7XHJcblxyXG4gICAgICAgIC8vY3JlYXRpb24gb2Ygc3RhZ2UgMSA8PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFdpUCFcclxuICAgICAgICB0aGlzLnN0YWdlID0gbmV3IEdhbWVTY2VuZSh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdBIFRlc3QgR2FtZSBTdGFnZScsXHJcbiAgICAgICAgICAgIGNhbnZhczogdGhpcy5jYW52YXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zdGFnZS5zdGFydCgpO1xyXG4gICAgfSAgXHJcbn0iLCJpbXBvcnQgZ2FtZU1lZGlhIGZyb20gJy4vZ2FtZU1lZGlhJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhSGFuZGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VTb3VyY2VzID0gKHByb3BzICYmIHByb3BzLmltYWdlU291cmNlcy5zbGljZSgpKSB8fCBbXTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJbWFnZVNvdXJjZXMoc291cmNlc0FycmF5KSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZVNvdXJjZXMgPSBzb3VyY2VzQXJyYXkuc2xpY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbWFnZVNvdXJjZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuICB0aGlzLmltYWdlU291cmNlcztcclxuICAgIH1cclxuXHJcbiAgICBhZGRJbWFnZShpbWFnZSwgc3JjKSB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2VOYW1lID0gc3JjLm1hdGNoKC8oXFx3KykoPzpcXC5cXHcrKSQvKVsxXTtcclxuICAgICAgICBnYW1lTWVkaWFbaW1hZ2VOYW1lXSA9IGltYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEltYWdlKGltYWdlKSB7XHJcbiAgICAgICAgcmV0dXJuIGdhbWVNZWRpYVtpbWFnZV07XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcHJlbG9hZEFsbEltYWdlcygpIHtcclxuICAgICAgICBmb3IobGV0IHNyYyBvZiB0aGlzLmltYWdlU291cmNlcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgTG9hZGluZyAke3NyY30uYCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkSW1hZ2UoYXdhaXQgdGhpcy5wcmVsb2FkSW1hZ2Uoc3JjKSwgc3JjKTtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuICAgIHByZWxvYWRJbWFnZShzcmMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgSW1hZ2UgJHtpbWcuc3JjfSBsb2FkZWQuYClcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoaW1nKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaW1nLm9uZXJyb3IgPSAoKSA9PiByZWplY3QoKTtcclxuICAgICAgICAgICAgaW1nLnNyYyA9IHNyYztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImxldCBnYW1lTWVkaWEgPSB7fTtcclxuZXhwb3J0IGRlZmF1bHQgZ2FtZU1lZGlhOyIsImltcG9ydCBHYW1lV2luZG93IGZyb20gJy4vR2FtZVdpbmRvdyc7XHJcbmltcG9ydCBNZWRpYUhhbmRsZXIgZnJvbSAnLi9NZWRpYUhhbmRsZXInO1xyXG5pbXBvcnQgT2JqZWN0SGFuZGxlciBmcm9tICcuL09iamVjdEhhbmRsZXInO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJztcclxuaW1wb3J0IEVtZW55U2hpcCBmcm9tICcuL0VtZW55U2hpcCc7XHJcbmltcG9ydCBBY3Rpb24gZnJvbSAnLi9BY3Rpb24nO1xyXG5pbXBvcnQgV2VhcG9uIGZyb20gJy4vV2VhcG9uJztcclxuaW1wb3J0IGtleVN0YXRlcyBmcm9tICcuL2tleVN0YXRlcyc7XHJcblxyXG5jb25zdCBtZWRpYUhhbmRsZXIgPSBuZXcgTWVkaWFIYW5kbGVyKCk7XHJcbmNvbnN0IG9iamVjdEhhbmRsZXIgPSBuZXcgT2JqZWN0SGFuZGxlcigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVNjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gcHJvcHMubmFtZTtcclxuICAgICAgICB0aGlzLmdhbWVXaW5kb3cgPSBuZXcgR2FtZVdpbmRvdyh7XHJcbiAgICAgICAgICAgIGNhbnZhczogcHJvcHMuY2FudmFzLFxyXG4gICAgICAgICAgICB3aWR0aDogNDAwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDYwMCxcclxuICAgICAgICAgICAgLy8gc2NhbGU6IDJcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnJlcXVlc3RJZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5mcHMgPSA2MDtcclxuICAgICAgICB0aGlzLnRwcyA9IDEyO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbGVUaW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZyYW1lRGVsYXkgPSBNYXRoLmZsb29yKDEwMDAgLyB0aGlzLmZwcyk7XHJcbiAgICAgICAgdGhpcy50aWxlRGVsYXkgPSAgTWF0aC5mbG9vcigxMDAwIC8gdGhpcy50cHMpO1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdFNjYWxlID0gMTtcclxuICAgICAgICB0aGlzLm9iamVjdHMgPSBvYmplY3RIYW5kbGVyLmdldE9iamVjdHMoKTtcclxuICAgICAgICB0aGlzLmxheWVycyA9IHtcclxuICAgICAgICAgICAgb3ZlcmxheTogW10sXHJcbiAgICAgICAgICAgIGZyb250OiBbXSxcclxuICAgICAgICAgICAgbWFpbjogW10sXHJcbiAgICAgICAgICAgIGJhY2s6IFtdLFxyXG4gICAgICAgICAgICBiYWNrYnJvdW5kOiBbXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5sYXllcnNBcnJheSA9IFtdO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gJyMxMTExMTEnO1xyXG5cclxuICAgICAgICB0aGlzLmZyYW1lID0gdGhpcy5mcmFtZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vSU5JVElBTElaQVRJT04gPD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgYXN5bmMgaW5pdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgU2NlbmUgXCIkeyB0aGlzLm5hbWUgfVwiIGxvYWRpbmcuYCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIG9iamVjdHMuJyk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5jcmVhdGVTY2VuZU9iamVjdHMoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgb2JqZWN0cyBkb25lLicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBTY2VuZSBcIiR7IHRoaXMubmFtZSB9XCIgbG9hZGVkLmApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vT0JKRUNUIENSRUFUSU9OIDw9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNyZWF0ZVNjZW5lT2JqZWN0cygpIHtcclxuICAgICAgICBjb25zdCBiYXNpY1dlYXBvbiA9IG5ldyBXZWFwb24oe1xyXG4gICAgICAgICAgICBidWxsZXRJbWFnZTogbWVkaWFIYW5kbGVyLmdldEltYWdlKCdidWxsZXQnKSxcclxuICAgICAgICAgICAgdGlsZVdpZHRoOiAxLFxyXG4gICAgICAgICAgICB0aWxlSGVpZ2h0OiAzLFxyXG4gICAgICAgICAgICBzcGVlZDogMTAsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyID0gb2JqZWN0SGFuZGxlci5jcmVhdGVPYmplY3QoUGxheWVyLCB7XHJcbiAgICAgICAgICAgIGhwOiAxMDAsXHJcbiAgICAgICAgICAgIHNwZWVkOiA1LFxyXG4gICAgICAgICAgICBzaG90aW5nU3BlZWQ6IDEwLFxyXG4gICAgICAgICAgICBpbWFnZTogbWVkaWFIYW5kbGVyLmdldEltYWdlKCdzaGlwJyksXHJcbiAgICAgICAgICAgIHRpbGVzQW1vdW50OiAxLFxyXG4gICAgICAgICAgICB0aWxlV2lkdGg6IDE2LFxyXG4gICAgICAgICAgICB0aWxlSGVpZ2h0OiAxNixcclxuICAgICAgICAgICAgd2VhcG9uOiBiYXNpY1dlYXBvblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnBvc2l0aW9uWCA9IHRoaXMuZ2FtZVdpbmRvdy53aWR0aCAvIDIgLSB0aGlzLnBsYXllci50aWxlV2lkdGggLyAyO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnBvc2l0aW9uWSA9IHRoaXMuZ2FtZVdpbmRvdy5oZWlnaHQgLyAyIC0gdGhpcy5wbGF5ZXIudGlsZUhlaWdodCAvIDI7XHJcbiAgICAgICAgdGhpcy5wdXNoVG9MYXllcih0aGlzLnBsYXllciwgJ21haW4nKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBsYXllcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy9zZXRzIGEgcmVuZGVyIGxheWVyXHJcbiAgICBwdXNoVG9MYXllcihvYmosIGxheWVyKSB7XHJcbiAgICAgICAgdGhpcy5sYXllcnNbbGF5ZXJdLnB1c2gob2JqKTtcclxuICAgICAgICB0aGlzLmdldExheWVyc0FycmF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy90cmFuc2Zvcm1zIGxheWVycyBvYmplY3QgaW50byBzaW1wbGUgYXJyYXkgdGkgc2ltcGxpZnkgcmVuZGVyaW5nXHJcbiAgICBnZXRMYXllcnNBcnJheSgpIHtcclxuICAgICAgICB0aGlzLmxheWVyc0FycmF5ID0gW107XHJcbiAgICAgICAgY29uc3QgbGF5ZXJzVmFsdWVzID0gT2JqZWN0LnZhbHVlcyh0aGlzLmxheWVycyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGxheWVyc1ZhbHVlcy5sZW5ndGggLSAxOyBpID49MDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG9iaiBvZiBsYXllcnNWYWx1ZXNbaV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGF5ZXJzQXJyYXkucHVzaChvYmopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vc3RhcnQgc2NlbmVcclxuICAgIGFzeW5jIHN0YXJ0KCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdHYW1lIHN0YXJ0ZWQuJylcclxuXHJcbiAgICAgICAgLy8gZ2FtZSBzdGFydCB0aW1lXHJcbiAgICAgICAgdGhpcy5zdGFydFNjZW5lTG9vcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0U2NlbmVMb29wKCkge1xyXG4gICAgICAgIC8vIGdhbWUgc3RhcnQgdGltZVxyXG4gICAgICAgIHRoaXMubGFzdCA9IHRoaXMubGFzdFRpbGVUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0SWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5mcmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9MT0dJQyA8PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5rZXlIYW5kbGVyKCk7XHJcbiAgICAgICAgZm9yIChsZXQgb2JqIG9mIHRoaXMub2JqZWN0cykge1xyXG4gICAgICAgICAgICBpZiAob2JqLnVwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgb2JqLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL0FOSU1BVElPTiA8PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBmcmFtZSgpIHtcclxuICAgICAgICBsZXQgZHQgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMubGFzdFRpbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGR0IDwgdGhpcy5mcmFtZURlbGF5KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZnJhbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaFRpbGVzKHRoaXMub2JqZWN0cyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmZyYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaFRpbGVzKG9iamVjdHMpIHtcclxuICAgICAgICBsZXQgZHQgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMubGFzdFRpbGVUaW1lO1xyXG4gICAgICAgIGlmIChkdCA+IHRoaXMudGlsZURlbGF5KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG9iaiBvZiBvYmplY3RzKSB7XHJcbiAgICAgICAgICAgICAgICBvYmoubmV4dFRpbGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxhc3RUaWxlVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL1JFTkRFUiA8PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5maWxsRmllbGQoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgb2JqIG9mIHRoaXMub2JqZWN0cykge1xyXG4gICAgICAgICAgICBvYmouZHJhdyh0aGlzLmdhbWVXaW5kb3cuY3R4KTtcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG5cclxuICAgIGZpbGxGaWVsZCgpIHtcclxuICAgICAgICB0aGlzLmdhbWVXaW5kb3cuY3R4LmZpbGxTdHlsZSA9IHRoaXMuYmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgIHRoaXMuZ2FtZVdpbmRvdy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5nYW1lV2luZG93LndpZHRoLCB0aGlzLmdhbWVXaW5kb3cuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBrZXlIYW5kbGVyKCkge1xyXG4gICAgICAgIGlmIChrZXlTdGF0ZXMuc3BhY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2hvdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGtleVN0YXRlcy51cCkge1xyXG4gICAgICAgICAgICBpZiAoa2V5U3RhdGVzLnJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlKDQ1KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXlTdGF0ZXMubGVmdCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlKDEzNSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlKDkwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5U3RhdGVzLmRvd24pIHtcclxuICAgICAgICAgICAgaWYgKGtleVN0YXRlcy5yaWdodCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZSgzMTUpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleVN0YXRlcy5sZWZ0KXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmUoMjI1KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmUoMjcwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5U3RhdGVzLmxlZnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZSgxODApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5U3RhdGVzLnJpZ2h0KXtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZSgwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyLmNoZWNrQm9yZGVycyh0aGlzLmdhbWVXaW5kb3cpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcclxuLy8gICAgIHRoaXMuZW5lbWllcy5wdXNoKHRoaXMuY3JlYXRlT2JqZWN0KEVtZW55U2hpcCwge1xyXG4vLyAgICAgICAgIGhwOiAxMDAsXHJcbi8vICAgICAgICAgc3BlZWQ6MixcclxuLy8gICAgICAgICBwb3NpdGlvblg6IGkgKiA2NCxcclxuLy8gICAgICAgICBwb3NpdGlvblk6IDAsXHJcbi8vICAgICAgICAgaW1hZ2U6IG1lZGlhSGFuZGxlci5nZXRJbWFnZSgxKSxcclxuLy8gICAgICAgICB0aWxlc0Ftb3VudDogMyxcclxuLy8gICAgICAgICB0aWxlU2l6ZTogNjQsXHJcbi8vICAgICB9KSk7XHJcbi8vICAgICB0aGlzLnB1c2hUb0xheWVyKHRoaXMuZW5lbWllc1tpXSwgJ2JhY2snKTtcclxuXHJcbi8vICAgICB0aGlzLmVuZW1pZXNbaV0uc2V0QmVoYXZpb3IoW1xyXG4vLyAgICAgICAgIG5ldyBBY3Rpb24oe1xyXG4vLyAgICAgICAgICAgICBtZXRob2Q6IHRoaXMuZW5lbWllc1tpXS5tb3ZlLFxyXG4vLyAgICAgICAgICAgICB2YWx1ZTogJ2Rvd24nLFxyXG4vLyAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMFxyXG4vLyAgICAgICAgIH0pLFxyXG4vLyAgICAgICAgIG5ldyBBY3Rpb24oe1xyXG4vLyAgICAgICAgICAgICBtZXRob2Q6IHRoaXMuZW5lbWllc1tpXS5wYXVzZSxcclxuLy8gICAgICAgICAgICAgZHVyYXRpb246IDUwMFxyXG4vLyAgICAgICAgIH0pLFxyXG4vLyAgICAgICAgIG5ldyBBY3Rpb24oe1xyXG4vLyAgICAgICAgICAgICBtZXRob2Q6IHRoaXMuZW5lbWllc1tpXS5tb3ZlLFxyXG4vLyAgICAgICAgICAgICB2YWx1ZTogJ3VwJyxcclxuLy8gICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcclxuLy8gICAgICAgICB9KSxcclxuLy8gICAgICAgICBuZXcgQWN0aW9uKHtcclxuLy8gICAgICAgICAgICAgbWV0aG9kOiB0aGlzLmVuZW1pZXNbaV0uc2V0U3BlZWQsXHJcbi8vICAgICAgICAgICAgIHZhbHVlOiA2LFxyXG4vLyAgICAgICAgICAgICBvbmNlOiB0cnVlXHJcbi8vICAgICAgICAgfSksXHJcbi8vICAgICAgICAgbmV3IEFjdGlvbih7XHJcbi8vICAgICAgICAgICAgIG1ldGhvZDogdGhpcy5lbmVtaWVzW2ldLm1vdmUsXHJcbi8vICAgICAgICAgICAgIHZhbHVlOiAnZG93bicsXHJcbi8vICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbi8vICAgICAgICAgfSksXHJcbi8vICAgICAgICAgbmV3IEFjdGlvbih7XHJcbi8vICAgICAgICAgICAgIG1ldGhvZDogdGhpcy5lbmVtaWVzW2ldLnBhdXNlLFxyXG4vLyAgICAgICAgIH0pLFxyXG4vLyAgICAgXSk7XHJcblxyXG4vLyAgICAgY29uc29sZS5sb2codGhpcy5lbmVtaWVzW2ldKTtcclxuLy8gfSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVXaW5kb3cge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IHByb3BzLmNhbnZhcztcclxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHByb3BzLndpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gcHJvcHMuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMudG9wID0gMDtcclxuICAgICAgICB0aGlzLnJpZ2h0ID0gcHJvcHMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5ib3R0b20gPSBwcm9wcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5sZWZ0ID0gMDtcclxuICAgICAgICB0aGlzLnNjYWxlID0gcHJvcHMuc2NhbGUgfHwgMTtcclxuXHJcbiAgICAgICAgaWYgKHByb3BzLnNjYWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NhbGVDb250ZXh0KHRoaXMuc2NhbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzY2FsZUNvbnRleHQoc2NhbGUpIHtcclxuICAgICAgICB0aGlzLmN0eC5zY2FsZShzY2FsZSwgc2NhbGUpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IGdhbWVPYmplY3RzIGZyb20gJy4vZ2FtZU9iamVjdHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0SGFuZGxlciB7XHJcbiAgICBcclxuICAgIGNyZWF0ZU9iamVjdChDbGFzcywgcHJvcHMpIHtcclxuICAgICAgICBsZXQgb2JqID0gbmV3IENsYXNzKHByb3BzKTtcclxuICAgICAgICB0aGlzLmFkZE9iamVjdChvYmopO1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkT2JqZWN0KG9iaikge1xyXG4gICAgICAgIGdhbWVPYmplY3RzLnB1c2gob2JqKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRPYmplY3Qobikge1xyXG4gICAgICAgIHJldHVybiBnYW1lT2JqZWN0c1tuXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRPYmplY3RzKCkge1xyXG4gICAgICAgIHJldHVybiBnYW1lT2JqZWN0cztcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVPYmplY3Qob2JqKSB7XHJcbiAgICAgICAgZ2FtZU9iamVjdHMuc3BsaWNlKGdhbWVPYmplY3RzLmluZGV4T2Yob2JqKSwgMSk7XHJcbiAgICB9XHJcbn0iLCJsZXQgb2JqZWN0cyA9IFtdO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgb2JqZWN0czsiLCIvKmEgY2xhc3Mgb2YgcGxheWVyIGNoYXJhY3Rlci4gYSBwbGF5ZXIgaXMgYSBTSElQLCBzbyBpdCBleHRlbmRzIGFwcHJvcHJpYXRlIGNsYXNzXHJcbnRvIGNyZWF0ZSBhIHBsYXllciwgeW91IG5lZWQgdGkgcGFzcyBQUk9QUyB2YXJpYWJsZVxyXG5leGFtcGxlXHJcbntcclxuICAgIGhwOiAxMDAsXHJcbiAgICBzcGVlZDogMTAsXHJcbiAgICBwb3NpdGlvblg6IDEwMCxcclxuICAgIHBvc2l0aW9ueTogMjAwLFxyXG4gICAgaW1hZ2U6IGltZyxcclxuICAgIHRpbGVzQW1vdW50OiAyLFxyXG4gICAgdGlsZUhlaWdodEwgNjRcclxuICAgIGN1cnJlbnRUaWxlOiAwOyBcclxufVxyXG4qL1xyXG5pbXBvcnQgU2hpcCBmcm9tICcuL1NoaXAnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgU2hpcCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0JvcmRlcnMocmVjdGFuZ2xlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb25ZIDwgcmVjdGFuZ2xlLnRvcCkge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uWSA9IHJlY3RhbmdsZS50b3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uWSA+IHJlY3RhbmdsZS5ib3R0b20gLSB0aGlzLnRpbGVIZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvblkgPSByZWN0YW5nbGUuYm90dG9tIC0gdGhpcy50aWxlSGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvblggPCByZWN0YW5nbGUubGVmdCkge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uWCA9IHJlY3RhbmdsZS5sZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvblggPiByZWN0YW5nbGUucmlnaHQgLSB0aGlzLnRpbGVXaWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uWCA9IHJlY3RhbmdsZS5yaWdodCAtIHRoaXMudGlsZVdpZHRoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBPYmplY3QgZnJvbSAnLi9PYmplY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCBleHRlbmRzIE9iamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmhwID0gcHJvcHMuaHAgfHwgMTAwO1xyXG4gICAgICAgIHRoaXMuc2hvdGluZ1NwZWVkID0gcHJvcHMuc2hvdGluZ1NwZWVkIHx8IDE7XHJcbiAgICAgICAgdGhpcy5sYXN0U2hvdCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy53ZWFwb24gPSBwcm9wcy53ZWFwb24gfHwgbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzaG90KCkgeyAgICAgICAgICAgIFxyXG4gICAgICAgIGlmICghdGhpcy5sYXN0U2hvdCkge1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RTaG90ID0gcGVyZm9ybWFuY2Uubm93KCk7IFxyXG4gICAgICAgICAgICB0aGlzLndlYXBvbi5zaG90KHRoaXMucG9zaXRpb25YICsgdGhpcy50aWxlV2lkdGggLyAyLCB0aGlzLnBvc2l0aW9uWSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBkdCA9IHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5sYXN0U2hvdDtcclxuICAgICAgICBpZiAoZHQgPj0gMTAwMCAvIHRoaXMuc2hvdGluZ1NwZWVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2VhcG9uLnNob3QodGhpcy5wb3NpdGlvblggKyB0aGlzLnRpbGVXaWR0aCAvIDIsIHRoaXMucG9zaXRpb25ZKTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0U2hvdCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbn0iLCIvL2EgYmFzaWMgZ2FtZSBvYmplY3QgY2xhc3MuIGluY2x1ZGVzIG1ldGhvZHMgRVZFUlkgb2JqZWN0IG9uIGEgc2NyZWVuIGhhc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lT2JqZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gcHJvcHMubmFtZTtcclxuICAgICAgICB0aGlzLmdyb3VwID0gcHJvcHMuZ3JvdXAgfHwgbnVsbDtcclxuICAgICAgICB0aGlzLmltYWdlID0gcHJvcHMuaW1hZ2UgfHwgbnVsbDtcclxuICAgICAgICB0aGlzLnRpbGVzQW1vdW50ID0gcHJvcHMudGlsZXNBbW91bnQgfHwgMDtcclxuICAgICAgICB0aGlzLnRpbGVXaWR0aCA9IHByb3BzLnRpbGVXaWR0aCB8fCAwO1xyXG4gICAgICAgIHRoaXMudGlsZUhlaWdodCA9IHByb3BzLnRpbGVIZWlnaHQgfHwgMDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaWxlID0gcHJvcHMuY3VycmVudFRpbGUgfHwgMDtcclxuICAgICAgICB0aGlzLnNwZWVkID0gcHJvcHMuc3BlZWQgfHwgMTA7XHJcbiAgICAgICAgdGhpcy50dXJuU3BlZWQgPSBwcm9wcy50dXJuU3BlZWQgfHwgNTtcclxuICAgICAgICB0aGlzLmFuZ2xlID0gcHJvcHMuYW5nbGUgfHwgOTA7XHJcbiAgICAgICAgdGhpcy5yYWRBbmdsZSA9IHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25YID0gcHJvcHMucG9zaXRpb25YIHx8IDA7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblkgPSBwcm9wcy5wb3NpdGlvblkgfHwgMDtcclxuXHJcbiAgICAgICAgdGhpcy5tb3ZlID0gdGhpcy5tb3ZlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZShhbmdsZSkge1xyXG4gICAgICAgIGNvbnN0IHJhZEFuZ2xlID0gYW5nbGUgKiBNYXRoLlBJIC8gMTgwO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25YICs9IE1hdGgucm91bmQoTWF0aC5jb3MocmFkQW5nbGUpICogdGhpcy5zcGVlZCk7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblkgLT0gTWF0aC5yb3VuZChNYXRoLnNpbihyYWRBbmdsZSkgKiB0aGlzLnNwZWVkKTtcclxuICAgIH1cclxuXHJcbiAgICB0dXJuKGRpcmVjdGlvbikge1xyXG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0Jzoge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmdsZSAtPSB0aGlzLnR1cm5TcGVlZDtcclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5hbmdsZSA8PSAwICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5nbGUgPSAzNjAgLSB0aGlzLmFuZ2xlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yYWRBbmdsZSA9IHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAnbGVmdCc6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5nbGUgKz0gdGhpcy50dXJuU3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuYW5nbGUgPj0gMzYwICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLmFuZ2xlIC0gMzYwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yYWRBbmdsZSA9IHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3BlZWQoc3BlZWQpIHtcclxuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dFRpbGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRpbGUgPCAodGhpcy50aWxlc0Ftb3VudCAtIDEpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbGUrKztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUaWxlID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW1hZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhjdHgpIHtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5wb3NpdGlvblggICsgdGhpcy50aWxlV2lkdGggLyAyLCB0aGlzLnBvc2l0aW9uWSArIHRoaXMudGlsZUhlaWdodCAvIDIpO1xyXG4gICAgICAgIGN0eC5yb3RhdGUoLSh0aGlzLmFuZ2xlIC0gOTApICogTWF0aC5QSSAvIDE4MCk7XHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB0aGlzLmN1cnJlbnRUaWxlICogdGhpcy50aWxlV2lkdGgsIDAsIHRoaXMudGlsZVdpZHRoLCB0aGlzLnRpbGVIZWlnaHQsIC10aGlzLnRpbGVXaWR0aCAvIDIsIC10aGlzLnRpbGVIZWlnaHQgLyAyLCB0aGlzLnRpbGVXaWR0aCwgdGhpcy50aWxlSGVpZ2h0KTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9TaGlwJztcclxuaW1wb3J0IEJlaGF2aW9yIGZyb20gJy4vQmVoYXZpb3InO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1lbnlTaGlwIGV4dGVuZHMgU2hpcCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5wYXVzZSA9IHRoaXMucGF1c2UuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5iZWhhdmlvciA9IG5ldyBCZWhhdmlvcigpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL0VORU1ZIFNISVAgTElHSUMgQU5EIEFDVElPTlNcclxuICAgIHBhdXNlKCkge31cclxuIFxyXG4gICAgLy9TRVQgQkVIQVZJT1JcclxuICAgIHNldEJlaGF2aW9yKGFjdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmJlaGF2aW9yLnNldEFjdGlvbnMoYWN0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9DdXJyZW50QWN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuYmVoYXZpb3IuZG9DdXJyZW50QWN0aW9uKCk7XHJcbiAgICB9XHJcbn0iLCIvL0JFSEFWSU9VUiBDTEFTUy4gSEFORExFUyBBQ1RJT04nUyBFWEVDVVRJT05cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmVoYXZpb3Ige1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICAvL3RoaXMgaXMgYW4gYXJyYXkgb2YgZW5lbXkgYWN0aW9ucyBsaWtlIG1vdmUsIHR1cm4sIHN0b3AgZXRjLiBcclxuICAgICAgICAvLyBwcm9wcy5hY3Rpb25zID8gdGhpcy5hY3Rpb25zID0gcHJvcHMuYWN0aW9ucy5zbGljZSgpIDogW107XHJcbiAgICAgICAgaWYgKHByb3BzICYmIHByb3BzLmFjdGlvbnMpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3Rpb25zID0gcHJvcHMuYWN0aW9ucztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGlvbnMgPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudEFjdGlvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25TdGFydFRpbWUgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGlvblN0YXJ0VmFsdWUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vU0VUVElORyBBQ1RJT05TXHJcbiAgICBzZXRBY3Rpb25zKGFjdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmFjdGlvbnMgPSBhY3Rpb25zLnNsaWNlKCk7XHJcbiAgICAgICAgdGhpcy5uZXh0QWN0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQWN0aW9uKGFjdGlvbikge1xyXG4gICAgICAgIHRoaXMuYWN0aW9ucy5wdXNoKGFjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy9ORVhUIEFDVElPTlNcclxuICAgIG5leHRBY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50QWN0aW9uID0gdGhpcy5hY3Rpb25zLnNoaWZ0KCk7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25TdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICB0aGlzLmRvQ3VycmVudEFjdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvQ3VycmVudEFjdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50QWN0aW9uLmR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIGxldCBkdCA9IHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5hY3Rpb25TdGFydFRpbWU7XHJcblxyXG4gICAgICAgICAgICBpZiAoZHQgPj0gdGhpcy5jdXJyZW50QWN0aW9uLmR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRBY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uU3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFjdGlvbi5tZXRob2QodGhpcy5jdXJyZW50QWN0aW9uLnZhbHVlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudEFjdGlvbi5vbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFjdGlvbi5tZXRob2QodGhpcy5jdXJyZW50QWN0aW9uLnZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy5uZXh0QWN0aW9uKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QWN0aW9uLm1ldGhvZCh0aGlzLmN1cnJlbnRBY3Rpb24udmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSAiLCIvL0FOIEFDVElPTiBDTEFTUy4gSVMgTkVFREVEIFRPIENPTlNUUlVDVCBCRUhBVklPUiBBUlJBWVMgRk9SIEFVVE9NQVRJQyBFTlRJVElFU1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3Rpb24ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICB0aGlzLm1ldGhvZCA9IHByb3BzLm1ldGhvZDtcclxuICAgICAgICB0aGlzLmR1cmF0aW9uID0gcHJvcHMuZHVyYXRpb247XHJcbiAgICAgICAgdGhpcy5vbmNlID0gcHJvcHMub25jZTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gcHJvcHMudmFsdWU7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25TdGFydFRpbWUgPSBudWxsO1xyXG4gICAgfVxyXG59ICAiLCJpbXBvcnQgQnVsbGV0IGZyb20gJy4vQnVsbGV0JztcclxuaW1wb3J0IE9iamVjdEhhbmRsZXIgZnJvbSAnLi9PYmplY3RIYW5kbGVyJztcclxuXHJcbmNvbnN0IG9iamVjdEhhbmRsZXIgPSBuZXcgT2JqZWN0SGFuZGxlcigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VhcG9uIHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHByb3BzLm5hbWU7XHJcbiAgICAgICAgdGhpcy5ncm91cCA9IHByb3BzLmdyb3VwO1xyXG4gICAgICAgIHRoaXMuYnVsbGV0SW1hZ2UgPSBwcm9wcy5idWxsZXRJbWFnZTtcclxuICAgICAgICB0aGlzLnRpbGVXaWR0aCA9IHByb3BzLnRpbGVXaWR0aDtcclxuICAgICAgICB0aGlzLnRpbGVIZWlnaHQgPSBwcm9wcy50aWxlSGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuZGFtYWdlID0gcHJvcHMuZGFtYWdlIHx8IDE7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHByb3BzLnNwZWVkIHx8IDE7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdChwb3NpdGlvblgsIHBvc2l0aW9uWSkge1xyXG4gICAgICAgIG9iamVjdEhhbmRsZXIuY3JlYXRlT2JqZWN0KEJ1bGxldCwge1xyXG4gICAgICAgICAgICBncm91cDogJ3BsYXllckJ1bGxldCcsXHJcbiAgICAgICAgICAgIGltYWdlOiB0aGlzLmJ1bGxldEltYWdlLFxyXG4gICAgICAgICAgICB0aWxlV2lkdGg6IHRoaXMudGlsZVdpZHRoLFxyXG4gICAgICAgICAgICB0aWxlSGVpZ2h0OiB0aGlzLnRpbGVIZWlnaHQsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uWDogcG9zaXRpb25YLFxyXG4gICAgICAgICAgICBwb3NpdGlvblk6IHBvc2l0aW9uWSxcclxuICAgICAgICAgICAgZGFtYWdlOiB0aGlzLmRhbWFnZSxcclxuICAgICAgICAgICAgc3BlZWQ6IHRoaXMuc3BlZWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCBPYmplY3QgZnJvbSAnLi9PYmplY3QnO1xyXG5pbXBvcnQgT2JqZWN0SGFuZGxlciBmcm9tICcuL09iamVjdEhhbmRsZXInO1xyXG5cclxuY29uc3Qgb2JqZWN0SGFuZGxlciA9IG5ldyBPYmplY3RIYW5kbGVyKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWxsZXQgZXh0ZW5kcyBPYmplY3Qge1xyXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLmRhbWFnZSA9IHByb3BzLmRhbWFnZSB8fCAxO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBwcm9wcy5zcGVlZCB8fCAxO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLm1vdmUodGhpcy5hbmdsZSk7XHJcbiAgICAgICAgdGhpcy5jaGVja0JvcmRlcnMoKVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQm9yZGVycygpIHtcclxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvblkgLSB0aGlzLnRpbGVIZWlnaHQgPCAwKSB7XHJcbiAgICAgICAgICAgIG9iamVjdEhhbmRsZXIuZGVsZXRlT2JqZWN0KHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImxldCBrZXlTdGF0ZXMgPSB7IFxyXG4gICAgdXA6IGZhbHNlLFxyXG4gICAgcmlnaHQ6IGZhbHNlLFxyXG4gICAgZG93bjogZmFsc2UsXHJcbiAgICBsZWZ0OiBmYWxzZSxcclxuICAgIHNwYWNlOiBmYWxzZVxyXG59O1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gODcgfHwgZS5rZXlDb2RlID09PSAzOCkge1xyXG4gICAgICAgIGtleVN0YXRlcy51cCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSA2NSB8fCBlLmtleUNvZGUgPT09IDM3KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0EgaXMgcHJlc3NlZCEnKTtcclxuICAgICAgICBrZXlTdGF0ZXMubGVmdCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSA4MyB8fCBlLmtleUNvZGUgPT09IDQwKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1MgaXMgcHJlc3NlZCEnKTtcclxuICAgICAgICBrZXlTdGF0ZXMuZG93biA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSA2OCB8fCBlLmtleUNvZGUgPT09IDM5KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0QgaXMgcHJlc3NlZCEnKTtcclxuICAgICAgICBrZXlTdGF0ZXMucmlnaHQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMzIpIHtcclxuICAgICAgICBrZXlTdGF0ZXMuc3BhY2UgPSB0cnVlO1xyXG4gICAgfVxyXG59LCB0cnVlKTtcclxuICAgIFxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gODcgfHwgZS5rZXlDb2RlID09PSAzOCkge1xyXG4gICAgICAgIGtleVN0YXRlcy51cCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gNjUgfHwgZS5rZXlDb2RlID09PSAzNykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdBIGlzIHByZXNzZWQhJyk7XHJcbiAgICAgICAga2V5U3RhdGVzLmxlZnQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChlLmtleUNvZGUgPT09IDgzIHx8IGUua2V5Q29kZSA9PT0gNDApIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnUyBpcyBwcmVzc2VkIScpO1xyXG4gICAgICAgIGtleVN0YXRlcy5kb3duID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSA2OCB8fCBlLmtleUNvZGUgPT09IDM5KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0QgaXMgcHJlc3NlZCEnKTtcclxuICAgICAgICBrZXlTdGF0ZXMucmlnaHQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChlLmtleUNvZGUgPT09IDMyKSB7XHJcbiAgICAgICAga2V5U3RhdGVzLnNwYWNlID0gZmFsc2U7XHJcbiAgICB9XHJcbn0sIHRydWUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQga2V5U3RhdGVzOyJdLCJzb3VyY2VSb290IjoiIn0=