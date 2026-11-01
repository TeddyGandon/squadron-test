import { describe, expect, it } from 'vitest'
import { GAME_HEIGHT, GAME_WIDTH } from './dimensions'

describe('game dimensions', () => {
  it('keeps the game window fixed at 1024 by 768 pixels', () => {
    expect(GAME_WIDTH).toBe(1024)
    expect(GAME_HEIGHT).toBe(768)
  })
})
