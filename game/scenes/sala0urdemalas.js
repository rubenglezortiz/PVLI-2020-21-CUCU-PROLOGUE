import SalaBaseCombate from "./sala_base_combate.js";
import {cst} from "./cst.js";

import CucuAttack from "../monecoAttacks/cucuAttack.js";
import DonLindoAttack from "../monecoAttacks/donLindoAttack.js";
import PomponinaAttack from "../monecoAttacks/pomponinaAttack.js";
import Explosion from "../monecoAttacks/explosion.js";


export default class Sala0Urdemalas extends SalaBaseCombate{

  constructor(){
    super(cst.SCENES.SALA0URDEMALAS,3)
  }

  init(datos){
    super.init(datos);
  }

  create(){
    super.create();
    this.startVS();
  }

  update(){
    super.update();
  }


  startVS(){
    if(this.monecoLP >=50)
    this.phase1();
    else 
    this.phase2();
  }

  phase1(){
    this.time.delayedCall(750, ()=> {this.attack1(Phaser.Math.Between(0,2))})
    this.timer = this.time.addEvent({
      delay:3500,
      callback: () => {
        this.attack1(Phaser.Math.Between(0,2));
        if(this.timer.getRepeatCount()===0) this.startMenu();
      },
      repeat: 2,
    });

  }


  phase2(){
    

    this.time.delayedCall(750, ()=> {this.attack2(Phaser.Math.Between(0,2))})
    this.timer = this.time.addEvent({
      delay:3000,
      callback: () => {
        this.attack2(Phaser.Math.Between(0,2));
        if(this.timer.getRepeatCount()===0) this.startMenu();
      },
      repeat: 2,
    });


    
   
   

  }


  attack1(atRnd){
  

    if(atRnd === 0){
      //Este random  no se puede meter porque en la fase dos hay que decirle desde aquí hacia donde ir
      this.at = new PomponinaAttack(this, this.sys.game.canvas.width, this.sys.game.canvas.height / 2, "pomponinaat", this.player,Phaser.Math.Between(0,1));
    }
    else if(atRnd ===1){
      this.at = new DonLindoAttack(this, this.sys.game.canvas.width, this.sys.game.canvas.height / 2,"shoot", this.player);
    }
    else{
      this.at = new CucuAttack(this, "cucuat", this.player);
    }
  }


  attack2(attackKind){
    if(attackKind === 0){
      for (let i = 0; i < 2; i++) {
        this.pompAt = new PomponinaAttack(this, this.sys.game.canvas.width, this.sys.game.canvas.height / 2, "pomponinaat", this.player,i%2);
      }
    }
    else if(attackKind===1){
      this.at = new DonLindoAttack(this, this.sys.game.canvas.width, this.sys.game.canvas.height / 2,"shoot", this.player);
      this.timerAttack1 = this.time.delayedCall(2000, () => {
        this.donLindExp = new Explosion(this,"pigmalion",this.player);
      });
    }
    else{
      this.cucuAt1 = new CucuAttack(this, "cucuat2", this.player);
      this.timerAttack2 = this.time.delayedCall(500, () => {
      this.cucuAt2 = new CucuAttack(this, "cucuat2", this.player);
    });
    }
  }

}