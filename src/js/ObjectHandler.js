import gameObjects from './gameObjects';

export default class ObjectHandler {
    constructor() {
    }

    createObject(Class, props) {
        let obj = new Class(props);
        gameObjects.push(obj);
    }

    getObject(n) {
        return gameObjects[n];
    }

    getObjects() {
        return gameObjects;
    }
}