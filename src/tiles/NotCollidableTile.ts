import { Tile } from "./Tile.js";

export class NotCollidableTile extends Tile {
  constructor(pos: Point, sprite: HTMLImageElement) {
    super(pos, sprite, false);
  }
}

export default { NotCollidableTile };
