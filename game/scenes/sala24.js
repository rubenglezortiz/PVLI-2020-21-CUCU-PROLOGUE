import SalaBase from "./sala_base.js";
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
  }

  update() {
    super.update();
  }
}
