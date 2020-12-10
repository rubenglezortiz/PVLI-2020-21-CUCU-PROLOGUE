import { cst } from "./cst.js";
import Pigmalion from "../gameobject/pigmalion.js";
import PomponinaAttack from "../monecoAttacks/pomponinaAttack.js";

export default class Sala0 extends Phaser.Scene {
  constructor() {
    super({ key: cst.SCENES.SALA0 });
  }

  init(datos) {
    this.posx = datos.posx;
    this.posy = datos.posy;
  }
  create() {
    this.add.image(700, 400, "background");
    this.player = new Pigmalion(this, this.posx, this.posy, "pigmalion");
  }

  update(time, delta) {
    //-----CAMBIO SALAS-----
    if (this.player.x < 0) {
      this.player.x = 1400 - 1;
      this.scene.start(cst.SCENES.SALA11, {
        posx: this.player.x,
        posy: this.player.y,
      });
    }
    if (this.player.x > 1400) {
      // De momento en la sala 0 no hay cambio a la derecha
      // this.x = 1;
    }
    if (this.player.y < 0) {
      // De momento en la sala 0 no hay cambio arriba
      //this.player.y = 800 - 1;
    }
    if (this.player.y > 800) {
      // De momento en la sala 0 no hay cambio a la derecha
      //this.y = 1;
    }
  }
}
