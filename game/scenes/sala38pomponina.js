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
    this.camino= this.add.image(this.sys.game.canvas.width/2+90,this.sys.game.canvas.height+350,"pomponinacamino1")
    this.camino.angle=90;
    this.pomponina=new Prop(this,1200,this.sys.game.canvas.height/2,"pomponina",this.player,60,50,false);
    this.pomponina.play("pomponina",true);
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
    this.pompAt = new PomponinaAttack(this, this.sys.game.canvas.width, this.sys.game.canvas.height / 2, "pomponina_at", this.player,Phaser.Math.Between(0,1));
  }
  attack2(){
    for (let i = 0; i < 2; i++) {
      this.pompAt = new PomponinaAttack(this, this.sys.game.canvas.width, this.sys.game.canvas.height / 2, "pomponina_at", this.player,i%2);
    }
  }
}

