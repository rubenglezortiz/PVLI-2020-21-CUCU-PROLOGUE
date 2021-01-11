import SalaBase from "./sala_base.js";
import { cst } from "./cst.js";
import Prop from "../gameobject/prop.js";

export default class Sala36 extends SalaBase {
  constructor() {
    // <-          ^        ->        v
    super(cst.SCENES.SALA36,[cst.SCENES.SALA35, cst.SCENES.SALA37, 0, 0],false);
  }

  init(datos) {
    super.init(datos);
  }

  create() {
    super.create();
    this.camino=this.add.image(this.sys.game.canvas.width/2, this.sys.game.canvas.height/2, "pomponinacamino2");
    this.camino.flipX=true;
    this.comoda=new Prop(this,this.sys.game.canvas.width-200,this.sys.game.canvas.height/2,"comoda",this.player,1,60,50,true);
  }

  update() {
    super.update();
  }
}
