import Phaser from "phaser";

export class BootScene extends Phaser.Scene {
  constructor() {
    super("BootScene");
  }

  create(): void {
    this.add
      .text(512, 350, "Squadron", {
        color: "#f9fafb",
        fontFamily: "Arial, sans-serif",
        fontSize: "48px",
      })
      .setOrigin(0.5);

    this.add
      .text(512, 410, "Your game starts here", {
        color: "#9ca3af",
        fontFamily: "Arial, sans-serif",
        fontSize: "20px",
      })
      .setOrigin(0.5);
  }
}
