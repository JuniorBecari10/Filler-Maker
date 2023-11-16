// must have '.js' extension, because the compiler will passthrough this statement
import { entities } from "./entities/Entity.js";
import { Player } from "./entities/Player.js";
import { Graphics, readImage } from "./graphics.js";
import { mouse } from "./input.js";
import { MAP_WIDTH, TILE_SIZE, posToIndex, tiles } from "./tiles/Tile.js";
import { CollidableTile } from "./tiles/Tile.js";
const canvas = document.getElementById("canvas");
const g = new Graphics(canvas);
const player = new Player({ x: 0, y: 0, w: 32, h: 32 }, readImage("player-spr"));
export function setup() {
    entities.push(player);
    tiles[2] = new CollidableTile({ x: TILE_SIZE * 2, y: 0 }, readImage("tile-wall"));
}
function defineSize(g) {
    g.canvas.width = window.innerWidth;
    g.canvas.height = window.innerHeight;
    g.resetSmoothing();
}
function tick() {
    for (let e of entities)
        e.tick();
    for (let t of tiles) {
        if (t !== undefined) // gonna remove
            t.tick();
    }
    // debug!
    if (mouse.leftPressed || mouse.rightPressed) {
        let index = posToIndex(mouse.pos.x, mouse.pos.y, MAP_WIDTH);
        if (tiles[index] === undefined) {
            if (mouse.leftPressed)
                tiles[index] = new CollidableTile({ x: Math.round(mouse.pos.x / TILE_SIZE) * TILE_SIZE, y: Math.round(mouse.pos.y / TILE_SIZE) * TILE_SIZE }, readImage("tile-wall"));
            else if (mouse.rightPressed)
                tiles[index] = undefined;
        }
    }
}
function render(g) {
    g.ctx.fillStyle = "black";
    g.ctx.fillRect(0, 0, g.canvas.width, g.canvas.height);
    for (let e of entities)
        e.render(g);
    for (let t of tiles) {
        if (t !== undefined)
            t.render(g);
    }
}
export function loop() {
    defineSize(g);
    tick();
    render(g);
    window.requestAnimationFrame(loop);
}
export default { setup, loop };
