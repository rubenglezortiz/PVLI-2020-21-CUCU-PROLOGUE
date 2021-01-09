import Prop from "../gameobject/prop.js";
import SalaBase from "./sala_base.js";
import { cst } from "./cst.js";
import { objs } from "./objeto.js";
import eventsCenter from "../eventsCenter.js";

export default class Sala0 extends SalaBase {
    // <-  ^   ->   v
  constructor() {
    super(cst.SCENES.SALA0,[cst.SCENES.SALA11, cst.SCENES.SALA34, cst.SCENES.SALA31, 0],false);
  }

  init(datos) {
    super.init(datos);
  }

  create() {
    super.create();
    this.caja = new Prop(this,300,250,"cajaCucu",this.player,7,60,50,true);
    this.camino = this.add.image(700, 400, "cucucamino4");
    this.camino.depth = 1;
    this.e = this.input.keyboard.addKey("E");
  }

  update() {
    super.update();
    if (this.physics.overlap(this.player, this.caja)) {
      if (Phaser.Input.Keyboard.JustDown(this.e)) {
        this.objetos[objs.OBJECTS.caja] = true;
        console.log(this.objetos[objs.OBJECTS.caja]);
        eventsCenter.emit("thisKey", this._nombreSala);
        this.scene.launch("dialogo", {
          npc: "caja",
          prevKey: cst.SCENES.SALA0,
        });
        this.scene.pause();
        this.player.resetInput();
      }
    } 
  }
}
