export class Tile {
    constructor(pos, sprite, collidable) {
        this.pos = pos;
        this.sprite = sprite;
        this.collidable = collidable;
    }
    tick() { }
    render(g) {
        g.ctx.drawImage(this.sprite, this.pos.x, this.pos.y, TILE_SIZE, TILE_SIZE);
    }
}
function getTile(x, y) {
    let index = x + (y * MAP_WIDTH);
    if (index < 0 || index >= tiles.length)
        return null;
    return tiles[index];
}
export const TILE_SIZE = 32;
export const MAP_WIDTH = 20;
export const MAP_HEIGHT = 20;
export const tiles = new Array(MAP_WIDTH * MAP_HEIGHT);
export default { Tile, TILE_SIZE, MAP_WIDTH, MAP_HEIGHT, tiles };
