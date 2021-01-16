import SalaBase from "./sala_base.js";
import Prop from "../gameobject/prop.js";
import { cst } from "./cst.js";

export default class Sala17 extends SalaBase {
  constructor() {
    super(cst.SCENES.SALA17, [0, cst.SCENES.SALA16, 0, 0], false);
  }

  init(datos) {
    super.init(datos);
  }

  create() {
    super.create();
    this.camino = this.add.image(700, 400, "cucucamino5");
    this.carreta = new Prop(this,1500,100,"carreta",this.player,60,50,false);
    if (this._runInfo._monecos[0] === 0) {
      this.cucu = new Prop(this,1200,this.sys.game.canvas.height / 2,"cucu_idl",this.player,60,50,true, this.comienzaCombate, this);
      this.cucu.play("cucu_idl",true);
    }
  }

  update() {
    super.update();    
    // if (this._runInfo._monecos[0] === 0) {
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
    this.scene.start(cst.SCENES.SALA18CUCU, {
      posx: 200,
      posy: this.sys.game.canvas.height / 2 + this.player.height / 2,
      lives: this.player.lives,
      objs: this.objetos,
      runInf:this._runInfo
    });
  }

}
