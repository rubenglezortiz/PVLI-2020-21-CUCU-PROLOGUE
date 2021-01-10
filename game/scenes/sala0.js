import Prop from "../gameobject/prop.js";
import SalaBase from "./sala_base.js";
import { cst } from "./cst.js";
import { objs } from "./objeto.js";
import eventsCenter from "../eventsCenter.js";
import RunInfo from "../runInfo.js";

export default class Sala0 extends SalaBase {
  // <-  ^   ->   v
  constructor() {
    super(
      cst.SCENES.SALA0,
      [
        cst.SCENES.SALA11,
        cst.SCENES.SALA18CUCU /*cst.SCENES.SALA34*/,
        cst.SCENES.SALA31,
        0,
      ],
      false
    );
  }

  init(datos) {
    super.init(datos);
    console.log(this);
  }

  create() {
    super.create();
    let offset = 0;
    this.cajas();

    this.camino = this.add.image(700, 400, "cucucamino4");
    this.camino.depth = 1;
  }

  update() {
    super.update();
    console.log();
    // if (
    //   this.caja.propE.visible /*this.physics.overlap(this.player, this.caja)*/
    // ) {
    //   if (Phaser.Input.Keyboard.JustDown(this.e)) {
    //     this.objetos[objs.OBJECTS.caja] = true;
    //     console.log(this.objetos[objs.OBJECTS.caja]);
    //     eventsCenter.emit("thisKey", this._nombreSala);
    //     this.scene.launch("dialogo", {
    //       npc: "caja",
    //       prevKey: cst.SCENES.SALA0,
    //       objs: this.objetos,
    //     });
    //     this.scene.pause();
    //     this.player.resetInput();
    //   }
    // }
  }

  cajas() {
    this.monecoA = ["cucu", "donLindo", "pomponina"];
    this.infoA = [{ x: 300, y: 250, moneco:"cucu" },{ x: 1100, y: 250, moneco: "donLindo" },{ x: 300, y: 850,moneco: "pomponina" },];
    this.objA = [];
    for (let i = 0; i < 3; ++i) {      
        if (this._runInfo._monecos[i] === 0) {
          this.objA[i]=new Prop(this,this.infoA[i].x,this.infoA[i].y,"caja",this.player,1,60,50,false);
        } else if (this._runInfo._monecos[i] === 1) {
          this.objA[i]=new Prop(this,this.infoA[i].x,this.infoA[i].y,"cajaCerrada",this.player,1,60,50,false);
        } else {
          this.objA[i]=new Prop(this,this.infoA[i].x,this.infoA[i].y,this.infoA[i].moneco,this.player,1,60,50,false);
        }      
    }
  }
}
