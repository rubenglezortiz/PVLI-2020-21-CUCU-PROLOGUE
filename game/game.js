export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: "main" });
  }
  preload() {
    this.load.image('pigmalion','./resources/sprites/pigmalion.png')
  };

  create() {
   this.t=this.add.text(10, 10, "¡Hola, mundo!", { fontColor: 0xffff00 });

   this.player= this.add.sprite(300,300,'pigmalion');

    this.w= this.input.keyboard.addKey('W');
    this.a=this.input.keyboard.addKey('A');
    this.s=this.input.keyboard.addKey('S');
    this.d=this.input.keyboard.addKey('D');

    // this.cameras.main.startFollow(this.player);
    
  }

  update(time, delta) {
   if(this.w.isDown) this.player.y-=4;
   if(this.a.isDown) this.player.x-=4;
   if(this.s.isDown) this.player.y+=4;
   if(this.d.isDown) this.player.x+=4;
   
  
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
