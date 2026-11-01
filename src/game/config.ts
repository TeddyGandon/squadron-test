import Phaser from 'phaser';
import { MainScene } from './scenes/MainScene';
import { GAME_HEIGHT, GAME_WIDTH } from './dimensions';

export { GAME_HEIGHT, GAME_WIDTH } from './dimensions';

export function createGameConfig(parent: HTMLElement): Phaser.Types.Core.GameConfig {
  return {
    type: Phaser.AUTO,
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    parent,
    backgroundColor: '#101c2c',
    scene: [MainScene],
    scale: {
      mode: Phaser.Scale.NONE,
      autoCenter: Phaser.Scale.NO_CENTER,
    },
  };
}
