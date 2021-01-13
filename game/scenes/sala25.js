import SalaBase from "./sala_base.js";
import Prop from "../gameobject/prop.js";
import { cst } from "./cst.js";

export default class Sala25 extends SalaBase {
  constructor() {
    super(cst.SCENES.SALA25,[0, cst.SCENES.SALA22, 0, 0],false);
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
