import Phaser from "phaser";

export default class MainScene extends Phaser.Scene {
  constructor() {
    super("main");
  }

  create() {
    const { width, height } = this.scale;

    this.add.rectangle(width / 2, height / 2, width, height, 0x111827);
    this.add.rectangle(width / 2, height * 0.72, width, height * 0.28, 0x1f2937);
    this.add
      .text(width / 2, height * 0.4, "SQUADRON", {
        color: "#f9fafb",
        fontFamily: "Arial, sans-serif",
        fontSize: "64px",
        fontStyle: "bold",
      })
      .setOrigin(0.5);
    this.add
      .text(width / 2, height * 0.49, "Your game starts here", {
        color: "#9ca3af",
        fontFamily: "Arial, sans-serif",
        fontSize: "24px",
      })
      .setOrigin(0.5);
  }
}
