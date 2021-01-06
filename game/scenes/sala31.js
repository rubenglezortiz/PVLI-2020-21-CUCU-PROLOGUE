import SalaBase from "./sala_base.js";
import {cst}from "./cst.js";

export default class Sala31 extends SalaBase{
    constructor(){
                        // <-          ^        ->        v
        super(cst.SCENES.SALA31, [cst.SCENES.SALA0, 0, cst.SCENES.SALA32, 0],false)
    }


    init(datos) {
          super.init(datos);
         
      }

    create(){
          super.create();
        //   this.camino = this.add.image(700, 400, "cucucamino4");
        //   this.camino.depth = 1;
     }
    

     update(){
        super.update();
        
     }
}