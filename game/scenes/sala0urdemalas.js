import SalaBaseCombate from "./sala_base_combate.js";
import {cst} from "./cst.js";

import CucuAttack from "../monecoAttacks/cucuAttack.js";
import DonLindoAttack from "../monecoAttacks/donLindoAttack.js";
import PomponinaAttack from "../monecoAttacks/pomponinaAttack.js";
import Explosion from "../monecoAttacks/explosion.js";
import Prop from "../gameobject/prop.js";


export default class Sala0Urdemalas extends SalaBaseCombate{

  constructor(){
    super(cst.SCENES.SALA0URDEMALAS,3)
  }

  init(datos){
    super.init(datos);
  }

  create(){
    super.create();
    this.urdemalas= new Prop(this,this.sys.game.canvas.width-200,this.sys.game.canvas.height/2+60,"urdemalas",this.player,60,50,false);
    this.urdemalas.play("urdemalas");


    this.musicConfig1 = {
      mute: false,
      volume: 0.2,
      rate:1,
      detune:0,
      seek:0,
      loop:false,
      delay: 0
    }
    this.musicConfig2 = {
      mute: false,
      volume: 0.4,
      rate:1,
      detune:0,
      seek:0,
      loop:false,
      delay: 0
    }

    this.musicConfig3 = {
      mute: false,
      volume: 0.4,
      rate:1,
      detune:0,
      seek:0,
      loop:false,
      delay: 0
     }
    

    this.cu=this.sound.add("cu",this.musicConfig1);
    this.expl=this.sound.add("explosion",this.musicConfig2);
    this.nota=this.sound.add("nota",this.musicConfig2);
    this.tornado=this.sound.add("tornado",this.musicConfig3);

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
      this.at = new PomponinaAttack(this, this.window.w, this.window.h / 2, "pomponina_at", this.player,Phaser.Math.Between(0,1));
      this.tornado.play();
    }
    else if(atRnd ===1){
      this.at = new DonLindoAttack(this, this.window.w, this.window.h / 2,"nota", this.player);
      this.nota.play();
    }
    else{
      this.at = new CucuAttack(this, "cucu_at1",Phaser.Math.Between(0, this.window.h), 500, this.player);
      this.cu.play();
    }
  }


  attack2(attackKind){
    if(attackKind === 0){
      for (let i = 0; i < 2; i++) {
        this.pompAt = new PomponinaAttack(this, this.window.w, this.window.h / 2, "pomponina_at", this.player,i%2);
        this.tornado.play();
      }
    }
    else if(attackKind===1){
      this.at = new DonLindoAttack(this, this.window.w, this.window.h / 2,"nota", this.player);
      this.nota.play();
      this.timerAttack1 = this.time.delayedCall(2000, () => {
        this.expl.play();
        this.donLindExp = new Explosion(this,"explosion",this.player);
      });
    }
    else{
      this.cu.play();
      this.cucuAt1 = new CucuAttack(this, "cucu_at2", Phaser.Math.Between(this.player.y - this.player.height * 1.5, this.player.y + this.player.height * 1.5), 600, this.player);
      this.timerAttack2 = this.time.delayedCall(500, () => {
      this.cu.play();
      this.cucuAt2 = new CucuAttack(this, "cucu_at2",Phaser.Math.Between(0, this.window.h), 600, this.player);
    });
    }
  }
}