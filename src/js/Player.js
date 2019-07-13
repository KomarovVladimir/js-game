//a class of player character. a player is a SHIP, so it extends appropriate class
//to create a player, you need ti pass PROPS variable
// example
// {
//     hp: 100,
//     speed: 10,
//     positionX: 100,
//     positiony: 200,
//     image: null,
//     tileset: {
//         image: img,
//         tilesAmount: 2,
//         tileHeightL 64
//         currentTile: 0; 
//     },
// }

import Ship from './Ship';

export default class Player extends Ship {
    constructor(props) {
        super(props);
    }
}