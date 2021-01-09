import SalaBaseCombate from "./sala_base_combate.js";
import { cst } from "./cst.js";
import CucuAttack from "../monecoAttacks/cucuAttack.js";
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
    this.camino = this.add.image(700, 400, "cucucamino5");
    this.carreta = new Prop(this,1500,100,"carreta",this.player,6,60,50,false);
    this.cucu = new Prop(this,1200,this.sys.game.canvas.height/2,"cucu_idle",this.player,6,60,50,false);
    this.anims.create({
      key: "cucu",
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
    this.cucu.play("cucu",true);
  }

  startVS() {
    if (this.monecoLP >= 50) this.phase1();
    else this.phase2();
  }

  phase1() {
    this.time.delayedCall(500,()=>{this.attack1()})
    this.timer = this.time.addEvent({
      delay: 2000,
      callback: () => {
        this.attack1();
        if(this.timer.getRepeatCount()===0) this.startMenu();
      },
      repeat: 2,
    });
  }

  phase2() {
    this.time.delayedCall(500,()=>{this.attack2()})
    this.timer = this.time.addEvent({
      delay: 2000,
      callback: () => {
        this.attack2();
        if(this.timer.getRepeatCount()===0) this.startMenu();
      },
      repeat: 2,
    });
  }

  attack1(){
        let x = this.sys.game.canvas.width;
        let y = Phaser.Math.Between(
          this.player.y - this.player.height * 1.5,
          this.player.y + this.player.height * 1.5
        );
        this.cucuAt = new CucuAttack(this, x, y, "cucuat", this.player);
        this.monecoAttacks.add(this.cucuAt);
  }

  attack2(){
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
  }
  
}
