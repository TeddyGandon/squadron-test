import Phaser from 'phaser'
import { GAME_HEIGHT, GAME_WIDTH } from '../constants.js'

export class StartScene extends Phaser.Scene {
  constructor() {
    super('StartScene')
  }

  create() {
    this.add
      .text(GAME_WIDTH / 2, GAME_HEIGHT / 2 - 36, 'SQUADRON', {
        color: '#f5f7ff',
        fontFamily: 'Arial, sans-serif',
        fontSize: '56px',
        fontStyle: 'bold',
        letterSpacing: 8,
      })
      .setOrigin(0.5)

    this.add
      .text(GAME_WIDTH / 2, GAME_HEIGHT / 2 + 34, 'Your game starts here', {
        color: '#aab4ce',
        fontFamily: 'Arial, sans-serif',
        fontSize: '22px',
      })
      .setOrigin(0.5)
  }
}
