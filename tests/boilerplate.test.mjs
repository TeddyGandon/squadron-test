import assert from "node:assert/strict";
import { existsSync, readFileSync, statSync } from "node:fs";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const readSource = (path) => readFileSync(resolve(root, path), "utf8");

test("the app is bootstrapped with Vue", () => {
  const entry = readSource("src/main.ts");

  assert.match(entry, /from ["']vue["']/);
  assert.match(entry, /createApp\(App\)\.mount\(/);
});

test("the Vue app creates a Phaser game", () => {
  const app = readSource("src/App.vue");

  assert.match(app, /from ["']vue["']/);
  assert.match(app, /from ["']phaser["']/);
  assert.match(app, /new Phaser\.Game\(/);
});

test("the Phaser game is fixed at 1024x768 and centered", () => {
  const config = readSource("src/game/config.ts");

  assert.match(config, /GAME_WIDTH\s*=\s*1024/);
  assert.match(config, /GAME_HEIGHT\s*=\s*768/);
  assert.match(config, /mode:\s*Phaser\.Scale\.NONE/);
  assert.match(config, /autoCenter:\s*Phaser\.Scale\.CENTER_BOTH/);
});

test("a docs directory is initialized", () => {
  const docsPath = resolve(root, "docs");

  assert.ok(existsSync(docsPath), "expected docs/ to exist");
  assert.ok(statSync(docsPath).isDirectory(), "expected docs/ to be a directory");
});
