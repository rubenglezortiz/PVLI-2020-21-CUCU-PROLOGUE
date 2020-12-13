import { cst } from "./cst.js";
import Pigmalion from "../gameobject/pigmalion.js";
import GameObject from "../gameobject/gameObject.js";
import Explosion from "../monecoAttacks/explosion.js";

export default class Sala0 extends Phaser.Scene {
  constructor() {
    super({ key: cst.SCENES.SALA0 });
  }

  init(datos) {
    console.log("creada sala 0");
    this.posx = datos.posx;
    this.posy = datos.posy;
    this.lives = datos.lives;
  }
  create() {
    this.add.image(700, 400, "tablones");
    this.physics.add.image(700,400,"cortinas");
    this.player = new Pigmalion(this, this.posx, this.posy,this.lives, "pigmalion");
   

    //this.caballo = new GameObject(this, 700,350,"caballo", this.player);
    
    this.add.image(700,400,"telon");
   
      //this.floor = new Phaser.Geom.Rectangle(274, 400, 550, 5);

    this.lives = 10;
    this.monecoAttacks = this.physics.add.group();
    this.r = this.input.keyboard.addKey("R");


/*
this.trigger = this.add.zone(700, 400);
this.trigger.setSize(200, 200);
this.physics.world.enable(this.trigger);
this.trigger.body.setAllowGravity(false);
this.trigger.body.moves = false;
*/
  }

  update(time, delta) {

   
    //-----CAMBIO SALAS-----
    if (this.player.x < 0) {
      this.player.x = 1400 - 1;
      this.scene.start(cst.SCENES.SALA11, {
        posx: this.player.x,
        posy: this.player.y,
      });
    }
    if (this.player.x > 1400) {
      // De momento en la sala 0 no hay cambio a la derecha
      // this.x = 1;
    }
    if (this.player.y < 0) {
      // De momento en la sala 0 no hay cambio arriba
      //this.player.y = 800 - 1;
    }
    if (this.player.y > 800) {
      // De momento en la sala 0 no hay cambio a la derecha
      //this.y = 1;
    }

    if (this.r.isDown) {
      this.expl = new Explosion(
        {scene: this,
        x: 300,
        y: 300,
        type: "pigmalion"});
        delay
       this.monecoAttacks.add(this.expl);
    }
  }
}
