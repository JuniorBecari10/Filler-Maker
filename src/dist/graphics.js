export class Graphics {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.setup();
    }
    setup() {
        this.ctx.imageSmoothingEnabled = false;
    }
}
export default { Graphics };
