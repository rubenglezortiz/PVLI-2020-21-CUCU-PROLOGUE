export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: "main" });
  }
  preload() {
    this.load.spritesheet(
      'pigmalion', './resources/sprites/pigmalion.png', { frameWidth: 128, frameHeight: 128  }); // spritesheet 384x512
  };

  create() {
    this.add.text(10, 10, "¡Hola, mundo!", { fontColor: 0xffff00 });
    //como que var hijo de puta que el cleon nos suspender, hay que usar let desgraciado
  
   this.player= this.add.sprite(300,300,'pigmalion');
   
    this.anims.create({
    key: 'walk',
    frames: this.anims.generateFrameNumbers('pigmalion', { start: 0, end: 0 }),
    frameRate: 20,
    repeat: 1
  });


   this.anims.create({
    key: 'walk',
    frames: this.anims.generateFrameNumbers('pigmalion', { start: 0, end: 9 }),
    frameRate: 20,
    repeat: 0
  });
 
  this.player.anims.play('walk');

    this.w= this.input.keyboard.addKey('W');
    this.a=this.input.keyboard.addKey('A');
    this.s=this.input.keyboard.addKey('S');
    this.d=this.input.keyboard.addKey('D');

    this.cameras.main.startFollow(this.player);
    const width = 1400;
    const height = 800;
  }

  update(time, delta) {
   if(this.w.isDown) this.player.y-=4;
   if(this.a.isDown) this.player.x-=4;
   if(this.s.isDown){
      this.player.y+=4;
      this.player.anims.play('walk');
   }
   if(this.d.isDown) this.player.x+=4;
   
   if(this.player.x < 0)  {     
     this.player.x = width-1;
   }  
   if(this.player.x > 1400)  {    
    this.player.x = 1;
  }
  if(this.player.y < 0)  {    
    this.player.y = height-1;
  }
  if(this.player.y > 0)  {   
    this.player.y = 1;
  }
    // if(this.w.isDown){
    //   player.setVelocityX(-160);
    // }
    // // if(this.w.isDown){
    // //   console.log("me quiero morir");
    // // }
    // this.console.log('2df');
    // console.log("kshfeiu");
  }
}
