import SalaBase from "./sala_base.js";
import Prop from "../gameobject/prop.js";
import { cst } from "./cst.js";

export default class Sala23 extends SalaBase {
  constructor() {
    super(cst.SCENES.SALA23,[cst.SCENES.SALA22,cst.SCENES.SALA32 , 0, 0],false);
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
