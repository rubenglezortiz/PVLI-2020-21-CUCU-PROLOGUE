import SalaBase from "./sala_base.js";
import Prop from "../gameobject/prop.js";
import eventsCenter from "../eventsCenter.js";
import { cst } from "./cst.js";
import{npcs} from "./npcs.js";
import { objs } from "./objeto.js";
export default class Sala31 extends SalaBase {
  constructor() {
    super(
      cst.SCENES.SALA31,
      [cst.SCENES.SALA0, 0, cst.SCENES.SALA32, 0],
      false
    );
  }

  init(datos) {
    super.init(datos);
  }

  create() {
    super.create();
    this.camino = this.add.image(this.window.w / 2,this.window.h / 2,"pomponinacamino1");
    this.tiendaBombones = new Prop(this,500,200,"tiendabombones",this.player,80,50);
    this.abuela = new Prop(this,575,325,"abuela",this.player,60,50,true,this.hablar,this);
    this.abuela.play("abuela", true);
  }

  update() {
    super.update();
  }

  hablar = function () {
    eventsCenter.emit("thisKey", this._nombreSala);
    this.objetos[objs.OBJECTS.repartoBombones] = true;
    this.scene.launch("dialogo", {
      npc: npcs.NPCS.abuela,
      prevKey: cst.SCENES.SALA31,
      objs: this.objetos,
    });
    this.scene.pause();
    this.player.resetInput();
    if (
      this.objetos[objs.OBJECTS.bombonesRepartidos1] &&
      this.objetos[objs.OBJECTS.bombonesRepartidos2]
    )
      this.objetos[objs.OBJECTS.bombonesPomponina] = true;
  };
}
