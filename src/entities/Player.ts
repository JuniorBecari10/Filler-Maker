import { Entity } from "./Entity.js";

export class Player extends Entity {
  constructor(bounds: Rectangle, sprite: HTMLImageElement) {
    super(bounds, sprite);
  }

  tick() {
      
  }
}

export default { Player };
