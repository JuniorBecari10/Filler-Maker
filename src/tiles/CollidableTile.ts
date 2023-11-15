import { Tile } from "./Tile.js";

export class CollidableTile extends Tile {
  constructor(pos: Point, sprite: HTMLImageElement) {
    super(pos, sprite, true);
  }
}

export default { CollidableTile };
