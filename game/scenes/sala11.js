import SalaBase from "./sala_base.js";
import { cst } from "./cst.js";

export default class Sala11 extends SalaBase {
  constructor() {
    super(cst.SCENES.SALA11,[cst.SCENES.SALA12,cst.SCENES.SALA13,cst.SCENES.SALA0,cst.SCENES.SALA15,],false);
  }

  init(datos) {
    super.init(datos);
    console.log(this);
  }

  create() {
    super.create();
    this.camino = this.add.image(this.window.w/2, this.window.h/2, "cucucamino4");
    this.camino.depth = 1;
  }

  update() {
    super.update();
  }
}
