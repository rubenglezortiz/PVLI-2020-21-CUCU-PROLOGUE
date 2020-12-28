import MenuCombate from "../scenes/menuCombate.js";
import Sala0 from "../scenes/sala0.js";
import Sala11 from "../scenes/sala11.js";
import Sala12 from "../scenes/sala12.js";
import Sala13 from "../scenes/sala13.js";
import Sala14 from "../scenes/sala14.js";
import Sala15 from "../scenes/sala15.js";
import Sala16 from "../scenes/sala16.js";
import Sala17 from "../scenes/sala17.js";
import SalaBase from "../scenes/sala_base.js";
import SalaHija from "../scenes/sala_hija.js";
import Sala18CUCU from "../scenes/sala18cucu.js";
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
  scene: [Bootloader,MenuCombate,SalaHija,  SalaBase, Sala18CUCU,Sala0,Sala11,Sala12,Sala13,Sala14,Sala15,Sala16,Sala17,],
  physics: {
    default: "arcade",
    arcade: { debug: false },
  },
};
new Phaser.Game(config);
