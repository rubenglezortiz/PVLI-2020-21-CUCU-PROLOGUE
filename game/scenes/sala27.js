import SalaBase from "./sala_base.js";
import Prop from "../gameobject/prop.js";
import { cst } from "./cst.js";
import eventsCenter from "../eventsCenter.js"
export default class Sala27 extends SalaBase {
  constructor() {
    super(cst.SCENES.SALA27, [0, cst.SCENES.SALA26, 0, 0], false);
  }

  init(datos) {
    super.init(datos);
  }

  create() {
    super.create();
    this.camino= this.add.image(this.sys.game.canvas.width/2+90, -200,"donlindocamino1")
    this.camino.angle=90;
    if (this._runInfo._monecos[1] === 0) {
      this.cucu = new Prop(this,1200,this.sys.game.canvas.height / 2,"donlindo_idl",this.player,60,50,true, this.comienzaCombate, this);
      this.cucu.play("donlindo_idl",true);
    }    
  }

  update() {
    super.update();
  }

  comienzaCombate = function(){
    eventsCenter.emit("thisKey", this._nombreSala);
    this.scene.launch("dialogo", {
      npc: "don_lindo",
      prevKey: cst.SCENES27,
      objs: this.objetos,
      runInf: this._runInfo,
      player: this.player,
    });
    this.scene.pause();
    //this.scene.sendToBack();
    this.player.resetInput();
  }
}
