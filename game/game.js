import {cst} from "./cst.js"
import Pigmalion from "./pigmalion.js"
 
export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: "main" });
  }
  preload() {
    
    this.load.spritesheet(    
      'pigmalion', './resources/sprites/pigmalion.png', { frameWidth: 192, frameHeight: 192  });
       // spritesheet 384x512
       this.load.image('background', './resources/sprites/background.png');
       this.load.image('objetovacio', './resources/sprites/objetovacio.png');
  };

  create() {
    //this.add.text(10, 10, "¡Hola, mundodasddsasafda!", { fontColor: 0xffff00 });
    let { width, height } = this.sys.game.canvas;
    //como que var hijo de puta que el cleon nos suspender
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
