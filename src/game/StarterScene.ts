import Phaser from "phaser";

export default class StarterScene extends Phaser.Scene {
  constructor() {
    super("starter");
  }

  create(): void {
    this.add
      .text(512, 384, "Squadron", {
        color: "#f9fafb",
        fontFamily: "system-ui, sans-serif",
        fontSize: "48px",
      })
      .setOrigin(0.5);
  }
}
