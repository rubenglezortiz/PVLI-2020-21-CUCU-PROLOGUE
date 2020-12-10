import { cst } from "./cst.js";
import Pigmalion from "../gameobject/pigmalion.js";

export default class Sala17 extends Phaser.Scene {
  constructor() {
    super({ key: cst.SCENES.SALA17 });
  }

  init(datos) {
    this.posx = datos.posx;
    this.posy = datos.posy;
  }

  create() {
    this.add.image(700, 400, "background");
    this.player = new Pigmalion(this, this.posx, this.posy, "pigmalion");
    this.lives = 10;
  }

  update(time, delta) {
    if (this.player.x < 0) {
      //La sala 1.7 no tiene movieminet a la iezquierda
    }
    if (this.player.x > 1400) {
      this.player.x = 1;
      this.scene.start(cst.SCENES.SALA16, {
        posx: this.player.x,
        posy: this.player.y,
      });
    }
    if (this.player.y < 0) {
      //La sala 1.7 no tiene movieminet abajo
    }
    if (this.player.y > 800) {
      //La sala 1.7 no tiene movieminet arriba
    }
  }
}
