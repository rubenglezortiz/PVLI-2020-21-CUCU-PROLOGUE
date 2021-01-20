import SalaBase from "./sala_base.js";
import { cst } from "./cst.js";
import Prop from "../gameobject/prop.js";
import eventsCenter from "../eventsCenter.js";
import { objs } from "./objeto.js";
export default class Sala36 extends SalaBase {
  constructor() {
    // <-          ^        ->        v
    super(cst.SCENES.SALA36,[cst.SCENES.SALA35, cst.SCENES.SALA37, 0, 0],false);
  }

  init(datos) {
    super.init(datos);
  }

  create() {
    super.create();
    this.camino=this.add.image(this.window.w/2, this.window.h/2, "pomponinacamino2");
    this.camino.flipX=true;
    if(this._runInfo._props_interactuables[2] === 0){
      this.comoda=new Prop(this,this.window.w-200,this.window.h/2,"comoda",this.player,60,50,true, this.interactuarComoda, this);
    }
    else{
      this.comoda=new Prop(this,this.window.w-200,this.window.h/2,"comoda",this.player,60,50,false);
    }
    
  }

  update() {
    super.update();
  }


  interactuarComoda = function(){
    eventsCenter.emit("thisKey", this._nombreSala);
    
        this.scene.launch("dialogo", {npc:"comoda",prevKey:cst.SCENES.SALA36,objs:this.objetos});
        this.scene.pause();
        this.player.resetInput();
        if (this.objetos[objs.OBJECTS.llaveComoda]){
          this.objetos[objs.OBJECTS.abanicoRoto] = true;
          this.comoda.int = false;
          this._runInfo._props_interactuables[2] =1;
        } 
  }
}

