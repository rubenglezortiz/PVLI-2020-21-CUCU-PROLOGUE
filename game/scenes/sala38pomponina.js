import { cst } from "./cst.js";
import SalaBaseCombate from "./sala_base_combate.js";
import PomponinaAttack from "../monecoAttacks/pomponinaAttack.js";
import Prop from "../gameobject/prop.js";

export default class Sala38pomponina extends SalaBaseCombate {
  constructor() {
    super(cst.SCENES.SALA38POMPONINA);
  }

  init(datos) {
    super.init(datos);
  }
  create() {
    super.create();
    this.pomponina=new Prop(this,1200,this.sys.game.canvas.height/2,"",this.player,6,60,50,false)
    this.anims.create({
      key: "pomponinaEnfadada",
      frames: this.anims.generateFrameNumbers("pomponina", {
        start: 0,
        end: 9,
      }),
      frameRate: 8,
      repeat: -1,
    });
    this.startVS();
  }

  update() {
    super.update();   
    this.pomponina.play("pomponinaEnfadada",true);
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
    this.pompAt = new PomponinaAttack(this, this.sys.game.canvas.width, this.sys.game.canvas.height / 2, "pomponinaat", this.player,this.velY);
  }
  attack2(){
    for (let i = 0; i < 2; i++) {
      this.pompAt = new PomponinaAttack(this, this.sys.game.canvas.width, this.sys.game.canvas.height / 2, "pomponinaat", this.player,i%2);
    }
  }
}

