import SalaBase from "./sala_base.js";
import Prop from "../gameobject/prop.js";
import { cst } from "./cst.js";
export default class Sala16 extends SalaBase {
  constructor() {
    super(cst.SCENES.SALA16,[0, cst.SCENES.SALA15, cst.SCENES.SALA24, cst.SCENES.SALA17],false);
  }

  init(datos) {
    super.init(datos);
  }

  create() {
    super.create();
    this.camino = this.add.image(800, 400, "cucucamino1");
    this.camino.angle=90;
    this.camino.depth = 1;
    this.tiendaDr = new Prop(this,1100,210,"tiendarastroiz",this.player,1,60,35,false);
    this.tiendaIz = new Prop(this,300,200,"tiendarastrodr",this.player,1,60,40,false);
  }

  update() {
    super.update();
  }
}
