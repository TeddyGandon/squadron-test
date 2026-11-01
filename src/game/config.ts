import Phaser from "phaser";
import { BootScene } from "./scenes/BootScene";

export const GAME_WIDTH = 1024;
export const GAME_HEIGHT = 768;

export const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  backgroundColor: "#111827",
  scale: {
    mode: Phaser.Scale.NONE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [BootScene],
};
