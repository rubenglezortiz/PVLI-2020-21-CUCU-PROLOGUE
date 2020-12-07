import { cst } from "../cst.js";
import Pigmalion from "../gameobject/pigmalion.js";
export default class Sala11 extends Phaser.Scene {
  constructor() {
    super({ key: cst.SCENES.SALA11 });
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
    this.flash = 0;

    this.monecoAttacks = this.physics.add.group();
    this.r = this.input.keyboard.addKey("R");

    this.physics.add.collider(
      this.player,
      this.monecoAttacks,
    );
  }

  update(time, delta) {
    this.player.update();
    if (this.flash >= 1) this.flash--;

    if (this.player.x < 0) {
      this.player.x = 1400 - 1;
      this.scene.start(cst.SCENES.SALA12, {
        posx: this.player.x,
        posy: this.player.y,
      });
    }
    if (this.player.x > 1400) {
      this.player.x = 1;
      this.scene.start(cst.SCENES.SALA0, {
        posx: this.player.x,
        posy: this.player.y,
      });
    }
    if (this.player.y < 0) {
      this.player.y = 800 - 1;
      this.scene.start(cst.SCENES.SALA13, {
        posx: this.player.x,
        posy: this.player.y,
      });
    }
    if (this.player.y > 800) {
      this.player.y = 1;
      this.scene.start(cst.SCENES.SALA15, {
        posx: this.player.x,
        posy: this.player.y,
      });
    }
  }
}
