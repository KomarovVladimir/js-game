export default class GameWindow {
    constructor(canvas) {
        //game canvas
        this.canvas = canvas;

        //drawing context
        this.ctx = this.canvas.getContext('2d');

        //field width/height
        this.width = this.canvas.width;
        this.height = this.canvas.height;
    }
}