import SalaBase from "./sala_base.js";
import Prop from "../gameobject/prop.js";
import { cst } from "./cst.js";

export default class Sala26 extends SalaBase {
  constructor() {
    super(cst.SCENES.SALA26,[0, cst.SCENES.SALA24, 0, cst.SCENES.SALA27],false);
  }

  init(datos) {
    super.init(datos);
  }

  create() {
    super.create();
    this.camino= this.add.image(this.sys.game.canvas.width / 2 + 90,this.sys.game.canvas.height / 2,"donlindocamino1")
    this.camino.angle=90;
    this.fotoPomponina = new Prop (this, 300,300,"fotopomponina",this.player,60,50,true);
  }

  update() {
    super.update();
  }
}
