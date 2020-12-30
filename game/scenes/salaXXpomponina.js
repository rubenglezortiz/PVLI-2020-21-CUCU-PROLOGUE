import { cst } from "./cst.js";
import Pigmalion from "../gameobject/pigmalion.js";
import PomponinaAttack from "../monecoAttacks/pomponinaAttack.js";
import MenuCombate from "../scenes/menuCombate.js";
import eventsCenter from "../eventsCenter.js";

export default class SalaXXPomponina extends Phaser.Scene {
  constructor() {
    super({ key: "salaXXPomponina" });
  }

  init(datos) {
    this.lives = datos.lives;
    this.posx = datos.posx;
    this.posy = datos.posy;
    this.lives = datos.lives;
  }

  create() {
    //-------------------------//
    //HERENCIA??
    this.key = "salaXXPomponina";
    this.add.image(700, 400, "tablones");
    this.physics.add.image(700, 400, "cortinas");
    this.player = new Pigmalion(
      this,
      this.posx,
      this.posy,
      this.lives,
      "pigmalion"
    );
    this.add.image(700, 400, "telon");
    this.add.image(1100, 350, "carreta").setScale(6);
    //-------------------------//

    //ANIMACIÓN POMPONINA
    this.flash = 0; //esto puede estar aquí, pero es muy chapucero
    this.monecoAttacks = this.physics.add.group();
    this.monecoLP = 100;
    this.monecoPP = 100;
    this.monecoMercy = false;
    this.physics.add.overlap(this.player, this.monecoAttacks);
    this.startVS();
  }

  update(time, delta) {
    if (this.flash === 0)
      if (this.physics.overlap(this.player, this.monecoAttacks)) {
        this.player.lives--;
        eventsCenter.emit("hit", this.player.y, this.player.height);
        console.log(this.player.lives);
        this.flash = 100;
      }
    if (this.flash >= 1) this.flash--;
    if (this.player.lives === 0) {
      this.player.lives = 10;
      this.finishVS();
    }
  }

  startVS() {
    if (this.monecoLP >= 50) this.pomponinaAttack();
    else this.pomponinaAttackV2();
  }

  pomponinaAttack() {
    this.timer = this.time.addEvent({
      delay: 3000,
      callback: () => {
        this.pompAt = new PomponinaAttack({
          scene: this,
          x: this.sys.game.canvas.width,
          y: this.sys.game.canvas.height / 2,
          type: "shoot",
        });
        // this.monecoAttacks.add(this.pompAt);
      },
      repeat: 3,
    });

    this.startMenu();
  }

  pomponinaAttackV2() {
    this.timer = this.time.addEvent({
      delay: 2000,
      callback: () => {
        this.pompAt = new PomponinaAttack({
          scene: this,
          x: this.sys.game.canvas.width,
          y: 0,
          type: "shoot",
        });
        this.pompAt = new PomponinaAttack({
          scene: this,
          x: this.sys.game.canvas.width,
          y: this.sys.game.canvas.height / 2,
          type: "shoot",
        });
        this.pompAt = new PomponinaAttack({
          scene: this,
          x: this.sys.game.canvas.width,
          y: this.sys.game.canvas.height,
          type: "shoot",
        });
      },
      repeat: 3,
    });
    console.log(this.monecoAttacks);
    this.startMenu();
  }

  //---------------------------------------------------------
  //HERENCIA
  startMenu() {
    this.timerMenu = this.time.delayedCall(20000, () => {
      this.scene.launch("mc");
      console.log("emit", this.key);
      eventsCenter.emit("thisKey", this.key);
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
    });
  }
  //-----------------------------------------------------------

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
