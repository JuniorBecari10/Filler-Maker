import { isKeyPressed } from "../input.js";
import { MAP_HEIGHT, MAP_WIDTH, TILE_SIZE } from "../tiles/Tile.js";
import { Entity } from "./Entity.js";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
    Direction[Direction["Idle"] = 4] = "Idle";
})(Direction || (Direction = {}));
export class Player extends Entity {
    constructor(bounds, sprite) {
        super(bounds, sprite);
        this.direction = Direction.Idle;
    }
    tick() {
        if (this.direction === Direction.Idle) {
            if (isKeyPressed("arrowup"))
                this.direction = Direction.Up;
            else if (isKeyPressed("arrowdown"))
                this.direction = Direction.Down;
            else if (isKeyPressed("arrowleft"))
                this.direction = Direction.Left;
            else if (isKeyPressed("arrowright"))
                this.direction = Direction.Right;
        }
        else {
            let dx = 0;
            let dy = 0;
            switch (this.direction) {
                case Direction.Up:
                    dx = 0;
                    dy = -1;
                    break;
                case Direction.Down:
                    dx = 0;
                    dy = 1;
                    break;
                case Direction.Left:
                    dx = -1;
                    dy = 0;
                    break;
                case Direction.Right:
                    dx = 1;
                    dy = 0;
                    break;
            }
            if (!isOutOfBounds(this.bounds, this.direction)) {
                this.bounds.x += dx * PLAYER_SPEED;
                this.bounds.y += dy * PLAYER_SPEED;
            }
            else {
                this.bounds.x = Math.round(this.bounds.x / TILE_SIZE) * TILE_SIZE;
                this.bounds.y = Math.round(this.bounds.y / TILE_SIZE) * TILE_SIZE;
                this.direction = Direction.Idle;
            }
        }
    }
}
function isOutOfBounds(b, d) {
    return b.x - (d === Direction.Left ? PLAYER_SPEED : 0) < 0 ||
        b.x + b.w + (d === Direction.Right ? PLAYER_SPEED : 0) > MAP_WIDTH * TILE_SIZE ||
        b.y - (d === Direction.Up ? PLAYER_SPEED : 0) < 0 ||
        b.y + b.h + (d === Direction.Down ? PLAYER_SPEED : 0) > MAP_HEIGHT * TILE_SIZE;
}
function isFree(nextX, nextY) {
    return !(tiles[()]);
}
const PLAYER_SPEED = 60;
export default { Player };
