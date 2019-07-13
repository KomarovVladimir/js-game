export default class mediaHandler {
    constructor(props) {
        //object containing all of the images after they are preloaded
        this._images = [];
        
        //sources of all of the game images, goes to preload method
        this._imageSources = props.imageSources;
    }

    setImageSources(sourcesArray) {
        this._imageSources = sourcesArray.slice();
    }

    addImage(image) {
        this.images.push(image);
    }

    getImage(n) {
        return this._images[n];
    }
}