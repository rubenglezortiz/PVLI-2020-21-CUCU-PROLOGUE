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
    this.camino= this.add.image(this.sys.game.canvas.width/2+90, -200,"donlindocamino1")
    this.camino.angle=90;
    this.taberna = new Prop(this,1050,475,"taberna",this.player,60,45,true);
  }

  update() {
    super.update();
  }
}
