import { Graphics } from "../graphics.js";
import { camera } from "../main.js";

export class Entity {
  bounds: Rectangle;
  sprite: HTMLImageElement;

  constructor(bounds: Rectangle, sprite: HTMLImageElement) {
    this.bounds = bounds;
    this.sprite = sprite;
  }

  collides(other: Entity): boolean {
    return collide(this.bounds, other.bounds);
  }

  tick() {}

  render(g: Graphics) {
    g.ctx.drawImage(this.sprite, this.bounds.x - camera.x, this.bounds.y - camera.y, this.bounds.w, this.bounds.h);
  }
}

export const entities: Entity[] = [];
export default { Entity, entities };
