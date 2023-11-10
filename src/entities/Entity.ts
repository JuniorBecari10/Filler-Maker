import { Graphics } from "../graphics.js";

export class Entity {
  bounds: Rectangle;
  sprite: HTMLImageElement;

  constructor(bounds: Rectangle, sprite: HTMLImageElement) {
    this.bounds = bounds;
    this.sprite = sprite;
  }

  tick() {}

  render(g: Graphics) {
    g.ctx.drawImage(this.sprite, this.bounds.x, this.bounds.y, this.bounds.w, this.bounds.h);
  }
}

export const entities: Entity[] = [];
export default { Entity, entities };
