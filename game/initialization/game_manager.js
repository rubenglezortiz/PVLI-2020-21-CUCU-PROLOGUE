import MenuCombate from "../scenes/menuCombate.js";


import Sala0 from "../scenes/sala0.js";
import Sala11 from "../scenes/sala11.js";
import Sala12 from "../scenes/sala12.js";
import Sala13 from "../scenes/sala13.js";
import Sala14 from "../scenes/sala14.js";
import Sala15 from "../scenes/sala15.js";
import Sala16 from "../scenes/sala16.js";
import Sala17 from "../scenes/sala17.js";
import Sala18CUCU from "../scenes/sala18cucu.js";

import Sala28donlindo from "../scenes/sala28donlindo.js";

import Sala31 from "../scenes/sala31.js";
import Sala32 from "../scenes/sala32.js";
import Sala33 from "../scenes/sala33.js";
import Sala34 from "../scenes/sala34.js";
import Sala35 from "../scenes/sala35.js";
import Sala36 from "../scenes/sala36.js";
import Sala37 from "../scenes/sala37.js";
import Sala38pomponina from "../scenes/sala38pomponina.js";
import Dialogo from "../scenes/dialogo.js";
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
  scene: [
    Bootloader,
    Sala0,
    Sala11,
    Sala12,
    Sala13,
    Sala14,
    Sala15,
    Sala16,
    Sala17,
    Sala18CUCU,
    Sala28donlindo,
    Sala31,
    Sala32,
    Sala33,
    Sala34,
    Sala35,
    Sala36,
    Sala37,
    Sala38pomponina,
    MenuCombate,
    Dialogo,
  ],
  physics: {
    default: "arcade",
    arcade: { debug: false },
  },
};
new Phaser.Game(config);
