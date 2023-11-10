export class Graphics {
  readonly canvas: HTMLCanvasElement;
  readonly ctx: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d")!;

    this.resetSmoothing();
  }

  resetSmoothing() {
    this.ctx.imageSmoothingEnabled = false;
  }
}

export function readImage(id: string): HTMLImageElement {
  return document.getElementById(id) as HTMLImageElement;
}

export default { Graphics, readImage };
