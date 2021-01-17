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
    this.camino= this.add.image(this.sys.game.canvas.width / 2 + 15,this.sys.game.canvas.height / 2,"donlindocamino5")
    this.camino.flipX=true; 
    this.bullying = new Prop (this, 300,300,"bullying",this.player,60,50,true,this.interactuarBully,this);
    this.frio = new Prop (this, 1000, 600,"frio1",this.player,60,50,true);
    if(!this.objetos[objs.OBJECTS.cartera])
    this.bullying.play("bullying",true);
    else this.bullying.play("bullying3",true)
    this.frio.play("frio1");
    
   
  } 
  
  update() {
    super.update();
    
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
    this.bullying.play("bullying2",false).on("animationcomplete",()=>{this.bullying.play("bullying3",true)});    
  }

}
//bullying2 bullying3
