import { mouse } from "./input.js";
import { posToIndex, tiles, MAP_WIDTH, TILE_SIZE } from "./tiles/Tile.js";
import { Wall } from "./tiles/Wall.js";
const mouseXOffset = -20;
const mouseYOffset = -20;
export function editorTick() {
    // debug!
    if (mouse.leftPressed || mouse.rightPressed) {
        let index = posToIndex(mouse.pos.x, mouse.pos.y, MAP_WIDTH);
        if (tiles[index] === undefined) {
            if (mouse.leftPressed)
                tiles[index] = new Wall({ x: Math.round((mouse.pos.x + mouseXOffset) / TILE_SIZE), y: Math.round((mouse.pos.y + mouseYOffset) / TILE_SIZE) });
            else if (mouse.rightPressed) {
                tiles[index] = undefined;
            }
            console.log(Math.round((mouse.pos.x - 20) / TILE_SIZE));
        }
    }
}
export function editorRender(g) {
}
export default { editorTick, editorRender };
