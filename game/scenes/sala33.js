import SalaBase from "./sala_base.js";
import { cst } from "./cst.js";
import Prop from "../gameobject/prop.js";

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
    this.camino= this.add.image(0,this.sys.game.canvas.height / 2,"pomponinacamino1")
    this.florista=new Prop(this, this.sys.canvas.width/2,250,"florista",this.player,1,60,45,true);
    this.jarron=new Prop(this, this.sys.canvas.width-300,this.sys.canvas.height-100,"jarron",this.player,1,60,45,true);
    this.anims.create({
      key: "floristaAnim",
      frames: this.anims.generateFrameNumbers("florista",{
        start:0,
        end:6
      }),
      frameRate: 4,
      repeat: -1
    })
    this.anims.create({
      key: "jarron",
      frames: this.anims.generateFrameNumbers("jarron",{
        start:0,
        end:5
      }),
      frameRate: 6,
      repeat: -1
    })
  }

  update() {
    super.update();
    this.florista.play("floristaAnim",true);
    this.jarron.play("jarron",true);
  }
}
