import { cst } from "../cst.js";
import Explosion from "../explosion.js";
import Pigmalion from "../gameobject/pigmalion.js";
import CucuAttack from "../cucuAttack.js";

export default class Sala12 extends Phaser.Scene {
  constructor() {
    super({ key: cst.SCENES.SALA12 });
  }

  init(datos) {
    this.posx = datos.posx;
    this.posy = datos.posy;
  }


  create() {
    //this.add.text(10, 10, "¡Hola, mundodasddsasafda!", { fontColor: 0xffff00 });
    let { width, height } = this.sys.game.canvas;
    let edificio = this.physics.add.sprite(0, 175, "objetovacio");
    this.add.image(700, 400, "background");
    this.player = new Pigmalion(this, this.posx, this.posy, "pigmalion");
    this.player.create();
    this.lives = 10;
  }

  update(time, delta) {
    this.player.update();
    if (this.player.x < 0) {
      //La sala 2 no tiene movieminet a la iezquierda
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
