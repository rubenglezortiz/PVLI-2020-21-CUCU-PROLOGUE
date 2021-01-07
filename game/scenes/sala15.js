import SalaBase from "./sala_base.js";
import Prop from "../gameobject/prop.js";
import{cst} from "./cst.js";

export default class Sala15 extends SalaBase{
    constructor(){
                      // <-  ^  ->     v
        super(cst.SCENES.SALA15, [ 0, cst.SCENES.SALA11, 0, cst.SCENES.SALA16],false);
    }


    init(datos) {
          super.init(datos);
         
      }

    create(){
          super.create();
          this.camino = this.add.image(800, 400, "cucucamino1");
          this.camino.depth = 1;
          this.camino.angle = 90;

          this.tiendadisfraces = new Prop(this, 1050, 475, "tiendadisfraces", this.player,1.1, 60, 35);
          this.tiendadisfracesE =  this.add.image(this.tiendadisfraces.x, this.tiendadisfraces.y -  this.tiendadisfraces.height, "teclaE");
          this.tiendadisfracesE.depth = 6;
          this.e = this.input.keyboard.addKey("E");
     }
    

     update(){
        super.update();
        if(this.physics.overlap(this.player, this.tiendadisfraces)) {
          this.tiendadisfracesE.visible = true;
          if (Phaser.Input.Keyboard.JustDown(this.e)) {
            console.log("Miraste a la tienda de disfraces");
          }
        }
        else{
          this.tiendadisfracesE.visible = false;
        }
        
     }
}
