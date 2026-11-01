import Phaser from "phaser";
import { GAME_HEIGHT, GAME_WIDTH } from "./constants.js";

class StartScene extends Phaser.Scene {
  constructor() {
    super("start");
  }

  create() {
    this.add
      .text(GAME_WIDTH / 2, GAME_HEIGHT / 2, "SQUADRON\nYour game starts here", {
        align: "center",
        color: "#f4f7f9",
        fontFamily: "Arial, sans-serif",
        fontSize: "32px",
        lineSpacing: 12,
      })
      .setOrigin(0.5);
  }
}

export function createGame(parent) {
  return new Phaser.Game({
    type: Phaser.AUTO,
    parent,
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    backgroundColor: "#182b3a",
    scale: {
      mode: Phaser.Scale.NONE,
      width: GAME_WIDTH,
      height: GAME_HEIGHT,
    },
    scene: [StartScene],
  });
}
