import SalaBaseCombate from "./sala_base_combate.js";
import { cst } from "./cst.js";
import Pigmalion from "../gameobject/pigmalion.js";
import CucuAttack from "../monecoAttacks/cucuAttack.js";
import MenuCombate from "../scenes/menuCombate.js";
import eventsCenter from "../eventsCenter.js";
import Prop from "../gameobject/prop.js";

export default class Sala18Cucu extends SalaBaseCombate {
  constructor() {
    super(cst.SCENES.SALA18CUCU);
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
 
    this.startVS();
  }

  update() {
    super.update();
   
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

  
}
