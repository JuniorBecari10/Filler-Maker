type Point = {
  x: number
  y: number
}

type Rectangle = {
  x: number
  y: number
  w: number
  h: number
}

function collide(a: Rectangle, b: Rectangle): boolean {
  return a.x < b.x + b.w &&
         a.x + a.w > b.x &&
         a.y < b.y + b.h &&
         a.y + a.h > b.y;
}

function pointToRectangle(p: Point, w: number, h: number): Rectangle {
  return {
    x: p.x,
    y: p.y,
    w: w,
    h: h,
  }
}

function rectangleToPoint(r: Rectangle): Point {
  return {
    x: r.x,
    y: r.y
  }
}
