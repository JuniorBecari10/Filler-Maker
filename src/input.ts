const keysPressed: Set<string> = new Set();

document.addEventListener("keydown", (e) => {
  keysPressed.add(e.key);
});

document.addEventListener("keyup", (e) => {
  keysPressed.delete(e.key);
});

function isKeyPressed(key: string): boolean {
  return keysPressed.has(key);
}
