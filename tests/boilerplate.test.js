import assert from 'node:assert/strict'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import test from 'node:test'

test('the game uses Phaser at a fixed 1024 by 768 size', () => {
  const config = readFileSync(new URL('../src/game/config.js', import.meta.url), 'utf8')
  const constants = readFileSync(new URL('../src/game/constants.js', import.meta.url), 'utf8')

  assert.match(config, /import Phaser from ['"]phaser['"]/)
  assert.match(config, /type:\s*Phaser\.AUTO/)
  assert.match(constants, /GAME_WIDTH\s*=\s*1024/)
  assert.match(constants, /GAME_HEIGHT\s*=\s*768/)
  assert.match(config, /mode:\s*Phaser\.Scale\.NONE/)
  assert.match(config, /width:\s*GAME_WIDTH/)
  assert.match(config, /height:\s*GAME_HEIGHT/)
})

test('the game is centered on the page without resizing its host', () => {
  const styles = readFileSync(new URL('../src/style.css', import.meta.url), 'utf8')

  assert.match(styles, /\.page\s*\{[^}]*place-items:\s*center/s)
  assert.match(styles, /\.game-host\s*\{[^}]*width:\s*1024px[^}]*height:\s*768px/s)
})

test('the browser entry point mounts the game through Vue', () => {
  const app = readFileSync(new URL('../src/App.vue', import.meta.url), 'utf8')
  const entry = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8')

  assert.match(app, /from ['"]vue['"]/)
  assert.match(app, /new Phaser\.Game/)
  assert.match(entry, /createApp\(App\)\.mount/)
})

test('the docs directory is initialized', () => {
  const docsPath = new URL('../docs/', import.meta.url)

  assert.equal(statSync(docsPath).isDirectory(), true)
  assert.ok(readdirSync(docsPath).length > 0)
})
