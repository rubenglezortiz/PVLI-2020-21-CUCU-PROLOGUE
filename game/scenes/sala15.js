import SalaBase from "./sala_base.js";
import Prop from "../gameobject/prop.js";
import { cst } from "./cst.js";
import eventsCenter from "../eventsCenter.js"
import {npcs} from "./npcs.js"
export default class Sala15 extends SalaBase {
  constructor() {
    super(cst.SCENES.SALA15,[0, cst.SCENES.SALA11, 0, cst.SCENES.SALA16],false);
  }

  init(datos) {
    super.init(datos);
  }

  create() {
    super.create();
    this.camino = this.add.image(800, 400, "cucucamino1");
    this.camino.depth = 1;
    this.camino.angle = 90;
    this.tiendadisfraces = new Prop(this,1050,475,"tiendadisfraces",this.player,60,45,true,this.hablar,this);
  }
  update() {
    super.update();
  }

hablar = function () {
  eventsCenter.emit("thisKey", this._nombreSala);
  this.scene.launch("dialogo", {
    npc: npcs.NPCS.tienda_disfraces,
    prevKey: cst.SCENES.SALA15,
    objs: this.objetos,
  });
  this.scene.pause();
  this.player.resetInput();
}
}