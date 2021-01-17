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
    this.chulapos = new Prop(this,1100,300,"chulapos",this.player,60,50,true);
    this.chulapos.play("chulapos", true);
    this.caballo = new Prop(this,700,350,"caballo",this.player,60,50,false);    


    this.musicConfig = {
      mute: false,
      volume: 0.2,
      rate:1,
      detune:0,
      seek:0,
      loop:true,
      delay: 0
     }


     this.tweens.add({
       targets: this.sound.sounds[0],
       volume: 0,
       ease: 'Power1',
       duration: 2000
     })
     //hay que lanzar este pasue dentro de 2 segundos
     this.sound.sounds[0].pause();
     
     this.chotis = this.sound.add('chotis', this.musicConfig);
     this.chotis.play(this.chotis);
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
