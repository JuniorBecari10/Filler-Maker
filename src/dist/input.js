"use strict";
const keysPressed = new Set();
document.addEventListener("keydown", (e) => {
    keysPressed.add(e.key);
});
document.addEventListener("keyup", (e) => {
    keysPressed.delete(e.key);
});
function isKeyPressed(key) {
    return keysPressed.has(key);
}
