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
    this.donLindo = new Prop(this,1200,this.sys.game.canvas.height/2,"donlindoidle",this.player,60,50,false);
    this.donLindo.play("donlindoidle",true);
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
      delay: 7500,
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
      delay: 6500,
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
    this.donLindoAt = new DonLindoAttack(this, this.sys.game.canvas.width, this.sys.game.canvas.height / 2,"shoot", this.player);
  }

  attack2(){
    this.expl = new Explosion(this,"pigmalion",this.player);
    
  }
}
