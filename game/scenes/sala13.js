import { cst } from "../cst.js";
import Explosion from "../explosion.js";
import Pigmalion from "../gameobject/pigmalion.js";
import CucuAttack from "../cucuAttack.js";

export default class Sala13 extends Phaser.Scene {
  constructor() {
    super({ key: cst.SCENES.SALA13 });
  }

  init(datos){
    this.posx = datos.posx;
    this.posy = datos.posy;
  }
  preload() {}
  
  create() {
    //this.add.text(10, 10, "¡Hola, mundodasddsasafda!", { fontColor: 0xffff00 });
    let { width, height } = this.sys.game.canvas;
    let edificio = this.physics.add.sprite(0, 175, "objetovacio");
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
      //la sala 3 no tiene nada a la inquierda
    }
    if (this.player.x > 1400) {
      //la sala 1.3 no tiene nada a la derecha
    }
    if (this.player.y  < 0) {
      this.player.y = 800 - 1;
      this.scene.start(cst.SCENES.SALA14,  {posx : this.player.x, posy: this.player.y});

    }
    if (this.player.y > 800) {
      this.player.y = 1;
      this.scene.start(cst.SCENES.SALA11,  {posx : this.player.x, posy: this.player.y});

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

