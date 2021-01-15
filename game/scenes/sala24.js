import SalaBase from "./sala_base.js";
import Prop from "../gameobject/prop.js";
import { cst } from "./cst.js";

export default class Sala24 extends SalaBase {
  constructor() {  
    super(cst.SCENES.SALA24,[cst.SCENES.SALA16, cst.SCENES.SALA21, 0, cst.SCENES.SALA26],false);
  }

  init(datos) {
    super.init(datos);
  }

  create() {
    super.create();
    this.bullying = new Prop (this, 300,300,"bullying",this.player,60,50,true);
    this.frio = new Prop (this, 1000, 800,"frio1",this.player,60,50,true);
    this.anims.create({
      key: "bullying",
      frames: this.anims.generateFrameNumbers("bullying", {
        start: 0,
        end: 20,
      }),
      frameRate: 8,
      repeat: -1,
    })
    this.anims.create({
      key: "frio1",
      frames: this.anims.generateFrameNumbers("frio1", {
        start: 0,
        end: 15,
      }),
      frameRate: 4,
      repeat: -1,
    })
  } 
  e

  update() {
    super.update();
    this.bullying.play("bullying",true);
    this.frio.play("frio1",true);
  }
}
