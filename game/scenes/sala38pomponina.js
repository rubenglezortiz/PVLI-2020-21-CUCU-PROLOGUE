import { cst } from "./cst.js";
import SalaBaseCombate from "./sala_base_combate.js";
import PomponinaAttack from "../monecoAttacks/pomponinaAttack.js";
import Prop from "../gameobject/prop.js";


export default class Sala38pomponina extends SalaBaseCombate {
  constructor() {
    super(cst.SCENES.SALA38POMPONINA,2);
  }

  init(datos) {
    super.init(datos);
  }
  create() {
    super.create();
    this.pomponina=new Prop(this,1200,this.window.h/2,"pomponina",this.player,60,50,false);
    this.pomponina.play("pomponina",true);
    this.musicConfig = {
      mute: false,
      volume: 0.4,
      rate:1,
      detune:0,
      seek:0,
      loop:false,
      delay: 0
     }
    this.tornado=this.sound.add("tornado",this.musicConfig);
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
      delay: 7500,
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
      delay: 7500,
      callback: () => {
        this.attack2();
        if(this.timer.getRepeatCount()===0) this.startMenu();
      },
      repeat: 1,
    });
   
  }

  attack1(){
    this.pompAt = new PomponinaAttack(this, this.window.w, this.window.h / 2, "pomponina_at", this.player,Phaser.Math.Between(0,1));
    this.tornado.play()
  }
  attack2(){
    for (let i = 0; i < 2; i++) {
      this.pompAt = new PomponinaAttack(this, this.window.w, this.window.h / 2, "pomponina_at", this.player,i%2);
    }
    this.tornado.play()
  }
}

