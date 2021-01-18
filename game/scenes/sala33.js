import SalaBase from "./sala_base.js";
import { cst } from "./cst.js";
import Prop from "../gameobject/prop.js";
import eventsCenter from "../eventsCenter.js";
import { objs } from "./objeto.js";
export default class Sala33 extends SalaBase {
  constructor() {
    // <-          ^        ->        v
    super(cst.SCENES.SALA33, [cst.SCENES.SALA32, 0, 0, 0], false);
  }

  init(datos) {
    super.init(datos);
  }

  create() {
    super.create();
    this.camino= this.add.image(0,this.sys.game.canvas.height / 2,"pomponinacamino1")
    this.floristeria= new Prop(this,this.sys.canvas.width/2,100,"floristeria",this.player,80,50,false)
    if(this._runInfo._props_interactuables[1] === 0){
      this.jarron=new Prop(this, this.sys.canvas.width-300,this.sys.canvas.height-100,"jarron",this.player,60,45,true, this.mirarJarron, this);
    }
    else{
      this.jarron=new Prop(this, this.sys.canvas.width-300,this.sys.canvas.height-100,"jarron",this.player,60,45,false);
    }

    if(this._runInfo._props_interactuables[5] === 0){
      this.florista=new Prop(this, this.sys.canvas.width/2,350,"florista",this.player,60,45,true, this.hablarFlorista, this);
    }
    else{
      this.florista=new Prop(this, this.sys.canvas.width/2,350,"florista",this.player,60,45,false);

    }
    this.florista.play("florista",true);
    this.jarron.play("jarron",true);
   
  }

  update() {
    super.update();  
   
  }


  mirarJarron = function(){
    eventsCenter.emit("thisKey", this._nombreSala);
    this.objetos[objs.OBJECTS.llaveFlorista] = true;
    this._runInfo._props_interactuables[1] = 1;
    this.jarron.int = false;
    this.scene.launch("dialogo", {npc:"jarron",prevKey:cst.SCENES.SALA33,objs:this.objetos});
    this.scene.pause();
    this.player.resetInput();
  }

  hablarFlorista = function(){
    eventsCenter.emit("thisKey", this._nombreSala);
    this.scene.launch("dialogo", {npc:"florista",prevKey:cst.SCENES.SALA33,objs:this.objetos});
    this.scene.pause();
    this.player.resetInput();
    if (this.objetos[objs.OBJECTS.llaveFlorista])
      this.objetos[objs.OBJECTS.floresHijo] = true;
    if (this.objetos[objs.OBJECTS.hijoAyudado]){
      this.objetos[objs.OBJECTS.floresRosas] = true;
      this.florista.int = false;
      this._runInfo._props_interactuables[5] =1;
    }
  }
}
