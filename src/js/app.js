import Game from './Game';
import '../../node_modules/webgl-2d/webgl-2d';

//GAME INIT <======================================================= 
const canvas = document.getElementById('game');
WebGL2D.enable(canvas); // adds "webgl-2d" context to cvs
const ctx = canvas.getContext('webgl-2d');


const game = new Game(ctx);
game.start();    