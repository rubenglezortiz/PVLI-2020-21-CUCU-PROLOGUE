import { cst } from "./cst.js";
import Pigmalion from "../gameobject/pigmalion.js";

export default class Sala16 extends Phaser.Scene {
  constructor() {
    super({ key: cst.SCENES.SALA16 });
  }

  init(datos) {
    this.posx = datos.posx;
    this.posy = datos.posy;
  }

  create() {
    //this.add.text(10, 10, "¡Hola, mundodasddsasafda!", { fontColor: 0xffff00 });
    this.add.image(700, 400, "background");
    this.player = new Pigmalion(this, this.posx, this.posy, "pigmalion");
    this.lives = 10;
  }

  update(time, delta) {
    if (this.player.x < 0) {
      this.player.x = 1400 - 1;
      this.scene.start(cst.SCENES.SALA17, {
        posx: this.player.x,
        posy: this.player.y,
      });
    }
    if (this.player.x > 1400) {
      //Hay que meter la zona de DonLindo
    }
    if (this.player.y < 0) {
      this.player.y = 800 - 1;
      this.scene.start(cst.SCENES.SALA15, {
        posx: this.player.x,
        posy: this.player.y,
      });
    }
    if (this.player.y > 800) {
      //Nada hacia abajo de la sala 1.6
    }
  }
}
