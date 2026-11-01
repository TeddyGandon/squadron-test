import Phaser from 'phaser'

export class MainScene extends Phaser.Scene {
  constructor() {
    super('main')
  }

  create(): void {
    this.add
      .text(512, 340, 'SQUADRON', {
        color: '#f4f7ff',
        fontFamily: 'Arial, sans-serif',
        fontSize: '56px',
        fontStyle: 'bold',
      })
      .setOrigin(0.5)

    this.add
      .text(512, 410, 'Your game starts here', {
        color: '#9eaccb',
        fontFamily: 'Arial, sans-serif',
        fontSize: '22px',
      })
      .setOrigin(0.5)
  }
}
