import SalaBase from "./sala_base.js";
import Prop from "../gameobject/prop.js";
import {cst}from "./cst.js";

export default class Sala35 extends SalaBase{
    constructor(){ // <-          ^        ->        v
        super(cst.SCENES.SALA35, [cst.SCENES.SALA34, 0, cst.SCENES.SALA36, cst.SCENES.SALA32],false)
    }

   init(datos) {super.init(datos);}

   create(){
      super.create();
      this.anticuario=new Prop(this,this.sys.game.canvas.width/2+100,0,"anticuario",this.player,1,100,100)
    
        
   }
    

   update(){
     super.update();        
    }
}