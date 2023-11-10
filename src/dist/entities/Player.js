import { Entity } from "./Entity.js";
export class Player extends Entity {
    constructor(bounds, sprite) {
        super(bounds, sprite);
    }
    tick() {
    }
}
export default { Player };
