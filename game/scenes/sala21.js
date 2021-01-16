import SalaBase from "./sala_base.js";
import { cst } from "./cst.js";
import Prop from "../gameobject/prop.js";

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
    this.camino= this.add.image(this.sys.game.canvas.width / 2 + 15,this.sys.game.canvas.height / 2,"donlindocamino5")
    this.casa=new Prop(this,400,200,"casa",this.player,60,50,false);
  }
    
  update() {
    super.update();
  }
}
