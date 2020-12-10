import Pigmalion from "../gameobject/pigmalion.js";
import CucuAttack from "../monecoAttacks/cucuAttack.js";

export default class Sala18CUCU extends Phaser.Scene {
  constructor() {
    super({ key: "SALA18CUCU" });
  }

  init(datos) {
    this.posx = datos.posx;
    this.posy = datos.posy;
  }

  create() {
    this.add.image(700, 400, "background");
    this.player = new Pigmalion(this, 200, 200, "pigmalion");
    this.lives = 10;
    this.flash = 0;
    this.monecoAttacks = this.physics.add.group();
    this.monecoLP = 100;
    this.monecoPP = 0;
    this.physics.add.overlap(this.player, this.monecoAttacks);
    this.cucuAttackF();
    // this.player.create();
  }

  update(time, delta) {

    if (this.flash === 0)
      if (this.physics.overlap(this.player, this.monecoAttacks)) {
        this.lives--;
        this.flash = 100;
        console.log(this.lives);
      }
    if (this.flash >= 1) this.flash--;
  }

  cucuAttackF() {
    this.timer = this.time.addEvent({
      delay: 2000,
      callback: () => {
        let xx = this.sys.game.canvas.width;
        let yy = Phaser.Math.Between(0, this.sys.game.canvas.height);
        this.cucuAt = new CucuAttack({
          scene: this,
          x: xx,
          y: yy,
          type: "cucuat",
        });
        this.monecoAttacks.add(this.cucuAt);
      },
      repeat: 3,
    });
    
    this.timerMenu = this.time.delayedCall(12000, () => {
      this.scene.launch("mc");
      this.cucuAttackF();
      this.scene.pause();
    });
  }
}
