import SalaBase from "./sala_base.js";
import Prop from "../gameobject/prop.js";
import { cst } from "./cst.js";
import eventsCenter from "../eventsCenter.js"
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
    this.carreta = new Prop(this,1200,this.window.h / 2 - 100,"carreta",this.player,60,50,false);
    if (this._runInfo._monecos[0] === 0) {
      this.cucu = new Prop(this,1200,this.window.h / 2,"cucu_idl",this.player,60,50,true, this.comienzaCombate, this);
      this.cucu.play("cucu_idl",true);
    }
  }

  update() {
    super.update();    
  }

  comienzaCombate = function(){
    eventsCenter.emit("thisKey", this._nombreSala);
    this.scene.launch("dialogo", {
      npc: "cucu",
      prevKey: cst.SCENES.SALA17,
      objs: this.objetos,
      runInf: this._runInfo,
      player: this.player,
    });
    this.scene.pause();
    this.player.resetInput();
  }

}
