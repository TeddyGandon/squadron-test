import Phaser from 'phaser';

export class MainScene extends Phaser.Scene {
  constructor() {
    super('main');
  }

  create(): void {
    this.add
      .text(512, 340, 'Squadron', {
        color: '#f5f7fa',
        fontFamily: 'system-ui, sans-serif',
        fontSize: '56px',
        fontStyle: 'bold',
      })
      .setOrigin(0.5);

    this.add
      .text(512, 410, 'Your game starts here', {
        color: '#a9b8cb',
        fontFamily: 'system-ui, sans-serif',
        fontSize: '24px',
      })
      .setOrigin(0.5);
  }
}
