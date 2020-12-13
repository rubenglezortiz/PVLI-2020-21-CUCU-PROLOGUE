import { cst } from "./cst.js";
import Pigmalion from "../gameobject/pigmalion.js";

export default class Sala12 extends Phaser.Scene {
  constructor() {
    super({ key: cst.SCENES.SALA12 });
  }

  init(datos) {
    this.posx = datos.posx;
    this.posy = datos.posy;
    this.lives=datos.lives
  }

  create() {
    this.add.image(700, 400, "tablones");
    this.physics.add.image(700,400,"cortinas");
    this.player = new Pigmalion(this, this.posx, this.posy,this.lives, "pigmalion");
    this.add.image(300,400,"mesa");
    this.bebe = this.physics.add.sprite(1000,300,"bebe").setScale(1);
    this.bebeE =  this.add.image(this.bebe.x, this.bebe.y -  this.bebe.height, "teclaE");
    this.add.image(700,400,"telon");
    
    this.lives = 10;
  }

  update(time, delta) {
    if(this.physics.overlap(this.player, this.bebe)) {
      this.bebeE.visible = true;
    }
    else{
      this.bebeE.visible = false;
    }


    if (this.player.x < 0) {
      //La sala 2 no tiene moviemiento a la iezquierda
    }
    if (this.player.x > 1400) {
      this.player.x = 1;
      this.scene.start(cst.SCENES.SALA11, {
        posx: this.player.x,
        posy: this.player.y,
        lives: this.player.lives,
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
