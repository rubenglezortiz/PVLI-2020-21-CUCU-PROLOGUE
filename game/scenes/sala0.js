import { cst } from "../cst.js";
import Explosion from "../explosion.js";
import Pigmalion from "../gameobject/pigmalion.js";
import CucuAttack from "../cucuAttack.js";

export default class Sala0 extends Phaser.Scene {
  constructor() {
    super({ key: "Sala0" });
  }
  preload() {}

  create() {
    //this.add.text(10, 10, "¡Hola, mundodasddsasafda!", { fontColor: 0xffff00 });
    let { width, height } = this.sys.game.canvas;
    let edificio = this.physics.add.sprite(0, 175, "objetovacio");
    this.add.image(700, 400, "background");
    this.player = new Pigmalion(this, 300, 300, "pigmalion");
    this.player.create();

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
      console.log(this.monecoAttacks);
    }

    if(this.physics.collide(this.player, this.monecoAttacks)){
      this.onCollision(this.player,this.monecoAttacks)
    }
  
  }
  onCollision(obj1) {
    obj1.x = 0;
    console.log("eyyy");
  }
}
