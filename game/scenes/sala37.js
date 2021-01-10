import SalaBase from "./sala_base.js";
import {cst}from "./cst.js";
import Prop from "../gameobject/prop.js";

export default class Sala37 extends SalaBase{
    constructor(){
                        // <-          ^        ->        v
        super(cst.SCENES.SALA37, [0, 0, 0, cst.SCENES.SALA36],false)
    }

    init(datos) {super.init(datos);}

    create(){
      super.create();  
      if (this._runInfo._monecos[2] === 0) {
        this.pomponina=new Prop(this,1200,this.sys.game.canvas.height/2,"pomponinaIdl",this.player,1,60,50,true)
        this.anims.create({
        key: "pomponinaIdle",
        frames: this.anims.generateFrameNumbers("pomponinaIdl",{
          start:0,
          end:12
        }),
        frameRate: 4,
        repeat: -1
        });
        this.e = this.input.keyboard.addKey("E");    
      }
     }
    

     update(){
        super.update();        
        if (this._runInfo._monecos[2] === 0) {
          this.pomponina.play("pomponinaIdle",true);  
          if (this.physics.overlap(this.player, this.pomponina)) {
            if (Phaser.Input.Keyboard.JustDown(this.e)) {
              this.scene.start(cst.SCENES.SALA38POMPONINA, {
              posx: 200,
              posy: this.sys.game.canvas.height / 2 + this.player.height/2,
              lives: this.player.lives,
              objs:this.objetos,
              runInf:this._runInfo
            });
          }
        }
      }    
    }
     
}