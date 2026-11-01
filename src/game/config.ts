import Phaser from 'phaser'
import { MainScene } from './MainScene'
import { GAME_HEIGHT, GAME_WIDTH } from './dimensions'

export { GAME_HEIGHT, GAME_WIDTH } from './dimensions'

export function createGameConfig(parent: HTMLElement): Phaser.Types.Core.GameConfig {
  return {
    type: Phaser.AUTO,
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    parent,
    backgroundColor: '#0b1020',
    scene: [MainScene],
    scale: {
      mode: Phaser.Scale.NONE,
      width: GAME_WIDTH,
      height: GAME_HEIGHT,
    },
  }
}
