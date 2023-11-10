// must have '.js' extension, because the compiler will passthrough this statement
import { entities } from "./entities/Entity.js";
import { Player } from "./entities/Player.js";
import { Graphics, readImage } from "./graphics.js";
const canvas = document.getElementById("canvas");
const g = new Graphics(canvas);
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
    for (let e of entities)
        e.tick();
}
function render(g) {
    g.ctx.fillStyle = "black";
    g.ctx.fillRect(0, 0, g.canvas.width, g.canvas.height);
    for (let e of entities)
        e.render(g);
}
export function loop() {
    defineSize(g);
    tick();
    render(g);
    window.requestAnimationFrame(loop);
}
export default { setup, loop };
