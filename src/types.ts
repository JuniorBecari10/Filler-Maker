type Point = {
  x: number,
  y: number;
}

type Rectangle = {
  x: number,
  y: number,
  w: number,
  h: number,
}

function collide(a: Rectangle, b: Rectangle): boolean {
  return a.x < b.x + b.w &&
         a.x + a.w > b.x &&
         a.y < b.y + b.h &&
         a.y + a.h > b.y;
}
