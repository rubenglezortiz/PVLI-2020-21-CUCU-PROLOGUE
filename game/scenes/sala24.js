import SalaBase from "./sala_base.js";
import Prop from "../gameobject/prop.js";
import { cst } from "./cst.js";
import { npcs } from "./npcs.js";
import eventsCenter from "../eventsCenter.js"
import { objs } from "./objeto.js";
export default class Sala24 extends SalaBase {
  constructor() {  
    super(cst.SCENES.SALA24,[cst.SCENES.SALA16, cst.SCENES.SALA21, 0, cst.SCENES.SALA26],false);
  }

  init(datos) {
    super.init(datos);
  }

  create() {
    super.create();
    this.camino= this.add.image(this.window.w / 2 + 15,this.window.h / 2,"donlindocamino5")
    this.camino.flipX=true; 
    if(this._runInfo._props_interactuables[9] === 0){
      this.bullying = new Prop (this, 300,300,"bullying",this.player,60,50,true,this.interactuarBully,this);
    }
    else{
      this.bullying = new Prop (this, 300,300,"bullying",this.player,60,50,false);
    }

    if(this._runInfo._props_interactuables[7] === 0){
      this.frio = new Prop (this, 1000, 600,"frio1",this.player,60,50,true,this.interactuarPersonaFrio1,this);
    }
    else{
      this.frio = new Prop (this, 1000, 600,"frio1gorro",this.player,60,50,false);

    }

    console.log(this);
    if(this._runInfo._props_interactuables[9] === 0){
      this.bullying.play("bullying",true);
    }
    else
    {
      this.bullying.play("bullying3",true)
    } 

    if(this._runInfo._props_interactuables[7] === 0){
      this.frio.play("frio1");
    }
    else{
      this.frio.play("frio1gorro");
    }
   

    
  } 
  
  update() {
    super.update();
  }

  interactuarPersonaFrio1 = function(){
    eventsCenter.emit("thisKey", this._nombreSala);
    this.scene.launch("dialogo", {npc:npcs.NPCS.frio1, prevKey:cst.SCENES.SALA24,objs:this.objetos});
    this.scene.pause();
    this.player.resetInput();
    if(this.objetos[objs.OBJECTS.gorrosARepartir]){
      this.objetos[objs.OBJECTS.gorroRepartido1] = true;
      this.frio.int = false;
      this._runInfo._props_interactuables[7] = 1;
      this.frio.play("frio1gorro");
    }
    
  }

  interactuarBully = function(){
    eventsCenter.emit("thisKey", this._nombreSala);
    this.scene.launch("dialogo", {
      npc: npcs.NPCS.bullying,
      prevKey: cst.SCENES.SALA24,
      objs: this.objetos,
    });
    this.scene.pause();
    this.player.resetInput();
    this.objetos[objs.OBJECTS.cartera] = true;   
    this.bullying.int = false;
    this._runInfo._props_interactuables[9] = 1;
    this.bullying.play("bullying2",false).on("animationcomplete",()=>{this.bullying.play("bullying3",true)});    
  }

}