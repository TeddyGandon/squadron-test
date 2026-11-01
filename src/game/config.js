import Phaser from 'phaser'
import { GAME_HEIGHT, GAME_WIDTH } from './constants.js'
import { StartScene } from './scenes/StartScene.js'

export function createGameConfig(parent) {
  return {
    type: Phaser.AUTO,
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    parent,
    backgroundColor: '#090e1b',
    scene: [StartScene],
    scale: {
      mode: Phaser.Scale.NONE,
      width: GAME_WIDTH,
      height: GAME_HEIGHT,
      autoCenter: Phaser.Scale.NO_CENTER,
    },
  }
}
