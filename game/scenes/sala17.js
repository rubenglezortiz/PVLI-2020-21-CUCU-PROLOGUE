import SalaBase from "./sala_base.js";
import Prop from "../gameobject/prop.js";
import { cst } from "./cst.js";

export default class Sala17 extends SalaBase {
  constructor() {
    super(cst.SCENES.SALA17, [0, cst.SCENES.SALA16, 0, 0], false);
  }

  init(datos) {
    super.init(datos);
  }

  create() {
    super.create();
    this.camino = this.add.image(700, 400, "cucucamino5");
    this.carreta = new Prop(this,1500,100,"carreta",this.player,1,60,50,false);
    if (this._runInfo._monecos[0] === 0) {
      this.cucu = new Prop(this,1200,this.sys.game.canvas.height / 2,"cucuIdle",this.player,1,60,50,true);
      this.anims.create({
        key: "cucuIdle",
        frames: this.anims.generateFrameNumbers("cucuIdle", {
          start: 0,
          end: 6,
        }),
        frameRate: 4,
        repeat: -1,
      });
      this.e = this.input.keyboard.addKey("E");
    }
  }

  update() {
    super.update();    
    if (this._runInfo._monecos[0] === 0) {
      this.cucu.play("cucuIdle", true);
      if (this.physics.overlap(this.player, this.cucu)) {
        if (Phaser.Input.Keyboard.JustDown(this.e)) {
          this.scene.start(cst.SCENES.SALA18CUCU, {
            posx: 200,
            posy: this.sys.game.canvas.height / 2 + this.player.height / 2,
            lives: this.player.lives,
            objs: this.objetos,
            runInf:this._runInfo
          });
        }
      }
    }
  }
}
