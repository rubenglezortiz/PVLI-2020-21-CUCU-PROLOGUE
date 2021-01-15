import SalaBase from "./sala_base.js";
import { cst } from "./cst.js";
import Prop from "../gameobject/prop.js";

export default class Sala22 extends SalaBase {
  constructor() {
    super(cst.SCENES.SALA22, [cst.SCENES.SALA21, 0, cst.SCENES.SALA23, cst.SCENES.SALA25], false);
  }

  init(datos) {
    super.init(datos);
  }

  create() {
    super.create();
    this.frio = new Prop (this, 1000, 800,"frio2",this.player,60,50,true);
    this.anims.create({
      key: "frio2",
      frames: this.anims.generateFrameNumbers("frio2", {
        start: 0,
        end: 15,
      }),
      frameRate: 4,
      repeat: -1,
    })
  }  

  update() {
    super.update();  
    this.frio.play("frio2",true);
  }
}
