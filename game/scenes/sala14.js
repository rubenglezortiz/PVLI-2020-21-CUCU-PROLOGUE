import SalaBase from "./sala_base.js";
import {cst} from "./cst.js";

export default class Sala14 extends SalaBase{
    constructor(){
                      // <-  ^   ->     v
        super(cst.SCENES.SALA14, [ 0, 0, cst.SCENES.SALA34, cst.SCENES.SALA13],false)
    }


    init(datos) {
          super.init(datos);
         
      }

    create(){
          super.create();
          this.camino = this.add.sprite(720, 580, "cucucamino2");
          console.log(this.camino);
          this.camino.scaleY *= -1;
          
     }
    

     update(){
        super.update();
       
        
     }
}
