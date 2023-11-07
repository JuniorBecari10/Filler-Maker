const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const g = new Graphics(canvas);

function defineSize(g: Graphics) {
  g.canvas.width = window.innerWidth;
  g.canvas.height = window.innerHeight;
}

function tick() {
  
}

function render(g: Graphics) {
  g.ctx.fillStyle = "black";
  g.ctx.fillRect(0, 0, g.canvas.width, g.canvas.height);
}

function loop() {
  defineSize(g);

  tick();
  render(g);

  window.requestAnimationFrame(loop);
}
