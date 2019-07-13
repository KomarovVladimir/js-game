//object containing all of the images after they are preloaded
let images = [];

//sources of all of the game images, goes to preload method
let imageSources = [
    './src/images/ship.png',
    './src/images/enemy.png'
];

//key states  
let keyStates = { 
    up: false,
    right: false,
    down: false,
    left: false
}

//key press watch <======================================================= 
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
}, true);


import Game from './Game';
import GameWindow from './GameWindow';
// import GameObject from './GameObject';
// import GameScene from './GameScene';
import GameStage from './GameStage';
import Behavior from './Behavior';
// import Ship from './Ship';
import Player from './Player';
import EmenyShip from './EmenyShip';


//GAME INIT <======================================================= 
const canvas = document.getElementById('game');
const game = new Game(canvas);
game.start();    