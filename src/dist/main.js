// must have '.js' extension, because the compiler will passthrough this statement
import { editorRender, editorTick } from "./editor.js";
import { entities } from "./entities/Entity.js";
import { Player } from "./entities/Player.js";
import { Graphics, readImage } from "./graphics.js";
import { MAP_HEIGHT, MAP_WIDTH, TILE_SIZE, tiles } from "./tiles/Tile.js";
const canvas = document.getElementById("canvas");
const g = new Graphics(canvas);
export const camera = {
    x: 0,
    y: 0
};
const player = new Player({ x: 0, y: 0, w: 32, h: 32 }, readImage("player-spr"));
export function setup() {
    entities.push(player);
}
function defineSize(g) {
    g.canvas.width = window.innerWidth;
    g.canvas.height = window.innerHeight;
    g.resetSmoothing();
}
function tick() {
    for (let t of tiles) {
        if (t !== undefined) // gonna remove
            t.tick();
    }
    for (let e of entities)
        e.tick();
    // centralize camera
    editorTick();
}
function render(g) {
    g.ctx.fillStyle = "black";
    g.ctx.fillRect(0, 0, g.canvas.width, g.canvas.height);
    g.ctx.fillStyle = "white";
    g.ctx.fillRect(-camera.x, -camera.y, MAP_WIDTH * TILE_SIZE, MAP_HEIGHT * TILE_SIZE);
    for (let t of tiles) {
        if (t !== undefined)
            t.render(g);
    }
    for (let e of entities)
        e.render(g);
    editorRender(g);
}
export function loop() {
    defineSize(g);
    tick();
    render(g);
    window.requestAnimationFrame(loop);
}
export default { setup, loop, camera };
