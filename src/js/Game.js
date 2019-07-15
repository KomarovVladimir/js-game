import mediaHandler from './MediaHandler';
import GameScene from './GameScene';

export default class Game {
    constructor(canvas) {
        this._canvas = canvas;

        //game state (off = 0, on = 1, pause = 2)
        this._gameState = 0;

        //sample of a stage class
        this._stage = null;
    }

    //game initialization process
    async init() {
        mediaHandler.setImageSources([
            '../../dist/images/ship.png',
            '../../dist/images/enemy.png'
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
            mediaHandler.addImage(await this.preloadImage(src));
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
        this._gameState = 1;

        //creation of stage 1 <================================================================================================ WiP!
        this._stage = new GameScene({
            name: 'A Test Game Stage',
            canvas: this._canvas,
        });
        this._stage.start();
    }  
}