import { cst } from "./cst.js";
import SalaBaseCombate from "./sala_base_combate.js";
import DonLindoAttack from "../monecoAttacks/donLindoAttack.js";
import Explosion from "../monecoAttacks/explosion.js";
import Prop from "../gameobject/prop.js";

export default class Sala28donlindo extends SalaBaseCombate {
  constructor() {
    super(cst.SCENES.SALA28DONLINDO,1);
  }

  init(datos) {
    super.init(datos);
  }
  
  create() {   
    super.create();
    this.donLindo = new Prop(this,1200,this.sys.game.canvas.height/2,"donlindo_idl",this.player,60,50,false);
    this.donLindo.play("donlindo_chaqueta",false).on("animationcomplete",()=>{this.donLindo.play("donlindo")});   
   
    this.musicConfig = {
      mute: false,
      volume: 0.4,
      rate:1,
      detune:0,
      seek:0,
      loop:false,
      delay: 0
    }
    this.expl=this.sound.add("explosion",this.musicConfig);
    this.nota=this.sound.add("nota",this.musicConfig);

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
    this.time.delayedCall(750,()=>{this.attack1()})
    this.timer = this.time.addEvent({
      delay: 5500,
      callback: () => {
       this.attack1();
       if(this.timer.getRepeatCount()===0) this.startMenu();
      },
      repeat: 2,
    });
  }

  phase2() {
    this.time.delayedCall(750,()=>{this.attack1()})
    this.timer = this.time.addEvent({
      delay: 5500,
      callback: () => {
        this.attack1()
        if(this.timer.getRepeatCount()===0) this.startMenu();
      },
      repeat: 3,
    });
    this.timer2=this.time.addEvent({
      delay: 5000,
      callback:()=>{this.attack2()},
      repeat: 5,
    })   
  }

  attack1(){
    this.donLindoAt = new DonLindoAttack(this, this.window.w, this.window.h / 2,"nota", this.player);
    this.monecoAttacks.add(this.donLindoAt);
    this.nota.play();
  }

  attack2(){
    this.expl.play();
    console.log(this.sound)
    this.expolosion = new Explosion(this,"bomba",this.player);
    this.monecoAttacks.add(this.expl)
  }
}
