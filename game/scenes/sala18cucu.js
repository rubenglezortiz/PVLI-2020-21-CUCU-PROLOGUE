import SalaBaseCombate from "./sala_base_combate.js";
import { cst } from "./cst.js";
import CucuAttack from "../monecoAttacks/cucuAttack.js";
import Prop from "../gameobject/prop.js";

export default class Sala18Cucu extends SalaBaseCombate {
  constructor() {
    super(cst.SCENES.SALA18CUCU, 0);
  }

  init(datos) {
    super.init(datos);
    console.log(this);
  }

  create() {
    super.create();  
    this.carreta = new Prop(this,1200,this.sys.game.canvas.height / 2 - 100,"carreta",this.player,60,50,false);
    this.cucu = new Prop(this,1200,this.sys.game.canvas.height/2,"cucu_idl",this.player,60,50,false);
    this.cucu.play("cucu",true);
    this.musicConfig = {
      mute: false,
      volume: 0.2,
      rate:1,
      detune:0,
      seek:0,
      loop:false,
      delay: 0
    }
    this.cu=this.sound.add("cu",this.musicConfig);
    this.startVS();
  }

  update() {
    super.update(); 
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
    this.cucuAt = new CucuAttack(this, "cucu_at1", 500, this.player);
    this.cu.play();
  }

  attack2(){    
    this.cucuAt1 = new CucuAttack(this, "cucu_at2", Phaser.Math.Between(this.player.y - this.player.height * 1.5, this.player.y + this.player.height * 1.5), 600, this.player);
    this.cu.play();
    this.timerAttack2 = this.time.delayedCall(350, () => {
      this.cucuAt2 = new CucuAttack(this, "cucu_at2",Phaser.Math.Between(0, this.sys.game.canvas.height), 600, this.player);
      this.cu.play();
    });
  }  
}