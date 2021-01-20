import SalaBase from "./sala_base.js";
import Prop from "../gameobject/prop.js";
import { cst } from "./cst.js";
import { npcs } from "./npcs.js";
import eventsCenter from "../eventsCenter.js"
import { objs } from "./objeto.js";


export default class Sala25 extends SalaBase {
  constructor() {
    super(cst.SCENES.SALA25,[0, cst.SCENES.SALA22, 0, 0],false);
  }

  init(datos) {
    super.init(datos);
  }

  create() {
    super.create();
    this.camino= this.add.image(this.window.w/2+90, -200,"donlindocamino1")
    this.camino.angle=90;
    this.taberna = new Prop(this,1050,300,"taberna",this.player,60,45,false);
    this.tabernero= new Prop(this,1050,500,"tabernero",this.player,60,45,true,this.talkTabernero,this)
    this.tabernero.play("tabernero");
  }

  update() {
    super.update();
  }

  talkTabernero = function(){
    eventsCenter.emit("thisKey", this._nombreSala);
    this.scene.launch("dialogo", {npc:npcs.NPCS.tabernero, prevKey:cst.SCENES.SALA25,objs:this.objetos});
    this.scene.pause();
    this.player.resetInput();
  }

}
