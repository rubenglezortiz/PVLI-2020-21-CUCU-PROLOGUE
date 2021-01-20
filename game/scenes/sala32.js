import SalaBase from "./sala_base.js";
import { cst } from "./cst.js";
import Prop from "../gameobject/prop.js";
import eventsCenter from "../eventsCenter.js";
import { objs } from "./objeto.js";
import {npcs} from "./npcs.js"
export default class Sala32 extends SalaBase {
  constructor() {
    super(cst.SCENES.SALA32,[cst.SCENES.SALA31,cst.SCENES.SALA35,cst.SCENES.SALA33,cst.SCENES.SALA23,],false);
  }

  init(datos) {
    super.init(datos);
  }

  create() {
    super.create();
    this.camino = this.add.image(this.window.w/ 2 + 15,this.window.h / 2,"pomponinacamino6");
    if(this._runInfo._props_interactuables[0] === 0){
      this.fuente = new Prop(this,this.window.w / 2,this.window.h / 2,"fuente",this.player,60,45,true, this.interactuarFuente,  this);
    }
    else{
      this.fuente = new Prop(this,this.window.w / 2,this.window.h / 2,"fuente",this.player,60,45,false);
    }
    this.fuente.play("fuente", true);
    this.hijoFlorista = new Prop(this,this.window.w / 2,600,"hijo_florista",this.player,60,50,true,this.hablarHijoFlorista, this);
    this.hijoFlorista.play("hijo_florista", true);
    
    if(this._runInfo._props_interactuables[4] === 0){
      this.cliente = new Prop(this,1150,700,"cliente_bombones1",this.player,60,50,true,this.hablarCliente, this);
    }
    else{
      this.cliente = new Prop(this,1150,700,"cliente_bombones1",this.player,60,50,false);
    }
    this.cliente.play("cliente_bombones1", true);
  }

  update() {
    super.update();   
  }


  hablarCliente = function(){
    eventsCenter.emit("thisKey", this._nombreSala);
    this.scene.launch("dialogo", {
       npc: "cliente",
       prevKey: cst.SCENES.SALA32,
      objs: this.objetos,
    });
    this.scene.pause();
    this.player.resetInput();
    if (this.objetos[objs.OBJECTS.repartoBombones]){
      this.cliente.int = false;
      this._runInfo._props_interactuables[4] =1;
      this.objetos[objs.OBJECTS.bombonesRepartidos1] = true;
    }
        
  }

  hablarHijoFlorista = function(){
    eventsCenter.emit("thisKey", this._nombreSala);
    this.scene.launch("dialogo", {
      npc:  npcs.NPCS.hijoFlorista,
      prevKey: cst.SCENES.SALA32,
      objs: this.objetos,
    });
    this.scene.pause();
    this.player.resetInput();
    if (this.objetos[objs.OBJECTS.floresHijo])
      this.objetos[objs.OBJECTS.hijoAyudado] = true;
  }

  interactuarFuente = function(){
    eventsCenter.emit("thisKey", this._nombreSala);
    this.scene.launch("dialogo", {
      npc: npcs.NPCS.fuente,
      prevKey: cst.SCENES.SALA32,
      objs: this.objetos,
    });
    this._runInfo._props_interactuables[0] = 1;
    this.fuente.int = false;
    this.scene.pause();
    this.player.resetInput();
    this.objetos[objs.OBJECTS.llaveComoda] = true;
    console.log("objeto recibido de la fuente");
  }
}
