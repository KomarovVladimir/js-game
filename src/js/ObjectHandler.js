import gameObjects from './gameObjects';

export default class ObjectHandler {
    constructor() {
    }

    createObject(Class, props) {
        let obj = new Class(props);
        gameObjects.push(obj);
        return obj;
    }

    getObject(n) {
        return gameObjects[n];
    }

    getObjects() {
        return gameObjects;
    }

    deleteObject(obj) {
        gameObjects.splice(gameObjects.indexOf(obj), 1);
    }
}