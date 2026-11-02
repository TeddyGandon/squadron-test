import Phaser from 'phaser';

const GAME_WIDTH = 1024;
const GAME_HEIGHT = 768;

class BootScene extends Phaser.Scene {
  constructor() {
    super('boot');
  }

  create() {
    this.cameras.main.setBackgroundColor('#101522');

    this.add
      .text(GAME_WIDTH / 2, GAME_HEIGHT / 2 - 28, 'Squadron', {
        color: '#f5f7ff',
        fontFamily: 'Arial, sans-serif',
        fontSize: '56px',
        fontStyle: 'bold',
      })
      .setOrigin(0.5);

    this.add
      .text(GAME_WIDTH / 2, GAME_HEIGHT / 2 + 38, 'Your game starts here', {
        color: '#aab4ca',
        fontFamily: 'Arial, sans-serif',
        fontSize: '22px',
      })
      .setOrigin(0.5);
  }
}

export function createGame(parent) {
  return new Phaser.Game({
    type: Phaser.AUTO,
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    parent,
    backgroundColor: '#101522',
    scale: {
      mode: Phaser.Scale.NONE,
      width: GAME_WIDTH,
      height: GAME_HEIGHT,
    },
    scene: [BootScene],
  });
}
