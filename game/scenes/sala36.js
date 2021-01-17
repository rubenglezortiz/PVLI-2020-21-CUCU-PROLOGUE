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
    this.camino=this.add.image(this.sys.game.canvas.width/2, this.sys.game.canvas.height/2, "pomponinacamino2");
    this.camino.flipX=true;
    if(this._runInfo._props_interactuables[2] === 0){
      this.comoda=new Prop(this,this.sys.game.canvas.width-200,this.sys.game.canvas.height/2,"comoda",this.player,60,50,true, this.interactuarComoda, this);
    }
    else{
      this.comoda=new Prop(this,this.sys.game.canvas.width-200,this.sys.game.canvas.height/2,"comoda",this.player,60,50,false);
    }
    
  }

  update() {
    super.update();
//     if(this.physics.overlap(this.player, this.comoda)) {
//       if (Phaser.Input.Keyboard.JustDown(this.e)) {
//         eventsCenter.emit("thisKey", this._nombreSala);
//         this.scene.launch("dialogo", {npc:"comoda",prevKey:cst.SCENES.SALA36,objs:this.objetos});
//         this.scene.pause();
//         this.player.resetInput();
//         if (this.objetos[objs.OBJECTS.llaveComoda]) this.objetos[objs.OBJECTS.abanicoRoto] = true;
//   }
// }
  }


  interactuarComoda = function(){
    eventsCenter.emit("thisKey", this._nombreSala);
    this._runInfo._props_interactuables[2] =1;
        this.comoda.int = false;
        this.scene.launch("dialogo", {npc:"comoda",prevKey:cst.SCENES.SALA36,objs:this.objetos});
        this.scene.pause();
        this.player.resetInput();
        if (this.objetos[objs.OBJECTS.llaveComoda]) this.objetos[objs.OBJECTS.abanicoRoto] = true;
  }
}

