import SalaBase from "./sala_base.js";
import Prop from "../gameobject/prop.js";
import { cst } from "./cst.js";

export default class Sala13 extends SalaBase {
  constructor() {
    super(cst.SCENES.SALA13,[0, cst.SCENES.SALA14, 0, cst.SCENES.SALA11],false);
  }

  init(datos) {
    super.init(datos);
  }

  create() {
    super.create();
    this.camino = this.add.image(800, 400, "cucucamino1");
    this.camino.depth = 1;
    this.camino.angle = 90;
    this.chulapos = new Prop(this,1100,300,"chulapos",this.player,1,60,50,true);
    this.chulapos.play("chulapos",true);
    this.caballo = new Prop(this,700,350,"caballo",this.player,1,60,50,false);

    this.chotis = this.sound.add('chotis');    
     this.musicConfig = {
      mute: false,
      volume: 1,
      rate:1,
      detune:0,
      seek:0,
      loop:true,
      delay: 0
     }

     this.chotis.play(this.musicConfig);


  }

  update() {
    super.update();
    if (this.chulapos.propE.visible /*this.physics.overlap(this.player, this.caja)*/) {
      if (Phaser.Input.Keyboard.JustDown(this.e)) {
        //interacciones
      }
    } 
  }
}
