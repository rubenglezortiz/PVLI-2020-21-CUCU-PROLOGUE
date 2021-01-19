import MenuCombate from "../scenes/menuCombate.js";

import SalaInicial from "../scenes/sala_inicial.js";
import Sala0 from "../scenes/sala0.js";
import Sala0Urdemalas from "../scenes/sala0urdemalas.js";

import Sala11 from "../scenes/sala11.js";
import Sala12 from "../scenes/sala12.js";
import Sala13 from "../scenes/sala13.js";
import Sala14 from "../scenes/sala14.js";
import Sala15 from "../scenes/sala15.js";
import Sala16 from "../scenes/sala16.js";
import Sala17 from "../scenes/sala17.js";
import Sala18CUCU from "../scenes/sala18cucu.js";

import Sala21 from "../scenes/sala21.js";
import Sala22 from "../scenes/sala22.js";
import Sala23 from "../scenes/sala23.js";
import Sala24 from "../scenes/sala24.js";
import Sala25 from "../scenes/sala25.js";
import Sala26 from "../scenes/sala26.js";
import Sala27 from "../scenes/sala27.js";
import Sala28donlindo from "../scenes/sala28donlindo.js";

import Sala31 from "../scenes/sala31.js";
import Sala32 from "../scenes/sala32.js";
import Sala33 from "../scenes/sala33.js";
import Sala34 from "../scenes/sala34.js";
import Sala35 from "../scenes/sala35.js";
import Sala36 from "../scenes/sala36.js";
import Sala37 from "../scenes/sala37.js";
import Sala38pomponina from "../scenes/sala38pomponina.js";

import FinalNeutral from "../scenes/salaFinal.js";

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
    parent: 'GameContainer',
    max:{
      width: 1400,
      height: 800,
    }
  },
  scene: [
    Bootloader,
    SalaInicial,
    Sala0,
    Sala0Urdemalas,
    Sala11,
    Sala12,
    Sala13,
    Sala14,
    Sala15,
    Sala16,
    Sala17,
    Sala18CUCU,
    Sala21,
    Sala22,
    Sala23,
    Sala24,
    Sala25,
    Sala26,
    Sala27,
    Sala28donlindo,
    Sala31,
    Sala32,
    Sala33,
    Sala34,
    Sala35,
    Sala36,
    Sala37,
    Sala38pomponina,
    FinalNeutral,
    MenuCombate,
    Dialogo,
  ],
  physics: {
    default: "arcade",
    arcade: { debug: true },
  },
};


new Phaser.Game(config);
