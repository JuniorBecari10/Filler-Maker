import { Graphics } from "../graphics.js";
import { camera } from "../main.js";

export abstract class Tile {
  // 'pos' refers to the array position, in x and y coordinates
  pos: Point;
  sprite: HTMLImageElement | null;
  collidable: boolean;

  constructor(pos: Point, sprite: HTMLImageElement | null, collidable: boolean) {
    this.pos = pos;
    this.sprite = sprite;
    this.collidable = collidable;
  }

  realPos(): Point {
    return {
      x: this.pos.x * TILE_SIZE,
      y: this.pos.y * TILE_SIZE,
    }
  }

  bounds(): Rectangle {
    let { x, y } = this.realPos();
    
    return {
      x: x,
      y: y,
      w: TILE_SIZE,
      h: TILE_SIZE,
    }
  }

  tick() {}

  render(g: Graphics) {
    // 'sprite' is null when you don't want to have a sprite in this tile
    if (this.sprite === null) return;

    g.ctx.drawImage(this.sprite, (this.pos.x * TILE_SIZE) - camera.x, (this.pos.y * TILE_SIZE) - camera.y, TILE_SIZE, TILE_SIZE);
  }
}

export class CollidableTile extends Tile {
  constructor(pos: Point, sprite: HTMLImageElement) {
    super(pos, sprite, true);
  }
}

export class NotCollidableTile extends Tile {
  constructor(pos: Point, sprite: HTMLImageElement) {
    super(pos, sprite, false);
  }
}

export function posToIndex(x: number, y: number, w: number): number {
  return x + (y * w);
}

export function getTile(x: number, y: number): Tile | null {
  let index = x + (y * MAP_WIDTH);

  if (index < 0 || index >= tiles.length)
    return null;

  return tiles[index];
}

export const TILE_SIZE: number = 32;
export const MAP_WIDTH: number = 40;
export const MAP_HEIGHT: number = 20;

export const tiles: Tile[] = new Array(MAP_WIDTH * MAP_HEIGHT);
export default { Tile, CollidableTile, NotCollidableTile, TILE_SIZE, MAP_WIDTH, MAP_HEIGHT, tiles, posToIndex, getTile };
