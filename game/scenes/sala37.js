import SalaBase from "./sala_base.js";
import {cst}from "./cst.js";

export default class Sala37 extends SalaBase{
    constructor(){
                        // <-          ^        ->        v
        super(cst.SCENES.SALA37, [0, 0, 0, cst.SCENES.SALA36])
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