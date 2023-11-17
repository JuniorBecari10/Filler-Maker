import { Graphics } from "../graphics.js";
import { TILE_SIZE, Tile } from "../tiles/Tile.js";

export class Entity {
  bounds: Rectangle;
  sprite: HTMLImageElement;

  constructor(bounds: Rectangle, sprite: HTMLImageElement) {
    this.bounds = bounds;
    this.sprite = sprite;
  }

  collides(other: Entity | Tile): boolean {
    if (other instanceof Entity) {
      let e = other as Entity;
      return collide(this.bounds, e.bounds);
    }
    
    else if (other instanceof Tile) {
      let t = other as Tile;
      return collide(this.bounds, pointToRectangle(t.realPos(), TILE_SIZE, TILE_SIZE));
    }

    return false;
  }

  tick() {}

  render(g: Graphics) {
    g.ctx.drawImage(this.sprite, this.bounds.x, this.bounds.y, this.bounds.w, this.bounds.h);
  }
}

export const entities: Entity[] = [];
export default { Entity, entities };
