import Sala0 from "../Scenes/sala0.js";
import { sala1 } from "../Scenes/sala1.js";
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
    arcade: { debug: false },
  },
};
new Phaser.Game(config);
