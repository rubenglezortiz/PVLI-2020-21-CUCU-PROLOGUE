import SalaBase from "./sala_base.js";
import { cst } from "./cst.js";
import Prop from "../gameobject/prop.js";
import eventsCenter from "../eventsCenter.js";
import{npcs} from "./npcs.js";
import { objs } from "./objeto.js";

export default class Sala22 extends SalaBase {
  constructor() {
    super(cst.SCENES.SALA22, [cst.SCENES.SALA21, 0, cst.SCENES.SALA23, cst.SCENES.SALA25], false);
  }

  init(datos) {
    super.init(datos);
  }

  create() {
    super.create();
    this.camino= this.add.image(this.window.w / 2 + 15,this.window.h / 2,"donlindocamino3")
    if(this._runInfo._props_interactuables[8] === 0){
      this.frio = new Prop (this, 400, 600,"frio2",this.player,60,50,true,this.interactuarPersonaFrio,this);
    }
    else{
      this.frio = new Prop (this, 400, 600,"frio2gorro",this.player,60,50,false);
    }
    this.tiendaropa = new Prop (this, 1150, 200,"tiendaderopa",this.player,80,50,false);
    this.dependienteropa= new Prop(this,1150,350,"dependiente_ropa",this.player,60,50,true,this.interactuarDepRopa,this);
    this.dependienteropa.play("dependiente_ropa",true);

    if(this._runInfo._props_interactuables[8] === 0){
      this.frio.play("frio2");
    }
    else{
      this.frio.play("frio2gorro");
    }
  }  

  update() {
    super.update();
  }

  interactuarDepRopa = function(){
    eventsCenter.emit("thisKey", this._nombreSala);
    this.scene.launch("dialogo", {npc:npcs.NPCS.dependiente_ropa, prevKey:cst.SCENES.SALA22,objs:this.objetos});
    this.scene.pause();
    this.player.resetInput();    
    this.objetos[objs.OBJECTS.gorrosARepartir] = true;
  }
  
  interactuarPersonaFrio = function(){
    eventsCenter.emit("thisKey", this._nombreSala);
    this.scene.launch("dialogo", {npc:npcs.NPCS.frio2, prevKey:cst.SCENES.SALA22,objs:this.objetos});
    this.scene.pause();
    this.player.resetInput();
    if(this.objetos[objs.OBJECTS.gorrosARepartir]){
      this.frio.int = false;
      this._runInfo._props_interactuables[8] = 1;
      this.objetos[objs.OBJECTS.gorroRepartido2] = true;
      this.frio.play("frio2gorro");
    }
  }
}
