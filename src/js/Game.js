export default class Game {
    constructor(canvas) {
        this.canvas = canvas;

        //game state (off = 0, on = 1, pause = 2)
        this.gameState = 0;

        //current game stage
        this.levelId = 1;

        //sample of a stage class
        this.stage = null;

        this.mediaHandler = new mediaHandler({
            imageSources = [
                './src/images/ship.png',
                './src/images/enemy.png'
            ];
        });
    }

    //game initialization process
    async init() {
        //preload images
        console.log('Image preloading.');
        await this.preloadAllImages();
        console.log('Images preloading done.');
    }

    //this method takes all of the sources from this.imageSources and preloads them
    async preloadAllImages() {
        for(let src of imageSources) {
            console.log(`Loading ${src}.`);
            images.push(await this.preloadImage(src));
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
        this.gameState = 1;

        //creation of stage 1 <================================================================================================ WiP!
        this.stage = new GameStage({
            name: 'A Test Game Stage',
            canvas: this.canvas,
            id: 0
        });
        this.stage.start();
    }  
}