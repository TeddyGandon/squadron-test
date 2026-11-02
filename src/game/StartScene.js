import Phaser from 'phaser';

export default class StartScene extends Phaser.Scene {
  constructor() {
    super('StartScene');
  }

  create() {
    this.add
      .text(512, 356, 'Your game starts here', {
        color: '#f9fafb',
        fontFamily: 'system-ui, sans-serif',
        fontSize: '32px',
      })
      .setOrigin(0.5);

    this.add
      .text(512, 408, 'Build your first scene in src/game/StartScene.js', {
        color: '#9ca3af',
        fontFamily: 'system-ui, sans-serif',
        fontSize: '18px',
      })
      .setOrigin(0.5);
  }
}
