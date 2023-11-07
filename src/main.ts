const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const g = new Graphics(canvas);

function defineSize(g: Graphics) {
  g.canvas.width = window.innerWidth;
  g.canvas.height = window.innerHeight;
}

function tick() {

}

function render(g: Graphics) {

}

function loop(): void {
  defineSize(g);

  tick();
  render(g);

  window.requestAnimationFrame(loop);
}
