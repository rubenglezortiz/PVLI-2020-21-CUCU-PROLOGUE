import { cst } from "../cst.js";
import Explosion from "../explosion.js";
import Pigmalion from "../gameobject/pigmalion.js";
import CucuAttack from "../cucuAttack.js";


export default class Sala0 extends Phaser.Scene {
  constructor() {
    super({ key: cst.SCENES.SALA0  });
  }
  preload() {}
  init(datos){
    this.posx = datos.posx;
    this.posy = datos.posy;
  }
  create() {
    //this.add.text(10, 10, "¡Hola, mundodasddsasafda!", { fontColor: 0xffff00 });
    let { width, height } = this.sys.game.canvas;
    let edificio = this.physics.add.sprite(0, 175, "objetovacio");
    this.add.image(700, 400, "background");
    this.player = new Pigmalion(this, thdsis.posx, this.posy, "pigmalion");
    this.player.create();
    this.lives = 10;
    this.flash = 0;

    this.monecoAttacks = this.physics.add.group();
    this.r = this.input.keyboard.addKey("R");

    this.physics.add.collider(
      this.player,
      this.monecoAttacks,
      this.onCollision(this.player, this.monecoAttacks)
    );
  }

  update(time, delta) {
    this.player.update();

    if (this.r.isDown) {
      let xx = this.sys.game.canvas.width;
      let yy = Phaser.Math.Between(0, this.sys.game.canvas.height);
      this.expl = new CucuAttack({
        scene: this,
        x: xx,
        y: yy,
        type: "shoot",
      });
      this.monecoAttacks.add(this.expl);
    }

    if (this.physics.collide(this.player, this.monecoAttacks)) {
      this.onCollision(this.player, this.monecoAttacks);
    }
    if (this.flash >= 1) this.flash--;

    if (this.player.x < 0) {
      this.player.x = 1400 - 1; //PARA EL DAILY: EL FALLO ESTÁ CORREGIDO EN LAS LINEAS 59 Y 60 LO DEJO SIN ARREGLAR PARA COMENTARLO
      this.scene.start(cst.SCENES.SALA1, {posx : this.player.x, posy: this.player.y});
    }
    if (this.player.x > 1400) {
     // De momento en la sala 0 no hay cambio a la derecha
      // this.x = 1;
    }
    if (this.player.y  < 0) {
      // De momento en la sala 0 no hay cambio arriba
      //this.player.y = 800 - 1;
    }
    if (this.player.y > 800) {
      // De momento en la sala 0 no hay cambio a la derecha
      //this.y = 1;
    }
  }
  onCollision(obj1, obj2) {  
    if (this.flash === 0) {
      this.lives--;
      this.flash = 100;
    }
    console.log(this.lives, "  ", this.flash);
  }
}
