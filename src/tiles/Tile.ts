import { Graphics, readImage } from "../graphics.js";

export abstract class Tile {
  pos: Point;
  sprite: HTMLImageElement;
  collidable: boolean;

  constructor(pos: Point, sprite: HTMLImageElement, collidable: boolean) {
    this.pos = pos;
    this.sprite = sprite;
    this.collidable = collidable;
  }

  tick() {}

  render(g: Graphics) {
    g.ctx.drawImage(this.sprite, this.pos.x, this.pos.y, TILE_SIZE, TILE_SIZE);
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
export const MAP_WIDTH: number = 20;
export const MAP_HEIGHT: number = 20;

export const tiles: Tile[] = new Array(MAP_WIDTH * MAP_HEIGHT);
export default { Tile, CollidableTile, NotCollidableTile, TILE_SIZE, MAP_WIDTH, MAP_HEIGHT, tiles, posToIndex, getTile };
