import { camera } from "../main.js";
export class Entity {
    constructor(bounds, sprite) {
        this.bounds = bounds;
        this.sprite = sprite;
    }
    collides(other) {
        return collide(this.bounds, other.bounds);
    }
    tick() { }
    render(g) {
        g.ctx.drawImage(this.sprite, this.bounds.x - camera.x, this.bounds.y - camera.y, this.bounds.w, this.bounds.h);
    }
}
export const entities = [];
export default { Entity, entities };
