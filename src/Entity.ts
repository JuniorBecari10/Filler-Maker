export class Entity {
  bounds: Rectangle;
  sprite: HTMLImageElement;

  constructor(bounds: Rectangle, sprite: HTMLImageElement) {
    this.bounds = bounds;
    this.sprite = sprite;
  }
}

function readImage(id: string): HTMLImageElement {
  return document.getElementById(id) as HTMLImageElement;
}

export const entities: Entity[] = [];

export default { Entity, entities };
