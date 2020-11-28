import {cst} from "../cst.js"
import Pigmalion from "../gameobject/pigmalion.js"
 
export default class Sala0 extends Phaser.Scene {
  constructor() {
    super({ key: "Sala0" });
  }
  preload() {
  };

  create() {
    //this.add.text(10, 10, "¡Hola, mundodasddsasafda!", { fontColor: 0xffff00 });
    let { width, height } = this.sys.game.canvas;
    let edificio = this.physics.add.sprite(0,175,'objetovacio');
   this.add.image(700,400,'background');

   this.player= new Pigmalion(this, 300, 300, 'pigmalion');
   this.player.create();
   
    


  this.physics.add.collider(this.player, edificio);
  
    
  }

  update(time, delta) {

    this.player.update();
  }


}
