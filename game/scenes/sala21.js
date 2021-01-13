import SalaBase from "./sala_base.js";
import { cst } from "./cst.js";

export default class Sala21 extends SalaBase {
  constructor() {
    super(cst.SCENES.SALA21,[0,cst.SCENES.SALA0,cst.SCENES.SALA22,cst.SCENES.SALA24,],false);
  }

  init(datos) {
    super.init(datos);
    console.log(this);
  }

  create() {
    super.create();
  }

  update() {
    super.update();
  }
}
