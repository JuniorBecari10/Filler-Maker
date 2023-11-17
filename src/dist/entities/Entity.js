import { camera } from "../main.js";
import { TILE_SIZE, Tile } from "../tiles/Tile.js";
export class Entity {
    constructor(bounds, sprite) {
        this.bounds = bounds;
        this.sprite = sprite;
    }
    collides(other) {
        if (other instanceof Entity) {
            let e = other;
            return collide(this.bounds, e.bounds);
        }
        else if (other instanceof Tile) {
            let t = other;
            return collide(this.bounds, pointToRectangle(t.realPos(), TILE_SIZE, TILE_SIZE));
        }
        return false;
    }
    tick() { }
    render(g) {
        g.ctx.drawImage(this.sprite, this.bounds.x - camera.x, this.bounds.y - camera.y, this.bounds.w, this.bounds.h);
    }
}
export const entities = [];
export default { Entity, entities };
