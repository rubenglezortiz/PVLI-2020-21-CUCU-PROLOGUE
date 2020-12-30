import SalaBase from "./sala_base.js";
import { cst } from "./cst.js";
import Pigmalion from "../gameobject/pigmalion.js";
import CucuAttack from "../monecoAttacks/cucuAttack.js";
import MenuCombate from "../scenes/menuCombate.js";
import eventsCenter from "../eventsCenter.js";

export default class Sala18Cucu extends SalaBase {
  constructor() {
    //<- ^ ->v
    super("Sala18Cucu", [0, 0, 0, 0]);
  }

  init(datos) {
    super.init(datos);
  }

  create() {
    super.create();
    this.camino = this.add.image(1400, 400, "cucucamino1");
    this.add.image(1100, 350, "carreta").setScale(6);
    this.cucu = this.physics.add.sprite(1100, 450, "cucu").setScale(6);
    this.anims.create({
      key: "cucu1",
      frames: this.anims.generateFrameNumbers("cucu", {
        start: 0,
        end: 20,
      }),
      frameRate: 20,
      repeat: -1,
    });

    this.flash = 0; //esto puede estar aquí, pero es muy chapucero
    this.monecoAttacks = this.physics.add.group();
    this.monecoLP = 100;
    this.monecoPP = 0;
    this.monecoMercy = false;
    this.physics.add.overlap(this.player, this.monecoAttacks);
    this.startVS();
  }

  update() {
    super.update();
    this.cucu.anims.play("cucu1", true);

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
    if (this.monecoLP >= 50) this.cucuAttackF();
    else this.cucuAttackF2();
  }

