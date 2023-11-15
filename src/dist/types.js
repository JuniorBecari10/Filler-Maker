"use strict";
function collide(a, b) {
    return a.x < b.x + b.w &&
        a.x + a.w > b.x &&
        a.y < b.y + b.h &&
        a.y + a.h > b.y;
}
function pointToRectangle(p, w, h) {
    return {
        x: p.x,
        y: p.y,
        w: w,
        h: h,
    };
}
