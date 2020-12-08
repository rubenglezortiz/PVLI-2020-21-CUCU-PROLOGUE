import { cst } from "./cst.js";
import Pigmalion from "../gameobject/pigmalion.js";

export default class Sala15 extends Phaser.Scene {
  constructor() {
    super({ key: cst.SCENES.SALA15 });
  }

  init(datos) {
    this.posx = datos.posx;
    this.posy = datos.posy;
  }

  create() {
    this.add.image(700, 400, "background");
    this.player = new Pigmalion(this, this.posx, this.posy, "pigmalion");
    this.player.create();
    this.lives = 10;
  }

  update(time, delta) {
    this.player.update();

    if (this.player.x < 0) {
      //la sala 1.5 no tiene nada a la inquierda
    }
    if (this.player.x > 1400) {
      //la sala 1.5 no tiene nada a la derecha
    }
    if (this.player.y < 0) {
      this.player.y = 800 - 1;
      this.scene.start(cst.SCENES.SALA11, {
        posx: this.player.x,
        posy: this.player.y,
      });
    }
    if (this.player.y > 800) {
      this.player.y = 1;
      this.scene.start(cst.SCENES.SALA16, {
        posx: this.player.x,
        posy: this.player.y,
      });
    }
  }
}
