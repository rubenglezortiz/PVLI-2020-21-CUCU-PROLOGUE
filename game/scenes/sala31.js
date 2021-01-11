import SalaBase from "./sala_base.js";
import Prop from "../gameobject/prop.js";
import {cst}from "./cst.js";

export default class Sala31 extends SalaBase{
  constructor(){
    super(cst.SCENES.SALA31, [cst.SCENES.SALA0, 0, cst.SCENES.SALA32, 0],false)
  }


  init(datos) {
    super.init(datos);         
  }

  create(){
    super.create();
    this.camino= this.add.image(this.sys.game.canvas.width / 2,this.sys.game.canvas.height / 2,"pomponinacamino1")
    this.tiendaBombones = new Prop(this,500,200,"tiendabombones",this.player,1,80,50);
    this.abuela = new Prop(this, 575, 325,"abuela",this.player,1,60,50,true);       
    this.anims.create({
          key:"abuelaAnim",
          frames: this.anims.generateFrameNumbers("abuela",{
            start:0,
            end: 6,
          }),
          frameRate: 4,
          repeat: -1
    })        
 }

  update(){
    super.update();
      this.abuela.play("abuelaAnim",true);
    }
}