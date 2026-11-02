import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '../..');

async function readSource(path: string) {
  return readFile(resolve(projectRoot, path), 'utf8');
}

test('the application is mounted with Vue', async () => {
  const [main, app] = await Promise.all([
    readSource('src/main.js'),
    readSource('src/App.vue'),
  ]);

  assert.match(main, /from ['"]vue['"]/);
  assert.match(main, /createApp\(App\)\.mount\(/);
  assert.match(app, /from ['"]vue['"]/);
});

test('the game uses Phaser at a fixed 1024x768 size', async () => {
  const game = await readSource('src/game/createGame.js');

  assert.match(game, /from ['"]phaser['"]/);
  assert.match(game, /width:\s*GAME_WIDTH/);
  assert.match(game, /height:\s*GAME_HEIGHT/);
  assert.match(game, /const GAME_WIDTH = 1024/);
  assert.match(game, /const GAME_HEIGHT = 768/);
  assert.match(game, /mode:\s*Phaser\.Scale\.NONE/);
});

test('the game is centered without resizing its canvas', async () => {
  const styles = await readSource('src/style.css');

  assert.match(styles, /\.page\s*\{[^}]*place-items:\s*center/s);
  assert.match(styles, /\.game-container\s*\{[^}]*width:\s*1024px/s);
  assert.match(styles, /\.game-container\s*\{[^}]*height:\s*768px/s);
});

test('the docs directory contains initialized documentation', async () => {
  const entries = await readdir(resolve(projectRoot, 'docs'));

  assert.ok(entries.length > 0, 'docs/ should contain initialized documentation');
});
