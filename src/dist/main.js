// must have '.js' extension, because the compiler will passthrough this statement
import { Graphics } from "./graphics.js";
const canvas = document.getElementById("canvas");
const g = new Graphics(canvas);
function defineSize(g) {
    g.canvas.width = window.innerWidth;
    g.canvas.height = window.innerHeight;
}
function tick() {
}
function render(g) {
    g.ctx.fillStyle = "black";
    g.ctx.fillRect(0, 0, g.canvas.width, g.canvas.height);
}
export function loop() {
    defineSize(g);
    tick();
    render(g);
    window.requestAnimationFrame(loop);
}
export default { loop };
