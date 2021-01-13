import SalaBase from "./sala_base.js";
import Prop from "../gameobject/prop.js";
import { cst } from "./cst.js";
import eventsCenter from "../eventsCenter.js";

export default class Sala22 extends SalaBase {
  constructor() {
    super(cst.SCENES.SALA22, [cst.SCENES.SALA16, 0, cst.SCENES.SALA23, cst.SCENES.SALA25], false);
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
