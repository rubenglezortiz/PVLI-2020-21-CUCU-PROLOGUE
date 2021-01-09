import SalaBase from "./sala_base.js";
import { cst } from "./cst.js";
import Prop from "../gameobject/prop.js";

export default class Sala34 extends SalaBase {
  constructor() {
    // <-          ^        ->        v
    super(cst.SCENES.SALA34,[cst.SCENES.SALA14, 0, cst.SCENES.SALA35, cst.SCENES.SALA0], false);
  }

  init(datos) {
    super.init(datos);
  }

  create() {
    super.create();     
    this.clienteBombones=new Prop(this, 300, this.sys.game.canvas.height-100,"clienteBombones2",this.player,1,60,50,true);
    this.anims.create({
      key:"clienteBombonesAnim",
      frames: this.anims.generateFrameNumbers("clienteBombones2",{
        start:0,
        end: 6,
      }),
      frameRate: 4,
      repeat: -1
    })        
 } 

  update() {
    super.update();
    this.clienteBombones.play("clienteBombonesAnim",true);
  }
}
