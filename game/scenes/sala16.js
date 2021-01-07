import SalaBase from "./sala_base.js";
import Prop from "../gameobject/prop.js";
import {cst} from "./cst.js";
export default class Sala16 extends SalaBase{
    constructor(){
                          // <-        ^      -> v
        super(cst.SCENES.SALA16, [ cst.SCENES.SALA17,cst.SCENES.SALA15, 0, 0],false);
    }


    init(datos) {
          super.init(datos);
         
      }

    create(){
          super.create();
          this.camino = this.add.image(700, 400, "cucucamino3");
          this.camino.depth = 1;
        
                                  
          this.tiendaDr= new Prop(this, 1100, 210, "tiendarastroiz", this.player,1,60,35);
          this.tiendaIz= new Prop(this, 300, 200, "tiendarastrodr", this.player,1,60,40);
          
          
     }
    

     update(){
        super.update();
        
        
     }
}
