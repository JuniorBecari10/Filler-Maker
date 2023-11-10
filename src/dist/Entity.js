export class Entity {
    constructor(bounds, sprite) {
        this.bounds = bounds;
        this.sprite = sprite;
    }
}
function readImage(id) {
    return document.getElementById(id);
}
export const entities = [];
export default { Entity, entities };
