import gameMedia from './gameMedia';

export default class MediaHandler {
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
        gameMedia[imageName] = image;
    }

    getImage(image) {
        return gameMedia[image];
    }

    // getImage(n) {
    //     return gameMedia[n];
    // }

    // getImages() {
    //     return gameMedia;
    // }
}