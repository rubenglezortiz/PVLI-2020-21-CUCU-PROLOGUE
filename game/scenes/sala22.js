import SalaBase from "./sala_base.js";
import { cst } from "./cst.js";
import Prop from "../gameobject/prop.js";

export default class Sala22 extends SalaBase {
  constructor() {
    super(cst.SCENES.SALA22, [cst.SCENES.SALA21, 0, cst.SCENES.SALA23, cst.SCENES.SALA25], false);
  }

  init(datos) {
    super.init(datos);
  }

  create() {
    super.create();
    this.camino= this.add.image(this.sys.game.canvas.width / 2 + 15,this.sys.game.canvas.height / 2,"donlindocamino3")
    this.frio = new Prop (this, 400, 600,"frio2",this.player,60,50,true);
    this.tiendaropa = new Prop (this, 1150, 200,"tiendaderopa",this.player,80,50,false);
    this.frio.play("frio2",true);
  }  

  update() {
    super.update();
  }
}
