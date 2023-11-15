import { Tile } from "./Tile.js";
export class NotCollidableTile extends Tile {
    constructor(pos, sprite) {
        super(pos, sprite, false);
    }
}
export default { NotCollidableTile };
