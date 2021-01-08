import SalaBase from "./sala_base.js";
import Prop from "../gameobject/prop.js";
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
        this.tiendaBombones = new Prop(this,500,200,"tiendabombones",this.player,1,80,50);
        this.abuela = new Prop(this, 575, 325,"abuela",this.player,1,60,50);
        this.abuelaE = this.add.image(
          this.abuela.x,
          this.abuela.y - this.abuela.height + 50,
          "teclaE"
        );
        this.abuelaE.depth = 6;
        this.anims.create({
          key:"abuelaAnim",
          frames: this.anims.generateFrameNumbers("abuela",{
            start:0,
            end: 6,
          }),
          frameRate: 4,
          repeat: -1,
        })
        this.e = this.input.keyboard.addKey("E", false);
     }
    

     update(){
        super.update();
        this.abuela.play("abuelaAnim",true);
        if (this.physics.overlap(this.player, this.abuela)) {
          this.abuelaE.visible = true;
          if(Phaser.Input.Keyboard.JustDown(this.e)){
            console.log("Hablaste con la abuela");
          }
        } else {
          this.abuelaE.visible = false;
        }
        
     }
}