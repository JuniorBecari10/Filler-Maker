// must have '.js' extension, because the compiler will passthrough this statement
import { entities } from "./entities/Entity.js";
import { Player } from "./entities/Player.js";
import { Graphics, readImage } from "./graphics.js";
import { tiles } from "./tiles/Tile.js";
import { NotCollidableTile } from "./tiles/NotCollidableTile.js";
const canvas = document.getElementById("canvas");
const g = new Graphics(canvas);
const player = new Player({ x: 0, y: 0, w: 32, h: 32 }, readImage("tile-wall"));
export function setup() {
    entities.push(player);
    tiles[2] = new NotCollidableTile({ x: 0, y: 0 }, readImage("player-spr"));
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
        if (t !== undefined)
            t.tick();
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
