import SalaBase from "./sala_base.js";
import {cst}from "./cst.js";
import Prop from "../gameobject/prop.js";
import eventsCenter from "../eventsCenter.js"
export default class Sala37 extends SalaBase{
    constructor(){
      super(cst.SCENES.SALA37, [0, 0, 0, cst.SCENES.SALA36],false)
    }

    init(datos) {super.init(datos);}

    create(){
      super.create();  
      this.camino= this.add.image(this.window.w/2+90,this.window.h+350,"pomponinacamino1")
      this.camino.angle=90;
      if (this._runInfo._monecos[2] === 0) {
        this.pomponina=new Prop(this,1200,this.window.h/2,"pomponina_idl",this.player,60,50,true, this.comienzaCombate, this);
        this.pomponina.play("pomponina_idl",true);  
        this.e = this.input.keyboard.addKey("E");    
      }
     }
    

     update(){
        super.update();        
      }   
    
      comienzaCombate = function(){
        eventsCenter.emit("thisKey", this._nombreSala);
        this.scene.launch("dialogo", {
          npc: "pomponina",
          prevKey: cst.SCENES37,
          objs: this.objetos,
          runInf: this._runInfo,
          player: this.player,
        });
        this.scene.pause();
        this.player.resetInput();
      }

}
