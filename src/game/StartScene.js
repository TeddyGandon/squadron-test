import Phaser from 'phaser';

const SELECTED_COLOR = 0x2563eb;
const DEFAULT_COLOR = 0x1f2937;

export default class StartScene extends Phaser.Scene {
  constructor() {
    super('StartScene');
  }

  create() {
    this.add.rectangle(512, 190, 320, 120, 0x1f2937).setStrokeStyle(3, 0x9ca3af);
    this.add
      .text(512, 190, 'LOGO', {
        color: '#f9fafb',
        fontFamily: 'system-ui, sans-serif',
        fontSize: '36px',
        fontStyle: 'bold',
      })
      .setOrigin(0.5);

    this.buttons = ['New game', 'Continue'].map((label, index) => {
      const y = 390 + index * 100;
      const background = this.add
        .rectangle(512, y, 300, 68, DEFAULT_COLOR)
        .setStrokeStyle(2, 0x9ca3af)
        .setInteractive({ useHandCursor: true });

      this.add
        .text(512, y, label, {
          color: '#f9fafb',
          fontFamily: 'system-ui, sans-serif',
          fontSize: '26px',
        })
        .setOrigin(0.5);

      background.on('pointerover', () => this.selectButton(index));
      background.on('pointerdown', () => this.selectButton(index));

      return background;
    });

    this.selectedButton = 0;
    this.updateButtonStyles();
    this.input.keyboard.on('keydown-UP', () => this.selectButton(this.selectedButton - 1));
    this.input.keyboard.on('keydown-DOWN', () => this.selectButton(this.selectedButton + 1));
  }

  selectButton(index) {
    this.selectedButton = (index + this.buttons.length) % this.buttons.length;
    this.updateButtonStyles();
  }

  updateButtonStyles() {
    this.buttons.forEach((button, index) => {
      button.setFillStyle(index === this.selectedButton ? SELECTED_COLOR : DEFAULT_COLOR);
      button.setStrokeStyle(2, index === this.selectedButton ? 0xf9fafb : 0x9ca3af);
    });
  }
}
