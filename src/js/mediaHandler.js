class MediaHandler {
    constructor(props) {
        //object containing all of the images after they are preloaded
        this._images = [];
        
        //sources of all of the game images, goes to preload method
        if (props && props.imageSources) {
            this._imageSources = props.imageSources.slice();
        } else {
            this._imageSources = [];
        }
    }

    setImageSources(sourcesArray) {
        this._imageSources = sourcesArray.slice();
    }

    getImageSources() {
        return  this._imageSources;
    }

    addImage(image) {
        this._images.push(image);
    }

    getImage(n) {
        return this._images[n];
    }

    getAllImages() {
        return this._images;
    }
}

let mediaHandler = new MediaHandler();
export default mediaHandler;

//CREATE A STORAGE