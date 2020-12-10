import { cst } from "./cst.js";
import Pigmalion from "../gameobject/pigmalion.js";

export default class Sala12 extends Phaser.Scene {
  constructor() {
    super({ key: cst.SCENES.SALA12 });
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
      //La sala 2 no tiene moviemiento a la iezquierda
    }
    if (this.player.x > 1400) {
      this.player.x = 1;
      this.scene.start(cst.SCENES.SALA11, {
        posx: this.player.x,
        posy: this.player.y,
      });
    }
    if (this.player.y < 0) {
      //La sala 2 no tiene movieminet abajo
    }
    if (this.player.y > 800) {
      //La sala 2 no tiene movieminet arriba
    }
  }
}
