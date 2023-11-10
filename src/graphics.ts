export class Graphics {
  readonly canvas: HTMLCanvasElement;
  readonly ctx: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d")!;

    this.setup();
  }

  setup() {
    this.ctx.imageSmoothingEnabled = false;
  }
}

export default { Graphics };
