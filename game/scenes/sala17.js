import { cst } from "./cst.js";
import Pigmalion from "../gameobject/pigmalion.js";

export default class Sala17 extends Phaser.Scene {
  constructor() {
    super({ key: cst.SCENES.SALA17 });
  }

  init(datos) {
    this.posx = datos.posx;
    this.posy = datos.posy;
    this.lives=datos.lives
  }

  create() {
    this.add.image(700, 400, "tablones");
    this.physics.add.image(700,400,"cortinas");
    this.cucu = this.physics.add.sprite(300,400,"bebe").setScale(1);
    this.cucuE =  this.add.image(this.cucu.x, this.cucu.y -  this.cucu.height, "teclaE");
    this.player = new Pigmalion(this, this.posx, this.posy,this.lives, "pigmalion");
    this.add.image(700,400,"telon");
    this.lives = 10;

    this.e = this.input.keyboard.addKey("E");
  }

  update(time, delta) {
    if(this.physics.overlap(this.player, this.cucu)) {
      this.cucuE.visible = true;
      
      if (this.e.isDown) {
        this.scene.start("SALA18CUCU", {
          posx: this.player.x,
          posy: this.player.y,
          lives: this.player.lives,
        });
      }


    }
    else{
      this.cucuE.visible = false;
    }



    if (this.player.x < 0) {
      //La sala 1.7 no tiene movieminet a la iezquierda
    }
    if (this.player.x > 1400) {
      this.player.x = 1;
      this.scene.start(cst.SCENES.SALA16, {
        posx: this.player.x,
        posy: this.player.y,
        lives: this.player.lives,
      });
    }
    if (this.player.y < 0) {
      //La sala 1.7 no tiene movieminet abajo
    }
    if (this.player.y > 800) {
      //La sala 1.7 no tiene movieminet arriba
    }
  }
}
