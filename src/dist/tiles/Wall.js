import { readImage } from "../graphics.js";
import { CollidableTile } from "./Tile.js";
export class Wall extends CollidableTile {
    constructor(pos) {
        super(pos, wallSprite);
    }
}
const wallSprite = readImage("wall-spr");
export default { Wall };