  cucuAttackF() {
    this.timer = this.time.addEvent({
      delay: 2000,
      callback: () => {
        let xx = this.sys.game.canvas.width;
        let yy = -1;
        while (yy < 54 || yy > this.sys.game.canvas.height - 54) {
          //CUIDADO CON EL CABLEADO POR CÓDIGO
          yy = Phaser.Math.Between(
            this.player.y - this.player.height * 1.5,
            this.player.y + this.player.height * 1.5
          );
        }
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
    this.startMenu();
  }

  cucuAttackF2() {
    this.timer = this.time.addEvent({
      delay: 2000,
      callback: () => {
        let xx = this.sys.game.canvas.width;
        let yy = Phaser.Math.Between(
          this.player.y - this.player.height * 1.5,
          this.player.y + this.player.height * 1.5
        );
        let yy2 = Phaser.Math.Between(0, this.sys.game.canvas.height);
        this.cucuAt1 = new CucuAttack({
          scene: this,
          x: xx,
          y: yy,
          type: "cucuat2",
        });
        this.monecoAttacks.add(this.cucuAt1);
        this.timerAttack2 = this.time.delayedCall(350, () => {
          this.cucuAt2 = new CucuAttack({
            scene: this,
            x: xx,
            y: yy2,
            type: "cucuat2",
          });
          this.monecoAttacks.add(this.cucuAt2);
        });
      },
      repeat: 3,
    });
    console.log(this.monecoAttacks);
    this.startMenu();
  }

  startMenu() {
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
      this.startVS();
      this.scene.pause();
      this.player.resetInput();
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

// import { cst } from "./cst.js";
// import Pigmalion from "../gameobject/pigmalion.js";
// import CucuAttack from "../monecoAttacks/cucuAttack.js";
// import MenuCombate from "../scenes/menuCombate.js";
// import eventsCenter from "../eventsCenter.js";

// export default class Sala18CUCU extends Phaser.Scene {
//   constructor() {
//     super({ key: cst.SCENES.SALA18CUCU });
//   }

//   init(datos) {
//     this.lives = datos.lives;
//     this.posx = datos.posx;
//     this.posy = datos.posy;
//   }

//   create() {
//     this.add.image(700, 400, "tablones");
//     this.physics.add.image(700, 400, "cortinas");
//     this.player = new Pigmalion(
//       this,
//       this.posx,
//       this.posy,
//       this.lives,
//       "pigmalion"
//     );
//     this.add.image(700, 400, "telon");
//     this.add.image(1100, 350, "carreta").setScale(6);
//     this.cucu = this.physics.add.sprite(1100, 450, "cucu").setScale(6);
//     this.anims.create({
//       key: "cucu1",
//       frames: this.anims.generateFrameNumbers("cucu", {
//         start: 0,
//         end: 20,
//       }),
//       frameRate: 20,
//       repeat: -1,
//     });

//     this.flash = 0; //esto puede estar aquí, pero es muy chapucero
//     this.monecoAttacks = this.physics.add.group();
//     this.monecoLP = 100;
//     this.monecoPP = 0;
//     this.monecoMercy = false;
//     this.physics.add.overlap(this.player, this.monecoAttacks);
//     this.startVS();
//   }

//   update(time, delta) {
//     this.cucu.anims.play("cucu1", true);

//     if (this.flash === 0)
//       if (this.physics.overlap(this.player, this.monecoAttacks)) {
//         this.player.lives--;
//         eventsCenter.emit("hit", this.player.y, this.player.height);
//         console.log(this.player.lives);
//         this.flash = 100;
//       }
//     if (this.flash >= 1) this.flash--;
//     if (this.player.lives === 0) {
//       this.player.lives = 10;
//       this.finishVS();
//     }
//   }

//   startVS() {
//     if (this.monecoLP >= 50) this.cucuAttackF();
//     else this.cucuAttackF2();
//   }

//   cucuAttackF() {
//     this.timer = this.time.addEvent({
//       delay: 2000,
//       callback: () => {
//         let xx = this.sys.game.canvas.width;
//         let yy = -1;
//         while (yy < 54 || yy > this.sys.game.canvas.height - 54) {
//           //CUIDADO CON EL CABLEADO POR CÓDIGO
//           yy = Phaser.Math.Between(
//             this.player.y - this.player.height * 1.5,
//             this.player.y + this.player.height * 1.5
//           );
//         }
//         this.cucuAt = new CucuAttack({
//           scene: this,
//           x: xx,
//           y: yy,
//           type: "cucuat",
//         });
//         this.monecoAttacks.add(this.cucuAt);
//       },
//       repeat: 3,
//     });
//     this.startMenu();
//   }

//   cucuAttackF2() {
//     this.timer = this.time.addEvent({
//       delay: 2000,
//       callback: () => {
//         let xx = this.sys.game.canvas.width;
//         let yy = Phaser.Math.Between(
//           this.player.y - this.player.height * 1.5,
//           this.player.y + this.player.height * 1.5
//         );
//         let yy2 = Phaser.Math.Between(0, this.sys.game.canvas.height);
//         this.cucuAt1 = new CucuAttack({
//           scene: this,
//           x: xx,
//           y: yy,
//           type: "cucuat2",
//         });
//         this.monecoAttacks.add(this.cucuAt1);
//         this.timerAttack2 = this.time.delayedCall(350, () => {
//           this.cucuAt2 = new CucuAttack({
//             scene: this,
//             x: xx,
//             y: yy2,
//             type: "cucuat2",
//           });
//           this.monecoAttacks.add(this.cucuAt2);
//         });
//       },
//       repeat: 3,
//     });
//     console.log(this.monecoAttacks);
//     this.startMenu();
//   }

//   startMenu() {
//     this.timerMenu = this.time.delayedCall(12000, () => {
//       this.scene.launch("mc");
//       eventsCenter.emit("canMercy", this.monecoPP);
//       eventsCenter.on("damage", this.damage, this);
//       eventsCenter.on("persuade", this.persuade, this);
//       eventsCenter.on("isMercy", this.mercy, this);
//       this.events.on(Phaser.Scenes.Events.RESUME, () => {
//         eventsCenter.off("damage", this.damage, this);
//         eventsCenter.off("persuade", this.persuade, this);
//         eventsCenter.off("isMercy", this.mercy, this);
//       });
//       this.startVS();
//       this.scene.pause();
//       this.player.resetInput();
//     });
//   }

//   damage(damage) {
//     this.monecoLP -= damage;
//     console.log(this.monecoLP);
//   }
//   persuade(persuade) {
//     this.monecoPP += persuade;
//     console.log(this.monecoPP);
//   }

//   mercy(mercy) {
//     //HABRÍA QUE AJUSTAR PARÁMETROS, VER SI SE SALVA EL MUNECO ETC.
//     if (mercy) {
//       this.finishVS();
//     }
//   }

//   finishVS(win) {
//     this.scene.start(cst.SCENES.SALA0, {
//       posx: this.player.x,
//       posy: this.player.y,
//       lives: this.player.lives,
//     });
//   }
// }
