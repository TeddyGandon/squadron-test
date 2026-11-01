import Phaser from 'phaser';

export default class SquadronScene extends Phaser.Scene {
  constructor() {
    super('squadron');
  }

  create() {
    const { width, height } = this.scale;
    const stars = this.add.graphics();
    stars.fillStyle(0x9dc8ff, 0.8);

    for (let index = 0; index < 90; index += 1) {
      const x = Phaser.Math.Between(24, width - 24);
      const y = Phaser.Math.Between(24, height - 24);
      stars.fillCircle(x, y, Phaser.Math.Between(1, 2));
    }

    this.add
      .text(width / 2, height / 2 - 48, 'SQUADRON', {
        color: '#eaf3ff',
        fontFamily: 'Arial, sans-serif',
        fontSize: '56px',
        fontStyle: 'bold',
      })
      .setOrigin(0.5);

    this.add
      .text(width / 2, height / 2 + 20, 'Click anywhere to deploy your ship', {
        color: '#91a9c7',
        fontFamily: 'Arial, sans-serif',
        fontSize: '22px',
      })
      .setOrigin(0.5);

    const ship = this.add
      .triangle(width / 2, height / 2 + 130, 0, -22, 18, 18, -18, 18, 0x61d8bd)
      .setStrokeStyle(2, 0xeaf3ff);

    this.input.on('pointerdown', (pointer) => {
      this.tweens.add({
        targets: ship,
        x: pointer.worldX,
        y: pointer.worldY,
        duration: 350,
        ease: 'Sine.easeOut',
      });
    });
  }
}
