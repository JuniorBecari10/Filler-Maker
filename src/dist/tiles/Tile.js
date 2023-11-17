export class Tile {
    constructor(pos, sprite, collidable) {
        this.pos = pos;
        this.sprite = sprite;
        this.collidable = collidable;
    }
    realPos() {
        return {
            x: this.pos.x * TILE_SIZE,
            y: this.pos.y * TILE_SIZE,
        };
    }
    tick() { }
    render(g) {
        g.ctx.drawImage(this.sprite, this.pos.x * TILE_SIZE, this.pos.y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
}
export class CollidableTile extends Tile {
    constructor(pos, sprite) {
        super(pos, sprite, true);
    }
}
export class NotCollidableTile extends Tile {
    constructor(pos, sprite) {
        super(pos, sprite, false);
    }
}
export function posToIndex(x, y, w) {
    return x + (y * w);
}
export function getTile(x, y) {
    let index = x + (y * MAP_WIDTH);
    if (index < 0 || index >= tiles.length)
        return null;
    return tiles[index];
}
export const TILE_SIZE = 32;
export const MAP_WIDTH = 20;
export const MAP_HEIGHT = 20;
export const tiles = new Array(MAP_WIDTH * MAP_HEIGHT);
export default { Tile, CollidableTile, NotCollidableTile, TILE_SIZE, MAP_WIDTH, MAP_HEIGHT, tiles, posToIndex, getTile };
