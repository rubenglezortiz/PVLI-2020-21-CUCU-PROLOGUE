import SalaBase from "./sala_base.js";
import Prop from "../gameobject/prop.js";
import {cst} from "./cst.js";
import eventsCenter from "../eventsCenter.js";

export default class Sala12 extends SalaBase{
    constructor(){
                      // <-  ^     ->     v
        super(cst.SCENES.SALA12, [ 0, 0, cst.SCENES.SALA11, 0],false);
    }


    init(datos) {
          super.init(datos);
         
      }

    create(){
          super.create();
          this.bebe = new Prop(this, 1000, 300, "bebe", this.player,1, 60,50);
          this.add.image(300,400,"mesa").setScale(7);
          this.bebeE =  this.add.image(this.bebe.x, this.bebe.y -  this.bebe.height, "teclaE");
          this.bebeE.depth = 6;
          this.camino = this.add.image(1400, 400, "cucucamino1");
          this.camino.depth = 1;
          
         this.e = this.input.keyboard.addKey("E");
     }
    

     update(){
        super.update();

        if(this.physics.overlap(this.player, this.bebe)) {
          this.bebeE.visible = true;
          if (Phaser.Input.Keyboard.JustDown(this.e)) {
            eventsCenter.emit("thisKey", this._nombreSala);
            this.scene.launch("dialogo", {npc:"bebe",prevKey:cst.SCENES.SALA12});
            this.scene.pause();
            this.player.resetInput();
          }
        }
        else{
          this.bebeE.visible = false;
        }
        
     }
}
