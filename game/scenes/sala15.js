import { cst } from "./cst.js";
import Pigmalion from "../gameobject/pigmalion.js";

export default class Sala15 extends Phaser.Scene {
  constructor() {
    super({ key: cst.SCENES.SALA15 });
  }

  init(datos) {
    this.posx = datos.posx;
    this.posy = datos.posy;
    this.lives=datos.lives
  }

  create() {
    this.add.image(700, 400, "tablones");
    this.physics.add.image(700,400,"cortinas");
    this.tiendadisfraces = this.physics.add.sprite(1000,500,"tiendadisfraces").setScale(1.1);
    this.tiendadisfracesE =  this.add.image(this.tiendadisfraces.x, this.tiendadisfraces.y -  this.tiendadisfraces.height, "teclaE");
    this.player = new Pigmalion(this, this.posx, this.posy,this.lives, "pigmalion");
    this.add.image(700,400,"telon");
    this.lives = 10;
  }

  update(time, delta) {


    if(this.physics.overlap(this.player, this.tiendadisfraces)) {
      this.tiendadisfracesE.visible = true;
    }
    else{
      this.tiendadisfracesE.visible = false;
    }

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
        lives: this.player.lives,
      });
    }
    if (this.player.y > 800) {
      this.player.y = 1;
      this.scene.start(cst.SCENES.SALA16, {
        posx: this.player.x,
        posy: this.player.y,
        lives: this.player.lives,
      });
    }
  }
}
