import SalaBase from "./sala_base.js";
import Prop from "../gameobject/prop.js";
import { cst } from "./cst.js";

export default class Sala27 extends SalaBase {
  constructor() {
    super(cst.SCENES.SALA27, [0, cst.SCENES.SALA26, 0, 0], false);
  }

  init(datos) {
    super.init(datos);
  }

  create() {
    super.create();
    if (this._runInfo._monecos[1] === 0) {
      this.cucu = new Prop(this,this.sys.game.canvas.width/2,this.sys.game.canvas.height / 5*3,"donlindoidle",this.player,60,50,true, this.comienzaCombate, this);
      this.cucu.play("donlindoidle",true);
    }
    
  }

  update() {
    super.update();    
    // if (this._runInfo._monecos[1] === 0) {      
    //   if (this.physics.overlap(this.player, this.cucu)) {
    //     if (Phaser.Input.Keyboard.JustDown(this.e)) {
    //       this.scene.start(cst.SCENES.SALA18CUCU, {
    //         posx: 200,
    //         posy: this.sys.game.canvas.height / 2 + this.player.height / 2,
    //         lives: this.player.lives,
    //         objs: this.objetos,
    //         runInf:this._runInfo
    //       });
    //     }
    //   }
    // }
  }

  comienzaCombate = function(){
    if (this._runInfo._monecos[1] === 0){
    this.scene.start(cst.SCENES.SALA28DONLINDO, {
      posx: 200,
      posy: this.sys.game.canvas.height / 2 + this.player.height / 2,
      lives: this.player.lives,
      objs: this.objetos,
      runInf:this._runInfo
    });
   }
  }
}
