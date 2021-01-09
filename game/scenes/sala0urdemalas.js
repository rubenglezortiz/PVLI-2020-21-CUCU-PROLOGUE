import SalaBaseCombate from "./sala_base_combate.js";
import {cst} from "./cst.js";

import CucuAttack from "../monecoAttacks/cucuAttack.js";
import DonLindoAttack from "../monecoAttacks/donLindoAttack.js";
import PomponinaAttack from "../monecoAttacks/pomponinaAttack.js";

export default class Sala0Urdemalas extends SalaBaseCombate{

  constructor(){
    super(cst.SCENES.SALA0URDEMALAS)
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
    this.time.delayedCall(750, ()=> {this.attack1()})
    this.timer = this.time.addEvent({
      delay:3500,
      callback: () => {
        this.attack1();
        if(this.timer.getRepeatCount()===0) this.startMenu();
      },
      repeat: 2,
    });

  }


  phase2(){

  }


  attack1(){
    this.atRnd = Phaser.Math.Between(0,2);
  

    if(this.atRnd === 0){
      this.y = Phaser.Math.Between(0,1);
      this.at = new PomponinaAttack(this, this.sys.game.canvas.width, this.sys.game.canvas.height / 2, "pomponinaat", this.player,this.y);
    }
    else if(this.atRnd ===1){
      this.y = Phaser.Math.Between(0,1);
      this.at = new DonLindoAttack(this, this.sys.game.canvas.width, this.sys.game.canvas.height / 2,"shoot", this.player,this.y);
    }
    else{
      let x = this.sys.game.canvas.width;
      let y = Phaser.Math.Between(
        this.player.y - this.player.height * 1.5,
        this.player.y + this.player.height * 1.5
      );
      this.at = new CucuAttack(this, x, y, "cucuat", this.player);

    }
    this.monecoAttacks.add(this.at); 
  }


  attack2(){
    for (let i = 0; i < 2; i++) {
      this.pompAt = new PomponinaAttack(this, this.sys.game.canvas.width, this.sys.game.canvas.height / 2, "pomponinaat", this.player,i%2);
      this.monecoAttacks.add(this.pompAt);
    }
  }

}