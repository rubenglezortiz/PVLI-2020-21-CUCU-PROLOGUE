import { cst } from "./cst.js";
import Pigmalion from "../gameobject/pigmalion.js";

export default class Sala14 extends Phaser.Scene {
  constructor() {
    super({ key: cst.SCENES.SALA14 });
  }

  init(datos) {
    this.posx = datos.posx;
    this.posy = datos.posy;
    this.lives=datos.lives;
  }

  create() {
    this.add.image(700, 400, "tablones");
    this.physics.add.image(700,400,"cortinas");
    this.player = new Pigmalion(this, this.posx, this.posy,this.lives, "pigmalion");
    this.add.image(700,400,"telon");
    this.lives = 10;
  }

  update(time, delta) {
    if (this.player.x < 0) {
      //la sala 1.4 no tiene nada a la izquierda
    }
    if (this.player.x > 1400) {
      //aun no está hecha la parte de pomponina
      //this.player.x = 1;
      //this.scene.start(cst.SCENES.SALA34,  {posx : this.player.x, posy: this.player.y});
    }
    if (this.player.y < 0) {
      //En la 1.4 no hay nada hacia arriba
    }
    if (this.player.y > 800) {
      this.player.y = 1;
      this.scene.start(cst.SCENES.SALA13, {
        posx: this.player.x,
        posy: this.player.y,
        lives: this.player.lives,
      });
    }
  }
}
