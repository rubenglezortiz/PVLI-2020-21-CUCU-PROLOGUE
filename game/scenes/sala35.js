import SalaBase from "./sala_base.js";
import Prop from "../gameobject/prop.js";
import {cst}from "./cst.js";
import eventsCenter from "../eventsCenter.js";
import { objs } from "./objeto.js";
export default class Sala35 extends SalaBase{
    constructor(){
        super(cst.SCENES.SALA35, [cst.SCENES.SALA34, 0, cst.SCENES.SALA36, cst.SCENES.SALA32],false)
    }

   init(datos) {super.init(datos);}

   create(){
      super.create();
      this.camino= this.add.image(this.sys.game.canvas.width / 2+15,this.sys.game.canvas.height/2,"pomponinacamino5")  
      this.anticuario=new Prop(this,this.sys.game.canvas.width/2+100,0,"anticuario",this.player,100,100,false);
      this.encargado=new Prop(this,this.sys.game.canvas.width/2,500,"encargadoAnticuario",this.player,100,50,true);
      this.anims.create({
        key: "encargadoAnticuario",
        frames: this.anims.generateFrameNumbers("encargadoAnticuario", {
          start: 0,
          end: 6,
        }),
        frameRate: 4,
        repeat: -1,
      });
   }
    

   update(){
     super.update();       
     this.encargado.play("encargadoAnticuario",true);
     if(this.physics.overlap(this.player, this.encargado)) {
      if (Phaser.Input.Keyboard.JustDown(this.e)) {
        eventsCenter.emit("thisKey", this._nombreSala);
        this.scene.launch("dialogo", {npc:"encargadoAnticuario",prevKey:cst.SCENES.SALA35,objs:this.objetos});
        this.scene.pause();
        this.player.resetInput();
        if (!this.objetos[objs.OBJECTS.abanicoRoto]) this.objetos[objs.OBJECTS.collar] = true;
        else this.objetos[objs.OBJECTS.abanico] = true;
  }
}
    }
}