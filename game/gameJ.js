import { Phaser } from "./phaser";

export default class Game extends Phaser.Scene {


 
  constructor() {
    super({ key: "main" });
  }
  preload() {    
    
    this.load.image('pigmalion','./resources/sprites/muneco.jpg')
  };
  
  create() {    
    this.add.text(10, 10, "¡Hola, mundo!", { fontColor: 0xffff00 });
    
    //let player= this.add.sprite(300,300,'pigmalion');
    
    player = this.physics.add.sprite (100, game.config.height / 2 , 'pigmalion');
    
    game.physics.ARCADE.
    //this.w= scene.input.keyboard.addKey('W');


    this.cursors = this.input.keyboard.addKeys(
      {up:Phaser.Input.Keyboard.KeyCodes.W,
      down:Phaser.Input.Keyboard.KeyCodes.S,
      left:Phaser.Input.Keyboard.KeyCodes.A,
      right:Phaser.Input.Keyboard.KeyCodes.D});
  
  }

  update(time, delta) {

    if(left.isDown) {
      player.x

   } else if(down.isDown) {
      console.log('S key pressed')
   } else if(right.isDown) {
      console.log('D key pressed')
   } else if(up.isDown) {
      console.log('W key pressed')
   }


//     if(this.w.isDown){
// console.log("me quiero morir");
    }



}

