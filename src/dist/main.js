"use strict";
const canvas = document.getElementById("canvas");
const g = new Graphics(canvas);
function defineSize(g) {
    g.canvas.width = window.innerWidth;
    g.canvas.height = window.innerHeight;
}
function tick() {
}
function render(g) {
}
function loop() {
    defineSize(g);
    tick();
    render(g);
    window.requestAnimationFrame(loop);
}
