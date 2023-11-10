export class Graphics {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.resetSmoothing();
    }
    resetSmoothing() {
        this.ctx.imageSmoothingEnabled = false;
    }
}
export function readImage(id) {
    return document.getElementById(id);
}
export default { Graphics, readImage };
