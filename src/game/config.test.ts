import { describe, expect, it } from 'vitest';
import { GAME_HEIGHT, GAME_WIDTH } from './dimensions';

describe('game dimensions', () => {
  it('uses the fixed 1024 by 768 game size', () => {
    expect(GAME_WIDTH).toBe(1024);
    expect(GAME_HEIGHT).toBe(768);
  });
});
