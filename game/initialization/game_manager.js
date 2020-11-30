import Sala0 from "../scenes/sala0.js";
import { sala1 } from "../scenes/sala1.js";
import Bootloader from "./bootloader.js";

//import cst from "./cst.js";
var config = {
  type: Phaser.AUTO,

  width: 1400,
  height: 800,
  pixelArt: true,
  input: {
    gamepad: true,
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [Bootloader, Sala0, sala1],
  physics: {
    default: "arcade",
    arcade: { debug: true },
  },
};
new Phaser.Game(config);
