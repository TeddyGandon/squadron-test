import assert from 'node:assert/strict'
import test from 'node:test'
import { GAME_HEIGHT, GAME_WIDTH } from './constants.js'

test('the game uses a fixed 1024 by 768 logical size', () => {
  assert.equal(GAME_WIDTH, 1024)
  assert.equal(GAME_HEIGHT, 768)
})
