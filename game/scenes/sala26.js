import SalaBase from "./sala_base.js";
import Prop from "../gameobject/prop.js";
import { cst } from "./cst.js";
import { npcs } from "./npcs.js";
import { objs } from "./objeto.js";
import eventsCenter from "../eventsCenter.js"


export default class Sala26 extends SalaBase {
  constructor() {
    super(cst.SCENES.SALA26,[0, cst.SCENES.SALA24, 0, cst.SCENES.SALA27],false);
  }

  init(datos) {
    super.init(datos);
  }

  create() {
    super.create();
    this.camino= this.add.image(this.window.w / 2 + 90,this.window.h/ 2,"donlindocamino1")
    this.camino.angle=90;
    this.fotoPomponina = new Prop (this, 300,300,"fotopomponina",this.player,60,50,true, this.fotoPomponina,this);
  }

  update() {
    super.update();
  }

  fotoPomponina = function(){
    eventsCenter.emit("thisKey", this._nombreSala);
    this.scene.launch("dialogo", {npc:npcs.NPCS.foto, prevKey:cst.SCENES.SALA26,objs:this.objetos});

    this.scene.pause();
    this.player.resetInput();
  }
}
