import { Tile } from "./Tile.js";
export class CollidableTile extends Tile {
    constructor(pos, sprite) {
        super(pos, sprite, true);
    }
}
export default { CollidableTile };
