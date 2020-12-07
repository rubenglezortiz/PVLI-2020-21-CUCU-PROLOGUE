import { cst } from "../cst.js";
import Pigmalion from "../gameobject/pigmalion.js";

export default class Sala14 extends Phaser.Scene {
  constructor() {
    super({ key: cst.SCENES.SALA14 });
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

    this.physics.add.collider(
      this.player,
      this.monecoAttacks,
      this.onCollision(this.player, this.monecoAttacks)
    );
  }

  update(time, delta) {
    this.player.update();

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
      });
    }
  }
}
