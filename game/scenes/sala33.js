import SalaBase from "./sala_base.js";
import {cst}from "./cst.js";

export default class Sala33 extends SalaBase{
    constructor(){
                        // <-          ^        ->        v
        super(cst.SCENES.SALA33, [cst.SCENES.SALA32, 0, 0, 0])
    }

    init(datos) {super.init(datos);}

    create(){
          super.create();
        //   this.camino = this.add.image(700, 400, "cucucamino4");
        //   this.camino.depth = 1;
     }
    

     update(){
        super.update();
        
     }
}