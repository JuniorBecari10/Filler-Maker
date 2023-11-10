export const keysPressed: Set<string> = new Set();
export const mouse = {
  pos: {
    x: 0,
    y: 0,
  },

  leftPressed: false,
  rightPressed: false
};

document.addEventListener("keydown", (e) => {
  keysPressed.add(e.key);
});

document.addEventListener("keyup", (e) => {
  keysPressed.delete(e.key);
});

// ---

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

document.addEventListener("mousedown", (e) => {
  if (e.button == 0) mouse.leftPressed = true;
  else if (e.button == 2) mouse.rightPressed = true;
});

document.addEventListener("mouseup", (e) => {
  if (e.button == 0) mouse.leftPressed = false;
  else if (e.button == 2) mouse.rightPressed = false;
});

document.addEventListener("mousemove", (e) => {
  mouse.pos.x = e.clientX;
  mouse.pos.y = e.clientY;
});

export function isKeyPressed(key: string): boolean {
  return keysPressed.has(key);
}
