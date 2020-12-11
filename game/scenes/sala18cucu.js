import { cst } from "./cst.js";
import Pigmalion from "../gameobject/pigmalion.js";
import CucuAttack from "../monecoAttacks/cucuAttack.js";
import MenuCombate from "../scenes/menuCombate.js";
import eventsCenter from "../eventsCenter.js";

export default class Sala18CUCU extends Phaser.Scene {
  constructor() {
    super({ key: "SALA18CUCU" });
  }

  init(datos) {
    this.lives = datos.lives;
  }

  create() {
    this.add.image(700, 400, "background");
    this.player = new Pigmalion(this, 200, 200, this.lives, "pigmalion");
    this.flash = 0; //esto puede estar aquí, pero es muy chapucero
    this.monecoAttacks = this.physics.add.group();
    this.monecoLP = 100;
    this.monecoPP = 0;
    this.monecoMercy = false;
    this.physics.add.overlap(this.player, this.monecoAttacks);
    this.cucuAttackF();
  }

  update(time, delta) {
    if (this.flash === 0)
      if (this.physics.overlap(this.player, this.monecoAttacks)) {
        this.player.lives--;
        console.log(this.player.lives);
        this.flash = 100;
      }
    if (this.flash >= 1) this.flash--;
    if (this.player.lives === 0){
      this.player.lives=10;
       this.finishVS();
    }
  }

  cucuAttackF() {
    this.timer = this.time.addEvent({
      delay: 2000,
      callback: () => {
        let xx = this.sys.game.canvas.width;
        let yy = Phaser.Math.Between(
          this.player.y - this.player.height / 2,
          this.player.y + this.player.height / 2
        );
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
      eventsCenter.emit("canMercy", this.monecoPP);
      eventsCenter.on("damage", this.damage, this);
      eventsCenter.on("persuade", this.persuade, this);
      eventsCenter.on("isMercy", this.mercy, this);
      this.events.on(Phaser.Scenes.Events.RESUME, () => {
        eventsCenter.off("damage", this.damage, this);
        eventsCenter.off("persuade", this.persuade, this);
        eventsCenter.off("isMercy", this.mercy, this);
      });
      this.cucuAttackF();
      this.scene.pause();
    });
  }

  damage(damage) {
    this.monecoLP -= damage;
    console.log(this.monecoLP);
  }
  persuade(persuade) {
    this.monecoPP += persuade;
    console.log(this.monecoPP);
  }

  mercy(mercy) {
    //HABRÍA QUE AJUSTAR PARÁMETROS, VER SI SE SALVA EL MUNECO ETC.
    if (mercy) {
      this.finishVS();
    }
  }

  finishVS(win) {
    this.scene.start(cst.SCENES.SALA0, {
      posx: this.player.x,
      posy: this.player.y,
      lives: this.player.lives,
    });
  }
}
