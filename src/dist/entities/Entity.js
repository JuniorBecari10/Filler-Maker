export class Entity {
    constructor(bounds, sprite) {
        this.bounds = bounds;
        this.sprite = sprite;
    }
    tick() { }
    render(g) {
        g.ctx.drawImage(this.sprite, this.bounds.x, this.bounds.y, this.bounds.w, this.bounds.h);
    }
}
export const entities = [];
export default { Entity, entities };
