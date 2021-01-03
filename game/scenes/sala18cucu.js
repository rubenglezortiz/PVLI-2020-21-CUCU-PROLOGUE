import SalaBase from "./sala_base.js";
import { cst } from "./cst.js";
import Pigmalion from "../gameobject/pigmalion.js";
import CucuAttack from "../monecoAttacks/cucuAttack.js";
import MenuCombate from "../scenes/menuCombate.js";
import eventsCenter from "../eventsCenter.js";
import Prop from "../gameobject/prop.js";

export default class Sala18Cucu extends SalaBase {
  constructor() {
    //<- ^ ->v
    super(cst.SCENES.SALA18CUCU, [0, 0, 0, 0]);
    console.log(this.player);
  }

  init(datos) {
    super.init(datos);
  }

  create() {
    super.create();
    this.camino = this.add.image(1400, 400, "cucucamino1");
    this.carreta = new Prop(this, 1100, 350, "carreta", this.player,6,60,50);
    this.cucu = new Prop(this, 1100, 450, "cucu", this.player,6,60,50);
    this.anims.create({
      key: "cucu1",
      frames: this.anims.generateFrameNumbers("cucu", {
        start: 0,
        end: 20,
      }),
      frameRate: 20,
      repeat: -1,
    });
    this.monecoAttacks = this.add.group();
    this.monecoLP = 100;
    this.monecoPP = 0;
    this.monecoMercy = false;
    this.startVS();
  }

  update() {
    super.update();
    this.cucu.anims.play("cucu1", true);
    if (this.physics.overlap(this.player, this.monecoAttacks)) {
      this.player.lives--;
      console.log(this.player.lives);
    }
    if (this.player.lives === 0) {
      this.player.lives = 10;
      this.finishVS();
    }
  }

  startVS() {
    if (this.monecoLP >= 50) this.cucuAttackF();
    else this.cucuAttackF2();
    this.time.delayedCall(3000, () => {
      this.startMenu();
    });
  }

  cucuAttackF() {
    this.timer = this.time.addEvent({
      delay: 2000,
      callback: () => {
        let x = this.sys.game.canvas.width;
        let y = Phaser.Math.Between(
          this.player.y - this.player.height * 1.5,
          this.player.y + this.player.height * 1.5
        );
        this.cucuAt = new CucuAttack(this, x, y, "cucuat", this.player);
        this.monecoAttacks.add(this.cucuAt);
        this.cucuAt.depth=2;
      },
      repeat: 3,
    });
  }

  cucuAttackF2() {
    this.timer = this.time.addEvent({
      delay: 2000,
      callback: () => {
        let x = this.sys.game.canvas.width;
        let y = Phaser.Math.Between(
          this.player.y - this.player.height * 1.5,
          this.player.y + this.player.height * 1.5
        );
        let y2 = Phaser.Math.Between(0, this.sys.game.canvas.height);
        this.cucuAt1 = new CucuAttack(this, x, y, "cucuat2", this.player);
        this.monecoAttacks.add(this.cucuAt1);
        this.timerAttack2 = this.time.delayedCall(350, () => {
          this.cucuAt2 = new CucuAttack(this, x, y2, "cucuat2", this.player);
          this.monecoAttacks.add(this.cucuAt2);
        });
      },
      repeat: 3,
    });
    console.log(this.monecoAttacks);
  }

  startMenu() {
    if (this.monecoAttacks.countActive() === 0) {
      this.scene.launch("mc");
      eventsCenter.emit("thisKey", cst.SCENES.SALA18CUCU);
      eventsCenter.emit("canMercy", this.monecoPP);
      eventsCenter.on("damage", this.damage, this);
      eventsCenter.on("persuade", this.persuade, this);
      eventsCenter.on("isMercy", this.mercy, this);
      this.events.on(Phaser.Scenes.Events.RESUME, () => {
        eventsCenter.off("damage", this.damage, this);
        eventsCenter.off("persuade", this.persuade, this);
        eventsCenter.off("isMercy", this.mercy, this);
      });
      this.startVS();
      this.scene.pause();
      this.player.resetInput();
    } else this.time.delayedCall(3000, () => {this.startMenu();});
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
