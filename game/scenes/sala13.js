import { cst } from "./cst.js";
import Pigmalion from "../gameobject/pigmalion.js";

export default class Sala13 extends Phaser.Scene {
  constructor() {
    super({ key: cst.SCENES.SALA13 });
  }

  init(datos) {
    this.posx = datos.posx;
    this.posy = datos.posy;
    this.lives=datos.lives;
  }

  create() {
    this.add.image(700, 400, "background");
    this.player = new Pigmalion(this, this.posx, this.posy, this.lives,"pigmalion");
    this.lives = 10;
    this.flash = 0;
  }

  update(time, delta) {
    if (this.player.x < 0) {
      //la sala 3 no tiene nada a la inquierda
    }
    if (this.player.x > 1400) {
      //la sala 1.3 no tiene nada a la derecha
    }
    if (this.player.y < 0) {
      this.player.y = 800 - 1;
      this.scene.start(cst.SCENES.SALA14, {
        posx: this.player.x,
        posy: this.player.y,
        lives: this.player.lives,
      });
    }
    if (this.player.y > 800) {
      this.player.y = 1;
      this.scene.start(cst.SCENES.SALA11, {
        posx: this.player.x,
        posy: this.player.y,
        lives: this.player.lives,
      });
    }
  }
}
