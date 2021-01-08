import SalaBase from "./sala_base.js";
import { cst } from "./cst.js";

export default class Sala33 extends SalaBase {
  constructor() {
    // <-          ^        ->        v
    super(cst.SCENES.SALA33, [cst.SCENES.SALA32, 0, 0, 0], false);
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
