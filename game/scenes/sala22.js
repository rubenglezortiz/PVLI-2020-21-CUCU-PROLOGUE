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
    this.frio = new Prop (this, 400, 600,"frio2",this.player,60,50,true);
    this.tiendaropa = new Prop (this, 1150, 200,"tiendaderopa",this.player,80,50,true);
    this.frio.play("frio2",true);
  }  

  update() {
    super.update();
  }
}
